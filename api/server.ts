type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    // In Vercel Functions, `src/*` isn't available at runtime.
    // Import the SSR bundle produced by `vite build` instead.
    const serverUrl = new URL("../dist/server/server.js", import.meta.url);
    serverEntryPromise = import(serverUrl.href).then((m) => {
      const mod = m as { default?: ServerEntry };
      if (!mod.default) {
        throw new Error("SSR bundle did not export a default server entry");
      }
      return mod.default;
    });
  }
  return serverEntryPromise;
}

function getOrigin(req: { headers?: Record<string, unknown> }): string {
  const host =
    (typeof req.headers?.["x-forwarded-host"] === "string" && req.headers["x-forwarded-host"]) ||
    (typeof req.headers?.host === "string" && req.headers.host) ||
    "localhost";
  const proto =
    (typeof req.headers?.["x-forwarded-proto"] === "string" && req.headers["x-forwarded-proto"]) ||
    "https";
  return `${proto}://${host}`;
}

async function readBody(req: { method?: string; on?: Function }): Promise<Uint8Array | undefined> {
  const method = (req.method ?? "GET").toUpperCase();
  if (method === "GET" || method === "HEAD") return undefined;

  const chunks: Buffer[] = [];
  await new Promise<void>((resolve, reject) => {
    (req as any).on("data", (c: Buffer) => chunks.push(c));
    (req as any).on("end", () => resolve());
    (req as any).on("error", (e: unknown) => reject(e));
  });
  return chunks.length ? Buffer.concat(chunks) : undefined;
}

export default async function handler(req: any, res: any) {
  try {
    const url = new URL(req.url ?? "/", getOrigin(req));

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers ?? {})) {
      if (value == null) continue;
      if (Array.isArray(value)) headers.set(key, value.join(","));
      else headers.set(key, String(value));
    }

    const body = await readBody(req);
    const request = new Request(url, {
      method: req.method,
      headers,
      body: body as any,
    });

    const server = await getServerEntry();
    const response = await server.fetch(request, process.env, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const ab = await response.arrayBuffer();
    res.end(Buffer.from(ab));
  } catch (error) {
    console.error("SSR function crashed", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("SSR function crashed. Check Vercel logs for stack trace.");
  }
}


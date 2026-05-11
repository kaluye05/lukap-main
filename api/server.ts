import server from "../src/server";

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

  const response = await server.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  const ab = await response.arrayBuffer();
  res.end(Buffer.from(ab));
}


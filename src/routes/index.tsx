import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Bot, Server, Plug, Sparkles, Clock, Shield, Zap, Check, Crown, Rocket, Tag, Mail, Terminal } from "lucide-react";

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className ?? ""}`}>
      <span>luka</span>
      <span className="text-primary">.</span>
    </span>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Luka — Discord Bots & Servers for Sale" },
      { name: "description", content: "Premium custom Discord bots and ready-to-launch server templates by Luka. Built fast, built to last." },
    ],
  }),
});

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 127.14 96.36" className={className} fill="currentColor" aria-hidden="true">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

const stack = ["discord.js", "JavaScript", "Node.js", "PostgreSQL", "Redis", "REST APIs", "Webhooks", "Docker", "Cloudflare"];

function Index() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-primary/30 overflow-x-hidden relative">
      {/* Subtle ambient grid + vignette */}
      <div aria-hidden className="fixed inset-0 -z-10 grid-bg opacity-60" />
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 0%, oklch(0.5 0.18 210 / 0.18), transparent 60%)" }} />

      {/* Nav — full bleed, dev terminal vibe */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <a href="#" className="group inline-flex items-baseline gap-1 text-lg">
            <span className="font-mono text-primary text-xs translate-y-[-2px]">[</span>
            <Wordmark className="text-lg" />
            <span className="font-mono text-primary text-xs translate-y-[-2px]">]</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {[
              ["Shop", "#shop"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="relative hover:text-primary transition group">
                <span className="text-primary mr-1 opacity-0 group-hover:opacity-100 transition">/</span>{label}
              </a>
            ))}
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 border border-border hover:border-primary/60 hover:text-primary px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition">
            initiate_project
            <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>
      </header>

      {/* Hero — asymmetric editorial grid */}
      <section className="relative pt-36 md:pt-44 pb-28 px-6">
        {/* Vertical signature rail */}
        <div aria-hidden className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 [writing-mode:vertical-rl] rotate-180">
          est · 2026 — luka.systems
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Headline column */}
          <div className="lg:col-span-8 animate-fade-up">
            <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="size-1.5 bg-primary animate-pulse" />
              <span>online · accepting briefs</span>
              <span className="w-8 h-px bg-border" />
              <span className="text-primary">v3</span>
            </div>

            <h1 className="font-semibold tracking-[-0.045em] leading-[0.85]">
              <span className="block text-[clamp(3rem,11vw,9.5rem)]">
                <span className="text-muted-foreground/40 font-mono mr-3 align-top text-[0.45em]">01/</span>
                I build
              </span>
              <span className="block text-[clamp(3rem,11vw,9.5rem)] -mt-2 md:-mt-4">
                <span className="text-primary font-mono tracking-tighter lowercase">discord</span>
                <span className="text-foreground">.</span>
              </span>
              <span className="block text-[clamp(3rem,11vw,9.5rem)] text-muted-foreground/30 -mt-2 md:-mt-4">
                bots — servers<span className="text-primary">.</span>
              </span>
            </h1>

            <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Twenty, from Belgrade. I engineer the bots, server templates, moderation pipelines and Discord-native infrastructure communities actually depend on.
            </p>
          </div>

          {/* Terminal panel */}
          <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="border border-border bg-card/40 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-border/60 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Terminal className="size-3" /> luka@shop ~ </span>
                <span className="flex gap-1.5">
                  <span className="size-1.5 rounded-full bg-muted-foreground/40" />
                  <span className="size-1.5 rounded-full bg-muted-foreground/40" />
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5">
                <p><span className="text-muted-foreground">$</span> <span className="text-primary">whoami</span></p>
                <p className="pl-4 text-muted-foreground">→ luka · discord systems engineer</p>
                <p><span className="text-muted-foreground">$</span> <span className="text-primary">cat</span> stack.json</p>
                <p className="pl-4 text-muted-foreground">→ ts · node · postgres · redis</p>
                <p><span className="text-muted-foreground">$</span> <span className="text-primary">status</span></p>
                <p className="pl-4"><span className="text-primary">●</span> <span className="text-foreground">accepting</span> · reply &lt; 2h</p>
              </div>
              <div className="grid grid-cols-2 border-t border-border/60">
                <a href="#shop" className="group inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition">
                  shop
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-4 py-3.5 border-l border-border/60 font-mono text-[11px] uppercase tracking-[0.2em] hover:text-primary transition">
                  brief_me
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom system bar */}
        <div className="max-w-7xl mx-auto mt-20 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          <span>[ sys ] · build_007 · cyan_protocol</span>
          <span className="hidden sm:inline">latency 12ms · uptime 99.9%</span>
          <span>scroll ↓</span>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 border-t border-border/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
          <Stat n="3+" label="Years building bots" />
          <Stat n="40+" label="Projects shipped" />
          <Stat n="99.9%" label="Avg uptime" />
          <Stat n="< 2h" label="Reply time" />
        </div>
      </section>

      {/* Marquee — tech stack */}
      <section className="py-12 border-t border-border/40 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Tech I use daily</p>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-12 px-6">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="text-xl md:text-2xl font-medium text-muted-foreground/70 whitespace-nowrap">
                {s} <span className="text-primary">·</span>
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <p className="text-sm text-primary">About</p>
          <div className="md:col-span-2 space-y-6">
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
              I've been working in the Discord ecosystem for years — building bots, configuring servers, and helping communities run smoothly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about details: clean embeds, snappy commands, and code that doesn't break at 3AM. Whether it's a small utility bot or a full community setup, I treat every project like it's my own.
            </p>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="px-6 py-24 border-t border-border/40 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-mono text-primary mb-3 inline-flex items-center gap-2"><Tag className="size-3.5" /> // shop</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Bots & servers, ready to go.</h2>
              <p className="mt-3 text-muted-foreground max-w-lg">Buy a polished, production-ready product — or pick a tier and I'll tailor it to you.</p>
            </div>
            <div className="text-xs text-muted-foreground">Prices in USD · Pay via Discord</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ProductCard
              icon={<Bot className="size-5" />}
              name="Starter Bot"
              price="$25"
              tag="Bot"
              features={["Moderation + welcome", "Custom embeds", "Slash commands", "1 week support"]}
            />
            <ProductCard
              icon={<Rocket className="size-5" />}
              name="Pro Bot"
              price="$80"
              tag="Bot"
              highlight
              features={["Everything in Starter", "Tickets / economy / logs", "Database (Postgres)", "Hosting setup", "1 month support"]}
            />
            <ProductCard
              icon={<Crown className="size-5" />}
              name="Custom Bot"
              price="from $150"
              tag="Bot"
              features={["Built around your idea", "Dashboard optional", "Webhooks & APIs", "Long-term support"]}
            />
            <ProductCard
              icon={<Server className="size-5" />}
              name="Community Server"
              price="$15"
              tag="Server"
              features={["Roles, channels, perms", "Welcome + rules flow", "Cute aesthetic pack", "Instant delivery"]}
            />
            <ProductCard
              icon={<Server className="size-5" />}
              name="Gaming / eSports Server"
              price="$25"
              tag="Server"
              features={["Team & scrim channels", "LFG & tournament setup", "Bot integrations", "Custom branding"]}
            />
            <ProductCard
              icon={<Crown className="size-5" />}
              name="Premium Custom Server"
              price="from $60"
              tag="Server"
              highlight
              features={["Designed for your brand", "Full bot suite included", "Onboarding flow", "30 day tweaks"]}
            />
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-primary" /> Money-back if not delivered as promised.
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono text-primary mb-3">// services</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Need something special?</h2>
            <p className="mt-3 text-muted-foreground max-w-lg">Beyond the shop — fully custom builds tailored to your community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <ServiceCard icon={<Bot className="size-5" />} title="Custom Discord Bots" desc="Tailored bots built around your community's needs — moderation, economy, tickets, anything." />
            <ServiceCard icon={<Server className="size-5" />} title="Server Setup & Design" desc="Fully structured servers with roles, channels, permissions, and a polished look." />
            <ServiceCard icon={<Plug className="size-5" />} title="Integrations & APIs" desc="Connecting Discord to external services, webhooks, dashboards, and databases." />
          </div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="px-6 py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono text-primary mb-3">// why_me</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Built different.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Feature icon={<Zap />} title="Fast turnaround" desc="Most small jobs done in days, not weeks. No ghosting." />
            <Feature icon={<Shield />} title="Built to last" desc="Clean code, proper error handling, and docs you can actually read." />
            <Feature icon={<Sparkles />} title="Polish included" desc="Embeds, slash commands, and UX that feel native to Discord." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 border-t border-border/40">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs font-mono text-primary mb-3">// faq</p>
            <h2 className="text-4xl font-semibold tracking-tight">Common questions.</h2>
          </div>
          <div className="md:col-span-2 divide-y divide-border/40 border-y border-border/40">
            <Faq q="How does buying work?" a="Pick a product, message me on Discord, pay (PayPal / crypto / cards via invoice), and I deliver — usually within 24h for in-stock items." />
            <Faq q="Do you offer hosting?" a="Yes — I can host your bot on reliable infrastructure with monitoring and uptime, or hand it off and help you self-host." />
            <Faq q="Can I customize a shop product?" a="Of course. Pick a tier, tell me what to change, and I'll quote the small extra cost (usually $5–30)." />
            <Faq q="What about updates and refunds?" a="Every product comes with included support. If something isn't delivered as promised, full refund — no drama." />
          </div>
        </div>
      </section>

      {/* Contact — terminal handshake */}
      <section id="contact" className="relative px-6 py-32 border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[600px] rounded-full blur-3xl" style={{ background: "var(--gradient-primary)", opacity: 0.1 }} />
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono text-primary mb-4">// 06 — handshake</p>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[0.9]">
              Let's <span className="text-primary font-mono lowercase tracking-tighter">talk</span>.<br />
              <span className="text-muted-foreground/50">No forms. No fluff.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              Drop into the Discord or send an email. I usually reply within a couple of hours — and quote within the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Clock className="size-3" /> &lt; 2h reply</span>
              <span className="inline-flex items-center gap-2"><span className="size-1.5 bg-primary rounded-full animate-pulse" /> online</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-border bg-card/40 backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Terminal className="size-3" /> contact.sh</span>
                <span>2 channels</span>
              </div>
              <a
                href="https://discord.gg/fjdrYanb"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-6 border-b border-border/60 hover:bg-primary/5 transition"
              >
                <div className="flex items-center gap-5">
                  <DiscordIcon className="size-6 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">primary</div>
                    <div className="text-lg font-medium">Discord — <span className="text-muted-foreground">discord.gg/fjdrYanb</span></div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
              <a
                href="mailto:support@lukap.shop"
                className="group flex items-center justify-between gap-4 px-6 py-6 hover:bg-primary/5 transition"
              >
                <div className="flex items-center gap-5">
                  <Mail className="size-6 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">email</div>
                    <div className="text-lg font-medium">support<span className="text-primary">@</span>lukap.shop</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-border/40 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="inline-flex items-center gap-2">
            <span className="text-primary">[</span>
            <Wordmark />
            <span className="text-primary">]</span>
            <span>· © 2026 · Belgrade RS</span>
          </div>
          <p>discord engineer · worldwide</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="py-8 px-4 text-center">
      <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
        {n}
      </div>
      <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group relative rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/50 transition overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle at top right, oklch(0.85 0.15 210 / 0.15), transparent 60%)" }} />
      <div className="relative">
        <div className="size-10 rounded-xl mb-5 flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          {icon}
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/40 p-6 hover:bg-card transition">
      <div className="size-9 rounded-lg flex items-center justify-center text-primary border border-primary/30 bg-primary/10 mb-4 [&>svg]:size-4">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-5">
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <span className="font-medium pr-4">{q}</span>
        <span className="size-6 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
    </details>
  );
}

function ProductCard({ icon, name, price, tag, features, highlight }: { icon: React.ReactNode; name: string; price: string; tag: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`group relative rounded-2xl border p-6 flex flex-col overflow-hidden transition ${highlight ? "border-primary/60 bg-card" : "border-border/60 bg-card/40 hover:border-primary/40"}`} style={highlight ? { boxShadow: "var(--shadow-glow)" } : undefined}>
      {highlight && (
        <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
          Popular
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: "radial-gradient(circle at top right, oklch(0.85 0.15 210 / 0.15), transparent 60%)" }} />
      <div className="relative flex items-center gap-3 mb-4">
        <div className="size-10 rounded-xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          {icon}
        </div>
        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border/60 text-muted-foreground">{tag}</span>
      </div>
      <h3 className="relative font-medium text-lg">{name}</h3>
      <div className="relative mt-2 mb-5">
        <span className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>{price}</span>
      </div>
      <ul className="relative space-y-2 mb-6 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-primary shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <a href="https://discord.gg/fjdrYanb" target="_blank" rel="noreferrer" className={`relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition ${highlight ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-card"}`}>
        Buy on Discord
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}

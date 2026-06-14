import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Sparkles,
  Cloud,
  Blocks,
  Palette,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Eye,
  Handshake,
} from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Counter } from "@/components/site/Counter";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITTS — Engineering Technology That Accelerates Growth" },
      {
        name: "description",
        content:
          "ITTS builds scalable software, mobile apps, AI, cloud infrastructure and blockchain platforms for ambitious teams.",
      },
      { property: "og:title", content: "ITTS — Modern Software Engineering" },
      {
        property: "og:description",
        content: "Custom software · AI · Mobile · Cloud · Web3 — engineered to scale.",
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  { icon: Code2, title: "Software Engineering", desc: "Enterprise-grade platforms, APIs and SaaS products built to scale.", tint: "from-violet to-magenta" },
  { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform apps with delightful, fast UX.", tint: "from-cyan to-violet" },
  { icon: Sparkles, title: "AI Solutions", desc: "Agents, RAG, automation and LLM integration that ship to production.", tint: "from-magenta to-cyan" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP, CI/CD and infrastructure as code.", tint: "from-cyan to-magenta" },
  { icon: Blocks, title: "Blockchain", desc: "Smart contracts, tokenization and Web3 platforms.", tint: "from-violet to-cyan" },
  { icon: Palette, title: "Product Design", desc: "Research-driven UX, design systems and rapid prototyping.", tint: "from-magenta to-violet" },
];

const trustPillars = [
  {
    headline: "16+",
    sub: "yrs",
    label: "Combined engineering experience across the founding team.",
  },
  {
    headline: "Senior-led",
    label: "Every engagement is led and built by senior engineers — no offshoring layers.",
  },
  {
    headline: "1 business day",
    label: "Typical response time on project inquiries, with a concrete next step.",
  },
  {
    headline: "Hyderabad, India",
    label: "Headquartered in Telangana · delivering for clients across India and abroad.",
  },
];

const reasons = [
  { icon: Layers, title: "Business-focused delivery", desc: "Every sprint maps to a measurable outcome — revenue, retention or runway." },
  { icon: ShieldCheck, title: "Scalable architecture", desc: "Systems designed for the next 10x — not just the current load." },
  { icon: Eye, title: "Transparent execution", desc: "Real dashboards, weekly demos, no black boxes." },
  { icon: Handshake, title: "Long-term partnership", desc: "Teams that stay, learn your domain, and compound value over years." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-16 pb-24 lg:pb-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-muted-foreground">Now booking Q1 engagements</span>
                <span className="text-foreground/40">·</span>
                <span className="text-foreground/80">Global remote teams</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[5rem] leading-[1.02] font-black tracking-tight"
              >
                Engineering technology that{" "}
                <span className="text-gradient">accelerates business growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground text-balance"
              >
                ITTS builds scalable software platforms, mobile applications, AI-powered solutions,
                cloud infrastructure and enterprise systems for ambitious businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 shadow-[0_14px_40px_-12px_oklch(0.72_0.21_295_/_0.75)] hover:shadow-[0_20px_50px_-10px_oklch(0.72_0.21_295_/_0.95)] transition"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
                >
                  View services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* tech marquee */}
              <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="flex gap-10 animate-marquee w-max text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                  {[...Array(2)].map((_, k) => (
                    <div key={k} className="flex gap-10 pr-10">
                      {["React", "Next.js", "Node", "AWS", "Azure", ".NET", "Python", "PostgreSQL", "Solidity", "Flutter", "React Native", "Kubernetes"].map((t) => (
                        <span key={t + k}>{t}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="glass-strong rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
              {metrics.map((m) => (
                <div key={m.label} className="text-center md:text-left">
                  <div className="font-display text-4xl sm:text-5xl font-black text-gradient">
                    <Counter to={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Core capabilities</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">
              A full-stack engineering partner for every stage of your roadmap.
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <motion.div key={c.title} variants={item} className="group relative">
                <div className="glass rounded-3xl p-7 h-full transition-all hover:bg-white/[0.07] hover:-translate-y-1 hover:ring-glow">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.tint} ring-1 ring-white/20 shadow-lg`}>
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-6 inline-flex items-center text-xs uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition">
                    Learn more <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured work</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight max-w-2xl">
                Selected platforms shipped with our partners.
              </h2>
            </div>
            <Link to="/services" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-1">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            <CaseCard
              tag="Enterprise · SaaS"
              title="Enterprise Portal"
              desc="Unified ops portal for a Fortune 500 retailer — 14 systems, one interface."
              gradient="from-violet/40 via-magenta/30 to-transparent"
              mock={<PortalMock />}
            />
            <CaseCard
              tag="Fintech"
              title="Fintech Platform"
              desc="Regulated payments and ledgering platform processing $2.4B annually."
              gradient="from-cyan/40 via-violet/30 to-transparent"
              mock={<FintechMock />}
            />
            <CaseCard
              tag="AI · Operations"
              title="AI Operations Dashboard"
              desc="LLM-powered observability copilot reducing MTTR by 62%."
              gradient="from-magenta/40 via-cyan/30 to-transparent"
              mock={<AIMock />}
            />
          </Stagger>
        </div>
      </section>

      {/* WHY ITTS */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why ITTS</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">
                Businesses choose us when the work has to <span className="text-gradient-violet">actually ship</span>.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                We're a senior team of engineers, designers and strategists. No layers. No theatre. Just outcomes.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.title} className="glass rounded-2xl p-6">
                  <r.icon className="h-5 w-5 text-cyan" />
                  <div className="mt-4 font-display font-bold">{r.title}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-16 ring-glow">
              <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-4xl sm:text-6xl font-black tracking-tight max-w-3xl">
                  Ready to build your next <span className="text-gradient">digital product?</span>
                </h3>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Tell us about your goals. We'll respond within one business day with a concrete plan.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20"
                  >
                    Schedule consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-medium"
                  >
                    Meet the team
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CaseCard({
  tag,
  title,
  desc,
  gradient,
  mock,
}: {
  tag: string;
  title: string;
  desc: string;
  gradient: string;
  mock: React.ReactNode;
}) {
  return (
    <motion.div variants={item} className="group relative">
      <div className="glass rounded-3xl overflow-hidden h-full transition-all hover:-translate-y-1 hover:ring-glow">
        <div className={`relative h-56 bg-gradient-to-br ${gradient} border-b border-white/5 overflow-hidden`}>
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 p-5">{mock}</div>
        </div>
        <div className="p-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{tag}</div>
          <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PortalMock() {
  return (
    <div className="h-full w-full glass-strong rounded-2xl p-3">
      <div className="flex gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-white/30" />
        <div className="h-2 w-2 rounded-full bg-white/20" />
        <div className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="flex gap-2 h-[calc(100%-1.25rem)]">
        <div className="w-1/4 rounded-lg bg-white/5 p-2 space-y-1.5">
          {[1,2,3,4].map(i => <div key={i} className="h-2 rounded bg-white/10" />)}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-violet/20 p-2"><div className="h-2 w-1/2 rounded bg-white/30" /><div className="mt-2 h-6 rounded bg-white/10" /></div>
          <div className="rounded-lg bg-cyan/20 p-2"><div className="h-2 w-1/3 rounded bg-white/30" /><div className="mt-2 h-6 rounded bg-white/10" /></div>
          <div className="col-span-2 rounded-lg bg-white/5 p-2"><div className="h-2 w-1/4 rounded bg-white/20" /><div className="mt-2 h-10 rounded bg-gradient-to-r from-violet/40 to-cyan/30" /></div>
        </div>
      </div>
    </div>
  );
}

function FintechMock() {
  return (
    <div className="h-full w-full glass-strong rounded-2xl p-3 flex flex-col">
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Volume · 30d</div>
      <div className="font-display text-2xl font-black text-gradient">$2.41B</div>
      <div className="mt-1 flex-1 relative">
        <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full">
          {Array.from({length: 20}).map((_,i)=>(
            <rect key={i} x={i*10+2} y={80 - (20 + Math.sin(i)*15 + Math.random()*30)} width="6" height={20 + Math.sin(i)*15 + Math.random()*30} rx="1.5" fill="url(#bargrad)" />
          ))}
          <defs>
            <linearGradient id="bargrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.18 210)" />
              <stop offset="100%" stopColor="oklch(0.72 0.21 295 / 0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function AIMock() {
  return (
    <div className="h-full w-full glass-strong rounded-2xl p-3">
      <div className="flex items-center gap-2 text-[10px]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-muted-foreground">incident · resolving</span>
      </div>
      <div className="mt-2 rounded-lg bg-violet/15 p-2 text-[10px] leading-snug">
        Detected p95 latency spike in <span className="text-cyan">checkout-svc</span>. Rolling back deploy <span className="font-mono">a8f3e2</span>…
      </div>
      <div className="mt-2 space-y-1">
        {["analyze logs", "correlate metrics", "propose fix", "execute rollback"].map((s,i)=>(
          <div key={s} className="flex items-center gap-2 text-[10px]">
            <div className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet to-cyan" style={{width: `${(i+1)*25}%`}} />
            </div>
            <span className="text-muted-foreground w-20 text-right">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

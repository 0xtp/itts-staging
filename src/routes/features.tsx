import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Gauge,
  ServerCog,
  Users,
  Briefcase,
  Search,
  Rocket,
  HeadphonesIcon,
  Activity,
  Wrench,
  RefreshCw,
  Brain,
  Workflow,
  Boxes,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — What Sets ITTS Apart" },
      {
        name: "description",
        content:
          "Engineering excellence, product thinking, reliability and innovation — the four pillars behind every ITTS engagement.",
      },
      { property: "og:title", content: "ITTS — Features & Differentiators" },
    ],
  }),
  component: FeaturesPage,
});

const pillars = [
  {
    eyebrow: "01 · Engineering Excellence",
    title: "Built on enterprise-grade foundations.",
    desc: "We architect software that holds up under real load, real audits and real users.",
    items: [
      { icon: ServerCog, title: "Enterprise architecture", desc: "Domain-driven, modular monoliths and microservices designed for clarity." },
      { icon: Lock, title: "Secure coding practices", desc: "OWASP-aligned reviews, threat modelling and SOC-ready defaults." },
      { icon: Boxes, title: "Scalable infrastructure", desc: "Multi-region, autoscaling, observable from day one." },
      { icon: Gauge, title: "Performance optimization", desc: "Sub-100ms p95 budgets, instrumented and held." },
    ],
  },
  {
    eyebrow: "02 · Product Thinking",
    title: "We build the right thing, then build it right.",
    desc: "Engineering velocity matters only when pointed at the problems worth solving.",
    items: [
      { icon: Users, title: "User-centric design", desc: "Continuous discovery loops with real users, not assumptions." },
      { icon: Briefcase, title: "Business-first solutions", desc: "Roadmaps tied to revenue, retention or efficiency outcomes." },
      { icon: Search, title: "Research-driven", desc: "Quant + qual research that compounds across sprints." },
      { icon: Rocket, title: "Rapid prototyping", desc: "From sketch to working spike in days, not quarters." },
    ],
  },
  {
    eyebrow: "03 · Reliability",
    title: "Software that keeps working — quietly.",
    desc: "What happens after launch defines the product. We're built for that part too.",
    items: [
      { icon: HeadphonesIcon, title: "Priority support", desc: "Dedicated support windows and on-call coverage for active engagements." },
      { icon: Activity, title: "Monitoring", desc: "End-to-end observability, SLOs and proactive alerting." },
      { icon: Wrench, title: "Maintenance", desc: "Dependency hygiene, patching and tech-debt budgets." },
      { icon: RefreshCw, title: "Continuous improvement", desc: "Every quarter raises a measurable bar." },
    ],
  },
  {
    eyebrow: "04 · Innovation",
    title: "The new stack, applied with judgment.",
    desc: "We bring frontier tech into production — without the hype tax.",
    items: [
      { icon: Brain, title: "AI integration", desc: "LLMs, RAG, agents and evals embedded into your workflows." },
      { icon: Workflow, title: "Automation", desc: "Internal tools and bots that delete repetitive work." },
      { icon: Boxes, title: "Blockchain", desc: "Smart contracts, tokenization and on-chain settlement." },
      { icon: Cloud, title: "Cloud-native engineering", desc: "Containers, IaC, serverless and edge compute." },
    ],
  },
];

const timeline = [
  { phase: "Discover", desc: "Stakeholder interviews, research, success metrics, technical due diligence." },
  { phase: "Design", desc: "Information architecture, UX flows, system design, prototypes." },
  { phase: "Develop", desc: "Two-week iterations, demoed live. Tests, code reviews, security checks." },
  { phase: "Deploy", desc: "Blue/green release, telemetry, runbooks and on-call handover." },
  { phase: "Scale", desc: "Performance, cost and reliability tuned to the next 10x." },
];

function FeaturesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Features</div>
            <h1 className="mt-4 font-display text-[2.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tight leading-[1.02] max-w-5xl">
              The difference is in <span className="text-gradient">how we build</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground">
              Four practices, deliberately compounded — engineering, product, reliability and innovation.
              This is how ITTS ships software that businesses can actually depend on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      {pillars.map((p, idx) => (
        <section key={p.eyebrow} className="relative mt-12 sm:mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan">{p.eyebrow}</div>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">{p.title}</h2>
                <p className="mt-5 text-muted-foreground text-lg">{p.desc}</p>
              </div>
              <Stagger className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {p.items.map((it) => (
                  <motion.div variants={item} key={it.title} className="glass rounded-2xl p-6 hover:bg-white/[0.07] hover:-translate-y-0.5 transition">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 ring-1 ring-white/10">
                      <it.icon className="h-4.5 w-4.5 text-cyan" />
                    </div>
                    <div className="mt-5 font-display font-bold">{it.title}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                  </motion.div>
                ))}
              </Stagger>
            </Reveal>
          </div>
          {idx < pillars.length - 1 && (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
              <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
          )}
        </section>
      ))}

      {/* TIMELINE */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagement model</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">
              A modern delivery timeline — predictable, measurable, fast.
            </h2>
          </Reveal>

          <Stagger className="mt-14 relative">
            <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-violet/40 via-cyan/30 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.phase}
                  variants={item}
                  className={`relative grid grid-cols-[2rem_1fr] sm:grid-cols-2 gap-6 items-center ${
                    i % 2 === 0 ? "sm:[&>*:first-child]:order-1" : ""
                  }`}
                >
                  <div className="hidden sm:block" />
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-violet to-cyan ring-4 ring-background" />
                  <div className="col-span-2 sm:col-span-1 pl-10 sm:pl-0 sm:pr-10">
                    <div className="glass-strong rounded-2xl p-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Phase 0{i + 1}</div>
                      <div className="mt-2 font-display text-2xl font-bold">{t.phase}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="glass-strong rounded-[2rem] p-10 sm:p-16 ring-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-black">See the practice applied to your roadmap.</h3>
              <p className="mt-3 text-muted-foreground">A 30-minute discovery call. No deck, no fluff.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20">
              Book a call <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

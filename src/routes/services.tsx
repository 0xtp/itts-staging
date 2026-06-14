import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Sparkles,
  Cloud,
  Blocks,
  Palette,
  Users,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Software, AI, Mobile, Cloud, Blockchain | ITTS" },
      {
        name: "description",
        content:
          "Custom software, web, mobile, AI, cloud, blockchain, UI/UX and dedicated engineering teams — delivered by ITTS.",
      },
      { property: "og:title", content: "ITTS — Services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "custom-software",
    icon: Code2,
    eyebrow: "01",
    title: "Custom Software Development",
    desc: "End-to-end product engineering for the systems that run your business — built for your domain, not boxed software.",
    tags: ["Enterprise applications", "Business systems", "Workflow automation", "SaaS products"],
    tint: "from-violet/40 to-magenta/20",
  },
  {
    id: "web",
    icon: Globe,
    eyebrow: "02",
    title: "Web Development",
    desc: "Fast, accessible, search-friendly web platforms built on the modern React stack.",
    tags: ["React", "Next.js", "Node.js", "Progressive Web Apps"],
    tint: "from-cyan/40 to-violet/20",
  },
  {
    id: "mobile",
    icon: Smartphone,
    eyebrow: "03",
    title: "Mobile Development",
    desc: "Native-quality iOS and Android experiences from a single, maintainable codebase — or fully native when it matters.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    tint: "from-magenta/40 to-cyan/20",
  },
  {
    id: "ai",
    icon: Sparkles,
    eyebrow: "04",
    title: "AI Solutions",
    desc: "Production-grade AI: agents, retrieval, evals, and the unglamorous pipework that makes models reliable.",
    tags: ["AI Agents", "Chatbots", "Knowledge systems", "Workflow automation", "LLM integration"],
    tint: "from-violet/40 to-cyan/20",
  },
  {
    id: "cloud",
    icon: Cloud,
    eyebrow: "05",
    title: "Cloud & DevOps",
    desc: "Infrastructure that scales predictably and costs what it should. Multi-cloud, fully observable.",
    tags: ["AWS", "Azure", "Google Cloud", "CI/CD", "Infrastructure automation"],
    tint: "from-cyan/40 to-magenta/20",
  },
  {
    id: "blockchain",
    icon: Blocks,
    eyebrow: "06",
    title: "Blockchain Development",
    desc: "Web3 platforms designed by engineers who treat smart contracts like the financial software they are.",
    tags: ["Tokenization platforms", "Smart contracts", "Web3 applications", "Digital asset platforms"],
    tint: "from-magenta/40 to-violet/20",
  },
  {
    id: "design",
    icon: Palette,
    eyebrow: "07",
    title: "UI/UX Design",
    desc: "Design that ships — systematized, accessible, and grounded in research.",
    tags: ["Product design", "Design systems", "User research", "Prototyping"],
    tint: "from-violet/40 to-magenta/20",
  },
  {
    id: "teams",
    icon: Users,
    eyebrow: "08",
    title: "Dedicated Teams",
    desc: "Senior, embedded squads that act like your in-house team — without the hiring overhead.",
    tags: ["Remote development teams", "Long-term partnerships", "Technology consulting"],
    tint: "from-cyan/40 to-violet/20",
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</div>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[1.02] max-w-5xl">
              Everything you need to <span className="text-gradient">ship modern software</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground">
              Eight focused practices, one accountable team. We engage as a fixed-scope partner,
              an embedded squad, or somewhere in between — whatever moves your roadmap fastest.
            </p>
          </Reveal>

          {/* index */}
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-2 glass rounded-2xl p-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                >
                  <span className="font-mono text-foreground/40 group-hover:text-cyan">{s.eyebrow}</span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20 sm:space-y-28">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <Reveal>
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs text-cyan">{s.eyebrow} / 08</div>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black tracking-tight">{s.title}</h2>
                  <p className="mt-5 text-lg text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
                  >
                    Discuss this service <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <div className={`relative overflow-hidden rounded-3xl glass-strong p-8 ring-glow`}>
                    <div className={`absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br ${s.tint} blur-3xl`} />
                    <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-magenta ring-1 ring-white/20">
                        <s.icon className="h-6 w-6 text-white" />
                      </div>
                      <Stagger className="mt-8 grid sm:grid-cols-2 gap-3">
                        {s.tags.map((t) => (
                          <motion.div
                            key={t}
                            variants={item}
                            className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/5 px-4 py-3"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-cyan" />
                            <span className="text-sm">{t}</span>
                          </motion.div>
                        ))}
                      </Stagger>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {i < services.length - 1 && (
              <div className="mt-20 sm:mt-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="glass-strong rounded-[2rem] p-10 sm:p-16 ring-glow text-center">
            <h3 className="font-display text-4xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto">
              Not sure which service fits? <span className="text-gradient">Start with a conversation.</span>
            </h3>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              We'll listen, ask sharp questions, and recommend the smallest engagement that gets you moving.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

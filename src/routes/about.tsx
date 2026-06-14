import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Crown, Lightbulb, Eye, Award, ArrowRight } from "lucide-react";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ITTS — Building Digital Solutions With Trust" },
      {
        name: "description",
        content:
          "ITTS is a modern software engineering company partnering with businesses on custom software, AI, cloud and digital transformation.",
      },
      { property: "og:title", content: "About ITTS" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "It's in our name. Earned in every line of code and every conversation." },
  { icon: Crown, title: "Ownership", desc: "We treat your business outcomes as our own." },
  { icon: Lightbulb, title: "Innovation", desc: "Frontier technology applied with judgment, not hype." },
  { icon: Eye, title: "Transparency", desc: "Real progress, real numbers, real conversations." },
  { icon: Award, title: "Excellence", desc: "Craft is the floor, not the ceiling." },
];

const culture = ["Problem solvers", "Engineers", "Designers", "Builders", "Strategic thinkers"];

const stack = [
  { group: "Frontend", techs: ["React", "Next.js", "TypeScript"] },
  { group: "Backend", techs: ["Node.js", ".NET", "Python"] },
  { group: "Cloud", techs: ["AWS", "Azure", "GCP"] },
  { group: "Data", techs: ["PostgreSQL", "MongoDB", "Redis"] },
  { group: "Web3", techs: ["Solidity", "Ethers.js", "Hardhat"] },
  { group: "Mobile", techs: ["React Native", "Flutter", "Swift"] },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About ITTS</div>
            <h1 className="mt-4 font-display text-[2.25rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tight leading-[1.02] max-w-5xl">
              Building digital solutions <span className="text-gradient">with trust.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground">
              ITTS is an independent software engineering company. We partner with founders, product
              leaders and enterprises to design, build and operate the platforms their business depends on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="relative mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan">Our Story</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">
                From web services to modern engineering partner.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground">
              <p>
                ITTS began as a software services company helping businesses establish their digital presence —
                websites, portals, and the early scaffolding of digital business.
              </p>
              <p>
                <span className="text-foreground">Today</span>, we deliver modern software products, enterprise
                solutions, AI applications, cloud infrastructure and digital transformation initiatives for
                organisations across industries.
              </p>
              <p>
                The original principle — <span className="text-gradient-violet font-semibold">trust</span> — still
                defines the work. Trust earned through outcomes, transparency, and engineering that holds up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-strong rounded-3xl p-10 h-full ring-glow">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan">Mission</div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-black">
                Enable organizations to <span className="text-gradient">innovate faster</span> through technology.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-10 h-full ring-glow">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan">Vision</div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-black">
                Become the trusted <span className="text-gradient-violet">global technology partner</span> for digital transformation.
              </h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Core Values</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight max-w-3xl">
              Five principles, applied daily.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <motion.div variants={item} key={v.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-magenta ring-1 ring-white/15">
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-5 font-display text-lg font-bold">{v.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CULTURE */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan">Team Culture</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight">
                A team that thinks in <span className="text-gradient">systems and outcomes</span>.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Curious operators who care about craft, business and the humans on the other side of the screen.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap gap-3">
              {culture.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-full glass-strong px-5 py-3 text-base font-display font-bold"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH ECOSYSTEM */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Technology Ecosystem</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight max-w-3xl">
              The stack we know <span className="text-gradient-violet">cold</span>.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.map((g) => (
              <motion.div variants={item} key={g.group} className="glass rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{g.group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.techs.map((t) => (
                    <span key={t} className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-20 sm:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="glass-strong rounded-[2rem] p-10 sm:p-16 ring-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <h3 className="font-display text-3xl sm:text-4xl font-black max-w-2xl">
              Want to know how we'd approach your problem?
            </h3>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

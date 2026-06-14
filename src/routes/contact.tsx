import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Users,
  UserPlus,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SITE } from "@/lib/site-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ITTS — Let's Build Something Extraordinary" },
      {
        name: "description",
        content:
          "Tell us about your project. We'll respond within one business day with a concrete plan.",
      },
      { property: "og:title", content: "Contact ITTS" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().min(1, "Pick one"),
  budget: z.string().min(1, "Pick one"),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const engagements = [
  { icon: Briefcase, title: "Fixed Cost Projects", desc: "Scoped scope, fixed price, predictable outcomes." },
  { icon: Users, title: "Dedicated Teams", desc: "Embedded squads acting as your in-house team." },
  { icon: UserPlus, title: "Staff Augmentation", desc: "Senior engineers added to your existing team." },
  { icon: Lightbulb, title: "Technology Consulting", desc: "Architecture, audits and strategic technical advice." },
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[1.02] max-w-5xl">
              Let's build something <span className="text-gradient">extraordinary.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg sm:text-xl text-muted-foreground">
              Share a few details about your project. We respond within one business day with a concrete plan and next steps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + CONTACT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="glass-strong rounded-3xl p-7 sm:p-10 ring-glow">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-16">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta ring-1 ring-white/20">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-black">Inquiry received.</h3>
                  <p className="mt-3 text-muted-foreground max-w-md">
                    Thanks for reaching out. A senior team member will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" error={errors.name} required />
                    <Field label="Company" name="company" error={errors.company} />
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Select
                      label="Project Type"
                      name="projectType"
                      error={errors.projectType}
                      options={[
                        "Custom Software",
                        "Web Application",
                        "Mobile Application",
                        "AI Solution",
                        "Cloud & DevOps",
                        "Blockchain / Web3",
                        "Design & UX",
                        "Dedicated Team",
                      ]}
                    />
                    <Select
                      label="Budget Range"
                      name="budget"
                      error={errors.budget}
                      options={[
                        "Under $25k",
                        "$25k – $75k",
                        "$75k – $200k",
                        "$200k – $500k",
                        "$500k+",
                        "Not sure yet",
                      ]}
                    />
                  </div>
                  <Textarea label="Message" name="message" error={errors.message} required />
                  <button
                    disabled={loading}
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Submit Project Inquiry"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 space-y-4">
            <ContactCard icon={Mail} label="Email" value={SITE.email} sub={SITE.emailAlt} href={`mailto:${SITE.email}`} />
            <ContactCard icon={Phone} label="Phone" value={SITE.phone} sub="Mon – Sat, business hours" href={SITE.phoneHref} />
            <ContactCard
              icon={MapPin}
              label="Office"
              value={SITE.address.line1}
              sub={`${SITE.address.line2} · ${SITE.address.line3}`}
            />
            <ContactCard icon={Clock} label="Hours" value={SITE.hours} sub="24/7 support for active engagements" />
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Engagement Models</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight max-w-3xl">
              Pick the model that fits your stage.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((e) => (
              <motion.div variants={item} key={e.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-magenta ring-1 ring-white/15">
                  <e.icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-5 font-display font-bold">{e.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MAP */}
      <section className="relative mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass-strong h-96 ring-glow">
              <MapBackdrop />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="glass-strong rounded-2xl p-5 max-w-sm">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-cyan">Headquarters</div>
                  <div className="mt-2 font-display text-xl font-bold">Global · Distributed</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Senior engineers across North America, Europe and APAC.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center glass-strong rounded-[2rem] p-12 sm:p-20 ring-glow">
            <h3 className="font-display text-4xl sm:text-6xl font-black max-w-3xl mx-auto leading-[1.05]">
              Book a free <span className="text-gradient">discovery call.</span>
            </h3>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              30 minutes. No deck. Sharp questions, honest answers, and a recommendation either way.
            </p>
            <a
              href="mailto:hello@itts.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-magenta px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20"
            >
              Reserve a slot <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label} {required && <span className="text-magenta">*</span>}
      </span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet/60 focus:border-violet/40 transition"
        placeholder={label}
      />
      {error && <span className="mt-1.5 block text-xs text-magenta">{error}</span>}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet/60 transition"
      >
        <option value="" disabled className="bg-background">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
      {error && <span className="mt-1.5 block text-xs text-magenta">{error}</span>}
    </label>
  );
}

function Textarea({ label, name, error, required }: { label: string; name: string; error?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label} {required && <span className="text-magenta">*</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet/60 focus:border-violet/40 transition resize-none"
        placeholder="Tell us about your project, timeline, and goals…"
      />
      {error && <span className="mt-1.5 block text-xs text-magenta">{error}</span>}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 flex gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-magenta ring-1 ring-white/15">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-display font-bold truncate">{value}</div>
        {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
      </div>
    </div>
  );
}

function MapBackdrop() {
  return (
    <svg viewBox="0 0 800 360" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mapBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="oklch(0.72 0.21 295 / 0.25)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="dot" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
          <stop offset="100%" stopColor="oklch(0.72 0.21 295)" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" fill="url(#mapBg)" />
      {/* dotted world */}
      {Array.from({ length: 36 }).map((_, r) =>
        Array.from({ length: 80 }).map((_, c) => {
          const x = c * 10 + 5;
          const y = r * 10 + 5;
          // crude continental mask
          const inside =
            (x > 60 && x < 230 && y > 70 && y < 230) ||
            (x > 300 && x < 460 && y > 80 && y < 220) ||
            (x > 500 && x < 720 && y > 90 && y < 240);
          if (!inside) return null;
          return <circle key={`${r}-${c}`} cx={x} cy={y} r="1.2" fill="oklch(1 0 0 / 0.18)" />;
        }),
      )}
      {/* connecting beams */}
      {[
        [150, 160, 380, 150],
        [380, 150, 620, 170],
        [620, 170, 150, 160],
      ].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#dot)" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
          <circle cx={x1} cy={y1} r="4" fill="url(#dot)" />
          <circle cx={x1} cy={y1} r="9" fill="oklch(0.72 0.21 295 / 0.25)" />
        </g>
      ))}
    </svg>
  );
}

import { motion } from "framer-motion";
import { Activity, Cpu, LineChart, Smartphone, Sparkles, Zap } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full">
      {/* Glow */}
      <div className="absolute inset-10 rounded-[2.5rem] bg-gradient-to-tr from-violet/40 via-magenta/20 to-cyan/30 blur-3xl opacity-70" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-4 top-6 bottom-10 glass-strong rounded-3xl p-5 ring-glow overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">itts.platform / live</div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "MRR", value: "$184k", up: "+12%" },
            { label: "Active users", value: "42,318", up: "+8.4%" },
            { label: "API calls", value: "9.2M", up: "+22%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="rounded-xl bg-white/5 p-3 border border-white/5"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-1 font-display text-base font-bold">{s.value}</div>
              <div className="text-[10px] text-emerald-300">{s.up}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/5 p-4 h-32 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5"><LineChart className="h-3 w-3" /> Revenue · 30d</span>
            <span>+38.2%</span>
          </div>
          <svg viewBox="0 0 300 80" className="mt-2 w-full h-20">
            <defs>
              <linearGradient id="gline" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
                <stop offset="100%" stopColor="oklch(0.72 0.21 295)" />
              </linearGradient>
              <linearGradient id="gfill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.21 295 / 0.35)" />
                <stop offset="100%" stopColor="oklch(0.72 0.21 295 / 0)" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              d="M0,60 C30,55 50,30 80,32 C110,34 130,55 160,45 C190,35 210,12 240,18 C270,24 285,15 300,10"
              fill="none"
              stroke="url(#gline)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0,60 C30,55 50,30 80,32 C110,34 130,55 160,45 C190,35 210,12 240,18 C270,24 285,15 300,10 L300,80 L0,80 Z"
              fill="url(#gfill)"
            />
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><Activity className="h-3 w-3 text-emerald-300" /> uptime 99.99%</span>
          <span className="flex items-center gap-1.5"><Zap className="h-3 w-3 text-amber-300" /> p95 84ms</span>
        </div>
      </motion.div>

      {/* Floating mobile */}
      <motion.div
        initial={{ y: 30, opacity: 0, rotate: -8 }}
        animate={{ y: 0, opacity: 1, rotate: -6 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="absolute -left-2 sm:left-2 bottom-2 w-32 sm:w-40 aspect-[9/16] glass-strong rounded-[1.6rem] p-3 ring-glow animate-float-slow"
      >
        <div className="flex items-center justify-between text-[9px] text-muted-foreground">
          <span>9:41</span>
          <Smartphone className="h-3 w-3" />
        </div>
        <div className="mt-2 rounded-xl bg-gradient-to-br from-violet/40 to-magenta/30 h-20 p-2">
          <div className="text-[9px] uppercase tracking-wider text-white/80">Balance</div>
          <div className="font-display text-base font-bold">$12,480.20</div>
        </div>
        <div className="mt-2 space-y-1.5">
          {[1,2,3].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
              <div className="h-4 w-4 rounded-md bg-cyan/40" />
              <div className="flex-1 h-1.5 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI node */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="absolute right-0 top-0 glass-strong rounded-2xl p-3 w-52 ring-glow animate-float-slow"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2">
          <span className="grid place-items-center h-7 w-7 rounded-lg bg-gradient-to-br from-cyan to-violet">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <div className="text-[11px] font-medium">AI Workflow</div>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {["Ingest", "Embed", "Reason", "Act"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              <span>{s}</span>
              <span className="ml-auto tabular-nums">{(i + 1) * 24}ms</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* API chip */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute right-6 bottom-8 glass-strong rounded-xl px-3 py-2 flex items-center gap-2"
      >
        <Cpu className="h-3.5 w-3.5 text-cyan" />
        <code className="text-[11px] font-mono text-foreground/90">200 · POST /v1/orchestrate</code>
      </motion.div>
    </div>
  );
}

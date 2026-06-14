export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-violet/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.5] mix-blend-overlay" />
    </div>
  );
}

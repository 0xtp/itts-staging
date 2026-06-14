type Props = { className?: string; showWordmark?: boolean };

// ITTS "Ascend" mark — upward chevron + dot in a gradient-bordered rounded square.
// A clean, modern mark signalling trust (solid frame), growth (chevron),
// and precision (single dot keystone).
export function Logo({ className = "", showWordmark = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="ittsRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
              <stop offset="50%" stopColor="oklch(0.72 0.21 295)" />
              <stop offset="100%" stopColor="oklch(0.7 0.24 340)" />
            </linearGradient>
            <linearGradient id="ittsStroke" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
              <stop offset="100%" stopColor="oklch(0.7 0.24 340)" />
            </linearGradient>
          </defs>
          {/* gradient frame */}
          <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="13" stroke="url(#ittsRing)" strokeWidth="2.5" />
          {/* dot */}
          <circle cx="24" cy="11.5" r="2.6" fill="url(#ittsStroke)" />
          {/* upward chevron */}
          <path
            d="M11 34 L24 19 L37 34"
            stroke="url(#ittsStroke)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* baseline tick */}
          <path d="M15 40.5 L33 40.5" stroke="url(#ittsStroke)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </svg>
      </span>
      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display text-[15px] font-bold tracking-tight">
            I Trust <span className="text-gradient">Techno</span>
          </div>
          <div className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
            Solutions · ITTS
          </div>
        </div>
      )}
    </div>
  );
}

type Props = { className?: string; showWordmark?: boolean };

export function Logo({ className = "", showWordmark = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-violet via-magenta to-cyan opacity-90" />
        <span className="absolute inset-[1.5px] rounded-[10.5px] bg-background" />
        <svg
          viewBox="0 0 40 40"
          className="relative h-6 w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="ittsLogoA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
              <stop offset="100%" stopColor="oklch(0.72 0.21 295)" />
            </linearGradient>
            <linearGradient id="ittsLogoB" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.7 0.24 340)" />
              <stop offset="100%" stopColor="oklch(0.72 0.21 295)" />
            </linearGradient>
          </defs>
          {/* Stylized 'i' dot + ascending bars forming a 'T' implication */}
          <circle cx="9" cy="8" r="3" fill="url(#ittsLogoA)" />
          <rect x="6.5" y="14" width="5" height="20" rx="2.5" fill="url(#ittsLogoA)" />
          <rect x="15" y="20" width="5" height="14" rx="2.5" fill="url(#ittsLogoB)" />
          <rect x="23.5" y="14" width="5" height="20" rx="2.5" fill="url(#ittsLogoB)" />
          <path
            d="M32 6 L34 10 L38 12 L34 14 L32 18 L30 14 L26 12 L30 10 Z"
            fill="oklch(0.99 0 0)"
            opacity="0.95"
          />
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

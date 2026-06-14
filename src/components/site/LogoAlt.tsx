type Props = { className?: string; showWordmark?: boolean };

// Alternate logo: hexagonal "iT" monogram badge
export function LogoAlt({ className = "", showWordmark = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 80 80" className="h-10 w-10" aria-hidden xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="altGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.16 220)" />
              <stop offset="50%" stopColor="oklch(0.72 0.21 295)" />
              <stop offset="100%" stopColor="oklch(0.7 0.24 340)" />
            </linearGradient>
          </defs>
          <polygon points="40,2 76,22 76,58 40,78 4,58 4,22" fill="url(#altGrad)" />
          <polygon points="40,7 71,25 71,55 40,73 9,55 9,25" fill="oklch(0.12 0.02 280)" />
          <g fill="white">
            <circle cx="28" cy="28" r="3.6" />
            <rect x="24.8" y="35" width="6.6" height="24" rx="3.3" />
            <rect x="36" y="33" width="22" height="6.4" rx="3.2" fill="url(#altGrad)" />
            <rect x="44" y="33" width="6.4" height="26" rx="3.2" fill="url(#altGrad)" />
          </g>
        </svg>
      </span>
      {showWordmark && (
        <div className="leading-tight">
          <div className="font-display text-[18px] font-black tracking-tight">ITTS</div>
          <div className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
            I Trust Techno Solutions
          </div>
        </div>
      )}
    </div>
  );
}

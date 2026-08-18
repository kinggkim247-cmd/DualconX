/**
 * DualconXLogoMark — the geometric X formed by two crossing paths.
 *
 * Evidence path  : cyan  (#36D1DC), top-left  → bottom-right  (╲)
 * Recovery path  : violet (#7C5CFF), top-right → bottom-left  (╱)
 *
 * At the intersection the violet path renders on top of cyan, creating
 * the visual metaphor: two tracks — investigation and restoration —
 * that cross at the moment of discovery.
 *
 * The four terminal dots anchor each endpoint, echoing the node style
 * of the evidence-grid background.
 */

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function DualconXLogoMark({ size = 28, className = "" }: LogoMarkProps) {
  const bg = "#070B12"; // matches --background

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-label="DualconX geometric mark"
      className={className}
    >
      {/* ── Evidence path (cyan) ─────────────────────────────────── */}
      {/* Full diagonal TL → BR */}
      <path
        d="M4 4 L24 24"
        stroke="#36D1DC"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* ── Recovery path (violet) — rendered in two halves so it  */}
      {/* appears to weave OVER the cyan at the intersection.       */}
      {/* Top half: TR → centre */}
      <path
        d="M24 4 L14 14"
        stroke={bg}
        strokeWidth="4"
        strokeLinecap="butt"
      />
      <path
        d="M24 4 L14 14"
        stroke="#7C5CFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Bottom half: centre → BL */}
      <path
        d="M14 14 L4 24"
        stroke={bg}
        strokeWidth="4"
        strokeLinecap="butt"
      />
      <path
        d="M14 14 L4 24"
        stroke="#7C5CFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* ── Terminal nodes ──────────────────────────────────────── */}
      {/* Cyan endpoints */}
      <circle cx="4"  cy="4"  r="2" fill="#36D1DC" />
      <circle cx="24" cy="24" r="2" fill="#36D1DC" />

      {/* Violet endpoints */}
      <circle cx="24" cy="4"  r="2" fill="#7C5CFF" />
      <circle cx="4"  cy="24" r="2" fill="#7C5CFF" />

      {/* Intersection highlight — subtle white centre dot */}
      <circle cx="14" cy="14" r="1.5" fill="white" opacity="0.18" />
    </svg>
  );
}

/** Full inline logo lockup: mark + wordmark + descriptor */
interface LogoLockupProps {
  markSize?: number;
  showDescriptor?: boolean;
  className?: string;
}

export function DualconXLogo({
  markSize = 28,
  showDescriptor = true,
  className = "",
}: LogoLockupProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <DualconXLogoMark size={markSize} />
      <div className="flex flex-col leading-none">
        <span className="font-headline text-xl font-bold tracking-tight">
          <span className="text-white">DUAL</span>
          <span className="text-primary">CON</span>
          <span className="text-accent">X</span>
        </span>
        {showDescriptor && (
          <span className="text-[8px] text-muted-foreground font-mono font-medium uppercase tracking-[0.18em] mt-1">
            Digital Forensics &amp; Recovery
          </span>
        )}
      </div>
    </div>
  );
}

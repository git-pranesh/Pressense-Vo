import Image from 'next/image'

interface VisualCardProps {
  /** Aspect ratio as a CSS value, e.g. "4 / 3" or "2 / 1". Defaults to "4 / 3". */
  aspectRatio?: string
  /** If provided, renders a real image. Without it, shows the CSS gradient placeholder. */
  imageUrl?: string
  imageAlt?: string
  /** Optional pill badge in the top-right corner */
  badge?: string
  /** Optional title overlay at the bottom-left */
  title?: string
  className?: string
  /** Extra inline styles on the outer container (e.g. minHeight, sticky) */
  style?: React.CSSProperties
}

/**
 * VisualCard — a placeholder-ready image card.
 *
 * Without `imageUrl` it renders a soft photographic-looking gradient placeholder
 * made from multiple overlapping radial-gradients plus a noise/grain layer.
 * Drop in `imageUrl` later without restructuring any parent layout.
 */
export function VisualCard({
  aspectRatio = '4 / 3',
  imageUrl,
  imageAlt = '',
  badge,
  title,
  className = '',
  style,
}: VisualCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden relative w-full ${className}`}
      style={{ aspectRatio, ...style }}
      aria-hidden={!title && !imageAlt ? 'true' : undefined}
    >
      {imageUrl ? (
        /* Real image — fills the container, crops to fit */
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        /* Gradient placeholder — multiple radial layers for a soft, photographic feel */
        <>
          {/* Base warm cream */}
          <div className="absolute inset-0" style={{ background: '#F5EDE0' }} />

          {/* Blob 1 — amber-orange, top-left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 20% 30%, #FFAD6F 0%, rgba(255,173,111,0.55) 40%, transparent 70%)',
              filter: 'blur(36px)',
            }}
          />

          {/* Blob 2 — coral-red, bottom-right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 55% at 78% 72%, #FF6B5B 0%, rgba(255,107,91,0.45) 38%, transparent 68%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Blob 3 — soft pink, centre-right — adds photographic midtone */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 50% at 62% 40%, rgba(251,182,155,0.6) 0%, transparent 65%)',
              filter: 'blur(28px)',
            }}
          />

          {/* Noise / grain layer — SVG feTurbulence, very low opacity */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <filter id="vc-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#vc-noise)" />
          </svg>

          {/* Subtle inner vignette to keep edges dark and centre bright */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 40% 45%, transparent 30%, rgba(43,24,10,0.08) 100%)',
            }}
          />
        </>
      )}

      {/* Optional badge — top-right pill */}
      {badge && (
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDEBE5]/80 text-[#1A0F06] backdrop-blur-sm">
          {badge}
        </span>
      )}

      {/* Optional title overlay — bottom-left with gradient scrim */}
      {title && (
        <>
          {/* Dark gradient scrim for readability */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(43,24,10,0.75) 0%, transparent 100%)',
            }}
          />
          <p className="absolute bottom-4 left-5 right-5 text-base font-semibold text-white leading-snug z-10">
            {title}
          </p>
        </>
      )}
    </div>
  )
}

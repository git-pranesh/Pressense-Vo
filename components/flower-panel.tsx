import Image from 'next/image'

interface FlowerPanelProps {
  className?: string
  /** defaults to botanical-hero.png */
  src?: string
  /** minimum height in px, defaults to 380 */
  minHeight?: number
}

/**
 * A dark teal rounded panel with the botanical flower image fading in from
 * the right — used as the visual half of service page hero sections.
 */
export function FlowerPanel({
  className = '',
  src = '/images/botanical-hero.png',
  minHeight = 380,
}: FlowerPanelProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden w-full ${className}`}
      style={{ background: '#1C3530', minHeight }}
    >
      {/* Flower image bleeds from the right */}
      <Image
        src={src}
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
        aria-hidden="true"
      />
      {/* Left-to-right fade — only covers leftmost 20% so flower reads clearly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #1C3530 0%, rgba(28,53,48,0.35) 20%, transparent 45%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle bottom vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(28,53,48,0.3) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
    </div>
  )
}

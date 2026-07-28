import Image from 'next/image'

const logos = [
  {
    name: 'Posha',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Posha_Wordmark_RGB_Black-LUX8uHTxyaltB17e8Erc6uX25w7kTr.webp',
    scale: 1,
  },
  {
    name: 'Zoho',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zoho-logo-1XsmnNiazELvEDqwvkZQXPGebfQVjX.png',
    scale: 1,
  },
  {
    name: 'Tint Tone and Shade',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tts-logo-black-1I01q1zOVqkuHv7n5iK5BQ9pJD8Mcr.avif',
    scale: 1,
  },
  {
    name: 'Pixellu',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixellu%2BLogo-8MN3laE516px6QtUeLVx2lORy9rRyS.webp',
    // Square image with heavy padding — scale up so the wordmark matches others visually
    scale: 3.2,
  },
  {
    name: 'One Magnify',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201390-UQOHkb9NqfcYvCKapHNcIKinIkaDPc.webp',
    scale: 1,
  },
]

// Duplicate logos for a seamless infinite loop
const doubled = [...logos, ...logos]

export function TrustStrip() {
  return (
    <section className="py-10 overflow-hidden" aria-label="Trusted by leading brands">
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-muted-foreground/60 text-center mb-8 font-medium">
        Trusted by 50+ brands including
      </p>

      {/* Scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20"
          style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20"
          style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
          aria-hidden="true"
        />

        <div className="flex animate-marquee gap-0 items-center">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-10"
            >
              {/* Fixed-height container: every logo fills the same 40px tall slot, capped at 140px wide */}
              <div className="relative h-10 w-[140px] overflow-hidden">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale"
                  style={{ transform: `scale(${logo.scale})` }}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

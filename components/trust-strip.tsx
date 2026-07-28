import Image from 'next/image'

const logos = [
  {
    name: 'Posha',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Posha_Wordmark_RGB_Black-LUX8uHTxyaltB17e8Erc6uX25w7kTr.webp',
    width: 120,
    height: 40,
  },
  {
    name: 'Zoho',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zoho-logo-1XsmnNiazELvEDqwvkZQXPGebfQVjX.png',
    width: 96,
    height: 40,
  },
  {
    name: 'Tint Tone and Shade',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tts-logo-black-1I01q1zOVqkuHv7n5iK5BQ9pJD8Mcr.avif',
    width: 120,
    height: 40,
  },
  {
    name: 'Pixellu',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixellu%2BLogo-JDfBPRzKgKnkbjuHpTaMAX7v9uRuHM.webp',
    width: 120,
    height: 40,
  },
  {
    name: 'One Magnify',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201390-UQOHkb9NqfcYvCKapHNcIKinIkaDPc.webp',
    width: 160,
    height: 48,
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
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

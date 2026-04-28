'use client'

const brands = [
  { name: 'AstraZeneca', logo: '/logos/astrazeneca.jpg' },
  { name: 'Zoho', logo: '/logos/zoho.jpg' },
  { name: 'Cognizant', logo: '/logos/cognizant.jpg' },
  { name: 'Scintel', logo: '/logos/scintel.jpg' },
  { name: 'Tint Tone and Shade', logo: '/logos/tint-tone-shade.jpg' },
  { name: 'One Magnify', logo: '/logos/one-magnify.jpg' },
]

export function TrustStrip() {
  return (
    <section className="py-16 border-y border-border/40" aria-label="Trusted by leading companies">
      <div className="container mx-auto px-5 sm:px-8">
        <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-12">
          Trusted by
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-12 sm:h-14"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

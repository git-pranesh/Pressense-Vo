import Image from 'next/image'

const TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY ?? ''

const partnerLogos = [
  { name: 'Vercel', domain: 'vercel.com' },
  { name: 'Anthropic', domain: 'anthropic.com' },
  { name: 'Replit', domain: 'replit.com' },
  { name: 'Framer', domain: 'framer.com' },
  { name: 'Webflow', domain: 'webflow.com' },
  { name: 'Squarespace', domain: 'squarespace.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Zoho', domain: 'zoho.com' },
  { name: 'One Magnify', domain: 'onemagnify.com' },
  { name: 'WhatsApp', domain: 'whatsapp.com' },
  { name: 'Telegram', domain: 'telegram.org' },
  { name: 'Supabase', domain: 'supabase.com' },
  { name: 'Sanity', domain: 'sanity.io' },
  { name: 'Shopify', domain: 'shopify.com' },
  { name: 'Python', domain: 'python.org' },
  { name: 'Wisp', domain: 'wisp.blog' },
  { name: 'Google', domain: 'google.com' },
  { name: 'Meta', domain: 'meta.com' },
]

// Split into two rows of 9
const row1 = partnerLogos.slice(0, 9)
const row2 = partnerLogos.slice(9)

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=${TOKEN}&size=64&format=webp&greyscale=true`
}

function LogoRow({ logos, reverse = false }: { logos: typeof row1; reverse?: boolean }) {
  const doubled = [...logos, ...logos]
  return (
    <div className="overflow-hidden w-full">
      <div
        className="animate-marquee"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.domain}-${i}`}
            className="flex-shrink-0 flex items-center justify-center mx-6"
          >
            <Image
              src={logoUrl(logo.domain)}
              alt={logo.name}
              width={40}
              height={40}
              className="h-7 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-200"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PartnerLogoStrip() {
  return (
    <section className="py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <p className="eyebrow font-medium text-center">
          Works with the tools your business already runs on
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <LogoRow logos={row1} />
        <LogoRow logos={row2} reverse />
      </div>

      <p className="mt-8 text-center text-[10px] text-text-dim">
        <a
          href="https://www.logo.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors"
        >
          Logos by Logo.dev
        </a>
      </p>
    </section>
  )
}

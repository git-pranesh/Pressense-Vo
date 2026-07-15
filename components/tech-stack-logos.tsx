import Image from 'next/image'

const TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY ?? ''

const techStack = [
  { name: 'Next.js', domain: 'nextjs.org' },
  { name: 'TypeScript', domain: 'typescriptlang.org' },
  { name: 'React', domain: 'react.dev' },
  { name: 'Tailwind CSS', domain: 'tailwindcss.com' },
  { name: 'Vercel', domain: 'vercel.com' },
  { name: 'Neon', domain: 'neon.tech' },
  { name: 'Supabase', domain: 'supabase.com' },
  { name: 'PostgreSQL', domain: 'postgresql.org' },
  { name: 'Replit', domain: 'replit.com' },
]

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=${TOKEN}&size=64&format=webp&greyscale=true`
}

export function TechStackLogos() {
  const doubled = [...techStack, ...techStack]

  return (
    <section className="py-14 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium text-center">
          How we build — our foundation stack
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="animate-marquee" style={{ animationDuration: '30s' }}>
          {doubled.map((tech, i) => (
            <div
              key={`${tech.domain}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center mx-8 gap-2"
            >
              <Image
                src={logoUrl(tech.domain)}
                alt={tech.name}
                width={40}
                height={40}
                className="h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-200"
                unoptimized
              />
              <span className="text-[10px] text-text-dim whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

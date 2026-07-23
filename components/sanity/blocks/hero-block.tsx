import Link from 'next/link'

interface CTA { text?: string; href?: string }

interface HeroBlockProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: CTA
  secondaryCta?: CTA
  ctaText?: string
  ctaUrl?: string
  ctaText2?: string
  ctaUrl2?: string
}

export function HeroBlock({ eyebrow, title, subtitle, description, primaryCta, secondaryCta, ctaText, ctaUrl, ctaText2, ctaUrl2 }: HeroBlockProps) {
  const primary = primaryCta?.text ? primaryCta : ctaText ? { text: ctaText, href: ctaUrl } : null
  const secondary = secondaryCta?.text ? secondaryCta : ctaText2 ? { text: ctaText2, href: ctaUrl2 } : null

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-20 pb-16 px-6 lg:px-10">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary/80 tracking-wider uppercase mb-6">
            {eyebrow}
          </p>
        )}
        {title && <h1 className="text-4xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance">{title}</h1>}
        {(subtitle || description) && (
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {subtitle || description}
          </p>
        )}
        {(primary || secondary) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primary && (
              <Link href={primary.href || '/contact'} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-colors">
                {primary.text}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href || '#'} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-border/60 text-foreground hover:border-primary/40 transition-colors">
                {secondary.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

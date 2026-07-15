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
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-background hero-section" aria-label="Introduction">
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        {eyebrow && (
          <div className="eyebrow-flanked mb-8">
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        {title && (
          <h1 className="text-display font-serif text-foreground mb-6 text-balance">{title}</h1>
        )}
        {(subtitle || description) && (
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed font-sans">
            {subtitle || description}
          </p>
        )}
        {(primary || secondary) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primary && (
              <Link href={primary.href || '/diagnostic'} className="btn-primary">
                {primary.text}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href || '#'} className="btn-secondary">
                {secondary.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

interface CTABannerBlockProps {
  title?: string
  description?: string
  ctaText?: string
  ctaUrl?: string
  backgroundColor?: string
}

export function CTABannerBlock({
  title,
  description,
  ctaText,
  ctaUrl,
}: CTABannerBlockProps) {
  return (
    <section className="w-full py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-ink" data-dark="true">
      <div className="max-w-2xl mx-auto text-center">
        {title && <h2 className="text-section-title font-serif text-ink-foreground mb-5 text-balance">{title}</h2>}
        {description && <p className="text-lg text-ink-muted mb-9 leading-relaxed font-sans">{description}</p>}

        {ctaText && (
          <a href={ctaUrl || '/diagnostic'} className="btn-primary">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}

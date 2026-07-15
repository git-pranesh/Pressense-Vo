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
  backgroundColor = 'bg-blue-600',
}: CTABannerBlockProps) {
  return (
    <section className={`w-full py-12 md:py-16 px-4 md:px-6 text-white ${backgroundColor}`}>
      <div className="max-w-3xl mx-auto text-center">
        {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg mb-8 text-white/90">{description}</p>}
        
        {ctaText && (
          <a
            href={ctaUrl || '#'}
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}

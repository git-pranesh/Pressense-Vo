interface HeroBlockProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaUrl?: string
  ctaText2?: string
  ctaUrl2?: string
  backgroundImage?: string
  textColor?: string
}

export function HeroBlock({
  title,
  subtitle,
  description,
  ctaText,
  ctaUrl,
  ctaText2,
  ctaUrl2,
}: HeroBlockProps) {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        {subtitle && <p className="text-lg md:text-xl text-slate-300 mb-4">{subtitle}</p>}
        {title && <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{title}</h1>}
        {description && <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto text-balance">{description}</p>}
        
        {(ctaText || ctaText2) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {ctaText && (
              <a
                href={ctaUrl || '#'}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                {ctaText}
              </a>
            )}
            {ctaText2 && (
              <a
                href={ctaUrl2 || '#'}
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition"
              >
                {ctaText2}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

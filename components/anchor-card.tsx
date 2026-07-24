import Link from 'next/link'

interface AnchorCardProps {
  eyebrow?: string
  headline: string
  body: string
  ctaLabel?: string
  ctaHref?: string
  stats?: { value: string; label: string }[]
}

export function AnchorCard({
  eyebrow,
  headline,
  body,
  ctaLabel = 'Start a Free Diagnostic',
  ctaHref = '/contact',
  stats,
}: AnchorCardProps) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        backgroundImage: 'url(/images/cta-bg-opt.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay so text remains legible */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(20, 12, 4, 0.45)' }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16 max-w-2xl">
        {eyebrow && (
          <span
            className="eyebrow-pill mb-5"
            style={{ borderColor: 'rgba(237,235,229,0.2)', color: 'rgba(237,235,229,0.55)' }}
          >
            {eyebrow}
          </span>
        )}

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-balance mb-4"
          style={{ color: '#EDEBE5' }}
        >
          {headline}
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'rgba(237,235,229,0.65)' }}>
          {body}
        </p>

        {/* Stats — 3-col grid so they always sit in one row */}
        {stats && stats.length > 0 && (
          <div
            className="mb-8"
            style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`, gap: '0' }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col pr-6"
                style={i > 0 ? { borderLeft: '1px solid rgba(237,235,229,0.12)', paddingLeft: '1.5rem' } : {}}
              >
                <span
                  className="text-4xl lg:text-5xl font-bold leading-none tracking-tight"
                  style={{ color: '#EDEBE5' }}
                >
                  {s.value}
                </span>
                <span className="mt-1.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(237,235,229,0.5)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ background: '#EDEBE5', color: '#1C3530' }}
          >
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

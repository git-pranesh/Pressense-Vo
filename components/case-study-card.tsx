import Image from 'next/image'
import Link from 'next/link'

interface CaseStudyCardProps {
  slug: string
  client: string
  industry: string
  engagementType: string
  duration: string
  summary: string
  tags: string[]
  imageSrc?: string
  /** If true, renders wider spanning 2 cols on large screens */
  featured?: boolean
}

export function CaseStudyCard({
  slug,
  client,
  industry,
  engagementType,
  duration,
  summary,
  tags,
  imageSrc = '/images/botanical-hero.png',
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group relative flex flex-col rounded-3xl overflow-hidden"
      aria-label={`Read the ${client} case study`}
      style={{ minHeight: 480 }}
    >
      {/* Full-bleed dark teal background */}
      <div className="absolute inset-0" style={{ background: '#1C3530' }} />

      {/* Botanical image — fades in from right on normal cards, right-center on featured */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${featured ? 'object-center' : 'object-right'}`}
          sizes={featured ? '(max-width: 1024px) 100vw, 80vw' : '(max-width: 768px) 100vw, 50vw'}
          aria-hidden="true"
        />
        {/* Left-to-right gradient — heavier on non-featured so text reads cleanly */}
        <div
          className="absolute inset-0"
          style={{
            background: featured
              ? 'linear-gradient(to right, #1C3530 0%, rgba(28,53,48,0.82) 28%, rgba(28,53,48,0.3) 60%, transparent 100%)'
              : 'linear-gradient(to right, #1C3530 0%, rgba(28,53,48,0.88) 38%, rgba(28,53,48,0.4) 65%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom vignette so footer content always reads */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,53,48,0.92) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
        {/* Top: eyebrow pill */}
        <div className="mb-auto">
          <span
            className="inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full mb-6"
            style={{ background: 'rgba(237,235,229,0.12)', color: 'rgba(237,235,229,0.7)', border: '1px solid rgba(237,235,229,0.18)' }}
          >
            {industry}
          </span>

          {/* Client name */}
          <h3 className="font-semibold text-white text-balance leading-tight mb-3 text-3xl sm:text-4xl">
            {client}
          </h3>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
            <span className="text-sm" style={{ color: 'rgba(237,235,229,0.55)' }}>{engagementType}</span>
            <span style={{ color: 'rgba(237,235,229,0.25)' }} aria-hidden="true">·</span>
            <span className="text-sm" style={{ color: 'rgba(237,235,229,0.55)' }}>{duration}</span>
          </div>

          {/* Summary */}
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,235,229,0.65)' }}>
            {summary}
          </p>
        </div>

        {/* Bottom: tags + CTA */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(237,235,229,0.12)' }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(237,235,229,0.08)', color: 'rgba(237,235,229,0.6)', border: '1px solid rgba(237,235,229,0.14)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-gap duration-200 group-hover:gap-3"
              style={{ color: 'rgba(237,235,229,0.85)' }}
            >
              Read case study
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

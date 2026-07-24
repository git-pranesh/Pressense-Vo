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
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden border transition-all duration-200 hover:border-[#B8B0A6]"
      aria-label={`Read the ${client} case study`}
      style={{ minHeight: 400, background: '#E8E5DF', borderColor: '#D4CFC7' }}
    >
      <div className="flex flex-col h-full p-8 lg:p-10">
        {/* Top content */}
        <div className="mb-auto">
          <span
            className="inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full mb-6"
            style={{ background: 'rgba(26,15,6,0.06)', color: '#6B5D51', border: '1px solid #C8C2BA' }}
          >
            {industry}
          </span>

          <h3
            className="font-normal text-balance leading-tight mb-3"
            style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: '#1A0F06' }}
          >
            {client}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
            <span className="text-sm text-muted-foreground">{engagementType}</span>
            <span className="text-muted-foreground/40" aria-hidden="true">·</span>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>
        </div>

        {/* Bottom: tags + CTA */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: '#D4CFC7' }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', border: '1px solid #C8C2BA' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap group-hover:gap-3 transition-all duration-200"
              style={{ color: '#1A0F06' }}
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

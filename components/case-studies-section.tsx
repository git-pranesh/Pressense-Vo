const caseStudies = [
  {
    category: 'Enterprise',
    title: 'Enterprise GTM & Product Narrative',
    description:
      'Advised enterprise teams on product understanding, customer use cases, technical content, and GTM clarity.',
    tags: ['GTM Strategy', 'Technical Content', 'Product Narrative'],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 280 160" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {/* Flow diagram */}
        <rect x="20" y="60" width="60" height="40" rx="6" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
        <text x="50" y="85" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.4">Product</text>
        <path d="M80 80h30" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
        <polygon points="110,76 118,80 110,84" fill="currentColor" opacity="0.3" />
        <rect x="118" y="60" width="60" height="40" rx="6" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
        <text x="148" y="85" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5">Customer</text>
        <path d="M178 80h30" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
        <polygon points="208,76 216,80 208,84" fill="currentColor" opacity="0.3" />
        <rect x="216" y="60" width="44" height="40" rx="6" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
        <text x="238" y="85" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.4">GTM</text>
        {/* Decorative lines */}
        <line x1="20" y1="120" x2="260" y2="120" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="20" y1="130" x2="200" y2="130" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="20" y1="140" x2="150" y2="140" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.06" />
      </svg>
    ),
  },
  {
    category: 'Operations',
    title: 'Business Restructuring & Scale Systems',
    description:
      'Helped founder-led businesses identify revenue leakage, rebuild operations, and implement systems to support growth.',
    tags: ['Revenue Recovery', 'Operations', 'Systems Build'],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 280 160" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {/* Bar chart */}
        <rect x="30" y="110" width="24" height="30" rx="2" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.06" />
        <rect x="66" y="90" width="24" height="50" rx="2" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.06" />
        <rect x="102" y="70" width="24" height="70" rx="2" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.08" />
        <rect x="138" y="50" width="24" height="90" rx="2" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.1" />
        <rect x="174" y="30" width="24" height="110" rx="2" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.15" />
        <rect x="210" y="18" width="24" height="122" rx="2" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.18" />
        {/* Trend line */}
        <path d="M42 108 L78 88 L114 68 L150 48 L186 28 L222 16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" strokeDasharray="3 2" />
        <line x1="20" y1="140" x2="260" y2="140" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
      </svg>
    ),
  },
  {
    category: 'Expert Growth',
    title: 'Expert-Led Growth Systems',
    description:
      'Helped doctors, professionals, and experts build visibility, automation, personal brand systems, and market expansion support.',
    tags: ['Personal Brand', 'Automation', 'Market Expansion'],
    visual: (
      <svg width="100%" height="100%" viewBox="0 0 280 160" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {/* Hub and spoke */}
        <circle cx="140" cy="80" r="28" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="140" cy="80" r="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.06" />
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x1 = 140 + 28 * Math.cos(rad)
          const y1 = 80 + 28 * Math.sin(rad)
          const x2 = 140 + 55 * Math.cos(rad)
          const y2 = 80 + 55 * Math.sin(rad)
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.3" />
              <circle cx={x2} cy={y2} r="5" stroke="currentColor" strokeWidth="0.8" strokeOpacity={i % 2 === 0 ? 0.5 : 0.3} fill="currentColor" fillOpacity="0.05" />
            </g>
          )
        })}
      </svg>
    ),
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-28 lg:py-36" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="eyebrow-line"/>
              <span className="eyebrow">Work</span>
            </div>
            <h2 className="text-section-title font-serif font-medium text-foreground text-balance max-w-md" id="case-studies-heading">
              Results across industries.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Every engagement is confidential. These are directional examples of the work we do.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {caseStudies.map((study, i) => (
            <article
              key={i}
              className="rounded-2xl bg-card border border-border overflow-hidden flex flex-col hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Visual area */}
              <div className="h-40 bg-secondary/30 text-muted-foreground p-4/50 group-hover:text-accent/60 transition-colors duration-300">
                {study.visual}
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <span className="text-xs tracking-[0.15em] uppercase text-text-dim font-medium">{study.category}</span>
                <h3 className="text-lg font-medium text-foreground leading-snug">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{study.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

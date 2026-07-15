const services = [
  {
    label: '01 / Strategy',
    title: 'Growth & Business Strategy',
    description:
      'GTM, positioning, customer insight, revenue strategy, decision-making, and hiring direction.',
    tags: ['GTM', 'Positioning', 'Customer Insight', 'Revenue Strategy'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 24L10 15l5 4 5-10 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="4" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 4h6M4 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    label: '02 / Systems',
    title: 'Systems & Internal Software',
    description:
      'Custom internal tools, CRM/ERP-lite systems, workflow automation, dashboards, and spreadsheet replacement.',
    tags: ['Internal Tools', 'Automation', 'Dashboards', 'CRM/ERP'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5" />
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.5" />
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 7.5h4M7.5 12v4M20.5 12v4M16 20.5h-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    label: '03 / Execution',
    title: 'Execution & Scale',
    description:
      'Websites, content systems, technical content, AI workflows, personal brand systems, and go-to-market execution.',
    tags: ['AI Workflows', 'Content Systems', 'GTM Execution', 'Personal Brand'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 22V10l8-6 8 6v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="11" y="15" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="10" r="2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-background card-lift" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow">Services</span>
            </div>
            <h2 className="text-section-title font-serif text-foreground text-balance max-w-lg" id="services-heading">
              We advise. We build. We execute. In that order.
            </h2>
          </div>
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
            Every engagement is tailored to where your business actually is, not a generic playbook.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col gap-6 bg-card border border-border hover:border-foreground/20 hover:shadow-sm transition-all duration-300 group"
            >
              {/* Label + icon row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-dim tracking-widest">{service.label}</span>
                <div className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  {service.icon}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/60" />

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-xl font-serif text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


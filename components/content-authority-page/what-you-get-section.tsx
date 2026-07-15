const deliverables = [
  { title: 'Communication gap and opportunity diagnostic', detail: 'Week 1' },
  { title: 'Buyer question tree and keyword architecture', detail: 'Week 1-2' },
  { title: 'Pillar and cluster content strategy', detail: 'Week 2' },
  { title: 'Core pillar pages with AEO structure', detail: 'Week 2-4' },
  { title: 'Cluster articles and comparison pages', detail: 'Week 3-6' },
  { title: 'Website copy and service page rewrites', detail: 'Week 2-4' },
  { title: 'FAQPage schema and structured data markup', detail: 'Delivery' },
  { title: 'Repeatable content production workflow', detail: 'Delivery' },
]

export function ContentWhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
              What you get
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every engagement delivers real content assets, not a content strategy deck. You get live pages, a structured architecture, schema markup, and a production system your team can run independently.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">4-6 week delivery</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Retainers from</span>
              <span className="text-sm font-semibold text-foreground">$3,500/month</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border/40 flex flex-col gap-2">
              <p className="text-foreground font-medium leading-snug">{item.title}</p>
              <span className="text-xs text-muted-foreground">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

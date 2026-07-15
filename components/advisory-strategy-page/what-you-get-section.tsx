const deliverables = [
  { title: 'Constraint diagnosis and root cause analysis', detail: 'Week 1' },
  { title: 'GTM positioning and ICP definition', detail: 'Week 1-2' },
  { title: 'Competitive and market context review', detail: 'Week 1-2' },
  { title: 'Offer and pricing clarity session', detail: 'Week 2' },
  { title: 'Revenue leakage identification', detail: 'Week 2' },
  { title: 'Decision framework and priorities document', detail: 'Week 2' },
  { title: '90-day execution roadmap with ownership', detail: 'Delivery' },
  { title: 'Execution support across build tracks', detail: 'Post-advisory' },
]

export function AdvisoryWhatYouGetSection() {
  return (
    <section className="py-20 md:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
              What you get
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every advisory engagement delivers a clear diagnosis, a strategic direction, and a sequenced execution plan. Not theory. Not slides. A working document your team can execute from on day one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">2-week diagnostic sprint</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Starting from</span>
              <span className="text-sm font-semibold text-foreground">$2,500</span>
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

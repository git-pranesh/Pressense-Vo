const constraints = [
  { title: 'CRM without usage', description: 'The CRM exists, but the team does not consistently use it or trust the data.' },
  { title: 'Fragmented workflows', description: 'Sales, operations, finance, and delivery use different tools with no unified system.' },
  { title: 'Manual follow-ups', description: 'Lead tracking, sales updates, and customer follow-ups depend on individuals.' },
  { title: 'Unclear pipeline visibility', description: 'Leadership cannot clearly see what is happening across the funnel.' },
  { title: 'ERP complexity', description: 'Enterprise tools are too heavy, too expensive, or too difficult to adapt.' },
  { title: 'Process mismatch', description: 'The tool does not reflect how the business actually sells, delivers, or operates.' },
]

export function CrmErpConstraintsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          The constraint we usually see
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

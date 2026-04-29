const constraints = [
  { title: 'Unclear messaging', description: 'Visitors do not immediately understand what the business does.' },
  { title: 'Generic positioning', description: 'The website sounds like every other company in the space.' },
  { title: 'Low conversion', description: 'Traffic comes in, but inquiries or actions are low.' },
  { title: 'Disconnected pages', description: 'Homepage, landing pages, and content do not follow a clear structure.' },
  { title: 'Over-designed, under-explained', description: 'Design is strong, but clarity is missing.' },
  { title: 'No buyer journey', description: 'The site does not guide users toward a decision or next step.' },
]

export function ConstraintsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          The constraint we usually see
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

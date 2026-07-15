const conditions = [
  'The same task happens repeatedly',
  'The inputs and outputs can be defined',
  'There is a clear owner',
  'Speed or consistency is a real bottleneck',
  'The workflow affects sales, content, support, reporting, or operations',
  'The team already does the work manually',
  'AI can support the process without replacing necessary judgment',
]

export function AIWhenWorthBuildingSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="When AI workflows are worth building">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            When AI workflows are worth building.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            An AI workflow is worth building when:
          </p>
          <ul className="space-y-4">
            {conditions.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

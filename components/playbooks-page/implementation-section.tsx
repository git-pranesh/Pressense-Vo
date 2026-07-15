export function PlaybooksImplementationSection() {
  return (
    <section className="py-28 lg:py-36" aria-labelledby="implementation-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-12" id="implementation-heading">
            From diagnosis to implementation.
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Diagnosis',
                description: 'How to identify if this is your problem. Red flags, questions to ask, where to look first.',
              },
              {
                step: '2',
                title: 'Design',
                description: 'What the solution should look like. Principles, key decisions, common pitfalls to avoid.',
              },
              {
                step: '3',
                title: 'Build',
                description: 'Implementation roadmap. Sequencing, dependencies, early wins you can get in 30 days.',
              },
              {
                step: '4',
                title: 'Measure',
                description: 'How to know it&apos;s working. Metrics to track. How to sustain the change.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

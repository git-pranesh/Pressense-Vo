export function WhenNotSection() {
  const reasons = [
    'The process is not clear yet',
    'A simple SaaS tool can solve the problem well',
    'The team is not ready to adopt a new system',
    'The workflow changes too often',
    'The problem is actually strategic, not technical',
    'There is no clear owner for the system',
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="whennot-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 id="whennot-heading" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-4">
            When we would not build one
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We do not recommend building custom software for every problem.
          </p>
          <div className="space-y-3">
            <p className="text-base text-foreground font-medium mb-6">We may advise against building if:</p>
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-muted-foreground flex-shrink-0">•</span>
                <span className="text-base text-muted-foreground">{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mt-8">
            This keeps the work practical and prevents unnecessary complexity.
          </p>
        </div>
      </div>
    </section>
  )
}

export function ExampleWorkflowsSection() {
  const workflows = [
    'Lead routing and follow-up tracker',
    'Sales pipeline visibility system',
    'Quote and proposal approval workflow',
    'Invoice and payment tracking dashboard',
    'Customer onboarding checklist',
    'Field team reporting system',
    'Commission calculation tracker',
    'Vendor or partner portal',
    'Inventory or order flow tracker',
    'Internal ticketing and request system',
    'Delivery operations dashboard',
    'Founder KPI dashboard',
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="workflows-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 id="workflows-heading" className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          Example workflows we can turn into systems
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow, i) => (
            <div key={i} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-colors flex items-center gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
              <p className="text-base text-foreground">{workflow}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const useCases = [
  'Businesses outgrowing spreadsheets',
  'Teams struggling with lead follow-up',
  'Companies investing in sales but lacking visibility',
  'Founder-led sales processes that don\'t scale',
  'Growing teams with unclear ownership',
  'Businesses using multiple tools without integration',
  'Companies that tried a CRM but failed to adopt it',
  'Operations-heavy businesses needing structured tracking',
]

export function CrmErpMostUsefulSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Where this is most useful
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase) => (
            <div key={useCase} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/40">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-base text-muted-foreground">{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

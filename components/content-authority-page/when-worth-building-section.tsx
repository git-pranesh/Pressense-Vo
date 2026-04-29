const conditions = [
  'The business has real expertise but weak market visibility',
  'Buyers need education before they trust or buy',
  'The founder or team explains the business better on calls than the website does',
  'Technical products or services are misunderstood',
  'Content is being created but not creating clarity or demand',
  'The business needs stronger positioning before scaling marketing',
  'Sales, marketing, and product teams are not telling the same story',
]

export function WhenWorthBuildingSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="When content systems are worth building">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            When content systems are worth building.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            A content and authority system makes sense when:
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

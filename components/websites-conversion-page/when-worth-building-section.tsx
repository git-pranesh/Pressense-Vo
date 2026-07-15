const conditions = [
  'The business has outgrown its current positioning',
  'Sales calls explain the value better than the website does',
  'Traffic exists but inquiries are weak or poor-fit',
  'The company is entering a new market or launching a new offer',
  'The product or service is difficult to explain',
  'The website does not support outbound, content, SEO, or referrals',
  'The team needs a stronger source of truth for messaging',
]

export function WebsitesWhenWorthBuildingSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="When a website system is worth building">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            When a website system is worth building.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            A website rebuild or conversion system makes sense when:
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

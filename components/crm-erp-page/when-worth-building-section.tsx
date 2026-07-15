const conditions = [
  'Sales follow-up is inconsistent',
  'Pipeline visibility is unclear',
  'Customer handoffs break between teams',
  'Reporting takes too much manual effort',
  'Finance, operations, and delivery depend on disconnected files',
  'The founder has to ask people for updates constantly',
  'Off-the-shelf tools are either too rigid or too bloated',
  'The business needs visibility before it can scale further',
]

export function CrmErpWhenWorthBuildingSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="When CRM or ERP systems are worth building">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            When CRM or ERP-lite systems are worth building.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            A CRM or ERP-lite system makes sense when:
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

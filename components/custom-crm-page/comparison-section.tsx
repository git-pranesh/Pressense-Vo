export function CustomCrmComparisonSection() {
  const rows = [
    {
      criterion: 'Monthly cost (10 users)',
      custom: 'From $0 after build (hosting only)',
      salesforce: '$1,500–$3,000+/month',
      hubspot: '$800–$2,000+/month',
    },
    {
      criterion: '3-year total cost',
      custom: '$15K–$60K build + $3K/yr hosting',
      salesforce: '$54K–$108K+ licensing',
      hubspot: '$29K–$72K+ licensing',
    },
    {
      criterion: 'Fits your exact workflow',
      custom: 'Yes — built around your process',
      salesforce: 'Partial — heavy customisation needed',
      hubspot: 'Partial — limited object flexibility',
    },
    {
      criterion: 'Data ownership',
      custom: 'You own everything',
      salesforce: 'Vendor-held, export restricted',
      hubspot: 'Vendor-held, export restricted',
    },
    {
      criterion: 'Setup time',
      custom: '6–14 weeks for MVP',
      salesforce: '4–12 weeks + ongoing admin',
      hubspot: '2–6 weeks + ongoing admin',
    },
    {
      criterion: 'Ongoing admin overhead',
      custom: 'Low — you control the schema',
      salesforce: 'High — dedicated admin often needed',
      hubspot: 'Medium — template constraints',
    },
    {
      criterion: 'Built on Replit',
      custom: 'Yes — readable, modifiable code',
      salesforce: 'No',
      hubspot: 'No',
    },
  ]

  return (
    <section id="comparison" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Comparison
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Custom CRM vs Salesforce for a 10-Person Sales Team
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          Most comparisons are written by vendors. This one is not. Here is what the numbers actually look like for a ten-person team over three years.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-border/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[28%]">
                  Criterion
                </th>
                <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-primary w-[24%] bg-primary/5">
                  Custom (Pressense)
                </th>
                <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[24%]">
                  Salesforce
                </th>
                <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[24%]">
                  HubSpot
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-border/30 ${i % 2 === 0 ? 'bg-background' : 'bg-card/30'}`}
                >
                  <td className="p-4 font-medium text-foreground/80">{row.criterion}</td>
                  <td className="p-4 text-foreground bg-primary/5">{row.custom}</td>
                  <td className="p-4 text-muted-foreground">{row.salesforce}</td>
                  <td className="p-4 text-muted-foreground">{row.hubspot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Salesforce and HubSpot are good products for the companies they are designed for. A 10-person team with a specific sales process is not that company. Custom CRM development means you stop paying for features you do not use and start owning a system that reflects how you actually sell.
        </p>
      </div>
    </section>
  )
}

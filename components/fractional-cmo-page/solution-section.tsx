// Comparison table: Full-time CMO vs Fractional CMO vs Marketing Agency
// AEO target: differentiation questions

type Row = {
  label: string
  fullTime: string
  fractional: string
  agency: string
  highlight?: boolean
}

const rows: Row[] = [
  { label: 'Monthly cost', fullTime: '$20K-$35K', fractional: 'From $1.5K/mo', agency: '$3K-$25K', highlight: true },
  { label: 'Strategy ownership', fullTime: 'Yes', fractional: 'Yes', agency: 'No' },
  { label: 'Embedded in your team', fullTime: 'Yes', fractional: 'Yes', agency: 'No' },
  { label: 'Accountable for revenue outcomes', fullTime: 'Yes', fractional: 'Yes', agency: 'Rarely' },
  { label: 'Scales with your stage', fullTime: 'No', fractional: 'Yes', agency: 'Yes' },
  { label: 'Time to onboard', fullTime: '3-6 months', fractional: '1-2 weeks', agency: '2-4 weeks' },
  { label: 'Long-term commitment', fullTime: 'Yes', fractional: 'No', agency: 'Sometimes' },
  { label: 'Good fit at 0-to-1 stage', fullTime: 'Rarely', fractional: 'Yes', agency: 'Partially' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40" aria-labelledby="comparison-heading">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Cost and value comparison</span>
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4"
          >
            Full-time CMO vs Fractional CMO vs Marketing Agency
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most B2B SaaS startups and founder-led businesses do not need a full-time CMO. They need a fractional CMO services engagement that gives them senior strategy at the hours their stage requires. Here is how the options compare.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-border/40">
          <table className="w-full text-sm" role="table" aria-label="CMO hiring options comparison">
            <thead>
              <tr className="border-b border-border/40 bg-card/40">
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Factor</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Full-time CMO</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary bg-primary/5">Fractional CMO</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Marketing Agency</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border/30 last:border-0 ${row.highlight ? 'bg-primary/3' : ''}`}
                >
                  <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.fullTime}</td>
                  <td className="px-6 py-4 text-center font-semibold text-primary bg-primary/5">{row.fractional}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-5 max-w-2xl">
          Pressense fractional CMO services start from $1,500 per month for advisory-only engagements. Embedded leadership is scoped after the diagnostic call based on hours and scope required.
        </p>

      </div>
    </section>
  )
}

// Comparison table: Fractional RevOps vs Full-time RevOps vs Agency RevOps
// AEO target: differentiation and cost comparison questions

type Row = {
  label: string
  fractional: string
  fullTime: string
  agency: string
  highlight?: boolean
}

const rows: Row[] = [
  { label: 'Monthly cost (market rate)', fractional: '$3K-$18K', fullTime: '$7K-$21K+', agency: '$5K-$20K', highlight: true },
  { label: 'Strategy ownership', fractional: 'Yes', fullTime: 'Yes', agency: 'No' },
  { label: 'Embedded in your team', fractional: 'Yes', fullTime: 'Yes', agency: 'No' },
  { label: 'Accountable for revenue outcomes', fractional: 'Yes', fullTime: 'Yes', agency: 'Rarely' },
  { label: 'Best stage fit', fractional: '$1M-$15M ARR', fullTime: '$15M+ ARR', agency: 'Any' },
  { label: 'Time to onboard', fractional: '1-2 weeks', fullTime: '4-8 weeks', agency: '2-4 weeks' },
  { label: 'Long-term commitment required', fractional: 'No', fullTime: 'Yes', agency: 'Sometimes' },
  { label: 'India + global client experience', fractional: 'Yes', fullTime: 'Depends on hire', agency: 'Varies' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40" aria-labelledby="revops-comparison-heading">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">When should you hire a RevOps consultant</span>
          </div>
          <h2
            id="revops-comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4"
          >
            Fractional RevOps vs Full-time vs Agency
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You should hire a RevOps consultant when your revenue growth has become unpredictable. Specific triggers: your sales cycle has lengthened by more than 20 percent, your forecast accuracy is below 70 percent, or marketing and sales disagree on what a qualified lead looks like.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For businesses between $1M and $15M ARR, fractional revenue operations consulting gives you senior-level infrastructure without the loaded cost of a full-time hire. Full-time RevOps becomes appropriate when operational volume demands 40 hours per week of dedicated management, typically above $15M ARR.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-border/40">
          <table className="w-full text-sm" role="table" aria-label="RevOps hiring options comparison">
            <thead>
              <tr className="border-b border-border/40 bg-card/40">
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Factor</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-primary bg-primary/5">Fractional RevOps</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Full-time RevOps</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Agency RevOps</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border/30 last:border-0 ${row.highlight ? 'bg-primary/3' : ''}`}
                >
                  <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                  <td className="px-6 py-4 text-center font-semibold text-primary bg-primary/5">{row.fractional}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.fullTime}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-5 max-w-2xl">
          Pressense fractional revenue operations consulting starts from $2,000 per month. Ongoing embedded RevOps is scoped after the diagnostic call based on hours and the specific systems that need building.
        </p>

      </div>
    </section>
  )
}

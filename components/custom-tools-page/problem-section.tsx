const problems = [
  'Founder approves every exception because the system has no rules for them',
  'Team tracks work in three different spreadsheets that never quite match',
  'Handoffs between sales, delivery, and finance break on a weekly basis',
  'Reporting requires someone to manually collate data from multiple tools',
  'A new SaaS subscription was added to solve each problem as it appeared',
  'Nobody is confident in the pipeline number because CRM hygiene is inconsistent',
]
export function CustomToolsProblemSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Growth creates operational debt that spreadsheets and SaaS cannot fix
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The tools your team started with were fine at ten people. At thirty, the manual workarounds compound into real operational drag that slows delivery, breaks data, and keeps the founder in the middle of everything.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border/20 bg-white/5">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

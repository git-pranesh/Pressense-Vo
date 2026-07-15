const useCases = [
  {
    title: 'Document and data extraction',
    description: 'AI that reads contracts, invoices, reports, and forms and extracts structured data without manual review. Replaces hours of copy-paste work with a system that runs in seconds.',
  },
  {
    title: 'Lead qualification and scoring',
    description: 'AI that evaluates inbound leads against your ICP, scores them by fit and intent, and routes them to the right person with a summary. Removes the founder from every inbound triage decision.',
  },
  {
    title: 'Content and proposal drafting',
    description: 'AI that drafts service proposals, email sequences, case study outlines, and sales materials using your existing voice and templates. First draft in seconds, not days.',
  },
  {
    title: 'Customer support and FAQ automation',
    description: 'AI-powered support that handles tier-one questions from your knowledge base, escalates edge cases to humans, and logs everything. Reduces support volume without reducing quality.',
  },
  {
    title: 'Internal knowledge retrieval',
    description: 'AI that lets your team ask questions and get answers from your SOPs, playbooks, and documentation. Removes the bottleneck of asking the founder or a senior person for every procedural question.',
  },
  {
    title: 'Reporting and insight generation',
    description: 'AI that reads your CRM, project, or finance data and produces weekly summaries, flags anomalies, and surfaces the three things leadership most needs to know. No manual report assembly.',
  },
]
export function AIStrategySolutionSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What We Build</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Six use cases that deliver measurable time and cost savings within 30 days
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI strategy is only useful if it ends with something that runs. Every Pressense engagement includes at least two working pilots built from the priority use cases identified in the strategy sprint.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card">
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

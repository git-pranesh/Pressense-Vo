const solutions = [
  { title: 'Content workflows', description: 'AI-assisted systems for ideation, writing, editing, and publishing.' },
  { title: 'Sales and follow-up workflows', description: 'Automated sequences, reminders, and response systems.' },
  { title: 'Internal knowledge systems', description: 'Structured repositories for prompts, processes, and reusable knowledge.' },
  { title: 'Reporting automation', description: 'Dashboards and systems that reduce manual reporting effort.' },
  { title: 'Customer communication workflows', description: 'Email, support, onboarding, and interaction systems.' },
  { title: 'Operations automation', description: 'Task creation, updates, approvals, and workflow coordination.' },
  { title: 'AI-assisted research and analysis', description: 'Systems for faster insight generation and decision support.' },
]

export function AIWorkflowsWhatWeBuildSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What we build
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

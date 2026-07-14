export function AIImplementationMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnostic',
      timing: 'Week 1–2',
      deliverable: 'AI Opportunity Map',
      p1: 'We spend 60 to 90 minutes with you or your team leads mapping every repeated task in your business. We score each task by time cost, frequency, and how predictable the output is. Tasks that score high on all three are your first AI targets.',
      p2: 'You receive a written AI Opportunity Map ranking five to ten workflows by ROI. We review it with you and confirm the top two or three to build first. This document is yours to keep whether you continue with us or not.',
    },
    {
      number: '02',
      name: 'Design',
      timing: 'Week 2–3',
      deliverable: 'Workflow Blueprints',
      p1: 'For each selected workflow we design the full process: what triggers it, what tools are involved, what the AI does, and what your team does to review or approve the output. We map this visually so you can see exactly how it will work before we build anything.',
      p2: 'We choose the tools at this stage. Claude for drafting and analysis, GPT-4 for extraction, Make or n8n for connecting your existing software. We do not add tools you do not need. The blueprint gets your sign-off before we start building.',
    },
    {
      number: '03',
      name: 'Build',
      timing: 'Week 3–5',
      deliverable: 'Working AI Workflows',
      p1: 'We build the workflows and test them against real inputs from your business. We use Claude, Cursor, and Replit to move fast without creating technical debt. Everything is documented so you can see what was built and why.',
      p2: 'You test each workflow with your own data before we call it done. If the output quality is not right, we adjust the prompts, the logic, or the inputs until it is. We do not declare success until your team agrees the output is usable.',
    },
    {
      number: '04',
      name: 'Rollout',
      timing: 'Week 5–6',
      deliverable: 'Team Adoption + Support',
      p1: 'We run the first few uses of each workflow with your team present. We watch for friction, confusion, and edge cases. We adjust based on what we see rather than what we assumed. By the end of rollout week your team should be using the tools independently.',
      p2: 'After rollout we provide 30 days of included support. You can report issues via email or Slack and we fix them fast. If you want to expand AI to more workflows after the first implementation, we offer a continuation retainer that builds on what we have already set up.',
    },
  ]

  return (
    <section className="py-16" aria-label="AI implementation methodology">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">How We Work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance mb-10">
          From diagnostic to daily use in six weeks
        </h2>

        <div className="flex flex-col gap-10">
          {phases.map((phase) => (
            <div key={phase.number} className="grid sm:grid-cols-[80px_1fr] gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary/40">{phase.number}</span>
                <span className="text-sm font-semibold text-foreground">{phase.name}</span>
                <span className="text-xs text-muted-foreground">{phase.timing}</span>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">Deliverable: {phase.deliverable}</p>
                <p className="text-muted-foreground leading-relaxed mb-3">{phase.p1}</p>
                <p className="text-muted-foreground leading-relaxed">{phase.p2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

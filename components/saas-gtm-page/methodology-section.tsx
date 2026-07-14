export function SaaSGTMMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnose',
      timing: 'Weeks 1–2',
      deliverable: 'Buyer Research Summary + ICP Draft',
      p1: 'We start by talking to your current customers or target buyers. We ask about their pain, their alternatives, and what triggered them to look for a solution. We map your competitive landscape and identify where your product wins and where it loses. We do not rely on founder assumptions at this stage.',
      p2: 'At the end of the Diagnose phase you receive a written Buyer Research Summary with verbatim quotes, a draft ICP definition, and a map of the three to five competitors your buyers are comparing you to. This document becomes the foundation for everything that follows.',
    },
    {
      number: '02',
      name: 'Strategise',
      timing: 'Weeks 3–4',
      deliverable: 'Positioning Document + Pricing Recommendation',
      p1: 'Using the buyer research, we build your positioning. This means a clear statement of who you serve, what problem you solve, and why you are better than the alternatives your buyers already know. We test multiple positioning angles and pressure-test each one against real buyer feedback.',
      p2: 'We also recommend a pricing model and price points based on competitive benchmarks and the value your ICP assigns to the outcome. Pricing is often the most avoided topic in early GTM work. We address it directly with data, not with gut feel.',
    },
    {
      number: '03',
      name: 'Build',
      timing: 'Weeks 5–6',
      deliverable: '90-Day GTM Roadmap + Channel Playbook',
      p1: 'We translate strategy into execution. We select one to two primary acquisition channels based on your ICP, your budget, and your team capacity. We build a channel playbook for each one: what to do, in what order, with what content, and how to measure success.',
      p2: 'The 90-Day GTM Roadmap is a week-by-week execution plan that your team can pick up and run. It covers messaging tests, outreach sequences, content topics, and the metrics you track at each stage. We review it with you before handoff and adjust based on your feedback.',
    },
    {
      number: '04',
      name: 'Scale',
      timing: 'Month 3 onward',
      deliverable: 'Monthly GTM Review (retainer) or Handoff',
      p1: 'After the sprint you have two options. You can take the roadmap and execute it internally, with a one-hour handoff call and 30-day email support included. Or you can continue with a Pressense GTM retainer, where we review performance monthly, adjust messaging and channels based on what is working, and add new initiatives as the business grows.',
      p2: 'Most clients who run the retainer see their first repeatable acquisition pattern within 60 to 90 days of sprint completion. The retainer is month-to-month with two weeks notice to cancel, so there is no long-term commitment required.',
    },
  ]

  return (
    <section className="py-16" aria-label="Pressense GTM methodology">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">How We Work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance mb-10">
          The Pressense GTM framework: Diagnose, Strategise, Build, Scale
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

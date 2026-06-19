export function WhoItsForSection() {
  const rightFor = [
    {
      title: 'Ops teams spending 20+ hours/week on manual tasks',
      description:
        'Your ops people are doing data entry, reconciliation, and reporting by hand. They know what needs to be automated. They just have no one to build it. We build it.',
    },
    {
      title: 'GTM teams where admin is eating selling time',
      description:
        'Your salespeople are updating CRM records, sending follow-up sequences, and chasing internal approvals. That is 40% of their week on tasks that should run automatically.',
    },
    {
      title: 'Founders scaling from 5 to 50 people',
      description:
        'You are hiring operations staff to manage volume that a set of documented automated workflows could handle. We stop that pattern before it becomes a structural cost.',
    },
    {
      title: 'Teams running on 6+ disconnected tools',
      description:
        'Your CRM, billing platform, support desk, and analytics tool all hold pieces of the same data. Your team is the integration layer. We replace that with actual integrations.',
    },
  ]

  const notRightFor = [
    {
      title: 'Businesses with no documented processes',
      description:
        'Automation requires knowing what the current process is. If your team does things differently every time, we need to standardise first. That is a different engagement.',
    },
    {
      title: 'Enterprise companies with existing IT governance',
      description:
        'If you have a dedicated IT department and procurement requirements, you need an enterprise automation vendor. We work best with founder-led and growth-stage companies.',
    },
    {
      title: 'Teams looking for a one-hour fix',
      description:
        'We design, build, test, document, and support. If you want a quick Zapier setup with no architecture thinking, there are cheaper options. We are not the cheapest option.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
          Fit
        </p>

        {/* Right for */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
          This is right for you if...
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          We work best with teams that have a clear manual problem and the authority to fix it.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {rightFor.map((card) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Not right for */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
          This is NOT for you if...
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          We would rather tell you now than waste your time on a call.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {notRightFor.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-8 border border-border/40 bg-card/30"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

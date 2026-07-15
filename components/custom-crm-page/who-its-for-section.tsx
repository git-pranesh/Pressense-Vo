export function CustomCrmWhoItsForSection() {
  const forCards = [
    {
      title: 'Your sales process does not fit standard CRM objects',
      body: 'HubSpot and Salesforce are built around a generic contact-deal-company model. If your business tracks subscriptions, projects, multi-site accounts, equipment, or anything else with custom relationships, you spend more time working around the tool than using it.',
    },
    {
      title: 'You are paying for features your 10-person team will never use',
      body: 'Enterprise CRM licences bundle marketing automation, AI scoring, CPQ, and support portals into plans priced for 500-person organisations. A founder-led team of 10 needs pipeline visibility, follow-up automation, and clean reporting. Not a six-figure annual contract.',
    },
    {
      title: 'Your data lives in four systems and nobody trusts the numbers',
      body: 'When your CRM does not talk to your billing tool, your project tracker, or your support inbox, the pipeline is always wrong. A custom CRM is built around your actual data sources from day one, so the numbers your team sees match reality.',
    },
    {
      title: 'Every onboarding creates a week of manual admin work',
      body: 'If closing a deal triggers three spreadsheets, two Slack messages, and a manual Notion update, your CRM is not doing its job. Custom development lets you automate exactly the handoffs your team executes every week.',
    },
  ]

  const notForCards = [
    {
      title: 'You have fewer than five active sales deals at a time',
      body: 'A spreadsheet or free HubSpot tier is the right tool at this stage. Custom development adds complexity before the workflow exists to justify it.',
    },
    {
      title: 'You need a solution live in under four weeks',
      body: 'Custom CRM development takes six to fourteen weeks for an MVP. If you need something running next month, we will help you configure an off-the-shelf tool and plan a custom build for later.',
    },
    {
      title: 'Your team will not adopt a new system',
      body: 'A custom CRM does not fix adoption problems. If the sales team ignores the current tool because of culture or discipline issues, a new one will have the same fate. We address this in the diagnostic first.',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          This is right for you if...
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-12 max-w-2xl">
          Custom CRM development is not the answer for every business. Here is an honest look at who benefits and who does not.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {forCards.map((card) => (
            <div key={card.title} className="p-6 rounded-2xl bg-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <h3 className="text-base font-medium text-foreground leading-snug">{card.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-7">{card.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-ink-foreground text-balance mb-8 leading-tight">
          This is NOT for you if...
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {notForCards.map((card) => (
            <div key={card.title} className="p-6 rounded-2xl border border-border/30 bg-secondary/20">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 w-4 h-4 rounded-full border border-border/60 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                </div>
                <h3 className="text-base font-medium text-foreground leading-snug">{card.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-7">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

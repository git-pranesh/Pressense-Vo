export function AIStrategyWhoItsFor() {
  const rightFor = [
    {
      heading: 'You are running a $2M–$20M business and AI feels overwhelming',
      body: 'Every week a new tool promises to transform your operations. You have signed up for three, used none of them consistently, and your team is confused. You need someone to cut through the noise and tell you exactly what to do first.',
    },
    {
      heading: 'You have tried to implement AI and it stalled after week two',
      body: 'You bought a ChatGPT Teams licence. Your team used it for a month, then stopped. The problem was not the tool. It was that nobody mapped it to a specific workflow, measured an outcome, or made one person responsible for it.',
    },
    {
      heading: 'You are preparing for growth and want AI built into the foundation',
      body: 'You are about to hire your fifth sales rep or your third ops manager. Before you do, you want to know which parts of that role can be handled by an AI system so the human focuses on judgement calls, not admin.',
    },
    {
      heading: 'You need a board-ready AI roadmap, not a 47-page generic report',
      body: 'Your investors or board are asking about your AI strategy. You need a document that names specific use cases, assigns owners, sets timelines, and ties each initiative to a revenue or cost outcome. Not a framework slide.',
    },
  ]

  const notFor = [
    {
      heading: 'Businesses with under $500K revenue',
      body: 'The ROI on a structured AI strategy engagement only makes sense once you have consistent revenue to protect and processes worth automating. Below this threshold, a one-hour diagnostic call is the right starting point.',
    },
    {
      heading: 'Teams looking for a one-size-fits-all AI tool recommendation',
      body: 'We do not run tool demos or act as resellers. Our output is a custom roadmap tied to your specific processes. If you want a generic "top 10 AI tools for business" list, that is a Google search, not a consulting engagement.',
    },
    {
      heading: 'Organisations that need to move in under two weeks',
      body: 'A proper AI strategy engagement requires two to four weeks of diagnosis, analysis, and stakeholder input. If you need something live in seven days, the implementation page is the right starting point.',
    },
  ]

  return (
    <section
      className="py-16 bg-surface"
      aria-labelledby="who-its-for-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            Who this is for
          </span>
          <h2
            id="who-its-for-heading"
            className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-12"
          >
            This is right for you if...
          </h2>

          <div className="space-y-8 mb-16">
            {rightFor.map((item) => (
              <div key={item.heading} className="flex gap-4">
                <div
                  className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-medium text-ink-foreground mb-2">{item.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-border/50 rounded-xl p-6 bg-card/30">
            <h3 className="text-base font-medium text-foreground mb-4 uppercase tracking-wide text-sm">
              This is NOT for you if...
            </h3>
            <div className="space-y-6">
              {notFor.map((item) => (
                <div key={item.heading} className="flex gap-4">
                  <div
                    className="mt-1.5 h-2 w-2 rounded-full bg-muted-foreground/40 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.heading}</p>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

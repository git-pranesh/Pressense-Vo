const rightFor = [
  {
    title: "You want to know what you're actually paying for",
    body: "Most agencies list tool logos on a slide deck and call it a tech stack. We document every tool, every use case, and every decision so you know exactly what is being built and why. No black boxes in the engagement.",
  },
  {
    title: 'You searched for a specific tool partner or expert',
    body: 'If you arrived here searching for "Anthropic partner," "Claude API integration," "Replit expert," or "Framer agency," you are in the right place. We work across all of these platforms and can advise on which combination fits your specific problem.',
  },
  {
    title: 'You need one firm to handle the full stack',
    body: 'Most clients come to us with a problem, not a tool list. They do not want to hire a Zapier consultant, an Airtable specialist, and a Replit developer separately. We select the right combination from the stack above and build the full solution.',
  },
  {
    title: 'You want to own and modify the output',
    body: 'Every system we build uses tools and code you own. No proprietary platforms. No monthly fees to us for continued access. When the engagement ends, you have a working system, the documentation, and the ability to hand it to any developer for future changes.',
  },
]

const notRightFor = [
  {
    title: "You need one specific tool, nothing else",
    body: "If you only need a Framer template installed or a single Zapier zap built, we are not the right fit. Our diagnostic process is designed for businesses with workflow problems, not one-off tasks.",
  },
  {
    title: 'You want us to use your existing tools regardless of fit',
    body: 'We recommend the right tool for the job. If your current stack is creating more problems than it solves, we will say so. We do not build on platforms that will limit your growth to avoid a difficult conversation.',
  },
]

export function WhoItsForSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            Fit
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight">
            Who this page is for
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-14">
          {rightFor.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/60 bg-card/40 p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="text-base text-ink-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border/40 bg-secondary/10 p-8">
          <h3 className="text-lg font-medium text-ink-foreground mb-6">This is not right for you if:</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {notRightFor.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

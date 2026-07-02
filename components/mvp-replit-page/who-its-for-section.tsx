export function MvpReplitWhoItsForSection() {
  const rightFor = [
    {
      title: 'You started building on Replit and got stuck',
      description:
        'You have a working prototype. Maybe Replit Agent wrote most of it. It runs fine in the demo but falls apart when real users touch it. We audit what you have, keep what is good, and rebuild what is not.',
    },
    {
      title: 'You are a non-technical founder who wants to avoid a $150K agency',
      description:
        'Traditional agencies charge enterprise rates for non-enterprise needs. Replit makes production-grade builds affordable for early-stage companies. You get real software, not a mockup, at a price that makes sense before Series A.',
    },
    {
      title: 'You need a live product before your next investor conversation',
      description:
        'A Figma prototype gets you a first meeting. A working SaaS product on a real domain with real users signing up is what closes a pre-seed or seed round. We build the latter in six weeks.',
    },
    {
      title: 'You want to own the code, not rent a no-code platform',
      description:
        'No-code tools are fast to start and painful to grow past. When you outgrow Bubble or Webflow, you rebuild from scratch. Owning a Replit codebase means you can hand it to any developer and keep building.',
    },
  ]

  const notFor = [
    {
      title: 'You have not spoken to a single potential user yet',
      description:
        'Building before validating the problem is the most expensive mistake in early-stage startups. If you have not confirmed that the pain is real and acute enough to pay for, validate first. Build second.',
    },
    {
      title: 'You need the product live in under three weeks',
      description:
        'Six weeks is already fast. Under three weeks requires existing architecture, pre-built design systems, and zero scope changes during the build. We do not take that brief because the output quality suffers and you end up rebuilding it.',
    },
    {
      title: 'You need enterprise compliance from day one',
      description:
        'SOC 2, HIPAA, and ISO 27001 certification take months and significant investment regardless of platform. If regulated compliance is a hard launch requirement, this is not the right engagement.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Who this is right for
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          MVP development on Replit works best when the problem is validated, you have started building, and you need someone to take it the rest of the way. It is not for everyone, and we are honest about that.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-semibold text-foreground text-balance mb-10 leading-tight">
            When this is not the right fit
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

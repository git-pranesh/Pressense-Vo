export function MvpWhoItsForSection() {
  const rightFor = [
    {
      title: 'You have a validated problem but no product',
      description:
        'You have spoken to potential users, you understand the pain, and you know roughly what you want to build. You need someone to translate that into working software without spending months in discovery.',
    },
    {
      title: 'You are pre-revenue and need to show investors something real',
      description:
        'A Figma mockup gets you to the first meeting. A working product gets you a term sheet. If you need to demonstrate real functionality, a tested user flow, and actual data, a shipped MVP does that. A prototype does not.',
    },
    {
      title: 'You have been quoted $150K+ by a traditional agency',
      description:
        'Large agencies build for enterprise timelines and enterprise margins. A founder-led startup does not need that infrastructure. You need the minimum scope that proves the idea, built fast enough to learn from it.',
    },
    {
      title: 'You want to own your code, not rent a platform',
      description:
        'No-code tools are fast to start and painful to grow past. The moment you need a custom integration or a data model that does not fit the template, you are stuck. Owning the codebase means you are never constrained by a platform decision you made in week one.',
    },
  ]

  const notFor = [
    {
      title: 'You have not spoken to a single potential user yet',
      description:
        'Building before validating the problem is the most expensive mistake in early-stage startups. If you have not confirmed that the problem is painful enough to pay for, build your validation first.',
    },
    {
      title: 'You need the MVP live in under four weeks',
      description:
        'Eight weeks is already fast. Under four weeks requires pre-existing architecture, existing design systems, and zero scope changes. We do not take that brief because the output quality suffers and you end up rebuilding it.',
    },
    {
      title: 'You want enterprise-grade compliance from day one',
      description:
        'SOC 2, HIPAA, and ISO 27001 certification take months and significant budget regardless of who builds the product. If regulated compliance is a hard launch requirement, this engagement is not the right fit.',
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
          MVP development for startups works when the problem is validated, the scope is defined, and the founder is ready to ship and learn. It does not work when any of those three things are missing.
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
          <h3 className="text-2xl font-semibold text-foreground text-balance mb-10">
            This is NOT right for you if...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <h4 className="text-base font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

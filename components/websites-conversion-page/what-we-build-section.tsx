const solutions = [
  {
    title: 'Positioning-led website systems',
    description: 'Websites built around clear market position, buyer pain, offer structure, and conversion path.',
  },
  {
    title: 'Solution and service pages',
    description: 'Pages that explain what the business fixes, who it serves, and why the offer matters.',
  },
  {
    title: 'Landing pages for specific offers',
    description: 'Focused pages for diagnostics, campaigns, products, markets, or high-intent buyer segments.',
  },
  {
    title: 'Messaging architecture',
    description: 'Headlines, page narratives, proof points, FAQs, and content structure that create clarity.',
  },
  {
    title: 'Technical and SaaS websites',
    description: 'Websites that translate complex products into use cases, buyer outcomes, and decision paths.',
  },
  {
    title: 'Authority-led expert websites',
    description: 'Sites for founders, consultants, doctors, specialists, and operators where trust is the main conversion driver.',
  },
  {
    title: 'SEO and content-ready structure',
    description: 'Page systems designed to support search visibility, AI search clarity, and long-term content growth.',
  },
]

export function WhatWeBuildSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="What we build">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            What we build.
          </h2>
          <p className="text-muted-foreground text-lg">
            Systems that turn websites into clarity and conversion infrastructure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <article key={i} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatWeBuildSection() {
  const buildItems = [
    { title: 'Website copy systems', description: 'Clear, structured messaging across homepage, landing pages, and product pages.' },
    { title: 'Technical and product content', description: 'Use-case-driven content for SaaS, tools, platforms, and complex services.' },
    { title: 'SEO content systems', description: 'Content designed around real search intent, not just keywords.' },
    { title: 'Authority content', description: 'Thought leadership, founder-led content, and expertise-driven narratives.' },
    { title: 'Content workflows', description: 'Repeatable systems for ideation, writing, review, and publishing.' },
    { title: 'AI-assisted content systems', description: 'Workflows that use AI to speed up production without losing depth or clarity.' },
    { title: 'Industry-specific content', description: 'Healthcare, professional services, SaaS, and other expertise-driven domains.' },
  ]

  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          What we build
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {buildItems.map((item) => (
            <div key={item.title} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

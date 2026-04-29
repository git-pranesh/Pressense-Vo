export function WhatWeBuildSection() {
  const buildItems = [
    'Website copy systems',
    'Technical and product content',
    'SEO content systems',
    'Authority content',
    'Content workflows',
    'AI-assisted content systems',
    'Industry-specific content',
  ]

  return (
    <section className="py-28 lg:py-36 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">
          What we build
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {buildItems.map((item) => (
            <div key={item} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <h3 className="text-base font-medium text-foreground">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

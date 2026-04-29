const solutions = [
  { title: 'Core website structure', description: 'Homepage, service pages, solution pages, and supporting pages.' },
  { title: 'Conversion-focused landing pages', description: 'Pages designed to drive specific actions like inquiries, demos, or applications.' },
  { title: 'Messaging systems', description: 'Clear positioning, headlines, subheadlines, and structured content.' },
  { title: 'SaaS and product websites', description: 'Websites for tools, platforms, and technical products that need clarity.' },
  { title: 'Expert and founder websites', description: 'Authority-driven websites for doctors, consultants, and professionals.' },
  { title: 'SEO-ready structure', description: 'Pages designed to support search and long-term visibility.' },
  { title: 'Content-integrated websites', description: 'Websites connected with blogs, resources, playbooks, and content systems.' },
]

export function WhatWeBuildSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What we build
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

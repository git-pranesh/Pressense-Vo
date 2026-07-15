const steps = [
  { step: '1', title: 'Diagnostic', description: 'We review your current website, messaging, and gaps.' },
  { step: '2', title: 'Structure & strategy', description: 'We define pages, flow, and messaging direction.' },
  { step: '3', title: 'Build', description: 'We design and develop the website.' },
  { step: '4', title: 'Content integration', description: 'We connect the site with content, SEO, and communication systems.' },
  { step: '5', title: 'Scale', description: 'We refine based on usage and growth.' },
]

export function EngagementPathSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-12">
          Typical engagement path
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <span className="font-medium text-primary/20">{item.step}</span>
              <h3 className="text-base font-medium text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    number: '01',
    title: 'Positioning and messaging sprint',
    description: 'We start by defining who the buyer is, what problem they are solving, and how the business is positioned relative to alternatives. This produces a messaging framework the entire site is built on.',
  },
  {
    number: '02',
    title: 'Page architecture and structure',
    description: 'We map every page that needs to exist, what each page must achieve, and how they connect. Structure is signed off before any design or copy work begins. This is where most website projects fail when skipped.',
  },
  {
    number: '03',
    title: 'Copy and content development',
    description: 'Page copy is written against the messaging framework and reviewed for clarity, conversion logic, and SEO structure. Every headline, section, and CTA is written with a specific buyer intent in mind.',
  },
  {
    number: '04',
    title: 'Design and development',
    description: 'The site is designed and built to reflect the structure and messaging, not a template. The result is a site that could not belong to a different company, because it reflects this business\'s specific positioning.',
  },
]
export function WebsitesMethodologySection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Positioning before structure, structure before design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every step in the process is sequenced to prevent the most common website mistake: spending budget on design before the messaging is clear.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="p-7 rounded-2xl border border-border/60 bg-card">
              <p className="text-xs font-mono text-muted-foreground mb-3">{step.number}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

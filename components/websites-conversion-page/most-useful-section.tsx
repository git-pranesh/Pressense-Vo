const useCases = [
  'Businesses rebuilding their website',
  'Founders who cannot clearly explain their business',
  'Companies with traffic but low conversion',
  'SaaS products that are hard to understand',
  'Experts building authority and trust',
  'Teams entering new markets',
  'Businesses shifting positioning',
  'Companies investing in SEO or content',
]

export function MostUsefulSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Where this is most useful
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border/40">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MostUsefulSection() {
  const usecases = [
    'SaaS products that are hard to explain',
    'Founders building personal brand and authority',
    'Businesses entering new markets',
    'Companies investing in SEO but not seeing clarity',
    'Teams creating content without conversion',
    'Experts (doctors, consultants, specialists) with strong knowledge but low visibility',
    'Businesses rebuilding websites',
    'Products needing better use-case narratives',
  ]

  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-16">
          Where this is most useful
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usecases.map((usecase) => (
            <div key={usecase} className="rounded-xl bg-card border border-border p-6 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <p className="text-sm font-medium text-foreground leading-relaxed">{usecase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

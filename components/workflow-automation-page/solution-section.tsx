import Link from 'next/link'

const solutionPoints = [
  { title: 'Positioning clarity', description: 'Define what makes you different, who cares, and how to communicate it in a way that lands immediately.' },
  { title: 'Channel strategy', description: 'Identify which channels actually produce qualified leads and which are wasting budget. Focus resources where they convert.' },
  { title: 'Sales motion design', description: 'Build a sales process that fits your buyer, shortens cycles, and increases close rates.' },
  { title: 'Revenue system integration', description: 'Connect marketing, sales, and customer success so leads do not leak between stages.' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">How we approach GTM strategy</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          We diagnose before we prescribe. Every GTM engagement starts with understanding where your current approach breaks down. See <Link href="/how-we-work" className="text-primary hover:underline">how we work</Link>.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {solutionPoints.map((point, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

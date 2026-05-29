import Link from 'next/link'

const solutionPoints = [
  { title: 'Strategic direction', description: 'Clear priorities, positioning, and GTM strategy. Not more tactics, but better decisions about which tactics matter.' },
  { title: 'Marketing system design', description: 'Build the processes, metrics, and infrastructure that make marketing predictable and scalable.' },
  { title: 'Team and agency oversight', description: 'Direct your existing team, manage agencies, and ensure execution matches strategy.' },
  { title: 'Founder leverage', description: 'Get marketing leadership on your calendar when you need it, without the overhead when you do not.' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">What fractional CMO services include</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Pressense fractional CMO engagements focus on strategy and systems, not just execution oversight. See <Link href="/how-we-work" className="text-primary hover:underline">how we work</Link>.
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

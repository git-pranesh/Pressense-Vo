import Link from 'next/link'

const solutionPoints = [
  { title: 'Operations audit', description: 'Map how work actually flows through your business, identify bottlenecks, and document tribal knowledge before it walks out the door.' },
  { title: 'System design', description: 'Build processes, tools, and documentation that make operations predictable and scalable.' },
  { title: 'Tool implementation', description: 'Deploy the right tools for your stage, whether CRM, project management, reporting, or custom internal systems.' },
  { title: 'Team enablement', description: 'Create systems that new hires can follow on day one, reducing ramp time and founder dependency.' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">How we build business systems</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          We do not sell software or push enterprise solutions. We build systems that fit your stage and grow with you. See <Link href="/how-it-works" className="text-primary hover:underline">how we work</Link>.
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

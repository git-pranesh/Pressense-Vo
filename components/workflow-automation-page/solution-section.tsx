import Link from 'next/link'

const solutionPoints = [
  { title: 'Process mapping', description: 'Document the current workflow, identify bottlenecks, and find automation opportunities.' },
  { title: 'Tool selection', description: 'Choose the right automation platform (Make, Zapier, custom API) based on your tech stack and scale.' },
  { title: 'Integration design', description: 'Build connections between your systems so data flows automatically with no manual handoff.' },
  { title: 'Testing and launch', description: 'Test thoroughly, train your team, and monitor performance in the first 2 weeks.' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">Our workflow automation process</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          We don&apos;t just consult—we build working systems that integrate with what you already use. See <Link href="/playbooks" className="text-primary hover:underline">case examples</Link> for specific workflows we&apos;ve automated.
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

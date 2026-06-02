import Link from 'next/link'

const solutionPoints = [
  { title: 'Workflow diagnosis', description: 'Identify which manual processes actually cost you time and money. Quantify the ROI of automating each one.' },
  { title: 'AI system design', description: 'Map out the workflow, choose the right AI tools, and design integrations that fit your stack.' },
  { title: 'Implementation & training', description: 'Build the workflows, integrate with your existing tools, and train your team on the new process.' },
  { title: 'Ongoing optimization', description: 'Monitor performance, fix issues, and iterate as your business evolves.' },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">How we build AI automation</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Most AI automation projects fail because they focus on technology instead of process. We start with your workflows, then apply AI only where it creates real value. See <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link> for specifics.
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

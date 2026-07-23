import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Process audit',
    duration: 'Week 1–2',
    description:
      'We map how work actually flows through your business — not how it is supposed to flow. Every manual step, every handoff, every decision that requires someone to remember something. We identify which processes are costing the most time and producing the most errors.',
    output: 'Process map and prioritised bottleneck list',
  },
  {
    number: '02',
    title: 'Automation roadmap',
    duration: 'Week 2–3',
    description:
      'We select the highest-impact automations from the audit and design the system for each: inputs, outputs, tool selection, ownership, and the human review layer. We recommend n8n for data-sensitive or complex workflows, Make for multi-step cloud automation, and Zapier for fast simple connections — matched to your existing stack.',
    output: 'Written automation roadmap with tool selections and scope',
  },
  {
    number: '03',
    title: 'Build and test',
    duration: 'Week 3–6',
    description:
      'We build the automations in your environment, connected to your existing tools. Every automation runs with a test dataset before going live. We document every workflow so your team understands what it does, who owns it, and how to modify it without breaking anything.',
    output: 'Live automations, documented and handed over',
  },
  {
    number: '04',
    title: 'Handover and support',
    duration: 'Week 6+',
    description:
      'You own everything we build. We train the person who will own each automation, provide written documentation, and offer a support window for questions and adjustments after go-live. Most clients continue with a retainer for the next phase of automation after seeing results from the first.',
    output: 'Full handover, training, and support period',
  },
]

export function BPAMethodologySection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-4">
            From audit to live automation in four phases
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We start with the process, not the tool. Every automation we build is documented, tested, and handed over with a clear owner. See the full{' '}
            <Link href="/how-it-works" className="text-primary hover:underline">
              how we work
            </Link>{' '}
            page for the broader engagement model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="glass-card rounded-2xl p-7 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl font-bold text-primary/30 leading-none tabular-nums">{step.number}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <span className="text-xs text-muted-foreground">{step.duration}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>
              <div className="border-t border-border/30 pt-3">
                <span className="text-xs font-medium text-primary uppercase tracking-wide block mb-1">Output</span>
                <p className="text-sm text-muted-foreground">{step.output}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

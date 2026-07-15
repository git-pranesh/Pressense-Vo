const problems = [
  {
    symptom: 'Talking to everyone, converting no one',
    root: 'No clear ICP or positioning. Marketing and sales both run on instinct rather than a defined customer profile.',
  },
  {
    symptom: 'Founder is the bottleneck for everything',
    root: 'No documented processes, no systems for delegation, no way for the team to move without a decision from the top.',
  },
  {
    symptom: 'GTM strategy that changes every quarter',
    root: 'No repeatable channel, no clear message, chasing tactics without a foundation that compounds.',
  },
  {
    symptom: 'Burning budget on channels that do not convert',
    root: 'Spending before understanding the customer acquisition sequence. Tools are running, but the strategy is not defined.',
  },
  {
    symptom: 'Good product, no pipeline',
    root: 'Product development has outpaced go-to-market. The business has a product but not a system for finding and closing customers.',
  },
  {
    symptom: 'Hired a consultant who gave you a deck',
    root: 'Most consulting firms advise and disappear. The gap is not more analysis — it is execution with someone who stays accountable to outcomes.',
  },
]

export function StartupConsultingProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-4">
            Six symptoms that bring founders to us
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">
            Every founder we work with shows up with at least two of these. Occasionally all six.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item) => (
            <article
              key={item.symptom}
              className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-base font-medium text-foreground mb-3">{item.symptom}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{item.root}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

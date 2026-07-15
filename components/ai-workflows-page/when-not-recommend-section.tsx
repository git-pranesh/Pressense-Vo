const reasons = [
  'The process is not clear yet',
  'The output requires high judgment with no review layer',
  'The team does not know who owns the workflow',
  'The work is too variable to systemize',
  'A checklist or template would solve the problem first',
  'The business wants AI because it sounds current, not because there is a workflow constraint',
  'Automation would make errors faster instead of reducing them',
]

export function AIWhenNotRecommendSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="When we would not recommend AI automation">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            When we would not recommend AI automation.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We may advise against AI or automation if:
          </p>
          <ul className="space-y-4">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 3l6 6M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-muted-foreground leading-relaxed">
            In these cases, we typically recommend starting with a <a href="/advisory-strategy" className="text-primary hover:underline">strategy diagnostic</a> or workflow audit before investing in automation.
          </p>
        </div>
      </div>
    </section>
  )
}

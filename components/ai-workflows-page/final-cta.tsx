import Link from 'next/link'

export function AIWorkflowsFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-ink rounded-t-3xl">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink-foreground mb-6">
            Start with one workflow.
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-10">
            You do not need to automate everything at once. The best results come from identifying one repeated workflow and improving it first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start With a Diagnostic
            </Link>
            <Link
              href="/playbooks"
              className="inline-flex items-center justify-center rounded-full border border-ink-border bg-ink-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-ink-card"
            >
              View Playbooks
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

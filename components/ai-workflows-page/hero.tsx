import Link from 'next/link'

export function AIWorkflowsHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Solutions / AI Workflows & Automation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] text-balance mb-6">
            AI workflows that reduce manual work and improve execution clarity.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            AI is not useful by itself. It becomes valuable when it is part of a structured workflow. We help businesses use AI to remove repetitive work, improve speed, and support better execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start With a Diagnostic
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center rounded-full border border-border bg-secondary/50 px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

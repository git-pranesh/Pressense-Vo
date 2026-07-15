const keyQuestions = [
  'What&apos;s your current revenue and where does it come from?',
  'What does your team structure look like today?',
  'Where do you feel the most friction in day-to-day operations?',
  'What have you already tried that didn&apos;t work?',
  'What does success look like for you in the next 12 months?',
]

const deliverables = [
  'Business Model Audit',
  'Operations Diagnostic',
  'Team Structure Review',
  'Gap & Opportunity Map',
  'Priority Matrix',
]

export function DiagnosePhase() {
  return (
    <section
      id="diagnose"
      className="py-28 lg:py-36"
      aria-labelledby="diagnose-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Phase header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-medium flex items-center justify-center">
            1
          </span>
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Phase One
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - content */}
          <div>
            <h2
              id="diagnose-heading"
              className="text-display font-serif font-medium text-foreground mb-6 text-balance"
            >
              Diagnose
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Before we build anything, we understand everything. We conduct a deep-dive
              audit of your business model, operations, positioning, and team. No
              assumptions. No templates. Just clarity.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              This phase typically lasts 1-2 weeks and involves direct conversations with
              you and your team, review of existing documentation, and observation of
              current workflows.
            </p>

            {/* Timeline */}
            <div className="flex items-center gap-3 mb-10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-primary"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M10 5v5l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium text-foreground">
                Timeline: 1-2 weeks
              </span>
            </div>

            {/* Key questions */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                Key Questions We Answer
              </h3>
              <ul className="space-y-3">
                {keyQuestions.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-primary mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="3" fill="currentColor" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: q }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - deliverables card */}
          <div className="lg:pt-16">
            <div className="rounded-2xl bg-card border border-border p-8">
              <h3 className="text-lg font-medium text-foreground mb-6">
                Deliverables
              </h3>
              <ul className="space-y-4">
                {deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-foreground font-medium"
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      {i + 1}
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6">
                <p className="text-sm text-muted-foreground">
                  All findings are compiled into a comprehensive diagnostic report that
                  becomes the foundation for Phase 2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

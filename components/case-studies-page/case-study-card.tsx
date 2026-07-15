interface CaseStudyCardProps {
  number: string
  title: string
  context: string
  problem: string
  activities: string[]
  outcomes: string[]
}

export function CaseStudyCard({
  number,
  title,
  context,
  problem,
  activities,
  outcomes,
}: CaseStudyCardProps) {
  return (
    <article className="glass-card rounded-2xl p-8 lg:p-10 border border-border/50">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-semibold text-primary">
          {number}
        </span>
        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight pt-1">
          {title}
        </h3>
      </div>

      {/* Context */}
      <div className="mb-8">
        <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Context
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">{context}</p>
      </div>

      {/* Problem */}
      <div className="mb-8">
        <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
          The Problem
        </h4>
        <p className="text-base text-foreground/90 leading-relaxed">{problem}</p>
      </div>

      {/* Two-column grid for Activities and Outcomes */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* What We Did */}
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            What We Did
          </h4>
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span className="text-sm text-foreground/80 leading-relaxed">
                  {activity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div>
          <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Outcome
          </h4>
          <ul className="space-y-3">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-primary mt-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-foreground/80 leading-relaxed">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

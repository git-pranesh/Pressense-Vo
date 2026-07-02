export function MvpReplitWhatYouGetSection() {
  const deliverables = [
    {
      label: 'Production codebase in your Replit account',
      detail: 'Every file lives in your account from day one. TypeScript, properly structured, with comments where the logic is non-obvious. Any developer can read it.',
    },
    {
      label: 'Authentication with role-based access',
      detail: 'Sign up, sign in, password reset, email verification, and role-based permissions. Built on a proven auth library, not custom-rolled code.',
    },
    {
      label: 'Neon PostgreSQL database with proper schema',
      detail: 'A normalised schema designed for your specific data model. Parameterised queries throughout. No raw SQL concatenation.',
    },
    {
      label: 'Up to three third-party integrations',
      detail: 'Stripe payments, Resend transactional email, and one additional integration of your choice. Webhooks handled correctly with idempotency.',
    },
    {
      label: 'Admin dashboard',
      detail: 'A simple operations view where you can see users, activity, and key metrics without querying the database directly.',
    },
    {
      label: 'Custom domain, SSL, and basic monitoring',
      detail: 'Your domain pointing to your Replit deployment, SSL configured, and uptime monitoring so you know before your users do if something breaks.',
    },
    {
      label: 'Handover documentation',
      detail: 'A written document explaining how the codebase is structured, how to run it locally, how to deploy changes, and where to look when something breaks.',
    },
    {
      label: 'Optional GTM kickoff',
      detail: 'ICP definition, early channel strategy, and a 90-day outreach or content plan. Available as an add-on for founders who want to launch with a structured go-to-market motion.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Deliverables
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What you get at the end of six weeks
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Not a staging environment demo. Not a Loom walkthrough. A live, production-grade product on your domain with real users able to sign up and use it on day one.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {deliverables.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 p-5 rounded-2xl border border-border/40 bg-card/60"
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <p className="text-sm font-semibold text-foreground mb-2">Fixed-price from $3,500</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Engagements starting from $3,500 for a focused two to three week refactor of an existing Replit prototype. A greenfield MVP with auth, payments, admin dashboard, and production deployment starts from $5,000. Every engagement starts with a diagnostic session that produces a fixed-price estimate before any build work begins. No surprises.
          </p>
          <a
            href="/diagnostic"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-highlight transition-colors"
          >
            Start with a diagnostic
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export function MvpReplitProblemsSection() {
  const problems = [
    {
      heading: 'Can you really build a production SaaS on Replit, or is it just for prototypes?',
      body1:
        'Replit is a production-capable platform. It runs Node.js, Python, and Go services on persistent infrastructure. It has managed PostgreSQL databases, secret management, and custom domain support. Thousands of companies run real production workloads on it. The platform is not the constraint. The code quality is.',
      body2:
        'The gap between a Replit prototype and a production Replit app is not the hosting environment. It is the engineering decisions made while building: whether authentication uses a battle-tested library or a hand-rolled session cookie, whether database queries use parameterised inputs or string interpolation, whether secrets live in environment variables or are pasted directly into the codebase. Pressense builds the production version from the first sprint. The platform is Replit. The standards are the same as any professional engagement.',
    },
    {
      heading: 'What goes wrong when a founder vibe-codes their own MVP on Replit?',
      body1:
        'Vibe coding with Replit Agent or Cursor produces working code faster than any human developer. The problem appears later. Someone tries to add a second user type and the auth logic has no concept of roles. Someone adds a payment flow and the webhook handler has no idempotency check. The database schema has no foreign key constraints. The API has no rate limiting. None of these problems are obvious until a real user finds them, which is usually at the worst possible time.',
      body2:
        'The issue is not the AI. The AI wrote working code for the feature it was asked to build. The issue is that no one asked it to think about the system as a whole. A developer reviewing AI-generated code on Replit catches these gaps before they become production incidents. We use Replit Agent heavily in our builds. We also review everything it generates against a production readiness checklist before it ships.',
    },
    {
      heading: 'How is a Replit MVP different from one built on a traditional cloud setup?',
      body1:
        'A traditional cloud setup means configuring AWS EC2 or GCP instances, setting up CI/CD pipelines, managing environment parity between development and production, and handling infrastructure as code. This is the right choice at scale. For an MVP, it is weeks of setup before a line of product code is written.',
      body2:
        'Replit collapses that setup time to hours. The development environment is the production environment. Deployments are instant. The database is managed. Secrets are handled. This is why Replit is the right platform for early-stage MVP builds: you get production infrastructure without the infrastructure overhead. The codebase is still standard TypeScript and PostgreSQL, so migrating to a dedicated cloud environment later is a configuration change, not a rewrite.',
    },
    {
      heading: 'What happens to my Replit MVP after the build is done?',
      body1:
        'You own the Replit project from the first commit. The code lives in your Replit account. You can invite collaborators, fork it, export it, or migrate it to another host at any point. There is no ongoing dependency on Pressense to keep the product running. The handover session in week six covers the architecture, the deployment process, the environment variables, and the database access patterns so any developer you hire later can pick it up without a steep learning curve.',
      body2:
        'If you want ongoing iteration after the initial build, Pressense offers monthly sprint retainers. A retainer means one two-week development sprint per month: new features, integration additions, or performance improvements based on what your early users are telling you. Most founders use the first two months post-launch to gather feedback, then re-engage for the next build cycle once the iteration priorities are clear.',
    },
    {
      heading: 'How do I know if my idea is scoped correctly for a 6-week Replit build?',
      body1:
        'The diagnostic session exists for this question. In sixty minutes, we review your problem statement, your target user, the specific features you believe are essential, and any technical requirements you are aware of. We map this against what is achievable in six weeks on Replit with production-grade standards applied.',
      body2:
        'Most founders arrive with a scope that needs trimming. A typical six-week Replit MVP covers one primary user journey end to end, authentication and basic account management, two to three integrations, and a simple admin view. Everything else is cut until the core hypothesis is validated. You get a fixed-price build estimate from the diagnostic session before committing to anything.',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Real Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What founders building on Replit actually ask
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every founder in our diagnostic session has a version of one of these questions. We answer them honestly here so you come in with the right expectations.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.heading}
              className={`py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-xl font-medium text-foreground mb-4 text-balance">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

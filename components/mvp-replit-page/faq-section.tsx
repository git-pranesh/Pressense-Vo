const faqs = [
  {
    question: 'Can you build a real SaaS product on Replit?',
    answer:
      'Yes. Replit is a production-capable platform with managed PostgreSQL databases, persistent deployments, secret management, and custom domain support. The constraint is not the platform, it is the code quality. A production SaaS built on Replit uses the same engineering standards as one built on AWS: parameterised queries, tested auth libraries, environment-variable-managed secrets, and role-scoped data access. The difference is that Replit collapses the infrastructure setup time from weeks to hours, which is why it is the right platform for an MVP build.',
  },
  {
    question: 'How much does it cost to build an MVP on Replit?',
    answer:
      'Replit MVP builds with Pressense start from $3,000 for a focused single-journey product and scale based on the number of user journeys, integrations, and data model complexity. Replit and AI-assisted development have reduced the cost of a production-grade MVP significantly compared to traditional agency rates. A six-week Replit build that would have cost $50,000 with a traditional agency in 2022 now starts at $3,000 to $5,000. Every engagement starts with a fixed-price estimate from the diagnostic session before any work begins.',
  },
  {
    question: 'What is vibe coding and why is it not enough for a production MVP?',
    answer:
      'Vibe coding is the practice of building software by describing requirements to an AI agent in natural language, popularised by Andrej Karpathy. AI agents like Replit Agent can scaffold a full-stack app in minutes. The gap is engineering judgement: the AI builds the feature you asked for, but nobody reviewed whether the auth pattern is safe, whether the database queries are parameterised, or whether the webhook handler handles duplicate events. Vibe-coded apps frequently work in demos and break under real user load. Pressense uses AI tooling heavily in Replit builds. We also review everything against a production readiness checklist.',
  },
  {
    question: 'How long does it take to build an MVP on Replit?',
    answer:
      'A focused, well-scoped Replit MVP takes six weeks from the start of the diagnostic to a live, tested product. Week one is scoping. Week two is architecture and Replit project setup. Weeks three and four are sprint one: core auth and primary user journey. Weeks five and six are sprint two: integrations, secondary flows, and stabilisation. Six weeks is only achievable when the scope is locked before development starts and does not change mid-sprint.',
  },
  {
    question: 'What technology does Pressense use for Replit builds?',
    answer:
      'We build on Replit using TypeScript, Next.js for the frontend and API layer, and PostgreSQL for the database. Auth is handled by a tested library, never hand-rolled. The codebase follows standard conventions readable by any developer. Replit hosts and deploys the product. You own the project in your Replit account from the first commit and can migrate to any other host without a rewrite.',
  },
  {
    question: 'What is the difference between this and just using Replit Agent myself?',
    answer:
      'Replit Agent can generate a working app faster than a human developer for the initial scaffold. The difference is the system. Pressense applies a production readiness review to every Replit Agent output: we check the auth architecture, review the database access patterns, verify secret handling, add error boundaries, and test the integration points. We also bring scope discipline that AI agents lack. The result is a codebase you can take to investors, a technical co-founder, or a developer team without being told to rewrite it.',
  },
  {
    question: 'Can I keep iterating on the Replit MVP after the initial build?',
    answer:
      'Yes. After the initial six-week build, Pressense offers monthly sprint retainers. A retainer gives you one two-week development sprint per month for new features, integration additions, or performance improvements based on early user feedback. Most founders spend the first one to two months after launch gathering user feedback before re-engaging for the next build cycle. The codebase is yours regardless of whether you continue with Pressense or hire your own developer.',
  },
  {
    question: 'Do you work with founders who have already started building on Replit?',
    answer:
      'Yes. If you have a partially built Replit project that needs to be stabilised, extended, or rebuilt properly, that is a common starting point. The diagnostic session includes a code review of what exists. If the existing codebase is salvageable, we build on top of it. If the architecture has fundamental issues that will slow every future sprint, we scope a targeted rebuild of the core. Either way, you leave the diagnostic session with a clear picture and a fixed-price estimate.',
  },
]

export function MvpReplitFaqSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-14 leading-tight">
          Replit MVP development questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

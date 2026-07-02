export function MvpReplitFaqSection() {
  const faqs = [
    {
      question: 'Can you build a real production SaaS on Replit?',
      answer:
        'Yes. Replit is a fully production-capable platform. It supports Neon PostgreSQL for a managed database, custom domains with SSL, auth libraries, full-stack TypeScript, and persistent deployments. Real SaaS products run on Replit today. The challenge is not the platform. It is building on it correctly from the start, with proper architecture, security configuration, and a data model designed for real users rather than a demo.',
    },
    {
      question: 'What is vibe coding and when does it stop being enough?',
      answer:
        'Vibe coding is building software by describing requirements to an AI agent in natural language, a term popularised by Andrej Karpathy. It is one of the most powerful tools founders now have for moving fast. It stops being enough when you need production authentication, payment flows, role-based access, proper error handling, and a data model that survives real users rather than a controlled demo. Most founders hit this ceiling right when momentum is highest.',
    },
    {
      question: 'How much does MVP development on Replit cost?',
      answer:
        'Professional Replit MVP development with Pressense starts from $3,500 for a focused sprint refactoring an existing Replit prototype. A greenfield MVP with auth, payments, an admin dashboard, and a production deployment starts from $5,000. Every engagement starts with a diagnostic session that produces a written, fixed-price estimate before any build work begins. Replit itself costs $25 to $65 per month for the platform, which you own directly.',
    },
    {
      question: 'How long does it take to build an MVP on Replit?',
      answer:
        'Six weeks for a greenfield build: one week of audit and scoping, one week of architecture, three weeks of build sprints, one week of stabilisation and launch. If you have an existing Replit prototype, we can often deliver in four weeks by refactoring what is salvageable rather than rebuilding from scratch. Timeline depends on scope, number of integrations, and complexity of the primary user journey.',
    },
    {
      question: 'How is this different from your general MVP development service?',
      answer:
        'The MVP development for startups service is platform-agnostic and focuses on first-time founders who are building from scratch. This service is specifically for founders who have chosen Replit as their platform, have often already started building with Replit Agent, and need a developer to take the build to production quality. The work is audit-first rather than greenfield-first, and the timeline reflects that.',
    },
    {
      question: 'Do I own the code if you build on Replit?',
      answer:
        'Yes. Every line of code lives in your Replit account from the first commit. You own it outright. You can fork it, export it, move it to a different hosting environment, or hand it to another developer at any time. We retain no ownership or access after the engagement ends. The handover documentation we provide is written specifically to help a new developer continue the work without needing us.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Common questions about Replit MVP development
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Straightforward answers to the questions we get asked before every engagement.
        </p>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

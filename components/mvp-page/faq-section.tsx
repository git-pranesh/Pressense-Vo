const faqs = [
  {
    question: 'What is MVP development for startups?',
    answer:
      'MVP development for startups is the process of building the smallest functional version of a product that tests one core hypothesis with real users. It is production software, not a mockup. Users can sign up, complete a primary workflow, and generate data that tells you what to build next. The goal is validated learning in the shortest time, not a polished final product.',
  },
  {
    question: 'How much does MVP development cost?',
    answer:
      'MVP development with Pressense starts from $5,000 for a focused single-workflow build. A multi-journey product with payments, email automation, and an admin dashboard is $28,000. With AI-assisted development on Replit, founders can now get production-ready MVPs at a fraction of traditional agency rates. Every Pressense MVP engagement starts with a fixed-price estimate from the diagnostic session before any work begins.',
  },
  {
    question: 'How long does MVP development take?',
    answer:
      'A well-scoped MVP takes eight weeks from the diagnostic session to a live, tested product. Week one is scoping. Week two is architecture. Weeks three to six are two two-week build sprints. Weeks seven and eight are stabilisation and iteration. The eight-week timeline is only possible when the scope is defined and fixed before development starts. Scope changes mid-sprint extend the timeline.',
  },
  {
    question: 'What is the difference between an MVP and a prototype?',
    answer:
      'A prototype is a visual or interactive mockup designed to test a user interface. It has no backend, no real data, and no actual functionality. An MVP is production software. Users can create accounts, complete real workflows, and generate real data. For investor demos and early user testing, an MVP is far more credible. For early user research and interface testing, a prototype is faster and cheaper.',
  },
  {
    question: 'What technology do you use to build MVPs?',
    answer:
      'We build on Replit using TypeScript, Next.js, and PostgreSQL. Replit is a cloud-based development and deployment platform that gives founders full code ownership from the first commit. The codebase is standard TypeScript with a real managed database — readable and maintainable by any developer without specialised knowledge or platform lock-in.',
  },
  {
    question: 'Can I just use AI tools to vibe-code my own MVP instead?',
    answer:
      'You can, and many founders try. AI coding tools are genuinely fast at scaffolding — they can generate a Next.js app, database schema, and API routes in hours. The issue is engineering judgement, not typing speed. Vibe-coded apps frequently have hand-rolled auth with no session management, SQL queries with no parameterisation, no error boundaries, and no test coverage. They work in the demo and break in production. The value Pressense adds is knowing which shortcuts are safe and which create technical debt that blocks your next funding round. AI wrote some of our code. A developer reviewed all of it.',
  },
  {
    question: 'Do I need a technical co-founder or can I hire an MVP agency?',
    answer:
      'You do not need a technical co-founder to build an MVP. What you need is a clear problem hypothesis, a defined primary user journey, and a realistic scope. An MVP agency provides the technical execution. A technical co-founder provides ongoing product vision and architecture ownership. If you plan to hire a technical team post-launch, an agency-built MVP is a better early choice because it gives you something to test and iterate before making a long-term hire.',
  },
  {
    question: 'How do I validate my MVP idea before building?',
    answer:
      'Validation before building means confirming that real people experience the problem acutely enough to change their behaviour or pay money to fix it. The fastest path is five to ten structured conversations with your target user, not a survey. Ask about the problem, not the solution. If the problem does not come up unprompted and they cannot describe a specific recent example, it is not painful enough to build for. The Pressense diagnostic session reviews your validation evidence before scoping the build.',
  },
]

export function MvpFaqSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-14 leading-tight">
          MVP development questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: 'What is a Replit agency?',
    answer:
      'A Replit agency is a development firm that uses Replit\'s AI-powered cloud IDE to build and deploy custom software for businesses. Replit eliminates environment setup and DevOps overhead, which means the agency spends 100% of the engagement time building the product, not configuring servers. Code is written in standard TypeScript, deployed automatically, and lives in the client\'s Replit account from the first commit. Pressense is the first Replit agency positioned specifically for founder-led businesses and SMBs.',
  },
  {
    question: 'Is Replit good for real business apps?',
    answer:
      'Yes. Replit was cited by Google\'s AI Overview as the recommended platform for "custom internal tools development." It runs production TypeScript applications with PostgreSQL databases, supports custom domains, and handles deployment automatically. Replit is not appropriate for consumer apps with millions of concurrent users, but for internal tools, MVPs, CRMs, portals, and SaaS products at the 1-to-200-user scale, it is production-ready. The code is portable: if you outgrow Replit, the TypeScript application moves to any other host without a rewrite.',
  },
  {
    question: 'What is the difference between Replit Agent and a Replit developer?',
    answer:
      'Replit Agent generates code from plain-English prompts. It is fast and excellent for prototyping. A Replit developer takes that output, evaluates it for production readiness, adds proper error handling, structures the data model correctly, integrates external APIs securely, and builds the edge cases and admin tools that Agent does not address. Replit Agent produces a starting point. A Replit developer produces a finished product.',
  },
  {
    question: 'What is vibe coding?',
    answer:
      'Vibe coding is the practice of building software by describing what you want in plain English and letting AI tools like Replit Agent generate the code. It is genuinely fast for prototyping and internal tools. The limitation is that vibe-coded apps often lack proper error handling, security reviews, and production-grade architecture. A vibe coding agency bridges that gap: the AI handles generation speed, and the developer handles quality, security, and architecture.',
  },
  {
    question: 'Do Replit apps need to be rewritten before going to production?',
    answer:
      'No. Replit apps built by a professional developer do not need to be rewritten. The issue that gives Replit a "needs rewriting" reputation is AI-generated prototype code that was never reviewed or structured properly. When a Replit developer builds the app with a real data model, proper auth, error handling, and tested integrations from the start, the production-ready version is what gets delivered. We do not prototype first and rewrite second. The first sprint produces production-quality code.',
  },
  {
    question: 'Can Replit apps handle real production traffic?',
    answer:
      'Replit hosts applications on cloud infrastructure with auto-scaling. For internal tools with 5 to 200 concurrent users, and for MVPs at early-stage scale, it handles production traffic without issue. For consumer apps expecting tens of thousands of concurrent users at launch, we would spec a different hosting architecture. The Replit codebase is fully portable and can be deployed to AWS, Vercel, or any other host if traffic requirements change.',
  },
  {
    question: 'How much does Replit development cost?',
    answer:
      'A focused Replit build starts from $1,500 and takes two to four weeks. A full MVP or custom product starts from $5,000 and takes six to eight weeks. Larger or ongoing support engagements are scoped together on a call. Enterprise Replit agencies in the official Solution Partner Program (Accenture, Slalom) charge $150,000 and above. Pressense serves the founder and SMB market with fixed-price builds at startup-appropriate budgets. Every engagement starts with a fixed-price estimate from the diagnostic session.',
  },
]

export function ReplitAgencyFaqSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-14 leading-tight">
          Replit agency questions
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

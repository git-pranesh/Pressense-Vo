export function MvpReplitProblemsSection() {
  const problems = [
    {
      number: '01',
      title: 'Your Replit prototype works in the demo but breaks in production',
      body: 'Replit Agent builds fast. It does not always build correctly. The most common failure mode is a codebase that passes every demo scenario but crumbles the moment an edge case hits: a user submits an empty form, two requests fire at the same time, or the database receives a query it was not designed for. These are not Replit limitations. They are architecture gaps that an experienced developer catches before they become production fires.',
    },
    {
      number: '02',
      title: 'You do not know if the AI-generated code is secure',
      body: 'Replit Agent writes functional code. It does not always write secure code. Secrets sometimes appear in source files. SQL queries are sometimes concatenated rather than parameterised. Auth flows are sometimes custom-rolled rather than built on a proven library. None of this is visible until someone probes it. A security audit before launch is not optional. It is the thing that keeps your first users\' data safe.',
    },
    {
      number: '03',
      title: 'The codebase grew faster than your ability to understand it',
      body: 'You prompted Replit Agent for a feature, it wrote five files, changed three others, and now you have a working build and no idea what holds it together. This is a common and legitimate outcome of AI-assisted development. The issue is not the code, it is the absence of a clear architecture underneath it. When something breaks, you cannot trace it. When a new feature is needed, you cannot add it cleanly.',
    },
    {
      number: '04',
      title: 'Every new feature risks breaking two existing ones',
      body: 'Without an intentional architecture, the codebase becomes a patchwork. You add the payment flow and the user session breaks. You add the admin dashboard and the API routes conflict. This is what happens when AI writes forward without a structural plan. The fix is not more prompting. It is a developer who designs the system before building it.',
    },
    {
      number: '05',
      title: 'You need real auth and payments but Replit Agent keeps getting it wrong',
      body: 'Production authentication requires session management, secure token handling, password reset flows, and role-based access control. Payment integration requires webhook handling, idempotency keys, and error recovery. These are not features you can approximate. They need to be built once, correctly, using well-tested libraries. Replit Agent can scaffold them. It takes a developer to make them production-safe.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Where Vibe Coding Hits Its Ceiling
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          The five problems that stop a Replit prototype from becoming a real product
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Vibe coding is one of the most powerful tools founders have ever had. It is also where most MVPs get stuck. The gap between a working demo and a production-grade SaaS is specific and fixable.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <div className="md:w-16 flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20 font-mono">{p.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">{p.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

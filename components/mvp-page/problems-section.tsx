export function MvpProblemsSection() {
  const problems = [
    {
      heading: 'Why do most MVPs take six months and cost $200K?',
      body1:
        'Traditional development agencies build for enterprise timelines. Discovery takes four weeks. Design takes four weeks. Development starts in month three. By the time the first build is live, the market has moved. The founder has burned through runway. The original hypothesis is six months old.',
      body2:
        'The reason is overhead, not complexity. Most agencies have project managers, account managers, QA teams, and design reviews built into every engagement regardless of scope. You pay for the infrastructure even when your project does not need it. We operate lean. One senior developer, direct founder communication, weekly shipping.',
    },
    {
      heading: 'What happens when you build the wrong features first?',
      body1:
        'Most failed MVPs do not fail because of bad code. They fail because the team spent three months building features that users do not use. Authentication systems. Admin dashboards. Settings pages. Notification preferences. None of this tells you if your core value proposition works.',
      body2:
        'Before we write a line of code, we define the primary value loop: the single action a user takes that proves your hypothesis. Everything else is cut until you have validated that one thing. This is the discipline that makes eight weeks possible.',
    },
    {
      heading: 'Can I just use ChatGPT or Cursor to vibe-code my own MVP?',
      body1:
        'You can, and many founders try. AI coding tools are genuinely powerful — they can scaffold a Next.js app, generate database schemas, and write working API routes faster than any human. The gap shows up later. Vibe-coded apps typically have no auth architecture (or a hand-rolled session cookie), no parameterised queries, no error boundaries, and no test coverage. They work in the demo and break in production.',
      body2:
        'The value Pressense adds is not typing speed — it is engineering judgement. We know which shortcuts are safe (UI scaffolding) and which are not (auth, data access, payments). The result is a codebase you can hand to an investor, a technical co-founder, or a dev team without embarrassment. AI wrote some of it. A developer reviewed all of it.',
    },
    {
      heading: 'Can I use no-code tools instead of custom MVP development?',
      body1:
        'No-code tools like Bubble, Webflow, or Glide are fast to start. For simple use cases they work well. The limitation is the ceiling. The moment you need a data model that does not fit the platform template, a custom integration with a non-standard API, or performance at any meaningful scale, you hit a wall that no amount of workarounds fixes.',
      body2:
        'We build on Replit. That means the codebase is written in standard TypeScript, uses a real PostgreSQL database, and can be handed to any developer in the world without translation. You start fast and you stay flexible as the product grows.',
    },
    {
      heading: 'How do I know if my MVP idea is ready to build?',
      body1:
        'The diagnostic session exists for this question. In sixty minutes, we review your problem hypothesis, your target user, the three to five features you believe are core, and any technical constraints. We tell you whether the scope is buildable in eight weeks as described, what needs to be cut, and what the fixed-price build cost will be.',
      body2:
        'If the scope is right, we start the following week. If it is not, you leave with a clear picture of what to do before coming back. There is no hard sell and no obligation. We built the diagnostic as a genuine filter because misaligned scopes waste everyone&apos;s time.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Common Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-14 leading-tight">
          What founders ask before starting MVP development
        </h2>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.heading}
              className={`py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

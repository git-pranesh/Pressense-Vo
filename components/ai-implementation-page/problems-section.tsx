export function AIImplementationProblemsSection() {
  const problems = [
    {
      id: 'where-ai-helps',
      heading: 'Where do I start with AI in my small business?',
      p1: 'The honest answer is: with the task that costs you the most time and has the most predictable output. That is usually email drafting, appointment or enquiry responses, document creation, or data entry from one system to another. These are the tasks where AI produces a usable first draft nine times out of ten, and your team only needs to review, not rewrite.',
      p2: 'When Pressense does an AI diagnostic, we spend 60 to 90 minutes mapping your week. We ask what you do repeatedly, what takes longer than it should, and what you currently do manually that has a pattern to it. From that session we produce a ranked list of AI opportunities with estimated time savings for each. That list becomes the build roadmap.',
    },
    {
      id: undefined,
      heading: 'How do I implement AI without disrupting my team?',
      p1: 'The biggest reason AI implementations fail in small businesses is not the technology. It is adoption. Someone builds a tool, nobody uses it, and the business concludes that AI does not work for them. The tool works fine. The rollout did not.',
      p2: 'Pressense stays involved through the rollout phase. We run the first few uses of every workflow with your team present. We adjust based on what they actually find confusing or time-consuming. We do not hand you a manual and leave. The tools we build become habits because we build them around how your team already works, not how a software demo works.',
    },
    {
      id: undefined,
      heading: 'What is the best AI tool for a small business?',
      p1: 'The best AI tool depends on what problem you are solving. Claude is our primary tool for document drafting, analysis, and client communication. GPT-4 is strong for structured data extraction and coding tasks. Make and n8n connect AI actions to your existing software. Notion and Airtable store and organise the outputs. We use the right tool for each job rather than building everything in one platform.',
      p2: 'Most small businesses already have most of the software they need. The gap is not more tools. It is the workflows connecting what they already have. We build those connections, often without requiring any new software subscriptions beyond the AI model itself.',
    },
    {
      id: undefined,
      heading: 'How long does AI implementation take for a small business?',
      p1: 'A focused first implementation typically takes four to six weeks. The first two weeks are the diagnostic and workflow design. Weeks three and four are the build. Weeks five and six are testing, adjustment, and team rollout. By week six your team should be using at least one AI workflow in their normal day.',
      p2: 'We do not scope entire AI transformations on the first engagement. We build one or two high-impact workflows first, confirm the time savings are real, then expand from there. This keeps the project manageable and builds team confidence before we move to more complex automation.',
    },
  ]

  return (
    <section className="py-16 border-t border-border/40" aria-label="Common AI implementation questions for small business">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">What We Solve</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance mb-10">
          The questions every small business owner asks before starting
        </h2>

        <div className="flex flex-col gap-10">
          {problems.map((p) => (
            <div key={p.heading} id={p.id}>
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{p.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

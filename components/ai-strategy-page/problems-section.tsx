export function AIStrategyProblems() {
  return (
    <section
      className="py-16 bg-background"
      aria-labelledby="problems-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            The real problems
          </span>
          <h2
            id="problems-heading"
            className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-12"
          >
            Why most AI strategies fail before they start
          </h2>

          <div className="space-y-12">

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                How to implement AI in a $5M business
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A $5M business does not need an enterprise AI transformation programme. It needs three to five high-value workflows automated with tools that cost under $300 a month and deliver measurable results in the first 30 days. The mistake most businesses make is starting with a tool instead of a problem. You pick ChatGPT because it is popular. Then you try to find a use for it. That is backwards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The right approach is to list every task that gets done more than once a week, takes more than 15 minutes, and follows a consistent pattern. Those are your automation candidates. Then you find the tool that fits the task, not the other way around. At this revenue level, the highest-ROI targets are almost always proposal generation, client reporting, lead qualification, and internal status updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                AI workflows for operations teams
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Operations teams are the highest-value target for AI in a growing business. They own the processes that touch every department: hiring, onboarding, reporting, compliance, vendor management, and project tracking. When you automate one operations workflow, the time savings compound across every team that relies on it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The most successful AI workflow implementations in ops start with a single data-heavy task. Think weekly reporting that takes someone four hours to compile from three systems. Or the onboarding checklist that gets emailed to new contractors and then manually chased. One person, one workflow, one measurable outcome. Scale from there once you have proof.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                How to audit your business for AI readiness
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                An AI readiness audit looks at four things: your data, your processes, your team, and your tools. Most businesses fail the data check first. AI systems need clean, consistent, accessible data to work reliably. If your customer records live in three spreadsheets and a CRM that nobody updates, that needs to be fixed before any AI layer makes sense on top of it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Process readiness means your workflows are documented well enough that a new hire could follow them. If a process lives entirely in one person's head, you cannot automate it yet. Team readiness means at least one person is willing to own the outcome and adapt their behaviour. Tool readiness means you are not adding AI on top of already-broken software. Our diagnostic session works through all four dimensions in 30 minutes.
              </p>
            </div>

            <div id="ai-vs-automation">
              <h3 className="text-lg font-medium text-foreground mb-3">
                AI vs automation: what is the difference for business owners?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Automation handles tasks with fixed rules: if this happens, do that. It is fast, consistent, and cheap. A Zapier workflow that moves a completed form into your CRM is automation. It does not learn. It does not adapt. It just runs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                AI handles tasks that require judgement. Summarising a 40-page RFP. Drafting a proposal that matches your tone and the client context. Flagging which leads are worth calling this week based on behaviour signals. For most growing businesses, the right answer is both: automation for the rule-based repetitive work, AI for the tasks that used to require a person to think. The strategy engagement maps which is which for your specific operations.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

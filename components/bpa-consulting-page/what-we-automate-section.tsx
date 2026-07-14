const processes = [
  {
    area: 'Client onboarding',
    manual: 'Manually sending welcome emails, creating folders, setting up accounts',
    automated: 'Triggered onboarding sequence on contract sign — CRM, folders, comms, and kickoff all fire automatically',
  },
  {
    area: 'Sales follow-up',
    manual: 'Sales rep manually logs calls, sends follow-ups from memory, chases stale deals',
    automated: 'CRM triggers follow-up sequences based on deal stage, time elapsed, and contact behaviour',
  },
  {
    area: 'Reporting and dashboards',
    manual: 'Team member pulls numbers from 4 systems into a spreadsheet every Monday morning',
    automated: 'Live dashboard pulls from all sources, updates automatically, available on demand',
  },
  {
    area: 'Invoice and payment workflows',
    manual: 'Accounting manually chases overdue invoices, reconciles payments across systems',
    automated: 'Payment system triggers reminders, updates CRM deal status, flags exceptions for human review',
  },
  {
    area: 'Content and publishing',
    manual: 'Writer drafts, editor reviews in email threads, someone manually publishes and shares',
    automated: 'Content moves through stages in a structured workflow — review, approval, schedule, publish — with one person owning each step',
  },
  {
    area: 'Lead qualification',
    manual: 'Sales team manually reviews every inbound lead to decide if it is worth a call',
    automated: 'Lead data triggers a scoring workflow — qualified leads go straight to calendar booking, unqualified leads enter a nurture sequence',
  },
]

export function BPAWhatWeAutomateSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            What We Automate
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-4">
            The six processes most founder-led businesses automate first
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These are not the only processes worth automating. They are the ones that cost growing businesses the most time and produce the most visible results when fixed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {processes.map((item) => (
            <article
              key={item.area}
              className="rounded-2xl p-7 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">{item.area}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">Before</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.manual}</p>
                </div>
                <div className="border-t border-border/30 pt-3">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide block mb-1">After</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.automated}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

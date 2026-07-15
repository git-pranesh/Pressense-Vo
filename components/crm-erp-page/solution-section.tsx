import Link from 'next/link'

const services = [
  {
    name: 'CRM Design and Build',
    outcome: 'Pipeline that reflects reality',
    description:
      'We map the actual sales process, define the pipeline stages, design the qualification logic, and build the CRM inside HubSpot, Notion, Airtable, or a custom tool. Every field, every stage, and every automation is designed around how the business actually sells, not a generic template.',
    detail: 'Covers ICP definition, pipeline stage logic, lead qualification scoring, ownership rules, follow-up automation, and reporting dashboards.',
  },
  {
    name: 'ERP-Lite Systems',
    outcome: 'Operations visible without asking',
    description:
      'Businesses that have outgrown spreadsheets but are not ready for a full ERP need a lightweight operational layer that gives leadership visibility across orders, delivery, vendors, approvals, finance, and reporting. We design and build ERP-lite systems that connect these pieces into a single operational view.',
    detail: 'Covers order management, delivery tracking, vendor management, approval workflows, finance visibility, and operational reporting.',
  },
  {
    name: 'Sales Pipeline and Follow-Up Systems',
    outcome: 'No lead falls through a crack',
    description:
      'A sales pipeline without a follow-up system is just a list of opportunities that are slowly going cold. We build the workflow, ownership rules, reminder triggers, and automation that ensures every lead gets the right follow-up at the right time without the founder chasing the team.',
    detail: 'Covers pipeline stages, follow-up sequences, task automation, handoff triggers, and pipeline health reporting.',
  },
  {
    name: 'Reporting and Operational Dashboards',
    outcome: 'Answers without asking the team',
    description:
      'We build reporting dashboards that give leadership real-time answers to the questions they currently have to ask manually: revenue by channel, pipeline by stage, delivery status by client, and team workload by project. Built inside your existing tools or as a connected dashboard layer.',
    detail: 'Covers revenue reporting, pipeline analytics, delivery status tracking, team workload visibility, and metric trend monitoring.',
  },
  {
    name: 'Workflow Automation and Integration',
    outcome: 'Fewer manual updates',
    description:
      'Most operational friction in growing businesses comes from manual updates, manual handoffs, and manual notifications that were originally someone\'s job and have now become a bottleneck. We automate the repeatable parts of the operating process so the team can focus on the parts that require judgment.',
    detail: 'Works alongside the AI automation track. Covers CRM-to-delivery handoffs, finance tool integration, notification logic, and status update automation.',
  },
]

export function CrmSolutionSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">
          What we design and build
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Every CRM and ERP engagement starts with mapping the operating workflow before touching any software. We design the process first, then build the system inside the right tools. See{' '}
          <Link href="/custom-internal-tools" className="text-primary hover:underline">custom internal tools</Link>{' '}
          if the workflow is too specific for off-the-shelf software.
        </p>

        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  {service.outcome}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">{service.description}</p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
          >
            Start With a Diagnostic
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

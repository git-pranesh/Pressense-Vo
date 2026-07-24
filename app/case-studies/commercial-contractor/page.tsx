import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: '116 Hours Recovered. A$1.55M in Claims, Seven Days Earlier. | Pressense',
  description:
    'A Sydney commercial contractor was losing 161 hours a month to subcontractor claims, variation reconciliation and spreadsheet-based administration. We built the missing commercial-control layer. 116 hours released. A$91,000 in annual capacity. A$360,000 working-capital improvement.',
  openGraph: {
    title: '116 Hours Recovered. A$1.55M in Claims, Seven Days Earlier. | Pressense',
    description:
      'A Sydney commercial contractor was losing 161 hours a month to subcontractor claims, variation reconciliation and spreadsheet-based administration. 116 hours released. A$91,000 annual capacity.',
    url: '/case-studies/commercial-contractor',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Commercial Contractor Case Study' }],
  },
  alternates: { canonical: '/case-studies/commercial-contractor' },
  twitter: {
    card: 'summary_large_image',
    title: '116 Hours Recovered. A$1.55M in Claims, Seven Days Earlier.',
    description: 'A Sydney commercial contractor lost 161 hours a month to admin. We built the missing commercial-control layer. 116 hours released. A$360,000 working-capital improvement.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const outcomeStats = [
  { value: '72%', label: 'Reduction in commercial administration' },
  { value: '116 hrs', label: 'Staff hours released every month' },
  { value: 'A$91k', label: 'Annual operational capacity value' },
  { value: '7 days', label: 'Earlier client claim submission' },
]

const clientProfile = [
  { label: 'Industry', value: 'Commercial construction' },
  { label: 'Location', value: 'Sydney, Australia' },
  { label: 'Employees', value: '46' },
  { label: 'Annual revenue', value: 'Approx. A$18 million' },
  { label: 'Active projects', value: 'Eight' },
  { label: 'Regular subcontractors', value: '63' },
  { label: 'Monthly subcontractor claims', value: 'Approx. 75' },
  { label: 'Monthly variations', value: 'Approx. 28' },
  { label: 'Monthly client claims', value: 'Approx. A$1.55 million' },
]

const painPoints = [
  {
    heading: 'Subcontractor claims were difficult to validate',
    body: 'Each subcontractor submitted claims differently. The commercial team had to manually check contract value, progress, previous payments, retention, unapproved variations and compliance documents for each of the 75 monthly claims. The process depended on experienced staff remembering where to look.',
  },
  {
    heading: 'Variations were disconnected from the financial workflow',
    body: 'A variation could begin as a site instruction, an email, a photograph or a conversation. It was priced in one spreadsheet, discussed through email, and entered into accounting only after approval. There was no reliable connection between the work requested, the price submitted, the client decision, the subcontractor cost, and the next payment claim.',
  },
  {
    heading: 'Compliance was managed through reminders',
    body: 'Public-liability certificates, workers compensation documents, licences and induction records were stored in folders and tracked in spreadsheets. Expired documents were often discovered when a subcontractor was due on site, a claim was being assessed, or an audit was approaching.',
  },
  {
    heading: 'Management could not see commercial exposure',
    body: 'The director and commercial manager could see total project values. They could not immediately answer: how much work had been performed but not approved? Which variations had been waiting more than 14 days? Which claims were blocked? Which projects were likely to miss the deadline?',
  },
  {
    heading: 'Month-end controlled the team',
    body: 'The commercial manager described the process as "reconstructing the month after it had already happened." The final week of each month was consumed by chasing site updates, reconciling spreadsheets, locating supporting evidence, confirming variation status and assembling client claim packs.',
  },
]

const baselineTable = [
  { activity: 'Reviewing subcontractor claims', volume: '75 claims', time: '35 min', hours: '43.8 hrs' },
  { activity: 'Chasing missing or incorrect information', volume: '110 exceptions', time: '15 min', hours: '27.5 hrs' },
  { activity: 'Reconciling variations', volume: '28 variations', time: '45 min', hours: '21 hrs' },
  { activity: 'Preparing client claim packs', volume: '8 projects', time: '3.5 hrs', hours: '28 hrs' },
  { activity: 'Updating compliance records', volume: '145 document events', time: '8 min', hours: '19.3 hrs' },
  { activity: 'Producing status reports', volume: '5 hrs / week', time: '', hours: '21.7 hrs' },
]

const workflowsMapped = [
  {
    number: '01',
    heading: 'Subcontractor onboarding',
    body: 'From initial appointment through company details, ABN and banking information, contract execution, insurance documents, workers compensation evidence, licences, safety documentation, site induction and approval to commence work.',
  },
  {
    number: '02',
    heading: 'Variation management',
    body: 'From the original instruction through scope clarification, evidence collection, subcontractor quotation, internal margin review, client submission, approval or rejection, budget update and claim inclusion.',
  },
  {
    number: '03',
    heading: 'Subcontractor claims',
    body: 'From claim receipt through contract-value verification, progress confirmation, variation reconciliation, retention calculation, compliance check, payment-schedule preparation, accounting approval and payment status.',
  },
  {
    number: '04',
    heading: 'Client payment claims',
    body: 'From monthly cut-off through site-progress capture, supporting evidence, variation status, cost exposure, claim calculation, internal approval, submission and payment tracking.',
  },
  {
    number: '05',
    heading: 'Management reporting',
    body: 'From project-level data through committed cost, forecast cost, approved and unapproved revenue, margin exposure, retention, claims submitted and payments received.',
  },
]

const systemModules = [
  {
    title: 'Subcontractor control centre',
    body: 'Every subcontractor had a structured record connected to their active projects, showing contract value, approved variations, claims to date, retention held, compliance status and document expiry dates. Automated alerts were issued 30, 14 and 7 days before expiry. Subcontractors received a secure request to upload updated documents. Staff were only notified on failure to respond or when a document required review.',
  },
  {
    title: 'Structured claim submission',
    body: 'Subcontractors submitted claims against the live subcontract record. The system displayed original contract value, approved variations, revised contract value, previous certifications, current claim, retention and remaining balance. Claims exceeding available value were automatically flagged. Claims containing unapproved variations could not silently enter the payment workflow.',
  },
  {
    title: 'Variation workflow',
    body: 'Every variation received a unique record from the moment it was identified. The record connected project, site instruction, description, photographs, subcontractor cost, internal markup, client price, submission date, approval status, schedule impact and claim status. Variations were separated into stages: Identified, Cost requested, Priced, Internally reviewed, Submitted, Approved, Claimed, Paid. Items over 14 days were escalated to the project manager and commercial manager.',
  },
  {
    title: 'Client claim workspace',
    body: 'Each project had a monthly claim workspace showing contract value, approved variations, current progress, previous claims, current claim, retention, unapproved variation exposure and submission deadline. Site teams uploaded evidence throughout the month. By cut-off, most of the claim was already assembled.',
  },
  {
    title: 'Commercial dashboard',
    body: 'Management had one live view across all active projects: contract value, revised contract value, claims submitted, cash received, outstanding claims, retention, approved and unapproved variations, projected final margin and compliance exceptions. An attention view surfaced claims approaching deadline, variations awaiting client action, subcontractors with expired documents and projects with increasing commercial exposure.',
  },
]

const beforeSteps = [
  'Subcontractor emails a spreadsheet',
  'Contract administrator checks several registers',
  'Project manager confirms site progress by email',
  'Variation values are reconciled manually',
  'Compliance documents are checked in folders',
  'Errors trigger another email chain',
  'Claim is entered into accounting software',
  'Commercial manager updates reporting spreadsheet',
  'Client claim is assembled at month-end',
]

const afterSteps = [
  'Subcontractor submits against the live contract',
  'System validates available contract value',
  'Project manager confirms progress in-system',
  'Variation status is already connected',
  'Compliance is checked automatically',
  'Exceptions are routed to the right person',
  'Approved claim moves to finance',
  'Portfolio reporting updates immediately',
  'Client claim pack is already substantially complete',
]

const outcomeTable = [
  { activity: 'Subcontractor-claim review', before: '43.8 hrs', after: '15 hrs', reclaimed: '28.8 hrs' },
  { activity: 'Missing-information follow-up', before: '27.5 hrs', after: '5.5 hrs', reclaimed: '22 hrs' },
  { activity: 'Variation reconciliation', before: '21 hrs', after: '7 hrs', reclaimed: '14 hrs' },
  { activity: 'Client-claim preparation', before: '28 hrs', after: '6 hrs', reclaimed: '22 hrs' },
  { activity: 'Compliance administration', before: '19.3 hrs', after: '4.8 hrs', reclaimed: '14.5 hrs' },
  { activity: 'Status reporting', before: '21.7 hrs', after: '6.5 hrs', reclaimed: '15.2 hrs' },
]

const additionalResults = [
  {
    stat: '71%',
    label: 'Fewer claims requiring major rework',
    detail: '24 of 75 monthly claims required substantial correction. After structured submission and automatic value checking, this fell to 7.',
  },
  {
    stat: '71%',
    label: 'Fewer ageing variations',
    detail: '38 variations had been open more than 14 days across active projects. Once every variation had an owner, status, age and escalation path, this fell to 11.',
  },
  {
    stat: '98%',
    label: 'Subcontractor compliance completeness',
    detail: 'Fully current compliance documents rose from 76% to 98%. Expired documents were no longer discovered only when a subcontractor arrived on site.',
  },
]

export default function CommercialContractorCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="116 Hours Recovered. A$1.55M in Claims, Seven Days Earlier."
        pageDescription="A Sydney commercial contractor was losing 161 hours a month to subcontractor claims, variation reconciliation and spreadsheet administration. We built the missing commercial-control layer."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: '116 Hours Recovered', url: '/case-studies/commercial-contractor' },
        ]}
      />

      <main className="min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="border-b border-border/40 pt-24 pb-0">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm" style={{ color: '#6B5D51' }}>
                <li>
                  <Link href="/case-studies" className="hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 2.5L7.5 6l-3 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
                <li className="text-foreground font-medium" aria-current="page">116 Hours Recovered</li>
              </ol>
            </nav>

            <div className="max-w-3xl pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Commercial Construction, Sydney
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Commercial Workflow
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Client name withheld
                </span>
              </div>

              <h1
                className="font-normal leading-[1.06] text-balance mb-6"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 54px)', color: '#1A0F06' }}
              >
                116 hours recovered. A$1.55 million in claims, seven days earlier.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B5D51' }}>
                A privately owned Sydney commercial contractor. 46 staff. Eight active projects. 63 regular subcontractors. A$18 million in annual revenue. And a commercial team spending 161 hours every month on administration that should not have required a person.
              </p>
            </div>
          </div>
        </section>

        {/* ── Outcome stats ─────────────────────────────────────────── */}
        <section className="py-12 border-b border-border/40" aria-label="Key outcomes">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: '#6B5D51' }}>
              Outcome
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
              {outcomeStats.map((s) => (
                <div key={s.label} className="bg-background p-8">
                  <p
                    className="font-bold leading-none mb-2"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(32px, 4vw, 52px)', color: '#1A0F06' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm leading-snug" style={{ color: '#6B5D51' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main content + sidebar ─────────────────────────────────── */}
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl py-16">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16 items-start">

            {/* ── Left column ──────────────────────────────────────── */}
            <div className="space-y-20">

              {/* The client */}
              <section aria-labelledby="client-heading">
                <h2 id="client-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  The client
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#4A3F35' }}>
                  A privately owned commercial construction company based in Sydney, delivering office fit-outs, refurbishments and small-to-medium commercial projects across New South Wales. The contractor already used established construction and accounting software. But its commercial team still maintained a collection of spreadsheets beside those systems. The systems recorded pieces of the project. They did not create one reliable commercial workflow.
                </p>
                <div className="rounded-2xl border border-border/60 overflow-hidden">
                  {clientProfile.map((row, i) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between px-5 py-3 text-sm"
                      style={{
                        background: i % 2 === 0 ? 'rgba(26,15,6,0.02)' : 'transparent',
                        borderTop: i > 0 ? '1px solid rgba(26,15,6,0.06)' : 'none',
                      }}
                    >
                      <span style={{ color: '#6B5D51' }}>{row.label}</span>
                      <span className="font-medium" style={{ color: '#1A0F06' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* The problem */}
              <section aria-labelledby="problem-heading">
                <h2 id="problem-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  The problem
                </h2>
                <p className="text-xl leading-relaxed mb-10 text-balance" style={{ fontFamily: GARAMOND, color: '#1A0F06' }}>
                  Every month ended with the same scramble. Good software surrounded a broken information chain.
                </p>
                <div className="space-y-6">
                  {painPoints.map((p) => (
                    <div key={p.heading} className="pl-5 border-l-2 border-border/60">
                      <p className="font-semibold mb-1.5 text-sm" style={{ color: '#1A0F06' }}>{p.heading}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>{p.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Baseline effort table */}
              <section aria-labelledby="baseline-heading">
                <h2 id="baseline-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  The baseline
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A3F35' }}>
                  The diagnostic quantified the administrative workload before a single line of code was written.
                </p>
                <div className="rounded-2xl border border-border/60 overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto_auto_auto] text-xs font-semibold uppercase tracking-wide px-5 py-3" style={{ background: 'rgba(26,15,6,0.04)', color: '#6B5D51', borderBottom: '1px solid rgba(26,15,6,0.08)' }}>
                    <span>Activity</span>
                    <span className="text-right pr-6">Volume</span>
                    <span className="text-right pr-6">Avg. time</span>
                    <span className="text-right">Monthly effort</span>
                  </div>
                  {baselineTable.map((row, i) => (
                    <div
                      key={row.activity}
                      className="grid grid-cols-[1fr_auto_auto_auto] items-center px-5 py-3.5 text-sm"
                      style={{
                        background: i % 2 === 0 ? 'rgba(26,15,6,0.01)' : 'transparent',
                        borderTop: i > 0 ? '1px solid rgba(26,15,6,0.05)' : 'none',
                      }}
                    >
                      <span style={{ color: '#1A0F06' }}>{row.activity}</span>
                      <span className="text-right pr-6" style={{ color: '#6B5D51' }}>{row.volume}</span>
                      <span className="text-right pr-6" style={{ color: '#6B5D51' }}>{row.time}</span>
                      <span className="text-right font-semibold" style={{ color: '#1A0F06' }}>{row.hours}</span>
                    </div>
                  ))}
                  <div
                    className="grid grid-cols-[1fr_auto_auto_auto] items-center px-5 py-3.5 text-sm font-bold"
                    style={{ borderTop: '2px solid rgba(26,15,6,0.12)', background: 'rgba(26,15,6,0.03)' }}
                  >
                    <span style={{ color: '#1A0F06' }}>Total</span>
                    <span className="col-span-2 pr-6" />
                    <span className="text-right" style={{ color: '#1A0F06' }}>161.3 hrs</span>
                  </div>
                </div>
                <p className="mt-4 text-sm" style={{ color: '#6B5D51' }}>
                  More than one full-time employee&apos;s month was being consumed by administration, checking and reconciliation.
                </p>
              </section>

              {/* Diagnostic */}
              <section aria-labelledby="diagnostic-heading">
                <h2 id="diagnostic-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  How Pressense diagnosed the bottleneck
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A3F35' }}>
                  The company initially believed it needed a better subcontractor portal. The portal was only one part of the problem. Pressense followed the commercial workflow from the moment a subcontractor was appointed until the final payment and release of retention. We found one broken information chain, not five separate problems.
                </p>
                <p className="text-sm font-semibold mb-5" style={{ color: '#1A0F06' }}>
                  Five connected workflows mapped
                </p>
                <div className="space-y-4">
                  {workflowsMapped.map((w) => (
                    <div key={w.number} className="flex gap-4">
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: 'rgba(26,15,6,0.06)', color: '#6B5D51' }}
                        aria-hidden="true"
                      >
                        {w.number}
                      </span>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: '#1A0F06' }}>{w.heading}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>{w.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* What was built */}
              <section aria-labelledby="built-heading">
                <h2 id="built-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  What Pressense built
                </h2>
                <p className="text-xl leading-relaxed mb-2 text-balance" style={{ fontFamily: GARAMOND, color: '#1A0F06' }}>
                  A commercial project-control system.
                </p>
                <p className="text-sm leading-relaxed mb-10" style={{ color: '#4A3F35' }}>
                  The system connected subcontractor onboarding, compliance, variations, claims and payment status in one operational workflow. It did not replace the company&apos;s accounting or project-management software. It controlled the information moving between them.
                </p>
                <div className="space-y-6">
                  {systemModules.map((m, i) => (
                    <div key={m.title} className="rounded-2xl border border-border/50 p-6" style={{ background: 'rgba(26,15,6,0.015)' }}>
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 text-xs font-bold tabular-nums mt-0.5" style={{ color: '#6B5D51' }}>
                          0{i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-sm mb-2" style={{ color: '#1A0F06' }}>{m.title}</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>{m.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Before / After workflow */}
              <section aria-labelledby="workflow-heading">
                <h2 id="workflow-heading" className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: '#6B5D51' }}>
                  The new workflow
                </h2>
                <div className="grid sm:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
                  {/* Before */}
                  <div className="bg-background p-6">
                    <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#6B5D51' }}>Before</p>
                    <ol className="space-y-3">
                      {beforeSteps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3">
                          <span
                            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                            style={{ background: 'rgba(26,15,6,0.07)', color: '#6B5D51' }}
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-snug" style={{ color: '#4A3F35' }}>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {/* After */}
                  <div className="p-6" style={{ background: 'rgba(26,15,6,0.03)' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#1A0F06' }}>After</p>
                    <ol className="space-y-3">
                      {afterSteps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3">
                          <span
                            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                            style={{ background: 'rgba(26,15,6,0.12)', color: '#1A0F06' }}
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-snug font-medium" style={{ color: '#1A0F06' }}>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </section>

              {/* Outcome table */}
              <section aria-labelledby="outcome-heading">
                <h2 id="outcome-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  Outcome
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-balance" style={{ fontFamily: GARAMOND, color: '#1A0F06' }}>
                  Commercial administration fell by 72%.
                </p>

                {/* Reduction table */}
                <div className="rounded-2xl border border-border/60 overflow-hidden mb-10">
                  <div className="grid grid-cols-[1fr_auto_auto_auto] text-xs font-semibold uppercase tracking-wide px-5 py-3" style={{ background: 'rgba(26,15,6,0.04)', color: '#6B5D51', borderBottom: '1px solid rgba(26,15,6,0.08)' }}>
                    <span>Activity</span>
                    <span className="text-right pr-6">Before</span>
                    <span className="text-right pr-6">After</span>
                    <span className="text-right">Reclaimed</span>
                  </div>
                  {outcomeTable.map((row, i) => (
                    <div
                      key={row.activity}
                      className="grid grid-cols-[1fr_auto_auto_auto] items-center px-5 py-3.5 text-sm"
                      style={{
                        background: i % 2 === 0 ? 'rgba(26,15,6,0.01)' : 'transparent',
                        borderTop: i > 0 ? '1px solid rgba(26,15,6,0.05)' : 'none',
                      }}
                    >
                      <span style={{ color: '#1A0F06' }}>{row.activity}</span>
                      <span className="text-right pr-6" style={{ color: '#6B5D51' }}>{row.before}</span>
                      <span className="text-right pr-6" style={{ color: '#6B5D51' }}>{row.after}</span>
                      <span className="text-right font-semibold" style={{ color: '#1A0F06' }}>{row.reclaimed}</span>
                    </div>
                  ))}
                  <div
                    className="grid grid-cols-[1fr_auto_auto_auto] items-center px-5 py-3.5 text-sm font-bold"
                    style={{ borderTop: '2px solid rgba(26,15,6,0.12)', background: 'rgba(26,15,6,0.03)' }}
                  >
                    <span style={{ color: '#1A0F06' }}>Total</span>
                    <span className="text-right pr-6" style={{ color: '#6B5D51' }}>161.3 hrs</span>
                    <span className="text-right pr-6" style={{ color: '#6B5D51' }}>44.8 hrs</span>
                    <span className="text-right" style={{ color: '#1A0F06' }}>116.5 hrs</span>
                  </div>
                </div>

                {/* Additional results */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  {additionalResults.map((r) => (
                    <div key={r.stat} className="rounded-2xl border border-border/50 p-5" style={{ background: 'rgba(26,15,6,0.02)' }}>
                      <p
                        className="font-bold leading-none mb-2"
                        style={{ fontFamily: GARAMOND, fontSize: '2rem', color: '#1A0F06' }}
                      >
                        {r.stat}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#6B5D51' }}>{r.label}</p>
                      <p className="text-xs leading-relaxed" style={{ color: '#4A3F35' }}>{r.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Working capital narrative */}
                <div className="rounded-2xl border border-border/50 p-6 space-y-4" style={{ background: 'rgba(26,15,6,0.02)' }}>
                  <p className="font-semibold text-sm" style={{ color: '#1A0F06' }}>A$360,000 working-capital timing improvement</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>
                    Before the system, the monthly client-claim process took an average of 9.5 days after the project cut-off. With evidence, progress, variations and cost information collected throughout the month, the claim pack could be finalised in approximately 2.5 days. That moved approximately A$1.55 million in monthly claims into the payment process seven days earlier.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>
                    At average daily billings of A$51,667, moving the claim cycle forward by seven days produced a working-capital timing effect of approximately A$360,000. This was not additional revenue. It represented money entering the certification and payment cycle earlier.
                  </p>
                </div>
              </section>

              {/* What changed after 90 days */}
              <section aria-labelledby="change-heading">
                <h2 id="change-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  What changed after the first 90 days
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A3F35' }}>
                  The most important result was not that the contractor had another internal application. Commercial information stopped living in separate personal systems.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A3F35' }}>
                  Project managers no longer kept private variation registers. Contract administrators no longer maintained a second version of subcontractor values. The commercial manager no longer spent the first week of every month rebuilding project status.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A3F35' }}>
                  Monthly project reviews changed too. Instead of discussing whether the information was correct, the leadership team could focus on which variation required escalation, which project was drifting from its margin, which client claim was at risk, and where management attention would have the greatest effect.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>
                  The company also stopped treating every problem as a month-end issue. Because exceptions appeared as they happened, employees could resolve them during the month.
                </p>
              </section>

              {/* Why custom */}
              <section aria-labelledby="why-custom-heading">
                <h2 id="why-custom-heading" className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#6B5D51' }}>
                  Why a custom system was the right answer
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A3F35' }}>
                  The company did not need to replace its accounting platform or abandon its construction project-management software. It needed the missing operational layer between the site, the project team, the commercial team, subcontractors, finance and management.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A3F35' }}>
                  Off-the-shelf systems handled individual parts of the process. The custom system handled the way this particular contractor moved commercial information through the business. That distinction was responsible for the outcome.
                </p>
              </section>

            </div>

            {/* ── Sticky sidebar ───────────────────────────────────── */}
            <aside className="hidden lg:block sticky top-24 space-y-6" aria-label="Impact summary">

              {/* Impact summary card */}
              <div className="rounded-2xl border border-border/60 p-6" style={{ background: 'rgba(26,15,6,0.025)' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>
                  Impact
                </p>
                <div className="space-y-4">
                  {[
                    { value: '72%', label: 'Reduction in commercial admin' },
                    { value: '116 hrs', label: 'Released every month' },
                    { value: 'A$91k', label: 'Annual capacity value' },
                    { value: '7 days', label: 'Earlier claim submission' },
                    { value: 'A$360k', label: 'Working-capital improvement' },
                    { value: '71%', label: 'Fewer claims requiring rework' },
                    { value: '98%', label: 'Compliance completeness' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-3">
                      <span className="text-xs" style={{ color: '#6B5D51' }}>{s.label}</span>
                      <span className="text-sm font-bold shrink-0" style={{ color: '#1A0F06' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client profile card */}
              <div className="rounded-2xl border border-border/60 p-5">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B5D51' }}>
                  Client profile
                </p>
                <div className="space-y-2.5">
                  {clientProfile.slice(0, 5).map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-2">
                      <span className="text-xs" style={{ color: '#6B5D51' }}>{row.label}</span>
                      <span className="text-xs font-medium text-right" style={{ color: '#1A0F06' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-border/60 p-5" style={{ background: 'rgba(26,15,6,0.02)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#1A0F06', fontFamily: GARAMOND, fontSize: '1.1rem' }}>
                  Recognise this pattern?
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#6B5D51' }}>
                  If your commercial team is spending more time maintaining data than using it, the problem is the missing layer between your systems.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center text-sm font-medium px-4 py-2.5 rounded-xl transition-colors"
                  style={{ background: '#1A0F06', color: '#EDEBE5' }}
                >
                  Start a free diagnostic
                </Link>
              </div>

            </aside>
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────── */}
        <section className="py-12 lg:py-16 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <AnchorCard
              headline="Find out what your admin is actually costing you."
              subheadline="We map the workflow, quantify the cost and build the missing operational layer. No pitch until we have identified the problem."
              primaryCta={{ label: 'Start a free diagnostic', href: '/contact' }}
              secondaryCta={{ label: 'See all case studies', href: '/case-studies' }}
              stats={[
                { value: '116 hrs', label: 'Released / month' },
                { value: 'A$91k', label: 'Annual capacity' },
                { value: '7 days', label: 'Earlier claims' },
              ]}
            />
          </div>
        </section>

      </main>
    </>
  )
}

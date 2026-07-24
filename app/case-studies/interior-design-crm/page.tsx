import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'The Sales Process That Enforces Itself | Pressense',
  description:
    'An interior design company was running its sales process through a master spreadsheet, WhatsApp and memory. We built an enforced operating system: six mandatory gates, automated SLA detection, controlled discount approvals and 14 management reports.',
  openGraph: {
    title: 'The Sales Process That Enforces Itself | Pressense',
    description:
      'Six mandatory gates. Hourly SLA detection. 100% discount traceability. 14 live reports. An interior design company replaced its master spreadsheet with a sales system that enforces every handoff.',
    url: '/case-studies/interior-design-crm',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Interior Design CRM Case Study' }],
  },
  alternates: { canonical: '/case-studies/interior-design-crm' },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sales Process That Enforces Itself | Pressense',
    description:
      'Six mandatory gates. Hourly SLA detection. 100% discount traceability. 14 live reports.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const outcomeStats = [
  { value: '6', label: 'Mandatory gates preventing incomplete progression' },
  { value: '100%', label: 'SLA breaches detectable within one hourly check' },
  { value: '14', label: 'Live management reports replacing manual reconciliation' },
  { value: '15–20%', label: 'Benchmark-supported sales productivity opportunity' },
]

const clientProfile = [
  { label: 'Industry', value: 'Interior design & home renovation' },
  { label: 'Market', value: 'India' },
  { label: 'Sales roles', value: 'Designer, CRE, Business Lead, Branch Head' },
  { label: 'Lead sources', value: 'Meta, Google, forms, referrals' },
  { label: 'Pipeline stages', value: '7 named stages' },
  { label: 'Existing tools', value: 'Google Sheets, WhatsApp, email' },
  { label: 'Client name', value: 'Withheld' },
  { label: 'Engagement', value: 'Custom CRM build' },
]

const painPoints = [
  {
    heading: 'Leads could move forward without being ready',
    body: 'A lead could be marked qualified without a confirmed budget. A proposal could begin without the floor plan. A customer could enter onboarding without a final quotation. The process existed as operating knowledge, not as enforcement.',
  },
  {
    heading: 'Handoffs were soft',
    body: 'When a lead changed owner, the new employee had to search the spreadsheet, read WhatsApp messages, ask a colleague, call the customer again and reconstruct what had already been discussed. Some leads fell between roles entirely.',
  },
  {
    heading: 'Follow-ups happened when someone remembered',
    body: 'No systematic service-level tracking existed for first contact, qualification, proposal preparation or presentation. Managers discovered problems only after reviewing the spreadsheet. There was no consistent way to distinguish an active opportunity from a forgotten one.',
  },
  {
    heading: 'Discounts had no controlled approval path',
    body: 'Designers could discuss discounts with customers without a structured hierarchy. The business could not determine who had requested a discount, why, what value it was calculated against, or whether the employee had authority to approve it.',
  },
  {
    heading: 'Customer communication stayed on personal devices',
    body: 'WhatsApp conversations were held through individual accounts. When a lead changed owner, the conversation history did not move with it. The lead record and the actual relationship were two different things.',
  },
  {
    heading: 'Marketing produced enquiries without revenue attribution',
    body: 'Campaign parameters were not consistently captured and connected to later sales activity. The business could see spend and enquiry volume. It could not connect a campaign to qualified leads, onboarded customers or average project value.',
  },
]

const slaRules = [
  { event: 'First contact after lead creation', time: '24 hours' },
  { event: 'Effective Lead to MQL', time: '5 days' },
  { event: 'MQL to DQL', time: '5 days' },
  { event: 'Proposal Ready to Proposal Presented', time: '2 days' },
]

const beforeAfter = [
  { before: 'Leads could move forward with missing information', after: 'Six enforced gates prevent incomplete progression' },
  { before: 'Managers could not reliably identify missed SLAs', after: 'Every breach is detected within one hourly check' },
  { before: 'Discounts discussed without an approval history', after: 'Every system-based request has a complete audit trail' },
  { before: 'Performance compared manually by managers', after: 'Metrics recalculate automatically every night' },
  { before: 'Communications lived on personal devices', after: 'Lead-level email, SMS and WhatsApp history' },
  { before: 'Meeting notes were inconsistent or missing', after: 'Meetings cannot close without Minutes of Meeting' },
  { before: 'Marketing measured mainly by enquiry volume', after: 'Campaign parameters remain attached through the funnel' },
  { before: 'Inactive leads disappeared without explanation', after: 'Feedback and inactivation reasons are captured' },
  { before: 'Assignment depended on manual decisions', after: 'Round-robin and performance-tier allocation' },
  { before: 'Managers reconciled spreadsheet data manually', after: '14 live, exportable management reports' },
]

const systemModules = [
  {
    title: 'Gated sales pipeline',
    body: 'Seven named stages. Six mandatory gates. A lead cannot progress until the system confirms the required information has been entered. Forward jumps accumulate all intervening requirements.',
  },
  {
    title: 'Automated SLA engine',
    body: 'Four service-level rules embedded into the workflow. Every lead checked hourly. Breaches surface to the Business Lead and all Branch Heads immediately. Management can see every outstanding breach in real time.',
  },
  {
    title: 'Controlled discount approvals',
    body: 'Four authority tiers. Server-side percentage validation. Every request records the requester, amount, reason, forwarding history, reviewer, decision and comments. No request is invisible.',
  },
  {
    title: 'Nightly performance scoring',
    body: 'Conversion rates, average project values and SLA compliance recalculated for every active Designer and CRE at 2:00 a.m. Performance discussions can be grounded in consistent data.',
  },
  {
    title: 'Fourteen management reports',
    body: 'Lead summary, pipeline, conversion funnel, lead ageing, monthly trend, timeline performance, sales cycle, meeting performance, designer performance, business lead performance, source performance, campaign performance, offer performance and inactive leads.',
  },
  {
    title: 'Communication connected to the lead',
    body: 'Eight pre-built email templates. SMS reminders and feedback links. WhatsApp conversations connected to the appropriate lead record. One continuous account of every call, meeting, message and decision.',
  },
  {
    title: 'Enforced meetings and tasks',
    body: 'Every recorded call requires an outcome, a follow-up task and a due date. A completed meeting cannot close without meeting notes. A task cannot be marked complete unless activity has occurred on the lead after it was created.',
  },
  {
    title: 'Campaign attribution',
    body: 'Source, medium, campaign, term and content captured at intake and attached to the lead as it progresses. The company can compare campaign performance using onboarding rates and project values, not enquiry volume.',
  },
  {
    title: 'Intelligent lead assignment',
    body: 'Round-robin distribution for even allocation. Performance-tier assignment for directing leads to higher-converting employees under approved business rules.',
  },
  {
    title: 'Intent scoring',
    body: 'Every lead receives a score from one to five based on budget, possession timeline, call activity and meeting status. Teams can prioritise without replacing human qualification judgement.',
  },
]

const sidebarImpact = [
  'Six mandatory gates preventing incomplete stage progression',
  'Hourly detection of every configured SLA breach',
  '100% traceability for discounts processed through the system',
  'Nightly performance recalculation for all active sales staff',
  '14 live, exportable management reports',
  'Lead-level WhatsApp, email and SMS history',
  'Campaign-to-onboarding attribution across Meta and Google',
  '15–20% benchmark-supported sales productivity opportunity',
]

export default function InteriorDesignCRMCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="The Sales Process That Enforces Itself"
        pageDescription="An interior design company replaced its master spreadsheet with a custom CRM enforcing every handoff, approval and follow-up in the sales process."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: 'The Sales Process That Enforces Itself', url: '/case-studies/interior-design-crm' },
        ]}
      />

      <main className="min-h-screen">

        {/* Hero */}
        <section className="border-b border-border/40 pt-24 pb-0" aria-label="Case study introduction">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

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
                <li className="text-foreground font-medium" aria-current="page">The Sales Process That Enforces Itself</li>
              </ol>
            </nav>

            <div className="max-w-3xl pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Interior Design &amp; Home Renovation, India
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Custom CRM
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Client name withheld
                </span>
              </div>

              <h1
                className="font-normal leading-[1.06] text-balance mb-6"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 54px)', color: '#1A0F06' }}
              >
                The sales process that enforces itself.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B5D51' }}>
                A growing interior design company. A defined way of selling. A master spreadsheet, WhatsApp messages and employee memory holding it together. We replaced the spreadsheet with a system that makes the process unavoidable.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome stats */}
        <section className="py-12 border-b border-border/40" aria-label="Key outcomes">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: '#6B5D51' }}>
              Outcome
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {outcomeStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-5 lg:p-7 border flex flex-col gap-2"
                  style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}
                >
                  <span
                    className="font-normal leading-none"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(32px, 4vw, 48px)', color: '#1A0F06' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm leading-snug" style={{ color: '#6B5D51' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main body + sidebar */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

              {/* Left: main content */}
              <div className="flex flex-col gap-16">

                {/* The client */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The client</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    The process existed. The system did not enforce it.
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    A growing interior design and home-renovation company serving residential customers across India. The business ran a high-consideration sales process involving multiple consultations, qualification meetings, floor plans, quotations, proposal presentations, negotiations and project handovers.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    The company already had a defined way of selling. But the process was not embedded in a system. It lived partly in a master spreadsheet, partly in individual employees&apos; devices and partly in people&apos;s understanding of what should happen next. As the company grew, that became difficult to control.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {clientProfile.map((item) => (
                      <div key={item.label} className="rounded-xl p-4 border" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>
                        <p className="text-xs font-medium mb-1" style={{ color: '#6B5D51' }}>{item.label}</p>
                        <p className="text-sm font-semibold" style={{ color: '#1A0F06' }}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The problem */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The problem</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Six ways the same lead could go wrong.
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    Every lead in the business lived in one Google Sheets master tracker. The sheet could show that a lead existed. It could not reliably show whether the lead had been contacted, what happened during the last conversation, how long it had remained at its current stage, whether a discount had been authorised, or who was responsible for the next action.
                  </p>

                  <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>Operational symptoms</p>
                    <div className="flex flex-col gap-5">
                      {painPoints.map((p) => (
                        <div key={p.heading} className="flex items-start gap-3">
                          <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <div>
                            <p className="text-sm font-semibold mb-1" style={{ color: '#1A0F06' }}>{p.heading}</p>
                            <p className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{p.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The diagnosis */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The diagnosis</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Replacing the spreadsheet was not the answer
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The initial requirement appeared to be straightforward: replace the spreadsheet with a CRM. But replacing the sheet with a standard CRM would only have created a cleaner database. It would not have corrected the behaviour causing lead leakage.
                  </p>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    Pressense mapped the company&apos;s sales journey from the initial enquiry through project handover. The diagnosis examined what information entered at every stage, which employee owned each step, what the next employee needed, what had to be completed before a lead could progress, and what the company needed to measure.
                  </p>

                  <div className="flex flex-col gap-6">
                    {[
                      { number: '01', heading: 'The root cause: soft handoffs', body: 'Employees were allowed to progress leads without completing the work or recording the information required by the next stage. The business did not need another system that suggested good practice. It needed hard operational gates.' },
                      { number: '02', heading: 'The pipeline required enforcement, not guidance', body: 'Seven named stages existed as operating knowledge. The CRM had to enforce the company\'s actual process rather than expect every employee to remember it.' },
                      { number: '03', heading: 'SLA compliance was invisible', body: 'Management could not reliably determine whether a first-contact or follow-up deadline had been missed. There was no consistent way to distinguish an active opportunity from a forgotten one.' },
                      { number: '04', heading: 'Discounting had no commercial control', body: 'The financial effect of discounting was visible only after the commercial decision had already been made. Every discount request needed a structured authority hierarchy enforced by the system.' },
                      { number: '05', heading: 'Attribution ended at the enquiry', body: 'Campaign parameters were not connected to later sales activity. The company needed to measure which campaigns produced onboarded customers, not just enquiries.' },
                    ].map((item) => (
                      <div key={item.number} className="flex gap-5">
                        <span
                          className="shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-semibold mt-0.5"
                          style={{ background: '#E8E5DF', borderColor: '#D4CFC7', color: '#6B5D51' }}
                        >
                          {item.number}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold mb-1.5" style={{ color: '#1A0F06' }}>{item.heading}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What we built */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>What Pressense built</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    A custom sales operating system
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    The new platform unified pipeline management, qualification, tasks, meetings, communications, quotations, discount approvals, campaign attribution and reporting. It was also integrated with the company&apos;s existing quotation builder. Both applications used the company&apos;s visual identity, creating the experience of one connected internal product.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {systemModules.map((mod) => (
                      <div
                        key={mod.title}
                        className="rounded-2xl border p-5 lg:p-6"
                        style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}
                      >
                        <h3 className="text-sm font-semibold mb-2" style={{ color: '#1A0F06' }}>{mod.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{mod.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SLA rules table */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>SLA enforcement</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Every lead checked every hour
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    When a lead crossed a threshold, it was marked as breached, the assigned Business Lead was notified, every Branch Head received an in-app alert, the breach appeared on the management dashboard, and the lead remained visible until action was taken.
                  </p>

                  <div className="rounded-2xl border overflow-hidden mb-8" style={{ borderColor: '#D4CFC7' }}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ background: '#D4CFC7', borderBottom: '1px solid #C8C2BA' }}>
                            <th className="text-left px-5 py-3 font-semibold text-xs tracking-wide uppercase" style={{ color: '#6B5D51' }}>Sales event</th>
                            <th className="text-right px-5 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap" style={{ color: '#1A0F06' }}>Required time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slaRules.map((row, i) => (
                            <tr
                              key={row.event}
                              style={{
                                background: i % 2 === 0 ? '#E8E5DF' : '#EDEBE5',
                                borderBottom: '1px solid rgba(26,15,6,0.06)',
                              }}
                            >
                              <td className="px-5 py-3.5 leading-snug" style={{ color: '#3D3128' }}>{row.event}</td>
                              <td className="text-right px-5 py-3.5 font-semibold tabular-nums" style={{ color: '#1A0F06' }}>{row.time}</td>
                            </tr>
                          ))}
                          <tr style={{ background: '#1A0F06' }}>
                            <td className="px-5 py-3.5 font-semibold text-sm" style={{ color: '#EDEBE5' }}>Verified outcome</td>
                            <td className="text-right px-5 py-3.5 font-bold tabular-nums" style={{ color: '#EDEBE5' }}>100% detectable within 1 hr</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Before vs After */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>What changed</p>
                  <h2
                    className="font-normal text-balance mb-10 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    The first gains were structural and verifiable
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Before */}
                    <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#D4CFC7' }}>
                      <div className="px-5 py-3 border-b" style={{ background: '#D4CFC7', borderColor: '#C8C2BA' }}>
                        <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#6B5D51' }}>Before</span>
                      </div>
                      <div className="p-5" style={{ background: '#E8E5DF' }}>
                        <ol className="flex flex-col gap-3">
                          {beforeAfter.map((row, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-semibold mt-0.5"
                                style={{ background: '#EDEBE5', borderColor: '#C8C2BA', color: '#6B5D51' }}
                              >
                                {i + 1}
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{row.before}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {/* After */}
                    <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#1A0F06' }}>
                      <div className="px-5 py-3 border-b" style={{ background: '#1A0F06', borderColor: '#1A0F06' }}>
                        <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'rgba(237,235,229,0.6)' }}>After</span>
                      </div>
                      <div className="p-5" style={{ background: '#EDEBE5' }}>
                        <ol className="flex flex-col gap-3">
                          {beforeAfter.map((row, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-semibold mt-0.5"
                                style={{ background: '#1A0F06', borderColor: '#1A0F06', color: '#EDEBE5' }}
                              >
                                {i + 1}
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{row.after}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mt-6 pl-1" style={{ color: '#6B5D51' }}>
                    Because the system had only recently entered production, conversion or revenue uplift data had not yet accumulated. The first gains were structural and verified.
                  </p>
                </div>

                {/* The outcome */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The outcome</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    A sales process that employees follow and management can measure.
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {[
                      { stat: '15–20%', detail: 'Benchmark-supported sales productivity improvement opportunity, to be measured over 90 days' },
                      { stat: '₹24k+', detail: 'Annual per-user SaaS licence cost avoided by replacing the evaluated industry CRM' },
                      { stat: '90 days', detail: 'Measurement plan for converting structural gains into a fully quantified outcome' },
                    ].map((item) => (
                      <div
                        key={item.stat}
                        className="rounded-2xl p-5 border text-center"
                        style={{ background: '#1A0F06', borderColor: '#1A0F06' }}
                      >
                        <p className="font-normal mb-2" style={{ fontFamily: GARAMOND, fontSize: 32, color: '#EDEBE5' }}>{item.stat}</p>
                        <p className="text-xs leading-snug" style={{ color: 'rgba(237,235,229,0.55)' }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Independent CRM and marketing-automation research supports a 14.5 to 20% improvement in sales-team productivity where systems are properly adopted. For this business, that means administrative time per lead, leads managed per employee, follow-up time, report preparation and time spent seeking internal approvals.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    The company did not merely receive a new CRM. Its sales method became a system that employees could consistently follow and management could finally measure. The clearest difference after launch was not a dashboard. It was the absence of ambiguity: every lead had an owner, a required next action and a visible status.
                  </p>
                </div>

                {/* Why a standard CRM was not enough */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The bigger picture</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Is your CRM recording the process, or enforcing it?
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    A generic CRM could have been configured to record much of this information. But the company needed deeper enforcement: mandatory transition gates, cumulative validation across stage jumps, discount ceilings by organisational role, server-side percentage validation, mandatory follow-up tasks after calls, activity requirements before task completion, required meeting notes and automated SLA escalation.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    Pressense first diagnoses where information, accountability and revenue are being lost. We preserve the systems that already work and build the missing operational layer around the way the business actually runs. Your process should not depend on people remembering every step.
                  </p>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <div className="rounded-2xl border p-6 flex flex-col gap-5" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>

                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B5D51' }}>
                      Impact
                    </p>
                    <div className="flex flex-col gap-3">
                      {sidebarImpact.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: '#C8C2BA' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B5D51' }}>
                      Is your sales process enforced or optional?
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5D51' }}>
                      We diagnose where leads, accountability and revenue are being lost before writing a line of code.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium w-full justify-center transition-colors duration-200 hover:opacity-90"
                      style={{ background: '#1A0F06', color: '#EDEBE5' }}
                    >
                      Start your diagnostic
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: '#C8C2BA' }}>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-foreground"
                      style={{ color: '#6B5D51' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      All case studies
                    </Link>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section>
          <div className="container mx-auto px-5 sm:px-8 py-12 lg:py-20 max-w-5xl">
            <AnchorCard
              eyebrow="Work with us"
              headline="Is your sales process enforced or optional?"
              body="We diagnose where leads, accountability and revenue are being lost. Then we build the missing internal system around the way your business actually runs."
              ctaLabel="Start your diagnostic"
              ctaHref="/contact"
            />
            <div className="mt-6">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
                style={{ color: '#6B5D51' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all case studies
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

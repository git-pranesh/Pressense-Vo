import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: '140 Hours of Admin, Automated | Pressense',
  description:
    'A specialist clinic was losing 140 hours a month to manual referral administration. We mapped the workflow, quantified the cost, and built the missing operational layer. 105 hours released. A$53,000 recovered annually.',
  openGraph: {
    title: '140 Hours of Admin, Automated | Pressense',
    description:
      'A specialist clinic was losing 140 hours a month to manual referral administration. We mapped the workflow, quantified the cost, and built the missing operational layer. 105 hours released. A$53,000 recovered annually.',
    url: '/case-studies/two-location-clinic',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Healthcare Workflow Case Study' }],
  },
  alternates: { canonical: '/case-studies/two-location-clinic' },
  twitter: {
    card: 'summary_large_image',
    title: '140 Hours of Admin, Automated | Pressense',
    description:
      'A specialist clinic was losing 140 hours a month to manual referral administration. 105 hours released. A$53,000 recovered annually.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const outcomeStats = [
  { value: '75%', label: 'Reduction in manual administration' },
  { value: '105 hrs', label: 'Staff hours released every month' },
  { value: 'A$53k', label: 'Annual operational capacity value' },
  { value: '3.4 mo', label: 'Illustrative payback period' },
]

const clientProfile = [
  { label: 'Industry', value: 'Private healthcare' },
  { label: 'Type', value: 'Specialist & allied-health clinic' },
  { label: 'Locations', value: 'Two (metropolitan, Australia)' },
  { label: 'Employees', value: '31' },
  { label: 'Clinicians', value: '12' },
  { label: 'Active patients', value: '~7,200' },
  { label: 'Admin staff', value: '8' },
  { label: 'Monthly referrals', value: '~1,050' },
]

const beforeSteps = [
  'Referral arrives (email, fax, or scanned document)',
  'Reception downloads and reads the document',
  'Staff searches for the patient record',
  'Information re-entered into practice-management system',
  'Referral logged separately in a spreadsheet',
  'Document emailed or messaged to clinician',
  'Missing information chased via personal reminders',
  'Manager reconciles spreadsheet against inboxes',
  'Patient calls for a status update',
  'Staff searches inboxes, records and messages to respond',
]

const afterSteps = [
  'Referral enters the unified controlled queue',
  'Information structured and checked automatically',
  'Exceptions flagged for human review only',
  'Referral assigned using agreed operational rules',
  'Missing-information workflow triggered automatically',
  'Staff member sees their next required action only',
  'Patient or referrer receives an approved status update',
  'Practice-management record updated',
  'Management sees status and delays in real time',
]

const effortTable = [
  { activity: 'Document classification and allocation', before: '52.5 hrs', after: '8.8 hrs', released: '43.7 hrs' },
  { activity: 'Manual referral follow-ups', before: '28 hrs', after: '8 hrs', released: '20 hrs' },
  { activity: 'Exception resolution', before: '22 hrs', after: '7 hrs', released: '15 hrs' },
  { activity: 'Referral-status enquiries', before: '20.7 hrs', after: '7.3 hrs', released: '13.4 hrs' },
  { activity: 'Manager reconciliation', before: '17.3 hrs', after: '4.3 hrs', released: '13 hrs' },
]

const diagnosticCategories = [
  {
    number: '01',
    heading: 'Where work entered',
    body: 'Every intake channel: shared email addresses, individual staff inboxes, fax, website forms, referring-practice portals, physical documents and phone calls.',
  },
  {
    number: '02',
    heading: 'How many times information was touched',
    body: 'For every referral: systems opened, manual data entries, staff handoffs, time spent classifying, locating, chasing and responding.',
  },
  {
    number: '03',
    heading: 'Where work became invisible',
    body: 'Referrals waiting for clinical review, missing documentation, assigned but unactioned, duplicated, sent to the wrong location or simply sitting with no visible owner.',
  },
  {
    number: '04',
    heading: 'Which system should remain the source of truth',
    body: 'The clinical record stays in the existing system. The new tool manages workflow, responsibility, status, exceptions and reporting only.',
  },
  {
    number: '05',
    heading: 'What the problem was costing',
    body: '140.5 staff hours per month identified across five activity categories before a single line of code was written.',
  },
]

const systemCapabilities = [
  {
    title: 'Unified referral queue',
    body: 'Every referral, regardless of channel, enters one controlled queue with a visible owner, status, next action and time in stage.',
  },
  {
    title: 'Structured intake',
    body: 'Low-confidence or incomplete information is sent for human review. Everything else is captured once, in a consistent structure.',
  },
  {
    title: 'Rule-based allocation',
    body: 'Referrals routed by service, clinician availability, location, urgency and payer type. Clinical judgement stays with qualified staff.',
  },
  {
    title: 'Missing-information workflow',
    body: 'The system identifies what is missing, creates the follow-up task, generates the approved communication and escalates if no response arrives.',
  },
  {
    title: 'Role-based work queues',
    body: 'Receptionists, managers and clinicians each see only the work relevant to their role. One view of the full operation for management.',
  },
  {
    title: 'Privacy and governance controls',
    body: 'Role-based access, audit history, minimum necessary data capture, controlled exports, retention rules and procedures for employee offboarding.',
  },
]

export default function TwoLocationClinicCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="140 Hours of Admin, Automated"
        pageDescription="A specialist clinic was losing 140 hours a month to manual referral administration. We mapped the workflow, quantified the cost, and built the missing operational layer."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: '140 Hours of Admin, Automated', url: '/case-studies/two-location-clinic' },
        ]}
      />

      <main className="min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="border-b border-border/40 pt-24 pb-0" aria-label="Case study introduction">
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
                <li className="text-foreground font-medium" aria-current="page">140 Hours of Admin, Automated</li>
              </ol>
            </nav>

            {/* Hero text */}
            <div className="max-w-3xl pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Private Healthcare, Australia
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Workflow Blueprint
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Client name withheld
                </span>
              </div>

              <h1
                className="font-normal leading-[1.06] text-balance mb-6"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 54px)', color: '#1A0F06' }}
              >
                140 hours of admin, automated.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B5D51' }}>
                A privately owned specialist and allied-health clinic. Two metro locations. Thirty-one staff. A practice-management system that worked perfectly for records, and an invisible chain of manual work that was costing 140 hours a month around it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Outcome stats ─────────────────────────────────────── */}
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

        {/* ── Main body + sidebar ───────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

              {/* ── Left: main content ── */}
              <div className="flex flex-col gap-16">

                {/* The client */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The client</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    The software was not the problem
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The clinic was not short of software. It already had a capable practice-management system. The problem was everything happening around it.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    Referrals arrived through several channels. Missing information had to be chased manually. Staff maintained a spreadsheet to remember which referrals had been reviewed, which patients had been contacted, and which cases were waiting for clinical direction. The software recorded patients. It did not control the work required to move each patient from referral to appointment.
                  </p>

                  {/* Client profile grid */}
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
                    Not one broken process. A chain of small manual ones.
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Nothing was catastrophically broken. But every referral required multiple touches, and nobody had a reliable live view of the entire queue.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    A referral might arrive by email. A receptionist would download it, identify the patient, check for required information, upload it to the practice-management system, enter selected fields again, add the patient to a spreadsheet, and forward the document to the appropriate clinician. If something was missing, create a reminder, send an email, leave a note. When the referring practice called two days later, staff had to search the inbox, the record, the spreadsheet and internal messages to piece together what had happened.
                  </p>

                  {/* Pain points */}
                  <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>Operational symptoms</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        'Referrals arriving through email, fax and scanned documents',
                        'Repeated entry of the same patient and referral information',
                        'No single queue showing every referral and its current status',
                        'Missing documents followed up through personal reminders',
                        'Referrals assigned differently depending on who was working',
                        'Managers manually reconciling spreadsheets against inboxes',
                        'Patients and referring practices calling for status updates',
                        'Work becoming difficult to trace when staff were absent',
                        'Limited visibility across two locations',
                        'No dependable measurement of referral-processing time',
                      ].map((symptom) => (
                        <div key={symptom} className="flex items-start gap-3">
                          <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The cost */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>What it was costing</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    140.5 hours per month before a line of code was written
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    The Pressense diagnostic model identified five major categories of administrative effort and quantified each before any solution was proposed.
                  </p>

                  {/* Effort table */}
                  <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#D4CFC7' }}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ background: '#D4CFC7', borderBottom: '1px solid #C8C2BA' }}>
                            <th className="text-left px-5 py-3 font-semibold text-xs tracking-wide uppercase" style={{ color: '#6B5D51' }}>Activity</th>
                            <th className="text-right px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap" style={{ color: '#6B5D51' }}>Before</th>
                            <th className="text-right px-4 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap" style={{ color: '#6B5D51' }}>After</th>
                            <th className="text-right px-5 py-3 font-semibold text-xs tracking-wide uppercase whitespace-nowrap" style={{ color: '#1A0F06' }}>Released</th>
                          </tr>
                        </thead>
                        <tbody>
                          {effortTable.map((row, i) => (
                            <tr
                              key={row.activity}
                              style={{
                                background: i % 2 === 0 ? '#E8E5DF' : '#EDEBE5',
                                borderBottom: '1px solid rgba(26,15,6,0.06)',
                              }}
                            >
                              <td className="px-5 py-3.5 leading-snug" style={{ color: '#3D3128' }}>{row.activity}</td>
                              <td className="text-right px-4 py-3.5 tabular-nums" style={{ color: '#6B5D51' }}>{row.before}</td>
                              <td className="text-right px-4 py-3.5 tabular-nums" style={{ color: '#6B5D51' }}>{row.after}</td>
                              <td className="text-right px-5 py-3.5 font-semibold tabular-nums" style={{ color: '#1A0F06' }}>{row.released}</td>
                            </tr>
                          ))}
                          {/* Totals row */}
                          <tr style={{ background: '#1A0F06' }}>
                            <td className="px-5 py-3.5 font-semibold text-sm" style={{ color: '#EDEBE5' }}>Total</td>
                            <td className="text-right px-4 py-3.5 tabular-nums font-medium" style={{ color: 'rgba(237,235,229,0.6)' }}>140.5 hrs</td>
                            <td className="text-right px-4 py-3.5 tabular-nums font-medium" style={{ color: 'rgba(237,235,229,0.6)' }}>35.4 hrs</td>
                            <td className="text-right px-5 py-3.5 tabular-nums font-bold" style={{ color: '#EDEBE5' }}>105.1 hrs</td>
                          </tr>
                        </tbody>
                      </table>
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
                    We would not begin by asking what software they wanted
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    We would begin by following one referral. The Pressense diagnostic maps every step from the moment a document enters the business until the patient is either booked, declined, redirected or placed on a waiting list.
                  </p>

                  <div className="flex flex-col gap-6">
                    {diagnosticCategories.map((item) => (
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

                {/* What we would build */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>What we would build</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    A referral and patient-workflow control system
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    The system would sit between the clinic&apos;s incoming channels and its existing practice-management environment. It would not attempt to become another electronic medical record. It would answer five questions: what has entered the clinic, what does it need, who is responsible, what is preventing it from moving, and what needs attention now.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {systemCapabilities.map((cap) => (
                      <div
                        key={cap.title}
                        className="rounded-2xl border p-5 lg:p-6"
                        style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}
                      >
                        <h3 className="text-sm font-semibold mb-2" style={{ color: '#1A0F06' }}>{cap.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{cap.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before vs After */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The redesigned workflow</p>
                  <h2
                    className="font-normal text-balance mb-10 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Every referral now has a visible owner, status and next action
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Before */}
                    <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#D4CFC7' }}>
                      <div className="px-5 py-3 border-b" style={{ background: '#D4CFC7', borderColor: '#C8C2BA' }}>
                        <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#6B5D51' }}>Before</span>
                      </div>
                      <div className="p-5" style={{ background: '#E8E5DF' }}>
                        <ol className="flex flex-col gap-3">
                          {beforeSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-semibold mt-0.5"
                                style={{ background: '#EDEBE5', borderColor: '#C8C2BA', color: '#6B5D51' }}
                              >
                                {i + 1}
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{step}</span>
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
                          {afterSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-semibold mt-0.5"
                                style={{ background: '#1A0F06', borderColor: '#1A0F06', color: '#EDEBE5' }}
                              >
                                {i + 1}
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mt-6 pl-1" style={{ color: '#6B5D51' }}>
                    The important change is not simply automation. It is that every referral has a visible owner, status and next action.
                  </p>
                </div>

                {/* The outcome */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The outcome</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    75% less manual administration. 105 hours released.
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {[
                      { stat: '105 hrs/mo', detail: 'of administrative capacity returned to the team' },
                      { stat: 'A$53,000', detail: 'in annual operational capacity value at A$42/hr' },
                      { stat: '3.4 months', detail: 'illustrative payback on A$15,000 implementation' },
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
                    In a growing clinic, that capacity does not automatically mean eliminating an employee. It means faster patient contact, better front-desk service, more consistent wait-list management and the ability to grow without every new referral creating another layer of manual coordination.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    The clearest difference after launch would not be a dashboard. It would be the absence of searching. Reception would no longer need to ask who last touched a referral. Managers would not need to compare spreadsheets against inboxes. Patients would receive a more consistent response because staff could immediately see what was happening.
                  </p>
                </div>

                {/* Why Pressense would not replace existing software */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The bigger picture</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Replace the platform, or build the missing layer?
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Many growing businesses assume their choices are limited to tolerating their current process or replacing their core platform. That is often a false choice.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The clinic&apos;s practice-management system may be perfectly capable of maintaining patient records, appointments and billing. The missing component is an operational layer designed around the way this particular clinic receives, reviews and progresses referrals.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    Pressense would first diagnose the bottleneck, preserve the systems that already work and build only the missing layer. No unnecessary replacement. No oversized transformation programme. No software built before the workflow is understood.
                  </p>
                </div>

              </div>

              {/* ── Sidebar ── */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <div className="rounded-2xl border p-6 flex flex-col gap-5" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>

                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#6B5D51' }}>
                      Impact
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        '75% less referral-related manual administration',
                        '105 hours of team capacity released per month',
                        '300 fewer manually managed follow-ups per month',
                        '200 fewer status calls per month',
                        '95 fewer manually resolved exceptions per month',
                        'A$53,000 in annual operational capacity value',
                        'Illustrative payback in 3.4 months',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: '#C8C2BA' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B5D51' }}>
                      Is a hidden workflow slowing your clinic?
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5D51' }}>
                      The diagnostic takes 20 minutes and tells you exactly where the bottleneck is.
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

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section>
          <div className="container mx-auto px-5 sm:px-8 py-12 lg:py-20 max-w-5xl">
            <AnchorCard
              eyebrow="Work with us"
              headline="Is a hidden workflow costing your clinic this much?"
              body="We map the workflow, quantify the cost, build the missing internal tool, and measure whether it delivers the intended result."
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

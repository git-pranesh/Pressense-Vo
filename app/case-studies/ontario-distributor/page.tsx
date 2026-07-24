import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: '479 Hours of Order Admin, Automated | Pressense',
  description:
    'A family-owned Ontario industrial distributor was consuming 479 staff hours a month on manual order processing. 78% faster per order. 354 hours released. C$182,000 in annual capacity. 21% order-volume growth without hiring.',
  openGraph: {
    title: '479 Hours of Order Admin, Automated | Pressense',
    description:
      'A family-owned Ontario industrial distributor was consuming 479 staff hours a month on manual order processing. 78% faster per order. 354 hours released. C$182,000 in annual capacity.',
    url: '/case-studies/ontario-distributor',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Ontario Distributor Case Study' }],
  },
  alternates: { canonical: '/case-studies/ontario-distributor' },
  twitter: {
    card: 'summary_large_image',
    title: '479 Hours of Order Admin, Automated | Pressense',
    description:
      '78% faster order processing. 354 hours released every month. C$182,000 in annual capacity. 21% growth without hiring.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const outcomeStats = [
  { value: '78%', label: 'Faster per straightforward order' },
  { value: '354 hrs', label: 'Staff hours released every month' },
  { value: 'C$182k', label: 'Annual operational capacity value' },
  { value: '21%', label: 'Order-volume growth without another hire' },
]

const clientProfile = [
  { label: 'Industry', value: 'Industrial wholesale and distribution' },
  { label: 'Location', value: 'Greater Toronto Area' },
  { label: 'Employees', value: '42' },
  { label: 'Annual revenue', value: 'Approx. C$14.8M' },
  { label: 'Active customers', value: '640' },
  { label: 'Products (SKUs)', value: 'Approx. 4,600' },
  { label: 'Monthly orders', value: 'Approx. 1,850' },
  { label: 'Warehouse locations', value: 'Two' },
]

const beforeSteps = [
  'Purchase order arrives by email or phone',
  'Coordinator identifies customer account',
  'Product codes resolved manually',
  'Pricing spreadsheet or old quotation checked',
  'ERP stock reviewed',
  'Questions emailed to sales or warehouse',
  'Order waits in the inbox',
  'Employee follows up internally',
  'Order entered manually into ERP',
  'Confirmation emailed to customer',
  'Customer calls later asking for status',
]

const afterSteps = [
  'Purchase order enters the controlled order queue',
  'Customer and order fields captured automatically',
  'Product codes matched via customer-product mapping',
  'Pricing and stock rules checked against live data',
  'Only exceptions assigned to specific employees',
  'Approved order submitted to ERP',
  'Customer receives same-day confirmation',
  'Order and shipment status remain visible without asking',
]

const effortTable = [
  { activity: 'Manual order entry', before: '244.2 hrs', after: '62 hrs', released: '182.2 hrs' },
  { activity: 'Pricing and stock verification', before: '87 hrs', after: '18 hrs', released: '69 hrs' },
  { activity: 'Clarification and correction', before: '63.8 hrs', after: '22 hrs', released: '41.8 hrs' },
  { activity: 'Customer status enquiries', before: '35 hrs', after: '10 hrs', released: '25 hrs' },
  { activity: 'Invoice and credit-note rework', before: '22.7 hrs', after: '7 hrs', released: '15.7 hrs' },
  { activity: 'Operations reporting', before: '26 hrs', after: '6 hrs', released: '20 hrs' },
]

const diagnosticWorkflows = [
  {
    number: '01',
    heading: 'Order intake',
    body: 'How orders arrived across email, PDF purchase orders, telephone, sales representatives and counter requests, and how responsibility was assigned to each.',
  },
  {
    number: '02',
    heading: 'Product identification',
    body: 'How customer part numbers, old distributor codes, supplier codes and informal descriptions were matched to the correct internal SKU.',
  },
  {
    number: '03',
    heading: 'Pricing',
    body: 'How customer-specific contract prices, volume discounts, project quotations, promotional terms and supplier-cost changes were applied (or missed).',
  },
  {
    number: '04',
    heading: 'Inventory and fulfilment',
    body: 'How available stock, warehouse allocation, incoming purchase orders, substitutes and partial-shipment rules were confirmed before committing to a customer.',
  },
  {
    number: '05',
    heading: 'Exception management',
    body: 'How incomplete, incorrect or blocked orders were resolved: who owned each type, how long they waited, and what the downstream cost was.',
  },
  {
    number: '06',
    heading: 'Customer communication',
    body: 'How confirmations, back-order updates, shipment notifications and status requests were handled, and what proportion of communication was reactive rather than automatic.',
  },
]

const systemModules = [
  {
    title: 'One order queue across every channel',
    body: 'Every incoming order, regardless of source, enters a single controlled queue with a unique reference, assigned coordinator, processing status and next action.',
  },
  {
    title: 'Purchase-order capture',
    body: 'Structured fields are extracted from emailed and uploaded purchase orders. Low-confidence fields are flagged for review. Nothing is silently converted to a confirmed order.',
  },
  {
    title: 'Customer-product mapping',
    body: 'A translation layer connects customer part numbers, old codes and supplier codes to the correct SKU. Once resolved, the relationship is saved for every future order.',
  },
  {
    title: 'Pricing-rules engine',
    body: 'All commercial rules in one controlled structure: by customer, product, quantity, contract, project and effective date. Price mismatches are classified and routed to the right person.',
  },
  {
    title: 'Inventory and substitution rules',
    body: 'The system checks available stock, warehouse allocation, incoming replenishment and approved substitutes. Coordinators see options immediately rather than starting another internal email chain.',
  },
  {
    title: 'Exception routing and operations dashboard',
    body: 'Each exception has an owner, a deadline and an escalation path. Management sees orders blocked, waiting and approaching cut-off in real time, not at end of week.',
  },
]

export default function OntarioDistributorCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="479 Hours of Order Admin, Automated"
        pageDescription="A family-owned Ontario industrial distributor was consuming 479 staff hours a month on manual order processing. We built the missing commercial layer. 78% faster per order. 354 hours released monthly."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: '479 Hours of Order Admin, Automated', url: '/case-studies/ontario-distributor' },
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
                <li className="text-foreground font-medium" aria-current="page">479 Hours of Order Admin, Automated</li>
              </ol>
            </nav>

            <div className="max-w-3xl pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Industrial Distribution, Ontario
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Order and Operations Control System
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Client name withheld
                </span>
              </div>

              <h1
                className="font-normal leading-[1.06] text-balance mb-6"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 54px)', color: '#1A0F06' }}
              >
                479 hours of order admin, automated.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B5D51' }}>
                A family-owned industrial distributor in Ontario. 42 staff. 1,850 orders a month across email, phone, PDF and sales representatives. An ERP that worked perfectly for confirmed orders, and an invisible chain of manual work consuming the equivalent of 2.8 full-time employees every month before a single order was recorded.
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
                    The ERP was not the problem
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The company had grown steadily through responsive service and long-standing customer relationships. Customers could email a purchase order, call an account representative, send a photograph of the part they needed, or walk up to the counter. The sales team would identify the product, confirm the customer's price, check stock and get the order moving.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    That flexibility built the business. It also created an operation that depended on people remembering which customer received which price, which products could be substituted, which warehouse had stock, which orders needed approval and which spreadsheet contained the latest information. The ERP recorded confirmed orders. It did not control the work required to turn an incoming request into one.
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
                    Not an order-entry problem. An exception-management problem.
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Approximately 72% of orders arrived through email, PDF purchase orders, telephone or direct messages to sales representatives. Every one had to be interpreted and entered manually. A typical order required an employee to identify the customer, resolve the product codes, check the contract price, verify inventory, confirm delivery and enter the transaction before sending confirmation.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    When the purchase order contained a discontinued code, an ambiguous description or a price that did not match the agreement, the process stopped. The coordinator emailed the customer. The customer contacted the sales representative. The representative checked an old quotation. By then the same transaction might have passed through four people and three systems.
                  </p>

                  <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>Operational symptoms</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        'No controlled queue: work arrived across multiple inboxes and channels',
                        'Customer pricing partially stored outside the ERP in spreadsheets',
                        'Inventory availability did not reflect reservations, kits or second warehouse',
                        'Product codes translated from memory by long-serving staff only',
                        'Status enquiries required employees to search manually across systems',
                        'Operations reporting assembled from exports at end of each week',
                        'Order volume at 1,850/month had outgrown the process built for 1,000',
                        'Pressure building to hire another order coordinator',
                      ].map((symptom) => (
                        <div key={symptom} className="flex items-start gap-3">
                          <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The baseline */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>What it was costing</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    478.7 hours per month before a line of code was written
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    The diagnostic followed actual orders from receipt through invoicing, examining how coordinators, sales representatives, warehouse employees and finance staff each handled the same transaction. Six activity categories were measured across the operation.
                  </p>

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
                          <tr style={{ background: '#1A0F06' }}>
                            <td className="px-5 py-3.5 font-semibold text-sm" style={{ color: '#EDEBE5' }}>Total</td>
                            <td className="text-right px-4 py-3.5 tabular-nums font-medium" style={{ color: 'rgba(237,235,229,0.6)' }}>478.7 hrs</td>
                            <td className="text-right px-4 py-3.5 tabular-nums font-medium" style={{ color: 'rgba(237,235,229,0.6)' }}>125 hrs</td>
                            <td className="text-right px-5 py-3.5 tabular-nums font-bold" style={{ color: '#EDEBE5' }}>353.7 hrs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mt-4 pl-1" style={{ color: '#6B5D51' }}>
                    That was equivalent to the monthly working time of approximately 2.8 full-time employees. The cost was spread across coordinators, sales representatives, warehouse supervisors, finance staff and management, so it did not appear as a single obvious line.
                  </p>
                </div>

                {/* The diagnosis */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widests uppercase mb-5" style={{ color: '#6B5D51' }}>The diagnosis</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    We mapped six connected workflows
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    Rather than interviewing management alone, the diagnostic followed the same transaction through every person who touched it: coordinator, sales representative, warehouse employee and finance staff. The central finding was that the business did not have a technology problem. It had a workflow problem that technology was making harder to see.
                  </p>

                  <div className="flex flex-col gap-6">
                    {diagnosticWorkflows.map((item) => (
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

                {/* What was built */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widests uppercase mb-5" style={{ color: '#6B5D51' }}>What we built</p>
                  <h2
                    className="font-normal text-balance mb-4 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    A customer-order and operations control system
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    The system sat between incoming customer demand and the existing ERP. It did not replace the ERP. The ERP remained responsible for confirmed orders, inventory transactions, invoicing and accounting. The new system managed everything required to turn an incoming request into a clean, validated order ready for the ERP to record.
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

                {/* Before vs After */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widests uppercase mb-5" style={{ color: '#6B5D51' }}>The redesigned workflow</p>
                  <h2
                    className="font-normal text-balance mb-10 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Coordinators stopped entering every order as though it were unusual
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
                    The company&apos;s employees stopped processing every order as though every order were unusual. They focused on the orders that genuinely required judgement.
                  </p>
                </div>

                {/* The outcome */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widests uppercase mb-5" style={{ color: '#6B5D51' }}>The outcome</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    78% faster. 354 hours released. 21% more volume without hiring.
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {[
                      { stat: '354 hrs/mo', detail: 'of administrative capacity returned across the team' },
                      { stat: 'C$182,000', detail: 'in annual staff capacity at C$43/hr blended cost' },
                      { stat: '21% growth', detail: 'in monthly order volume absorbed without a new hire' },
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
                    Order corrections fell by 74%: from 74 per month requiring material rework to 19. Same-day order confirmations rose from 54% to 94%. Status enquiries from customers fell by 71%. Orders waiting more than 24 hours for confirmation fell by 87%.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Over the following six months, order volume grew from 1,850 to 2,240 per month. The company did not hire the additional coordinator it had expected to recruit. The existing team absorbed the higher volume because routine entry, pricing checks and status communication no longer consumed the same amount of time.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    The order desk changed. Coordinators who had spent most of their day entering information shifted toward resolving unusual requirements, helping customers identify products, coordinating urgent fulfilment and improving customer records. The company retained the human service that differentiated it. It removed the repetitive work surrounding that service.
                  </p>
                </div>

                {/* Why they did not replace the ERP */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widests uppercase mb-5" style={{ color: '#6B5D51' }}>The bigger picture</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Replace the ERP, or build the missing layer?
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The ERP was not failing. It remained capable of recording clean orders, inventory movements, invoices and financial transactions. The weakness existed before information reached the ERP and after customers needed a status update.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Replacing the ERP would have created a longer implementation, greater migration risk, more staff training, higher cost, disruption to finance and warehouse operations, and no guarantee that incoming orders would become more structured.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    Pressense built the missing layer around the existing system. That allowed the company to improve the workflow without rebuilding the entire technology stack.
                  </p>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <div className="rounded-2xl border p-6 flex flex-col gap-5" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>

                  <div>
                    <p className="text-xs font-semibold tracking-widests uppercase mb-4" style={{ color: '#6B5D51' }}>
                      Impact
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        '78% reduction in active processing time per order',
                        '354 staff hours released every month',
                        'C$182,000 in annual operational capacity',
                        '74% fewer orders requiring material correction',
                        '87% fewer orders waiting over 24 hours',
                        '94% of orders confirmed same day',
                        '71% fewer customer status enquiries',
                        '21% order-volume growth without another coordinator',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: '#C8C2BA' }}>
                    <p className="text-xs font-semibold tracking-widests uppercase mb-3" style={{ color: '#6B5D51' }}>
                      Is your order desk the integration between every system?
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5D51' }}>
                      The diagnostic maps the workflow, quantifies the cost and identifies the missing layer before any code is written.
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
              headline="Is your order desk acting as the integration between every system?"
              body="We map the workflow, quantify the cost, build the missing operational layer and measure whether it delivers the intended result."
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

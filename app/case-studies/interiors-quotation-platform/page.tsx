import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Seven Pricing Sheets Replaced by One Controlled Quotation System | Pressense',
  description:
    'A Bangalore architecture and interiors firm was running its commercial process through seven Google Sheets and employee memory. 335 client records centralised. 19 users. 78-104 hours of monthly capacity released.',
  openGraph: {
    title: 'Seven Pricing Sheets Replaced by One Controlled Quotation System | Pressense',
    description:
      'A Bangalore architecture and interiors firm was running its commercial process through seven Google Sheets and employee memory. 335 client records centralised. 19 users. 78-104 hours of monthly capacity released.',
    url: '/case-studies/interiors-quotation-platform',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Interiors Quotation Platform Case Study' }],
  },
  alternates: { canonical: '/case-studies/interiors-quotation-platform' },
  twitter: {
    card: 'summary_large_image',
    title: 'Seven Pricing Sheets Replaced by One Controlled Quotation System | Pressense',
    description:
      'A Bangalore architecture and interiors firm was running its commercial process through seven Google Sheets. 78-104 hours of monthly capacity released.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const outcomeStats = [
  { value: '7 → 1', label: 'Pricing catalogues unified into one controlled platform' },
  { value: '335', label: 'Client records centralised at launch' },
  { value: '78–104 hrs', label: 'Monthly design capacity released (est.)' },
  { value: '100%', label: 'Finalised projects protected at the application layer' },
]

const clientProfile = [
  { label: 'Industry', value: 'Architecture and residential interiors' },
  { label: 'Location', value: 'Bangalore, India' },
  { label: 'Platform users', value: '19' },
  { label: 'Designers', value: '10' },
  { label: 'Admins / managers', value: '9' },
  { label: 'Active project creators', value: '11' },
  { label: 'Client records migrated', value: '335' },
  { label: 'Product catalogues', value: '7' },
]

const problemSymptoms = [
  'Seven separate Google Sheets acting as the commercial source of truth',
  'Designers manually transcribing prices, measurements and formulas into each quotation',
  'No protection preventing catalogue updates from affecting already-shared proposals',
  'Every designer calculating area, tax, discounts and payment schedules independently',
  'Quotation structure varying between designers and projects',
  'Managers unable to verify totals without retracing the full calculation',
  'No controlled client portal — proposals delivered as static PDF attachments',
  'Design revisions consumed without commercial tracking or approval',
  'Payment schedules prepared separately from the quotation total',
  'No version-controlled history separating current prices from project prices',
]

const diagnosticFindings = [
  {
    number: '01',
    heading: 'Catalogue control',
    body: 'How could the company continue updating familiar Google Sheets without allowing those updates to rewrite existing quotations?',
  },
  {
    number: '02',
    heading: 'Calculation control',
    body: 'How could every designer use the same commercial formulas regardless of product category — without remembering which formula applied to which product type?',
  },
  {
    number: '03',
    heading: 'Project control',
    body: 'At what point should a quotation stop being editable? And who should be able to change it after that point?',
  },
  {
    number: '04',
    heading: 'Client control',
    body: 'How could the customer receive a professional, project-specific proposal without needing another account or application?',
  },
  {
    number: '05',
    heading: 'Commercial control',
    body: 'How could design revisions, payment milestones and outstanding balances remain permanently connected to the original project value?',
  },
]

const systemModules = [
  {
    title: '1. Seven catalogues into one controlled platform',
    body: 'The system synchronised directly with all seven Google Sheets. Designers no longer accessed those sheets when building a quotation. Catalogue changes affected future selections only — not the commercial values already attached to existing projects.',
  },
  {
    title: '2. Six guided line-item workflows',
    body: 'Each product category — Woodwork, Accessories, Handles, Services, Lighting, Stone and Quartz — had its own dedicated workflow. Designers were shown only the questions relevant to the selected category, removing the need to remember which formula applied to which product.',
  },
  {
    title: '3. One shared calculation engine',
    body: 'Area-based products (rate × sq ft × quantity), per-unit products, category-specific GST treatment, enablement fees, markup, discounts and payment schedules all ran through one engine shared by the frontend, backend, stored values and PDF output. The browser and server could not calculate different totals.',
  },
  {
    title: '4. Branded PDF and client proposal portal',
    body: 'Every project generated a branded PDF and a secure 30-day public link. The customer could view their own project — room-wise pricing, product selections, payment schedule and terms — without creating an account or requesting another document.',
  },
  {
    title: '5. Finalisation as a hard system state',
    body: 'When a project was marked Generated, every protected edit endpoint returned an HTTP 403. This was not a warning. A finalised quotation could not be changed by a designer, a manager, a catalogue update or an accidental edit. Commercial changes required a controlled revision process.',
  },
  {
    title: '6. Role-based access across 19 users',
    body: 'Three permission levels: Super Administrator, Administrator/Manager, and Designer. Authorisation was enforced at the server, not just by hiding buttons. Each role could access only the projects and functions relevant to their work.',
  },
  {
    title: '7. 335 client records centralised',
    body: 'Existing client information was migrated into the platform at launch. The system began with a populated client database, not an empty form. Designers could create new quotations by selecting an existing client record rather than re-entering contact details for every project.',
  },
  {
    title: '8. Structured design-credit system',
    body: 'Seven defined milestone types — Site Documentation, Layout Finalisation, Design Finalisation, Validation GFC, Final Design Sign-off, Layout Change, Design Revision — each controlled through credit allocation, project limits, approval workflow and usage tracking. Design effort stopped being an unlimited informal attachment.',
  },
  {
    title: '9. Automatic payment schedules',
    body: 'Three tiers based on project value (up to ₹15 lakh, ₹15–30 lakh, above ₹30 lakh) generated the correct advance and milestone structure automatically. If the project value changed before finalisation, the payment schedule recalculated through the same central engine.',
  },
  {
    title: '10. Project wallet and quotation analytics',
    body: 'Each project displayed total value, payments received, funding entries and remaining balance. The analytics dashboard covered total quotations, average value, project status, monthly trends and user-level activity — scoped by role.',
  },
]

const beforeSteps = [
  'Designer opens several Google Sheets',
  'Products and prices are copied manually',
  'Measurements and square footage are calculated',
  'Taxes, fees and discounts are added',
  'Payment schedule is created separately',
  'Manager checks formulas and totals',
  'PDF is assembled and sent to the client',
  'Later catalogue changes risk affecting active work',
  'Design revisions and payments are tracked elsewhere',
]

const afterSteps = [
  'Designer creates a client project',
  'Products selected through guided category workflows',
  'Catalogue values enter the project at point of selection',
  'One engine calculates area, quantity, tax and totals',
  'Payment milestones created automatically',
  'Branded PDF and client portal generated',
  'Project locked after finalisation',
  'Design credits and project payments remain connected',
]

export default function InteriorsQuotationPlatformCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="Seven Pricing Sheets Replaced by One Controlled Quotation System"
        pageDescription="A Bangalore architecture and interiors firm was running its commercial process through seven Google Sheets and employee memory. Pressense built a purpose-built quotation and project-commercialisation platform."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: 'Seven Pricing Sheets, One Controlled Platform', url: '/case-studies/interiors-quotation-platform' },
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
                <li className="text-foreground font-medium" aria-current="page">Seven Pricing Sheets, One Controlled Platform</li>
              </ol>
            </nav>

            {/* Hero text */}
            <div className="max-w-3xl pb-14">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Architecture and Interiors, Bangalore
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Custom Quotation Platform
                </span>
                <span className="text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border" style={{ background: 'rgba(26,15,6,0.05)', color: '#6B5D51', borderColor: '#C8C2BA' }}>
                  Client name withheld
                </span>
              </div>

              <h1
                className="font-normal leading-[1.06] text-balance mb-6"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 54px)', color: '#1A0F06' }}
              >
                Seven pricing sheets replaced by one controlled quotation system.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B5D51' }}>
                A Bangalore architecture and interior fit-out company. Nineteen staff. Seven Google Sheets as the commercial source of truth. A quotation process that worked at lower volumes and became increasingly difficult to control as the business grew.
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
                    The pricing data was organised. The quotation process was not.
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The company managed the full journey from initial design consultation through quotation, client approval, milestone payments, design revisions and project execution. Its catalogue was real, detailed and maintained. The problem was in how that catalogue connected to every proposal a designer produced.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    Product information lived across seven Google Sheets covering Xpress woodwork, Xpand woodwork, accessories, services, lighting, stone and quartz, and handles. Designers used those sheets as the commercial source of truth and manually assembled customer quotations one room and one line item at a time. As more designers, products and projects entered the business, the spreadsheet-based workflow became increasingly difficult to control.
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
                    Not one broken tool. Five separate control problems.
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    Creating a quotation for a complete home interior was not a matter of entering one product and one price. A single proposal could include kitchen base units, wall units, tall units, wardrobes, loft storage, accessories, handles, lighting, stone, installation services, design credits, discounts, enablement fees, GST and a project-specific payment schedule. Every item had its own commercial logic.
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#3D3128' }}>
                    The company had previously evaluated a specialised interiors platform. The problem was not that the software lacked features. It was that the software imposed its own process and could not adapt to the company&apos;s seven-catalogue structure, its Xpress and Xpand product ranges, its category-specific GST treatment, or its tiered payment schedules.
                  </p>

                  {/* Operational symptoms */}
                  <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#E8E5DF', borderColor: '#D4CFC7' }}>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>Operational symptoms</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {problemSymptoms.map((symptom) => (
                        <div key={symptom} className="flex items-start gap-3">
                          <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: '#6B5D51' }} aria-hidden="true" />
                          <span className="text-sm leading-relaxed" style={{ color: '#3D3128' }}>{symptom}</span>
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
                    The initial request was: build a quotation tool
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    But quotation generation was only the visible surface of the workflow. Pressense mapped the full journey: Catalogue to product configuration to measurement to pricing to quotation to client sharing to approval to design credits to payment milestones to project balance. The diagnosis identified five separate control problems.
                  </p>

                  <div className="flex flex-col gap-6">
                    {diagnosticFindings.map((item) => (
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
                    A configure-price-quote platform built for the way this business works
                  </h2>
                  <p className="text-base leading-relaxed mb-10" style={{ color: '#3D3128' }}>
                    The system was built as a complete web application — React and TypeScript frontend, Express and TypeScript backend, PostgreSQL database, shared calculation logic, role-based authentication, secure public proposal links and PDF generation — around the company&apos;s catalogue, pricing and approval workflow. The result was not a generic invoice generator. It was a CPQ system built specifically for residential architecture and interior fit-out projects.
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
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The redesigned workflow</p>
                  <h2
                    className="font-normal text-balance mb-10 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    Every project now has a controlled commercial history
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
                    The key change was not simply faster PDF creation. The entire commercial history of each project became controlled.
                  </p>
                </div>

                {/* The outcome */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The outcome</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    78 to 104 hours of monthly capacity. One permanently protected commercial record per project.
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {[
                      { stat: '78–104 hrs', detail: 'monthly capacity released at 75–100 quotations per month (52% CPQ benchmark)' },
                      { stat: '936–1,248', detail: 'hours of annual team capacity released — approximately six to eight employee-months' },
                      { stat: '100%', detail: 'of projects in Generated status protected by application-layer finalisation' },
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
                    The capacity estimate applies a conservative 52% sector-adjacent CPQ benchmark (Nucleus Research, industrial design and manufacturing) against an operating range of 75 to 100 quotations per month, assuming two hours of manual work per quotation. The company had not yet completed a formal time study at the time of writing.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    In a growing interiors business, that released capacity does not automatically mean eliminating a role. It means more quotations prepared, faster response to enquiries, more time spent on design, better proposal quality and the ability to absorb growth without each new project creating another layer of manual coordination.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    The clearest change after launch was separation. Current prices could change. Approved quotations could not. The commercial history of every project became permanently controlled the moment a designer clicked Generate.
                  </p>
                </div>

                {/* Why custom software */}
                <div className="border-t pt-16" style={{ borderColor: 'rgba(26,15,6,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B5D51' }}>The bigger picture</p>
                  <h2
                    className="font-normal text-balance mb-6 leading-tight"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 3vw, 36px)', color: '#1A0F06' }}
                  >
                    A generic product would have required the company to simplify its commercial method
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    The business did not need another proposal template. It needed software capable of understanding seven live catalogues, six different item structures, area-based and unit-based pricing, category-specific tax rules, tiered payment schedules, design-credit limits, role-based access, price version protection, finalisation controls and client-specific proposal delivery.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#3D3128' }}>
                    A standard product would have required the company to simplify or alter these workflows. The custom platform allowed the business to retain its commercial method and remove the manual work surrounding it.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3D3128' }}>
                    Pressense diagnosed the full process before writing a line of code, preserved the Google Sheets workflow the team already understood, and built the controlled commercial layer between the catalogue and the customer.
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
                        '7 Google Sheets unified into one controlled platform',
                        '6 category-specific guided quotation workflows',
                        '335 client records centralised at launch',
                        '19 users across three governed access levels',
                        '100% application-layer locking of finalised projects',
                        '78–104 hours of monthly capacity released (est.)',
                        '936–1,248 hours of annual capacity',
                        'Approximately 6–8 employee-months per year',
                        'Prices can change; approved quotations cannot',
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
                      Is your quotation process costing you this?
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B5D51' }}>
                      We map the workflow, quantify the cost, and build the missing commercial layer.
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
              headline="Are your designers building quotations — or rebuilding the same calculations?"
              body="Pressense helps architecture, interior-design and project-based businesses turn spreadsheet-dependent commercial processes into focused internal software. We map the way the business actually prices, approves and delivers work, then build the missing system around it."
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

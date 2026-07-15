import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Pricing | Pressense',
  description: 'Transparent pricing for all Pressense services — AI automation, GTM strategy, custom development, integrations, and business consulting. All services include a free diagnostic.',
  openGraph: {
    title: 'Service Pricing | Pressense',
    description: 'Transparent pricing for all Pressense services — AI automation, GTM strategy, custom development, integrations, and business consulting.',
    url: '/pricing',
    type: 'website',
  },
  alternates: { canonical: '/pricing' },
}

const services = [
  {
    category: 'AI & Automation',
    items: [
      {
        name: 'AI Automation Agency',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'Systems that think and act — AI workflows embedded into your business operations.',
        link: '/ai-automation-agency',
        deliverables: ['8-week engagement', 'AI workflow architecture', 'Tool stack setup (n8n/Make/Zapier)', 'Team training & documentation'],
      },
      {
        name: 'AI Strategy Consulting',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'A clear AI adoption roadmap — not hype, just the opportunities that matter for your business.',
        link: '/ai-strategy-consulting',
        deliverables: ['AI capability audit', 'Prioritised opportunities list', '90-day implementation roadmap', 'ROI projection model'],
      },
      {
        name: 'AI Workflows & Automation',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'Eliminate the repetitive work — automate the processes that slow you down.',
        link: '/ai-workflows-automation',
        deliverables: ['Workflow mapping & design', 'API integrations (HubSpot, Slack, etc.)', 'Error handling & monitoring', 'Ongoing support option'],
      },
      {
        name: 'Workflow Automation Consulting',
        price: 'From $1,500',
        type: 'Project',
        outcome: 'Workflows that work — built to scale as your business grows.',
        link: '/workflow-automation-consulting',
        deliverables: ['Process audit & redesign', 'Tool selection & setup', 'Custom automation builds', '30-day post-launch support'],
      },
      {
        name: 'Business Process Automation Consulting',
        price: 'From $2,500',
        type: 'Project',
        outcome: 'Efficiency that sticks — automation that your team will actually use.',
        link: '/business-process-automation-consulting',
        deliverables: ['Full process audit', 'Automation opportunity map', 'Tool stack implementation', 'Team training & rollout'],
      },
    ],
  },
  {
    category: 'Strategy & GTM',
    items: [
      {
        name: 'Fractional CMO Services',
        price: 'From $1,500/month',
        type: 'Retainer',
        outcome: 'CMO-level strategy without the $250K salary — embedded, accountable, results-focused.',
        link: '/fractional-cmo-services',
        deliverables: ['Marketing audit & positioning', 'GTM strategy & 90-day roadmap', 'Demand gen engine setup', 'Board-ready dashboards'],
      },
      {
        name: 'GTM Systems Builder',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'Strategy, content, and internal tools — all connected into one GTM system.',
        link: '/gtm-systems-builder',
        deliverables: ['GTM strategy + ICP definition', 'SEO content programme setup', 'Internal tools audit', 'Integrated 90-day roadmap'],
      },
      {
        name: 'GTM Content Systems',
        price: 'From $2,000/month',
        type: 'Retainer',
        outcome: 'Content that feeds your pipeline — built as a system, not a batch of blog posts.',
        link: '/gtm-content-systems',
        deliverables: ['ICP and positioning statement', 'Topic cluster architecture', 'Monthly content production', 'CRM attribution and reporting'],
      },
      {
        name: 'SEO Content for SaaS',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'Organic pipeline from content — written for buyers, structured for Google.',
        link: '/seo-content-for-saas',
        deliverables: ['Keyword gap analysis', 'Pillar page and cluster articles', 'Comparison and alternative pages', 'FAQPage schema on every piece'],
      },
      {
        name: 'GTM Strategy Consultant',
        price: 'From $2,500',
        type: 'Project',
        outcome: "Why your product isn't converting — and exactly how to fix it.",
        link: '/gtm-strategy-consultant',
        deliverables: ['PRESS Framework 8-week sprint', 'ICP & positioning document', 'Channel strategy & playbook', 'Sales motion design'],
      },
      {
        name: 'SaaS Go-To-Market Strategy',
        price: 'From $3,000',
        type: 'Project',
        outcome: 'A go-to-market that works for your stage — whether pre-revenue or scaling.',
        link: '/saas-go-to-market-strategy',
        deliverables: ['SaaS GTM framework', 'Buyer journey mapping', 'Channel & messaging strategy', 'Launch checklist & roadmap'],
      },
      {
        name: 'Revenue Operations Consulting',
        price: 'From $2,000/month',
        type: 'Retainer',
        outcome: 'Pipeline visibility that sticks — CRM as a growth system, not a contact database.',
        link: '/revenue-operations-consulting',
        deliverables: ['CRM architecture & design', 'Pipeline process automation', 'Forecasting & reporting setup', 'Cross-functional workflows'],
      },
    ],
  },
  {
    category: 'Development & Build',
    items: [
      {
        name: 'Custom CRM Development',
        price: 'From $5,000',
        type: 'Project',
        outcome: 'A CRM built for how you actually sell — no Salesforce bloat, no workarounds.',
        link: '/custom-crm-development',
        deliverables: ['Custom data model', 'Workflow automation', 'Integrations (email, calendar, etc.)', 'Team training & handover'],
      },
      {
        name: 'Custom Internal Tools',
        price: 'From $3,000',
        type: 'Project',
        outcome: 'Replace spreadsheets with tools your team will want to use.',
        link: '/custom-internal-tools',
        deliverables: ['Requirements mapping', 'Custom tool build', 'User training', 'Post-launch support option'],
      },
      {
        name: 'MVP Development for Startups',
        price: 'From $5,000',
        type: 'Project',
        outcome: 'A live product in 8 weeks — production-ready code, not a prototype.',
        link: '/mvp-development-for-startups',
        deliverables: ['Core feature build', 'Production-grade security & auth', 'Optional GTM playbook', 'Handoff-ready codebase'],
      },
      {
        name: 'MVP Development on Replit',
        price: 'From $3,000',
        type: 'Project',
        outcome: 'Validated and live in six weeks — built on Replit, owned by you.',
        link: '/mvp-development-replit',
        deliverables: ['Core value loop build', 'User auth and database setup', '2-3 third-party integrations', 'Production deployment on Replit'],
      },
      {
        name: 'Business Systems Consultant',
        price: 'From $1,500',
        type: 'Advisory',
        outcome: 'Operations that scale — systems designed to grow with your business.',
        link: '/business-systems-consultant',
        deliverables: ['Operations audit', 'Bottleneck identification', 'Systems architecture & roadmap', 'Implementation support'],
      },
    ],
  },
  {
    category: 'Technical Integrations',
    items: [
      {
        name: 'Claude API Integration',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'AI integrated into your workflow — document analysis, content generation, decision support.',
        link: '/claude-api-integration',
        deliverables: ['API architecture design', 'Prompt engineering & testing', 'Production deployment', 'Usage monitoring setup'],
      },
      {
        name: 'OpenAI Integration Services',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'GPT-4o embedded in your systems — conversational tools that drive revenue.',
        link: '/openai-integration-services',
        deliverables: ['Integration architecture', 'Model fine-tuning & prompts', 'Rate limiting & cost controls', 'Performance monitoring'],
      },
    ],
  },
  {
    category: 'Consulting & Advisory',
    items: [
      {
        name: 'Consulting Firm for Startups',
        price: 'From $500',
        type: 'Advisory',
        outcome: 'A sounding board with execution — GTM, AI systems, custom software, all in one.',
        link: '/consulting-firm-for-startups',
        deliverables: ['Founder Advisory Sessions', 'Diagnostic calls & roadmaps', 'Project-based work as needed', 'Ongoing advisor option'],
      },
      {
        name: 'Replit Development Agency',
        price: 'From $1,500',
        type: 'Project',
        outcome: 'Full-stack apps built fast — Replit development paired with Vercel deployment and ongoing support.',
        link: '/replit-development-agency',
        deliverables: ['8-week engagement sprint', 'Production-grade Replit builds', 'Vercel deployment & CI/CD', '24-48hr bug fix SLA'],
      },
      {
        name: 'Framer Website Design',
        price: 'From $2,000',
        type: 'Project',
        outcome: 'Beautiful, fast, interactive — website design that converts.',
        link: '/framer-website-design',
        deliverables: ['Framer site build', 'Responsive design', 'Integrations (CMS, forms, etc.)', 'Domain setup & handoff'],
      },
    ],
  },
]

const typeColors: Record<string, string> = {
  Project: 'bg-accent-wash text-accent-text',
  Retainer: 'bg-surface-2 text-muted-foreground',
  Advisory: 'bg-surface text-muted-foreground',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="eyebrow-line" />
              <span className="eyebrow">Pricing</span>
            </div>
            <h1 className="text-display font-serif font-medium text-foreground text-balance mb-6">
              Transparent pricing.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>No surprises.</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
              Every service includes a free diagnostic to confirm scope and pricing. Pick a service below — all prices are project-based or monthly retainers, depending on engagement type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/diagnostic" className="btn-primary">
                Book a free diagnostic
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/how-we-work" className="btn-secondary">
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by category */}
      {services.map((category) => (
        <section key={category.category} className="py-14 lg:py-20">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

            {/* Category header */}
            <div className="flex items-center gap-3 mb-10">
              <div className="eyebrow-line" />
              <h2 className="text-section-title font-serif font-medium text-foreground">
                {category.category}
              </h2>
            </div>

            <div className="grid gap-5">
              {category.items.map((service) => (
                <article
                  key={service.name}
                  className="card-surface rounded-3xl p-7 sm:p-8 flex flex-col gap-6"
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
                        {service.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border border-primary/30 bg-accent-wash text-accent-text">
                          {service.price}
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors[service.type] ?? 'bg-surface text-muted-foreground'}`}>
                          {service.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Outcome statement */}
                  <p className="text-base font-serif italic text-foreground leading-relaxed">
                    &ldquo;{service.outcome}&rdquo;
                  </p>

                  {/* Deliverables */}
                  <div>
                    <p className="eyebrow mb-3">Includes</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.4" />
                            <path d="M5 8l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground font-sans">
                      Larger engagements?{' '}
                      <Link href="/diagnostic" className="text-primary hover:underline">
                        Let&apos;s scope it together.
                      </Link>
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent-strong transition-colors font-sans"
                    >
                      Full details
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA footer */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="eyebrow-line" />
            <span className="eyebrow">Get started</span>
            <div className="eyebrow-line" />
          </div>
          <h2 className="text-display font-serif font-medium text-foreground mb-5 text-balance">
            Ready to get{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>started?</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
            Every engagement starts with a free diagnostic call. We&apos;ll map your constraints, scope the work, and give you a fixed price — no surprises.
          </p>
          <Link href="/diagnostic" className="btn-primary">
            Start your diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}

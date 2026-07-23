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
}

const services = [
  {
    category: 'AI & Automation',
    items: [
      {
        name: 'AI Automation Agency',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"Systems that think and act — AI workflows embedded into your business operations."',
        link: '/ai-automation-agency',
        deliverables: ['8-week engagement', 'AI workflow architecture', 'Tool stack setup (n8n/Make/Zapier)', 'Team training & documentation'],
      },
      {
        name: 'AI Strategy Consulting',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"A clear AI adoption roadmap — not hype, just the opportunities that matter for your business."',
        link: '/ai-strategy-consulting',
        deliverables: ['AI capability audit', 'Prioritised opportunities list', '90-day implementation roadmap', 'ROI projection model'],
      },
      {
        name: 'AI Workflows & Automation',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"Eliminate the repetitive work — automate the processes that slow you down."',
        link: '/ai-workflows-automation',
        deliverables: ['Workflow mapping & design', 'API integrations (HubSpot, Slack, etc.)', 'Error handling & monitoring', 'Ongoing support option'],
      },
      {
        name: 'Workflow Automation Consulting',
        price: 'From $1,200',
        type: 'Project',
        outcome: '"Workflows that work — built to scale as your business grows."',
        link: '/workflow-automation-consulting',
        deliverables: ['Process audit & redesign', 'Tool selection & setup', 'Custom automation builds', '30-day post-launch support'],
      },
      {
        name: 'Business Process Automation Consulting',
        price: 'From $2,500',
        type: 'Project',
        outcome: '"Efficiency that sticks — automation that your team will actually use."',
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
        outcome: '"CMO-level strategy without the $250K salary — embedded, accountable, results-focused."',
        link: '/fractional-cmo-services',
        deliverables: ['Marketing audit & positioning', 'GTM strategy & 90-day roadmap', 'Demand gen engine setup', 'Board-ready dashboards'],
      },
      {
        name: 'GTM Systems Builder',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"Strategy, content, and internal tools — all connected into one GTM system."',
        link: '/gtm-systems-builder',
        deliverables: ['GTM strategy + ICP definition', 'SEO content programme setup', 'Internal tools audit', 'Integrated 90-day roadmap'],
      },
      {
        name: 'GTM Content Systems',
        price: 'From $2,000/month',
        type: 'Retainer',
        outcome: '"Content that feeds your pipeline — built as a system, not a batch of blog posts."',
        link: '/gtm-content-systems',
        deliverables: ['ICP and positioning statement', 'Topic cluster architecture', 'Monthly content production', 'CRM attribution and reporting'],
      },
      {
        name: 'SEO Content for SaaS',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"Organic pipeline from content — written for buyers, structured for Google."',
        link: '/seo-content-for-saas',
        deliverables: ['Keyword gap analysis', 'Pillar page and cluster articles', 'Comparison and alternative pages', 'FAQPage schema on every piece'],
      },
      {
        name: 'GTM Strategy Consultant',
        price: 'From $2,500',
        type: 'Project',
        outcome: '"Why your product isn\'t converting — and exactly how to fix it."',
        link: '/gtm-strategy-consultant',
        deliverables: ['PRESS Framework 8-week sprint', 'ICP & positioning document', 'Channel strategy & playbook', 'Sales motion design'],
      },
      {
        name: 'SaaS Go-To-Market Strategy',
        price: 'From $3,000',
        type: 'Project',
        outcome: '"A go-to-market that works for your stage — whether pre-revenue or scaling."',
        link: '/saas-go-to-market-strategy',
        deliverables: ['SaaS GTM framework', 'Buyer journey mapping', 'Channel & messaging strategy', 'Launch checklist & roadmap'],
      },
      {
        name: 'Revenue Operations Consulting',
        price: 'From $2,000/month',
        type: 'Retainer',
        outcome: '"Pipeline visibility that sticks — CRM as a growth system, not a contact database."',
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
        outcome: '"A CRM built for how you actually sell — no Salesforce bloat, no workarounds."',
        link: '/custom-crm-development',
        deliverables: ['Custom data model', 'Workflow automation', 'Integrations (email, calendar, etc.)', 'Team training & handover'],
      },
      {
        name: 'Custom Internal Tools',
        price: 'From $3,000',
        type: 'Project',
        outcome: '"Replace spreadsheets with tools your team will want to use."',
        link: '/custom-software-internal-tools',
        deliverables: ['Requirements mapping', 'Custom tool build', 'User training', 'Post-launch support option'],
      },
      {
        name: 'MVP Development for Startups',
        price: 'From $5,000',
        type: 'Project',
        outcome: '"A live product in 8 weeks — production-ready code, not a prototype."',
        link: '/mvp-development-for-startups',
        deliverables: ['Core feature build', 'Production-grade security & auth', 'Optional GTM playbook', 'Handoff-ready codebase'],
      },
      {
        name: 'MVP Development on Replit',
        price: 'From $3,000',
        type: 'Project',
        outcome: '"Validated and live in six weeks — built on Replit, owned by you."',
        link: '/mvp-development-replit',
        deliverables: ['Core value loop build', 'User auth and database setup', '2-3 third-party integrations', 'Production deployment on Replit'],
      },
      {
        name: 'Business Systems Consultant',
        price: 'From $1,500',
        type: 'Advisory',
        outcome: '"Operations that scale — systems designed to grow with your business."',
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
        outcome: '"AI integrated into your workflow — document analysis, content generation, decision support."',
        link: '/claude-api-integration',
        deliverables: ['API architecture design', 'Prompt engineering & testing', 'Production deployment', 'Usage monitoring setup'],
      },
      {
        name: 'OpenAI Integration Services',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"GPT-4o embedded in your systems — conversational tools that drive revenue."',
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
        outcome: '"A sounding board with execution — GTM, AI systems, custom software, all in one."',
        link: '/consulting-firm-for-startups',
        deliverables: ['Founder Advisory Sessions', 'Diagnostic calls & roadmaps', 'Project-based work as needed', 'Ongoing advisor option'],
      },
      {
        name: 'Replit Development Agency',
        price: 'From $1,500',
        type: 'Project',
        outcome: '"Full-stack apps built fast — Replit development paired with Vercel deployment and ongoing support."',
        link: '/replit-development-agency',
        deliverables: ['8-week engagement sprint', 'Production-grade Replit builds', 'Vercel deployment & CI/CD', '24-48hr bug fix SLA'],
      },
      {
        name: 'Framer Website Design',
        price: 'From $2,000',
        type: 'Project',
        outcome: '"Beautiful, fast, interactive — website design that converts."',
        link: '/framer-website-design',
        deliverables: ['Framer site build', 'Responsive design', 'Integrations (CMS, forms, etc.)', 'Domain setup & handoff'],
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Pricing</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
              Transparent pricing. No surprises.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Every service includes a free diagnostic to confirm scope and pricing. Pick a service below — all prices are project-based or monthly retainers, depending on engagement type.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
              >
                Book a free diagnostic
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
              >
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services by category */}
      {services.map((category) => (
        <section key={category.category} className="py-16 lg:py-20 border-b border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-10">{category.category}</h2>
            
            <div className="grid gap-6 md:gap-8">
              {category.items.map((service) => (
                <div key={service.name} className="glass-card rounded-2xl p-6 sm:p-8 border border-border/40 flex flex-col gap-5">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">{service.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg border border-primary/30 bg-primary/5 text-xs font-semibold text-primary">
                          {service.price}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary/40 px-2.5 py-1 rounded">
                          {service.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Outcome statement */}
                  <p className="text-base text-foreground italic leading-relaxed">
                    {service.outcome}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2.5">Includes</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                            <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.5" />
                            <path d="M5 8l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Escape valve + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border/30">
                    <p className="text-xs text-muted-foreground">
                      Larger engagements?{' '}
                      <Link href="/contact" className="text-primary hover:underline">
                        Let's scope it together.
                      </Link>
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Full details
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA footer */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every engagement starts with a free diagnostic call. We'll map your constraints, scope the work, and give you a fixed price — no surprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start your diagnostic
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

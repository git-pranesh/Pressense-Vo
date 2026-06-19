const apps = [
  { category: 'Internal Tools', name: 'Custom CRM', desc: 'Deal pipelines, contact management, and activity tracking built around your exact sales process — not Salesforce\'s.' },
  { category: 'Internal Tools', name: 'Operations Dashboard', desc: 'A single view of your team\'s key metrics, tasks, and alerts pulled from Notion, Slack, HubSpot, and your database.' },
  { category: 'Internal Tools', name: 'Client Portal', desc: 'A branded portal where clients submit requests, view project status, upload files, and communicate without clogging your inbox.' },
  { category: 'Internal Tools', name: 'Inventory & Order Tracker', desc: 'Real-time stock levels, purchase order management, and supplier communication for product businesses with 1–50 SKUs.' },
  { category: 'Internal Tools', name: 'Onboarding Workflow App', desc: 'Automates new employee or new client onboarding steps, assigns tasks, sends reminders, and tracks completion.' },
  { category: 'MVPs', name: 'SaaS MVP', desc: 'A subscription product with user auth, payments via Stripe, a core feature loop, and an admin dashboard. Live in eight weeks.' },
  { category: 'MVPs', name: 'Marketplace MVP', desc: 'Two-sided platforms with buyer and seller accounts, listings, a booking or checkout flow, and review management.' },
  { category: 'MVPs', name: 'B2B Customer Portal', desc: 'Enterprise clients log in to view invoices, submit support tickets, track deliverables, and pull usage reports.' },
  { category: 'MVPs', name: 'API Product', desc: 'A developer-facing API with documentation, key management, rate limiting, and a usage dashboard.' },
  { category: 'AI Tools', name: 'AI Document Processor', desc: 'Upload a contract, invoice, or application form. The tool extracts structured data and writes it to your CRM or spreadsheet.' },
  { category: 'AI Tools', name: 'Internal Knowledge Base Bot', desc: 'A chat interface trained on your SOPs, product docs, and Notion pages. Answers team questions without interrupting you.' },
  { category: 'AI Tools', name: 'Lead Qualification Bot', desc: 'Qualifies inbound leads against your ICP criteria, scores them, and pushes qualified leads to your CRM with a summary.' },
  { category: 'Automation', name: 'Reporting Automation', desc: 'Pulls data from Google Ads, HubSpot, Stripe, and your database. Builds a formatted report and emails it every Monday morning.' },
  { category: 'Automation', name: 'Proposal Generator', desc: 'Sales reps fill out a short form. The tool pulls pricing, pulls case studies, and generates a branded PDF proposal in 30 seconds.' },
  { category: 'Automation', name: 'Compliance Audit Tool', desc: 'Checks your processes, documents, and records against a defined compliance checklist. Flags gaps and assigns owners.' },
]

const categoryColors: Record<string, string> = {
  'Internal Tools': 'bg-primary/10 text-primary',
  'MVPs': 'bg-secondary/60 text-muted-foreground',
  'AI Tools': 'bg-primary/5 text-primary/80',
  'Automation': 'bg-secondary/40 text-muted-foreground',
}

export function ReplitAgencyWhatWeBuildSection() {
  return (
    <section id="what-we-build" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          What you can build
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What can you build with Replit? 15 business apps we&apos;ve built for clients
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Replit is not a toy. It is the platform Google&apos;s AI Overview cited for "custom internal tools development". These are real production apps, each built in standard TypeScript, owned by the client, and running live.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <div
              key={app.name}
              className="p-5 rounded-xl border border-border/40 bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[app.category]}`}
                >
                  {app.category}
                </span>
                <span className="text-xs text-muted-foreground/50 font-mono">#{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{app.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Don&apos;t see your use case? Describe it in plain English at the diagnostic session. If Replit can build it, we&apos;ll scope it. If another tool is a better fit, we&apos;ll tell you.
          </p>
        </div>
      </div>
    </section>
  )
}

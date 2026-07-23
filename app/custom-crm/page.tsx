import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom CRM Development | Pressense',
  description: 'A CRM built for how you actually sell — no Salesforce bloat, no workarounds. Custom-built to match your pipeline and workflow.',
  openGraph: {
    title: 'Custom CRM Development | Pressense',
    description: 'A CRM built for how you actually sell — no Salesforce bloat, no workarounds. Custom-built to match your pipeline and workflow.',
    url: '/custom-crm',
    type: 'website',
  },
}

export default function CustomCrmPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
              Custom CRM Development
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Placeholder content — this page is coming soon. We build CRMs designed around how your team actually sells, not around what off-the-shelf software forces you to do.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
              >
                Start Diagnostic
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

      {/* Placeholder body */}
      <section className="py-16 lg:py-20 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">What we build</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Full page content is being written. This section will cover custom data models, pipeline automation, email and calendar integrations, and how we hand off fully trained, production-ready CRM systems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Ready to replace your off-the-shelf CRM?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every engagement starts with a free diagnostic call. We scope your pipeline, data model, and integration requirements before quoting a fixed price.
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

import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'AI Automation Agency in San Francisco | Pressense',
  description: 'AI automation consulting and workflow optimization for San Francisco startups and businesses. Diagnose and build AI solutions in 1 week.',
  openGraph: {
    title: 'AI Automation Agency in San Francisco | Pressense',
    description: 'AI automation services for SF-based companies. Transform workflows with custom AI solutions.',
    url: '/ai-automation-agency-san-francisco',
    type: 'website',
  },
  alternates: {
    canonical: '/ai-automation-agency-san-francisco',
  },
}

export default function AISFPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/ai-automation-agency-san-francisco',
    name: 'Pressense - AI Automation Agency San Francisco',
    description: 'AI automation consulting and implementation for San Francisco area businesses.',
    url: 'https://pressense.co/ai-automation-agency-san-francisco',
    areaServed: 'San Francisco, CA',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    serviceArea: {
      '@type': 'Place',
      name: 'San Francisco Bay Area',
    },
  }

  return (
    <>
      <StructuredData data={schema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency San Francisco","description":"AI automation consulting for San Francisco and Bay Area founder-led businesses.","url":"https://www.pressense.co/ai-automation-agency-san-francisco","areaServed":{"@type":"City","name":"San Francisco"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} />
      
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            AI Automation Agency in San Francisco
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your San Francisco business with AI-powered workflow automation. Diagnose broken workflows, build custom AI solutions, and scale operations in 1 week.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why San Francisco Founders Choose Pressense</h2>
              <p className="text-muted-foreground mb-4">
                San Francisco's fast-paced startup ecosystem demands constant optimization. AI automation isn't a luxury—it's a necessity to stay competitive. We help SF-based founders and companies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Identify repetitive workflows costing 10+ hours per week</li>
                <li>Build custom AI agents tailored to your business</li>
                <li>Reduce operational costs and improve team focus</li>
                <li>Accelerate growth without expanding headcount</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Services We Offer in San Francisco</h2>
              <div className="space-y-4">
                <div className="p-4 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">AI Automation Audit</h3>
                  <p className="text-muted-foreground text-sm">
                    We analyze your current workflows and identify 3-5 high-impact AI opportunities. Typical engagement: 2-3 days. Investment: $2,500+
                  </p>
                </div>
                <div className="p-4 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">AI Agent Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Custom AI agents for content generation, lead scoring, customer insights, or automation. 1-2 week builds. Investment: $5,000+
                  </p>
                </div>
                <div className="p-4 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">AI Workflow Integration</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect AI solutions to your existing stack (CRM, email, Slack, etc.). Ongoing support included. Investment: $3,000+
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Recent San Francisco AI Projects</h2>
              <p className="text-muted-foreground mb-4">
                We've helped SF-based companies automate workflows across:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>SaaS customer onboarding and support</li>
                <li>Startup GTM content generation and email campaigns</li>
                <li>Venture-backed ops and data analytics</li>
                <li>Founder lead scoring and pipeline management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground ml-2">
                <li><strong>Week 1: Audit & Discovery</strong> - We understand your workflows and identify AI opportunities.</li>
                <li><strong>Week 2: Design & Build</strong> - We build and test custom AI solutions tailored to your needs.</li>
                <li><strong>Week 3: Deploy & Train</strong> - We deploy the solution and train your team for ongoing management.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Founder-focused: We work closely with founders on strategic workflows</li>
                <li>Fast execution: Most projects complete in 1-2 weeks</li>
                <li>Results-driven: We measure success by time saved and ROI delivered</li>
                <li>San Francisco-based: We understand the local startup ecosystem</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ready to Automate Your Workflows?</h2>
              <p className="text-muted-foreground mb-6">
                Let's start with a 30-minute diagnostic call to identify your top AI opportunities. No obligation.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Schedule Your AI Audit
              </a>
            </section>
          </div>
        </section>
      </main>
      
    </>
  )
}

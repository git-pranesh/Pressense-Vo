import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Readiness Audit Playbook | Pressense',
  description: 'Step-by-step playbook to assess your business readiness for AI implementation. Identify opportunities, risks, and implementation roadmap.',
  openGraph: {
    title: 'AI Readiness Audit Playbook | Pressense',
    description: 'Free playbook: Assess your AI readiness in 8 steps. Identify high-impact opportunities and build your AI implementation roadmap.',
    url: '/playbooks/ai-readiness-audit',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Readiness Audit' }],
  },
  alternates: {
    canonical: '/playbooks/ai-readiness-audit',
  },
}

export default function AIReadinessAuditPlaybook() {
  return (
    <>
      
      <main className="min-h-screen">
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl font-bold tracking-tight mb-6">AI Readiness Audit Playbook</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Assess your organization's readiness for AI implementation. This playbook guides you through 8 diagnostic steps to identify high-impact opportunities, evaluate risks, and build your implementation roadmap.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 1: Audit Your Current Workflows</h2>
              <p className="text-muted-foreground mb-4">
                Document all repetitive, time-consuming workflows in your organization. Look for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Data entry and extraction tasks</li>
                <li>Content generation and summarization</li>
                <li>Lead scoring and qualification</li>
                <li>Customer data analysis and insights</li>
                <li>Report generation and distribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 2: Quantify Time & Cost Impact</h2>
              <p className="text-muted-foreground">
                For each workflow, estimate: (a) Time spent per week, (b) Team members involved, (c) Cost per hour, (d) Error rate/rework cost
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 3: Identify Data Readiness</h2>
              <p className="text-muted-foreground mb-4">
                Assess your data infrastructure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Where does your data live? (CRM, database, spreadsheets, tools)</li>
                <li>Is data clean and structured?</li>
                <li>Do you have API access or data exports available?</li>
                <li>What's your data privacy/compliance status?</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 4: Rank Opportunities by ROI</h2>
              <p className="text-muted-foreground">
                Prioritize workflows using: Time Saved × Weekly Frequency × Team Hourly Rate = Weekly ROI
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 5: Evaluate Organizational Readiness</h2>
              <p className="text-muted-foreground">
                Check: Team buy-in, technical infrastructure, security/compliance requirements, budget allocation, change management capacity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 6: Select Pilot Use Case</h2>
              <p className="text-muted-foreground">
                Start with a high-ROI, low-risk workflow that's quick to implement (target: 30-60 days to value).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 7: Build Implementation Roadmap</h2>
              <p className="text-muted-foreground">
                Phase 1: Pilot (30 days), Phase 2: Full deployment (60 days), Phase 3: Scale to other teams (Ongoing)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 8: Define Success Metrics</h2>
              <p className="text-muted-foreground">
                Track: Hours saved, accuracy improvements, user adoption rate, ROI achieved, team satisfaction.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              Need help with your AI readiness assessment? Our team can audit your current workflows and build a customized 90-day AI implementation roadmap.
            </p>
            <a href="/ai-implementation-small-business" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Start AI Implementation Consulting
            </a>
          </div>
        </section>
      </main>
      
    </>
  )
}

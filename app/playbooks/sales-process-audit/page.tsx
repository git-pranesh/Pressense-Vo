import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Process Audit Playbook | Pressense',
  description: 'Audit your sales process for efficiency and conversion. Identify leaks, optimize stage timelines, improve win rates.',
  openGraph: {
    title: 'Sales Process Audit Playbook | Pressense',
    description: 'Free playbook: Audit your sales pipeline. Identify process bottlenecks, stage timelines, and conversion improvements.',
    url: '/playbooks/sales-process-audit',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sales Process Audit' }],
  },
  alternates: {
    canonical: '/playbooks/sales-process-audit',
  },
}

export default function SalesProcessAuditPlaybook() {
  return (
    <>
      
      <main className="min-h-screen">
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl font-medium tracking-tight mb-6">Sales Process Audit Playbook</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Your sales process is leaking revenue. Find the leaks, fix them, and improve your close rate. This playbook helps you audit your sales pipeline stage by stage and identify where deals die.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 1: Map Your Sales Stages</h2>
              <p className="text-muted-foreground mb-4">
                Document your current sales process. Typical stages include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Lead (prospect identified)</li>
                <li>Outreach (contact made)</li>
                <li>Discovery (call scheduled or taken)</li>
                <li>Proposal (sent)</li>
                <li>Negotiation (terms discussed)</li>
                <li>Close (deal signed)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 2: Measure Stage Duration & Conversion</h2>
              <p className="text-muted-foreground mb-4">
                For the last 30-90 days, calculate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Average days spent in each stage</li>
                <li>Percentage of deals that move forward (conversion rate)</li>
                <li>Percentage of deals that stall or go dark</li>
                <li>Common objections or blockers at each stage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 3: Identify Leaks</h2>
              <p className="text-muted-foreground mb-4">
                Where are deals getting stuck or falling out?
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Discovery stage: Prospects ghosting after initial call?</li>
                <li>Proposal stage: Deals stalling waiting for decision?</li>
                <li>Negotiation stage: Losing deals on price or terms?</li>
                <li>Close stage: Can't get signature?</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 4: Analyze Root Causes</h2>
              <p className="text-muted-foreground mb-4">
                For each leak, ask:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Is it a qualification issue? (Wrong ICP getting through)</li>
                <li>Is it a discovery issue? (Not finding real pain points)</li>
                <li>Is it a positioning issue? (Not showing clear ROI)</li>
                <li>Is it a follow-up issue? (No consistent cadence)</li>
                <li>Is it a competitive issue? (Losing to competitors)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 5: Define Ideal Stage Timelines</h2>
              <p className="text-muted-foreground mb-4">
                Compare your current timelines to best practices:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Lead to Discovery: 5-7 days (then you're losing them)</li>
                <li>Discovery to Proposal: 3-5 days</li>
                <li>Proposal to Close: 7-14 days</li>
                <li>{"Total cycle: 15-30 days (should be <40 days)"}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 6: Build Your Action Plan</h2>
              <p className="text-muted-foreground mb-4">
                For each leak identified, implement a fix:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li><strong>Qualification:</strong> Build ICP profile, tighten lead scoring</li>
                <li><strong>Discovery:</strong> Create discovery call framework, train team</li>
                <li><strong>Positioning:</strong> Refine messaging, build ROI calculator</li>
                <li><strong>Follow-up:</strong> Set up automated follow-up sequences</li>
                <li><strong>Competitive:</strong> Build competitive battle cards, differentiation messaging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 7: Set Improvement Targets</h2>
              <p className="text-muted-foreground mb-4">
                Target: Improve your conversion rate by 20-30% and cycle time by 25% in 90 days.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              Want expert help auditing and optimizing your sales process? Our team can analyze your pipeline and build a sales optimization roadmap.
            </p>
            <a href="/revenue-operations-consulting" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Schedule Sales Process Audit
            </a>
          </div>
        </section>
      </main>
      
    </>
  )
}

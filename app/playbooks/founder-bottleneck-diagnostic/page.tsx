import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder Bottleneck Diagnostic Playbook | Pressense',
  description: "Diagnose what's slowing your growth: operational chaos, unclear prioritization, or team misalignment. Free diagnostic framework.",
  openGraph: {
    title: 'Founder Bottleneck Diagnostic Playbook | Pressense',
    description: 'Free playbook: Identify the root cause of your growth slowdown. Operational, strategic, or execution bottleneck?',
    url: '/playbooks/founder-bottleneck-diagnostic',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Founder Bottleneck' }],
  },
  alternates: {
    canonical: '/playbooks/founder-bottleneck-diagnostic',
  },
}

export default function FounderBottleneckPlaybook() {
  return (
    <>
      
      <main className="min-h-screen">
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Founder Bottleneck Diagnostic Playbook</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Growth has plateaued or slowed. Before you blame market conditions, diagnose the real bottleneck: Is it operational chaos, unclear strategy, or execution gaps? This playbook helps you identify and fix the constraint slowing your business.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Three Bottleneck Categories</h2>
              <p className="text-muted-foreground">
                Every growth constraint falls into one of three buckets:
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Bottleneck #1: Operational Chaos</h3>
              <p className="text-muted-foreground mb-4">Systems are broken or nonexistent. Your team is constantly firefighting.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>No documented processes or playbooks</li>
                <li>Data scattered across tools (no single source of truth)</li>
                <li>Poor communication between departments</li>
                <li>Recurring mistakes and rework</li>
                <li>Can't scale without adding more chaos</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Fix:</strong> Build operational systems (CRM, data model, communication cadence, playbooks)
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Bottleneck #2: Strategy Confusion</h3>
              <p className="text-muted-foreground mb-4">Direction is unclear. Every team is optimizing for different outcomes.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Founder is doing all strategic thinking (not documented)</li>
                <li>No clear ICP, positioning, or revenue model</li>
                <li>Marketing, sales, and product don't align on direction</li>
                <li>No quarterly goals or OKRs</li>
                <li>Constantly pivoting or trying new channels</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Fix:</strong> Build strategic clarity (ICP, positioning, pricing, sales model, quarterly roadmap)
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Bottleneck #3: Execution Gaps</h3>
              <p className="text-muted-foreground mb-4">Strategy is clear, operations are fine, but execution lags.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Sales team isn't closing at the expected rate</li>
                <li>Marketing pipeline is weak or inconsistent</li>
                <li>Product roadmap is misaligned with market demand</li>
                <li>Team lacks skills or accountability</li>
                <li>Low morale or leadership gaps</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Fix:</strong> Improve execution (sales coaching, marketing optimization, team alignment, skill development)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Self-Diagnostic: Which Bottleneck Are You In?</h2>
              <div className="space-y-6">
                <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
                  <p className="font-semibold mb-2">Answer these 3 questions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
                    <li>Do you have documented processes and systems? (Yes/No)</li>
                    <li>Is your GTM strategy clear and aligned across teams? (Yes/No/Unclear)</li>
                    <li>Are you executing on your strategy effectively? (Yes/No)</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground">Your answers map to your bottleneck:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                    <li><strong>No, ?, ?</strong> → Operational Chaos</li>
                    <li><strong>Yes, No/Unclear, ?</strong> → Strategy Confusion</li>
                    <li><strong>Yes, Yes, No</strong> → Execution Gaps</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <p className="text-muted-foreground mb-4">
                Once you've identified your bottleneck, take action:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li><strong>Operational:</strong> Audit your systems and build operational foundation</li>
                <li><strong>Strategy:</strong> Run a GTM strategy sprint to clarify positioning, ICP, and go-to-market</li>
                <li><strong>Execution:</strong> Assess your team and fix execution through coaching or restructuring</li>
              </ul>
            </section>
          </div>

          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              Ready to fix your bottleneck? Our consulting team can diagnose your specific situation and build a customized roadmap to accelerate growth.
            </p>
            <a href="/business-systems-consultant" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Schedule Bottleneck Diagnostic
            </a>
          </div>
        </section>
      </main>
      
    </>
  )
}

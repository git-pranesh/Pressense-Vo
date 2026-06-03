import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTM Alignment Playbook | Sales & Marketing Alignment | Pressense',
  description: 'Align sales and marketing around one unified go-to-market motion. Break silos and accelerate revenue.',
  openGraph: {
    title: 'GTM Alignment Playbook | Pressense',
    description: 'Free playbook: Align your sales and marketing teams around one unified GTM motion. Eliminate silos, increase efficiency.',
    url: '/playbooks/gtm-alignment',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GTM Alignment' }],
  },
  alternates: {
    canonical: '/playbooks/gtm-alignment',
  },
}

export default function GTMAlignmentPlaybook() {
  return (
    <>
      
      <main className="min-h-screen">
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl font-bold tracking-tight mb-6">GTM Alignment Playbook</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Sales and marketing are misaligned. Marketing generates leads sales doesn't want. Sales blames marketing for poor quality. This playbook fixes the friction and gets both teams working toward the same revenue goal.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Cost of Misalignment</h2>
              <p className="text-muted-foreground mb-4">
                When sales and marketing aren't aligned:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Marketing generates 100 leads, sales only qualifies 10 (90% waste)</li>
                <li>Sales complains about lead quality, marketing complains about follow-up</li>
                <li>Pricing, positioning, messaging differs between teams</li>
                <li>Lead definitions don't exist or are unclear (MQL vs SQL confusion)</li>
                <li>Revenue doesn't scale despite increasing marketing spend</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Result: Wasted budget, slow growth, team friction, founder frustration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 1: Define Shared Language</h2>
              <p className="text-muted-foreground mb-4">
                Start with definitions both teams agree on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li><strong>Lead:</strong> Any inbound inquiry (website form, demo request, email)</li>
                <li><strong>MQL (Marketing Qualified Lead):</strong> Lead matching our ICP (title, company size, industry)</li>
                <li><strong>SQL (Sales Qualified Lead):</strong> Lead that passed discovery call and expressed buying intent</li>
                <li><strong>Opportunity:</strong> Lead with proposed solution and timeline</li>
                <li><strong>Close:</strong> Deal signed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 2: Agree on Your Ideal Customer Profile (ICP)</h2>
              <p className="text-muted-foreground mb-4">
                Document shared understanding of your perfect customer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Industry/vertical</li>
                <li>Company size (employee count, annual revenue)</li>
                <li>Target buyer title/role</li>
                <li>Must-have problem we solve</li>
                <li>Budget range</li>
                <li>Buying timeline</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Marketing uses this for targeting. Sales uses this for qualifying.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 3: Align on Messaging & Positioning</h2>
              <p className="text-muted-foreground mb-4">
                Create one unified message all teams use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Headline/value prop (the same for website, sales deck, emails)</li>
                <li>3-5 key benefits (consistent across all channels)</li>
                <li>Pricing/packages (marketing and sales say the same thing)</li>
                <li>Typical customer profile and use cases (aligned story)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 4: Define Marketing's Role</h2>
              <p className="text-muted-foreground mb-4">
                Marketing is responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Awareness (attract people matching our ICP)</li>
                <li>Lead generation (capture contact info)</li>
                <li>Lead scoring (identify most promising leads)</li>
                <li>Lead nurturing (educate leads not ready to buy yet)</li>
                <li>Passing warm, qualified leads to sales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 5: Define Sales' Role</h2>
              <p className="text-muted-foreground mb-4">
                Sales is responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Lead qualification (verify ICP match and pain)</li>
                <li>Discovery (understand buying process and decision makers)</li>
                <li>Positioning customization (tailor solution to their needs)</li>
                <li>Proposal (create custom proposal or quote)</li>
                <li>Negotiation and close (sign the deal)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 6: Set Up Feedback Loop</h2>
              <p className="text-muted-foreground mb-4">
                Sales needs to feed back to marketing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Weekly: Lead quality feedback (what's disqualifying leads?)</li>
                <li>Monthly: Lost deal review (why did we lose? What should we improve?)</li>
                <li>Monthly: ICP validation (are leads matching our definition performing well?)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Marketing uses this to improve targeting and messaging.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Step 7: Set Shared Revenue Goals</h2>
              <p className="text-muted-foreground mb-4">
                Both teams are measured on revenue, not activity:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Marketing KPIs: Cost per qualified lead, lead-to-opportunity rate, marketing-influenced revenue</li>
                <li>Sales KPIs: Opportunity-to-close rate, average deal size, sales cycle length</li>
                <li>Shared KPI: Total revenue generated (the metric that matters)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Quick Implementation Checklist</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Week 1: Joint workshop to define shared language and ICP</li>
                <li>Week 2: Create one unified positioning/messaging document</li>
                <li>Week 3: Set up CRM for lead scoring and qualification</li>
                <li>Week 4: Kick off weekly alignment meetings (sales + marketing together)</li>
                <li>Ongoing: Monthly reviews and feedback loop</li>
              </ul>
            </section>
          </div>

          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              Need help implementing GTM alignment with your team? Our consultants can facilitate a GTM alignment sprint and build your unified go-to-market motion.
            </p>
            <a href="/saas-go-to-market-strategy" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Schedule GTM Alignment Workshop
            </a>
          </div>
        </section>
      </main>
      
    </>
  )
}

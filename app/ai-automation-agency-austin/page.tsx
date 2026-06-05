import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency in Austin | Pressense',
  description: 'AI automation services for Austin tech startups and companies. Custom AI solutions built fast.',
  openGraph: { title: 'AI Automation Agency in Austin | Pressense', url: '/ai-automation-agency-austin', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-austin' },
}

export default function AIAustinPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Austin', areaServed: 'Austin, TX', address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' } }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does an AI automation project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects run one to two weeks from diagnostic to delivery. We\'ve done bigger builds in three to four weeks. The timeline depends on how complex your integrations are, not on how many manual steps you have.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with non-tech companies in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yeah. We\'ve worked with manufacturing shops, real estate companies, professional services firms, e-commerce operations. The tools change but the principle stays the same: find the work that should be automated and build a system to do it.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if we don\'t have the right tools in place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We help you figure out what you actually need. Sometimes it\'s integrating systems you already have. Sometimes it means adding a tool or two. We never push vendors or over-engineer the solution.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do we need to be in Austin to work with you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We work remote-first with companies across the US and UK. Being in Austin means you get the same engagement model as our clients in New York, San Francisco, and London.'
        }
      }
    ]
  }

  return (
    <>
      <StructuredData data={schema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency Austin","description":"AI automation consulting for Austin tech companies and founder-led businesses.","url":"https://www.pressense.co/ai-automation-agency-austin","areaServed":{"@type":"City","name":"Austin"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-pretty">
            AI Automation for Austin's Growing Businesses
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Austin moves fast. The tech corridor on Sixth Street keeps expanding. Round Rock and the suburbs are filling up with manufacturing and logistics companies. Everyone's scaling. But scaling always hits the same problem: more business means more manual work, not less. More data entry. More emails. More status update meetings. More coordination friction between teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with Austin companies to find those manual workflows and build AI systems that eliminate them. We don't sell features. We sell time back to your team.
          </p>
        </section>

        {/* Who we work with */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Who we work with in Austin
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We've worked with SaaS companies in the Domain who need CRM automation but don't want to hire a whole operations team. Professional services firms downtown dealing with proposal automation and client onboarding. E-commerce shops in East Austin that need inventory and order management connected. Manufacturing companies in Round Rock struggling with production scheduling and supply chain coordination.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            What they all have in common: they're founder-led, they're scaling fast, and they've hit the point where manual processes are actually slowing them down. If your team spends more than ten hours a week on work that could be automated, we can help.
          </p>
        </section>

        {/* What slows them down */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            What we actually see in Austin companies
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Sales teams manually logging data into your CRM after every call
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your sales leader wants visibility. Your reps hate updating the CRM. You end up with bad data and no real pipeline visibility. We build systems that pull call recordings, transcribe them, extract the important stuff, and log it automatically.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Operations managers running reports manually every week
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Someone spends Tuesday morning pulling data from five different systems, cleaning it, formatting it, and getting it into a spreadsheet for the leadership meeting. That person could be doing actual operations work. We automate the whole report generation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Customer onboarding that requires manual emails and check-ins
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You close a deal on Friday. Monday morning someone has to manually send onboarding emails, schedule kickoff calls, create project folders, add people to Slack. Then chase them down if they miss a step. Build it once, run it forever.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Founders stuck in coordination work instead of doing their actual job
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You hired people so you could focus on strategy and growth. Instead you're spending ten hours a week connecting people, managing approvals, tracking status, answering the same questions. None of that needs a human. Automate it.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Finance teams copying data between spreadsheets and accounting systems
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Someone pulls monthly numbers from Stripe and Shopify, manually inputs them into QuickBooks, creates a P&L sheet for leadership. They do this every month. Twice a month if something went wrong. Integrate it once and it runs automatically forever.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How we work
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Step 1: Diagnose what's actually broken
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We spend time understanding your workflows. Not the workflows you think are slow. The actual ones. We talk to the people doing the work, see where the friction is, understand what gets in the way. We don't assume we know the problem.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Step 2: Design the automation architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We map out exactly how the automation works, what systems talk to each other, where decisions get made, what happens when something goes wrong. You see the whole design before we build anything.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Step 3: Build and implement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build the system, test it with your data, train your team on how it works, and hand it over. Most projects take one to two weeks from start to finish. You get a working system, not a recommendation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                Step 4: Measure and iterate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We track what actually happens after the automation goes live. Did it save the time we expected? Did anything break? What needs to be adjusted? We iterate based on real results.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Questions we get asked
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                How long does an AI automation project take?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most projects run one to two weeks from diagnostic to delivery. We've done bigger builds in three to four weeks. The timeline depends on how complex your integrations are, not on how many manual steps you have.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Do you work with non-tech companies in Austin?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yeah. We've worked with manufacturing shops, real estate companies, professional services firms, e-commerce operations. The tools change but the principle stays the same: find the work that should be automated and build a system to do it.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                What if we don't have the right tools in place?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We help you figure out what you actually need. Sometimes it's integrating systems you already have. Sometimes it means adding a tool or two. We never push vendors or over-engineer the solution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Do we need to be in Austin to work with you?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No. We work remote-first with companies across the US and UK. Being in Austin means you get the same engagement model as our clients in New York, San Francisco, and London.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 border-t border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Let's talk about your workflow
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a diagnostic. We'll spend time understanding what's actually slowing you down, show you exactly where automation creates value, and tell you what it costs to fix it.
          </p>
          <a
            href="/diagnostic"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Diagnostic
          </a>
        </section>
      </main>
    </>
  )
}

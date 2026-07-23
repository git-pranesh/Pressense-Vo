import { Metadata } from 'next'
import Link from 'next/link'
import { VisualCard } from '@/components/visual-card'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom CRM | Pressense',
  description: 'A CRM your team actually opens. Built around how you sell and deliver, not around a generic template.',
  openGraph: {
    title: 'Custom CRM | Pressense',
    description: 'A CRM your team actually opens. Built around how you sell and deliver, not around a generic template.',
    url: '/custom-crm',
    type: 'website',
  },
}

export default function CustomCrmPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow-pill">Custom CRM</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
                A CRM your team actually opens
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Most CRMs get bought, half-configured, then quietly abandoned while everyone goes back to spreadsheets and memory. Usually because the tool asked the team to sell the CRM&apos;s way instead of their way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We build one shaped around how your team actually sells and delivers. Included after your diagnostic.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
              >
                Start a Free Diagnostic
              </Link>
            </div>
            <VisualCard
              aspectRatio="4 / 3"
              style={{ minHeight: '380px' }}
              imageUrl="/images/botanical-hero.png"
              imageAlt="Orange coral flower against a deep teal background"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Problem</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this usually looks like</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              A sales team pays for a CRM with dozens of fields nobody fills in, because half of them don&apos;t apply to how the business actually sells. Deals slip through because the pipeline stages don&apos;t match the real sales process. Handoff to delivery happens over email, so the CRM never reflects what&apos;s actually happening with a client after the sale closes.
            </p>
            <p>
              Eventually the team stops logging things properly, because the tool takes more effort than it saves. Leadership loses visibility into the pipeline right when they need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Solution</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">We build the CRM around your actual process</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              After the diagnostic, we know exactly how your team sells, what your pipeline stages really look like, and where deals tend to get stuck or lost.
            </p>
            <p>
              We build the CRM around that, not around a generic sales template. The fields match what your team actually tracks. The stages match your real process. It connects to email, calendar, and whatever else your team already relies on, so nothing needs typing twice.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Who It&apos;s For</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Good fit</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#D4CFC7] bg-[#E8E5DE] p-8">
              <span className="eyebrow-pill">Good fit</span>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed">
                <li>Teams that tried an off-the-shelf CRM and stopped using it properly within months.</li>
                <li>Businesses with a sales process specific enough that generic templates don&apos;t fit.</li>
                <li>Companies that need sales, delivery, and finance to see the same information without three separate spreadsheets.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#1A0F06] p-8">
              <span className="eyebrow-pill" style={{ borderColor: 'rgba(252,246,239,0.25)', color: 'rgba(252,246,239,0.6)' }}>Not a good fit</span>
              <ul className="space-y-3 text-base text-[#EDEBE5]/80 leading-relaxed">
                <li>Teams with a simple, low-volume sales process where a basic off-the-shelf tool genuinely does the job.</li>
                <li>Businesses not ready to define what their actual sales process should be.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Methodology</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">How we get there</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              The diagnostic maps your real sales and delivery process, including the parts that don&apos;t happen the way anyone assumes. We use that to design the data model and pipeline stages before writing any code.
            </p>
            <p>
              We build in stages, so your team can start using early parts of the CRM while later pieces are still in progress. Once it&apos;s live, we handle training and stay involved to fix anything that doesn&apos;t quite fit once real use starts.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">What You Get</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What&apos;s included</h2>
          <ul className="space-y-3">
            {[
              'A mapped sales and delivery process from the diagnostic.',
              'A CRM built around your actual pipeline, not a generic template.',
              'Integrations with email, calendar, and the tools you already use.',
              'Team training and a proper handover once it\'s live.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Common questions</h2>
          <dl className="space-y-8">
            {[
              {
                q: 'Why not just use Salesforce or HubSpot?',
                a: "Those tools work well for a lot of businesses. They fall short when your sales process is specific enough that you're constantly working around the platform instead of with it. That's usually when a custom build makes more sense.",
              },
              {
                q: 'Will our team need to be retrained on a completely new system?',
                a: "Some training, yes, but it's built around how your team already works. The learning curve is smaller than switching to another off-the-shelf platform, because the CRM matches their existing process instead of replacing it.",
              },
              {
                q: 'Can it integrate with tools we already use?',
                a: 'Yes. Email, calendar, and most systems your team relies on day to day. We confirm exactly what during the diagnostic.',
              },
              {
                q: 'What happens if our sales process changes after launch?',
                a: "The CRM is built to be adjusted, not locked in. We can update fields, stages, and workflows as your process evolves.",
              },
              {
                q: 'How is pricing determined?',
                a: "It depends on how much of the CRM needs building versus connecting to existing tools. You get a specific number after the diagnostic, not a guess upfront.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="text-base font-semibold text-foreground mb-2">{q}</dt>
                <dd className="text-base text-muted-foreground leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="See what a CRM built for your process looks like"
            body="Start with the diagnostic. We'll map your actual sales process before recommending anything."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}

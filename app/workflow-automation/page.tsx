import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Workflow Automation | Pressense',
  description: 'We find where the repetitive work actually is, then automate it. Starting with a free diagnostic.',
  openGraph: {
    title: 'Workflow Automation | Pressense',
    description: 'We find where the repetitive work actually is, then automate it. Starting with a free diagnostic.',
    url: '/workflow-automation',
    type: 'website',
  },
}

export default function WorkflowAutomationPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Workflow Automation</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
            Stop doing by hand what a system should handle
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Approvals that sit in someone&apos;s inbox for days. Reports built by copying numbers between spreadsheets. Status updates chased down over Slack because nothing talks to anything else.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We find where the repetitive work actually is, then automate it. Included after your diagnostic.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
          >
            Start a Free Diagnostic
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Problem</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this usually looks like</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              A form gets filled out, then someone retypes the same information into three other systems. An approval waits on one person&apos;s calendar, holding up everyone downstream. A weekly report takes half a day because the numbers live in four different tools that don&apos;t talk to each other.
            </p>
            <p>
              None of this is anyone&apos;s fault. It&apos;s just what happens when a business grows faster than its processes do. The workarounds that got you here stop scaling once there&apos;s more volume and more people involved.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Solution</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">We automate the parts that shouldn&apos;t need a person</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              After the diagnostic, we know exactly which steps are repetitive, which ones cause the biggest delays, and which ones are actually fine to leave alone.
            </p>
            <p>
              We connect the tools you already use, so information stops getting typed in twice. We build the approval flows, notifications, and handoffs that used to depend on someone remembering to follow up. What&apos;s left for your team is the work that actually needs a person.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Who It&apos;s For</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Is this the right fit?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#D4CFC7] bg-[#E8E5DE] p-8">
              <span className="eyebrow-pill">Good fit</span>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>Businesses where the same task gets done manually, over and over, by more than one person.</li>
                <li>Teams that have grown past what spreadsheets and Slack messages can reliably handle.</li>
                <li>Companies already using several tools that don&apos;t currently share information with each other.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#1A0F06] p-8">
              <span className="eyebrow-pill" style={{ borderColor: 'rgba(252,246,239,0.25)', color: 'rgba(252,246,239,0.6)' }}>Not a good fit</span>
              <ul className="space-y-3 text-sm text-[#EDEBE5]/80 leading-relaxed">
                <li>Businesses still figuring out what their process should even be.</li>
                <li>Companies looking to automate a process that&apos;s fundamentally broken instead of fixing it first.</li>
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
              The diagnostic maps every repetitive task and where it slows things down. We rank these by how much time and risk each one is actually costing you.
            </p>
            <p>
              We build the automation in stages, starting with whatever&apos;s causing the most damage. You see each piece working before we move to the next. Once it&apos;s live, we watch it for a few weeks to catch anything that needs adjusting.
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
              'A process audit that maps where work is duplicated or delayed.',
              'A prioritized list of what to automate first.',
              'The automation itself, built and connected to your existing tools.',
              'Thirty days of support after launch to fix anything that comes up.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-primary/40 flex items-center justify-center text-primary text-xs">&#10003;</span>
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
                q: 'What tools do you build automations in?',
                a: "Depends on what you're already using. Sometimes it's n8n, Make, or Zapier. Sometimes it's something custom-built. We pick based on what fits your stack, not what we prefer.",
              },
              {
                q: 'Will this replace tools we already pay for?',
                a: "Sometimes. Other times it just connects the tools you have so they finally share information properly. We'll tell you which makes sense once we've seen your setup.",
              },
              {
                q: 'How do you decide what to automate first?',
                a: "Whatever's costing you the most time or causing the most errors. The diagnostic tells us that directly, so we're not guessing.",
              },
              {
                q: 'What happens if something breaks after launch?',
                a: "You get thirty days of support built in. After that, we can set up an ongoing arrangement if you want one.",
              },
              {
                q: 'Can this work alongside a custom internal tool build?',
                a: "Yes. A lot of clients do both. The automation often becomes part of a larger tool once we're building something custom anyway.",
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
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-4">
            Find out what&apos;s eating your team&apos;s time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Start with the diagnostic. We&apos;ll show you exactly where the manual work is before recommending anything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
          >
            Start a Free Diagnostic
          </Link>
        </div>
      </section>

    </main>
  )
}

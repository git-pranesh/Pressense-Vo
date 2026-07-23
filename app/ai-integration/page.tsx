import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Integration | Pressense',
  description: 'We find where AI actually saves time in your operation, then build it into the tools you already use.',
  openGraph: {
    title: 'AI Integration | Pressense',
    description: 'We find where AI actually saves time in your operation, then build it into the tools you already use.',
    url: '/ai-integration',
    type: 'website',
  },
}

export default function AiIntegrationPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Service</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
            AI that removes work, not a demo that looks impressive
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
            A chatbot bolted onto your website that nobody uses isn&apos;t the goal. Cutting the hours your team spends on repetitive, judgment-light tasks is.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            We find where AI actually saves time in your operation, then build it into the tools you already use. Included after your diagnostic.
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">The Problem</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this usually looks like</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            A business hears &ldquo;add AI&rdquo; and ends up with a chatbot widget that answers three questions and gets ignored by everyone. Or a team member spends hours a week summarizing documents, drafting the same type of email, or sorting through leads by hand, work a model could do in seconds if it were actually wired into the process.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The gap isn&apos;t a lack of interest in AI. It&apos;s that most AI gets bolted onto a business instead of built into how the business actually runs.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">The Solution</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">We build AI into work you&apos;re already doing</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            After the diagnostic, we know which tasks are repetitive enough, and low-risk enough, for AI to genuinely help with. That&apos;s what we build around.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Sometimes it&apos;s summarizing incoming leads before they hit a salesperson&apos;s inbox. Sometimes it&apos;s drafting first-pass responses to common client questions. Sometimes it&apos;s pulling structured data out of documents your team currently reads by hand. We connect this directly to your existing tools, so it fits into a workflow your team already has, instead of adding a new one.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Who It&apos;s For</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Is this right for you?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#E8E0D5] bg-[#FFFDFA] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Good fit</p>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>Teams doing repetitive tasks like summarizing, sorting, or drafting by hand, at real volume.</li>
                <li>Businesses with existing tools and data clean enough for AI to work with reliably.</li>
                <li>{'Companies that want AI to save time on something specific, not "AI" as a general idea.'}</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#2B180A] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FCF6EF]/50 mb-4">Not a good fit</p>
              <ul className="space-y-3 text-sm text-[#FCF6EF]/80 leading-relaxed">
                <li>{'Businesses hoping AI will fix a process that\'s fundamentally broken, rather than automate a working one.'}</li>
                <li>Teams without any existing data or workflow for AI to plug into.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Methodology</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">How we get there</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The diagnostic identifies which parts of your workflow are repetitive enough to hand off, and which ones still genuinely need a person&apos;s judgment. We&apos;re honest when a task isn&apos;t a good fit for AI, even if it sounds appealing on paper.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We build and test on real examples from your business, not generic samples. Once it&apos;s live, we monitor how it performs and adjust before rolling it out further.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">What You Get</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What&apos;s included</h2>
          <ul className="space-y-3">
            {[
              'An audit of where AI can save real time in your workflow.',
              'A working integration built into your existing tools, tested on your actual data.',
              'Documentation your team can actually follow.',
              'Support after launch to fix and adjust as needed.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.4" />
                  <path d="M5.5 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">FAQ</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Common questions</h2>
          <dl className="space-y-8">
            {[
              {
                q: 'What AI models do you use?',
                a: "Whatever fits the task best. Sometimes that's GPT, sometimes Claude, sometimes something smaller and cheaper for a simple job. We don't default to whatever's trendiest.",
              },
              {
                q: 'Is our data safe if we use AI on it?',
                a: "We build with data handling in mind from the start, and we'll walk you through exactly how your data is used before anything goes live.",
              },
              {
                q: 'Will this replace our team?',
                a: "No. It's built to remove repetitive work, not the people doing the job. Most clients redirect that saved time toward work that actually needs a person.",
              },
              {
                q: 'What if AI gets something wrong?',
                a: 'We build in review steps for anything with real consequences. AI drafts or flags, a person confirms before anything final happens, especially early on.',
              },
              {
                q: 'How do you decide if a task is a good fit for AI?',
                a: "Volume, repetitiveness, and how much judgment the task actually requires. The diagnostic tells us this directly, so we're not guessing or forcing AI where it doesn't belong.",
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
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Find out where AI could actually save you time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Start with the diagnostic. We&apos;ll tell you honestly what&apos;s worth automating and what isn&apos;t.
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

import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'
import { FlowerPanel } from '@/components/flower-panel'

export const metadata: Metadata = {
  title: 'Custom Software & Internal Tools | Pressense',
  description:
    'Software built around your business, not the other way around. We diagnose what is slowing you down, then build the internal tool that fixes it.',
  alternates: { canonical: '/custom-software-internal-tools' },
  openGraph: {
    title: 'Custom Software & Internal Tools | Pressense',
    description: 'Software built around your business, not the other way around.',
    url: '/custom-software-internal-tools',
    type: 'website',
  },
}

export default function CustomSoftwarePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow-pill">Custom Software & Internal Tools</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-tight mb-6">
                Software built around your business, not the other way around
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
                Spreadsheets that break. CRMs your team fights instead of using. WhatsApp threads holding together work that should run itself.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                We diagnose what&apos;s actually slowing you down, then build the internal tool that fixes it. If you qualify, we&apos;ll build the first piece for free.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Start a Free Diagnostic
              </Link>
            </div>
            <FlowerPanel minHeight={380} />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Problem</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this usually looks like</h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              A founder is still approving things a system should handle on its own. The team tracks orders, leads, or inventory in a spreadsheet that only one person really understands. The CRM everyone paid for sits half-used because it forces the sales team to work in a way that doesn&apos;t match how they sell.
            </p>
            <p>
              Handoffs get lost between departments. Delivery doesn&apos;t know what sales promised. Finance finds out about a change three weeks late. Pulling a simple report takes half a day of copying numbers between tabs.
            </p>
            <p>
              None of this gets fixed by buying another piece of software off a shelf. It gets fixed by building something around how the work already happens.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Solution</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">We build the tool your business actually needs</h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              After the diagnostic, we know exactly where the break is. That&apos;s what we build around, not a generic feature list.
            </p>
            <p>
              Sometimes it&apos;s a dashboard that replaces five spreadsheets. Sometimes it&apos;s a lightweight internal CRM that matches your actual sales process. Sometimes it&apos;s a tool that connects the systems you already use, so information stops getting typed in twice.
            </p>
            <p>
              The goal is simple. Your team should open the tool and already know how to use it, because it was shaped around how they already do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Who It&apos;s For</span>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#D4CFC7] bg-[#E8E5DE] p-8">
              <span className="eyebrow-pill">Good fit</span>
              <ul className="space-y-3 text-base text-muted-foreground leading-relaxed">
                <li>Founder-led businesses between $1M and $50M in revenue.</li>
                <li>Teams where critical work still lives in spreadsheets or someone&apos;s memory.</li>
                <li>Companies that tried an off-the-shelf CRM or ERP and found it forced changes to how the team actually operates.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#1A0F06] p-8">
              <span className="eyebrow-pill" style={{ borderColor: 'rgba(252,246,239,0.25)', color: 'rgba(252,246,239,0.6)' }}>Not a good fit</span>
              <ul className="space-y-3 text-base text-[#EDEBE5]/80 leading-relaxed">
                <li>Pre-revenue startups still finding their product.</li>
                <li>Companies looking for the cheapest build available, regardless of fit.</li>
                <li>Teams unwilling to change a broken process even after seeing the diagnostic.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Methodology</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">How we get there</h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              We start with the diagnostic. A short, structured look at where work slows down, duplicates, or gets lost. You get a plain map of the problem, not a sales deck.
            </p>
            <p>
              From there, we scope exactly what to build. No guessing at features. Every part of the build ties back to something we found in the diagnostic.
            </p>
            <p>
              We build in stages, with your team seeing working software early, not after months of silence. Once it&apos;s live, we stay involved to fix issues fast and adjust as your business changes.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">What You Get</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What&apos;s included</h2>
          <ul className="space-y-4">
            {[
              'A structured diagnostic of your current operations.',
              'A working internal tool built around what we found, not a generic template.',
              'A free first build for qualifying businesses, so you see real work before spending anything.',
              'Direct access to the person building your tool, not a rotating support queue.',
              'Ongoing fixes and updates after launch.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <circle cx="10" cy="10" r="9.5" stroke="currentColor" strokeOpacity="0.4" />
                  <path d="M6.5 10l2 2 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">FAQ</span>
          <div className="space-y-8">
            {[
              {
                q: 'How is this different from buying an off-the-shelf CRM or ERP?',
                a: 'Off-the-shelf tools ask your team to change how they work to fit the software. We build the software to fit how your team already works.',
              },
              {
                q: "What's the free MVP offer?",
                a: "For businesses we think are a strong fit, we'll build a small first piece of your tool for free. You see real, working software before committing to the full project.",
              },
              {
                q: 'How long does a build take?',
                a: 'Depends on scope, but most projects move from diagnostic to a working first version within a few weeks, not months.',
              },
              {
                q: 'Do you replace our existing tools entirely, or work alongside them?',
                a: 'Either. Sometimes we replace a spreadsheet or a CRM outright. Sometimes we build something that connects your existing tools so they finally talk to each other.',
              },
              {
                q: 'What happens after the tool is built?',
                a: 'We stay involved. Fixes, adjustments, and support as your business changes, not a one-time delivery.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Find out what's actually slowing you down"
            body="Start with the diagnostic. No commitment past that first step."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}

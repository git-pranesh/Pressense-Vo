import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { DiagnosticForm } from '@/components/diagnostic/diagnostic-form'

export const metadata: Metadata = {
  title: 'Contact | Pressense',
  description:
    'Tell us what is actually going on. Not a sales call — a real look at what is slowing your business down, and whether we are the right people to fix it.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Pressense',
    description:
      'Tell us what is actually going on. Not a sales call — a real look at what is slowing your business down.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ backgroundImage: 'url(/images/secondary-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.48)' }} aria-hidden="true" />
            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Contact</span>
              <h1
                className="font-normal text-balance leading-tight mb-6"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Tell us what&apos;s actually going on
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Not a sales call. A real look at what&apos;s slowing your business down, and whether we&apos;re the right people to fix it.
              </p>
              <a
                href="#diagnostic-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
                style={{ background: '#EDEBE5', color: '#1A0F06' }}
              >
                Start the Diagnostic Form Below
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Who we work with</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founders and CEOs running businesses between $1M and $50M in revenue. Teams where critical work still lives in spreadsheets, WhatsApp threads, or one person&apos;s memory. Companies that bought software before, and found it didn&apos;t fit how they actually operate.
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">What we can actually help with</h2>
            <p className="text-muted-foreground leading-relaxed">
              Custom internal tools and software. Workflow automation. Custom CRMs. AI built into your existing tools. Go-to-market and fractional CMO support, for businesses whose operations are already solid enough to build growth on top of.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If what you&apos;re dealing with doesn&apos;t fit any of this, tell us anyway. We&apos;ll say directly if we&apos;re the wrong fit.
            </p>
          </div>
        </div>
      </section>

      {/* Who we're not right for */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Who we&apos;re probably not right for</h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
              Pre-revenue startups still finding their product.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
              Businesses looking for the cheapest option available, rather than the right one.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
              Anyone who wants a quote without a conversation first — we don&apos;t price anything before understanding what&apos;s actually needed.
            </li>
          </ul>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-8">What happens after you submit this</h2>
          <ol className="space-y-4">
            {[
              'We read what you send and respond within a couple of business days.',
              'If it looks like a fit, we schedule a call to go deeper.',
              'From there, we run the diagnostic and come back with what we found and what we\'d recommend.',
              'No pressure to continue past that.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-border/60 bg-background flex items-center justify-center text-xs font-semibold text-muted-foreground">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-2">Start here</h2>
          <p className="text-muted-foreground leading-relaxed">
            Fill in as much detail as you can. The more context we have, the more useful the first conversation is.
          </p>
        </div>
        <Suspense fallback={<div className="py-10 flex justify-center"><span className="text-muted-foreground text-sm">Loading form...</span></div>}>
          <DiagnosticForm />
        </Suspense>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">FAQ</h2>
          <dl className="space-y-8">
            {[
              {
                q: 'Is this actually free?',
                a: 'Yes. The diagnostic itself costs nothing, and there\'s no obligation to continue after it.',
              },
              {
                q: 'How long until I hear back?',
                a: 'Usually within a couple of business days.',
              },
              {
                q: 'What if I\'m not sure this is the right fit?',
                a: 'Fill out the form anyway. Part of what we do in the first conversation is figure that out together.',
              },
              {
                q: 'Do I need to know exactly what I want built?',
                a: 'No. Most people who reach out don\'t know yet. That\'s what the diagnostic is for.',
              },
              {
                q: 'What happens if the diagnostic finds I don\'t need this?',
                a: 'We tell you directly, and point you toward whatever we think would actually help instead.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-medium text-foreground mb-2">{q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Not ready to fill out the form? Browse the services first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/custom-software-internal-tools"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Custom Software & Internal Tools
            </Link>
            <Link
              href="/workflow-automation"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Workflow Automation
            </Link>
            <Link
              href="/custom-crm"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Custom CRM
            </Link>
            <Link
              href="/ai-integration"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              AI Integration
            </Link>
            <Link
              href="/fractional-cmo"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Fractional CMO
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

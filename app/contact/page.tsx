import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { DiagnosticForm } from '@/components/diagnostic/diagnostic-form'

export const metadata: Metadata = {
  title: 'Contact | Pressense',
  description:
    'Tell us what is actually going on. Not a sales call, a real look at what is slowing your business down, and whether we are the right people to fix it.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Pressense',
    description:
      'Tell us what is actually going on. Not a sales call, a real look at what is slowing your business down.',
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
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.52)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Contact</span>
              <h1
                className="font-normal text-balance leading-tight mb-6"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Tell us what&apos;s actually going on
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Not a sales call. A real look at what&apos;s slowing your business down, and whether we&apos;re the right people to fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout: context left, form right */}
      <section className="py-10 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

            {/* Left — editorial context */}
            <div className="lg:sticky lg:top-28 space-y-10">

              <div>
                <h2
                  className="font-normal leading-snug mb-4"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#1A0F06' }}
                >
                  Who we work with
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#6B5D51' }}>
                  Founders and operators running businesses between $1M and $50M in revenue. Teams where critical work still lives in spreadsheets, WhatsApp threads, or one person&apos;s memory. Companies that bought software before, and found it didn&apos;t fit how they actually operate.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 space-y-4"
                style={{ background: '#1A0F06' }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'rgba(237,235,229,0.45)' }}
                >
                  Probably not the right fit
                </p>
                <ul className="space-y-3">
                  {[
                    'Pre-revenue startups still finding their product.',
                    'Businesses looking for the cheapest option, not the right one.',
                    'Anyone who wants a quote without a conversation first.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'rgba(237,235,229,0.65)' }}>
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(237,235,229,0.3)' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2
                  className="font-normal leading-snug mb-5"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(20px, 2vw, 26px)', color: '#1A0F06' }}
                >
                  What happens after you submit
                </h2>
                <ol className="space-y-4">
                  {[
                    'We read what you send and respond within a couple of business days.',
                    'If it looks like a fit, we schedule a call to go deeper.',
                    'We run the diagnostic and come back with what we found.',
                    'No pressure to continue past that.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-medium"
                        style={{ borderColor: '#C8C2BA', color: '#6B5D51' }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed pt-0.5" style={{ color: '#6B5D51' }}>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Right — dark form panel */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#1A0F06' }}
            >
              <Suspense fallback={
                <div className="py-20 flex justify-center">
                  <span className="text-sm" style={{ color: 'rgba(237,235,229,0.4)' }}>Loading form...</span>
                </div>
              }>
                <DiagnosticForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 lg:py-20 border-t" style={{ borderColor: '#D4CFC7' }}>
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <h2
              className="font-normal leading-tight"
              style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', color: '#1A0F06' }}
            >
              Common questions
            </h2>
            <dl className="space-y-8">
              {[
                {
                  q: 'Is the diagnostic actually free?',
                  a: 'Yes. The diagnostic itself costs nothing, and there\'s no obligation to continue after it.',
                },
                {
                  q: 'How long until I hear back?',
                  a: 'Usually within a couple of business days.',
                },
                {
                  q: 'Do I need to know exactly what I want built?',
                  a: 'No. Most people who reach out don\'t know yet. That\'s what the diagnostic is for.',
                },
                {
                  q: 'What if the diagnostic finds I don\'t need this?',
                  a: 'We tell you directly, and point you toward whatever we think would actually help instead.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b pb-8 last:border-0 last:pb-0" style={{ borderColor: '#D4CFC7' }}>
                  <dt className="text-sm font-semibold mb-2" style={{ color: '#1A0F06' }}>{q}</dt>
                  <dd className="text-sm leading-relaxed" style={{ color: '#6B5D51' }}>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

    </main>
  )
}

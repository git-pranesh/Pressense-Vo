import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request Received | Pressense',
  description: 'Your diagnostic request has been received. We will be in touch within a couple of business days.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 sm:px-8">

      {/* Background image panel */}
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg-opt.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.58)' }} aria-hidden="true" />

        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">

          {/* Check mark */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: 'rgba(237,235,229,0.1)', border: '1px solid rgba(237,235,229,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10l4.5 4.5L16 6" stroke="#EDEBE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Eyebrow */}
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-5"
            style={{ color: 'rgba(237,235,229,0.4)' }}
          >
            Request received
          </p>

          {/* Headline */}
          <h1
            className="font-normal leading-snug text-balance mb-6"
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: 'clamp(28px, 5vw, 52px)',
              color: '#EDEBE5',
            }}
          >
            We&apos;ve got your submission.
          </h1>

          {/* Body */}
          <p
            className="text-base leading-relaxed max-w-md mx-auto mb-10"
            style={{ color: 'rgba(237,235,229,0.65)' }}
          >
            We&apos;ll read through what you sent and respond within a couple of business days.
            If it looks like a clear fit, we&apos;ll reach out to schedule a conversation.
          </p>

          {/* Divider */}
          <div className="w-12 mx-auto mb-10" style={{ borderTop: '1px solid rgba(237,235,229,0.15)' }} aria-hidden="true" />

          {/* What happens next */}
          <ol className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center text-left mb-12">
            {[
              { n: '01', text: 'We review your submission.' },
              { n: '02', text: 'We reach out if it looks like a fit.' },
              { n: '03', text: 'We run the diagnostic together.' },
            ].map(({ n, text }) => (
              <li key={n} className="flex items-start gap-3">
                <span
                  className="text-xs font-semibold shrink-0 mt-0.5"
                  style={{ color: 'rgba(237,235,229,0.35)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {n}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(237,235,229,0.65)' }}>{text}</span>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline transition-opacity hover:opacity-70"
            style={{ color: 'rgba(237,235,229,0.55)' }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M12 7H2M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>

        </div>
      </div>

    </main>
  )
}

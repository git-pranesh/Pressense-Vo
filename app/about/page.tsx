import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

const GARAMOND = '"EB Garamond", Georgia, serif'

export const metadata: Metadata = {
  title: 'About | Pressense',
  description:
    'Pressense was built on twenty years of running an actual business, not studying one from the outside. We build the fix ourselves.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Pressense',
    description: "We build the fix. We don't describe it from a whiteboard.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Pressense',
    description: "We build the fix. We don't describe it from a whiteboard.",
  },
}

const recentWork = [
  'A full CRM and quote management system for an interior design firm.',
  'A complete go-to-market and content engine for a SaaS company, growing subscriber counts year over year.',
  'Embedded growth work inside Zoho, covering content, positioning, and search visibility, built to hold up in both traditional search and AI-generated answers.',
  'A fractional CMO engagement that took a design business from one city to five, with search becoming a real revenue channel along the way.',
]

export default function AboutPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/images/pages-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>About</span>
              <h1 className="font-normal leading-tight text-balance mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}>
                We build the fix. We don&apos;t describe it from a whiteboard.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Pressense was built on twenty years of running an actual business, not studying one from the outside. That&apos;s where the approach comes from.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#d4d1cc] transition-colors" style={{ background: '#EDEBE5', color: '#1A0F06' }}>
                  Book a free call
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors" style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}>
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin ───────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left, copy */}
            <div>
              <span className="eyebrow-pill">Why we work this way</span>
              <h2 className="font-normal text-foreground mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 44px)' }}>
                We know what a broken system feels like from the inside.
              </h2>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our founder lived inside broken systems for twenty years before fixing them. That&apos;s different from a consultant who&apos;s only ever studied a business from the outside.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Today we help founders build the operational and growth infrastructure they need to scale. Internal tools. CRMs. GTM systems. Content engines. The playbooks that let a team run without the founder holding everything together by hand.
                </p>
              </div>
            </div>

            {/* Right, founder photo with noisy gradient treatment */}
            <div className="relative">
              {/* Outer container with site-matching rounded corners */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>

                {/* The photo */}
                <Image
                  src="/images/pranesh-padmanabhan.jpg"
                  alt="Pranesh Padmanabhan, founder of Pressense"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />

                {/* Warm amber colour tint, matches hero bg palette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(180,120,40,0.22) 0%, rgba(210,160,60,0.12) 50%, rgba(90,60,30,0.28) 100%)',
                    mixBlendMode: 'multiply',
                  }}
                  aria-hidden="true"
                />

                {/* Noise grain layer, SVG feTurbulence approach via background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px',
                    mixBlendMode: 'overlay',
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                />

                {/* Bottom gradient fade into page bg */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(237,235,229,0.85) 0%, transparent 100%)' }}
                  aria-hidden="true"
                />

                {/* Name label at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                  <p className="text-sm font-semibold" style={{ color: '#1A0F06', fontFamily: '"Geist", sans-serif' }}>Pranesh Padmanabhan</p>
                  <p className="text-xs" style={{ color: '#6B5D51' }}>Founder, Pressense</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pattern ──────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20" style={{ background: '#E8E5DF' }}>
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="max-w-3xl">
            <span className="eyebrow-pill">The pattern we keep seeing</span>
            <h2 className="font-normal text-foreground mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 44px)' }}>
              The business grew faster than the systems did.
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                Almost every founder we work with is dealing with some version of the same problem. Sales lives in WhatsApp. Client information sits in three different spreadsheets. Nobody can tell you what the pipeline actually looks like right now. Growth is stalled, or it&apos;s chaotic, sometimes both.
              </p>
              <p className="text-base font-medium text-foreground leading-relaxed">
                We come in and build the fix ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent work ──────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
            <div>
              <span className="eyebrow-pill">Recent work</span>
              <h2 className="font-normal text-foreground" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 44px)' }}>
                What this has looked like
              </h2>
            </div>
            <ul className="space-y-5 pt-2">
              {recentWork.map((item) => (
                <li key={item} className="flex items-start gap-4 text-base text-muted-foreground leading-relaxed pb-5 border-b border-border/40 last:border-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#6B5D51] shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What we believe ──────────────────────────────────────── */}
      <section className="py-12 lg:py-20" style={{ background: '#E8E5DF' }}>
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="max-w-3xl">
            <span className="eyebrow-pill">What we actually believe</span>
            <h2 className="font-normal text-foreground mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 44px)' }}>
              Technology should reduce chaos, not add to it.
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                Used well, it gives a team more time, better decisions, and fewer things falling through the cracks. We care about punctuality, structure, and communicating early, before something turns into a problem.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We stay hands-on with building, not just advising, because that&apos;s what keeps the work honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ──────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <span className="eyebrow-pill">Who&apos;s behind Pressense</span>
          <div className="max-w-3xl mt-2">
            <h2 className="font-normal text-foreground mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 44px)' }}>
              Pranesh Padmanabhan
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                Pranesh founded Pressense after running and bootstrapping a company for almost two decades before exiting it. That experience shapes how the team approaches every engagement: fix what&apos;s actually broken, build the thing, don&apos;t just hand over a recommendation and walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-12 lg:py-16 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Let's talk about what's actually broken"
            body="If you're a founder trying to fix your operations, build better internal tools, or get your go-to-market motion working, we're happy to have that conversation."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}

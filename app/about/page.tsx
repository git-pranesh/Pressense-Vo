import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

const GARAMOND = '"EB Garamond", Georgia, serif'

export const metadata: Metadata = {
  title: 'About | Pressense',
  description:
    'I ran and bootstrapped my own company for almost two decades before I exited it. Today I help founders build the operational and growth infrastructure they need to scale.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Pressense',
    description: "I build the fix. I don't describe it from a whiteboard.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Pressense',
    description: "I build the fix. I don't describe it from a whiteboard.",
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
            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>About</span>
              <h1 className="font-normal leading-tight text-balance mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}>
                I build the fix. I don&apos;t describe it from a whiteboard.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(237,235,229,0.72)' }}>
                I ran and bootstrapped my own company for almost two decades before I exited it. That&apos;s where this approach comes from.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors" style={{ background: '#EDEBE5', color: '#1A0F06' }}>
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
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Why I work this way</span>
          <h2
            className="font-normal text-foreground mb-8"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Origin
          </h2>
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              I know what it feels like when the systems inside a business are broken, because I lived inside a broken one for twenty years before I fixed it. That&apos;s different from studying a business from the outside.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Today I help founders build the operational and growth infrastructure they need to scale. Internal tools. CRMs. GTM systems. Content engines. The playbooks that let a team run without the founder holding everything together by hand.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pattern ──────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The pattern I keep seeing</span>
          <h2
            className="font-normal text-foreground mb-8"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            The business grew faster than the systems did
          </h2>
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Almost every founder I work with is dealing with some version of the same problem. Sales lives in WhatsApp. Client information sits in three different spreadsheets. Nobody can tell you what the pipeline actually looks like right now. Growth is stalled, or it&apos;s chaotic, sometimes both.
            </p>
            <p className="text-base text-foreground font-medium leading-relaxed">
              I come in and build the fix myself.
            </p>
          </div>
        </div>
      </section>

      {/* ── Recent work ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Recent work</span>
          <h2
            className="font-normal text-foreground mb-10"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            What this has looked like
          </h2>
          <ul className="space-y-5">
            {recentWork.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What I believe ───────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">What I actually believe</span>
          <h2
            className="font-normal text-foreground mb-8"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            How I think about this work
          </h2>
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Technology should reduce chaos. Used well, it gives a team more time, better decisions, and fewer things falling through the cracks. I care about punctuality, structure, and communicating early, before something turns into a problem.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I build SaaS products on the side and write about the systems behind growth. Staying hands-on with building keeps the advice honest.
            </p>
          </div>
        </div>
      </section>

      {/* ── Outside client work ──────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Outside client work</span>
          <h2
            className="font-normal text-foreground mb-8"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            My best business partner is in Grade 1
          </h2>
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Outside client work, I&apos;m the producer, director, scriptwriter, social media manager, and GTM strategist for my six-year-old, Mithran. He builds LEGO sets meant for adults, finished a 4,621-piece Gotham City set in three weeks, and is working toward a world record. The brand is called Junior Master Builder. I built the site, run the content strategy, manage the channel, write the scripts.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              He&apos;s taught me more about consistency, patience, and showing up than most business books I&apos;ve read.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Let's talk about what's actually broken"
            body="If you're a founder trying to fix your operations, build better internal tools, or get your go-to-market motion working, I'm happy to have that conversation."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}

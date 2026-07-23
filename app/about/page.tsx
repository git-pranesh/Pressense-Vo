import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Pressense',
  description:
    'I ran and bootstrapped my own company for almost two decades before I exited it. Today I help founders build the operational and growth infrastructure they need to scale.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Pressense',
    description:
      'I build the fix. I don\'t describe it from a whiteboard.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Pressense',
    description:
      'I build the fix. I don\'t describe it from a whiteboard.',
  },
}

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            I build the fix. I don&apos;t describe it from a whiteboard.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I ran and bootstrapped my own company for almost two decades before I exited it. That&apos;s where this approach comes from.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Why I work this way</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Origin</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            I know what it feels like when the systems inside a business are broken, because I lived inside a broken one for twenty years before I fixed it. That&apos;s different from studying a business from the outside.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Today I help founders build the operational and growth infrastructure they need to scale. Internal tools. CRMs. GTM systems. Content engines. The playbooks that let a team run without the founder holding everything together by hand.
          </p>
        </div>
      </section>

      {/* Pattern */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">The pattern I keep seeing</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
            The business grew faster than the systems did
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Almost every founder I work with is dealing with some version of the same problem. Sales lives in WhatsApp. Client information sits in three different spreadsheets. Nobody can tell you what the pipeline actually looks like right now. Growth is stalled, or it&apos;s chaotic, sometimes both.
          </p>
          <p className="mt-4 text-base text-foreground font-medium leading-relaxed">
            I come in and build the fix myself.
          </p>
        </div>
      </section>

      {/* Recent work */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Recent work</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this has looked like</h2>
          <ul className="space-y-5">
            {[
              'A full CRM and quote management system for an interior design firm.',
              'A complete go-to-market and content engine for a SaaS company, growing subscriber counts year over year.',
              'Embedded growth work inside Zoho, covering content, positioning, and search visibility, built to hold up in both traditional search and AI-generated answers.',
              'A fractional CMO engagement that took a design business from one city to five, with search becoming a real revenue channel along the way.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What I believe */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">What I actually believe</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">How I think about this work</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Technology should reduce chaos. Used well, it gives a team more time, better decisions, and fewer things falling through the cracks. I care about punctuality, structure, and communicating early, before something turns into a problem.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            I build SaaS products on the side and write about the systems behind growth. Staying hands-on with building keeps the advice honest.
          </p>
        </div>
      </section>

      {/* Outside client work */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Outside client work</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">My best business partner is in Grade 1</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Outside client work, I&apos;m the producer, director, scriptwriter, social media manager, and GTM strategist for my six-year-old, Mithran. He builds LEGO sets meant for adults, finished a 4,621-piece Gotham City set in three weeks, and is working toward a world record. The brand is called Junior Master Builder. I built the site, run the content strategy, manage the channel, write the scripts.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            He&apos;s taught me more about consistency, patience, and showing up than most business books I&apos;ve read.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Let&apos;s talk about what&apos;s actually broken
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            If you&apos;re a founder trying to fix your operations, build better internal tools, or get your go-to-market motion working, I&apos;m happy to have that conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start a Free Diagnostic
          </Link>
        </div>
      </section>

    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'About Pressense | Pranesh — Founder & Builder',
  description:
    'Pressense is built by Pranesh — a founder-practitioner who builds AI automation systems, GTM strategy, and custom software for serious businesses. Learn the story behind the diagnostic-first approach.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Pressense | Pranesh — Founder & Builder',
    description:
      'Pressense is built by Pranesh — a founder-practitioner who builds AI automation systems, GTM strategy, and custom software for serious businesses.',
    url: '/about',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pressense | Pranesh — Founder & Builder',
    description:
      'Pressense is built by Pranesh — a founder-practitioner who builds AI automation systems, GTM strategy, and custom software for serious businesses.',
    images: ['/og-image.jpg'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranesh',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Pressense',
    url: 'https://www.pressense.co',
  },
  url: 'https://www.pressense.co/about',
  sameAs: ['https://www.linkedin.com/company/pressense'],
  knowsAbout: [
    'AI Automation',
    'GTM Strategy',
    'Revenue Operations',
    'Custom Software Development',
    'Business Systems',
    'Founder-led Growth',
  ],
}

const principles = [
  {
    number: '01',
    heading: 'Diagnose before building',
    body: 'Most agencies start building immediately. We start by finding out what is actually broken. The problem a founder presents is rarely the real constraint. One conversation usually reveals it.',
  },
  {
    number: '02',
    heading: 'Ship working systems, not slide decks',
    body: 'Strategy without execution is just theory. Every engagement at Pressense ends with something working — a live tool, a deployed automation, a published site, a running workflow. Not a document.',
  },
  {
    number: '03',
    heading: 'Use real tools at production standard',
    body: 'We build with Next.js, TypeScript, Neon, Vercel, and Replit — not fragile no-code stacks. That means the systems we build survive growth, handoff, and team changes.',
  },
  {
    number: '04',
    heading: 'Be specific about what something costs and what it returns',
    body: 'Every service on this site has a starting price. Every outcome statement is something we can actually point to. Vague pricing and vague outcomes are a red flag in any agency relationship.',
  },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData data={personSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.pressense.co/about' },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-border/40">
          <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight mb-8">
              Pressense is built by one founder, for founders who are done guessing.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              My name is Pranesh. I started Pressense because the standard agency model is broken for serious businesses. Most agencies optimise for retainers and outputs. We optimise for the outcome.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 border-b border-border/40">
          <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Pressense started from a simple frustration: growing businesses keep hiring consultants who produce strategies but leave the execution to someone else, or agencies that build things without ever asking whether the thing being built is the right thing.
                </p>
                <p>
                  I have worked on both sides. I have been the person in the boardroom with the slide deck and the person at the keyboard shipping the code. That combination — strategy paired with the ability to actually build — is what Pressense is.
                </p>
                <p>
                  The diagnostic-first model came from watching too many businesses spend money on the wrong solution. A founder comes in thinking they need a new website. The real issue is that their sales process has no follow-up system. A business thinks they need more leads. The real issue is that their existing leads are not converting because the onboarding experience is broken. The diagnostic surfaces this before any money is spent on execution.
                </p>
                <p>
                  Today Pressense works with founder-led businesses across AI automation, GTM strategy, revenue operations, custom software, and technical integrations. Every project starts with a conversation about what is actually blocking growth.
                </p>
              </div>
              <div className="space-y-4">
                <div className="glass-card rounded-xl p-6 border border-border/40">
                  <p className="text-3xl font-semibold text-foreground mb-1">18+</p>
                  <p className="text-sm text-muted-foreground">Service capabilities across strategy, development, and AI</p>
                </div>
                <div className="glass-card rounded-xl p-6 border border-border/40">
                  <p className="text-3xl font-semibold text-foreground mb-1">1</p>
                  <p className="text-sm text-muted-foreground">Founder. You talk to the person doing the work.</p>
                </div>
                <div className="glass-card rounded-xl p-6 border border-border/40">
                  <p className="text-3xl font-semibold text-foreground mb-1">From $500</p>
                  <p className="text-sm text-muted-foreground">Entry point for a Founder Advisory Session</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 lg:py-24 border-b border-border/40">
          <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-12">
              How we work — four non-negotiables
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div key={p.number} className="glass-card rounded-xl p-7 border border-border/40">
                  <p className="text-xs font-mono text-muted-foreground mb-4">{p.number}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{p.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="py-16 lg:py-24 border-b border-border/40">
          <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
              What we build on
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              We use production-grade tools, not fragile no-code workarounds. This matters because the systems we build need to survive growth, handoff to a team, and change over time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { name: 'Next.js', role: 'Web framework' },
                { name: 'TypeScript', role: 'Type-safe code' },
                { name: 'Vercel', role: 'Deployment & edge' },
                { name: 'Replit', role: 'Cloud development' },
                { name: 'Neon', role: 'Managed PostgreSQL' },
                { name: 'Supabase', role: 'Auth & database' },
                { name: 'Claude API', role: 'AI reasoning' },
                { name: 'OpenAI API', role: 'AI generation' },
                { name: 'n8n / Make', role: 'Workflow automation' },
                { name: 'Framer', role: 'Web design' },
                { name: 'HubSpot', role: 'CRM & marketing ops' },
                { name: 'Sanity', role: 'Structured content' },
              ].map((tool) => (
                <div key={tool.name} className="rounded-xl border border-border/40 bg-card/40 px-4 py-3">
                  <p className="text-sm font-medium text-foreground">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tool.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
            <div className="glass-card rounded-2xl p-10 lg:p-14 border border-border/40 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4 text-balance">
                The best way to see if this is the right fit is to start a diagnostic.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
                It takes 10 minutes. It surfaces the real constraint. And it tells you exactly what to do next, whether you work with us or not.
              </p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors"
              >
                Start the diagnostic
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

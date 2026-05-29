import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internal Tool Build | Pressense Packages',
  description: 'Custom internal tools from $5,000. Replace spreadsheets and manual workflows with tools built for your team.',
  openGraph: {
    title: 'Internal Tool Build | Pressense Packages',
    description: 'Custom internal tools from $5,000. Replace spreadsheets and manual workflows with tools built for your team.',
    url: '/packages/internal-tools',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Internal Tool Build Package' }],
  },
  alternates: {
    canonical: '/packages/internal-tools',
  },
}

const deliverables = [
  'Requirements discovery and scoping',
  'UI/UX design tailored to your workflow',
  'Custom tool development',
  'Integration with existing systems',
  'Testing and iteration',
  'Team training and documentation',
]

const examples = [
  { title: 'Operations Dashboards', description: 'Real-time visibility into key metrics and workflows.' },
  { title: 'Custom CRMs', description: 'Lightweight CRM built around your actual sales process.' },
  { title: 'Approval Workflows', description: 'Replace email chains with structured approval systems.' },
  { title: 'Reporting Tools', description: 'Automated reports that pull from multiple sources.' },
]

const faqs = [
  { q: 'How long does a tool build take?', a: 'Simple tools: 1-2 weeks. Complex multi-user systems: 3-6 weeks.' },
  { q: 'What tech stack do you use?', a: 'We choose based on your needs - low-code (Retool, Airtable) or custom code (React, Next.js).' },
  { q: 'Do we own the tool?', a: 'Yes. Full ownership, source code, and documentation.' },
  { q: 'What about maintenance?', a: 'We can provide ongoing support or hand off completely. Your choice.' },
]

export default function InternalToolsPackagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Internal Tool Build',
    description: 'Custom internal tools to replace spreadsheets and manual workflows.',
    provider: { '@type': 'Organization', name: 'Pressense' },
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Packages
            </Link>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Internal Tool Build
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$5,000</span>
              <span className="text-muted-foreground">onwards</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Spreadsheets do not scale. Off-the-shelf SaaS does not fit. We build custom internal tools designed for your team and your workflows - fast, focused, and owned by you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
              <Link
                href="/custom-internal-tools"
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">What You Get</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">What We Build</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {examples.map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Ideal For</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Teams drowning in spreadsheets and manual processes</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Businesses that have outgrown off-the-shelf SaaS</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Operations that need custom workflows no tool supports</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Founders who want to stop patching and start building</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Questions</h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="pb-6 border-b border-border/40 last:border-0">
                  <h3 className="font-medium text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Ready to build?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what you need. We will scope it and give you a clear timeline.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start Your Diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Lightbulb, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Firm for Startups | Pre-Seed to Series A | Pressense',
  description: 'End-to-end startup consulting from pre-seed through Series A: Product strategy, GTM, fundraising, operations.',
  openGraph: {
    title: 'Consulting Firm for Startups | Pressense',
    description: 'Stage-based consulting for startups: Pre-seed validation to Series A scaling. Founder-focused, integrated approach.',
    url: '/consulting-firm-for-startups',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Startup Consulting' }],
  },
  alternates: {
    canonical: '/consulting-firm-for-startups',
  },
}

export default function StartupConsultingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/consulting-firm-for-startups',
    name: 'Pressense - Consulting Firm for Startups',
    description: 'Startup consulting services from pre-seed through Series A funding.',
    url: 'https://pressense.co/consulting-firm-for-startups',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Startup Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Startup Consulting for Founders Who Want to Scale Faster
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From pre-seed validation to Series A scaling, we help founders build the strategy, systems, and go-to-market needed to grow without burning out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Talk to a Consultant <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/diagnostic">Free Diagnostic</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8">The Startup Scaling Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Most startups fail not because of bad ideas, but because of execution gaps:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✕</span>
                    <span className="text-muted-foreground">No clear ICP or positioning (talking to everyone, converting no one)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✕</span>
                    <span className="text-muted-foreground">Founder doing everything (no systems, no delegation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✕</span>
                    <span className="text-muted-foreground">GTM strategy that changes every month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✕</span>
                    <span className="text-muted-foreground">Burning cash on channels that don&apos;t convert</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <p className="font-semibold mb-4">We fix this by giving you:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-muted-foreground">Clear ICP, positioning, and messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-muted-foreground">Systems that let you scale without chaos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-muted-foreground">GTM playbook tailored to your stage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-muted-foreground">Data-driven decisions on where to invest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stage-Based Approach */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-4">Stage-Based Consulting</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Different stages need different solutions. We meet you where you are.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-secondary/20 rounded-lg border border-border/50">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pre-Seed / Idea Stage</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Validate before you build. Test demand, find your ICP, and build a pitch that raises.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Market validation</li>
                  <li>• ICP definition</li>
                  <li>• Pitch deck strategy</li>
                  <li>• MVP scoping</li>
                </ul>
              </div>
              <div className="p-6 bg-secondary/20 rounded-lg border border-border/50">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seed Stage</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find product-market fit. Build repeatable sales and marketing systems.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• GTM strategy</li>
                  <li>• Sales process design</li>
                  <li>• Marketing foundations</li>
                  <li>• Operational systems</li>
                </ul>
              </div>
              <div className="p-6 bg-secondary/20 rounded-lg border border-border/50">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Series A</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Scale what works. Build the team and systems for 10x growth.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Scaling playbooks</li>
                  <li>• Team structure design</li>
                  <li>• Revenue operations</li>
                  <li>• Board prep &amp; metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who It&apos;s For */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8">Who This Is For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Technical Founders</p>
                  <p className="text-sm text-muted-foreground">Great at product, need help with GTM and scaling</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">First-Time Founders</p>
                  <p className="text-sm text-muted-foreground">Need a playbook for what to do at each stage</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Bootstrapped to VC-Backed</p>
                  <p className="text-sm text-muted-foreground">Transitioning from bootstrap mode to funded growth</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">B2B SaaS &amp; Services</p>
                  <p className="text-sm text-muted-foreground">Need a repeatable sales and marketing engine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8">How We Work</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</div>
                <div>
                  <p className="font-semibold">Diagnostic Call</p>
                  <p className="text-muted-foreground text-sm">30-min call to understand your stage, challenges, and goals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</div>
                <div>
                  <p className="font-semibold">Roadmap &amp; Proposal</p>
                  <p className="text-muted-foreground text-sm">Custom plan with clear deliverables and timeline</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">3</div>
                <div>
                  <p className="font-semibold">Execution</p>
                  <p className="text-muted-foreground text-sm">We build strategy, systems, and playbooks alongside you</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">4</div>
                <div>
                  <p className="font-semibold">Handoff &amp; Support</p>
                  <p className="text-muted-foreground text-sm">Documentation, training, and ongoing advisory as needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Startup?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free diagnostic call. We&apos;ll assess your current stage and recommend next steps.
            </p>
            <Button asChild size="lg">
              <Link href="/apply">
                Schedule Diagnostic Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

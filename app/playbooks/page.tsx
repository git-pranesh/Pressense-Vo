import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Playbooks | Diagnostic Frameworks for Growth Constraints | Pressense',
  description:
    'Diagnostic frameworks for growth constraints. Founder bottlenecks, pricing leakage, GTM alignment, customer onboarding, personal brand, systems debt, CRM adoption.',
  alternates: {
    canonical: '/playbooks',
  },
  openGraph: {
    title: 'Playbooks | Diagnostic Frameworks for Growth Constraints',
    description:
      'Diagnostic frameworks for fixing common growth constraints. From diagnosis to implementation.',
    type: 'website',
  },
}

const playbooks = [
  {
    title: 'CRM Adoption & Pipeline Visibility',
    description: 'Fix CRM resistance and build pipeline visibility. Diagnostic framework for teams where CRM feels like a chore.',
    href: '/playbooks/crm-adoption-pipeline-visibility',
    category: 'Systems',
  },
  {
    title: 'AI Readiness Audit',
    description: 'Assess your organization readiness for AI implementation. Identify high-impact opportunities and build your roadmap.',
    href: '/playbooks/ai-readiness-audit',
    category: 'AI & Automation',
  },
  {
    title: 'Founder Bottleneck Diagnostic',
    description: 'Identify where you are the constraint in your own business. Build delegation systems that actually work.',
    href: '/playbooks/founder-bottleneck-diagnostic',
    category: 'Operations',
  },
  {
    title: 'Sales Process Audit',
    description: 'Diagnose leaky funnels, inconsistent close rates, and pipeline visibility gaps. Build a repeatable sales process.',
    href: '/playbooks/sales-process-audit',
    category: 'Revenue',
  },
  {
    title: 'Build vs Buy Decision Framework',
    description: 'When to build internal tools vs buy SaaS. Framework for evaluating cost, control, and competitive advantage.',
    href: '/playbooks/internal-tools-vs-saas',
    category: 'Systems',
  },
  {
    title: 'GTM Alignment Playbook',
    description: 'Align sales, marketing, and product around your go-to-market motion. Fix misaligned incentives and messaging.',
    href: '/playbooks/gtm-alignment',
    category: 'Strategy',
  },
]

const faqs = [
  {
    question: 'What are Pressense playbooks?',
    answer: 'Pressense playbooks are diagnostic frameworks that help founders and operators understand growth constraints, pricing issues, systems debt, and execution gaps. Each playbook includes symptoms, inspection areas, decision frameworks, and implementation guidance.',
  },
  {
    question: 'Who are the playbooks written for?',
    answer: 'They are written for founders, operators, and teams trying to understand why growth feels scattered, why execution is slow, or why current systems are not supporting scale.',
  },
  {
    question: 'How should we use the playbooks?',
    answer: 'Use them to understand the problem more clearly before jumping into solutions. A playbook can help you identify whether your next step should be advisory, a website rebuild, a content system, an internal tool, CRM improvement, or AI workflow design.',
  },
  {
    question: 'Are playbooks a replacement for a diagnostic?',
    answer: 'No. Playbooks can help you think better, but they cannot fully assess your business context. A diagnostic is more specific because it looks at your actual market, offer, team, systems, workflows, and execution gaps.',
  },
]

export default function PlaybooksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-24 pb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Playbooks</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Diagnostic frameworks for fixing common growth constraints. Use these to understand your problem before jumping into solutions.
          </p>
        </section>

        {/* Playbooks Grid */}
        <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {playbooks.map((playbook) => (
              <Link
                key={playbook.title}
                href={playbook.href}
                className="group p-6 rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:bg-secondary/20 transition-all duration-200"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary/80 mb-2 block">
                  {playbook.category}
                </span>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {playbook.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {playbook.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-20">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border/40 pb-6">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-20">
          <div className="p-8 bg-secondary/30 rounded-xl border border-border/50 text-center">
            <h2 className="text-xl font-semibold mb-4">Need a Custom Diagnostic?</h2>
            <p className="text-muted-foreground mb-6">
              Playbooks help you think. A diagnostic helps you decide. Book a call to get specific guidance for your situation.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Start Diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

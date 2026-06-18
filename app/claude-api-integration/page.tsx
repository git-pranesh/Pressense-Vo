import type { Metadata } from 'next'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Claude API Integration Services | Pressense',
  description:
    'Claude API integration for founder-led businesses. Build AI assistants, document analysers, and decision-support tools on Anthropic\'s Claude. From $5K.',
  openGraph: {
    title: 'Claude API Integration Services | Pressense',
    description:
      'Build with Claude API: internal AI assistants, document summarisers, and agentic workflows for growing businesses. Pressense — Anthropic Partner Network.',
    url: '/claude-api-integration',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Claude API Integration' }],
  },
  alternates: { canonical: '/claude-api-integration' },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude API Integration Services | Pressense',
    description: 'Claude API integration for founder-led businesses. Build AI assistants, document analysers, and decision-support tools on Anthropic\'s Claude.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What is Claude API integration?',
    a: "Claude API integration is the process of connecting Anthropic's Claude language model to your business software, workflows, or applications. A developer sends text or documents to Claude via API and receives structured responses, summaries, decisions, or generated content. The integration can be as simple as a document summariser or as complex as a multi-step agentic system that reads, reasons, and takes action.",
  },
  {
    q: 'How much does Claude API integration cost?',
    a: 'Building a Claude API integration starts from $5,000 for a focused single-use tool (a document summariser, a proposal generator, an email classifier). More complex agentic workflows with tool-calling, memory, and multi-step reasoning range from $15,000 to $40,000. API usage costs from Anthropic are separate and depend on volume; most small business integrations run under $200 per month.',
  },
  {
    q: 'What can you build with the Claude API?',
    a: "Common builds include internal AI assistants (answer questions from a company knowledge base), document analysers (summarise contracts, extract key terms, flag risks), proposal generators (turn a client brief into a structured proposal), customer support triage (classify and route inbound queries), and operational decision-support tools (assess whether a deal fits your criteria). Claude handles long documents better than most competing models, making it the right choice when your content is dense or lengthy.",
  },
  {
    q: 'Claude API vs OpenAI API: which is better for my business?',
    a: "Neither is universally better — they suit different tasks. Claude handles long-context documents, nuanced reasoning, and tasks requiring careful instruction-following. GPT-4 has a wider ecosystem of third-party plugins and better-established function-calling for structured data extraction. We assess your specific use case in the diagnostic and recommend the right model. Many production systems use both.",
  },
  {
    q: 'How long does a Claude API integration take to build?',
    a: 'A focused single-use integration (document summariser, email classifier) typically takes two to four weeks from diagnostic to deployment. A more complex agentic system with memory, tool-calling, and multi-step workflows takes six to ten weeks. The timeline depends heavily on how clean your existing data is and how many systems the integration needs to connect to.',
  },
  {
    q: 'Do I need a technical team to maintain a Claude API integration?',
    a: 'Not for most builds. We document every integration thoroughly and build admin interfaces where non-technical staff can update prompts, adjust thresholds, and monitor outputs. For systems that need ongoing development, we offer a monthly retainer from $3,500. For stable integrations, most clients self-manage with no ongoing technical support.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const problems = [
  {
    title: 'You are manually reading and summarising documents every week',
    body1: 'A lawyer reviews 40 contracts a month. A founder reads every inbound proposal. A sales team manually pulls CRM history before each call. These are not productivity improvements — they are hours of billable time replaced by a Claude API call that takes three seconds.',
    body2: 'We build document analysis tools that ingest PDFs, contracts, emails, and transcripts and return structured summaries, flagged risks, and key terms. The model runs in your environment on your documents. Nothing leaves your system.',
  },
  {
    title: 'Your team is asking the same questions over and over',
    body1: 'The answer is in the SOPs. Or the Notion wiki. Or a Slack message from six months ago. Nobody can find it. New hires take three months to become useful because institutional knowledge is locked in individual heads.',
    body2: 'A Claude-powered internal assistant connects to your knowledge base, Notion, or Confluence and answers questions in plain English with citations. It does not hallucinate — it only answers from your documents. When it cannot find the answer, it says so.',
  },
  {
    title: "Your AI experiment used ChatGPT and the outputs weren't reliable enough",
    body1: "ChatGPT's consumer interface is not designed for business process integration. It has no memory between sessions, no access to your data, and no way to guarantee consistent output format. What you experienced was not a flaw in AI — it was the wrong tool for the job.",
    body2: 'Claude API integration is different. We design the prompt architecture, test for output consistency, and build guard rails so the model produces structured, predictable responses every time. The diagnostic session identifies which of your processes are good fits for reliable AI output.',
  },
]

export default function ClaudeAPIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Claude API Integration Services',
        provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
        description: "Claude API integration for founder-led businesses: AI assistants, document analysers, and agentic workflows built on Anthropic's Claude.",
        url: 'https://www.pressense.co/claude-api-integration',
        areaServed: 'United States',
        offers: {
          '@type': 'Offer',
          priceRange: '$5,000 - $40,000',
          priceCurrency: 'USD',
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
          { '@type': 'ListItem', position: 2, name: 'AI Tools We Use', item: 'https://www.pressense.co/ai-tools-we-use' },
          { '@type': 'ListItem', position: 3, name: 'Claude API Integration', item: 'https://www.pressense.co/claude-api-integration' },
        ],
      }) }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
          <div className="container mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                  Claude API / Anthropic Partner Network
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
                Claude API Integration Services for Growing Businesses
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                We build Claude-powered tools that read your documents, answer your team's questions, and automate the
                reasoning tasks that currently take hours of human time. Focused integrations from $5,000.
              </p>
              <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Claude API integration</strong> is the process of connecting
                  Anthropic&apos;s Claude language model to your business systems to automate document analysis,
                  knowledge retrieval, and decision support. Claude handles long-context documents better than competing
                  models, making it the right choice for contract review, report summarisation, and multi-step reasoning
                  tasks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
                  Book a Free Diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/ai-tools-we-use" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
                  See our full tool stack
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { stat: '2–8 wks', label: 'Typical build time' },
                  { stat: 'From $5K', label: 'Starting price' },
                  { stat: '100%', label: 'You own the code' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-semibold text-foreground mb-1">{s.stat}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
        </section>

        {/* Problems */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">Problems we solve</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                When does a Claude API integration make sense?
              </h2>
            </div>
            <div className="space-y-10 max-w-3xl">
              {problems.map((p) => (
                <div key={p.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">{p.body1}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.body2}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-12">
                Common questions about Claude API integration
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border/40 pb-8 last:border-0 last:pb-0">
                    <h3 className="text-base font-semibold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}

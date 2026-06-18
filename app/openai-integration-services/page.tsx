import type { Metadata } from 'next'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'OpenAI Integration Services for Business | Pressense',
  description:
    'OpenAI GPT-4 integration for growing businesses. Build content pipelines, chat interfaces, and data extraction tools. From $5K, 2–6 weeks.',
  openGraph: {
    title: 'OpenAI Integration Services for Business | Pressense',
    description: 'GPT-4 integration for content automation, function calling, and structured data extraction. Pressense builds OpenAI-powered tools for founder-led businesses.',
    url: '/openai-integration-services',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'OpenAI Integration Services' }],
  },
  alternates: { canonical: '/openai-integration-services' },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Integration Services for Business | Pressense',
    description: 'OpenAI GPT-4 integration for growing businesses. Build content pipelines, chat interfaces, and data extraction tools. From $5K, 2–6 weeks.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What is OpenAI integration for businesses?',
    a: "OpenAI integration connects GPT-4 or other OpenAI models to your business systems via API. This allows your software to generate content, extract structured data from unstructured text, power chat interfaces, or call functions in your existing applications. The integration is not a ChatGPT subscription — it is custom software built specifically for your process.",
  },
  {
    q: 'How do I add GPT-4 to my business?',
    a: "Adding GPT-4 to your business starts with identifying the specific task you want to automate or enhance: content generation, data extraction, customer support triage, or an internal chat interface. We run a diagnostic to assess feasibility, design the integration, build and test it, then hand it over with documentation. Most simple integrations are live within two to four weeks.",
  },
  {
    q: 'How much does OpenAI API integration cost?',
    a: 'A focused GPT-4 integration (content generator, email classifier, data extractor) starts from $5,000. More complex builds with function calling, custom fine-tuning, or multi-step pipelines range from $15,000 to $45,000. OpenAI API usage costs are billed separately by OpenAI at per-token rates; most business integrations run $50 to $300 per month depending on volume.',
  },
  {
    q: 'What is the difference between OpenAI API and Claude API?',
    a: "OpenAI's API (GPT-4) has a larger third-party ecosystem, strong function-calling for structured data tasks, and better performance on code generation. Anthropic's Claude API handles longer documents and complex multi-step reasoning more reliably. We assess your use case during the diagnostic and recommend the right model. Some production builds use both.",
  },
  {
    q: 'How long does OpenAI integration take?',
    a: 'A simple single-purpose integration takes two to four weeks from diagnostic to deployment. A more complex pipeline with multiple model calls, tool use, and custom data connectors takes five to eight weeks. Timeline depends on data availability and how many existing systems the integration needs to connect to.',
  },
  {
    q: 'Can OpenAI integration work with my existing CRM or database?',
    a: "Yes. We build integrations that pull data from HubSpot, Salesforce, Airtable, PostgreSQL, or any system with an API. A common build: OpenAI reads a company's CRM history and draft emails on behalf of the sales team before each call. The model reads your data; it does not need to be retrained on it.",
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

const useCases = [
  {
    title: 'Content pipelines at scale',
    body: 'We use GPT-4 to build content systems that take a brief, a data source, or a product feed and generate structured copy at scale. Product descriptions, SEO meta tags, email subject lines, and social content — all generated from your templates with consistent brand voice and zero manual effort.',
  },
  {
    title: 'Structured data extraction from unstructured sources',
    body: "GPT-4's function calling makes it reliable for extracting structured data from emails, PDFs, forms, and documents. A client receives 200 supplier quotes by email each month. GPT-4 reads each one, extracts price, lead time, and SKU, and writes the result directly into their Airtable database. What took two hours takes three minutes.",
  },
  {
    title: 'Customer-facing chat interfaces',
    body: 'We build GPT-4-powered chat interfaces for websites, portals, and internal tools. The model answers questions from your documentation, qualifies inbound leads, or guides customers through a process. We design the prompt architecture to minimise hallucination and add citation requirements so the model only answers from approved sources.',
  },
  {
    title: 'Sales and operations automation',
    body: "GPT-4 integrates with Make and Zapier to add intelligence to existing automation workflows. When a new deal enters your CRM, GPT-4 generates a personalised follow-up sequence. When a support ticket arrives, GPT-4 classifies it by urgency and routes it to the right team member. Intelligence added to your existing stack without rebuilding it.",
  },
]

export default function OpenAIIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'OpenAI Integration Services',
        provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
        description: 'GPT-4 and OpenAI API integration for founder-led businesses: content pipelines, chat interfaces, and structured data extraction.',
        url: 'https://www.pressense.co/openai-integration-services',
        areaServed: 'United States',
        offers: { '@type': 'Offer', priceRange: '$5,000 - $45,000', priceCurrency: 'USD' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
          { '@type': 'ListItem', position: 2, name: 'AI Tools We Use', item: 'https://www.pressense.co/ai-tools-we-use' },
          { '@type': 'ListItem', position: 3, name: 'OpenAI Integration Services', item: 'https://www.pressense.co/openai-integration-services' },
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
                  OpenAI / GPT-4 Integration
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
                OpenAI Integration Services for Growing Businesses
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                We build GPT-4-powered tools that generate content at scale, extract structured data from any source,
                and add intelligence to your existing workflows. Not a ChatGPT subscription — custom software built for
                your process.
              </p>
              <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">OpenAI integration</strong> connects GPT-4 to your business
                  systems via API to automate content generation, data extraction, and customer interactions. Unlike the
                  ChatGPT consumer product, API integrations are custom-built for your specific process, work with your
                  existing data, and produce consistent, structured outputs every time.
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
                  { stat: '2–6 wks', label: 'Typical build time' },
                  { stat: 'From $5K', label: 'Starting price' },
                  { stat: '4', label: 'Core use cases' },
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

        {/* Use cases */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">Use cases</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                What we build with the OpenAI API
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-2xl border border-border/60 bg-card/40 p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{uc.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{uc.body}</p>
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
                Common questions about OpenAI integration
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

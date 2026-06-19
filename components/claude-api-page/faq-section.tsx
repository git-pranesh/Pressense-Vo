import Link from 'next/link'

const faqs = [
  {
    q: 'What is the Claude API?',
    a: "The Claude API is Anthropic's developer interface for building applications on top of Claude's language models. It lets you send text (and optionally images) to Claude and receive a structured response. You can control tone, format, length, and behaviour through a system prompt. Businesses use it to build document analysis tools, content generation systems, research assistants, and support automation — anything that benefits from Claude's large context window and precise instruction-following.",
  },
  {
    q: 'What is Claude best at?',
    a: "Claude excels at tasks requiring long-context understanding: analysing a 50-page contract, summarising a year of meeting notes, extracting structured data from unstructured documents, and generating long-form content that follows precise instructions. Its 200K-token context window is the largest available among major models, which makes it the right choice for legal, finance, operations, and research workflows that involve large documents.",
  },
  {
    q: 'How is the Claude API different from ChatGPT?',
    a: "ChatGPT is a consumer product built by OpenAI for end users. The Claude API is a developer interface from Anthropic for building custom applications. The underlying models are different: Claude (Anthropic) and GPT-4o (OpenAI). Claude's larger context window makes it better for document-heavy tasks. GPT-4o has a larger third-party ecosystem. Both are production-grade APIs suitable for business applications.",
  },
  {
    q: 'How much does Claude API integration cost?',
    a: 'Pressense Claude API integrations start from $2,000 for a focused single-use-case integration (e.g. a document analysis tool or a content generation assistant). Custom multi-use integrations start from $5,000. You also pay Anthropic directly for API usage, which is token-based and typically $10–$60 per million tokens depending on the model tier. Most business integrations cost $20–$200/month in API usage at standard volumes.',
  },
  {
    q: 'What does a Claude API integration include?',
    a: 'A Pressense integration includes: prompt architecture and system prompt design, API integration layer, a user interface (web app or admin panel), error handling and fallback logic, usage logging and cost monitoring, and handover documentation. We do not deliver a raw API connection — we deliver a working tool your team can use.',
  },
  {
    q: 'Can Claude integrate with our existing tools?',
    a: "Yes. Claude integrations typically connect to existing document storage (Google Drive, SharePoint, Notion), CRM systems (HubSpot, Salesforce), project management tools (Linear, Jira), and communication platforms (Slack, Teams). The integration layer handles the data flow between your existing systems and Claude's API.",
  },
  {
    q: 'Is the Claude API suitable for sensitive business data?',
    a: "Anthropic offers enterprise agreements with data privacy commitments — inputs are not used to train future models under the API by default. For highly regulated data (healthcare, finance, legal), you should confirm the specific data handling requirements with Anthropic before integrating. Pressense advises on data architecture and can build the integration to avoid sending sensitive identifiers where they are not needed.",
  },
]

export function ClaudeApiFaqSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-14 leading-tight">
          Claude API integration questions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}>
              <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-base text-muted-foreground mb-4">
            Not sure whether Claude or another model is right for your use case?
          </p>
          <Link
            href="/ai-tools-we-use"
            className="text-primary hover:underline text-sm font-medium"
          >
            See the full Pressense AI tool stack
          </Link>
        </div>
      </div>
    </section>
  )
}

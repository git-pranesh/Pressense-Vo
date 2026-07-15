const faqs = [
  {
    question: 'What is a GTM content system?',
    answer:
      'A GTM content system is the operational infrastructure that connects your positioning, content production, distribution channels, and CRM attribution into a single repeatable motion. It is not a content calendar or a blog schedule. It is the full workflow: who briefs content, who produces it, how it is reviewed, which channels distribute it when it goes live, and how the pipeline it generates gets tracked. The system runs at a consistent cadence without requiring constant founder input.',
  },
  {
    question: 'How is a GTM content system different from a content strategy?',
    answer:
      'A content strategy describes what to publish and why. A GTM content system is the operational layer that makes the strategy run. Most B2B SaaS companies have a strategy document that describes the right things. The pipeline does not grow because nobody built the system to execute it. The system covers production workflows, distribution triggers, CRM tagging, attribution setup, and performance measurement. Strategy without system is a document. System without strategy is noise.',
  },
  {
    question: 'How long does it take to build and launch a GTM content system?',
    answer:
      'The design phase takes two to three weeks: ICP definition, positioning audit, topic cluster mapping, and content architecture. The foundation build takes three to four weeks: first pillar page, four cluster articles, distribution infrastructure configured, CRM attribution active. The first content is live six to seven weeks from the start of the engagement. Measurable ranking movement begins within ninety days. Pipeline attribution starts from day one of the live system.',
  },
  {
    question: 'What channels does a GTM content system cover?',
    answer:
      'The core channels for most B2B SaaS companies are organic search and LinkedIn, with email newsletter as the retention layer. We focus on one primary channel and build the repurposing workflow from long-form content into that channel. For most Seed to Series A SaaS companies, LinkedIn is the highest-leverage distribution channel because it reaches the buyers directly. Organic search is the compounding channel that generates pipeline without active distribution effort over time. We build both in parallel from the start.',
  },
  {
    question: 'How do you track whether content is generating pipeline?',
    answer:
      'Every piece of content that generates a click has UTM parameters that track the source, medium, and content name. These are passed into your CRM when a visitor converts to a trial sign-up or demo request. First-touch attribution shows which content first brought the buyer to your site. Last-touch attribution shows which content was the final nudge before conversion. The monthly report shows both. Deals sourced through content are tagged so you can review their close rates and average contract values against other channels.',
  },
  {
    question: 'Can a founder run the GTM content system once it is built?',
    answer:
      'Yes. That is the design goal. The system is built so a founder or a single marketing hire can run the operational cadence: two long-form pieces per month, weekly LinkedIn distribution, monthly performance review. The founder does not need to be the bottleneck for every brief and every review. The workflows and templates handle the structure. The founder contributes the insight and the final approval. Most founders who use the system find that they are producing higher-quality content in less total time than they were before the system existed.',
  },
  {
    question: 'What is the difference between this and hiring a content agency?',
    answer:
      'A content agency produces content on a brief and delivers it. A GTM content system engagement produces the infrastructure that the agency output fits into. The difference is that after a Pressense engagement, you have a functioning system that any writer can produce content for. After a generic content agency engagement, you have articles. If the agency stops, the pipeline stops. If the system is built, the pipeline continues regardless of who is producing the content.',
  },
  {
    question: 'Does the GTM content system work for AI search as well as Google?',
    answer:
      'Yes. The content principles that drive Google rankings also drive AI engine citation: direct question-answer structure, specific detail, clear heading hierarchy, no vague marketing language. Every piece produced through the GTM content system is structured for AI citation by default. ChatGPT, Perplexity, and Google AI Overviews all pull from the same high-quality, directly-answering content that ranks well in traditional search.',
  },
]

export function GtmContentFaqSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-14 leading-tight">
          GTM content system questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

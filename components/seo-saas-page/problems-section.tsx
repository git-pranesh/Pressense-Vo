export function SeoSaasProblemsSection() {
  const problems = [
    {
      number: '01',
      title: 'You are publishing content but the traffic does not convert',
      body: 'This is the most common SaaS content problem. The content exists. The traffic exists. The pipeline does not. The root cause is almost always keyword intent mismatch. You are ranking for informational queries when your buyers are using comparison and decision queries. Someone reading "what is project management software" is in research mode. Someone reading "Asana vs Monday for engineering teams" is three days from a buying decision. The content architecture determines which reader you attract.',
    },
    {
      number: '02',
      title: 'Your content sounds like every other SaaS blog',
      body: 'Publish ten AI-generated articles about the same topic with slightly different titles and you do not build authority. You build noise. Google is increasingly good at identifying thin content that lacks expertise, and so are your buyers. B2B SaaS buyers read content critically. They know immediately if the writer has used the product, understands the problem, or is summarising a Wikipedia article. Technical accuracy and genuine point of view are the two things that separate content that converts from content that clogs your sitemap.',
    },
    {
      number: '03',
      title: 'Your site has no topical authority and Google does not trust it',
      body: 'Topical authority is what Google uses to decide which site deserves to rank for a category. A site that publishes 50 loosely related articles on different topics has no authority. A site that publishes a structured cluster of pillar and supporting content around three to five specific topics signals expertise to Google and earns rankings. Most SaaS companies have scattered content because they wrote about what was interesting rather than what was strategically connected.',
    },
    {
      number: '04',
      title: 'Your funded competitors are outranking you on the keywords your buyers use',
      body: 'A competitor who has been publishing consistently for 18 months has a structural advantage. Their domain has accumulated backlinks, their content has been indexed, and their topical authority scores are established. You cannot close that gap by publishing faster. You close it by being more targeted: focusing on lower-competition adjacent keywords first, building topical authority in a defined niche, and producing content that is demonstrably better on the specific queries where you can win.',
    },
    {
      number: '05',
      title: 'AI search engines do not cite your content',
      body: 'ChatGPT, Perplexity, Claude, and Google AI Overviews now answer buyer questions before they reach a search results page. If your content is not structured to be cited by these engines, you are invisible in a growing share of the buying journey. AEO, or Answer Engine Optimisation, requires content that answers specific questions directly and completely in the first two sentences, uses clear structure that AI parsers can read, and includes the kind of specific, verifiable claims that engines use as source material.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Why SaaS Content Fails
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Five reasons your B2B SaaS content is not generating pipeline
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          These are not abstract problems. They are the specific gaps we audit in every new content engagement. Each one has a definable cause and a fixable solution.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <div className="md:w-16 flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20 font-mono">{p.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">{p.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

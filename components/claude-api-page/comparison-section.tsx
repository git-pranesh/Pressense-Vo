const rows = [
  { attribute: 'Context window', claude: '200,000 tokens', openai: '128,000 tokens (GPT-4o)' },
  { attribute: 'Best for', claude: 'Long docs, analysis, structured extraction', openai: 'Tool calling, image input, broad integrations' },
  { attribute: 'Writing quality', claude: 'Nuanced, precise, instruction-following', openai: 'Natural, conversational, versatile' },
  { attribute: 'Safety defaults', claude: 'Conservative — fewer refusals on business content', openai: 'Configurable — depends on system prompt' },
  { attribute: 'Cost per token', claude: 'Comparable — varies by model tier', openai: 'Comparable — varies by model tier' },
  { attribute: 'Vision / image input', claude: 'Yes (Claude 3+)', openai: 'Yes (GPT-4o)' },
  { attribute: 'Ecosystem depth', claude: 'Growing — strong on dev tooling', openai: 'Larger — more third-party integrations' },
  { attribute: 'When to choose', claude: 'Long-form analysis, legal/finance/ops documents', openai: 'Conversational UX, broad tool calling, image tasks' },
]

export function ClaudeApiComparisonSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Model Comparison</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Claude vs GPT-4o: which one should you use?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          We are model-agnostic at Pressense. We recommend Claude when the task involves long documents, structured extraction, or detailed analysis. We recommend GPT-4o when the task involves conversational UX, image input, or a broad ecosystem of third-party integrations. For many clients, we use both.
        </p>

        <div className="rounded-2xl border border-border/40 overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary/40 px-6 py-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Attribute</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Claude (Anthropic)</span>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">OpenAI GPT-4o</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.attribute}
              className={`grid grid-cols-3 px-6 py-4 border-t border-border/30 ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/10'}`}
            >
              <span className="text-sm font-medium text-foreground">{row.attribute}</span>
              <span className="text-sm text-muted-foreground pr-4">{row.claude}</span>
              <span className="text-sm text-muted-foreground">{row.openai}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground max-w-2xl">
          Model selection is part of every Pressense diagnostic. We evaluate the task, data type, volume, and latency requirements before recommending an API. There is no loyalty to a single provider — the best model for the job is the one we use.
        </p>
      </div>
    </section>
  )
}

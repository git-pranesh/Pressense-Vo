const useCases = [
  {
    model: 'GPT-4o — Text + Vision',
    description: 'The most capable all-round model for conversational UI, image understanding, and tool calling.',
    uses: [
      'AI product assistants and chat interfaces',
      'Image-to-text extraction from photos and documents',
      'Visual quality control from uploaded images',
      'Conversational CRM and support tools',
    ],
  },
  {
    model: 'GPT-4o mini — Fast & Cost-Efficient',
    description: 'Ideal for high-volume tasks where speed and cost matter more than maximum capability.',
    uses: [
      'Email classification and routing',
      'Real-time content moderation',
      'High-volume data labelling and tagging',
      'First-response generation at scale',
    ],
  },
  {
    model: 'Structured Outputs & Function Calling',
    description: 'Make the model return predictable JSON that connects directly to your database or API.',
    uses: [
      'Intelligent form filling from unstructured input',
      'AI-powered CRM data enrichment',
      'Automated report generation from raw data',
      'Workflow orchestration with multi-step tool calling',
    ],
  },
  {
    model: 'Embeddings & Semantic Search',
    description: 'Convert documents into vector embeddings for semantic search, recommendation, and similarity matching.',
    uses: [
      'Internal knowledge base search',
      'Product recommendation from natural language input',
      'Similar document detection',
      'Customer query matching to existing articles',
    ],
  },
  {
    model: 'Whisper — Speech to Text',
    description: "OpenAI's speech recognition model for transcription, meeting notes, and voice input.",
    uses: [
      'Automatic meeting transcription and summarisation',
      'Voice input for internal tools',
      'Audio content indexing and search',
      'Call centre transcript analysis',
    ],
  },
  {
    model: 'DALL-E 3 — Image Generation',
    description: 'Generate custom images, product visuals, and branded content from text descriptions.',
    uses: [
      'Automated product image generation',
      'Marketing asset creation at scale',
      'Custom illustration for content workflows',
      'Personalised visual content for outreach',
    ],
  },
]

export function OpenAIUseCasesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Use Cases by Model</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What you can build with the OpenAI API
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          OpenAI&apos;s API offers multiple models optimised for different tasks. We select the right model for each use case — often combining multiple models in a single application to balance cost, speed, and capability.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.model} className="p-6 rounded-2xl border border-border/50 bg-card">
              <h3 className="text-sm font-semibold text-primary mb-1">{uc.model}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{uc.description}</p>
              <div className="space-y-2">
                {uc.uses.map((u) => (
                  <div key={u} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{u}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const useCases = [
  {
    industry: 'Legal & Professional Services',
    uses: [
      'Contract review and clause extraction',
      'Case research summarisation across long PDFs',
      'Draft generation from structured input',
      'Matter intake classification',
    ],
  },
  {
    industry: 'Finance & Accounting',
    uses: [
      'Financial document analysis and extraction',
      'Report summarisation from raw data',
      'Policy and compliance document review',
      'Invoice and statement processing',
    ],
  },
  {
    industry: 'SaaS & Product',
    uses: [
      'In-product AI writing and editing assistant',
      'Support ticket classification and auto-response drafts',
      'Knowledge base search and summarisation',
      'User feedback analysis and theme extraction',
    ],
  },
  {
    industry: 'Sales & Marketing',
    uses: [
      'Personalised outreach draft generation',
      'Lead research summarisation from multiple sources',
      'Competitive analysis from long-form documents',
      'Content brief creation from audience data',
    ],
  },
  {
    industry: 'Operations & HR',
    uses: [
      'Policy document Q&A for internal teams',
      'Job description generation from role specs',
      'Onboarding content creation and personalisation',
      'Meeting notes summarisation and action extraction',
    ],
  },
  {
    industry: 'Real Estate & Property',
    uses: [
      'Lease and contract analysis',
      'Property listing generation from data',
      'Due diligence document summarisation',
      'Tenant communication drafts',
    ],
  },
]

export function ClaudeApiUseCasesSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Use Cases</p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What businesses use the Claude API for
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Claude&apos;s 200K-token context window makes it the right model when you need to process long documents, extract structured data from unstructured text, or generate long-form content from complex inputs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.industry} className="p-6 rounded-2xl bg-card">
              <h3 className="text-base font-medium text-foreground mb-4">{uc.industry}</h3>
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

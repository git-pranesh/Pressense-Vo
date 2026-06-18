const tools = [
  {
    category: 'AI Models',
    items: [
      {
        name: 'Claude API (Anthropic)',
        slug: 'claude',
        subpage: '/claude-api-integration',
        use: 'Complex reasoning, document analysis, and multi-step agent workflows.',
        outcome: 'We use Claude to build internal AI assistants, document summarisers, and decision-support tools. Claude handles long-context tasks — reading a 100-page contract, summarising a CRM history, or generating a structured proposal from a rough brief.',
        icp: 'Founder-led teams that process high volumes of text or need AI to reason through complex decisions, not just generate copy.',
        badge: 'Anthropic Partner Network',
      },
      {
        name: 'GPT-4 (OpenAI)',
        slug: 'openai',
        subpage: '/openai-integration-services',
        use: 'Content generation, function calling, and structured data extraction.',
        outcome: 'We use GPT-4 for applications that need reliable structured output: extracting data from unstructured sources, generating product descriptions at scale, and powering chat interfaces with tool-calling capability.',
        icp: 'Teams automating content workflows, data pipelines, or customer-facing chat experiences.',
        badge: null,
      },
    ],
  },
  {
    category: 'Build Platform',
    items: [
      {
        name: 'Replit',
        slug: 'replit',
        subpage: '/replit-development-agency',
        use: 'Full-stack app development, MVPs, and internal tools — in days, not months.',
        outcome: 'Replit is our primary build platform for custom software. Code is written in standard TypeScript, lives in your account, and is fully portable. There is no proprietary framework and no vendor lock-in. A working prototype in week one. Production-ready in week four.',
        icp: 'Founders who need a real app built without a six-month dev cycle or a $200K agency retainer.',
        badge: 'Cited in Google AI Overview',
      },
    ],
  },
  {
    category: 'Website',
    items: [
      {
        name: 'Framer',
        slug: 'framer',
        subpage: '/framer-website-design',
        use: 'Conversion-focused websites for SaaS and founder-led businesses.',
        outcome: 'We use Framer for marketing sites and landing pages where speed-to-launch and visual quality both matter. Design and code in one platform means no handoff delays. A Framer site goes from wireframe to live in two to three weeks.',
        icp: 'SaaS founders and service businesses that need a high-quality website without a three-month agency engagement.',
        badge: null,
      },
    ],
  },
  {
    category: 'Automation',
    items: [
      {
        name: 'Make (formerly Integromat)',
        slug: 'make',
        subpage: null,
        use: 'Complex, branching, high-volume automation workflows.',
        outcome: 'Make handles the workflows that Zapier cannot. Multi-step data transformations, conditional routing, and API calls that require iteration. We use Make when a workflow needs to process hundreds of records, handle errors gracefully, or branch based on data values.',
        icp: 'Operations teams that have outgrown Zapier or need automation that runs without a developer watching it.',
        badge: null,
      },
      {
        name: 'Zapier',
        slug: 'zapier',
        subpage: null,
        use: 'Quick-deploy trigger-action workflows between SaaS tools.',
        outcome: 'Zapier works best for simple, reliable connections between two tools with clear trigger-action logic. New lead in HubSpot triggers a Slack message and a Notion entry. We use Zapier when speed matters and the workflow does not need branching logic.',
        icp: 'Teams who need ten automations running in one week without custom development.',
        badge: null,
      },
    ],
  },
  {
    category: 'Data and Operations',
    items: [
      {
        name: 'Airtable',
        slug: 'airtable',
        subpage: null,
        use: 'Relational databases and operational backbones for growing teams.',
        outcome: 'Airtable is the operational layer for teams that have outgrown spreadsheets but do not need a full database engineer. We use it to build project trackers, CRM replacements, content calendars, and client portals. Every Airtable base we build connects directly to Make or Zapier automations.',
        icp: 'Teams running operations in Google Sheets who are losing data, missing context, or duplicating work across five different files.',
        badge: null,
      },
      {
        name: 'Notion',
        slug: 'notion',
        subpage: null,
        use: 'Documentation, knowledge management, and team wikis.',
        outcome: 'We use Notion as the documentation layer for every engagement. SOPs, project briefs, client onboarding guides, and team wikis. Notion connects to our automation workflows so new entries trigger the right next action. Every client leaves with a living knowledge base, not a folder of PDFs.',
        icp: 'Founder-led teams that have knowledge trapped in individual heads or scattered across Slack threads.',
        badge: null,
      },
    ],
  },
]

export function ToolsGridSection() {
  return (
    <section id="tools" className="py-20 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            Full Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-4">
            Every tool. Every use case. Every outcome.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here is exactly how we use each tool to build specific outcomes for founder-led businesses. No generalities.
            No vendor fluff.
          </p>
        </div>

        <div className="space-y-16">
          {tools.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary/40" aria-hidden="true" />
                <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold">
                  {category.category}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {category.items.map((tool) => (
                  <div
                    key={tool.slug}
                    className="rounded-2xl border border-border/60 bg-card/40 p-8 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{tool.name}</h3>
                      {tool.badge && (
                        <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-primary/80 mb-3">
                      How we use it: {tool.use}
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      {tool.outcome}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      <span className="font-medium text-foreground/80">Right for:</span> {tool.icp}
                    </p>

                    {tool.subpage ? (
                      <a
                        href={tool.subpage}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        See our {tool.name.split(' ')[0]} services
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <a
                        href="/diagnostic"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Ask about {tool.name.split(' ')[0]} in your diagnostic
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
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

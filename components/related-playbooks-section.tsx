import Link from 'next/link'

interface RelatedPlaybook {
  title: string
  slug: string
  description: string
}

interface RelatedPlaybooksSectionProps {
  playbooks: RelatedPlaybook[]
  eyebrow?: string
  headline?: string
}

export function RelatedPlaybooksSection({
  playbooks,
  eyebrow = 'Related Playbooks',
  headline = 'Explore diagnostic frameworks',
}: RelatedPlaybooksSectionProps) {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40" aria-label="Related playbooks">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{eyebrow}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-10 text-balance">
            {headline}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbooks.map((playbook) => (
              <Link
                key={playbook.slug}
                href={`/playbooks/${playbook.slug}`}
                className="glass-card rounded-xl p-6 border border-border/40 hover:border-primary/20 transition-all group"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {playbook.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {playbook.description}
                </p>
                <span className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View playbook
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-secondary/50 text-foreground hover:bg-secondary border border-border/40 hover:border-primary/20 transition-all"
            >
              Browse all playbooks
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

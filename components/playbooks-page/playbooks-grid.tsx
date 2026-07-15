import Link from 'next/link'
import { playbooks } from '@/lib/playbooks-data'

const playbookCards = playbooks.map((playbook) => ({
  slug: playbook.slug,
  title: playbook.title,
  description: playbook.subheadline,
  bestFor: playbook.bestFor,
  relatedService: playbook.relatedService.name,
}))

export function PlaybooksGrid() {
  return (
    <section className="py-28 lg:py-36" aria-label="Playbook library">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance" id="playbooks-heading">
            Playbook library.
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-2xl">
            Each playbook is a diagnostic framework. Click to explore symptoms, inspection areas, decision frameworks, and implementation guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {playbookCards.map((playbook) => (
            <Link
              key={playbook.slug}
              href={`/playbooks/${playbook.slug}`}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/40">
                  {playbook.relatedService}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {playbook.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {playbook.bestFor}
              </p>
              <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View framework</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

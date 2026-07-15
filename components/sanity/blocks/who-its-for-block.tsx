import { XCircle } from 'lucide-react'

interface Scenario { label: string; description: string; icon?: string }
interface Props { title?: string; scenarios?: Scenario[]; notForTitle?: string; notForItems?: string[] }

export function WhoItsForBlock({ title = 'Who This Is For', scenarios = [], notForTitle, notForItems = [] }: Props) {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-section-title font-serif text-foreground mb-10 text-balance">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {scenarios.map((s, i) => (
          <div key={i} className="rounded-2xl bg-card border border-border p-5">
            {s.icon && <span className="text-2xl mb-3 block">{s.icon}</span>}
            <p className="text-sm font-medium text-foreground mb-1.5 font-sans">{s.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">{s.description}</p>
          </div>
        ))}
      </div>
      {notForItems.length > 0 && (
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-3 font-sans">{notForTitle || 'This is NOT for you if...'}</p>
          <ul className="space-y-1.5">
            {notForItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </section>
  )
}

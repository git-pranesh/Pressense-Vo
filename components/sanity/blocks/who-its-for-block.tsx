import { XCircle } from 'lucide-react'

interface Scenario { label: string; description: string; icon?: string }
interface Props { title?: string; scenarios?: Scenario[]; notForTitle?: string; notForItems?: string[] }

export function WhoItsForBlock({ title = 'Who This Is For', scenarios = [], notForTitle, notForItems = [] }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {scenarios.map((s, i) => (
          <div key={i} className="glass-card rounded-xl border border-border/60 p-5">
            {s.icon && <span className="text-2xl mb-3 block">{s.icon}</span>}
            <p className="text-sm font-semibold text-foreground mb-1.5">{s.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
      {notForItems.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-3">{notForTitle || 'This is NOT for you if...'}</p>
          <ul className="space-y-1.5">
            {notForItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

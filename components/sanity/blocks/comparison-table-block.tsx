import { CheckCircle, XCircle } from 'lucide-react'

interface ComparisonRow { feature: string; left: string; right: string; leftPositive?: boolean }
interface Props { title?: string; leftLabel?: string; rightLabel?: string; rows?: ComparisonRow[] }

export function ComparisonTableBlock({ title, leftLabel = 'Pressense', rightLabel = 'Alternative', rows = [] }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">{title}</h2>}
      <div className="border border-border/60 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 bg-secondary/40 px-6 py-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Feature</div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary text-center">{leftLabel}</div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">{rightLabel}</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 px-6 py-4 border-t border-border/40 ${i % 2 === 0 ? '' : 'bg-secondary/10'}`}>
            <div className="text-sm text-foreground font-medium">{row.feature}</div>
            <div className="text-sm text-center flex items-center justify-center gap-1.5">
              {row.leftPositive !== false ? <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
              <span className="text-muted-foreground">{row.left}</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">{row.right}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

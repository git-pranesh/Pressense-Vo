import { CheckCircle, XCircle } from 'lucide-react'

interface ComparisonRow { feature: string; left: string; right: string; leftPositive?: boolean }
interface Props { title?: string; leftLabel?: string; rightLabel?: string; rows?: ComparisonRow[] }

export function ComparisonTableBlock({ title, leftLabel = 'Pressense', rightLabel = 'Alternative', rows = [] }: Props) {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
      {title && <h2 className="text-section-title font-serif text-foreground mb-10 text-center text-balance">{title}</h2>}
      <div className="border border-border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 bg-surface-2 px-6 py-4">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground font-sans">Feature</div>
          <div className="text-xs font-medium uppercase tracking-widest text-brand text-center font-sans">{leftLabel}</div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center font-sans">{rightLabel}</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? 'bg-card' : 'bg-surface'}`}>
            <div className="text-sm text-foreground font-medium font-sans">{row.feature}</div>
            <div className="text-sm text-center flex items-center justify-center gap-1.5 font-sans">
              {row.leftPositive !== false ? <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
              <span className="text-muted-foreground">{row.left}</span>
            </div>
            <div className="text-sm text-muted-foreground text-center font-sans">{row.right}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

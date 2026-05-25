import type { ReactNode } from 'react'

interface MetricCardProps {
  label: string
  value: ReactNode
  sublabel?: ReactNode
  description?: ReactNode
  accent?: 'primary' | 'secondary' | 'default'
  className?: string
}

export function MetricCard({ label, value, sublabel, description, accent = 'default', className }: MetricCardProps) {
  const colorClass =
    accent === 'primary' ? 'text-primary' : accent === 'secondary' ? 'text-secondary' : 'text-foreground'
  const displaySublabel = sublabel || description
  return (
    <div className={`rounded-xl border border-border/60 bg-background/40 p-4 ${className || ''}`}>
      <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">{label}</p>
      <p className={`text-xl sm:text-2xl font-semibold tracking-tight ${colorClass}`}>{value}</p>
      {displaySublabel && <p className="mt-1 text-xs text-muted-foreground">{displaySublabel}</p>}
    </div>
  )
}

export function MetricGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">{children}</div>
}

interface PrimaryProps {
  label: string
  value: ReactNode
  sublabel?: ReactNode
  comparison?: ReactNode
  accent?: 'primary' | 'secondary' | 'default'
}

export function PrimaryMetric({ label, value, sublabel, comparison, accent = 'primary' }: PrimaryProps) {
  const colorClass =
    accent === 'primary' ? 'text-primary' : accent === 'secondary' ? 'text-secondary' : 'text-foreground'
  const displaySublabel = sublabel || comparison
  return (
    <div className="rounded-2xl border border-border/60 bg-background/40 p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">{label}</p>
      <p
        className={`text-5xl sm:text-6xl font-bold tracking-tight ${colorClass} leading-none`}
        data-testid="primary-metric-value"
      >
        {value}
      </p>
      {displaySublabel && <p className="mt-3 text-sm text-muted-foreground">{displaySublabel}</p>}
    </div>
  )
}

interface SecondaryProps {
  label: string
  value: ReactNode
}

export function SecondaryMetric({ label, value }: SecondaryProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-4">
      <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">{label}</p>
      <p className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">{value}</p>
    </div>
  )
}

interface BenchmarkBarProps {
  label: string
  value: number
  min: number
  max: number
  zones: Array<{ from: number; to: number; label: string; color: 'red' | 'yellow' | 'green' | 'primary' }>
}

export function BenchmarkBar({ label, value, min, max, zones }: BenchmarkBarProps) {
  const colors = {
    red: 'bg-red-500/70',
    yellow: 'bg-yellow-500/70',
    green: 'bg-emerald-500/70',
    primary: 'bg-primary/70',
  }
  const clamped = Math.max(min, Math.min(max, value))
  const pct = ((clamped - min) / (max - min)) * 100
  const activeZone = zones.find((z) => clamped >= z.from && clamped <= z.to) ?? zones[0]

  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-5">
      <div className="flex items-baseline justify-between mb-3">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">{label}</p>
        <p className="text-xs text-foreground font-medium">{activeZone.label}</p>
      </div>
      <div className="relative h-2 w-full rounded-full bg-border/40 overflow-hidden flex">
        {zones.map((z, i) => {
          const w = ((z.to - z.from) / (max - min)) * 100
          return <div key={i} className={`${colors[z.color]} h-full`} style={{ width: `${w}%` }} />
        })}
      </div>
      <div className="relative h-0">
        <div
          className="absolute -top-1 h-4 w-1 bg-foreground rounded-full -translate-x-1/2"
          style={{ left: `${pct}%` }}
          aria-label={`Your value at ${pct.toFixed(0)}%`}
        />
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
        {zones.map((z, i) => (
          <span key={i}>{z.label}</span>
        ))}
      </div>
    </div>
  )
}

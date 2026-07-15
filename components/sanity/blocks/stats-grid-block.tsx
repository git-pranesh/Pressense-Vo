interface Stat {
  number?: string
  label?: string
  description?: string
}

interface StatsGridBlockProps {
  title?: string
  stats?: Stat[]
  columns?: 2 | 3 | 4
}

export function StatsGridBlock({ title, stats, columns = 3 }: StatsGridBlockProps) {
  if (!stats || stats.length === 0) return null

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <section className="w-full py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        {title && <h2 className="text-section-title font-serif text-foreground mb-14 text-center text-balance">{title}</h2>}

        <div className={`grid ${gridClass} gap-10`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.number && <div className="text-5xl font-serif text-brand mb-2">{stat.number}</div>}
              {stat.label && <h3 className="text-lg font-medium font-sans text-foreground mb-2">{stat.label}</h3>}
              {stat.description && <p className="text-muted-foreground font-sans leading-relaxed">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

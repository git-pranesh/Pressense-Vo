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
    <section className="w-full py-12 md:py-16 px-4 md:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {title && <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>}
        
        <div className={`grid ${gridClass} gap-8`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.number && <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>}
              {stat.label && <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>}
              {stat.description && <p className="text-slate-600">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

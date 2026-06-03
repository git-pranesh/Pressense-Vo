interface Testimonial { quote: string; name: string; role?: string; company?: string }
interface Props { title?: string; testimonials?: Testimonial[] }

export function TestimonialsBlock({ title = 'What Our Clients Say', testimonials = [] }: Props) {
  if (!testimonials.length) return null
  return (
    <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card rounded-xl border border-border/60 p-6 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-auto">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              {(t.role || t.company) && <p className="text-xs text-muted-foreground">{[t.role, t.company].filter(Boolean).join(' · ')}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

interface Testimonial { quote: string; name: string; role?: string; company?: string }
interface Props { title?: string; testimonials?: Testimonial[] }

export function TestimonialsBlock({ title = 'What Our Clients Say', testimonials = [] }: Props) {
  if (!testimonials.length) return null
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-section-title font-serif text-foreground mb-12 text-center text-balance">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed italic font-sans">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-auto">
              <p className="text-sm font-medium text-foreground font-sans">{t.name}</p>
              {(t.role || t.company) && <p className="text-xs text-muted-foreground font-sans">{[t.role, t.company].filter(Boolean).join(' · ')}</p>}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

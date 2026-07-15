export function TranslationSection() {
  const consequences = [
    'Buyers misunderstand the offer',
    'Technical products feel harder to buy',
    'Sales conversations take longer',
    'The wrong audience is attracted',
    'SEO traffic does not convert',
    'Founder expertise does not compound',
    'Content sounds like everyone else',
  ]

  return (
    <section className="py-24 lg:py-32" aria-label="The translation problem">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-8 text-balance">
            More content does not fix unclear communication.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many businesses publish regularly but still struggle to explain what they do, who they help, and why buyers should trust them.
            </p>
            <p>
              The issue is rarely volume. It is usually translation.
            </p>
            <p>
              Expertise stays trapped inside founders, teams, sales calls, product knowledge, delivery experience, and scattered notes. When that knowledge is not structured, the market only sees generic content.
            </p>
            <p className="text-foreground font-medium">
              A content system turns internal clarity into external trust.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">When translation is missing</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {consequences.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

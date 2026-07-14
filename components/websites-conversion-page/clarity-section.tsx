export function ClaritySection() {
  const buyerQuestions = [
    'Is this for me?',
    'Do they understand my problem?',
    'Can I trust them?',
    'How are they different?',
    'What happens next?',
    'Is this worth a conversation?',
  ]

  return (
    <section className="py-24 lg:py-32" aria-label="The clarity problem">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8 text-balance">
            Most websites do not fail because of design. They fail because buyers leave confused.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A website can look polished and still fail.
            </p>
            <p>
              If visitors cannot understand what you do, who it is for, why it matters, and what to do next, the website becomes a passive brochure.
            </p>
            <p>
              The real problem is usually not visual quality. It is unclear positioning, weak messaging, missing proof, poor page structure, and a buyer journey that does not match how people actually evaluate the business.
            </p>
            <p className="text-foreground font-medium">
              A strong website reduces sales friction before a conversation starts.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/40">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Buyers are silently asking</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {buyerQuestions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
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

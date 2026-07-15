export function PlaybooksIntroSection() {
  return (
    <section className="py-20" aria-label="What playbooks are">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-title font-serif font-medium text-foreground mb-6 text-balance">
            What these are.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each playbook is a step-by-step implementation guide for solving a specific constraint. They start with diagnosis (how to identify if this is your problem), move through design (what the solution should look like), and end with execution (how to build and sustain it).
          </p>
        </div>
      </div>
    </section>
  )
}

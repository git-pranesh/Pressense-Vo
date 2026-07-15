export function FixOneFirstSection() {
  return (
    <section
      id="fix-one-first"
      className="py-28 lg:py-36"
      aria-labelledby="fix-one-first-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2
            id="fix-one-first-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8 text-balance"
          >
            You do not have to fix everything at once.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The goal is not to rebuild the entire business on day one. The goal is to identify
            the highest-leverage constraint and fix that first. Sometimes that means clarifying
            positioning. Sometimes it means improving a funnel. Sometimes it means replacing a
            manual workflow. Sometimes it means building a better internal system.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Start with one focused problem. Solve it. Then you&apos;ll know what comes next.
          </p>
        </div>
      </div>
    </section>
  )
}

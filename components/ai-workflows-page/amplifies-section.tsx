export function AIWorkflowsAmplifiesSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="The AI problem">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8 text-balance">
            AI does not fix broken workflows. It makes them louder.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many teams start using AI tools and still feel slow, scattered, and inconsistent.
            </p>
            <p>
              That happens because the workflow underneath is unclear. Inputs are inconsistent, ownership is undefined, review is manual, and outputs do not connect to the next step.
            </p>
            <p>
              AI can speed up a good process. It can also multiply confusion inside a bad one.
            </p>
            <p className="text-foreground font-medium">
              This is why we do not start with AI. We start with the workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

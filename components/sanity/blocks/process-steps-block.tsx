interface Step {
  number?: number
  title?: string
  description?: string
}

interface ProcessStepsBlockProps {
  title?: string
  steps?: Step[]
}

export function ProcessStepsBlock({ title, steps }: ProcessStepsBlockProps) {
  if (!steps || steps.length === 0) return null

  return (
    <section className="w-full py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-section-title font-serif text-foreground mb-14 text-center text-balance">{title}</h2>}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-medium font-sans text-lg mb-5">
                {step.number || index + 1}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-16 w-12 h-px bg-border" />
              )}

              <h3 className="text-lg font-medium font-sans text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

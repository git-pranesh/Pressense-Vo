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
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {title && <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                {step.number || index + 1}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-16 w-12 h-0.5 bg-slate-200" />
              )}
              
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

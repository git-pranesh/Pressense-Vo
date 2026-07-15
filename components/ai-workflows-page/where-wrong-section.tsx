const wrongPatterns = [
  {
    title: 'Tool-first adoption',
    description: 'Teams start with tools before defining the workflow, owner, input, output, or success criteria.',
  },
  {
    title: 'Prompt chaos',
    description: 'Useful prompts live in random chats, documents, or individual memory instead of a reusable system.',
  },
  {
    title: 'No review layer',
    description: 'AI output gets used without clear standards, approval, or quality control.',
  },
  {
    title: 'Automation without judgment',
    description: 'Tasks are automated before the team decides what should stay manual.',
  },
  {
    title: 'Scattered experiments',
    description: 'Different people test tools in isolation, but nothing becomes part of the operating rhythm.',
  },
  {
    title: 'No business owner',
    description: 'Nobody owns the workflow after the initial excitement fades.',
  },
]

export function AIWhereWrongSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="Where AI usually goes wrong">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            Where AI usually goes wrong.
          </h2>
          <p className="text-muted-foreground text-lg">
            These are the patterns that prevent AI from creating real value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wrongPatterns.map((item, i) => (
            <article key={i} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

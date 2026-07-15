const workItems = [
  {
    category: 'Enterprise SaaS / Product GTM',
    title: 'Clarifying use cases for a complex low-code platform',
    context: 'Worked with an enterprise SaaS team on a low-code platform where the challenge was translating broad product capability into clear customer use cases, technical content, and GTM narratives.',
    problem: 'Low-code platforms are powerful because they can be adapted to many use cases. But that flexibility also makes them harder to explain, position, and sell without sharp use-case-led communication.',
    activities: [
      'Studied the product from a real user and buyer perspective',
      'Identified practical use cases across customer segments',
      'Helped translate technical capability into clearer market-facing narratives',
      'Supported landing page, technical content, and GTM direction',
      'Contributed to market and competitor understanding',
      'Helped sharpen decisions around positioning, content, and expansion',
    ],
    outcome: 'The team gained clearer language, stronger use-case direction, and a better foundation for explaining the product to different buyer segments.',
    playbook: 'Complex products need use-case-led GTM. If buyers cannot quickly understand how the product applies to their world, even a strong product becomes harder to sell.',
  },
  {
    category: 'Founder-Led Business / Operations',
    title: 'Creating structure inside a profitable but fragile business',
    context: 'Worked with a founder-led business that had demand and revenue, but was heavily dependent on paid ads, founder involvement, manual coordination, and disconnected execution.',
    problem: 'The business was growing, but the operating model was fragile. Too much depended on individual effort, unclear ownership, and weak systems.',
    activities: [
      'Reviewed business model and growth bottlenecks',
      'Identified revenue leakage across marketing, sales, and operations',
      'Helped restructure priorities and internal ownership',
      'Supported website, content, SEO, and digital presence direction',
      'Helped plan automation, systems, and operating visibility',
      'Created a clearer operating blueprint for scale',
    ],
    outcome: 'The founder gained better clarity on what was broken, what needed to be fixed first, and how to move toward a more structured growth model.',
    playbook: 'A profitable business can still be fragile. Before scaling harder, founders need to fix leakage, ownership, systems, and operating rhythm.',
  },
  {
    category: 'Expert-Led Growth / Professional Services',
    title: 'Building visibility systems for time-constrained experts',
    context: 'Worked with doctors and expert professionals who had strong expertise but limited time to manage branding, content, digital presence, automation, and growth execution.',
    problem: 'The expertise was already present, but the system around it was weak. Visibility, authority, content, operations, and lead generation needed structure.',
    activities: [
      'Built clearer positioning and digital presence direction',
      'Supported website, content, branding, and personal authority systems',
      'Helped create AI-assisted workflows for content and execution',
      'Supported PR, market expansion, and operational structure',
      'Reduced dependence on the expert manually handling every growth activity',
    ],
    outcome: 'The experts gained a more structured way to communicate expertise, build visibility, and support growth without manually managing every activity.',
    playbook: 'Experts do not need more random content. They need a visibility system that turns expertise into trust, demand, and operational leverage.',
  },
]

export function WorkGrid() {
  return (
    <section className="py-28 lg:py-36 bg-surface" aria-label="Selected work examples">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="space-y-8 max-w-4xl mx-auto">
          {workItems.map((work, i) => (
            <article key={i} className="rounded-2xl bg-card border border-border p-8 lg:p-10 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.15em] uppercase font-medium text-primary">{work.category}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-6 text-balance">{work.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">Context</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{work.context}</p>
                </div>
                
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">The Problem</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{work.problem}</p>
                </div>
                
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">What We Did</p>
                  <ul className="space-y-2">
                    {work.activities.map((activity, j) => (
                      <li key={j} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">What Changed</p>
                  <p className="text-base text-foreground font-medium leading-relaxed">{work.outcome}</p>
                </div>

                <div className="pt-4">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium">Playbook Extracted</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{work.playbook}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

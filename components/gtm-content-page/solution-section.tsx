import Link from 'next/link'

const pillars = [
  {
    title: 'Positioning and ICP definition',
    body: 'Every content system starts with a clear answer to who the content is for, what problem it solves for them, and what makes this company the right choice. Without this, content production creates noise.',
  },
  {
    title: 'Topic cluster architecture',
    body: 'We map the keyword landscape and buyer journey, then structure a cluster model with pillar pages and supporting articles that cover every angle a buyer searches for at each stage.',
  },
  {
    title: 'Content production workflow',
    body: 'We design the brief-to-publish process: who owns each step, what the review cycle looks like, and how to produce two high-quality long-form pieces per month without the founder becoming the bottleneck.',
  },
  {
    title: 'Distribution infrastructure',
    body: 'Every published piece triggers a distribution sequence: LinkedIn posts, email newsletter segments, and internal Slack updates. Content does not go live and disappear. It gets pushed to every channel where buyers are.',
  },
  {
    title: 'CRM attribution and reporting',
    body: 'UTM parameters, first-touch and last-touch attribution, and a monthly pipeline report that shows which content is generating qualified leads and which is not. The system is measurable from day one.',
  },
]

export function GtmContentSolutionSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6 bg-primary/50" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">What we build</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance leading-tight mb-4 max-w-2xl">
          Five components that make the system work
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          A GTM content system is not a content calendar. It is a set of five connected components that each do a specific job. Remove any one of them and the pipeline does not compound.
        </p>

        <div className="space-y-px border border-border/40 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex gap-6 px-7 py-6 bg-card/20 hover:bg-card/40 transition-colors">
              <span className="text-xs font-mono text-primary/60 pt-1 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          See how this fits into the broader GTM motion in our{' '}
          <Link href="/gtm-systems-builder" className="text-primary hover:underline">GTM systems builder</Link>{' '}
          overview.
        </p>
      </div>
    </section>
  )
}

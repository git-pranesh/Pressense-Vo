const supportItems = [
  {
    title: 'Bug fixes within 24–48 hours',
    body: 'Every post-launch support window includes a committed response SLA. Critical issues are triaged same day. You are never left with a broken app and no one to call.',
  },
  {
    title: 'Dedicated developer, not a ticket queue',
    body: 'Your support contact is the same developer who built the app. They know the codebase, the data model, and the edge cases. You are not explaining context to a new person every time.',
  },
  {
    title: 'Video walkthroughs on handover',
    body: 'Every engagement ends with a recorded walkthrough of the admin interface, developer setup, and deployment process. Your team can onboard themselves without relying on us.',
  },
  {
    title: 'Architecture documentation in your workspace',
    body: 'The technical architecture document, data model diagram, and integration list are stored in your Replit workspace from day one. Any developer you bring in can get up to speed without a briefing call.',
  },
  {
    title: 'Post-launch support window included',
    body: 'Focused builds include a two-week support window. MVP builds include a four-week window. This covers bug fixes, environment issues, and deployment questions — no extra invoice.',
  },
  {
    title: 'Sprint retainer for ongoing development',
    body: 'Most clients continue on a monthly sprint retainer after the initial build. Each sprint adds features based on real user feedback. No lock-in — pause or cancel with two weeks notice.',
  },
]

export function ReplitAgencySupportSection() {
  return (
    <section id="support" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          After launch
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Support that does not disappear at handover
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Most Replit agencies hand over the code and move on. Pressense stays. Every engagement includes a post-launch support window, documentation that means it, and a dedicated developer who knows your codebase — not a generic support queue.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-border/40 bg-card flex flex-col gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-4">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Need ongoing development after launch?</p>
            <p className="text-sm text-muted-foreground">Sprint retainer pricing is scoped on a call — based on the features you want to add and the level of support you need.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 whitespace-nowrap"
          >
            Book a diagnostic
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

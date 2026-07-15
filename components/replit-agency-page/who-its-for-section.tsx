const rightFor = [
  {
    label: 'You have an idea but no dev team',
    body: 'You know exactly what the tool needs to do. You just need someone to build it. Replit development is ideal for founders who want to move from idea to working software without hiring a full engineering team or waiting six months for a dev shop quote.',
  },
  {
    label: 'You need an internal tool built fast',
    body: 'Your team is copy-pasting data between five systems every Monday morning. You have described the fix a dozen times. You need it built in two to four weeks, not scoped over three months. That is exactly what vibe coding on Replit is optimised for.',
  },
  {
    label: 'You have a Replit prototype that needs to go live',
    body: 'You built something with Replit Agent and it works in demo mode. Now it needs proper auth, a real database, error handling, and a deployment pipeline. We take Replit prototypes to production without rewriting from scratch.',
  },
  {
    label: 'You are a replit expert buyer at an SMB or scale-up',
    body: 'You have seen the Replit Solution Partner Program. The enterprise partners charge $500K retainers and serve Fortune 500 accounts. Your company has 10 to 200 people and needs a partner who builds specifically for your scale. Pressense is that partner.',
  },
]

const notFor = [
  {
    label: 'You need a consumer app with millions of users on day one',
    body: 'Replit is exceptional for founder-stage and team-scale products. High-volume consumer apps with unpredictable traffic spikes need infrastructure architecture we would spec separately.',
  },
  {
    label: 'You have no defined user workflow',
    body: 'Replit development moves fast because the scope is tight. If you have not yet defined the specific thing your app needs to help one user type do, the diagnostic session should come before any build.',
  },
  {
    label: 'You want the cheapest quote, not the best build',
    body: 'We build production-quality software. You own clean TypeScript code, not a patchwork of AI-generated snippets. If budget is the primary filter and quality is secondary, we are not the right fit.',
  },
]

export function ReplitAgencyWhoItsForSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Who it&apos;s for
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-14 leading-tight">
          This is right for you if...
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border border-border/50 bg-card">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1 w-4 h-4 rounded-full border-2 border-primary flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">{item.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pl-7">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-foreground mb-8">This is NOT for you if...</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {notFor.map((item) => (
            <div key={item.label} className="p-5 rounded-xl border border-border/30 bg-secondary/20">
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CustomCrmWhyOffShelfFailsSection() {
  const problems = [
    {
      heading: 'Off-the-shelf CRM forces your team to work around the software',
      para1:
        'Every enterprise CRM is built on a generic contact-company-deal model. That model works when your sales process is generic. When it is not, your team spends twenty minutes per deal updating fields that do not match reality, creating workarounds in Notion or spreadsheets, and eventually ignoring the CRM entirely.',
      para2:
        'The result is a tool that costs money, requires admin time, and still does not give leadership accurate pipeline data. A custom CRM starts with your process. The fields, stages, automations, and reports are designed around what your team actually tracks, not what Salesforce decided was universal.',
    },
    {
      heading: 'Licensing costs compound as your team grows',
      para1:
        'HubSpot and Salesforce pricing scales per seat. At five users it looks affordable. At fifteen users, you are paying $2,000 to $3,000 per month for features your team does not use. That is $24,000 to $36,000 per year toward a vendor who owns your data and can raise prices at renewal.',
      para2:
        'Custom CRM development has a one-time build cost and a low hosting overhead. Once built, adding a new user costs nothing. Changing a workflow costs a small development sprint, not a licence upgrade or a consultant fee.',
    },
    {
      heading: 'Your data lives in the vendor\'s system, not yours',
      para1:
        'When you close a Salesforce or HubSpot account, exporting your data is deliberately difficult. Field mappings break. Historical activity logs are incomplete. Integrations stop working. Five years of customer history is held by a company whose business model depends on you staying.',
      para2:
        'A custom CRM built on Replit means the code, the database, and the logic are yours. You can move it to any hosting environment, hire any developer to modify it, and hand it to a new team without a re-platforming project.',
    },
    {
      heading: 'Generic automation does not match your actual handoffs',
      para1:
        'HubSpot Workflows and Salesforce Flow are powerful tools. They are also designed to work within the constraints of those platforms, on the data models those platforms define. When your process requires triggering an action in your billing tool, your project tracker, and your delivery team simultaneously, you end up building a fragile web of Zapier steps that breaks every time either tool changes an API.',
      para2:
        'Custom CRM development lets you build the automation once, correctly, in code that you own. The integrations are native to your business logic, not bolted on through a middleware layer that adds a third dependency.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-4xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Why off-the-shelf CRM fails founder-led businesses
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The problem is not that your team is bad at CRM. The problem is that the CRM was built for a different type of business.
        </p>

        <div className="space-y-12">
          {problems.map((p) => (
            <div key={p.heading}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.para1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.para2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

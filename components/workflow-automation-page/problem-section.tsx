export function ProblemSection() {
  const bottlenecks = [
    {
      heading: 'Why does my team keep doing the same manual work every week?',
      para1:
        'Every week, someone on your team pulls data from one system and pastes it into another. Someone else sends the same onboarding email sequence by hand. Another person compiles a report from four spreadsheets every Monday morning. These are not edge cases. They are your standard operating procedures.',
      para2:
        'This matters because the work compounds as you scale. At 10 people it is annoying. At 50 people it is a hiring problem. At 100 people it is a systems failure. Workflow automation consulting identifies these loops and eliminates them before they become structural blockers.',
    },
    {
      heading: 'What breaks when your tools do not talk to each other?',
      para1:
        'Most growing companies run on six to twelve different tools. CRM, billing, support, analytics, project management, and communication platforms all hold pieces of the same data. When those tools do not connect, your team becomes the integration layer.',
      para2:
        'Automation consulting maps those connections and builds the bridges. A lead enters your CRM and automatically gets a Slack notification, a follow-up task, and a tagged entry in your analytics dashboard. Nothing falls through because nobody is manually moving it.',
    },
    {
      heading: 'How much is manual work actually costing you?',
      para1:
        'If three people spend four hours per week each on manual reporting, reconciliation, and data entry, that is 12 hours per week, or roughly $25,000 to $40,000 in annual labour costs on tasks a $50-per-month tool could handle. Most companies we audit find they are carrying two to three times that.',
      para2:
        'The cost is not just money. It is the cognitive load on your best operators. The people who understand your business deeply are the ones doing the most manual work, because they are the only ones who know where everything lives.',
    },
    {
      heading: 'Can workflow automation work for a small team?',
      para1:
        'Yes. The highest ROI automation engagements we run are with teams of five to thirty people. A small team has fewer entrenched systems, faster decision cycles, and the most to gain from freeing up capacity. You do not need an enterprise IT budget to automate your core workflows.',
      para2:
        'We use Make, n8n, Zapier, and custom API connections depending on your tech stack and budget. We work around what you already have, not what we want you to buy.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance mb-12">
            Why your team is stuck doing work the computer should be doing
          </h2>
          <div className="space-y-10">
            {bottlenecks.map((item) => (
              <div key={item.heading}>
                <h3 className="font-semibold text-lg text-foreground mb-3">{item.heading}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{item.para1}</p>
                <p className="text-muted-foreground leading-relaxed">{item.para2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

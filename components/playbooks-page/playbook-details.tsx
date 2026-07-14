'use client'

export function PlaybookDetails() {
  const playbooks = [
    {
      id: 'founder-bottleneck',
      title: 'Fixing the Founder Bottleneck',
      whoFor: 'Founder-led businesses where too many decisions, approvals, sales inputs, client escalations, or operational details still depend on the founder.',
      symptoms: [
        'The team waits for the founder before moving forward',
        'Important decisions are stuck in the founder\'s head',
        'Growth creates more pressure instead of more leverage',
        'The founder is involved in too many small decisions',
        'Work slows down when the founder is unavailable',
      ],
      diagnose: [
        'Which decisions only the founder can currently make',
        'Which workflows pause without founder approval',
        'Which team members lack ownership',
        'Which processes are undocumented',
        'Which parts of the business are dependent on founder memory or instinct',
      ],
      fixFirst: 'Start by identifying the top 3 recurring decisions or workflows that consume the founder\'s time every week. Convert those into documented rules, ownership, and review systems.',
      build: [
        'Decision rules',
        'Role ownership map',
        'Weekly operating rhythm',
        'Approval workflows',
        'Dashboards for visibility',
        'SOPs for repeated work',
        'Escalation rules for exceptions',
      ],
      measure: [
        'Number of decisions removed from the founder',
        'Time taken for approvals',
        'Tasks completed without founder involvement',
        'Team ownership clarity',
        'Reduction in repeated founder follow-ups',
      ],
      mistakes: [
        'Hiring more people before defining ownership',
        'Automating a broken process',
        'Expecting the team to "figure it out"',
        'Keeping every decision dependent on founder judgment',
      ],
    },
    {
      id: 'pricing-leakage',
      title: 'Pricing Leakage & Revenue Clarity',
      whoFor: 'Businesses that are getting customers but may be underpricing, discounting too much, selling unclear packages, or losing margin through poor pricing structure.',
      symptoms: [
        'Revenue is growing but profit is not',
        'Pricing changes from client to client',
        'Sales depends on discounts',
        'Customers do not clearly understand the value',
        'The business is busy but margins feel weak',
      ],
      diagnose: [
        'Current pricing model',
        'Offer structure',
        'Discount patterns',
        'Sales objections',
        'Customer segments',
        'Delivery effort per customer',
        'Margin leakage points',
      ],
      fixFirst: 'Clarify what the business actually sells, who it is most valuable for, and where pricing does not match effort, value, or complexity.',
      build: [
        'Clear offer structure',
        'Pricing tiers or packages',
        'Qualification rules',
        'Discount boundaries',
        'Sales narrative',
        'Margin visibility dashboard',
        'Proposal templates',
      ],
      measure: [
        'Average deal value',
        'Discount frequency',
        'Gross margin',
        'Sales cycle quality',
        'Customer fit',
        'Delivery effort vs revenue',
      ],
      mistakes: [
        'Lowering price to fix weak positioning',
        'Creating too many custom packages',
        'Selling to the wrong segment',
        'Not linking pricing to delivery effort',
      ],
    },
    {
      id: 'sales-marketing',
      title: 'Building a Sales-Marketing Connection',
      whoFor: 'Companies where marketing creates activity, but sales does not consistently convert it into pipeline, revenue, or clear learning.',
      symptoms: [
        'Marketing and sales explain the offer differently',
        'Leads come in but quality is unclear',
        'Sales does not use marketing assets',
        'Marketing does not know why leads are lost',
        'Follow-up depends on individuals',
      ],
      diagnose: [
        'Lead sources',
        'Lead quality',
        'Sales objections',
        'Follow-up process',
        'Messaging consistency',
        'Handoff between marketing and sales',
        'Content gaps in the sales process',
      ],
      fixFirst: 'Map the buyer journey from first touch to closed deal. Identify where the buyer becomes confused, where follow-up breaks, and where sales needs better assets.',
      build: [
        'Shared messaging framework',
        'Lead qualification criteria',
        'Sales enablement content',
        'Follow-up sequences',
        'CRM stages',
        'Objection handling assets',
        'Feedback loop between sales and marketing',
      ],
      measure: [
        'Lead quality',
        'Follow-up speed',
        'Conversion by source',
        'Sales objections',
        'Stage drop-offs',
        'Content usage by sales team',
      ],
      mistakes: [
        'Treating marketing and sales as separate problems',
        'Generating more leads before fixing follow-up',
        'Creating content without sales input',
        'Measuring traffic instead of qualified opportunities',
      ],
    },
    {
      id: 'onboarding',
      title: 'Customer Onboarding That Sticks',
      whoFor: 'Businesses that win customers but struggle with activation, onboarding, retention, handover, customer education, or early success.',
      symptoms: [
        'Customers need too much manual guidance',
        'Onboarding varies by team member',
        'Customers do not fully use what they bought',
        'Support questions repeat',
        'Early churn or dissatisfaction appears after purchase',
      ],
      diagnose: [
        'First 30 days after purchase',
        'Customer expectations',
        'Handover from sales to delivery',
        'Training or education gaps',
        'Success milestones',
        'Repeated support issues',
        'Ownership of onboarding',
      ],
      fixFirst: 'Define the first successful outcome the customer must reach. Then design onboarding around helping them reach that outcome quickly and clearly.',
      build: [
        'Onboarding checklist',
        'Welcome sequence',
        'Customer education assets',
        'Milestone tracking',
        'Internal handover process',
        'Support knowledge base',
        'Success dashboard',
      ],
      measure: [
        'Time to first value',
        'Onboarding completion rate',
        'Repeated support issues',
        'Customer engagement',
        'Early retention',
        'Customer satisfaction signals',
      ],
      mistakes: [
        'Assuming the customer knows what to do next',
        'Overloading the customer with too much information',
        'Leaving onboarding to individual team members',
        'Not defining first value clearly',
      ],
    },
    {
      id: 'visibility-brand',
      title: 'Visibility & Personal Brand Systems',
      whoFor: 'Founders, doctors, experts, consultants, and professionals who have deep expertise but inconsistent visibility, weak content systems, or no structured authority engine.',
      symptoms: [
        'Expertise is strong but not visible enough',
        'Content is inconsistent',
        'The website does not build trust',
        'The founder or expert has no repeatable content process',
        'Growth depends mostly on referrals or manual networking',
      ],
      diagnose: [
        'Positioning',
        'Audience clarity',
        'Trust signals',
        'Content themes',
        'Website clarity',
        'Distribution channels',
        'Time available for content',
      ],
      fixFirst: 'Clarify what the expert should be known for and who needs to trust them. Then build a repeatable system to turn expertise into visible market assets.',
      build: [
        'Positioning narrative',
        'Website copy',
        'Authority content pillars',
        'LinkedIn/content workflow',
        'AI-assisted content system',
        'Lead magnet or diagnostic asset',
        'PR and credibility layer',
      ],
      measure: [
        'Content consistency',
        'Qualified inbound conversations',
        'Profile or website visits',
        'Lead quality',
        'Referral conversion',
        'Authority signals',
      ],
      mistakes: [
        'Posting random content without positioning',
        'Copying generic personal-brand advice',
        'Creating content that does not connect to business outcomes',
        'Depending fully on the expert\'s manual time',
      ],
    },
    {
      id: 'systems-audit',
      title: 'Systems Audit & Debt Clearance',
      whoFor: 'Businesses running on spreadsheets, WhatsApp, email, disconnected SaaS tools, manual reporting, or workflows that worked earlier but are now slowing growth.',
      symptoms: [
        'Too many spreadsheets',
        'Repeated manual work',
        'Reporting is slow or unreliable',
        'Teams use different tools without one source of truth',
        'Errors increase as the business grows',
        'Founders lack visibility into operations',
      ],
      diagnose: [
        'Core workflows',
        'Manual handoffs',
        'Data duplication',
        'Reporting delays',
        'Approval bottlenecks',
        'Tool overlap',
        'Processes that break at scale',
      ],
      fixFirst: 'Identify the highest-friction workflow that repeats every week and affects revenue, delivery, reporting, or customer experience. Fix one critical workflow before rebuilding everything.',
      build: [
        'Workflow map',
        'Internal dashboard',
        'CRM/ERP-lite system',
        'Custom internal tool',
        'Automation layer',
        'Reporting system',
        'Ownership and escalation rules',
      ],
      measure: [
        'Manual hours reduced',
        'Reporting speed',
        'Error rate',
        'Workflow completion time',
        'Visibility for founders/managers',
        'Team adoption',
      ],
      mistakes: [
        'Buying another tool before mapping the process',
        'Automating unclear workflows',
        'Rebuilding everything at once',
        'Ignoring team adoption',
      ],
    },
  ]

  return (
    <section className="py-28 lg:py-36 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        {playbooks.map((playbook) => (
          <article
            key={playbook.id}
            id={`playbook-${playbook.id}`}
            className="mb-20 lg:mb-28 scroll-mt-20"
          >
            <div className="max-w-4xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-8">
                {playbook.title}
              </h3>

              {/* Who this is for */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  Who this is for
                </h4>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {playbook.whoFor}
                </p>
              </div>

              {/* Symptoms */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  Symptoms
                </h4>
                <ul className="space-y-2">
                  {playbook.symptoms.map((symptom, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to diagnose */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  What to diagnose
                </h4>
                <ul className="space-y-2">
                  {playbook.diagnose.map((item, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to fix first (highlighted) */}
              <div className="mb-10 p-6 rounded-xl bg-secondary/30 border border-primary/20">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  What to fix first
                </h4>
                <p className="text-base lg:text-lg text-foreground leading-relaxed font-medium">
                  {playbook.fixFirst}
                </p>
              </div>

              {/* What to build */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  What to build
                </h4>
                <ul className="space-y-2">
                  {playbook.build.map((item, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to measure */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  What to measure
                </h4>
                <ul className="space-y-2">
                  {playbook.measure.map((item, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common mistakes */}
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  Common mistakes
                </h4>
                <ul className="space-y-2">
                  {playbook.mistakes.map((mistake, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-border/40">
                <a
                  href={`/diagnostic?constraint=${playbook.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
                >
                  Diagnose This Constraint
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Divider between playbooks */}
            {playbook.id !== 'systems-audit' && (
              <div className="mt-20 lg:mt-28 pt-20 lg:pt-28 border-t border-border/40" />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

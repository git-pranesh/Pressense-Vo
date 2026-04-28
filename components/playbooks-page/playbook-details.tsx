export function PlaybookDetails() {
  const playbooks = [
    {
      id: 'founder-bottleneck',
      title: 'Fixing the Founder Bottleneck',
      whoFor: 'Founder-led businesses where decisions are slowed by the founder\'s involvement in every choice. Usually between $500K–$5M in revenue.',
      symptoms: [
        'Every operational decision waits for founder approval.',
        'Founder is the primary sales, strategy, and customer relationships.',
        'Team hesitates to make decisions without founder input.',
        'Growth is ceiling-ed by founder\'s time and energy.',
        'Delegation attempts fail because systems are unclear.',
      ],
      diagnose: [
        'Map all decisions made in the last 30 days. Who made them? How long did they take?',
        'Interview the top 5 team members. Ask: "When do you feel blocked waiting for the founder?"',
        'Audit: Which decisions actually need founder input vs. which are habit?',
        'Calculate founder\'s time spent on non-strategic work (operational, tactical, repetitive).',
      ],
      fixFirst: 'Create a decision framework that clarifies which decisions belong to which roles. Start with 3–5 high-frequency decisions that the founder can delegate immediately.',
      build: [
        'Document decision-making criteria for delegated decisions.',
        'Train the team member taking ownership of each decision.',
        'Establish a weekly check-in cadence instead of ad-hoc approval cycles.',
        'Create clear escalation paths for decisions that do need founder input.',
        'Implement 30-day trial periods for new decision ownership.',
      ],
      measure: [
        'Founder time spent in operational meetings (should decrease 20–30% in 90 days).',
        'Average decision turnaround time (should drop by 50%+).',
        'Team confidence in decision-making autonomy (survey quarterly).',
        'Number of decisions delegated successfully without escalation.',
      ],
      mistakes: [
        'Delegating without clarity — team doesn\'t know decision criteria.',
        'Assuming team will fill the gap without structure or training.',
        'Founder still inserting themselves into delegated decisions out of habit.',
        'Not measuring the impact — no visibility into whether delegation is working.',
      ],
    },
    {
      id: 'pricing-leakage',
      title: 'Pricing Leakage & Revenue Clarity',
      whoFor: 'SaaS, services, and product businesses losing revenue to pricing inconsistency, discounting, package confusion, or unclear packaging. Any size from $1M–$100M+ ARR.',
      symptoms: [
        'Deals close at different prices for the same service.',
        'Sales team discounts without guardrails or tracking.',
        'Customers don\'t understand what they\'re paying for.',
        'Product packaging doesn\'t match how customers actually buy.',
        'Revenue per customer varies wildly.',
        'Margin pressure despite revenue growth.',
      ],
      diagnose: [
        'Audit all closed deals in the last 12 months. Calculate actual price paid vs. list price.',
        'Quantify discounting: What % of deals include discounts? How deep are they?',
        'Interview sales team: What reasons justify discounts? Are those reasons consistent?',
        'Customer survey: Do customers understand what they\'re paying for? Would they pay more?',
        'Review product packaging: Does it match customer segments and buying patterns?',
      ],
      fixFirst: 'Establish a baseline pricing model and discount policy. Eliminate mystery pricing — every deal should have clear pricing logic documented.',
      build: [
        'Define 2–3 clear packaging options (instead of customized pricing).',
        'Set discount guardrails: max discount %, approval process, justification required.',
        'Create a pricing philosophy document: why this price, not that price.',
        'Implement pricing tracking in CRM so discounting is visible.',
        'Train sales team on packaging and price positioning.',
        'Set up quarterly pricing reviews to catch leakage.',
      ],
      measure: [
        'Average deal price (track monthly — should stabilize and trend upward).',
        'Discount rate as % of revenue (target: <15% for mature businesses).',
        'Revenue per customer segment (should be more predictable).',
        'Time to close as pricing clarity increases.',
      ],
      mistakes: [
        'Letting sales team customize everything — this perpetuates inconsistency.',
        'Setting pricing without understanding customer willingness to pay.',
        'Not tracking discounts — flying blind on pricing health.',
        'Ignoring the psychological impact of lowered pricing on brand perception.',
      ],
    },
    {
      id: 'sales-marketing',
      title: 'Building a Sales-Marketing Connection',
      whoFor: 'B2B businesses where sales and marketing operate independently, generating misalignment, wasted spend, and missed leads. Usually $2M–$50M ARR.',
      symptoms: [
        'Marketing generates leads sales team doesn\'t follow up on.',
        'Sales complains marketing doesn\'t understand buyers.',
        'Marketing doesn\'t know win/loss reasons.',
        'Sales and marketing use different language and positioning.',
        'Content doesn\'t address actual sales objections.',
        'Lead quality is constantly disputed.',
      ],
      diagnose: [
        'Map lead flow: where do leads come from? How many actually reach sales? What\'s the conversion?',
        'Interview both teams separately: What do you think the other team\'s job is? What are their constraints?',
        'Audit messaging: sales deck vs. website vs. email. Are they consistent? Do they match customer language?',
        'Win/loss analysis: What did winning customers care about? What killed losing deals? Does marketing know?',
      ],
      fixFirst: 'Create a shared definition of ideal customer and the messaging that resonates with them. Make this visible to both teams.',
      build: [
        'Monthly sales-marketing syncs (not status meetings — strategic alignment).',
        'Shared lead SLA: What counts as a qualified lead? When does sales commit to follow-up?',
        'Marketing sits in on sales calls (at least quarterly) to understand real objections.',
        'Sales provides win/loss feedback to marketing (structured process).',
        'Create a shared content roadmap: what questions do buyers actually ask?',
        'Establish shared dashboards showing lead-to-customer metrics (visibility = alignment).',
      ],
      measure: [
        'Lead follow-up rate (% of leads contacted within 24 hours).',
        'Sales-qualified lead conversion rate (should improve as alignment increases).',
        'Time to first touch (should decrease).',
        'Win rate by lead source (reveals which messaging actually works).',
        'Sales team satisfaction with lead quality (survey quarterly).',
      ],
      mistakes: [
        'Assuming alignment without structured processes.',
        'Marketing optimizing for quantity of leads instead of quality.',
        'Sales not providing feedback, leaving marketing guessing.',
        'Different teams using different tools — no shared visibility.',
      ],
    },
    {
      id: 'onboarding',
      title: 'Customer Onboarding That Sticks',
      whoFor: 'SaaS and service businesses where customers slow to value or churn early. Especially important at $1M–$50M ARR.',
      symptoms: [
        'High early churn (lose customers in first 30–90 days).',
        'Long time to value — customers don\'t feel ROI quickly.',
        'Onboarding is manual and doesn\'t scale.',
        'High support load in first 30 days.',
        'Customers don\'t use key features.',
        'Net Retention is flat or declining.',
      ],
      diagnose: [
        'Map customer journey: from signup to first value. Where do they get stuck?',
        'Analyze early-churn cohorts: What do churned customers have in common?',
        'Interview customers at 30, 60, 90 days: When did you feel ROI? Where did you almost churn?',
        'Audit support tickets in first 30 days: What are the patterns?',
        'Feature adoption analysis: Which features drive retention? Which are ignored?',
      ],
      fixFirst: 'Identify the one moment of critical value. Build onboarding to get every customer to that moment within 7–14 days.',
      build: [
        'Create a step-by-step onboarding checklist (not a walkthrough — a set of milestone behaviors).',
        'Use progressive profiling: don\'t onboard everyone the same way.',
        'Automate the baseline onboarding so your team focuses on high-touch for high-value customers.',
        'Set 7-day, 30-day, and 90-day check-ins with milestones.',
        'Create content for common early-stage questions (reduce support load).',
        'Measure feature adoption and surface early warning signals for churn.',
      ],
      measure: [
        'Time to first key action (should be <7 days).',
        'Early churn rate at 30/60/90 days (track cohorts).',
        'Feature adoption rate (% using core features by day 30).',
        'Support ticket volume in onboarding period (should decrease with better onboarding).',
        'Net Retention (should improve as customers get more value faster).',
      ],
      mistakes: [
        'Generic onboarding that assumes all customers have the same path to value.',
        'Focusing on product walkthrough instead of milestone completion.',
        'Waiting for customers to ask for help instead of proactive check-ins.',
        'Not measuring when customers actually reach value.',
      ],
    },
    {
      id: 'visibility-brand',
      title: 'Visibility & Personal Brand Systems',
      whoFor: 'Experts, consultants, and founders who need systematic visibility without manually managing every post, email, or appearance.',
      symptoms: [
        'Expertise is known in the room but invisible to market.',
        'Inconsistent visibility — high activity bursts followed by silence.',
        'Opportunity cost: clients hire someone else who has better visibility.',
        'Personal brand building feels like full-time work on top of existing business.',
        'No clear narrative for the work or market position.',
      ],
      diagnose: [
        'Current visibility audit: Where are you visible today? To whom? With what message?',
        'Competitive set: Who else is claiming your space? What are they doing?',
        'Customer interviews: How do they discover experts? How do they evaluate authority?',
        'Content audit: What have you created? What\'s actually resonating?',
        'Time audit: How much time do you spend on visibility right now?',
      ],
      fixFirst: 'Choose one channel where your audience congregates. Pick one narrative. Build from there.',
      build: [
        'Define your positioning narrative (not your bio — why you matter in this market).',
        'Select 1–2 distribution channels based on where your audience actually is.',
        'Create a content engine: 1 pillar piece of work per week (article, essay, observation).',
        'Use AI assistance to amplify: repurpose one piece into 5 formats (email, social, newsletter, etc.).',
        'Build systematically: email list, thought leadership publication, or both.',
        'Establish partnerships/speaking to extend reach without doing all the work yourself.',
        'Track what\'s working and double down quarterly.',
      ],
      measure: [
        'Audience growth month-over-month (email list, followers, etc.).',
        'Engagement rate (how many people engage with your content).',
        'Inbound inquiry volume (the true measure of visibility working).',
        'Time spent on visibility activities (should stay consistent, not explode).',
      ],
      mistakes: [
        'Being everywhere — dilutes focus and increases workload.',
        'Content without a narrative — noise instead of authority.',
        'Not using AI or templates — building everything from scratch.',
        'Measuring activity instead of outcomes (posting ≠ visibility).',
      ],
    },
    {
      id: 'systems-audit',
      title: 'Systems Audit & Debt Clearance',
      whoFor: 'Any business experiencing slowness, bottlenecks, or high operational cost relative to revenue. Especially important before scaling to next level.',
      symptoms: [
        'Operations feel slow and costly relative to revenue.',
        'Manual work that should be automated.',
        'Tools don\'t integrate — data lives in silos.',
        'Scaling is hard; each new hire requires training on undocumented processes.',
        'Institutional knowledge is trapped in people, not systems.',
        'Audit or compliance finds gaps.',
      ],
      diagnose: [
        'Map all critical processes: sales, onboarding, support, finance, operations.',
        'For each process: Is it documented? Automated? Or manual and fragile?',
        'Tool audit: What tools do you use? Which are essential? Which are redundant?',
        'Data flow: Where does data live? How does it move between systems? How many manual steps?',
        'Cost analysis: How much operational time do each of your processes take?',
      ],
      fixFirst: 'Eliminate one manual process. Build one automation. Measure the impact (time saved, quality improved).',
      build: [
        'Prioritize: Which processes slow you down most? Start there.',
        'Document: Write the current process exactly as it happens.',
        'Redesign: What steps are unnecessary? Where can tools help?',
        'Automate: Set up the tool, integrate it, test it.',
        'Train: Show the team the new way.',
        'Measure: Track the impact. Did this save time? Improve quality?',
        'Repeat: Move to the next process.',
      ],
      measure: [
        'Operational time spent on each process (should decrease 20–40% per process).',
        'Error rate (should decrease with better systems).',
        'Cost per transaction or customer (should improve).',
        'Time to onboard new team members (should decrease as processes are documented).',
      ],
      mistakes: [
        'Buying tools before documenting the problem.',
        'Over-automating early (start simple).',
        'Building custom solutions instead of configuring existing tools.',
        'Not involving the team doing the work in redesign — they know the real pain points.',
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
            className="mb-28 scroll-mt-32"
          >
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground text-balance mb-8">
                {playbook.title}
              </h2>

              {/* Who this is for */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  Who this is for
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {playbook.whoFor}
                </p>
              </div>

              {/* Symptoms */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  Symptoms
                </h3>
                <ul className="space-y-2 max-w-3xl">
                  {playbook.symptoms.map((symptom, i) => (
                    <li key={i} className="text-base text-muted-foreground flex gap-3">
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to diagnose */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  What to diagnose
                </h3>
                <ul className="space-y-2 max-w-3xl">
                  {playbook.diagnose.map((item, i) => (
                    <li key={i} className="text-base text-muted-foreground flex gap-3">
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to fix first */}
              <div className="mb-8 p-6 rounded-xl bg-secondary/40 border border-border/40">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                  What to fix first
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  {playbook.fixFirst}
                </p>
              </div>

              {/* What to build */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  What to build
                </h3>
                <ul className="space-y-2 max-w-3xl">
                  {playbook.build.map((item, i) => (
                    <li key={i} className="text-base text-muted-foreground flex gap-3">
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to measure */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  What to measure
                </h3>
                <ul className="space-y-2 max-w-3xl">
                  {playbook.measure.map((item, i) => (
                    <li key={i} className="text-base text-muted-foreground flex gap-3">
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common mistakes */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                  Common mistakes
                </h3>
                <ul className="space-y-2 max-w-3xl">
                  {playbook.mistakes.map((mistake, i) => (
                    <li key={i} className="text-base text-muted-foreground flex gap-3">
                      <span className="text-primary/60 flex-shrink-0">·</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 rounded-xl border border-border/40 bg-secondary/30">
                <p className="text-lg text-foreground font-medium mb-4">
                  Ready to apply this playbook?
                </p>
                <a
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-highlight transition-colors"
                  aria-label="Apply to work with this playbook"
                >
                  Start a Diagnostic
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Divider between playbooks */}
            {playbook.id !== 'systems-audit' && (
              <div className="border-b border-border/40 my-20" aria-hidden="true" />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

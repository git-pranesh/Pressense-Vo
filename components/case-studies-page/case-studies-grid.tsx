import { CaseStudyCard } from './case-study-card'

const caseStudies = [
  {
    number: '01',
    title: 'The Enterprise GTM Team That Couldn\'t Close',
    context:
      'A funded B2B SaaS company with a 15-person sales team and strong inbound demand. Deal sizes were increasing, but close rates were falling. Leadership blamed the reps.',
    problem:
      'The sales motion hadn\'t evolved with the product. Reps were still running demos designed for SMB buyers. There was no enterprise playbook, no discovery framework, and no qualification criteria. Marketing was generating leads the sales team didn\'t know how to convert.',
    activities: [
      'Mapped the full buyer journey and identified where deals were stalling',
      'Redesigned the discovery process for enterprise buying committees',
      'Built a new qualification framework tied to deal velocity',
      'Created enablement materials: objection handling, ROI calculators, case study decks',
      'Implemented a weekly deal review cadence with clear exit criteria',
    ],
    outcomes: [
      'Close rate improved from 12% to 28% within two quarters',
      'Average deal cycle shortened by 3 weeks',
      'Sales team reported higher confidence in qualifying out early',
      'Pipeline quality improved—fewer zombie deals in the system',
    ],
  },
  {
    number: '02',
    title: 'The Founder-Led Business That Couldn\'t Let Go',
    context:
      'A 7-year-old service business doing $4M/year. Profitable, but entirely dependent on the founder for sales, delivery oversight, and key client relationships. Growth had plateaued.',
    problem:
      'The founder was the business. There was no documented delivery process, no sales system beyond referrals, and no delegation structure. Every decision flowed through one person. Burnout was imminent.',
    activities: [
      'Documented the founder\'s implicit knowledge into operating playbooks',
      'Designed a tiered service model to enable delegation of delivery',
      'Built a simple CRM workflow to systematise referral follow-ups',
      'Created a hiring profile and onboarding plan for a delivery lead',
      'Implemented weekly dashboards so the founder could manage by exception',
    ],
    outcomes: [
      'Founder reduced direct client involvement by 60%',
      'Hired and onboarded a delivery lead within 8 weeks',
      'Revenue grew 22% the following year with improved margins',
      'Founder regained strategic bandwidth to pursue a new product line',
    ],
  },
  {
    number: '03',
    title: 'The Expert-Led Growth Company That Couldn\'t Scale Revenue',
    context:
      'A consulting firm built around a well-known industry expert. Strong brand, consistent inbound inquiries, but revenue was flat. The team was busy, but not profitable.',
    problem:
      'The business had no pricing architecture. Services were scoped ad-hoc, with inconsistent margins. The team was undercharging high-value clients and over-servicing low-value ones. There was no system for qualifying who to work with.',
    activities: [
      'Audited past engagements to identify true cost-to-serve',
      'Designed a tiered service architecture with clear scope boundaries',
      'Built a pricing model based on value delivered, not hours spent',
      'Created an intake process to qualify clients before proposal stage',
      'Trained the team on consultative selling and scope control',
    ],
    outcomes: [
      'Average engagement value increased by 40%',
      'Margins improved from 18% to 35%',
      'Team reduced time spent on unprofitable work by 25 hours/week',
      'Client satisfaction remained high—NPS actually improved',
    ],
  },
  {
    number: '04',
    title: 'The Scaling Startup That Outgrew Its Systems',
    context:
      'A VC-backed company that had tripled headcount in 18 months. Revenue was growing, but so was chaos. Onboarding was slow, decisions were unclear, and teams were duplicating effort.',
    problem:
      'There was no operating system. Each team had built its own processes, tools, and norms. There was no single source of truth for goals, no clear ownership model, and no way to coordinate across functions.',
    activities: [
      'Facilitated cross-functional alignment on company-level priorities',
      'Designed an operating rhythm: weekly syncs, monthly reviews, quarterly planning',
      'Built a lightweight RACI model for key decisions',
      'Implemented a shared goal-tracking system with clear owners and metrics',
      'Created onboarding playbooks for each function',
    ],
    outcomes: [
      'Time-to-productivity for new hires dropped from 8 weeks to 4',
      'Cross-functional projects completed 30% faster',
      'Leadership team reported significantly less firefighting',
      'Company successfully raised Series B with a clearer growth narrative',
    ],
  },
]

export function CaseStudiesGrid() {
  return (
    <section
      id="case-studies-grid"
      className="py-28 lg:py-36"
      aria-labelledby="case-studies-grid-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-md mb-16">
          <h2
            className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground text-balance"
            id="case-studies-grid-heading"
          >
            Four engagements. Four broken systems. Four fixes.
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.number} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}

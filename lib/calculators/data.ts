import type { CalculatorMeta } from './types'

export const calculatorsData: CalculatorMeta[] = [
  {
    id: 'cac',
    slug: 'cac-calculator',
    title: 'Customer Acquisition Cost Calculator',
    shortDescription: 'Calculate your blended and fully-loaded CAC.',
    description:
      'Understand the true cost of acquiring a new customer. Essential for evaluating marketing channel efficiency and scaling sales teams.',
    category: 'Unit Economics',
    formula: 'CAC = Total Sales & Marketing Spend / New Customers Acquired',
    benchmarks: 'B2B SaaS typical: $200-$1,500. Enterprise: $5,000+',
    relatedSlugs: ['ltv-cac-ratio-calculator', 'cac-payback-calculator', 'ltv-calculator'],
    faqs: [
      {
        question: 'Should salaries be included in CAC?',
        answer:
          'Yes. Fully-loaded CAC must include salaries, commissions, benefits, tools, and overhead for your sales and marketing teams — not just ad spend. Excluding people cost is the most common way teams flatter their CAC.',
      },
      {
        question: "What's the difference between blended and channel CAC?",
        answer:
          'Blended CAC divides total spend by total customers (including organic). Channel CAC isolates spend and customers for a specific channel like paid search. Use blended CAC for board metrics; use channel CAC for internal allocation decisions.',
      },
      {
        question: 'Should organic customers be included in CAC?',
        answer:
          "There are two valid approaches. 'Paid CAC' divides paid spend by paid customers only — useful for ad efficiency. 'Blended CAC' includes everyone — useful for understanding the real cost-to-acquire across your business model.",
      },
      {
        question: "What's a healthy CAC by ACV?",
        answer:
          'Rule of thumb: CAC should be under one-third of first-year ACV for SMB SaaS, and under one-half for mid-market. Enterprise can support higher ratios because contracts are longer and expansion is bigger.',
      },
      {
        question: 'How do I lower CAC without hurting growth?',
        answer:
          "Audit channel-by-channel CAC and shut off the worst 20% of spend — usually it's a non-trivial portion. Improve mid-funnel conversion (demo show rate, proposal-to-close). Compress sales cycle by raising lead quality through sharper ICP filtering.",
      },
    ],
  },
  {
    id: 'ltv',
    slug: 'ltv-calculator',
    title: 'Customer Lifetime Value Calculator',
    shortDescription: 'Determine the total revenue expected from a customer.',
    description:
      'Calculate how much a single customer is worth over their entire relationship with your business. Vital for setting acquisition budgets.',
    category: 'Unit Economics',
    formula: 'LTV = (ARPU × Gross Margin %) / Monthly Churn Rate',
    benchmarks: 'SMB: $1k-$5k. Mid-market: $10k-$50k. Enterprise: $100k+',
    relatedSlugs: ['cac-calculator', 'ltv-cac-ratio-calculator', 'churn-rate-calculator'],
    faqs: [
      {
        question: 'Why include gross margin in LTV?',
        answer:
          'Gross margin accounts for the cost of delivering your software (hosting, support, payment processing, customer success). Revenue is not all profit — only the margin is what your business actually retains and can reinvest.',
      },
      {
        question: 'How do I increase LTV?',
        answer:
          'Three levers: increase ARPU through expansion revenue and pricing, reduce churn to extend retention, or improve gross margin by automating support and infrastructure. Reducing churn typically has the biggest compounding effect.',
      },
      {
        question: "What's wrong with the simple LTV formula?",
        answer:
          'The formula assumes constant churn and ARPU forever. In reality, both change — surviving customers tend to churn less and expand more. For investor-grade LTV, use cohort-based analysis, not steady-state formulas.',
      },
      {
        question: 'Should I use customer or revenue churn for LTV?',
        answer:
          'Use net revenue churn (after expansion) if you have strong expansion motion — it produces a more accurate, often much higher, LTV. Use gross customer churn for a conservative number you can defend.',
      },
    ],
  },
  {
    id: 'ltv-cac-ratio',
    slug: 'ltv-cac-ratio-calculator',
    title: 'LTV:CAC Ratio Calculator',
    shortDescription: 'Measure the ROI of your customer acquisition.',
    description:
      "The ultimate gauge of your business model's sustainability. Are you generating enough value from customers to justify what it costs to acquire them?",
    category: 'Unit Economics',
    formula: 'Ratio = LTV / CAC',
    benchmarks: '< 1: Unhealthy. 3: Ideal. > 5: Under-investing in growth.',
    relatedSlugs: ['ltv-calculator', 'cac-calculator', 'cac-payback-calculator'],
    faqs: [
      {
        question: "Why is a ratio greater than 5 considered 'under-investing'?",
        answer:
          "If your ratio is extremely high, you're likely leaving growth on the table — competitors will out-spend you and capture market share. Press the gas: increase ad spend, hire more reps, or expand into adjacent channels.",
      },
      {
        question: 'How to fix a poor LTV:CAC ratio?',
        answer:
          'Either lower CAC (more efficient channels, better conversion, sharper ICP) or raise LTV (reduce churn, raise ARPU, drive expansion). LTV improvements compound, so retention investments often pay back faster than CAC reduction efforts.',
      },
      {
        question: 'Why is 3:1 the SaaS gold standard?',
        answer:
          "It balances growth and efficiency. At 3:1, you're earning enough multiple on each acquisition dollar to fund the next one and still generate margin. Below 3:1 risks running out of cash; above 5:1 means you're over-saving and under-shipping growth.",
      },
    ],
  },
  {
    id: 'burn-rate',
    slug: 'burn-rate-calculator',
    title: 'Burn Rate & Runway Calculator',
    shortDescription: 'Calculate how fast you are spending cash.',
    description:
      'Understand your net cash consumption and how many months your company can survive before needing additional funding or reaching profitability.',
    category: 'Finance',
    formula: 'Net Burn = Monthly Expenses - Monthly Revenue. Runway = Cash in Bank / Net Burn.',
    benchmarks: 'Pre-seed: $10k-$50k/mo. Seed: $50k-$200k/mo. Target 18-24 mo runway.',
    relatedSlugs: ['saas-growth-calculator', 'break-even-calculator'],
    faqs: [
      {
        question: 'What is gross vs. net burn?',
        answer:
          'Gross burn is your total monthly expenses regardless of revenue. Net burn is expenses minus revenue. Investors focus on net burn for runway, but gross burn matters when revenue is volatile or contract-dependent.',
      },
      {
        question: 'When should I raise money?',
        answer:
          "Ideally with 9-12 months of runway left. Raises take 4-6 months to close, and entering negotiations with under 6 months destroys leverage. The best time to raise is when you don't desperately need it.",
      },
      {
        question: 'How much runway should I target?',
        answer:
          "Most investors expect 18-24 months post-raise. That's enough to hit milestones for the next round without rushing back into fundraising. Less than 12 months suggests under-raising; more than 30 months suggests under-spending.",
      },
    ],
  },
  {
    id: 'churn-rate',
    slug: 'churn-rate-calculator',
    title: 'Churn Rate Calculator',
    shortDescription: 'Measure customer and revenue attrition.',
    description:
      'Calculate the percentage of customers or revenue lost over a given period. High churn is the silent killer of SaaS businesses.',
    category: 'Retention',
    formula: 'Churn Rate = (Lost Value / Starting Value) × 100',
    benchmarks: 'SMB: 3-7% monthly. Enterprise: < 1% monthly.',
    relatedSlugs: ['nrr-calculator', 'ltv-calculator', 'customer-health-score'],
    faqs: [
      {
        question: 'Customer churn vs Revenue churn?',
        answer:
          'Customer churn tracks logos lost. Revenue churn tracks dollars lost. You can have high customer churn but negative revenue churn if your retained customers expand significantly. Both numbers tell a story; report both.',
      },
      {
        question: "What is a 'good' churn rate?",
        answer:
          'It depends on your market. Selling to very small businesses naturally yields higher churn (3-7% monthly) because SMBs go out of business or pivot. Mid-market should target 1-2% monthly; enterprise should be under 1% monthly.',
      },
      {
        question: 'How do I diagnose where churn is coming from?',
        answer:
          'Slice churn by cohort (signup month), segment (size, industry), and tenure. Onboarding churn (first 30 days) means activation is broken. Mid-tenure churn means value is fading. Late-tenure churn often signals a competitive substitute or budget event.',
      },
    ],
  },
  {
    id: 'nrr',
    slug: 'nrr-calculator',
    title: 'Net Revenue Retention Calculator',
    shortDescription: 'Calculate growth from your existing customer base.',
    description:
      'Net Revenue Retention (NRR) measures revenue retained from existing customers, including expansion, downgrades, and churn. >100% means you grow even without new sales.',
    category: 'Retention',
    formula: 'NRR = (Start MRR + Expansion - Contraction - Churned) / Start MRR',
    benchmarks: 'Good: 100%+. Great: 110%+. Best-in-class: 120%+.',
    relatedSlugs: ['churn-rate-calculator', 'saas-growth-calculator', 'arr-mrr-calculator'],
    faqs: [
      {
        question: 'Why is NRR over 100% important?',
        answer:
          "It indicates 'net negative churn' — your existing book grows even with zero new logos. This is the single highest-leverage growth lever in SaaS, because expansion has near-zero CAC compared to new acquisition.",
      },
      {
        question: 'How do I improve NRR?',
        answer:
          'Implement usage-based pricing so customer growth translates to revenue automatically. Add seat-based or feature-tier upsells. Build customer success motions that proactively identify expansion triggers. Reduce contraction by aligning packaging with realized value.',
      },
      {
        question: "What's a benchmark NRR for public SaaS companies?",
        answer:
          'Top-quartile public SaaS companies report 120-130% NRR. Best-in-class enterprise (Snowflake, Datadog) historically reported 150%+. Sub-100% NRR is increasingly penalized by public markets.',
      },
    ],
  },
  {
    id: 'saas-growth',
    slug: 'saas-growth-calculator',
    title: 'SaaS Growth Calculator',
    shortDescription: 'Project your MRR and ARR growth over time.',
    description:
      'Model your SaaS revenue trajectory. Understand how small improvements in monthly growth compound over time to build a massive ARR machine.',
    category: 'SaaS Growth',
    formula: 'Future MRR = Starting MRR × (1 + Monthly Growth Rate) ^ Months',
    benchmarks: '10%+ monthly = early-stage strong, 5-10% = growing, <5% = stalling',
    relatedSlugs: ['burn-rate-calculator', 'ltv-cac-ratio-calculator', 'nrr-calculator'],
    faqs: [
      {
        question: 'What is a good SaaS growth rate?',
        answer:
          'Early stage (under $1M ARR) targets 10-15% monthly. Growth stage ($1M-$10M ARR) targets 5-10% monthly. Scale stage ($10M+ ARR) targets 40-60% annually. The benchmark drops as you grow because the same percentage applied to a larger base requires more absolute new revenue.',
      },
      {
        question: 'How does MRR compound?',
        answer:
          "SaaS revenue growth is exponential, not linear. A 10% monthly growth rate doesn't mean 120% annual growth — it means roughly 214% annual growth, because each month's growth is calculated against the prior month's larger base.",
      },
      {
        question: 'Should I prioritize growth rate or efficiency?',
        answer:
          "It depends on your funding stage and capital markets. In tight markets, the 'Rule of 40' applies: growth rate plus profit margin should exceed 40%. In hot markets, raw growth gets rewarded. Pick the one investors are pricing today.",
      },
    ],
  },
]

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculatorsData.find((c) => c.slug === slug)
}

export function getCalculatorsByCategory(category: CalculatorMeta['category']): CalculatorMeta[] {
  return calculatorsData.filter((c) => c.category === category)
}

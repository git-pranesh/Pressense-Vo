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
  {
    id: 'cac-payback',
    slug: 'cac-payback-calculator',
    title: 'CAC Payback Period Calculator',
    shortDescription: 'Find out how long it takes to recover acquisition costs.',
    description:
      'Calculate the number of months required to earn back the cash spent acquiring a customer. A crucial metric for capital efficiency.',
    category: 'Unit Economics',
    formula: 'Payback Months = CAC / (ARPU × Gross Margin %)',
    benchmarks: 'Excellent: < 12 months. Good: 12-18 months. Poor: > 24 months.',
    relatedSlugs: ['cac-calculator', 'ltv-cac-ratio-calculator', 'burn-rate-calculator'],
    faqs: [
      {
        question: 'Why does payback period matter?',
        answer:
          'Payback period determines how fast capital recycles. A 12-month payback means you can reinvest each acquisition dollar in growth within a year. A 36-month payback means scaling requires far more cash on hand for the same growth rate.',
      },
      {
        question: 'How does gross margin affect payback?',
        answer:
          'If your gross margin is 50%, only half of each revenue dollar goes toward paying back CAC. Going from 50% to 80% gross margin compresses payback by 37%. Margin improvement is often the highest-leverage way to fix payback.',
      },
      {
        question: 'Should I use ARR or MRR for payback?',
        answer:
          'Use monthly contribution margin (MRR × gross margin). The output is in months, which is the unit operators and investors actually use to compare across companies. Annual numbers obscure cash timing.',
      },
    ],
  },
  {
    id: 'arr-mrr',
    slug: 'arr-mrr-calculator',
    title: 'ARR / MRR Calculator',
    shortDescription: 'Decompose MRR into new, expansion, contraction, and churn.',
    description:
      'Convert between MRR and ARR while breaking down the four movements that drive net new MRR. Includes SaaS Quick Ratio for growth-quality scoring.',
    category: 'SaaS Growth',
    formula: 'Net New MRR = New + Expansion - Contraction - Churn. Quick Ratio = (New + Expansion) / (Contraction + Churn).',
    benchmarks: 'Quick Ratio: 4+ excellent, 2-4 healthy, 1-2 at risk, <1 unsustainable.',
    relatedSlugs: ['nrr-calculator', 'saas-growth-calculator', 'churn-rate-calculator'],
    faqs: [
      {
        question: "What's the difference between MRR and ARR?",
        answer:
          'MRR is monthly recurring revenue; ARR is MRR x 12. ARR is the standard metric for board reporting and valuation. MRR is the operational metric for tracking month-over-month movement. Both numbers describe the same business, just at different cadences.',
      },
      {
        question: 'What is the SaaS Quick Ratio?',
        answer:
          "Quick Ratio = (New MRR + Expansion MRR) / (Contraction MRR + Churned MRR). It measures growth efficiency: a ratio of 4 means you're adding $4 of revenue for every $1 leaking out. Public-grade SaaS companies generally run 3-4+.",
      },
      {
        question: 'What counts as expansion vs new?',
        answer:
          "New MRR is from a brand-new logo. Expansion MRR is revenue growth from an existing customer (more seats, higher tier, add-on modules). Drawing this line clearly is essential — investors will ask, and conflating them hides the health of your retention motion.",
      },
    ],
  },
  {
    id: 'saas-valuation',
    slug: 'saas-valuation-calculator',
    title: 'SaaS Valuation Calculator',
    shortDescription: 'Estimate SaaS company value from ARR, growth, and NRR.',
    description:
      'Apply growth-adjusted ARR multiples plus NRR and Rule of 40 modifiers to estimate enterprise value. The same framework used by SaaS investors and acquirers.',
    category: 'Finance',
    formula: 'Valuation = ARR × Multiple. Multiple driven by growth rate, NRR, and Rule of 40.',
    benchmarks: 'Public SaaS median: 6-8x ARR. Top quartile: 12x+ at high growth and NRR > 120%.',
    relatedSlugs: ['arr-mrr-calculator', 'nrr-calculator', 'saas-growth-calculator'],
    faqs: [
      {
        question: "What's the Rule of 40?",
        answer:
          'Growth Rate % + Profit Margin % >= 40. It captures the tradeoff between growth and efficiency: a company can be 50% growth and -10% margin (40), or 20% growth and 20% margin (40), and both clear the bar. Below 40 typically gets a valuation discount.',
      },
      {
        question: 'Why does NRR matter so much for valuation?',
        answer:
          'NRR > 100% means the existing book grows even with zero new logos — a near-zero-CAC growth engine. Public markets reward this with multiple expansion: companies at 130%+ NRR consistently trade at 1.3-1.5x the multiple of comparable companies at 100% NRR.',
      },
      {
        question: 'Are these multiples realistic in current markets?',
        answer:
          'Multiples compress and expand with capital markets. The framework here uses normalized post-2023 multiples. In hot markets, multiply outputs by 1.3-1.5x; in cold markets, by 0.6-0.8x. Use this as a relative benchmark, not an absolute number.',
      },
    ],
  },
  {
    id: 'icp-score',
    slug: 'icp-score-calculator',
    title: 'Ideal Customer Profile Score',
    shortDescription: 'Grade prospects against your ideal customer criteria.',
    description:
      'Evaluate how well a prospect matches your Ideal Customer Profile. Focus sales resources on high-probability, high-value accounts.',
    category: 'Strategy',
    formula: 'ICP Score = Weighted sum of firmographic and demographic fit.',
    benchmarks: 'Tier A: >85. Tier B: 70-85. Tier C/D: <70.',
    relatedSlugs: ['lead-scoring-calculator', 'funnel-conversion-calculator'],
    faqs: [
      {
        question: 'What makes a good ICP?',
        answer:
          "A good ICP describes who gets the most value from your product, who is fastest to close, and who has the highest retention. Look at your top-decile customers by NRR and tenure — that's your real ICP, not your wishlist.",
      },
      {
        question: 'Should we reject low ICP scores?',
        answer:
          'Not always reject, but always prioritize. Tier A gets senior AE attention. Tier B gets standard cycles. Tier C/D should go to automated low-touch nurture or be referred out. Burning AE cycles on misfit accounts is the most expensive mistake in sales.',
      },
      {
        question: 'How is ICP different from a buyer persona?',
        answer:
          'ICP describes the company (firmographics: size, industry, tech stack, growth stage). Persona describes the buyer (role, seniority, pain). You need both — ICP determines whether to pursue an account; persona determines how to sell into it.',
      },
    ],
  },
  {
    id: 'gtm-roi',
    slug: 'gtm-roi-calculator',
    title: 'Go-to-Market ROI Calculator',
    shortDescription: 'Measure the return on your overall GTM investments.',
    description:
      'Assess the efficiency of your combined sales, marketing, and product-led growth spend relative to the revenue generated.',
    category: 'GTM/Marketing',
    formula: 'GTM ROI = ((Revenue - GTM Spend) / GTM Spend) × 100',
    benchmarks: 'Target >3x multiple for sustainable growth.',
    relatedSlugs: ['cac-calculator', 'content-marketing-roi-calculator', 'funnel-conversion-calculator'],
    faqs: [
      {
        question: 'What is included in GTM Spend?',
        answer:
          'All marketing program spend, sales commissions, GTM tooling, agency fees, events, and fully loaded salaries for the entire revenue org (sales, marketing, sales development, partner). If it touches a prospect or customer pre-close, it counts.',
      },
      {
        question: "What's a healthy GTM ROI multiple?",
        answer:
          "3x is the sustainable benchmark — every $1 of GTM spend returns $3 in new revenue. Below 2x suggests you're scaling unprofitably. Above 5x usually means you're under-investing in growth and competitors will out-pace you.",
      },
      {
        question: 'How do I improve GTM ROI quickly?',
        answer:
          'Three highest-leverage moves: kill the bottom 20% of channel spend (almost always recoverable), tighten ICP to raise close rates, and cut sales cycle by removing handoff friction. All three improve ROI without requiring more spend.',
      },
    ],
  },
  {
    id: 'content-roi',
    slug: 'content-marketing-roi-calculator',
    title: 'Content Marketing ROI Calculator',
    shortDescription: 'Evaluate the financial impact of your content efforts.',
    description:
      'Translate content views, leads, and conversion rates into actual revenue and ROI. Prove the value of inbound marketing.',
    category: 'GTM/Marketing',
    formula: 'ROI = ((Content Revenue - Content Spend) / Content Spend) × 100',
    benchmarks: 'Content takes 6-12mo to show strong positive ROI.',
    relatedSlugs: ['gtm-roi-calculator', 'funnel-conversion-calculator', 'lead-scoring-calculator'],
    faqs: [
      {
        question: 'How do I attribute revenue to content?',
        answer:
          "Use first-touch attribution to measure top-of-funnel impact, last-touch for bottom-of-funnel, and multi-touch for the full picture. Different attribution models tell different stories — track all three and don't optimize for any single one in isolation.",
      },
      {
        question: 'How long until content shows positive ROI?',
        answer:
          "Typical SEO-driven content takes 6-12 months to rank and start generating meaningful pipeline. If you're earlier than 6 months, expect to be in negative ROI territory; the math works on the back end. Investors who push for short-term content ROI usually break the asset.",
      },
      {
        question: 'What content types drive the highest ROI?',
        answer:
          'High-intent comparison pages and tools/calculators (like this one) typically convert at 5-10x the rate of top-of-funnel blog posts. They capture late-stage buyers actively evaluating solutions. Lead with intent, not volume.',
      },
    ],
  },
  {
    id: 'lead-scoring',
    slug: 'lead-scoring-calculator',
    title: 'B2B Lead Scoring Calculator',
    shortDescription: 'Rank inbound leads to prioritize sales outreach.',
    description:
      'Apply BANT or CHAMP frameworks to quantify prospect readiness. Ensure sales reps spend time on leads that will actually close.',
    category: 'GTM/Marketing',
    formula: 'Score = Sum of criteria points (Budget, Authority, Need, Timeline)',
    benchmarks: 'Hot: >80 (Immediate action). Warm: 50-80 (Nurture).',
    relatedSlugs: ['icp-score-calculator', 'funnel-conversion-calculator', 'content-marketing-roi-calculator'],
    faqs: [
      {
        question: 'BANT vs CHAMP — which should I use?',
        answer:
          "BANT (Budget, Authority, Need, Timeline) is seller-centric and works in well-defined buying processes. CHAMP (Challenges, Authority, Money, Prioritization) leads with the prospect's pain and works better for consultative sales and modern PLG-influenced buyers.",
      },
      {
        question: 'When should marketing pass a lead to sales?',
        answer:
          "When the lead crosses the agreed MQL threshold (fit + intent). The exact score depends on your pipeline conversion math — calibrate it backwards from the close rate you need, not by gut feel.",
      },
      {
        question: "What's the cost of bad lead scoring?",
        answer:
          "Reps waste cycles on cold leads, hot leads cool while waiting, and the funnel quietly leaks revenue. The single most powerful lever in B2B sales is response time — getting a hot lead to a rep within 5 minutes can lift conversion 5-10x vs. 24 hours.",
      },
    ],
  },
  {
    id: 'funnel-conversion',
    slug: 'funnel-conversion-calculator',
    title: 'Full-Funnel Conversion Calculator',
    shortDescription: 'Identify leaks in your revenue generation engine.',
    description:
      'Map your conversion rates from raw visitor all the way to closed-won customer. Find exactly where prospects are falling out of the pipeline.',
    category: 'GTM/Marketing',
    formula: 'Overall Conversion = Customers / Total Top-of-Funnel Visitors',
    benchmarks: 'Visitor to Lead: 2-5%. Lead to MQL: 10-30%. MQL to SQL: 20-50%. SQL to Close: 20-30%.',
    relatedSlugs: ['lead-scoring-calculator', 'content-marketing-roi-calculator', 'gtm-roi-calculator'],
    faqs: [
      {
        question: 'How do I fix a leaky funnel?',
        answer:
          'Find the single stage with the largest drop-off relative to benchmarks and fix that one first. Optimization at the weakest stage compounds through every later stage. Optimizing already-strong stages produces diminishing returns.',
      },
      {
        question: 'Why track revenue per visitor?',
        answer:
          'RPV normalizes funnel efficiency into a single number. If your RPV is $5, you can profitably spend up to $4.99 per visitor on ads. Tracking RPV over time reveals whether funnel improvements are real or just driven by traffic mix changes.',
      },
      {
        question: 'What are MQL vs SQL definitions?',
        answer:
          "MQL (Marketing Qualified Lead) meets a fit + intent threshold but hasn't been validated by sales. SQL (Sales Qualified Lead) has been actively reviewed and accepted by an AE. The handoff between MQL and SQL is where the most pipeline silently dies.",
      },
    ],
  },
  {
    id: 'break-even',
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator',
    shortDescription: 'Calculate when your business becomes profitable.',
    description:
      'Determine the unit volume or time required to cover fixed and variable costs. Essential for pricing decisions and profitability planning.',
    category: 'Finance',
    formula: 'Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit)',
    benchmarks: 'Earlier break-even = lower risk. Target break-even within 12-18 months for startups.',
    relatedSlugs: ['burn-rate-calculator', 'saas-pricing-calculator'],
    faqs: [
      {
        question: 'What are fixed vs variable costs?',
        answer:
          'Fixed costs stay constant regardless of sales volume (rent, salaries, software). Variable costs scale with each unit sold (hosting per user, payment processing fees). SaaS businesses typically have high fixed costs and low variable costs.',
      },
      {
        question: 'How does contribution margin affect break-even?',
        answer:
          'Higher contribution margin (price minus variable cost) means fewer units needed to break even. Increasing price or reducing variable costs directly compresses your break-even point.',
      },
      {
        question: 'Should I include one-time costs?',
        answer:
          'Include them in your initial break-even analysis to understand total cash required. But track ongoing break-even (excluding sunk costs) separately — that tells you when the business is self-sustaining.',
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

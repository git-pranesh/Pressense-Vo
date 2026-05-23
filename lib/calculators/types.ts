export interface CalculatorMeta {
  id: string
  slug: string
  title: string
  description: string
  category: 'SaaS Growth' | 'Unit Economics' | 'Retention' | 'GTM/Marketing' | 'Strategy' | 'Finance' | 'People & Ops'
  shortDescription: string
  formula: string
  benchmarks: string
  faqs: Array<{ question: string; answer: string }>
  relatedSlugs: string[]
}

export type CalculatorCategory = CalculatorMeta['category']

export const CALCULATOR_CATEGORIES: CalculatorCategory[] = [
  'SaaS Growth',
  'Unit Economics',
  'Retention',
  'GTM/Marketing',
  'Strategy',
  'Finance',
  'People & Ops',
]

export const CATEGORY_DESCRIPTIONS: Record<CalculatorCategory, string> = {
  'SaaS Growth': 'Revenue projection and growth modeling tools',
  'Unit Economics': 'CAC, LTV, and customer profitability metrics',
  'Retention': 'Churn, NRR, and customer health tracking',
  'GTM/Marketing': 'Marketing ROI and funnel optimization',
  'Strategy': 'Business planning and strategic decision tools',
  'Finance': 'Financial modeling and valuation calculators',
  'People & Ops': 'Team capacity and operational efficiency',
}

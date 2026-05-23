// SaaS Growth calculators
export function calculateSaasGrowth({ startingMRR, growthRatePercent, months }: { startingMRR: number; growthRatePercent: number; months: number }) {
  const projection = []
  let currentMRR = startingMRR
  for (let i = 1; i <= months; i++) {
    currentMRR = currentMRR * (1 + growthRatePercent / 100)
    projection.push({ month: i, mrr: currentMRR, arr: currentMRR * 12 })
  }
  const endingMRR = projection[projection.length - 1]?.mrr ?? startingMRR
  const endingARR = endingMRR * 12
  const totalRevenue = projection.reduce((sum, p) => sum + p.mrr, 0) + startingMRR
  return { projection, endingMRR, endingARR, totalRevenue }
}

// Unit Economics calculators
export function calculateCAC({ totalSpend, newCustomers }: { totalSpend: number; newCustomers: number }) {
  const cac = newCustomers > 0 ? totalSpend / newCustomers : 0
  return { cac }
}

export function calculateLTV({ arpu, grossMarginPercent, monthlyChurnPercent }: { arpu: number; grossMarginPercent: number; monthlyChurnPercent: number }) {
  const margin = arpu * (grossMarginPercent / 100)
  const monthsRetained = monthlyChurnPercent > 0 ? 1 / (monthlyChurnPercent / 100) : 600
  const ltv = margin * monthsRetained
  return { ltv, monthsRetained }
}

export function calculateLTVCACRatio({ ltv, cac }: { ltv: number; cac: number }) {
  const ratio = cac > 0 ? ltv / cac : 0
  let healthLabel: 'unhealthy' | 'okay' | 'healthy' | 'under-investing' = 'unhealthy'
  if (ratio >= 5) healthLabel = 'under-investing'
  else if (ratio >= 3) healthLabel = 'healthy'
  else if (ratio >= 1) healthLabel = 'okay'
  return { ratio, healthLabel }
}

export function calculateCACPayback({ cac, arpu, grossMarginPercent }: { cac: number; arpu: number; grossMarginPercent: number }) {
  const margin = arpu * (grossMarginPercent / 100)
  const paybackMonths = margin > 0 ? cac / margin : 0
  let rating = 'Poor'
  if (paybackMonths <= 12 && paybackMonths > 0) rating = 'Excellent'
  else if (paybackMonths <= 18) rating = 'Good'
  else if (paybackMonths <= 24) rating = 'Average'
  return { paybackMonths, rating }
}

// Finance calculators
export function calculateBurnAndRunway({ cashInBank, monthlyRevenue, monthlyExpenses }: { cashInBank: number; monthlyRevenue: number; monthlyExpenses: number }) {
  const grossBurn = monthlyExpenses
  const netBurn = monthlyExpenses - monthlyRevenue
  const runwayMonths = netBurn > 0 ? cashInBank / netBurn : Number.POSITIVE_INFINITY

  const depletion = []
  let balance = cashInBank
  let month = 1
  if (netBurn > 0) {
    while (balance > 0 && month <= 24) {
      balance -= netBurn
      if (balance < 0) balance = 0
      depletion.push({ month, balance })
      month++
    }
  }

  return { netBurn, grossBurn, runwayMonths, depletion }
}

export function calculateBreakEven({ fixedCosts, variableCostPerUnit, pricePerUnit, monthlySalesUnits }: { fixedCosts: number; variableCostPerUnit: number; pricePerUnit: number; monthlySalesUnits: number }) {
  const contributionMargin = pricePerUnit - variableCostPerUnit
  const breakevenUnits = contributionMargin > 0 ? fixedCosts / contributionMargin : Number.POSITIVE_INFINITY
  const breakevenMonths = monthlySalesUnits > 0 && isFinite(breakevenUnits) ? breakevenUnits / monthlySalesUnits : Number.POSITIVE_INFINITY
  const contributionMarginPercent = pricePerUnit > 0 ? (contributionMargin / pricePerUnit) * 100 : 0
  return { breakevenUnits, breakevenMonths, contributionMargin, contributionMarginPercent }
}

// Retention calculators
export function calculateChurnRate({ mode, startValue, lostValue }: { mode: 'customer' | 'revenue'; startValue: number; lostValue: number }) {
  const churnPercent = startValue > 0 ? (lostValue / startValue) * 100 : 0
  const retentionPercent = Math.max(0, 100 - churnPercent)
  const annualizedChurn = 100 * (1 - Math.pow(1 - churnPercent / 100, 12))
  return { churnPercent, retentionPercent, annualizedChurn }
}

export function calculateNRR({ startingMRR, expansion, contraction, churned }: { startingMRR: number; expansion: number; contraction: number; churned: number }) {
  const nrrPercent = startingMRR > 0 ? ((startingMRR + expansion - contraction - churned) / startingMRR) * 100 : 0
  let tier = 'Poor'
  if (nrrPercent >= 120) tier = 'Best-in-class'
  else if (nrrPercent >= 110) tier = 'Great'
  else if (nrrPercent >= 100) tier = 'Good'
  return { nrrPercent, tier }
}

export function calculateCustomerHealthScore({ factors }: { factors: Array<{ score: number; weight: number }> }) {
  const totalWeight = factors.reduce((sum, f) => sum + f.weight, 0)
  const score = totalWeight > 0 ? factors.reduce((sum, f) => sum + f.score * (f.weight / totalWeight), 0) * 10 : 0
  let zone: 'red' | 'yellow' | 'green' = 'red'
  if (score >= 80) zone = 'green'
  else if (score >= 50) zone = 'yellow'
  return { score, zone }
}

// GTM/Marketing calculators
export function calculateGTMROI({ spend, revenue }: { spend: number; revenue: number }) {
  const roiPercent = spend > 0 ? ((revenue - spend) / spend) * 100 : 0
  const roiMultiple = spend > 0 ? revenue / spend : 0
  let rating = 'Poor'
  if (roiMultiple >= 5) rating = 'Excellent'
  else if (roiMultiple >= 3) rating = 'Good'
  else if (roiMultiple >= 1) rating = 'Average'
  return { roiPercent, roiMultiple, rating }
}

export function calculateContentMarketingROI({ monthlySpend, leads, conversionPercent, dealValue }: { monthlySpend: number; leads: number; conversionPercent: number; dealValue: number }) {
  const customers = leads * (conversionPercent / 100)
  const revenue = customers * dealValue
  const roiPercent = monthlySpend > 0 ? ((revenue - monthlySpend) / monthlySpend) * 100 : 0
  return { customers, revenue, roiPercent }
}

export function calculateLeadScore({ scores }: { scores: Array<number> }) {
  const score = scores.reduce((a, b) => a + b, 0)
  let tier: 'Hot' | 'Warm' | 'Cold' = 'Cold'
  let action = 'Nurture'
  if (score >= 80) {
    tier = 'Hot'
    action = 'Sales Contact Immediate'
  } else if (score >= 50) {
    tier = 'Warm'
    action = 'MQL Nurture'
  }
  return { score, tier, action }
}

export function calculateFunnelConversion({ visitors, leads, mqls, sqls, opps, customers, dealValue }: { visitors: number; leads: number; mqls: number; sqls: number; opps: number; customers: number; dealValue: number }) {
  const v2l = visitors > 0 ? (leads / visitors) * 100 : 0
  const l2m = leads > 0 ? (mqls / leads) * 100 : 0
  const m2s = mqls > 0 ? (sqls / mqls) * 100 : 0
  const s2o = sqls > 0 ? (opps / sqls) * 100 : 0
  const o2c = opps > 0 ? (customers / opps) * 100 : 0

  const overall = visitors > 0 ? (customers / visitors) * 100 : 0
  const revenuePerVisitor = visitors > 0 ? (customers * dealValue) / visitors : 0

  const stages = [
    { name: 'Visitor to Lead', rate: v2l },
    { name: 'Lead to MQL', rate: l2m },
    { name: 'MQL to SQL', rate: m2s },
    { name: 'SQL to Opp', rate: s2o },
    { name: 'Opp to Customer', rate: o2c },
  ]

  const weakestStage = stages.reduce((min, stage) => (stage.rate < min.rate ? stage : min), stages[0])

  return { stageRates: stages, overallRate: overall, weakestStage: weakestStage.name, revenuePerVisitor }
}

// Strategy calculators
export function calculateICPScore({ scores }: { scores: Array<{ value: number; weight: number }> }) {
  const totalWeight = scores.reduce((sum, s) => sum + s.weight, 0)
  const score = totalWeight > 0 ? scores.reduce((sum, s) => sum + s.value * (s.weight / totalWeight), 0) * 20 : 0
  let tier: 'A' | 'B' | 'C' | 'D' = 'D'
  let action = 'Discard'
  if (score >= 85) {
    tier = 'A'
    action = 'Fast-track to Sales'
  } else if (score >= 70) {
    tier = 'B'
    action = 'Standard Nurture'
  } else if (score >= 50) {
    tier = 'C'
    action = 'Low-touch Nurture'
  }
  return { score, tier, action }
}

export function calculateRevenueProjection({ startingMRR, newMRRPerMonth, monthlyChurnPercent, expansionPercent, months }: { startingMRR: number; newMRRPerMonth: number; monthlyChurnPercent: number; expansionPercent: number; months: number }) {
  const projection: Array<{ month: number; mrr: number; arr: number }> = []
  let mrr = startingMRR
  let totalChurn = 0
  let totalExpansion = 0
  for (let i = 1; i <= months; i++) {
    const churn = mrr * (monthlyChurnPercent / 100)
    const expansion = mrr * (expansionPercent / 100)
    mrr = mrr - churn + expansion + newMRRPerMonth
    if (mrr < 0) mrr = 0
    totalChurn += churn
    totalExpansion += expansion
    projection.push({ month: i, mrr, arr: mrr * 12 })
  }
  const endingMRR = mrr
  const endingARR = mrr * 12
  const totalRevenue = projection.reduce((sum, p) => sum + p.mrr, 0)
  return { projection, endingMRR, endingARR, totalRevenue, totalChurn, totalExpansion }
}

export function calculateSaasValuation({ arr, yoyGrowthPercent, nrrPercent, ebitdaMargin }: { arr: number; yoyGrowthPercent: number; nrrPercent: number; ebitdaMargin: number }) {
  const ruleOf40 = yoyGrowthPercent + ebitdaMargin
  let multiple = 4
  if (yoyGrowthPercent >= 100) multiple = 12
  else if (yoyGrowthPercent >= 60) multiple = 9
  else if (yoyGrowthPercent >= 40) multiple = 7
  else if (yoyGrowthPercent >= 20) multiple = 5
  if (nrrPercent >= 130) multiple *= 1.3
  else if (nrrPercent >= 120) multiple *= 1.2
  else if (nrrPercent >= 110) multiple *= 1.1
  else if (nrrPercent < 100) multiple *= 0.75
  if (ruleOf40 >= 60) multiple *= 1.15
  else if (ruleOf40 < 30) multiple *= 0.8
  const valuation = arr * multiple
  return { valuation, multiple, ruleOf40 }
}

// Marketing ROI calculators
export function calculateMarketingROI({ marketingSpend, salaries, tools, attributedRevenue, gmPercent }: { marketingSpend: number; salaries: number; tools: number; attributedRevenue: number; gmPercent: number }) {
  const totalSpend = marketingSpend + salaries + tools
  const grossProfit = attributedRevenue * (gmPercent / 100)
  const roiPercent = totalSpend > 0 ? ((grossProfit - totalSpend) / totalSpend) * 100 : 0
  const ratio = totalSpend > 0 ? attributedRevenue / totalSpend : 0
  let rating: 'Poor' | 'Average' | 'Good' | 'Excellent' = 'Poor'
  if (ratio >= 5) rating = 'Excellent'
  else if (ratio >= 3) rating = 'Good'
  else if (ratio >= 1) rating = 'Average'
  return { totalSpend, grossProfit, roiPercent, ratio, rating }
}

export function calculatePPCROI({ adSpend, clicks, conversions, dealValue, gmPercent }: { adSpend: number; clicks: number; conversions: number; dealValue: number; gmPercent: number }) {
  const cpc = clicks > 0 ? adSpend / clicks : 0
  const cpa = conversions > 0 ? adSpend / conversions : 0
  const conversionRate = clicks > 0 ? (conversions / clicks) * 100 : 0
  const revenue = conversions * dealValue
  const grossProfit = revenue * (gmPercent / 100)
  const roas = adSpend > 0 ? revenue / adSpend : 0
  const profitRoas = adSpend > 0 ? grossProfit / adSpend : 0
  let rating: 'Poor' | 'Acceptable' | 'Strong' | 'Elite' = 'Poor'
  if (profitRoas >= 4) rating = 'Elite'
  else if (profitRoas >= 2) rating = 'Strong'
  else if (profitRoas >= 1) rating = 'Acceptable'
  return { cpc, cpa, conversionRate, revenue, grossProfit, roas, profitRoas, rating }
}

// ARR/MRR calculator
export function calculateARRMRR({ baseMRR, newMRR, expansionMRR, contractionMRR, churnedMRR }: { baseMRR: number; newMRR: number; expansionMRR: number; contractionMRR: number; churnedMRR: number }) {
  const netNewMRR = newMRR + expansionMRR - contractionMRR - churnedMRR
  const endingMRR = baseMRR + netNewMRR
  const endingARR = endingMRR * 12
  const leakage = contractionMRR + churnedMRR
  const inflows = newMRR + expansionMRR
  const quickRatio = leakage > 0 ? inflows / leakage : inflows > 0 ? Number.POSITIVE_INFINITY : 0
  let quality: 'Strong' | 'Healthy' | 'At risk' | 'Poor' = 'Poor'
  if (!isFinite(quickRatio) && inflows > 0) quality = 'Strong'
  else if (quickRatio >= 4) quality = 'Strong'
  else if (quickRatio >= 2) quality = 'Healthy'
  else if (quickRatio >= 1) quality = 'At risk'
  return { netNewMRR, endingMRR, endingARR, quickRatio, quality }
}

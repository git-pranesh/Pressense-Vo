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

// Account Health Score with zones
export function calculateAccountHealthScore({ factors }: { factors: Array<{ score: number; weight: number }> }) {
  const totalWeight = factors.reduce((sum, f) => sum + f.weight, 0)
  const score = totalWeight > 0 ? factors.reduce((sum, f) => sum + f.score * (f.weight / totalWeight), 0) * 10 : 0
  let zone: 'Red' | 'Yellow' | 'Green' | 'Expansion' = 'Red'
  if (score >= 85) zone = 'Expansion'
  else if (score >= 70) zone = 'Green'
  else if (score >= 50) zone = 'Yellow'
  return { score, zone }
}

// Revenue Churn
export function calculateRevenueChurn({ startingMRR, churnedMRR, contractionMRR, expansionMRR }: { startingMRR: number; churnedMRR: number; contractionMRR: number; expansionMRR: number }) {
  const grossChurnPercent = startingMRR > 0 ? ((churnedMRR + contractionMRR) / startingMRR) * 100 : 0
  const netChurnPercent = startingMRR > 0 ? ((churnedMRR + contractionMRR - expansionMRR) / startingMRR) * 100 : 0
  const annualizedGross = 100 * (1 - Math.pow(1 - grossChurnPercent / 100, 12))
  const isNegativeNetChurn = netChurnPercent < 0
  return { grossChurnPercent, netChurnPercent, annualizedGross, isNegativeNetChurn }
}

// Retention Cost
export function calculateRetentionCost({ csSpend, retainedCustomers, cac }: { csSpend: number; retainedCustomers: number; cac: number }) {
  const crc = retainedCustomers > 0 ? csSpend / retainedCustomers : 0
  const ratio = cac > 0 ? crc / cac : 0
  let rating = 'Poor'
  if (ratio <= 0.15) rating = 'Excellent'
  else if (ratio <= 0.25) rating = 'Good'
  else if (ratio <= 0.35) rating = 'Average'
  return { crc, ratio, rating }
}

// Cash Runway
export function calculateCashRunway({ cashInBank, monthlyBurn, monthlyHireAdditions }: { cashInBank: number; monthlyBurn: number; monthlyHireAdditions: number }) {
  const baseRunway = monthlyBurn > 0 ? cashInBank / monthlyBurn : Number.POSITIVE_INFINITY
  const adjustedBurn = monthlyBurn + monthlyHireAdditions
  const adjustedRunway = adjustedBurn > 0 ? cashInBank / adjustedBurn : Number.POSITIVE_INFINITY
  return { baseRunway: isFinite(baseRunway) ? baseRunway : 999, adjustedRunway: isFinite(adjustedRunway) ? adjustedRunway : 999, adjustedBurn }
}

// Expansion Revenue
export function calculateExpansionRevenue({ startingMRR, upsellMRR, crossSellMRR, priceIncreaseMRR, churnedMRR, contractionMRR }: { startingMRR: number; upsellMRR: number; crossSellMRR: number; priceIncreaseMRR: number; churnedMRR: number; contractionMRR: number }) {
  const totalExpansion = upsellMRR + crossSellMRR + priceIncreaseMRR
  const totalChurn = churnedMRR + contractionMRR
  const nrrPercent = startingMRR > 0 ? ((startingMRR + totalExpansion - totalChurn) / startingMRR) * 100 : 0
  const expansionContribution = startingMRR > 0 ? (totalExpansion / startingMRR) * 100 : 0
  return { totalExpansion, totalChurn, nrrPercent, expansionContribution }
}

// Cap Table
export function calculateCapTable({ optionPoolPercent, seedRaise, seedValuation, seriesARaise, seriesAValuation }: { optionPoolPercent: number; seedRaise: number; seedValuation: number; seriesARaise: number; seriesAValuation: number }) {
  // After option pool carve-out
  const foundersAfterPool = 100 - optionPoolPercent
  // Seed dilution
  const seedDilution = seedValuation > 0 ? (seedRaise / seedValuation) * 100 : 0
  const foundersAfterSeed = foundersAfterPool * (1 - seedDilution / 100)
  const poolAfterSeed = optionPoolPercent * (1 - seedDilution / 100)
  // Series A dilution
  const seriesADilution = seriesAValuation > 0 ? (seriesARaise / seriesAValuation) * 100 : 0
  const foundersAfterA = foundersAfterSeed * (1 - seriesADilution / 100)
  const poolAfterA = poolAfterSeed * (1 - seriesADilution / 100)
  const seedAfterA = seedDilution * (1 - seriesADilution / 100)
  return { foundersPercent: foundersAfterA, poolPercent: poolAfterA, seedPercent: seedAfterA, seriesAPercent: seriesADilution }
}

// SAFE Note
export function calculateSAFENote({ investment, valuationCap, discountPercent, qualifyingRoundPreMoney, qualifyingRoundShares, qualifyingRoundRaise }: { investment: number; valuationCap: number; discountPercent: number; qualifyingRoundPreMoney: number; qualifyingRoundShares: number; qualifyingRoundRaise: number }) {
  const roundPrice = qualifyingRoundShares > 0 ? qualifyingRoundPreMoney / qualifyingRoundShares : 0
  const discountedPrice = roundPrice * (1 - discountPercent / 100)
  const capPrice = qualifyingRoundShares > 0 ? valuationCap / qualifyingRoundShares : 0
  const conversionPrice = Math.min(capPrice, discountedPrice)
  const triggered = conversionPrice === capPrice ? 'Cap' : 'Discount'
  const sharesIssued = conversionPrice > 0 ? investment / conversionPrice : 0
  const postMoneyShares = qualifyingRoundShares + sharesIssued + (qualifyingRoundRaise > 0 && roundPrice > 0 ? qualifyingRoundRaise / roundPrice : 0)
  const ownershipPercent = postMoneyShares > 0 ? (sharesIssued / postMoneyShares) * 100 : 0
  return { conversionPrice, capPrice, discountedPrice, sharesIssued, ownershipPercent, triggered }
}

// Content Publishing ROI
export function calculateContentPublishingROI({ piecesPerMonth, costPerPiece, leadsPerPieceMonth, conversionPercent, dealValue, monthsHorizon }: { piecesPerMonth: number; costPerPiece: number; leadsPerPieceMonth: number; conversionPercent: number; dealValue: number; monthsHorizon: number }) {
  let totalLeads = 0
  let totalSpend = 0
  let paybackMonth = 0
  let cumulativeRevenue = 0
  for (let m = 1; m <= monthsHorizon; m++) {
    const piecesLive = piecesPerMonth * m
    const monthLeads = piecesLive * leadsPerPieceMonth
    totalLeads += monthLeads
    totalSpend += piecesPerMonth * costPerPiece
    const monthCustomers = monthLeads * (conversionPercent / 100)
    cumulativeRevenue += monthCustomers * dealValue
    if (paybackMonth === 0 && cumulativeRevenue >= totalSpend) paybackMonth = m
  }
  const totalCustomers = totalLeads * (conversionPercent / 100)
  const totalRevenue = totalCustomers * dealValue
  const roiPercent = totalSpend > 0 ? ((totalRevenue - totalSpend) / totalSpend) * 100 : 0
  return { totalLeads, totalCustomers, totalSpend, totalRevenue, roiPercent, paybackMonth }
}

// LinkedIn Personal Brand ROI
export function calculateLinkedInROI({ hoursPerWeek, hourlyValue, monthsHorizon, monthlyInbounds, leadToCustomerPercent, dealValue }: { hoursPerWeek: number; hourlyValue: number; monthsHorizon: number; monthlyInbounds: number; leadToCustomerPercent: number; dealValue: number }) {
  const totalHours = hoursPerWeek * 4 * monthsHorizon
  const timeCost = totalHours * hourlyValue
  const totalLeads = monthlyInbounds * monthsHorizon
  const customers = totalLeads * (leadToCustomerPercent / 100)
  const revenue = customers * dealValue
  const roiPercent = timeCost > 0 ? ((revenue - timeCost) / timeCost) * 100 : 0
  const ratio = timeCost > 0 ? revenue / timeCost : 0
  const rating = ratio >= 5 ? 'Excellent' : ratio >= 3 ? 'Good' : ratio >= 1 ? 'Average' : 'Poor'
  return { totalHours, timeCost, totalLeads, customers, revenue, roiPercent, ratio, rating }
}

// Thought Leadership Impact
export function calculateThoughtLeadership({ monthlyReach, engagementPercent, inboundsPerMonth, monthlyPipelineValue, brandLiftScore, monthlyEffortHours, hourlyValue }: { monthlyReach: number; engagementPercent: number; inboundsPerMonth: number; monthlyPipelineValue: number; brandLiftScore: number; monthlyEffortHours: number; hourlyValue: number }) {
  const engagedAudience = monthlyReach * (engagementPercent / 100)
  const annualInbounds = inboundsPerMonth * 12
  const annualPipeline = monthlyPipelineValue * 12
  const annualEffortCost = monthlyEffortHours * 12 * hourlyValue
  const roiPercent = annualEffortCost > 0 ? ((annualPipeline - annualEffortCost) / annualEffortCost) * 100 : 0
  const impactScore = (brandLiftScore * 10) + (annualInbounds / 10) + (roiPercent / 10)
  const tier = impactScore >= 100 ? 'Industry Leader' : impactScore >= 70 ? 'Rising Voice' : impactScore >= 40 ? 'Building Presence' : 'Just Starting'
  return { engagedAudience, annualInbounds, annualPipeline, annualEffortCost, roiPercent, impactScore, tier }
}

// Customer Interview ROI
export function calculateInterviewROI({ interviewsPerQuarter, hoursPerInterview, hourlyCost, retainedCustomers, dealValue, churnPreventedRevenue, pivotsAvoidedValue }: { interviewsPerQuarter: number; hoursPerInterview: number; hourlyCost: number; retainedCustomers: number; dealValue: number; churnPreventedRevenue: number; pivotsAvoidedValue: number }) {
  const annualInterviews = interviewsPerQuarter * 4
  const totalHours = annualInterviews * hoursPerInterview
  const totalCost = totalHours * hourlyCost
  const retentionValue = retainedCustomers * dealValue
  const totalReturn = retentionValue + churnPreventedRevenue + pivotsAvoidedValue
  const roiPercent = totalCost > 0 ? ((totalReturn - totalCost) / totalCost) * 100 : 0
  const ratio = totalCost > 0 ? totalReturn / totalCost : 0
  const rating = ratio >= 10 ? 'Excellent' : ratio >= 5 ? 'Good' : ratio >= 2 ? 'Average' : 'Poor'
  return { annualInterviews, totalHours, totalCost, totalReturn, roiPercent, ratio, rating }
}

// Conversion Rate
export function calculateConversionRate({ visitors, conversions, dealValue }: { visitors: number; conversions: number; dealValue: number }) {
  const rate = visitors > 0 ? (conversions / visitors) * 100 : 0
  const revenue = conversions * dealValue
  const revenuePerVisitor = visitors > 0 ? revenue / visitors : 0
  const rating = rate >= 5 ? 'Excellent' : rate >= 3 ? 'Good' : rate >= 1 ? 'Average' : 'Poor'
  return { rate, revenue, revenuePerVisitor, rating }
}

// Lead to Customer
export function calculateLeadToCustomer({ leads, customers, dealValue }: { leads: number; customers: number; dealValue: number }) {
  const rate = leads > 0 ? (customers / leads) * 100 : 0
  const revenue = customers * dealValue
  const valuePerLead = leads > 0 ? revenue / leads : 0
  const rating = rate >= 20 ? 'Excellent' : rate >= 10 ? 'Good' : rate >= 5 ? 'Average' : 'Poor'
  return { rate, revenue, valuePerLead, rating }
}

// MQL to SQL
export function calculateMQLtoSQL({ mqls, sqls, sqo, opportunities, dealValue }: { mqls: number; sqls: number; sqo: number; opportunities: number; dealValue: number }) {
  const mqlToSqlRate = mqls > 0 ? (sqls / mqls) * 100 : 0
  const sqlToOppRate = sqls > 0 ? (sqo / sqls) * 100 : 0
  const oppToWonRate = sqo > 0 ? (opportunities / sqo) * 100 : 0
  const mqlToCustomerRate = mqls > 0 ? (opportunities / mqls) * 100 : 0
  const revenue = opportunities * dealValue
  const valuePerMQL = mqls > 0 ? revenue / mqls : 0
  const rating = mqlToSqlRate >= 40 ? 'Excellent' : mqlToSqlRate >= 25 ? 'Good' : mqlToSqlRate >= 15 ? 'Average' : 'Poor'
  return { mqlToSqlRate, sqlToOppRate, oppToWonRate, mqlToCustomerRate, revenue, valuePerMQL, rating }
}

// Lead Qualification Matrix
export function calculateQualificationMatrix({ scores }: { scores: Array<{ score: number; weight: number }> }) {
  const totalWeight = scores.reduce((sum, s) => sum + s.weight, 0)
  const score = totalWeight > 0 ? scores.reduce((sum, s) => sum + (s.score / 5) * s.weight, 0) / totalWeight * 100 : 0
  let tier: 'Hot' | 'Qualified' | 'Nurture' | 'Disqualified' = 'Disqualified'
  if (score >= 80) tier = 'Hot'
  else if (score >= 60) tier = 'Qualified'
  else if (score >= 40) tier = 'Nurture'
  return { score, tier }
}

// Quota Attainment
export function calculateQuotaAttainment({ quota, actual, baseSalary, ote, accelerator }: { quota: number; actual: number; baseSalary: number; ote: number; accelerator: number }) {
  const attainment = quota > 0 ? (actual / quota) * 100 : 0
  const variable = ote - baseSalary
  let earnedVariable = 0
  if (attainment <= 100) {
    earnedVariable = variable * (attainment / 100)
  } else {
    const overQuota = attainment - 100
    earnedVariable = variable + (variable * (overQuota / 100) * (accelerator / 100))
  }
  const totalComp = baseSalary + earnedVariable
  const rating = attainment >= 120 ? 'Overachiever' : attainment >= 100 ? 'On Target' : attainment >= 80 ? 'Approaching' : 'At Risk'
  return { attainment, earnedVariable, totalComp, rating }
}

// Sales Commission
export function calculateSalesCommission({ quota, actual, baseRate, tier1Threshold, tier1Bonus, tier2Threshold, tier2Bonus, baseSalary }: { quota: number; actual: number; baseRate: number; tier1Threshold: number; tier1Bonus: number; tier2Threshold: number; tier2Bonus: number; baseSalary: number }) {
  const attainment = quota > 0 ? (actual / quota) * 100 : 0
  const baseCommission = actual * (baseRate / 100)
  let bonus1 = 0
  let bonus2 = 0
  if (attainment >= tier1Threshold) {
    const tier1Revenue = Math.min(actual, quota * (tier2Threshold / 100)) - quota * (tier1Threshold / 100)
    bonus1 = Math.max(0, tier1Revenue) * (tier1Bonus / 100)
  }
  if (attainment >= tier2Threshold) {
    const tier2Revenue = actual - quota * (tier2Threshold / 100)
    bonus2 = Math.max(0, tier2Revenue) * (tier2Bonus / 100)
  }
  const totalCommission = baseCommission + bonus1 + bonus2
  const totalComp = baseSalary + totalCommission
  return { attainment, totalCommission, totalComp, breakdown: { baseCommission, bonus1, bonus2 } }
}

// Pipeline Coverage
export function calculatePipelineCoverage({ openPipeline, quota, weightedPipeline, avgWinRatePercent }: { openPipeline: number; quota: number; weightedPipeline: number; avgWinRatePercent: number }) {
  const rawCoverage = quota > 0 ? openPipeline / quota : 0
  const weightedCoverage = quota > 0 ? weightedPipeline / quota : 0
  const expectedClose = openPipeline * (avgWinRatePercent / 100)
  const gap = Math.max(0, quota - expectedClose)
  const health = rawCoverage >= 4 ? 'Healthy' : rawCoverage >= 3 ? 'On Track' : rawCoverage >= 2 ? 'At Risk' : 'Critical'
  return { rawCoverage, weightedCoverage, expectedClose, gap, health }
}

// Sales Velocity
export function calculateSalesVelocity({ opportunities, winRatePercent, avgDealSize, cycleLengthDays }: { opportunities: number; winRatePercent: number; avgDealSize: number; cycleLengthDays: number }) {
  const dailyVelocity = cycleLengthDays > 0 ? (opportunities * (winRatePercent / 100) * avgDealSize) / cycleLengthDays : 0
  const monthlyVelocity = dailyVelocity * 30
  const quarterlyVelocity = dailyVelocity * 90
  const annualVelocity = dailyVelocity * 365
  const rating = annualVelocity >= 1000000 ? 'High Velocity' : annualVelocity >= 500000 ? 'Moderate' : 'Building'
  return { dailyVelocity, monthlyVelocity, quarterlyVelocity, annualVelocity, rating }
}

// At-Risk Customer Identifier
export function calculateAtRiskScore({ usageDropPercent, ticketsTrend, npsScore, paymentLatenessDays, executiveEngagement, contractMonthsRemaining }: { usageDropPercent: number; ticketsTrend: number; npsScore: number; paymentLatenessDays: number; executiveEngagement: number; contractMonthsRemaining: number }) {
  const usageRisk = Math.min(100, usageDropPercent * 1.5)
  const ticketRisk = Math.min(100, ticketsTrend * 0.8)
  const npsRisk = Math.max(0, (10 - npsScore) * 10)
  const paymentRisk = Math.min(100, paymentLatenessDays * 3)
  const engagementRisk = Math.max(0, (10 - executiveEngagement) * 10)
  const contractRisk = contractMonthsRemaining <= 3 ? 30 : contractMonthsRemaining <= 6 ? 15 : 0
  const riskScore = (usageRisk * 0.25) + (ticketRisk * 0.1) + (npsRisk * 0.2) + (paymentRisk * 0.15) + (engagementRisk * 0.15) + (contractRisk * 0.15)
  const tier = riskScore >= 70 ? 'Critical' : riskScore >= 50 ? 'High' : riskScore >= 30 ? 'Medium' : 'Low'
  return { riskScore, tier, breakdown: { usageRisk, ticketRisk, npsRisk, paymentRisk, engagementRisk, contractRisk } }
}

// Sales Ramp Time
export function calculateSalesRampTime({ rampMonths, fullyRampedQuotaMonthly, repCount, fullyLoadedCost }: { rampMonths: number; fullyRampedQuotaMonthly: number; repCount: number; fullyLoadedCost: number }) {
  let productivityLost = 0
  for (let m = 1; m <= rampMonths; m++) {
    const rampPercent = m / rampMonths
    productivityLost += fullyRampedQuotaMonthly * (1 - rampPercent) * repCount
  }
  const rampCost = (fullyLoadedCost / 12) * rampMonths * repCount
  const totalRampCost = productivityLost + rampCost
  const monthlyRevenuePotential = fullyRampedQuotaMonthly * repCount
  const breakevenMonths = monthlyRevenuePotential > 0 ? totalRampCost / monthlyRevenuePotential + rampMonths : rampMonths
  const rating = breakevenMonths <= 12 ? 'Excellent' : breakevenMonths <= 18 ? 'Good' : breakevenMonths <= 24 ? 'Average' : 'Long'
  return { productivityLost, rampCost, totalRampCost, breakevenMonths, rating }
}

// SaaS Pricing
export function calculateSaasPricing({ wtp, costToServe, targetMargin, competitorPrice, valueDeliveredAnnually }: { wtp: number; costToServe: number; targetMargin: number; competitorPrice: number; valueDeliveredAnnually: number }) {
  const costPlusFloor = costToServe / (1 - targetMargin / 100)
  const valueBasedCeiling = valueDeliveredAnnually * 0.1
  const recommended = Math.max(costPlusFloor, Math.min(wtp, valueBasedCeiling))
  const marginAtPrice = recommended > 0 ? ((recommended - costToServe) / recommended) * 100 : 0
  const valueCaptureRatio = valueDeliveredAnnually > 0 ? recommended / valueDeliveredAnnually : 0
  return { costPlusFloor, valueBasedCeiling, recommended, marginAtPrice, valueCaptureRatio }
}

// Price Elasticity
export function calculatePriceElasticity({ oldPrice, newPrice, oldQuantity, newQuantity }: { oldPrice: number; newPrice: number; oldQuantity: number; newQuantity: number }) {
  const priceChangePct = oldPrice > 0 ? ((newPrice - oldPrice) / oldPrice) * 100 : 0
  const quantityChangePct = oldQuantity > 0 ? ((newQuantity - oldQuantity) / oldQuantity) * 100 : 0
  const elasticity = priceChangePct !== 0 ? Math.abs(quantityChangePct / priceChangePct) : 0
  const oldRevenue = oldPrice * oldQuantity
  const newRevenue = newPrice * newQuantity
  const interpretation = elasticity > 1 ? 'Elastic, demand is price sensitive' : elasticity < 1 ? 'Inelastic, demand is price insensitive' : 'Unit elastic'
  return { priceChangePct, quantityChangePct, elasticity, oldRevenue, newRevenue, interpretation }
}

// Pricing Tier Optimizer
export function calculatePricingTiers({ valueScoreGood, valueScoreBetter, valueScoreBest, anchorPrice }: { valueScoreGood: number; valueScoreBetter: number; valueScoreBest: number; anchorPrice: number }) {
  const betterPrice = anchorPrice
  const goodPrice = (valueScoreGood / valueScoreBetter) * betterPrice
  const bestPrice = (valueScoreBest / valueScoreBetter) * betterPrice
  const goodValueRatio = valueScoreGood / goodPrice
  const betterValueRatio = valueScoreBetter / betterPrice
  const bestValueRatio = valueScoreBest / bestPrice
  const decoyEffect = betterValueRatio > goodValueRatio && betterValueRatio >= bestValueRatio
  return { goodPrice, betterPrice, bestPrice, goodValueRatio, betterValueRatio, bestValueRatio, decoyEffect }
}

// Workflow Automation ROI
export function calculateAutomationROI({ hoursPerWeek, hourlyCost, automationCost, monthlyMaintenanceCost, monthsHorizon }: { hoursPerWeek: number; hourlyCost: number; automationCost: number; monthlyMaintenanceCost: number; monthsHorizon: number }) {
  const monthlyHoursSaved = hoursPerWeek * 4
  const monthlySavings = monthlyHoursSaved * hourlyCost
  const totalCost = automationCost + (monthlyMaintenanceCost * monthsHorizon)
  const totalSavings = monthlySavings * monthsHorizon
  const netReturn = totalSavings - totalCost
  const roiPercent = totalCost > 0 ? (netReturn / totalCost) * 100 : 0
  const paybackMonths = monthlySavings - monthlyMaintenanceCost > 0 ? automationCost / (monthlySavings - monthlyMaintenanceCost) : 999
  const rating = paybackMonths <= 3 ? 'Excellent' : paybackMonths <= 6 ? 'Good' : paybackMonths <= 12 ? 'Average' : 'Long'
  return { monthlyHoursSaved, monthlySavings, totalCost, totalSavings, netReturn, roiPercent, paybackMonths, rating }
}

// Build vs Buy
export function calculateBuildVsBuy({ buildCostUpfront, buildMonthsToShip, buildMonthlyMaintenance, buyMonthlyCost, buySetupCost, devHourlyCost, monthsHorizon }: { buildCostUpfront: number; buildMonthsToShip: number; buildMonthlyMaintenance: number; buyMonthlyCost: number; buySetupCost: number; devHourlyCost: number; monthsHorizon: number }) {
  const buildOpportunityCost = buildMonthsToShip * devHourlyCost * 160
  const buildTCO = buildCostUpfront + buildOpportunityCost + (buildMonthlyMaintenance * monthsHorizon)
  const buyTCO = buySetupCost + (buyMonthlyCost * monthsHorizon)
  const savings = buyTCO - buildTCO
  const recommendation = buildTCO < buyTCO ? 'Build' : 'Buy'
  const breakevenMonths = buildMonthlyMaintenance < buyMonthlyCost && (buildCostUpfront + buildOpportunityCost - buySetupCost) > 0 ? (buildCostUpfront + buildOpportunityCost - buySetupCost) / (buyMonthlyCost - buildMonthlyMaintenance) : 0
  return { buildTCO, buyTCO, buildOpportunityCost, savings, recommendation, breakevenMonths }
}

// System Integration ROI
export function calculateIntegrationROI({ implementationCost, monthlyToolCost, hoursPerWeekSaved, hourlyCost, errorReductionValueMonthly, monthsHorizon }: { implementationCost: number; monthlyToolCost: number; hoursPerWeekSaved: number; hourlyCost: number; errorReductionValueMonthly: number; monthsHorizon: number }) {
  const monthlyTimeSavings = hoursPerWeekSaved * 4 * hourlyCost
  const monthlyValue = monthlyTimeSavings + errorReductionValueMonthly
  const totalCost = implementationCost + (monthlyToolCost * monthsHorizon)
  const totalValue = monthlyValue * monthsHorizon
  const netReturn = totalValue - totalCost
  const roiPercent = totalCost > 0 ? (netReturn / totalCost) * 100 : 0
  const paybackMonths = monthlyValue - monthlyToolCost > 0 ? implementationCost / (monthlyValue - monthlyToolCost) : 999
  const rating = paybackMonths <= 6 ? 'Excellent' : paybackMonths <= 12 ? 'Good' : paybackMonths <= 18 ? 'Average' : 'Long'
  return { monthlyTimeSavings, monthlyValue, totalCost, totalValue, netReturn, roiPercent, paybackMonths, rating }
}

// Manual vs Automated Process
export function calculateManualVsAutomated({ manualHoursPerWeek, manualHourlyCost, errorRatePercent, errorCost, automationOneTimeCost, automationMonthlyCost, monthsHorizon }: { manualHoursPerWeek: number; manualHourlyCost: number; errorRatePercent: number; errorCost: number; automationOneTimeCost: number; automationMonthlyCost: number; monthsHorizon: number }) {
  const manualMonthlyHours = manualHoursPerWeek * 4
  const manualMonthlyCost = manualMonthlyHours * manualHourlyCost
  const monthlyErrorCost = manualMonthlyCost * (errorRatePercent / 100) * errorCost / manualHourlyCost
  const totalManualCost = (manualMonthlyCost + monthlyErrorCost) * monthsHorizon
  const totalAutomatedCost = automationOneTimeCost + (automationMonthlyCost * monthsHorizon)
  const savings = totalManualCost - totalAutomatedCost
  const recommendation = savings > 0 ? 'Automate' : 'Keep Manual'
  const paybackMonths = manualMonthlyCost + monthlyErrorCost - automationMonthlyCost > 0 ? automationOneTimeCost / (manualMonthlyCost + monthlyErrorCost - automationMonthlyCost) : 0
  return { totalManualCost, totalAutomatedCost, monthlyErrorCost, savings, recommendation, paybackMonths }
}

// Founder Dilution
export function calculateFounderDilution({ rounds }: { rounds: Array<{ poolPercent: number; raise: number; preMoney: number }> }) {
  let founderPercent = 100
  const ledger: Array<{ round: number; foundersPercent: number; dilutionThisRound: number }> = []
  rounds.forEach((r, i) => {
    founderPercent *= (1 - r.poolPercent / 100)
    const postMoney = r.preMoney + r.raise
    const dilution = postMoney > 0 ? (r.raise / postMoney) * 100 : 0
    founderPercent *= (1 - dilution / 100)
    ledger.push({ round: i + 1, foundersPercent: founderPercent, dilutionThisRound: dilution })
  })
  const totalDilutionPercent = 100 - founderPercent
  return { foundersFinalPercent: founderPercent, totalDilutionPercent, ledger }
}

// Co-Founder Equity Split
export function calculateCofounderSplit({ founders }: { founders: Array<{ name: string; idea: number; commitment: number; skills: number; risk: number; capital: number }> }) {
  const weights = { idea: 15, commitment: 30, skills: 25, risk: 20, capital: 10 }
  const scores = founders.map(f => {
    return (f.idea * weights.idea + f.commitment * weights.commitment + f.skills * weights.skills + f.risk * weights.risk + f.capital * weights.capital) / 10
  })
  const totalScore = scores.reduce((a, b) => a + b, 0)
  const splits = founders.map((f, i) => ({
    name: f.name,
    percent: totalScore > 0 ? (scores[i] / totalScore) * 100 : 0
  }))
  const spread = Math.max(...splits.map(s => s.percent)) - Math.min(...splits.map(s => s.percent))
  const warning = spread > 30 ? 'Large spread may cause tension' : null
  return { splits, spread, warning }
}

// Technical Debt
export function calculateTechnicalDebt({ teamSize, avgFullyLoadedCost, percentTimeOnDebt, debtItemsCount, monthsAccrued }: { teamSize: number; avgFullyLoadedCost: number; percentTimeOnDebt: number; debtItemsCount: number; monthsAccrued: number }) {
  const annualTeamCost = teamSize * avgFullyLoadedCost
  const annualInterestCost = annualTeamCost * (percentTimeOnDebt / 100)
  const monthlyInterestCost = annualInterestCost / 12
  const costPerDebtItem = debtItemsCount > 0 ? annualInterestCost / debtItemsCount : 0
  const rating = percentTimeOnDebt <= 10 ? 'Healthy' : percentTimeOnDebt <= 20 ? 'Manageable' : percentTimeOnDebt <= 30 ? 'High' : 'Critical'
  return { annualInterestCost, monthlyInterestCost, costPerDebtItem, rating }
}

// Team Capacity
export function calculateTeamCapacity({ teamSize, hoursPerWeek, meetingHoursPerWeek, ptoWeeksPerYear, rampPercent, adminPercent }: { teamSize: number; hoursPerWeek: number; meetingHoursPerWeek: number; ptoWeeksPerYear: number; rampPercent: number; adminPercent: number }) {
  const workingWeeks = 52 - ptoWeeksPerYear
  const grossHoursPerYear = teamSize * hoursPerWeek * workingWeeks
  const meetingHours = teamSize * meetingHoursPerWeek * workingWeeks
  const rampHours = grossHoursPerYear * (rampPercent / 100)
  const adminHours = grossHoursPerYear * (adminPercent / 100)
  const effectiveHours = grossHoursPerYear - meetingHours - rampHours - adminHours
  const effectiveHoursPerPerson = teamSize > 0 ? effectiveHours / teamSize : 0
  const utilizationPercent = grossHoursPerYear > 0 ? (effectiveHours / grossHoursPerYear) * 100 : 0
  const rating = utilizationPercent >= 70 ? 'Healthy' : utilizationPercent >= 60 ? 'Average' : 'Low'
  return { grossHoursPerYear, effectiveHours, effectiveHoursPerPerson, utilizationPercent, rating }
}

// Hiring ROI
export function calculateHiringROI({ fullyLoadedCost, expectedAnnualContribution, rampMonths, retentionMonths }: { fullyLoadedCost: number; expectedAnnualContribution: number; rampMonths: number; retentionMonths: number }) {
  const rampFactor = 1 - (rampMonths / 24)
  const rampedContribution = expectedAnnualContribution * rampFactor * (retentionMonths / 12)
  const totalCost = fullyLoadedCost * (retentionMonths / 12)
  const netReturn = rampedContribution - totalCost
  const roiPercent = totalCost > 0 ? (netReturn / totalCost) * 100 : 0
  const monthlyContribution = expectedAnnualContribution / 12
  const paybackMonths = monthlyContribution > 0 ? (fullyLoadedCost / 12) / (monthlyContribution * rampFactor) * rampMonths + rampMonths : 999
  const rating = roiPercent >= 100 ? 'Excellent' : roiPercent >= 50 ? 'Good' : roiPercent >= 0 ? 'Average' : 'Poor'
  return { rampedContribution, totalCost, netReturn, roiPercent, paybackMonths, rating }
}

// Meeting Cost
export function calculateMeetingCost({ attendees, avgHourlyCost, durationMinutes, frequencyPerYear, decisionsPerMeeting }: { attendees: number; avgHourlyCost: number; durationMinutes: number; frequencyPerYear: number; decisionsPerMeeting: number }) {
  const costPerMeeting = attendees * avgHourlyCost * (durationMinutes / 60)
  const annualCost = costPerMeeting * frequencyPerYear
  const annualHours = attendees * (durationMinutes / 60) * frequencyPerYear
  const totalDecisions = decisionsPerMeeting * frequencyPerYear
  const costPerDecision = totalDecisions > 0 ? annualCost / totalDecisions : annualCost
  const rating = costPerDecision <= 500 ? 'Efficient' : costPerDecision <= 1000 ? 'Average' : 'Expensive'
  return { costPerMeeting, annualCost, annualHours, costPerDecision, rating }
}

// Decision Speed
export function calculateDecisionSpeed({ revenueAtStake, decisionDelayDays, qualityImprovementPercent, reversibilityScore }: { revenueAtStake: number; decisionDelayDays: number; qualityImprovementPercent: number; reversibilityScore: number }) {
  const dailyOpportunityCost = revenueAtStake / 365
  const delayCost = dailyOpportunityCost * decisionDelayDays
  const qualityValue = revenueAtStake * (qualityImprovementPercent / 100)
  const netValueOfDelay = qualityValue - delayCost
  const reversibilityFactor = reversibilityScore / 10
  const recommendation = netValueOfDelay > 0 || reversibilityFactor >= 0.7 ? 'Take more time' : 'Decide faster'
  return { dailyOpportunityCost, delayCost, qualityValue, netValueOfDelay, recommendation }
}

// Should You Pivot
export function calculatePivotScore({ pmfSignals, runwayMonths, founderConviction, marketTrend, teamCapability }: { pmfSignals: number; runwayMonths: number; founderConviction: number; marketTrend: number; teamCapability: number }) {
  const pmfRisk = Math.max(0, (10 - pmfSignals) * 10)
  const runwayRisk = runwayMonths <= 6 ? 40 : runwayMonths <= 12 ? 20 : runwayMonths <= 18 ? 10 : 0
  const convictionRisk = Math.max(0, (10 - founderConviction) * 8)
  const marketRisk = Math.max(0, (10 - marketTrend) * 6)
  const score = pmfRisk * 0.35 + runwayRisk * 0.25 + convictionRisk * 0.25 + marketRisk * 0.15
  const recommendation = score >= 70 ? 'Pivot now' : score >= 50 ? 'Strong pivot consideration' : score >= 30 ? 'Persevere with adjustments' : 'Stay the course'
  return { score, recommendation, breakdown: { pmfRisk, runwayRisk, convictionRisk, marketRisk } }
}

// Founder Burnout Risk
export function calculateBurnoutRisk({ hoursPerWeek, sleepHoursPerNight, exerciseDaysPerWeek, supportSystemScore, financialStressScore }: { hoursPerWeek: number; sleepHoursPerNight: number; exerciseDaysPerWeek: number; supportSystemScore: number; financialStressScore: number }) {
  const hoursRisk = hoursPerWeek > 60 ? 30 : hoursPerWeek > 50 ? 15 : hoursPerWeek > 40 ? 5 : 0
  const sleepRisk = sleepHoursPerNight < 6 ? 30 : sleepHoursPerNight < 7 ? 15 : 0
  const exerciseRisk = exerciseDaysPerWeek < 2 ? 20 : exerciseDaysPerWeek < 3 ? 10 : 0
  const supportRisk = Math.max(0, (10 - supportSystemScore) * 3)
  const financialRisk = financialStressScore * 3
  const score = hoursRisk + sleepRisk + exerciseRisk + supportRisk + financialRisk
  const tier = score >= 70 ? 'Critical' : score >= 50 ? 'High' : score >= 30 ? 'Medium' : 'Low'
  return { score, tier, breakdown: { hoursRisk, sleepRisk, exerciseRisk, supportRisk, financialRisk } }
}

// Remote vs Office ROI
export function calculateRemoteVsOffice({ teamSize, officeRentMonthly, officeUtilitiesMonthly, perEmployeeOfficeCost, productivityDeltaPercent, fullyLoadedCost }: { teamSize: number; officeRentMonthly: number; officeUtilitiesMonthly: number; perEmployeeOfficeCost: number; productivityDeltaPercent: number; fullyLoadedCost: number }) {
  const annualOfficeCost = (officeRentMonthly + officeUtilitiesMonthly) * 12 + (perEmployeeOfficeCost * teamSize)
  const remoteSetupAnnual = teamSize * 2000 // Rough estimate for home office stipends
  const facilitySavings = annualOfficeCost - remoteSetupAnnual
  const productivityImpact = teamSize * fullyLoadedCost * (productivityDeltaPercent / 100)
  const netRemoteAdvantage = facilitySavings + productivityImpact
  const recommendation = netRemoteAdvantage > 0 ? 'Remote' : 'Office'
  return { annualOfficeCost, remoteSetupAnnual, facilitySavings, productivityImpact, netRemoteAdvantage, recommendation }
}

// Market Entry Readiness Score
export function calculateMarketEntryReadiness({ productReadiness, gtmReadiness, teamReadiness, capitalReadiness, competitivePosition }: { productReadiness: number; gtmReadiness: number; teamReadiness: number; capitalReadiness: number; competitivePosition: number }) {
  const score = (productReadiness * 25 + gtmReadiness * 25 + teamReadiness * 20 + capitalReadiness * 15 + competitivePosition * 15) / 10
  const pillars = [
    { name: 'Product', score: productReadiness },
    { name: 'GTM', score: gtmReadiness },
    { name: 'Team', score: teamReadiness },
    { name: 'Capital', score: capitalReadiness },
    { name: 'Competitive', score: competitivePosition },
  ]
  const weakest = pillars.reduce((min, p) => p.score < min.score ? p : min, pillars[0])
  const tier = score >= 80 ? 'Go' : score >= 60 ? 'Conditional go' : score >= 40 ? 'Not ready' : 'Major gaps'
  return { score, tier, weakestPillar: weakest.name, weakestScore: weakest.score }
}

// Value Proposition Fit
export function calculateValuePropositionFit({ items }: { items: Array<{ severity: number; ourFitScore: number; weight: number }> }) {
  const totalWeight = items.reduce((sum, i) => sum + i.weight, 0)
  const score = totalWeight > 0 ? items.reduce((sum, i) => sum + ((i.severity * i.ourFitScore) / 25) * i.weight, 0) / totalWeight * 100 : 0
  const tier = score >= 80 ? 'Compelling fit' : score >= 60 ? 'Strong fit' : score >= 40 ? 'Partial fit' : 'Weak fit'
  return { score, tier }
}

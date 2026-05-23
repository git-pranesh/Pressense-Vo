'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateDecisionSpeed } from '@/lib/calculators/calculations'
import { formatCurrency } from '@/lib/calculators/format'

export default function DecisionSpeedCalculator() {
  const calculator = getCalculatorBySlug('decision-speed-calculator')!
  
  const [revenueAtStake, setRevenueAtStake] = useState(500000)
  const [decisionDelayDays, setDecisionDelayDays] = useState(14)
  const [qualityImprovementPercent, setQualityImprovementPercent] = useState(5)
  const [reversibilityScore, setReversibilityScore] = useState(7)

  const result = calculateDecisionSpeed({ revenueAtStake, decisionDelayDays, qualityImprovementPercent, reversibilityScore })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Revenue at Stake" value={revenueAtStake} onChange={setRevenueAtStake} prefix="$" />
        <NumberField label="Decision Delay (days)" value={decisionDelayDays} onChange={setDecisionDelayDays} />
        <NumberField label="Quality Improvement %" value={qualityImprovementPercent} onChange={setQualityImprovementPercent} suffix="%" />
        <NumberField label="Reversibility (1-10)" value={reversibilityScore} onChange={setReversibilityScore} min={1} max={10} />
      </div>

      <PrimaryMetric
        label="Recommendation"
        value={result.recommendation}
        comparison={`Net value of delay: ${formatCurrency(result.netValueOfDelay)}`}
      />

      <MetricGrid>
        <MetricCard label="Daily Opp Cost" value={formatCurrency(result.dailyOpportunityCost)} />
        <MetricCard label="Delay Cost" value={formatCurrency(result.delayCost)} />
        <MetricCard label="Quality Value" value={formatCurrency(result.qualityValue)} />
        <MetricCard label="Net Value" value={formatCurrency(result.netValueOfDelay)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

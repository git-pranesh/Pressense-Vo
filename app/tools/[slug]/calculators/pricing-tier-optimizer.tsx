'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculatePricingTiers } from '@/lib/calculators/calculations'
import { formatCurrency } from '@/lib/calculators/format'

export default function PricingTierOptimizerCalculator() {
  const calculator = getCalculatorBySlug('pricing-tier-optimizer')!
  
  const [valueScoreGood, setValueScoreGood] = useState(30)
  const [valueScoreBetter, setValueScoreBetter] = useState(70)
  const [valueScoreBest, setValueScoreBest] = useState(100)
  const [anchorPrice, setAnchorPrice] = useState(99)

  const result = calculatePricingTiers({ valueScoreGood, valueScoreBetter, valueScoreBest, anchorPrice })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Good Tier Value Score" value={valueScoreGood} onChange={setValueScoreGood} />
        <NumberField label="Better Tier Value Score" value={valueScoreBetter} onChange={setValueScoreBetter} />
        <NumberField label="Best Tier Value Score" value={valueScoreBest} onChange={setValueScoreBest} />
        <NumberField label="Anchor Price (Better)" value={anchorPrice} onChange={setAnchorPrice} prefix="$" />
      </div>

      <PrimaryMetric
        label="Recommended Tiers"
        value={`${formatCurrency(result.goodPrice)} / ${formatCurrency(result.betterPrice)} / ${formatCurrency(result.bestPrice)}`}
        comparison={result.decoyEffect ? 'Decoy effect active — Better tier looks like best value' : 'Consider adjusting value scores for decoy effect'}
      />

      <MetricGrid>
        <MetricCard label="Good Price" value={formatCurrency(result.goodPrice)} sublabel={`Value ratio: ${result.goodValueRatio.toFixed(2)}`} />
        <MetricCard label="Better Price" value={formatCurrency(result.betterPrice)} sublabel={`Value ratio: ${result.betterValueRatio.toFixed(2)}`} />
        <MetricCard label="Best Price" value={formatCurrency(result.bestPrice)} sublabel={`Value ratio: ${result.bestValueRatio.toFixed(2)}`} />
        <MetricCard label="Decoy Effect" value={result.decoyEffect ? 'Active' : 'Inactive'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateAccountHealthScore } from '@/lib/calculators/calculations'

export default function CustomerHealthScoreCalculator() {
  const calculator = getCalculatorBySlug('customer-health-score')!
  
  const [usageScore, setUsageScore] = useState(7)
  const [adoptionScore, setAdoptionScore] = useState(6)
  const [supportScore, setSupportScore] = useState(8)
  const [npsScore, setNpsScore] = useState(7)
  const [paymentScore, setPaymentScore] = useState(9)
  const [engagementScore, setEngagementScore] = useState(6)

  const factors = [
    { score: usageScore, weight: 25 },
    { score: adoptionScore, weight: 20 },
    { score: supportScore, weight: 15 },
    { score: npsScore, weight: 15 },
    { score: paymentScore, weight: 15 },
    { score: engagementScore, weight: 10 },
  ]

  const result = calculateAccountHealthScore({ factors })

  const zoneColor = result.zone === 'Expansion' ? 'text-green-500' : result.zone === 'Green' ? 'text-green-400' : result.zone === 'Yellow' ? 'text-yellow-500' : 'text-red-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Usage Frequency (1-10)" value={usageScore} onChange={setUsageScore} min={1} max={10} step={1} />
        <NumberField label="Feature Adoption (1-10)" value={adoptionScore} onChange={setAdoptionScore} min={1} max={10} step={1} />
        <NumberField label="Support Satisfaction (1-10)" value={supportScore} onChange={setSupportScore} min={1} max={10} step={1} />
        <NumberField label="NPS Score (1-10)" value={npsScore} onChange={setNpsScore} min={1} max={10} step={1} />
        <NumberField label="Payment Health (1-10)" value={paymentScore} onChange={setPaymentScore} min={1} max={10} step={1} />
        <NumberField label="Engagement Level (1-10)" value={engagementScore} onChange={setEngagementScore} min={1} max={10} step={1} />
      </div>

      <PrimaryMetric
        label="Health Score"
        value={result.score.toFixed(0)}
        comparison={<span className={zoneColor}>{result.zone} Zone</span>}
      />

      <MetricGrid>
        <MetricCard label="Zone" value={result.zone} />
        <MetricCard label="Score" value={`${result.score.toFixed(0)}/100`} />
        <MetricCard label="Action" value={result.zone === 'Expansion' ? 'Upsell' : result.zone === 'Green' ? 'Maintain' : result.zone === 'Yellow' ? 'QBR' : 'Escalate'} />
        <MetricCard label="Risk Level" value={result.zone === 'Red' ? 'High' : result.zone === 'Yellow' ? 'Medium' : 'Low'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateQualificationMatrix } from '@/lib/calculators/calculations'

export default function LeadQualificationMatrixCalculator() {
  const calculator = getCalculatorBySlug('lead-qualification-matrix')!
  
  const [budgetScore, setBudgetScore] = useState(4)
  const [authorityScore, setAuthorityScore] = useState(3)
  const [needScore, setNeedScore] = useState(5)
  const [timelineScore, setTimelineScore] = useState(4)

  const scores = [
    { score: budgetScore, weight: 30 },
    { score: authorityScore, weight: 25 },
    { score: needScore, weight: 25 },
    { score: timelineScore, weight: 20 },
  ]

  const result = calculateQualificationMatrix({ scores })

  const tierColor = result.tier === 'Hot' ? 'text-green-500' : result.tier === 'Qualified' ? 'text-blue-500' : result.tier === 'Nurture' ? 'text-yellow-500' : 'text-red-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Budget Score (1-5)" value={budgetScore} onChange={setBudgetScore} min={1} max={5} step={1} />
        <NumberField label="Authority Score (1-5)" value={authorityScore} onChange={setAuthorityScore} min={1} max={5} step={1} />
        <NumberField label="Need Score (1-5)" value={needScore} onChange={setNeedScore} min={1} max={5} step={1} />
        <NumberField label="Timeline Score (1-5)" value={timelineScore} onChange={setTimelineScore} min={1} max={5} step={1} />
      </div>

      <PrimaryMetric
        label="Qualification Score"
        value={result.score.toFixed(0)}
        comparison={<span className={tierColor}>{result.tier}</span>}
      />

      <MetricGrid>
        <MetricCard label="Score" value={`${result.score.toFixed(0)}/100`} />
        <MetricCard label="Tier" value={result.tier} />
        <MetricCard label="Action" value={result.tier === 'Hot' ? 'Immediate call' : result.tier === 'Qualified' ? 'Schedule demo' : result.tier === 'Nurture' ? 'Add to sequence' : 'Disqualify'} />
        <MetricCard label="Priority" value={result.tier === 'Hot' ? 'P1' : result.tier === 'Qualified' ? 'P2' : 'P3'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

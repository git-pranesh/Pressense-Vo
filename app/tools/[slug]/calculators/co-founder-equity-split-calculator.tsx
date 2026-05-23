'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateCofounderSplit } from '@/lib/calculators/calculations'
import { formatPercent } from '@/lib/calculators/format'

export default function CoFounderEquitySplitCalculator() {
  const calculator = getCalculatorBySlug('co-founder-equity-split-calculator')!
  
  const [f1Idea, setF1Idea] = useState(8)
  const [f1Commitment, setF1Commitment] = useState(10)
  const [f1Skills, setF1Skills] = useState(7)
  const [f1Risk, setF1Risk] = useState(9)
  const [f1Capital, setF1Capital] = useState(5)

  const [f2Idea, setF2Idea] = useState(4)
  const [f2Commitment, setF2Commitment] = useState(10)
  const [f2Skills, setF2Skills] = useState(9)
  const [f2Risk, setF2Risk] = useState(8)
  const [f2Capital, setF2Capital] = useState(3)

  const founders = [
    { name: 'Founder 1', idea: f1Idea, commitment: f1Commitment, skills: f1Skills, risk: f1Risk, capital: f1Capital },
    { name: 'Founder 2', idea: f2Idea, commitment: f2Commitment, skills: f2Skills, risk: f2Risk, capital: f2Capital },
  ]

  const result = calculateCofounderSplit({ founders })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Founder 1 Contributions (1-10)</h3>
          <div className="grid gap-4 sm:grid-cols-5">
            <NumberField label="Idea" value={f1Idea} onChange={setF1Idea} min={1} max={10} />
            <NumberField label="Commitment" value={f1Commitment} onChange={setF1Commitment} min={1} max={10} />
            <NumberField label="Skills" value={f1Skills} onChange={setF1Skills} min={1} max={10} />
            <NumberField label="Risk" value={f1Risk} onChange={setF1Risk} min={1} max={10} />
            <NumberField label="Capital" value={f1Capital} onChange={setF1Capital} min={1} max={10} />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Founder 2 Contributions (1-10)</h3>
          <div className="grid gap-4 sm:grid-cols-5">
            <NumberField label="Idea" value={f2Idea} onChange={setF2Idea} min={1} max={10} />
            <NumberField label="Commitment" value={f2Commitment} onChange={setF2Commitment} min={1} max={10} />
            <NumberField label="Skills" value={f2Skills} onChange={setF2Skills} min={1} max={10} />
            <NumberField label="Risk" value={f2Risk} onChange={setF2Risk} min={1} max={10} />
            <NumberField label="Capital" value={f2Capital} onChange={setF2Capital} min={1} max={10} />
          </div>
        </div>
      </div>

      <PrimaryMetric
        label="Recommended Split"
        value={result.splits.map(s => `${s.name}: ${formatPercent(s.percent)}`).join(' / ')}
        comparison={result.warning || `Spread: ${formatPercent(result.spread)}`}
      />

      <MetricGrid>
        {result.splits.map((s, i) => (
          <MetricCard key={i} label={s.name} value={formatPercent(s.percent)} />
        ))}
        <MetricCard label="Spread" value={formatPercent(result.spread)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

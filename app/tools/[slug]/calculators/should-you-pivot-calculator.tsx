'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculatePivotScore } from '@/lib/calculators/calculations'

export default function ShouldYouPivotCalculator() {
  const calculator = getCalculatorBySlug('should-you-pivot-calculator')!
  
  const [pmfSignals, setPmfSignals] = useState(4)
  const [runwayMonths, setRunwayMonths] = useState(12)
  const [founderConviction, setFounderConviction] = useState(5)
  const [marketTrend, setMarketTrend] = useState(6)
  const [teamCapability, setTeamCapability] = useState(7)

  const result = calculatePivotScore({ pmfSignals, runwayMonths, founderConviction, marketTrend, teamCapability })

  const recColor = result.recommendation === 'Pivot now' ? 'text-red-500' : result.recommendation === 'Strong pivot consideration' ? 'text-orange-500' : result.recommendation === 'Persevere with adjustments' ? 'text-yellow-500' : 'text-green-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="PMF Signals (1-10)" value={pmfSignals} onChange={setPmfSignals} min={1} max={10} />
        <NumberField label="Runway (Months)" value={runwayMonths} onChange={setRunwayMonths} />
        <NumberField label="Founder Conviction (1-10)" value={founderConviction} onChange={setFounderConviction} min={1} max={10} />
        <NumberField label="Market Trend (1-10)" value={marketTrend} onChange={setMarketTrend} min={1} max={10} />
        <NumberField label="Team Capability (1-10)" value={teamCapability} onChange={setTeamCapability} min={1} max={10} />
      </div>

      <PrimaryMetric
        label="Pivot Score"
        value={result.score.toFixed(0)}
        comparison={<span className={recColor}>{result.recommendation}</span>}
      />

      <MetricGrid>
        <MetricCard label="PMF Risk" value={result.breakdown.pmfRisk.toFixed(0)} />
        <MetricCard label="Runway Risk" value={result.breakdown.runwayRisk.toFixed(0)} />
        <MetricCard label="Conviction Risk" value={result.breakdown.convictionRisk.toFixed(0)} />
        <MetricCard label="Market Risk" value={result.breakdown.marketRisk.toFixed(0)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

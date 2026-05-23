'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateMarketEntryReadiness } from '@/lib/calculators/calculations'

export default function MarketEntryReadinessScoreCalculator() {
  const calculator = getCalculatorBySlug('market-entry-readiness-score')!
  
  const [productReadiness, setProductReadiness] = useState(7)
  const [gtmReadiness, setGtmReadiness] = useState(6)
  const [teamReadiness, setTeamReadiness] = useState(8)
  const [capitalReadiness, setCapitalReadiness] = useState(7)
  const [competitivePosition, setCompetitivePosition] = useState(6)

  const result = calculateMarketEntryReadiness({ productReadiness, gtmReadiness, teamReadiness, capitalReadiness, competitivePosition })

  const tierColor = result.tier === 'Go' ? 'text-green-500' : result.tier === 'Conditional go' ? 'text-yellow-500' : result.tier === 'Not ready' ? 'text-orange-500' : 'text-red-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Product Readiness (1-10)" value={productReadiness} onChange={setProductReadiness} min={1} max={10} />
        <NumberField label="GTM Readiness (1-10)" value={gtmReadiness} onChange={setGtmReadiness} min={1} max={10} />
        <NumberField label="Team Readiness (1-10)" value={teamReadiness} onChange={setTeamReadiness} min={1} max={10} />
        <NumberField label="Capital Readiness (1-10)" value={capitalReadiness} onChange={setCapitalReadiness} min={1} max={10} />
        <NumberField label="Competitive Position (1-10)" value={competitivePosition} onChange={setCompetitivePosition} min={1} max={10} />
      </div>

      <PrimaryMetric
        label="Readiness Score"
        value={result.score.toFixed(0)}
        comparison={<span className={tierColor}>{result.tier}</span>}
      />

      <MetricGrid>
        <MetricCard label="Score" value={`${result.score.toFixed(0)}/100`} />
        <MetricCard label="Tier" value={result.tier} />
        <MetricCard label="Weakest Pillar" value={result.weakestPillar} />
        <MetricCard label="Weakest Score" value={result.weakestScore.toString()} />
      </MetricGrid>
    </CalculatorShell>
  )
}

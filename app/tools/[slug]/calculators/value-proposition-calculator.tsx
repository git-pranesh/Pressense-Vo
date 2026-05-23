'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateValuePropositionFit } from '@/lib/calculators/calculations'

export default function ValuePropositionCalculator() {
  const calculator = getCalculatorBySlug('value-proposition-calculator')!
  
  const [item1Severity, setItem1Severity] = useState(4)
  const [item1Fit, setItem1Fit] = useState(4)
  const [item1Weight, setItem1Weight] = useState(30)
  
  const [item2Severity, setItem2Severity] = useState(5)
  const [item2Fit, setItem2Fit] = useState(3)
  const [item2Weight, setItem2Weight] = useState(25)
  
  const [item3Severity, setItem3Severity] = useState(3)
  const [item3Fit, setItem3Fit] = useState(5)
  const [item3Weight, setItem3Weight] = useState(25)
  
  const [item4Severity, setItem4Severity] = useState(4)
  const [item4Fit, setItem4Fit] = useState(4)
  const [item4Weight, setItem4Weight] = useState(20)

  const items = [
    { severity: item1Severity, ourFitScore: item1Fit, weight: item1Weight },
    { severity: item2Severity, ourFitScore: item2Fit, weight: item2Weight },
    { severity: item3Severity, ourFitScore: item3Fit, weight: item3Weight },
    { severity: item4Severity, ourFitScore: item4Fit, weight: item4Weight },
  ]

  const result = calculateValuePropositionFit({ items })

  const tierColor = result.tier === 'Compelling fit' ? 'text-green-500' : result.tier === 'Strong fit' ? 'text-blue-500' : result.tier === 'Partial fit' ? 'text-yellow-500' : 'text-red-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="space-y-6">
        {[
          { label: 'Job/Pain 1', severity: item1Severity, setSeverity: setItem1Severity, fit: item1Fit, setFit: setItem1Fit, weight: item1Weight, setWeight: setItem1Weight },
          { label: 'Job/Pain 2', severity: item2Severity, setSeverity: setItem2Severity, fit: item2Fit, setFit: setItem2Fit, weight: item2Weight, setWeight: setItem2Weight },
          { label: 'Job/Pain 3', severity: item3Severity, setSeverity: setItem3Severity, fit: item3Fit, setFit: setItem3Fit, weight: item3Weight, setWeight: setItem3Weight },
          { label: 'Job/Pain 4', severity: item4Severity, setSeverity: setItem4Severity, fit: item4Fit, setFit: setItem4Fit, weight: item4Weight, setWeight: setItem4Weight },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold mb-3">{item.label}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <NumberField label="Severity (1-5)" value={item.severity} onChange={item.setSeverity} min={1} max={5} />
              <NumberField label="Our Fit (1-5)" value={item.fit} onChange={item.setFit} min={1} max={5} />
              <NumberField label="Weight" value={item.weight} onChange={item.setWeight} />
            </div>
          </div>
        ))}
      </div>

      <PrimaryMetric
        label="Fit Score"
        value={result.score.toFixed(0)}
        comparison={<span className={tierColor}>{result.tier}</span>}
      />

      <MetricGrid>
        <MetricCard label="Score" value={`${result.score.toFixed(0)}/100`} />
        <MetricCard label="Tier" value={result.tier} />
        <MetricCard label="Action" value={result.tier === 'Compelling fit' ? 'Scale aggressively' : result.tier === 'Strong fit' ? 'Refine positioning' : 'Iterate on product'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

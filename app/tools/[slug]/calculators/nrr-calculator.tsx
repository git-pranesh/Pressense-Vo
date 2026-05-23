'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateNRR, formatPercent, formatCurrency } from '@/lib/calculators'

export default function NRRCalculator() {
  const meta = getCalculatorBySlug('nrr-calculator')!
  const [startingMRR, setStartingMRR] = useState(100000)
  const [expansion, setExpansion] = useState(15000)
  const [contraction, setContraction] = useState(5000)
  const [churned, setChurned] = useState(8000)

  const result = calculateNRR({ startingMRR, expansion, contraction, churned })

  const interpretation =
    result.nrrPercent >= 120
      ? `${formatPercent(result.nrrPercent)} NRR is best-in-class — you grow even without new customers. This is the ultimate SaaS flywheel. Your expansion motion is working.`
      : result.nrrPercent >= 110
        ? `${formatPercent(result.nrrPercent)} NRR is strong — you're generating net revenue growth from existing customers. Continue investing in expansion and upsell motions.`
        : result.nrrPercent >= 100
          ? `${formatPercent(result.nrrPercent)} NRR means you're holding steady — expansion offsets churn. Push harder on upsells and usage-based pricing to break through 110%.`
          : `${formatPercent(result.nrrPercent)} NRR means your customer base is shrinking. Churn and contraction outpace expansion. Focus on retention before adding new customers.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="startingMRR"
            label="Starting MRR"
            value={startingMRR}
            onChange={setStartingMRR}
            prefix="$"
            step={1000}
            min={0}
            hint="MRR from existing customers at period start"
          />
          <NumberField
            id="expansion"
            label="Expansion MRR"
            value={expansion}
            onChange={setExpansion}
            prefix="$"
            step={100}
            min={0}
            hint="Upsells, cross-sells, upgrades"
          />
          <NumberField
            id="contraction"
            label="Contraction MRR"
            value={contraction}
            onChange={setContraction}
            prefix="$"
            step={100}
            min={0}
            hint="Downgrades and reduced usage"
          />
          <NumberField
            id="churned"
            label="Churned MRR"
            value={churned}
            onChange={setChurned}
            prefix="$"
            step={100}
            min={0}
            hint="Lost revenue from cancelled customers"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="Net Revenue Retention"
            value={formatPercent(result.nrrPercent)}
            sublabel={result.tier}
            accent={result.nrrPercent >= 100 ? 'primary' : 'default'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Net change" value={formatCurrency(expansion - contraction - churned)} />
            <SecondaryMetric label="Ending MRR" value={formatCurrency(startingMRR + expansion - contraction - churned)} />
          </div>
          <BenchmarkBar
            label="NRR vs SaaS benchmarks"
            value={Math.min(Math.max(result.nrrPercent, 80), 140)}
            min={80}
            max={140}
            zones={[
              { from: 80, to: 100, label: 'Poor', color: 'red' },
              { from: 100, to: 110, label: 'Good', color: 'yellow' },
              { from: 110, to: 120, label: 'Great', color: 'primary' },
              { from: 120, to: 140, label: 'Best-in-class', color: 'green' },
            ]}
          />
        </div>
      }
    />
  )
}

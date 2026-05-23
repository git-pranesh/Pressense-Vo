'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateCapTable } from '@/lib/calculators/calculations'
import { formatPercent, formatCurrency } from '@/lib/calculators/format'

export default function CapTableCalculator() {
  const calculator = getCalculatorBySlug('cap-table-calculator')!
  
  const [optionPoolPercent, setOptionPoolPercent] = useState(10)
  const [seedRaise, setSeedRaise] = useState(1000000)
  const [seedValuation, setSeedValuation] = useState(5000000)
  const [seriesARaise, setSeriesARaise] = useState(5000000)
  const [seriesAValuation, setSeriesAValuation] = useState(25000000)

  const result = calculateCapTable({ optionPoolPercent, seedRaise, seedValuation, seriesARaise, seriesAValuation })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Option Pool %" value={optionPoolPercent} onChange={setOptionPoolPercent} suffix="%" />
        <NumberField label="Seed Raise" value={seedRaise} onChange={setSeedRaise} prefix="$" />
        <NumberField label="Seed Post-Money" value={seedValuation} onChange={setSeedValuation} prefix="$" />
        <NumberField label="Series A Raise" value={seriesARaise} onChange={setSeriesARaise} prefix="$" />
        <NumberField label="Series A Post-Money" value={seriesAValuation} onChange={setSeriesAValuation} prefix="$" />
      </div>

      <PrimaryMetric
        label="Founder Ownership"
        value={formatPercent(result.foundersPercent)}
        comparison="After option pool and all rounds"
      />

      <MetricGrid>
        <MetricCard label="Founders" value={formatPercent(result.foundersPercent)} />
        <MetricCard label="Option Pool" value={formatPercent(result.poolPercent)} />
        <MetricCard label="Seed Investors" value={formatPercent(result.seedPercent)} />
        <MetricCard label="Series A Investors" value={formatPercent(result.seriesAPercent)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

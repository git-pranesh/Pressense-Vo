'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateRevenueChurn } from '@/lib/calculators/calculations'
import { formatPercent, formatCurrency } from '@/lib/calculators/format'

export default function RevenueChurnCalculator() {
  const calculator = getCalculatorBySlug('revenue-churn-calculator')!
  
  const [startingMRR, setStartingMRR] = useState(100000)
  const [churnedMRR, setChurnedMRR] = useState(3000)
  const [contractionMRR, setContractionMRR] = useState(2000)
  const [expansionMRR, setExpansionMRR] = useState(8000)

  const result = calculateRevenueChurn({ startingMRR, churnedMRR, contractionMRR, expansionMRR })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Starting MRR" value={startingMRR} onChange={setStartingMRR} prefix="$" />
        <NumberField label="Churned MRR" value={churnedMRR} onChange={setChurnedMRR} prefix="$" />
        <NumberField label="Contraction MRR" value={contractionMRR} onChange={setContractionMRR} prefix="$" />
        <NumberField label="Expansion MRR" value={expansionMRR} onChange={setExpansionMRR} prefix="$" />
      </div>

      <PrimaryMetric
        label="Net Revenue Churn"
        value={formatPercent(result.netChurnPercent)}
        comparison={result.isNegativeNetChurn ? 'Negative churn, expansion exceeds losses' : 'Positive churn, losses exceed expansion'}
      />

      <MetricGrid>
        <MetricCard label="Gross Churn" value={formatPercent(result.grossChurnPercent)} />
        <MetricCard label="Net Churn" value={formatPercent(result.netChurnPercent)} />
        <MetricCard label="Annualized Gross" value={formatPercent(result.annualizedGross)} />
        <MetricCard label="Status" value={result.isNegativeNetChurn ? 'Net Negative' : 'Net Positive'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

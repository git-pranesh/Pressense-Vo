'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateExpansionRevenue } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function ExpansionRevenueCalculator() {
  const calculator = getCalculatorBySlug('expansion-revenue-calculator')!
  
  const [startingMRR, setStartingMRR] = useState(100000)
  const [upsellMRR, setUpsellMRR] = useState(5000)
  const [crossSellMRR, setCrossSellMRR] = useState(3000)
  const [priceIncreaseMRR, setPriceIncreaseMRR] = useState(2000)
  const [churnedMRR, setChurnedMRR] = useState(3000)
  const [contractionMRR, setContractionMRR] = useState(1500)

  const result = calculateExpansionRevenue({ startingMRR, upsellMRR, crossSellMRR, priceIncreaseMRR, churnedMRR, contractionMRR })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Starting MRR" value={startingMRR} onChange={setStartingMRR} prefix="$" />
        <NumberField label="Upsell MRR" value={upsellMRR} onChange={setUpsellMRR} prefix="$" />
        <NumberField label="Cross-sell MRR" value={crossSellMRR} onChange={setCrossSellMRR} prefix="$" />
        <NumberField label="Price Increase MRR" value={priceIncreaseMRR} onChange={setPriceIncreaseMRR} prefix="$" />
        <NumberField label="Churned MRR" value={churnedMRR} onChange={setChurnedMRR} prefix="$" />
        <NumberField label="Contraction MRR" value={contractionMRR} onChange={setContractionMRR} prefix="$" />
      </div>

      <PrimaryMetric
        label="Net Revenue Retention"
        value={formatPercent(result.nrrPercent)}
        comparison={`Expansion contribution: ${formatPercent(result.expansionContribution)} of starting MRR`}
      />

      <MetricGrid>
        <MetricCard label="Total Expansion" value={formatCurrency(result.totalExpansion)} />
        <MetricCard label="Total Churn" value={formatCurrency(result.totalChurn)} />
        <MetricCard label="NRR" value={formatPercent(result.nrrPercent)} />
        <MetricCard label="Expansion %" value={formatPercent(result.expansionContribution)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

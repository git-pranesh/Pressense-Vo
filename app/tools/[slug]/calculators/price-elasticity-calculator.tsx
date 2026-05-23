'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculatePriceElasticity } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function PriceElasticityCalculator() {
  const calculator = getCalculatorBySlug('price-elasticity-calculator')!
  
  const [oldPrice, setOldPrice] = useState(100)
  const [newPrice, setNewPrice] = useState(120)
  const [oldQuantity, setOldQuantity] = useState(1000)
  const [newQuantity, setNewQuantity] = useState(850)

  const result = calculatePriceElasticity({ oldPrice, newPrice, oldQuantity, newQuantity })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Old Price" value={oldPrice} onChange={setOldPrice} prefix="$" />
        <NumberField label="New Price" value={newPrice} onChange={setNewPrice} prefix="$" />
        <NumberField label="Old Quantity" value={oldQuantity} onChange={setOldQuantity} />
        <NumberField label="New Quantity" value={newQuantity} onChange={setNewQuantity} />
      </div>

      <PrimaryMetric
        label="Price Elasticity"
        value={result.elasticity.toFixed(2)}
        comparison={result.interpretation}
      />

      <MetricGrid>
        <MetricCard label="Price Change" value={formatPercent(result.priceChangePct)} />
        <MetricCard label="Qty Change" value={formatPercent(result.quantityChangePct)} />
        <MetricCard label="Old Revenue" value={formatCurrency(result.oldRevenue)} />
        <MetricCard label="New Revenue" value={formatCurrency(result.newRevenue)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

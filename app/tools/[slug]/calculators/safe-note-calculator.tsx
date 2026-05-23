'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSAFENote } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function SAFENoteCalculator() {
  const calculator = getCalculatorBySlug('safe-note-calculator')!
  
  const [investment, setInvestment] = useState(500000)
  const [valuationCap, setValuationCap] = useState(8000000)
  const [discountPercent, setDiscountPercent] = useState(20)
  const [qualifyingRoundPreMoney, setQualifyingRoundPreMoney] = useState(15000000)
  const [qualifyingRoundShares, setQualifyingRoundShares] = useState(10000000)
  const [qualifyingRoundRaise, setQualifyingRoundRaise] = useState(3000000)

  const result = calculateSAFENote({ investment, valuationCap, discountPercent, qualifyingRoundPreMoney, qualifyingRoundShares, qualifyingRoundRaise })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="SAFE Investment" value={investment} onChange={setInvestment} prefix="$" />
        <NumberField label="Valuation Cap" value={valuationCap} onChange={setValuationCap} prefix="$" />
        <NumberField label="Discount %" value={discountPercent} onChange={setDiscountPercent} suffix="%" />
        <NumberField label="Round Pre-Money" value={qualifyingRoundPreMoney} onChange={setQualifyingRoundPreMoney} prefix="$" />
        <NumberField label="Pre-Money Shares" value={qualifyingRoundShares} onChange={setQualifyingRoundShares} />
        <NumberField label="Round Raise Amount" value={qualifyingRoundRaise} onChange={setQualifyingRoundRaise} prefix="$" />
      </div>

      <PrimaryMetric
        label="Conversion Price"
        value={formatCurrency(result.conversionPrice)}
        comparison={`Triggered by: ${result.triggered}`}
      />

      <MetricGrid>
        <MetricCard label="Shares Issued" value={formatNumber(result.sharesIssued)} />
        <MetricCard label="Ownership %" value={formatPercent(result.ownershipPercent)} />
        <MetricCard label="Cap Price" value={formatCurrency(result.capPrice)} />
        <MetricCard label="Discounted Price" value={formatCurrency(result.discountedPrice)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

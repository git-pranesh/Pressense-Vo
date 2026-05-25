'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateConversionRate } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function ConversionRateCalculator() {
  const calculator = getCalculatorBySlug('conversion-rate-calculator')!
  
  const [visitors, setVisitors] = useState(10000)
  const [conversions, setConversions] = useState(250)
  const [dealValue, setDealValue] = useState(500)

  const result = calculateConversionRate({ visitors, conversions, dealValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Visitors" value={visitors} onChange={setVisitors} />
        <NumberField label="Conversions" value={conversions} onChange={setConversions} />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="Conversion Rate"
        value={formatPercent(result.rate)}
        comparison={`${result.rating}, Revenue per visitor: ${formatCurrency(result.revenuePerVisitor)}`}
      />

      <MetricGrid>
        <MetricCard label="Conversion Rate" value={formatPercent(result.rate)} />
        <MetricCard label="Revenue" value={formatCurrency(result.revenue)} />
        <MetricCard label="Rev per Visitor" value={formatCurrency(result.revenuePerVisitor)} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}

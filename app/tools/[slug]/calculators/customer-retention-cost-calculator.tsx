'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateRetentionCost } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function CustomerRetentionCostCalculator() {
  const calculator = getCalculatorBySlug('customer-retention-cost-calculator')!
  
  const [csSpend, setCsSpend] = useState(150000)
  const [retainedCustomers, setRetainedCustomers] = useState(500)
  const [cac, setCac] = useState(1200)

  const result = calculateRetentionCost({ csSpend, retainedCustomers, cac })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Annual CS Spend" value={csSpend} onChange={setCsSpend} prefix="$" />
        <NumberField label="Retained Customers" value={retainedCustomers} onChange={setRetainedCustomers} />
        <NumberField label="CAC" value={cac} onChange={setCac} prefix="$" />
      </div>

      <PrimaryMetric
        label="Customer Retention Cost"
        value={formatCurrency(result.crc)}
        comparison={`${result.rating}, CRC is ${formatPercent(result.ratio * 100)} of CAC`}
      />

      <MetricGrid>
        <MetricCard label="CRC" value={formatCurrency(result.crc)} />
        <MetricCard label="CRC:CAC Ratio" value={formatPercent(result.ratio * 100)} />
        <MetricCard label="Rating" value={result.rating} />
        <MetricCard label="Benchmark" value="15-25% of CAC" />
      </MetricGrid>
    </CalculatorShell>
  )
}

'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSalesRampTime } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function SalesRampTimeCalculator() {
  const calculator = getCalculatorBySlug('sales-ramp-time-calculator')!
  
  const [rampMonths, setRampMonths] = useState(6)
  const [fullyRampedQuotaMonthly, setFullyRampedQuotaMonthly] = useState(50000)
  const [repCount, setRepCount] = useState(3)
  const [fullyLoadedCost, setFullyLoadedCost] = useState(150000)

  const result = calculateSalesRampTime({ rampMonths, fullyRampedQuotaMonthly, repCount, fullyLoadedCost })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Ramp Months" value={rampMonths} onChange={setRampMonths} />
        <NumberField label="Monthly Quota (Ramped)" value={fullyRampedQuotaMonthly} onChange={setFullyRampedQuotaMonthly} prefix="$" />
        <NumberField label="Number of Reps" value={repCount} onChange={setRepCount} />
        <NumberField label="Fully Loaded Cost (Annual)" value={fullyLoadedCost} onChange={setFullyLoadedCost} prefix="$" />
      </div>

      <PrimaryMetric
        label="Total Ramp Cost"
        value={formatCurrency(result.totalRampCost)}
        comparison={`${result.rating}, Break-even: ${formatNumber(result.breakevenMonths)} months`}
      />

      <MetricGrid>
        <MetricCard label="Productivity Lost" value={formatCurrency(result.productivityLost)} />
        <MetricCard label="Ramp Cost" value={formatCurrency(result.rampCost)} />
        <MetricCard label="Break-even" value={`${formatNumber(result.breakevenMonths)} mo`} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}

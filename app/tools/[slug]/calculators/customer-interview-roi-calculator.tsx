'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateInterviewROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function CustomerInterviewROICalculator() {
  const calculator = getCalculatorBySlug('customer-interview-roi-calculator')!
  
  const [interviewsPerQuarter, setInterviewsPerQuarter] = useState(20)
  const [hoursPerInterview, setHoursPerInterview] = useState(1.5)
  const [hourlyCost, setHourlyCost] = useState(150)
  const [retainedCustomers, setRetainedCustomers] = useState(5)
  const [dealValue, setDealValue] = useState(10000)
  const [churnPreventedRevenue, setChurnPreventedRevenue] = useState(50000)
  const [pivotsAvoidedValue, setPivotsAvoidedValue] = useState(100000)

  const result = calculateInterviewROI({ interviewsPerQuarter, hoursPerInterview, hourlyCost, retainedCustomers, dealValue, churnPreventedRevenue, pivotsAvoidedValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Interviews per Quarter" value={interviewsPerQuarter} onChange={setInterviewsPerQuarter} />
        <NumberField label="Hours per Interview" value={hoursPerInterview} onChange={setHoursPerInterview} step={0.5} />
        <NumberField label="Hourly Cost" value={hourlyCost} onChange={setHourlyCost} prefix="$" />
        <NumberField label="Retained Customers" value={retainedCustomers} onChange={setRetainedCustomers} />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
        <NumberField label="Churn Prevented Revenue" value={churnPreventedRevenue} onChange={setChurnPreventedRevenue} prefix="$" />
        <NumberField label="Pivots Avoided Value" value={pivotsAvoidedValue} onChange={setPivotsAvoidedValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="Interview ROI"
        value={formatPercent(result.roiPercent)}
        comparison={`${result.rating}, ${result.ratio.toFixed(1)}x return`}
      />

      <MetricGrid>
        <MetricCard label="Annual Interviews" value={formatNumber(result.annualInterviews)} />
        <MetricCard label="Total Cost" value={formatCurrency(result.totalCost)} />
        <MetricCard label="Total Return" value={formatCurrency(result.totalReturn)} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}

'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateIntegrationROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function SystemIntegrationROICalculator() {
  const calculator = getCalculatorBySlug('system-integration-roi-calculator')!
  
  const [implementationCost, setImplementationCost] = useState(15000)
  const [monthlyToolCost, setMonthlyToolCost] = useState(300)
  const [hoursPerWeekSaved, setHoursPerWeekSaved] = useState(8)
  const [hourlyCost, setHourlyCost] = useState(75)
  const [errorReductionValueMonthly, setErrorReductionValueMonthly] = useState(1000)
  const [monthsHorizon, setMonthsHorizon] = useState(24)

  const result = calculateIntegrationROI({ implementationCost, monthlyToolCost, hoursPerWeekSaved, hourlyCost, errorReductionValueMonthly, monthsHorizon })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Implementation Cost" value={implementationCost} onChange={setImplementationCost} prefix="$" />
        <NumberField label="Monthly Tool Cost" value={monthlyToolCost} onChange={setMonthlyToolCost} prefix="$" />
        <NumberField label="Hours Saved per Week" value={hoursPerWeekSaved} onChange={setHoursPerWeekSaved} />
        <NumberField label="Hourly Cost" value={hourlyCost} onChange={setHourlyCost} prefix="$" />
        <NumberField label="Error Reduction Value (Monthly)" value={errorReductionValueMonthly} onChange={setErrorReductionValueMonthly} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
      </div>

      <PrimaryMetric
        label="Integration ROI"
        value={formatPercent(result.roiPercent)}
        comparison={`${result.rating}, Payback: ${formatNumber(result.paybackMonths)} months`}
      />

      <MetricGrid>
        <MetricCard label="Monthly Time Savings" value={formatCurrency(result.monthlyTimeSavings)} />
        <MetricCard label="Monthly Value" value={formatCurrency(result.monthlyValue)} />
        <MetricCard label="Net Return" value={formatCurrency(result.netReturn)} />
        <MetricCard label="Payback" value={`${formatNumber(result.paybackMonths)} mo`} />
      </MetricGrid>
    </CalculatorShell>
  )
}

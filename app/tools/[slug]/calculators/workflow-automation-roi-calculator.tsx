'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateAutomationROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function WorkflowAutomationROICalculator() {
  const calculator = getCalculatorBySlug('workflow-automation-roi-calculator')!
  
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [hourlyCost, setHourlyCost] = useState(75)
  const [automationCost, setAutomationCost] = useState(5000)
  const [monthlyMaintenanceCost, setMonthlyMaintenanceCost] = useState(200)
  const [monthsHorizon, setMonthsHorizon] = useState(12)

  const result = calculateAutomationROI({ hoursPerWeek, hourlyCost, automationCost, monthlyMaintenanceCost, monthsHorizon })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Hours Saved per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
        <NumberField label="Hourly Cost" value={hourlyCost} onChange={setHourlyCost} prefix="$" />
        <NumberField label="Automation Cost" value={automationCost} onChange={setAutomationCost} prefix="$" />
        <NumberField label="Monthly Maintenance" value={monthlyMaintenanceCost} onChange={setMonthlyMaintenanceCost} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
      </div>

      <PrimaryMetric
        label="Automation ROI"
        value={formatPercent(result.roiPercent)}
        comparison={`${result.rating}, Payback: ${formatNumber(result.paybackMonths)} months`}
      />

      <MetricGrid>
        <MetricCard label="Monthly Hours Saved" value={formatNumber(result.monthlyHoursSaved)} />
        <MetricCard label="Monthly Savings" value={formatCurrency(result.monthlySavings)} />
        <MetricCard label="Net Return" value={formatCurrency(result.netReturn)} />
        <MetricCard label="Payback" value={`${formatNumber(result.paybackMonths)} mo`} />
      </MetricGrid>
    </CalculatorShell>
  )
}

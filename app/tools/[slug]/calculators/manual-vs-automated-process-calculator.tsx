'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateManualVsAutomated } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function ManualVsAutomatedProcessCalculator() {
  const calculator = getCalculatorBySlug('manual-vs-automated-process-calculator')!
  
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(20)
  const [manualHourlyCost, setManualHourlyCost] = useState(50)
  const [errorRatePercent, setErrorRatePercent] = useState(5)
  const [errorCost, setErrorCost] = useState(200)
  const [automationOneTimeCost, setAutomationOneTimeCost] = useState(10000)
  const [automationMonthlyCost, setAutomationMonthlyCost] = useState(300)
  const [monthsHorizon, setMonthsHorizon] = useState(24)

  const result = calculateManualVsAutomated({ manualHoursPerWeek, manualHourlyCost, errorRatePercent, errorCost, automationOneTimeCost, automationMonthlyCost, monthsHorizon })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Manual Hours per Week" value={manualHoursPerWeek} onChange={setManualHoursPerWeek} />
        <NumberField label="Manual Hourly Cost" value={manualHourlyCost} onChange={setManualHourlyCost} prefix="$" />
        <NumberField label="Error Rate %" value={errorRatePercent} onChange={setErrorRatePercent} suffix="%" />
        <NumberField label="Cost per Error" value={errorCost} onChange={setErrorCost} prefix="$" />
        <NumberField label="Automation One-Time Cost" value={automationOneTimeCost} onChange={setAutomationOneTimeCost} prefix="$" />
        <NumberField label="Automation Monthly Cost" value={automationMonthlyCost} onChange={setAutomationMonthlyCost} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
      </div>

      <PrimaryMetric
        label="Recommendation"
        value={result.recommendation}
        comparison={`Savings: ${formatCurrency(result.savings)} over ${monthsHorizon} months`}
      />

      <MetricGrid>
        <MetricCard label="Manual Cost" value={formatCurrency(result.totalManualCost)} />
        <MetricCard label="Automated Cost" value={formatCurrency(result.totalAutomatedCost)} />
        <MetricCard label="Monthly Error Cost" value={formatCurrency(result.monthlyErrorCost)} />
        <MetricCard label="Payback" value={result.paybackMonths > 0 ? `${formatNumber(result.paybackMonths)} mo` : 'N/A'} />
      </MetricGrid>
    </CalculatorShell>
  )
}

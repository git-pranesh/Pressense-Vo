'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateLinkedInROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function LinkedInPersonalBrandROICalculator() {
  const calculator = getCalculatorBySlug('linkedin-personal-brand-roi-calculator')!
  
  const [hoursPerWeek, setHoursPerWeek] = useState(5)
  const [hourlyValue, setHourlyValue] = useState(150)
  const [monthsHorizon, setMonthsHorizon] = useState(12)
  const [monthlyInbounds, setMonthlyInbounds] = useState(8)
  const [leadToCustomerPercent, setLeadToCustomerPercent] = useState(10)
  const [dealValue, setDealValue] = useState(5000)

  const result = calculateLinkedInROI({ hoursPerWeek, hourlyValue, monthsHorizon, monthlyInbounds, leadToCustomerPercent, dealValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Hours per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
        <NumberField label="Hourly Value" value={hourlyValue} onChange={setHourlyValue} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
        <NumberField label="Monthly Inbounds" value={monthlyInbounds} onChange={setMonthlyInbounds} />
        <NumberField label="Lead to Customer %" value={leadToCustomerPercent} onChange={setLeadToCustomerPercent} suffix="%" />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="LinkedIn ROI"
        value={formatPercent(result.roiPercent)}
        comparison={`${result.rating} — ${result.ratio.toFixed(1)}x return on time`}
      />

      <MetricGrid>
        <MetricCard label="Total Hours" value={formatNumber(result.totalHours)} />
        <MetricCard label="Time Cost" value={formatCurrency(result.timeCost)} />
        <MetricCard label="Revenue" value={formatCurrency(result.revenue)} />
        <MetricCard label="Customers" value={formatNumber(result.customers)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

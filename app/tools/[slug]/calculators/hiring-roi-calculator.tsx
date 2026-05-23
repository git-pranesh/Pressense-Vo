'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateHiringROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function HiringROICalculator() {
  const calculator = getCalculatorBySlug('hiring-roi-calculator')!
  
  const [fullyLoadedCost, setFullyLoadedCost] = useState(180000)
  const [expectedAnnualContribution, setExpectedAnnualContribution] = useState(300000)
  const [rampMonths, setRampMonths] = useState(6)
  const [retentionMonths, setRetentionMonths] = useState(24)

  const result = calculateHiringROI({ fullyLoadedCost, expectedAnnualContribution, rampMonths, retentionMonths })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Fully Loaded Cost (Annual)" value={fullyLoadedCost} onChange={setFullyLoadedCost} prefix="$" />
        <NumberField label="Expected Annual Contribution" value={expectedAnnualContribution} onChange={setExpectedAnnualContribution} prefix="$" />
        <NumberField label="Ramp Months" value={rampMonths} onChange={setRampMonths} />
        <NumberField label="Expected Retention (Months)" value={retentionMonths} onChange={setRetentionMonths} />
      </div>

      <PrimaryMetric
        label="Hiring ROI"
        value={formatPercent(result.roiPercent)}
        comparison={`${result.rating} — Payback: ${formatNumber(result.paybackMonths)} months`}
      />

      <MetricGrid>
        <MetricCard label="Ramped Contribution" value={formatCurrency(result.rampedContribution)} />
        <MetricCard label="Total Cost" value={formatCurrency(result.totalCost)} />
        <MetricCard label="Net Return" value={formatCurrency(result.netReturn)} />
        <MetricCard label="Payback" value={`${formatNumber(result.paybackMonths)} mo`} />
      </MetricGrid>
    </CalculatorShell>
  )
}

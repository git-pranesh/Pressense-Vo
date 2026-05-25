'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSalesVelocity } from '@/lib/calculators/calculations'
import { formatCurrency } from '@/lib/calculators/format'

export default function SalesFunnelVelocityCalculator() {
  const calculator = getCalculatorBySlug('sales-funnel-velocity-calculator')!
  
  const [opportunities, setOpportunities] = useState(100)
  const [winRatePercent, setWinRatePercent] = useState(25)
  const [avgDealSize, setAvgDealSize] = useState(10000)
  const [cycleLengthDays, setCycleLengthDays] = useState(45)

  const result = calculateSalesVelocity({ opportunities, winRatePercent, avgDealSize, cycleLengthDays })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Opportunities" value={opportunities} onChange={setOpportunities} />
        <NumberField label="Win Rate %" value={winRatePercent} onChange={setWinRatePercent} suffix="%" />
        <NumberField label="Avg Deal Size" value={avgDealSize} onChange={setAvgDealSize} prefix="$" />
        <NumberField label="Cycle Length (days)" value={cycleLengthDays} onChange={setCycleLengthDays} />
      </div>

      <PrimaryMetric
        label="Monthly Velocity"
        value={formatCurrency(result.monthlyVelocity)}
        comparison={`${result.rating}, Daily: ${formatCurrency(result.dailyVelocity)}`}
      />

      <MetricGrid>
        <MetricCard label="Daily" value={formatCurrency(result.dailyVelocity)} />
        <MetricCard label="Monthly" value={formatCurrency(result.monthlyVelocity)} />
        <MetricCard label="Quarterly" value={formatCurrency(result.quarterlyVelocity)} />
        <MetricCard label="Annual" value={formatCurrency(result.annualVelocity)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

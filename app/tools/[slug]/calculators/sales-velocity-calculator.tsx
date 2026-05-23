'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSalesVelocity } from '@/lib/calculators/calculations'
import { formatCurrency } from '@/lib/calculators/format'

export default function SalesVelocityCalculator() {
  const calculator = getCalculatorBySlug('sales-funnel-velocity-calculator')!

  const [opportunities, setOpportunities] = useState(50)
  const [winRatePercent, setWinRatePercent] = useState(25)
  const [avgDealSize, setAvgDealSize] = useState(15000)
  const [cycleLengthDays, setCycleLengthDays] = useState(45)

  const result = calculateSalesVelocity({ opportunities, winRatePercent, avgDealSize, cycleLengthDays })

  const ratingColor =
    result.rating === 'Elite'
      ? 'text-emerald-400'
      : result.rating === 'Fast'
        ? 'text-green-400'
        : result.rating === 'Average'
          ? 'text-yellow-400'
          : 'text-red-400'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <NumberField label="Open Opportunities" value={opportunities} onChange={setOpportunities} />
          <NumberField label="Win Rate (%)" value={winRatePercent} onChange={setWinRatePercent} suffix="%" max={100} />
          <NumberField label="Average Deal Size" value={avgDealSize} onChange={setAvgDealSize} prefix="$" />
          <NumberField label="Sales Cycle (Days)" value={cycleLengthDays} onChange={setCycleLengthDays} />
        </div>

        <div className="space-y-4">
          <PrimaryMetric label="Monthly Velocity" value={formatCurrency(result.monthlyVelocity)} />
          <MetricGrid>
            <MetricCard label="Daily Velocity" value={formatCurrency(result.dailyVelocity)} />
            <MetricCard label="Quarterly" value={formatCurrency(result.quarterlyVelocity)} />
            <MetricCard label="Annual" value={formatCurrency(result.annualVelocity)} />
            <MetricCard label="Rating" value={<span className={ratingColor}>{result.rating}</span>} />
          </MetricGrid>
          <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              {result.rating === 'Elite' && 'Outstanding velocity! Your pipeline is converting efficiently.'}
              {result.rating === 'Fast' && 'Strong velocity. Look for opportunities to increase deal size or shorten cycles.'}
              {result.rating === 'Average' && 'Moderate velocity. Focus on improving win rate or reducing cycle length.'}
              {result.rating === 'Slow' && 'Velocity needs improvement. Diagnose which lever (opportunities, win rate, deal size, cycle) is the bottleneck.'}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}

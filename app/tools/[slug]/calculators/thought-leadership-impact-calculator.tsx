'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateThoughtLeadership } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function ThoughtLeadershipImpactCalculator() {
  const calculator = getCalculatorBySlug('thought-leadership-impact-calculator')!
  
  const [monthlyReach, setMonthlyReach] = useState(25000)
  const [engagementPercent, setEngagementPercent] = useState(3)
  const [inboundsPerMonth, setInboundsPerMonth] = useState(10)
  const [monthlyPipelineValue, setMonthlyPipelineValue] = useState(50000)
  const [brandLiftScore, setBrandLiftScore] = useState(7)
  const [monthlyEffortHours, setMonthlyEffortHours] = useState(20)
  const [hourlyValue, setHourlyValue] = useState(150)

  const result = calculateThoughtLeadership({ monthlyReach, engagementPercent, inboundsPerMonth, monthlyPipelineValue, brandLiftScore, monthlyEffortHours, hourlyValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Monthly Reach" value={monthlyReach} onChange={setMonthlyReach} />
        <NumberField label="Engagement %" value={engagementPercent} onChange={setEngagementPercent} suffix="%" />
        <NumberField label="Inbounds per Month" value={inboundsPerMonth} onChange={setInboundsPerMonth} />
        <NumberField label="Monthly Pipeline Value" value={monthlyPipelineValue} onChange={setMonthlyPipelineValue} prefix="$" />
        <NumberField label="Brand Lift Score (1-10)" value={brandLiftScore} onChange={setBrandLiftScore} min={1} max={10} />
        <NumberField label="Monthly Effort Hours" value={monthlyEffortHours} onChange={setMonthlyEffortHours} />
        <NumberField label="Hourly Value" value={hourlyValue} onChange={setHourlyValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="Impact Score"
        value={result.impactScore.toFixed(0)}
        comparison={`${result.tier}, ROI: ${formatPercent(result.roiPercent)}`}
      />

      <MetricGrid>
        <MetricCard label="Engaged Audience" value={formatNumber(result.engagedAudience)} />
        <MetricCard label="Annual Pipeline" value={formatCurrency(result.annualPipeline)} />
        <MetricCard label="Annual Effort Cost" value={formatCurrency(result.annualEffortCost)} />
        <MetricCard label="Tier" value={result.tier} />
      </MetricGrid>
    </CalculatorShell>
  )
}

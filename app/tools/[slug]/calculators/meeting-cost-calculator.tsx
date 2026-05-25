'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateMeetingCost } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function MeetingCostCalculator() {
  const calculator = getCalculatorBySlug('meeting-cost-calculator')!
  
  const [attendees, setAttendees] = useState(6)
  const [avgHourlyCost, setAvgHourlyCost] = useState(100)
  const [durationMinutes, setDurationMinutes] = useState(60)
  const [frequencyPerYear, setFrequencyPerYear] = useState(52)
  const [decisionsPerMeeting, setDecisionsPerMeeting] = useState(2)

  const result = calculateMeetingCost({ attendees, avgHourlyCost, durationMinutes, frequencyPerYear, decisionsPerMeeting })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Attendees" value={attendees} onChange={setAttendees} />
        <NumberField label="Avg Hourly Cost" value={avgHourlyCost} onChange={setAvgHourlyCost} prefix="$" />
        <NumberField label="Duration (minutes)" value={durationMinutes} onChange={setDurationMinutes} />
        <NumberField label="Frequency per Year" value={frequencyPerYear} onChange={setFrequencyPerYear} />
        <NumberField label="Decisions per Meeting" value={decisionsPerMeeting} onChange={setDecisionsPerMeeting} />
      </div>

      <PrimaryMetric
        label="Cost per Meeting"
        value={formatCurrency(result.costPerMeeting)}
        comparison={`${result.rating}, Cost per decision: ${formatCurrency(result.costPerDecision)}`}
      />

      <MetricGrid>
        <MetricCard label="Cost per Meeting" value={formatCurrency(result.costPerMeeting)} />
        <MetricCard label="Annual Cost" value={formatCurrency(result.annualCost)} />
        <MetricCard label="Annual Hours" value={formatNumber(result.annualHours)} />
        <MetricCard label="Cost per Decision" value={formatCurrency(result.costPerDecision)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

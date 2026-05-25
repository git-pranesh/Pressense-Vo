'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateTeamCapacity } from '@/lib/calculators/calculations'
import { formatNumber, formatPercent } from '@/lib/calculators/format'

export default function TeamCapacityCalculator() {
  const calculator = getCalculatorBySlug('team-capacity-calculator')!
  
  const [teamSize, setTeamSize] = useState(6)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)
  const [meetingHoursPerWeek, setMeetingHoursPerWeek] = useState(10)
  const [ptoWeeksPerYear, setPtoWeeksPerYear] = useState(4)
  const [rampPercent, setRampPercent] = useState(10)
  const [adminPercent, setAdminPercent] = useState(10)

  const result = calculateTeamCapacity({ teamSize, hoursPerWeek, meetingHoursPerWeek, ptoWeeksPerYear, rampPercent, adminPercent })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Team Size" value={teamSize} onChange={setTeamSize} />
        <NumberField label="Hours per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
        <NumberField label="Meeting Hours per Week" value={meetingHoursPerWeek} onChange={setMeetingHoursPerWeek} />
        <NumberField label="PTO Weeks per Year" value={ptoWeeksPerYear} onChange={setPtoWeeksPerYear} />
        <NumberField label="Ramp %" value={rampPercent} onChange={setRampPercent} suffix="%" />
        <NumberField label="Admin %" value={adminPercent} onChange={setAdminPercent} suffix="%" />
      </div>

      <PrimaryMetric
        label="Effective Hours"
        value={formatNumber(result.effectiveHours)}
        comparison={`${result.rating}, Utilization: ${formatPercent(result.utilizationPercent)}`}
      />

      <MetricGrid>
        <MetricCard label="Gross Hours" value={formatNumber(result.grossHoursPerYear)} />
        <MetricCard label="Effective Hours" value={formatNumber(result.effectiveHours)} />
        <MetricCard label="Per Person" value={formatNumber(result.effectiveHoursPerPerson)} />
        <MetricCard label="Utilization" value={formatPercent(result.utilizationPercent)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateBurnoutRisk } from '@/lib/calculators/calculations'

export default function FounderBurnoutRiskCalculator() {
  const calculator = getCalculatorBySlug('founder-burnout-risk-calculator')!
  
  const [hoursPerWeek, setHoursPerWeek] = useState(60)
  const [sleepHoursPerNight, setSleepHoursPerNight] = useState(6)
  const [exerciseDaysPerWeek, setExerciseDaysPerWeek] = useState(2)
  const [supportSystemScore, setSupportSystemScore] = useState(6)
  const [financialStressScore, setFinancialStressScore] = useState(5)

  const result = calculateBurnoutRisk({ hoursPerWeek, sleepHoursPerNight, exerciseDaysPerWeek, supportSystemScore, financialStressScore })

  const tierColor = result.tier === 'Critical' ? 'text-red-500' : result.tier === 'High' ? 'text-orange-500' : result.tier === 'Medium' ? 'text-yellow-500' : 'text-green-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Hours per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
        <NumberField label="Sleep Hours per Night" value={sleepHoursPerNight} onChange={setSleepHoursPerNight} step={0.5} />
        <NumberField label="Exercise Days per Week" value={exerciseDaysPerWeek} onChange={setExerciseDaysPerWeek} min={0} max={7} />
        <NumberField label="Support System (1-10)" value={supportSystemScore} onChange={setSupportSystemScore} min={1} max={10} />
        <NumberField label="Financial Stress (1-10)" value={financialStressScore} onChange={setFinancialStressScore} min={1} max={10} />
      </div>

      <PrimaryMetric
        label="Burnout Risk Score"
        value={result.score.toFixed(0)}
        comparison={<span className={tierColor}>{result.tier} Risk</span>}
      />

      <MetricGrid>
        <MetricCard label="Hours Risk" value={result.breakdown.hoursRisk.toFixed(0)} />
        <MetricCard label="Sleep Risk" value={result.breakdown.sleepRisk.toFixed(0)} />
        <MetricCard label="Exercise Risk" value={result.breakdown.exerciseRisk.toFixed(0)} />
        <MetricCard label="Support Risk" value={result.breakdown.supportRisk.toFixed(0)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

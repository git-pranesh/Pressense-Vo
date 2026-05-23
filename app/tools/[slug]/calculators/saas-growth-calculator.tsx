'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateSaasGrowth, formatCurrency, formatPercent } from '@/lib/calculators'

export default function SaasGrowthCalculator() {
  const meta = getCalculatorBySlug('saas-growth-calculator')!
  const [startingMRR, setStartingMRR] = useState(50000)
  const [growthRatePercent, setGrowthRatePercent] = useState(10)
  const [months, setMonths] = useState(12)

  const result = calculateSaasGrowth({ startingMRR, growthRatePercent, months })

  const growthMultiple = startingMRR > 0 ? result.endingMRR / startingMRR : 0

  const interpretation =
    growthRatePercent >= 10
      ? `At ${formatPercent(growthRatePercent)} monthly growth, you'll reach ${formatCurrency(result.endingARR, { compact: true })} ARR in ${months} months — a ${growthMultiple.toFixed(1)}x increase. This is strong early-stage growth that compounds rapidly.`
      : growthRatePercent >= 5
        ? `${formatPercent(growthRatePercent)} monthly growth will get you to ${formatCurrency(result.endingARR, { compact: true })} ARR. This is healthy growth-stage trajectory. Consider what levers could push you toward 10%+.`
        : growthRatePercent >= 2
          ? `${formatPercent(growthRatePercent)} monthly growth puts you on a slower path to ${formatCurrency(result.endingARR, { compact: true })} ARR. At this rate, you may need to adjust strategy or explore new channels.`
          : `${formatPercent(growthRatePercent)} monthly growth indicates potential stalling. Review your acquisition channels and consider if the market or positioning needs adjustment.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="startingMRR"
            label="Starting MRR"
            value={startingMRR}
            onChange={setStartingMRR}
            prefix="$"
            step={1000}
            min={0}
            hint="Current monthly recurring revenue"
          />
          <NumberField
            id="growthRatePercent"
            label="Monthly growth rate"
            value={growthRatePercent}
            onChange={setGrowthRatePercent}
            suffix="%"
            step={0.5}
            min={0}
            max={50}
            hint="Expected month-over-month growth"
          />
          <NumberField
            id="months"
            label="Projection period"
            value={months}
            onChange={setMonths}
            suffix="months"
            step={1}
            min={1}
            max={60}
            hint="How far to project"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="Projected ARR"
            value={formatCurrency(result.endingARR, { compact: result.endingARR >= 100000 })}
            sublabel={`After ${months} months at ${formatPercent(growthRatePercent)}/mo`}
            accent="primary"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Ending MRR" value={formatCurrency(result.endingMRR, { compact: true })} />
            <SecondaryMetric label="Growth multiple" value={`${growthMultiple.toFixed(1)}x`} />
          </div>
          <BenchmarkBar
            label="Growth rate vs benchmarks"
            value={Math.min(growthRatePercent, 15)}
            min={0}
            max={15}
            zones={[
              { from: 0, to: 3, label: 'Stalling', color: 'red' },
              { from: 3, to: 5, label: 'Slow', color: 'yellow' },
              { from: 5, to: 10, label: 'Growing', color: 'primary' },
              { from: 10, to: 15, label: 'Strong', color: 'green' },
            ]}
          />
        </div>
      }
    />
  )
}

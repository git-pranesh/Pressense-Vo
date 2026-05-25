'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateBurnAndRunway, formatCurrency, formatNumber } from '@/lib/calculators'

export default function BurnRateCalculator() {
  const meta = getCalculatorBySlug('burn-rate-calculator')!
  const [cashInBank, setCashInBank] = useState(1000000)
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000)
  const [monthlyExpenses, setMonthlyExpenses] = useState(100000)

  const result = calculateBurnAndRunway({ cashInBank, monthlyRevenue, monthlyExpenses })

  const runwayDisplay = isFinite(result.runwayMonths)
    ? `${formatNumber(result.runwayMonths, 1)} months`
    : 'Infinite (profitable)'

  const interpretation =
    result.netBurn <= 0
      ? `Congratulations, you're cash flow positive with ${formatCurrency(Math.abs(result.netBurn))} in monthly surplus. You have infinite runway and can grow without external funding.`
      : result.runwayMonths < 6
        ? `${runwayDisplay} of runway is critical. You need to either raise immediately, cut costs drastically, or both. Every week matters at this stage.`
        : result.runwayMonths < 12
          ? `${runwayDisplay} of runway is tight. Start fundraising conversations now, a typical raise takes 4-6 months. Identify which expenses can be reduced if needed.`
          : result.runwayMonths < 18
            ? `${runwayDisplay} is acceptable but not comfortable. Plan your next raise within 3-6 months to maintain leverage in negotiations.`
            : `${runwayDisplay} of runway gives you breathing room. Focus on hitting milestones that will improve your next round's valuation.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="cashInBank"
            label="Cash in bank"
            value={cashInBank}
            onChange={setCashInBank}
            prefix="$"
            step={10000}
            min={0}
            hint="Current cash balance"
          />
          <NumberField
            id="monthlyRevenue"
            label="Monthly revenue"
            value={monthlyRevenue}
            onChange={setMonthlyRevenue}
            prefix="$"
            step={1000}
            min={0}
            hint="Average monthly recurring revenue"
          />
          <NumberField
            id="monthlyExpenses"
            label="Monthly expenses"
            value={monthlyExpenses}
            onChange={setMonthlyExpenses}
            prefix="$"
            step={1000}
            min={0}
            hint="Total monthly operating costs"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="Cash runway"
            value={runwayDisplay}
            sublabel={result.netBurn > 0 ? `At current burn of ${formatCurrency(result.netBurn)}/mo` : 'Cash flow positive'}
            accent={result.runwayMonths >= 18 || result.netBurn <= 0 ? 'primary' : result.runwayMonths < 6 ? 'default' : 'secondary'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Net burn" value={result.netBurn > 0 ? formatCurrency(result.netBurn) : '$0'} />
            <SecondaryMetric label="Gross burn" value={formatCurrency(result.grossBurn)} />
          </div>
          {result.netBurn > 0 && (
            <BenchmarkBar
              label="Runway health"
              value={Math.min(result.runwayMonths, 24)}
              min={0}
              max={24}
              zones={[
                { from: 0, to: 6, label: 'Critical', color: 'red' },
                { from: 6, to: 12, label: 'Tight', color: 'yellow' },
                { from: 12, to: 18, label: 'Acceptable', color: 'primary' },
                { from: 18, to: 24, label: 'Healthy', color: 'green' },
              ]}
            />
          )}
        </div>
      }
    />
  )
}

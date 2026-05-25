'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateChurnRate, formatPercent } from '@/lib/calculators'

export default function ChurnRateCalculator() {
  const meta = getCalculatorBySlug('churn-rate-calculator')!
  const [startValue, setStartValue] = useState(100)
  const [lostValue, setLostValue] = useState(5)

  const result = calculateChurnRate({ mode: 'customer', startValue, lostValue })

  const interpretation =
    result.churnPercent < 2
      ? `${formatPercent(result.churnPercent)} monthly churn is excellent, enterprise-level retention. You have a sticky product. Focus on expansion revenue to maximize LTV.`
      : result.churnPercent < 5
        ? `${formatPercent(result.churnPercent)} monthly churn is healthy for SMB/mid-market SaaS. There's room to improve through better onboarding and customer success.`
        : result.churnPercent < 7
          ? `${formatPercent(result.churnPercent)} monthly churn is typical for SMB but concerning for mid-market. Investigate: is it onboarding failure, product gaps, or customer fit issues?`
          : `${formatPercent(result.churnPercent)} monthly churn is critical. You're losing over 50% of customers annually. This is a product-market fit or ICP problem, not a retention problem.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="startValue"
            label="Customers at start of period"
            value={startValue}
            onChange={setStartValue}
            step={1}
            min={0}
            hint="Beginning of month/quarter"
          />
          <NumberField
            id="lostValue"
            label="Customers lost during period"
            value={lostValue}
            onChange={setLostValue}
            step={1}
            min={0}
            hint="Churned/cancelled customers"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="Monthly churn rate"
            value={formatPercent(result.churnPercent)}
            sublabel={`${formatPercent(result.retentionPercent)} retention`}
            accent={result.churnPercent < 3 ? 'primary' : result.churnPercent > 5 ? 'default' : 'secondary'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Annualized churn" value={formatPercent(result.annualizedChurn)} />
            <SecondaryMetric label="Retention rate" value={formatPercent(result.retentionPercent)} />
          </div>
          <BenchmarkBar
            label="Churn vs SaaS benchmarks"
            value={Math.min(result.churnPercent, 10)}
            min={0}
            max={10}
            zones={[
              { from: 0, to: 2, label: 'Enterprise', color: 'green' },
              { from: 2, to: 5, label: 'Mid-market', color: 'primary' },
              { from: 5, to: 7, label: 'SMB', color: 'yellow' },
              { from: 7, to: 10, label: 'Critical', color: 'red' },
            ]}
          />
        </div>
      }
    />
  )
}

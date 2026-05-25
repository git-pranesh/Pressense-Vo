'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateLTV, formatCurrency, formatNumber } from '@/lib/calculators'

export default function LTVCalculator() {
  const meta = getCalculatorBySlug('ltv-calculator')!
  const [arpu, setArpu] = useState(500)
  const [grossMarginPercent, setGrossMarginPercent] = useState(75)
  const [monthlyChurnPercent, setMonthlyChurnPercent] = useState(3)

  const result = calculateLTV({ arpu, grossMarginPercent, monthlyChurnPercent })

  const interpretation =
    result.ltv < 5000
      ? `An LTV of ${formatCurrency(result.ltv)} is typical for SMB SaaS. To move upmarket, focus on reducing churn and expanding ARPU through upsells and cross-sells.`
      : result.ltv < 25000
        ? `${formatCurrency(result.ltv)} is healthy mid-market LTV. You have room to invest in CAC, pair this with your payback period to optimize spend.`
        : `${formatCurrency(result.ltv)} is strong enterprise LTV. This justifies significant sales and onboarding investment. Focus on maintaining retention to protect this value.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="arpu"
            label="Average revenue per user (monthly)"
            value={arpu}
            onChange={setArpu}
            prefix="$"
            step={50}
            min={0}
            hint="Monthly recurring revenue per customer"
          />
          <NumberField
            id="grossMarginPercent"
            label="Gross margin"
            value={grossMarginPercent}
            onChange={setGrossMarginPercent}
            suffix="%"
            step={1}
            min={0}
            max={100}
            hint="Revenue minus cost of goods sold"
          />
          <NumberField
            id="monthlyChurnPercent"
            label="Monthly churn rate"
            value={monthlyChurnPercent}
            onChange={setMonthlyChurnPercent}
            suffix="%"
            step={0.1}
            min={0}
            max={100}
            hint="Percentage of customers lost per month"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="Customer lifetime value"
            value={formatCurrency(result.ltv, { compact: result.ltv >= 10000 })}
            sublabel="Total value over customer lifetime"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Average customer lifespan" value={`${formatNumber(result.monthsRetained, 1)} months`} />
            <SecondaryMetric label="Monthly contribution margin" value={formatCurrency(arpu * (grossMarginPercent / 100))} />
          </div>
          <BenchmarkBar
            label="LTV vs B2B SaaS benchmarks"
            value={Math.min(result.ltv, 100000)}
            min={0}
            max={100000}
            zones={[
              { from: 0, to: 5000, label: 'SMB', color: 'yellow' },
              { from: 5000, to: 25000, label: 'Mid-market', color: 'primary' },
              { from: 25000, to: 100000, label: 'Enterprise', color: 'green' },
            ]}
          />
        </div>
      }
    />
  )
}

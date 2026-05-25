'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateLTVCACRatio, formatCurrency, formatRatio } from '@/lib/calculators'

export default function LTVCACRatioCalculator() {
  const meta = getCalculatorBySlug('ltv-cac-ratio-calculator')!
  const [ltv, setLtv] = useState(15000)
  const [cac, setCac] = useState(5000)

  const result = calculateLTVCACRatio({ ltv, cac })

  const interpretation =
    result.healthLabel === 'unhealthy'
      ? `A ratio of ${formatRatio(result.ratio)} means you're spending more to acquire customers than they're worth. Urgent action needed: reduce CAC or improve retention to raise LTV.`
      : result.healthLabel === 'okay'
        ? `${formatRatio(result.ratio)} is marginal, you're barely breaking even on acquisition. Focus on improving both LTV (via retention) and reducing CAC (via channel efficiency).`
        : result.healthLabel === 'healthy'
          ? `${formatRatio(result.ratio)} is the SaaS gold standard. You have a sustainable unit economics engine. Consider scaling acquisition spend.`
          : `${formatRatio(result.ratio)} suggests you may be under-investing in growth. Competitors with more aggressive spend could capture market share. Consider increasing acquisition investment.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="ltv"
            label="Customer Lifetime Value (LTV)"
            value={ltv}
            onChange={setLtv}
            prefix="$"
            step={1000}
            min={0}
            hint="Use the LTV calculator if you don't have this"
          />
          <NumberField
            id="cac"
            label="Customer Acquisition Cost (CAC)"
            value={cac}
            onChange={setCac}
            prefix="$"
            step={100}
            min={0}
            hint="Use the CAC calculator if you don't have this"
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric
            label="LTV:CAC ratio"
            value={formatRatio(result.ratio)}
            sublabel={
              result.healthLabel === 'unhealthy'
                ? 'Unsustainable, losing money on each customer'
                : result.healthLabel === 'okay'
                  ? 'Marginal, room for improvement'
                  : result.healthLabel === 'healthy'
                    ? 'Healthy, sustainable growth'
                    : 'Under-investing, consider scaling spend'
            }
            accent={result.healthLabel === 'healthy' ? 'primary' : result.healthLabel === 'unhealthy' ? 'default' : 'secondary'}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="LTV" value={formatCurrency(ltv, { compact: true })} />
            <SecondaryMetric label="CAC" value={formatCurrency(cac, { compact: true })} />
          </div>
          <BenchmarkBar
            label="Ratio vs SaaS benchmarks"
            value={Math.min(result.ratio, 8)}
            min={0}
            max={8}
            zones={[
              { from: 0, to: 1, label: 'Unhealthy', color: 'red' },
              { from: 1, to: 3, label: 'Okay', color: 'yellow' },
              { from: 3, to: 5, label: 'Healthy', color: 'green' },
              { from: 5, to: 8, label: 'Under-investing', color: 'primary' },
            ]}
          />
        </div>
      }
    />
  )
}

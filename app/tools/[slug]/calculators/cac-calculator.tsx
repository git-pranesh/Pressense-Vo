'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, SecondaryMetric, BenchmarkBar } from '@/components/calculators/metric-card'
import { getCalculatorBySlug, calculateCAC, formatCurrency } from '@/lib/calculators'

export default function CACCalculator() {
  const meta = getCalculatorBySlug('cac-calculator')!
  const [totalSpend, setTotalSpend] = useState(100000)
  const [newCustomers, setNewCustomers] = useState(50)

  const result = calculateCAC({ totalSpend, newCustomers })
  const costPerDay = newCustomers > 0 ? totalSpend / newCustomers / 30 : 0

  const interpretation =
    result.cac < 500
      ? `A CAC of ${formatCurrency(result.cac)} is highly efficient for B2B SaaS — you're firmly in self-serve / SMB territory. Watch whether scaling spend keeps efficiency or whether the next dollar of ad spend brings less efficient customers.`
      : result.cac < 1500
        ? `${formatCurrency(result.cac)} is healthy mid-market CAC. The lever now is LTV: pair this with strong retention and expansion to make payback fast.`
        : `${formatCurrency(result.cac)} is enterprise-scale CAC. Justified only with high ARPU and multi-year contracts. If your deal sizes don't match, audit which channels are inflating blended CAC.`

  return (
    <CalculatorShell
      meta={meta}
      interpretation={interpretation}
      inputs={
        <div className="space-y-5">
          <NumberField
            id="totalSpend"
            label="Total sales & marketing spend"
            value={totalSpend}
            onChange={setTotalSpend}
            prefix="$"
            step={1000}
            min={0}
            hint="Include salaries, ads, tools, commissions"
          />
          <NumberField
            id="newCustomers"
            label="New customers acquired"
            value={newCustomers}
            onChange={setNewCustomers}
            step={1}
            min={0}
          />
        </div>
      }
      results={
        <div className="space-y-5">
          <PrimaryMetric label="Customer acquisition cost" value={formatCurrency(result.cac)} sublabel="Fully-loaded blended CAC" />
          <div className="grid gap-3 sm:grid-cols-2">
            <SecondaryMetric label="Cost per day per customer" value={formatCurrency(costPerDay, { decimals: 2 })} />
            <SecondaryMetric
              label="Customers per $10k spend"
              value={totalSpend > 0 ? ((newCustomers / totalSpend) * 10000).toFixed(1) : '0'}
            />
          </div>
          <BenchmarkBar
            label="CAC vs B2B SaaS benchmarks"
            value={Math.min(result.cac, 3000)}
            min={0}
            max={3000}
            zones={[
              { from: 0, to: 500, label: 'SMB efficient', color: 'green' },
              { from: 500, to: 1500, label: 'Mid-market', color: 'primary' },
              { from: 1500, to: 3000, label: 'Enterprise', color: 'yellow' },
            ]}
          />
        </div>
      }
    />
  )
}

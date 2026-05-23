'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateFounderDilution } from '@/lib/calculators/calculations'
import { formatPercent, formatCurrency } from '@/lib/calculators/format'

export default function FounderDilutionCalculator() {
  const calculator = getCalculatorBySlug('founder-dilution-calculator')!
  
  const [pool1, setPool1] = useState(10)
  const [raise1, setRaise1] = useState(500000)
  const [preMoney1, setPreMoney1] = useState(4000000)
  const [pool2, setPool2] = useState(5)
  const [raise2, setRaise2] = useState(3000000)
  const [preMoney2, setPreMoney2] = useState(15000000)
  const [pool3, setPool3] = useState(5)
  const [raise3, setRaise3] = useState(10000000)
  const [preMoney3, setPreMoney3] = useState(50000000)

  const rounds = [
    { poolPercent: pool1, raise: raise1, preMoney: preMoney1 },
    { poolPercent: pool2, raise: raise2, preMoney: preMoney2 },
    { poolPercent: pool3, raise: raise3, preMoney: preMoney3 },
  ]

  const result = calculateFounderDilution({ rounds })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Seed Round</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <NumberField label="Option Pool %" value={pool1} onChange={setPool1} suffix="%" />
            <NumberField label="Raise Amount" value={raise1} onChange={setRaise1} prefix="$" />
            <NumberField label="Pre-Money Valuation" value={preMoney1} onChange={setPreMoney1} prefix="$" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Series A</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <NumberField label="Option Pool %" value={pool2} onChange={setPool2} suffix="%" />
            <NumberField label="Raise Amount" value={raise2} onChange={setRaise2} prefix="$" />
            <NumberField label="Pre-Money Valuation" value={preMoney2} onChange={setPreMoney2} prefix="$" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Series B</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <NumberField label="Option Pool %" value={pool3} onChange={setPool3} suffix="%" />
            <NumberField label="Raise Amount" value={raise3} onChange={setRaise3} prefix="$" />
            <NumberField label="Pre-Money Valuation" value={preMoney3} onChange={setPreMoney3} prefix="$" />
          </div>
        </div>
      </div>

      <PrimaryMetric
        label="Final Founder Ownership"
        value={formatPercent(result.foundersFinalPercent)}
        comparison={`Total dilution: ${formatPercent(result.totalDilutionPercent)}`}
      />

      <MetricGrid>
        {result.ledger.map((r, i) => (
          <MetricCard key={i} label={`After Round ${r.round}`} value={formatPercent(r.foundersPercent)} sublabel={`Dilution: ${formatPercent(r.dilutionThisRound)}`} />
        ))}
        <MetricCard label="Total Dilution" value={formatPercent(result.totalDilutionPercent)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

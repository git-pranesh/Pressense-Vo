'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculatePipelineCoverage } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function PipelineCoverageCalculator() {
  const calculator = getCalculatorBySlug('pipeline-coverage-calculator')!
  
  const [openPipeline, setOpenPipeline] = useState(2000000)
  const [quota, setQuota] = useState(500000)
  const [weightedPipeline, setWeightedPipeline] = useState(1200000)
  const [avgWinRatePercent, setAvgWinRatePercent] = useState(25)

  const result = calculatePipelineCoverage({ openPipeline, quota, weightedPipeline, avgWinRatePercent })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Open Pipeline" value={openPipeline} onChange={setOpenPipeline} prefix="$" />
        <NumberField label="Quota" value={quota} onChange={setQuota} prefix="$" />
        <NumberField label="Weighted Pipeline" value={weightedPipeline} onChange={setWeightedPipeline} prefix="$" />
        <NumberField label="Avg Win Rate %" value={avgWinRatePercent} onChange={setAvgWinRatePercent} suffix="%" />
      </div>

      <PrimaryMetric
        label="Pipeline Coverage"
        value={`${result.rawCoverage.toFixed(1)}x`}
        comparison={`${result.health} — Gap to quota: ${formatCurrency(result.gap)}`}
      />

      <MetricGrid>
        <MetricCard label="Raw Coverage" value={`${result.rawCoverage.toFixed(1)}x`} />
        <MetricCard label="Weighted Coverage" value={`${result.weightedCoverage.toFixed(1)}x`} />
        <MetricCard label="Expected Close" value={formatCurrency(result.expectedClose)} />
        <MetricCard label="Health" value={result.health} />
      </MetricGrid>
    </CalculatorShell>
  )
}

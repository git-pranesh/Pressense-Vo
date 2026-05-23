'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateMQLtoSQL } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function MQLtoSQLCalculator() {
  const calculator = getCalculatorBySlug('mql-to-sql-calculator')!
  
  const [mqls, setMqls] = useState(1000)
  const [sqls, setSqls] = useState(300)
  const [sqo, setSqo] = useState(150)
  const [opportunities, setOpportunities] = useState(30)
  const [dealValue, setDealValue] = useState(5000)

  const result = calculateMQLtoSQL({ mqls, sqls, sqo, opportunities, dealValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="MQLs" value={mqls} onChange={setMqls} />
        <NumberField label="SQLs" value={sqls} onChange={setSqls} />
        <NumberField label="SQL to Opp" value={sqo} onChange={setSqo} />
        <NumberField label="Won Deals" value={opportunities} onChange={setOpportunities} />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="MQL to SQL Rate"
        value={formatPercent(result.mqlToSqlRate)}
        comparison={`${result.rating} — Value per MQL: ${formatCurrency(result.valuePerMQL)}`}
      />

      <MetricGrid>
        <MetricCard label="MQL to SQL" value={formatPercent(result.mqlToSqlRate)} />
        <MetricCard label="SQL to Opp" value={formatPercent(result.sqlToOppRate)} />
        <MetricCard label="Opp to Won" value={formatPercent(result.oppToWonRate)} />
        <MetricCard label="MQL to Customer" value={formatPercent(result.mqlToCustomerRate)} />
      </MetricGrid>
    </CalculatorShell>
  )
}

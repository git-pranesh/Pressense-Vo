'use client'

import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { CalculatorMeta } from '@/lib/calculators/types'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, Calculator, Construction } from 'lucide-react'

interface Props {
  calculator: CalculatorMeta
}

export function GenericCalculator({ calculator }: Props) {
  return (
    <CalculatorShell
      title={calculator.title}
      description={calculator.description}
      category={calculator.category}
      formula={calculator.formula}
      benchmarks={calculator.benchmarks}
      faqs={calculator.faqs}
    >
      <div className="space-y-6">
        {/* Coming Soon Notice */}
        <Card className="border-dashed border-amber-500/50 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Construction className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Interactive Calculator Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  Full interactive functionality is being added.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formula & Benchmarks Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              Formula & Benchmarks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Formula</p>
              <p className="text-sm font-mono bg-muted p-3 rounded-md">{calculator.formula}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Benchmarks</p>
              <p className="text-sm bg-muted p-3 rounded-md">{calculator.benchmarks}</p>
            </div>
          </CardContent>
        </Card>

        {/* Related Calculators */}
        {calculator.relatedSlugs && calculator.relatedSlugs.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Calculators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {calculator.relatedSlugs.map((slug) => (
                  <Link key={slug} href={`/tools/${slug}`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                      {slug.replace(/-calculator$/, '').replace(/-/g, ' ')}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CalculatorShell>
  )
}

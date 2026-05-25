'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  id?: string
  label: string
  value: number
  onChange: (v: number) => void
  prefix?: string
  suffix?: string
  step?: number
  min?: number
  max?: number
  hint?: string
}

export function NumberField({ id, label, value, onChange, prefix, suffix, step = 1, min, max, hint }: Props) {
  const fieldId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-')
  
  return (
    <div className="space-y-2">
      <Label htmlFor={fieldId} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-sm text-muted-foreground select-none pointer-events-none">{prefix}</span>
        )}
        <Input
          id={fieldId}
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : 0}
          step={step}
          min={min}
          max={max}
          onChange={(e) => {
            const v = e.target.value === '' ? 0 : Number(e.target.value)
            onChange(Number.isNaN(v) ? 0 : v)
          }}
          className={`${prefix ? 'pl-7' : ''} ${suffix ? 'pr-10' : ''} bg-background/60 border-border h-11 rounded-xl text-base`}
          data-testid={`input-${fieldId}`}
        />
        {suffix && (
          <span className="absolute right-3 text-sm text-muted-foreground select-none pointer-events-none">{suffix}</span>
        )}
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

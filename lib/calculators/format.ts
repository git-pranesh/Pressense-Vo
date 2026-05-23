export function formatCurrency(n: number, opts: { decimals?: number; compact?: boolean } = {}): string {
  if (!isFinite(n) || isNaN(n)) return '$0'
  const { decimals = 0, compact = false } = opts
  if (compact && Math.abs(n) >= 1000) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    })
    return formatter.format(n)
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n)
}

export function formatPercent(n: number, decimals = 1): string {
  if (!isFinite(n) || isNaN(n)) return '0%'
  return `${n.toFixed(decimals)}%`
}

export function formatNumber(n: number, decimals = 0): string {
  if (!isFinite(n) || isNaN(n)) return '0'
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n)
}

export function formatMonths(n: number): string {
  if (!isFinite(n) || isNaN(n)) return '—'
  if (n > 100) return '100+ months'
  return `${n.toFixed(1)} months`
}

export function formatRatio(n: number, decimals = 1): string {
  if (!isFinite(n) || isNaN(n)) return '0:1'
  return `${n.toFixed(decimals)}:1`
}

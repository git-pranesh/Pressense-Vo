import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface Props { eyebrow?: string; title?: string; body?: string; image?: any; imagePosition?: 'left' | 'right'; cta?: { text: string; href: string }; bullets?: string[] }

export function ImageTextBlock({ eyebrow, title, body, imagePosition = 'right', cta, bullets }: Props) {
  return (
    <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-background">
      <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          {eyebrow && <div className="flex items-center gap-3 mb-4"><div className="eyebrow-line" /><span className="eyebrow">{eyebrow}</span></div>}
          {title && <h2 className="text-section-title font-serif text-foreground mb-5 text-balance">{title}</h2>}
          {body && <p className="text-muted-foreground leading-relaxed mb-6 font-sans">{body}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
                  <CheckCircle className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          )}
          {cta?.href && (
            <Link href={cta.href} className="btn-primary">
              {cta.text || 'Learn More'}
            </Link>
          )}
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video bg-surface-2 rounded-2xl border border-border flex items-center justify-center">
            <p className="text-muted-foreground text-sm font-sans">Image placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

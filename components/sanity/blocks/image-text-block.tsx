import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface Props { eyebrow?: string; title?: string; body?: string; image?: any; imagePosition?: 'left' | 'right'; cta?: { text: string; href: string }; bullets?: string[] }

export function ImageTextBlock({ eyebrow, title, body, imagePosition = 'right', cta, bullets }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className={`flex flex-col lg:flex-row gap-12 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">{eyebrow}</p>}
          {title && <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">{title}</h2>}
          {body && <p className="text-muted-foreground leading-relaxed mb-6">{body}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          )}
          {cta?.href && (
            <Link href={cta.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-colors">
              {cta.text || 'Learn More'}
            </Link>
          )}
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video bg-secondary/30 rounded-xl border border-border/40 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Image placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

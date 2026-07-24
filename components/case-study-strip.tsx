'use client'

import Link from 'next/link'
import { useRef, useState, useEffect, useCallback } from 'react'

const GARAMOND = '"EB Garamond", Georgia, serif'

export type CaseStudyCard = {
  slug: string
  industry: string
  stat: string
  title?: string
  blurb: string
  bg: string
  fg: string
  fgDim: string
  tagBg: string
  tagBorder: string
}

interface Props {
  cards: CaseStudyCard[]
}

export function CaseStudyStrip({ cards }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position to update active dot
  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / cards.length
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, cards.length - 1))
  }, [cards.length])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Scroll to a specific card index
  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / cards.length
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Scroll strip wrapper */}
      <div className="relative -mx-5 sm:-mx-8">

        {/* Right fade — signals more content */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
          style={{ background: 'linear-gradient(to right, transparent, var(--background))' }}
          aria-hidden="true"
        />

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 px-5 sm:px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
          }}
        >
          {cards.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="no-underline shrink-0 group"
              style={{
                width: 'clamp(260px, 32vw, 300px)',
                scrollSnapAlign: 'start',
              }}
            >
              <div
                className="h-full rounded-2xl p-6 flex flex-col gap-5 transition-all duration-200 group-hover:scale-[1.01] group-hover:shadow-lg"
                style={{ background: cs.bg }}
              >
                {/* Industry tag */}
                <span
                  className="self-start text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                  style={{ background: cs.tagBg, color: cs.fgDim, borderColor: cs.tagBorder }}
                >
                  {cs.industry}
                </span>

                {/* Headline — same as case study card client title */}
                <p
                  className="font-normal leading-snug text-balance"
                  style={{ fontFamily: GARAMOND, fontSize: 'clamp(22px, 2.8vw, 30px)', color: cs.fg }}
                >
                  {cs.stat}
                </p>

                {/* Blurb */}
                <p className="text-xs leading-relaxed" style={{ color: cs.fgDim }}>
                  {cs.blurb}
                </p>

                {/* Arrow link */}
                <span
                  className="self-start text-xs font-medium flex items-center gap-1.5 mt-auto"
                  style={{ color: cs.fgDim }}
                >
                  Read the case study
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}

          {/* End spacer so last card clears the fade */}
          <div className="shrink-0 w-20" aria-hidden="true" />
        </div>
      </div>

      {/* Controls row — dots + swipe hint */}
      <div className="flex items-center justify-between mt-5 px-0">

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Case study navigation">
          {cards.map((cs, i) => (
            <button
              key={cs.slug}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${cs.title}`}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                width: i === activeIndex ? 20 : 8,
                height: 8,
                background: i === activeIndex ? '#1A0F06' : 'rgba(26,15,6,0.2)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Swipe hint — always visible, fades out after first scroll */}
        <p
          className="text-xs font-medium flex items-center gap-1.5 transition-opacity duration-500"
          style={{
            color: 'rgba(26,15,6,0.35)',
            opacity: activeIndex > 0 ? 0 : 1,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5h10M8 1.5l3.5 3.5L8 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="0.5" y="0.5" width="13" height="9" rx="4.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
          </svg>
          Scroll to explore
        </p>
      </div>
    </div>
  )
}

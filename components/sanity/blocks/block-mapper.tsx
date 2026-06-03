import { HeroBlock } from './hero-block'
import { RichTextBlock } from './rich-text-block'
import { FAQBlock } from './faq-block'
import { ProcessStepsBlock } from './process-steps-block'
import { CTABannerBlock } from './cta-banner-block'
import { StatsGridBlock } from './stats-grid-block'
import { ComparisonTableBlock } from './comparison-table-block'
import { TestimonialsBlock } from './testimonials-block'
import { ImageTextBlock } from './image-text-block'
import { WhoItsForBlock } from './who-its-for-block'
import { VideoBlock } from './video-block'

interface Block { _type: string; _key: string; [key: string]: any }
interface BlockMapperProps { blocks?: Block[] }

export function BlockMapper({ blocks }: BlockMapperProps) {
  if (!blocks || blocks.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">No content available</div>
  }
  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'heroBlock':
            return <HeroBlock key={block._key} eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} primaryCta={block.primaryCta} secondaryCta={block.secondaryCta} />
          case 'richTextBlock':
            return <RichTextBlock key={block._key} content={block.content} alignment={block.alignment} />
          case 'faqBlock':
            return <FAQBlock key={block._key} title={block.title} items={block.items} />
          case 'processStepsBlock':
            return <ProcessStepsBlock key={block._key} title={block.title} steps={block.steps} />
          case 'ctaBannerBlock':
            return <CTABannerBlock key={block._key} title={block.title} description={block.description} ctaText={block.ctaText} ctaUrl={block.ctaUrl} backgroundColor={block.backgroundColor} />
          case 'statsGridBlock':
            return <StatsGridBlock key={block._key} title={block.title} stats={block.stats} columns={block.columns} />
          case 'comparisonTableBlock':
            return <ComparisonTableBlock key={block._key} title={block.title} leftLabel={block.leftLabel} rightLabel={block.rightLabel} rows={block.rows} />
          case 'testimonialsBlock':
            return <TestimonialsBlock key={block._key} title={block.title} testimonials={block.testimonials} />
          case 'imageTextBlock':
            return <ImageTextBlock key={block._key} eyebrow={block.eyebrow} title={block.title} body={block.body} image={block.image} imagePosition={block.imagePosition} cta={block.cta} bullets={block.bullets} />
          case 'whoItsForBlock':
            return <WhoItsForBlock key={block._key} title={block.title} scenarios={block.scenarios} notForTitle={block.notForTitle} notForItems={block.notForItems} />
          case 'videoBlock':
            return <VideoBlock key={block._key} title={block.title} url={block.url} caption={block.caption} />
          default:
            return (
              <div key={block._key} className="p-4 bg-yellow-50/10 border border-yellow-500/20 rounded m-4">
                <p className="text-yellow-500 text-sm">Unknown block type: {block._type}</p>
              </div>
            )
        }
      })}
    </>
  )
}

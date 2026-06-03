import { HeroBlock } from './hero-block'
import { RichTextBlock } from './rich-text-block'
import { FAQBlock } from './faq-block'
import { ProcessStepsBlock } from './process-steps-block'
import { CTABannerBlock } from './cta-banner-block'
import { StatsGridBlock } from './stats-grid-block'

interface Block {
  _type: string
  _key: string
  [key: string]: any
}

interface BlockMapperProps {
  blocks?: Block[]
}

export function BlockMapper({ blocks }: BlockMapperProps) {
  if (!blocks || blocks.length === 0) {
    return <div className="p-8 text-center text-slate-500">No content available</div>
  }

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'heroBlock':
            return (
              <HeroBlock
                key={block._key}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                ctaText={block.ctaText}
                ctaUrl={block.ctaUrl}
                ctaText2={block.ctaText2}
                ctaUrl2={block.ctaUrl2}
              />
            )
          
          case 'richTextBlock':
            return (
              <RichTextBlock
                key={block._key}
                content={block.content}
                alignment={block.alignment}
              />
            )
          
          case 'faqBlock':
            return (
              <FAQBlock
                key={block._key}
                title={block.title}
                items={block.items}
              />
            )
          
          case 'processStepsBlock':
            return (
              <ProcessStepsBlock
                key={block._key}
                title={block.title}
                steps={block.steps}
              />
            )
          
          case 'ctaBannerBlock':
            return (
              <CTABannerBlock
                key={block._key}
                title={block.title}
                description={block.description}
                ctaText={block.ctaText}
                ctaUrl={block.ctaUrl}
                backgroundColor={block.backgroundColor}
              />
            )
          
          case 'statsGridBlock':
            return (
              <StatsGridBlock
                key={block._key}
                title={block.title}
                stats={block.stats}
                columns={block.columns}
              />
            )
          
          default:
            return (
              <div key={block._key} className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-yellow-800">Unknown block type: {block._type}</p>
              </div>
            )
        }
      })}
    </>
  )
}

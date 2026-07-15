import { PortableTextBlock } from '@sanity/types'
import { PortableTextWrapper } from '../portable-text'

interface RichTextBlockProps {
  content?: PortableTextBlock[]
  alignment?: 'left' | 'center' | 'right'
}

export function RichTextBlock({ content, alignment = 'left' }: RichTextBlockProps) {
  if (!content) return null

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment]

  return (
    <section className={`w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-background ${alignmentClass}`}>
      <div className="max-w-4xl mx-auto prose prose-lg font-sans">
        <PortableTextWrapper blocks={content} />
      </div>
    </section>
  )
}

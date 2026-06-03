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
    <section className={`w-full py-12 md:py-16 px-4 md:px-6 ${alignmentClass}`}>
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <PortableTextWrapper blocks={content} />
      </div>
    </section>
  )
}

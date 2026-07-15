import { PortableTextBlock } from '@sanity/types'
import { PortableText, PortableTextComponents } from 'next-sanity'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-base leading-relaxed mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
}

interface PortableTextWrapperProps {
  blocks?: PortableTextBlock[]
}

export function PortableTextWrapper({ blocks }: PortableTextWrapperProps) {
  if (!blocks) return null
  return <PortableText value={blocks} components={components} />
}

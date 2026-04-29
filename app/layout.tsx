import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pressense.co'),
  title: 'Pressense | Strategy & Systems Partner for Structured Scale',
  description:
    'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
    type: 'website',
    url: 'https://www.pressense.co',
    siteName: 'Pressense',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pressense - Strategy & Systems Partner for Structured Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1916',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

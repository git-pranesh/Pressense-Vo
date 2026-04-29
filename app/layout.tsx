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
  title: 'Pressense | Strategy & Systems Partner for Structured Scale',
  description:
    'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
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

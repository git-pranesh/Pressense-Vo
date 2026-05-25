import { Header } from '@/components/header'
import { MegaFooter } from '@/components/mega-footer'

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <MegaFooter />
    </>
  )
}

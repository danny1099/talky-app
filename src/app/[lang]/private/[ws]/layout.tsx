import { Navbar } from '@/modules/common/components'

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100dvh-64px)] flex flex-col bg-white">{children}</main>
    </>
  )
}

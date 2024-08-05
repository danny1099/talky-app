import { Navbar, Sidebar } from '@/modules/common/components'

export default function Layout({ children }: Children) {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Navbar />
      <Sidebar />
      <main className="row-start-2 size-full overflow-hidden">{children}</main>
    </div>
  )
}

import { Navbar } from '@/modules/common/components'

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

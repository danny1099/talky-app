import { Avatar, Logo, Icon } from '@/modules/common/components'

export const Navbar = () => {
  return (
    <header className="bg-white top-0 sticky h-16 w-full flex items-center justify-between px-4 md:px-24">
      <Logo />

      <nav className="h-full flex flex-row items-center gap-x-4 px-[2px] md:gap-x-6">
        <Icon icon="search" />
        <Icon icon="translate" />
        <Icon icon="sun" />
        <Avatar text="DM" src="/images/img-avatar.png" />
      </nav>
    </header>
  )
}

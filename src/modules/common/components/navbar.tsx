import { Avatar, Logo, Icon, ThemeToggle } from '@/modules/common/components'

export const Navbar = () => {
  return (
    <header className="bg-background text-foreground col-span-2 top-0 sticky h-16 w-full flex items-center justify-between px-4 md:px-24">
      <Logo />

      <nav className="h-full flex flex-row items-center gap-x-4 px-[2px] md:gap-x-6">
        <Icon icon="translate" />
        <ThemeToggle />
        <Avatar text="DM" src="/images/img-avatar.png" />
      </nav>
    </header>
  )
}

import { useLocale } from 'next-intl'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
}

export const Navigate = ({ children, href, ...props }: Props) => {
  const locale = useLocale()

  return (
    <Link {...props} href={`/${locale}/${href}`}>
      {children}
    </Link>
  )
}

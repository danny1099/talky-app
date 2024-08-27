import Link, { LinkProps } from 'next/link'
import { useLocale } from 'next-intl'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { forwardRef } from 'react'

interface Props extends LinkProps, VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  className?: string
}

export const Navigate = ({ children, href, className, variant, size, ...props }: Props) => {
  const locale = useLocale()

  return (
    <Link
      {...props}
      href={`/${locale}/${href}`}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  )
}

import { cn } from '@/modules/common/utils'

interface Props {
  icon: string
  className?: string
}

export const Icon = ({ icon, className = 'size-4' }: Props) => {
  return (
    <svg className={cn('bi', className)} fill="currentColor">
      <use xlinkHref={`/images/icons_sprite.svg#${icon}`} />
    </svg>
  )
}

import { cn } from '@/modules/common/utils'
import { Brand } from './brand'

interface Props {
  showTitle?: boolean
  className?: string
}

export const Logo = ({ className, showTitle = true }: Props) => {
  return (
    <div className="flex h-8 w-auto flex-row items-center gap-1">
      <img
        src="/images/logo-app.svg"
        alt="Logo Talky App"
        className={cn('size-8', className)}
        loading="eager"
      />
      {showTitle && <Brand />}
    </div>
  )
}

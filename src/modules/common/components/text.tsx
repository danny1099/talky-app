import { globalFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  content: string
}

/* prettier-ignore */
export const Text = ({ content, ...props }: Props) => {
  return (
    <p {...props} className={cn('text-xs text-accent-foreground',globalFont.className, props.className)}>
      {content}
    </p>
  )
}

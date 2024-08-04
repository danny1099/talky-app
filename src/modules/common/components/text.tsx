import { globalFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

/* prettier-ignore */
export const Text = ({ text, ...props }: Props) => {
  return (
    <p {...props} className={cn('text-xs text-accent-foreground',globalFont.className, props.className)}>
      {text}
    </p>
  )
}

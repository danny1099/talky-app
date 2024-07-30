import { globalFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

/* prettier-ignore */
export const Paragraph = ({ text, ...props }: Props) => {
  return (
    <p {...props} className={cn('text-xs text-zinc-600',globalFont.className, props.className)}>
      {text}
    </p>
  )
}

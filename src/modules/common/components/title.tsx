import { titleFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

/* prettier-ignore */
export const Title = ({ text, ...props }: Props) => {
  return (
    <h1 {...props} className={cn('text-2xl font-medium text-foreground',titleFont.className, props.className)}>
      {text}
    </h1>
  )
}

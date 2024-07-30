import { titleFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

/* prettier-ignore */
export const Heading = ({ text, ...props }: Props) => {
  return (
    <h2 {...props} className={cn('text-lg font-medium text-zinc-900',titleFont.className, props.className)}>
      {text}
    </h2>
  )
}

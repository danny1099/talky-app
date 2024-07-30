import { brandFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/* prettier-ignore */
export const Brand = ({ ...props }: Props) => {
  return (
    <h2 {...props} className={cn(`${brandFont.className} text-2xl font-medium`, props.className)}>
      t<span className="text-blue-500">a</span>lky
    </h2>
  )
}

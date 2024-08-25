import { cn } from '@/modules/common/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva('bg-border', {
  variants: {
    type: {
      vertical: 'w-[1px] h-full',
      horizontal: 'h-[1px] w-full'
    }
  },
  defaultVariants: {
    type: 'vertical'
  }
})

interface Props extends VariantProps<typeof variants> {
  className?: string
}

export const Divider = ({ type, className }: Props) => {
  return <span className={cn(variants({ type, className }))} />
}

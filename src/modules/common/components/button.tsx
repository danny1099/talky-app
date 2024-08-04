import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/modules/common/utils'
import { Icon } from './icon'

/* styles variants for Button and ButtonLink */
export const buttonVariants = cva(
  'inline-flex items-center w-full gap-x-2 justify-center whitespace-nowrap text-xs font-medium disabled:pointer-events-none disabled:opacity-70',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        danger: 'bg-destructive text-destructive-foreground',
        outline: 'border border-border bg-background text-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        ghost: 'bg-transparent border-none text-foreground'
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-lg px-8',
        icon: 'h-8 w-8 rounded-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

/* prettier-ignore */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ( { children, className, variant, size, asChild = false, isLoading,...props }, ref ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading}
      >
        {children}
        {isLoading && (
          <Icon
            icon='spinner'
            className={cn('size-4 text-foreground', isLoading && 'animate-spin')}
          />
        )}
      </Comp>
    )
  }
)

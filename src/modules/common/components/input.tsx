import * as React from 'react'
import { cn } from '@/modules/common/utils'
import { Icon } from './icon'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  slot?: 'start' | 'end'
  icon?: string
  isBordered?: boolean
}

/* prettier-ignore */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, slot = 'end', icon, isBordered = false, ...props }, ref) => {
    return (
      <div className="w-full relative">
        {icon && (
          <div className={cn('absolute top-1/2 transform -translate-y-1/2 text-secondary-foreground',slot === 'start' ? 'left-3' : 'right-3')}>
            <Icon icon={icon} className='size-4' />
          </div>
        )}
        <input
          {...props}
          ref={ref}
          type={type}
          className={cn('flex h-10 w-full rounded-xl bg-accent text-accent-foreground px-3 py-2 text-xs file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-70',slot === 'start' ? 'pl-10' : 'pr-10',isBordered && 'border border-border',className)}/>
      </div>
    )
  }
)

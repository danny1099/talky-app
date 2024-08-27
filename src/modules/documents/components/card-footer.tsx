'use client'
import { getPrivateRoute } from '@/config/routes'
import { Button, Icon, Navigate } from '@/modules/common/components'

interface Props {
  id: string
}

export const CardFooter = ({ id }: Props) => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-4 py-2">
      <div className="w-full flex flex-row items-center gap-x-4 text-accent-foreground">
        <Icon icon="star" className="size-4" />
        <Icon icon="files" className="size-4" />
        <Icon icon="trash" className="size-4" />
      </div>

      <Navigate
        size="icon"
        variant="tertiary"
        className="dark:bg-primary"
        href={`${getPrivateRoute('chat', false)}/${id}`}
      >
        <Icon icon="arrow-right" className="size-4" />
      </Navigate>
    </div>
  )
}

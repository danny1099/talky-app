'use client'
import { getPrivateRoute } from '@/config/routes'
import { Icon, Navigate } from '@/modules/common/components'
import { CardTitle, DeleteButton } from '@/modules/documents/components'
import { fileTypeByFormat } from '@/modules/documents/helpers'
import { type Document } from '@/modules/documents/types'

export const CardDocument = ({ id, filename, created_at, format, initial_content }: Document) => {
  const fileType = fileTypeByFormat(format)

  return (
    <li className="w-full h-44 flex flex-col bg-background rounded-lg shadow-md shadow-border">
      <header className="w-full flex flex-row px-4 py-3 justify-between items-center">
        <CardTitle filename={filename} created_at={created_at} />
        <div className="h-full w-6 flex items-center justify-center">
          <Icon icon={fileType?.icon as string} className="size-5" />
        </div>
      </header>
      <div className="h-full w-full text-xs flex items-center px-4 text-pretty">
        {initial_content}...
      </div>
      <div className="w-full flex flex-row items-center justify-between px-4 py-2">
        <div className="w-full flex flex-row items-center gap-x-4 text-accent-foreground">
          <Icon icon="star" className="size-4" />
          <Icon icon="files" className="size-4" />
          <DeleteButton id={id} />
        </div>

        <Navigate size="icon" variant="tertiary" href={`${getPrivateRoute('chat', false)}/${id}`}>
          <Icon icon="arrow-right" className="size-4" />
        </Navigate>
      </div>
    </li>
  )
}

'use client'
import { getPrivateRoute } from '@/config/routes'
import { Icon } from '@/modules/common/components'
import { CardTitle, CardFooter } from '@/modules/documents/components'
import { fileTypeByFormat } from '@/modules/documents/helpers'
import { type Document } from '@/modules/documents/types'

export const CardDocument = ({ id, filename, created_at, format, initial_content }: Document) => {
  const fileType = fileTypeByFormat(format)

  const handleClick = () => {
    const routePath = `${getPrivateRoute('chat')}/${id}`
    console.log(routePath)
  }

  return (
    <li className="w-full h-44 flex flex-col bg-background rounded-lg shadow-md shadow-border">
      <header className="w-full flex flex-row px-4 py-3 justify-between items-center">
        <CardTitle filename={filename} created_at={created_at} />
        <div className="h-full w-6 flex items-center justify-center">
          <Icon icon={fileType?.icon as string} className="size-4" />
        </div>
      </header>
      <div className="h-full w-full text-xs flex items-center px-4 text-pretty">
        {initial_content}...
      </div>
      <CardFooter />
    </li>
  )
}

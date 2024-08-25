import { Chip, ChipProps } from '@nextui-org/react'
import { Button, Icon, Text } from '@/modules/common/components'
import { textCapitalize, readableFileSize } from '@/modules/common/utils'
import { fileType } from '@/modules/documents/helpers'

interface Props {
  file: File
  status: string
  action?: () => void
}

const colorStatus = {
  pending: 'warning',
  uploading: 'default',
  success: 'success',
  error: 'danger'
}

type FileStatus = keyof typeof colorStatus

export const DropFile = ({ file, status, action }: Props) => {
  const fileIcon = fileType(file.name)

  return (
    <div className="w-full h-14 max-w-80 flex items-center bg-background rounded-lg shadow-sm shadow-border justify-between">
      <div className="size-full flex items-center">
        <div className="h-full w-10 flex items-center justify-center">
          <Icon icon={fileIcon?.icon as string} className="size-5 text-foreground" />
        </div>
        <div className="size-full max-w-40 flex flex-col justify-center px-1">
          <p className="text-xs text-foreground font-medium truncate text-ellipsis">
            {textCapitalize(file.name)}
          </p>
          <Text content={readableFileSize(file.size)} />
        </div>
      </div>

      <div className="h-full flex items-center justify-center px-2 gap-x-2">
        <Chip
          color={`${colorStatus[status as FileStatus]}` as ChipProps['color']}
          size="sm"
          variant="flat"
        >
          {textCapitalize(status)}
        </Chip>
        <Button variant="ghost" size="icon" onClick={() => action?.()}>
          <Icon icon="trash" className="size-5 text-danger" />
        </Button>
      </div>
    </div>
  )
}

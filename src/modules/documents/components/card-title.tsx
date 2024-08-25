import { Text } from '@/modules/common/components'
import { shortDate } from '@/modules/common/utils'

interface Props {
  filename: string
  created_at: string
}

export const CardTitle = ({ filename, created_at }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-sm text-foreground font-semibold line-clamp-1 text-pretty">{filename}</h3>
      <Text content={shortDate(created_at)} />
    </div>
  )
}

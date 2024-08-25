import { parseOfficeAsync } from 'officeparser'

interface Props {
  file: ArrayBuffer
  limit?: number
}

export const extractText = async ({ file, limit = 100 }: Props) => {
  const content = await parseOfficeAsync(Buffer.from(file))
  const result = content.substring(0, limit)

  return result
}

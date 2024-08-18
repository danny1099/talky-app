import { extensionFile } from '@/modules/common/utils'

const ACCEPTED_FILE_TYPES = [
  {
    type: 'pdf',
    icon: 'filetype-pdf'
  },
  {
    type: 'doc',
    icon: 'filetype-doc'
  },
  {
    type: 'docx',
    icon: 'filetype-docx'
  },
  {
    type: 'txt',
    icon: 'filetype-txt'
  }
]

export const filesAccepted = (filename: string) => {
  const fileType = extensionFile.exec(filename)![1]
  const acceptedFiles = ACCEPTED_FILE_TYPES.map((f) => f.type)
  return acceptedFiles.includes(fileType)
}

export const fileType = (filename: string) => {
  const type = extensionFile.exec(filename)![1]
  const file = ACCEPTED_FILE_TYPES.find((f) => f.type === type)
  return file
}

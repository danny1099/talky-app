'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { Button, Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { DropContent, DropFile } from '@/modules/documents/components'
import { filesAccepted } from '@/modules/documents/helpers'
import { type FileStatus } from '@/modules/documents/types'
import ReactDropzone from 'react-dropzone'

/* prettier-ignore */
export const Dropzone = () => {
  const [fileSelected, setFileSelected] = useState<File | null>()
  const [fileStatus, setFileStatus] = useState<FileStatus>('idle')
  const t = useTranslations('dropzone')

  const clearFile = () => {
    setFileSelected(null)
    setFileStatus('idle')
  }

  const handleDrop = async (acceptedFiles: File[]) => {
    const fileName = acceptedFiles[0].name
    const isAccepted = filesAccepted(fileName)

    if (!isAccepted) {
      toast.error(t('file-not-accepted'))
      return
    }

    setFileSelected(acceptedFiles[0])
    setFileStatus('pending')
  }

  return (
    <div className="bg-background h-96 w-full flex flex-col p-4 gap-y-4">
      <div className="size-full flex flex-col px-2 py-3 items-center bg-secondary rounded-md border border-dashed border-border hover:bg-muted">
        <ReactDropzone multiple={false} maxFiles={1} onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className={cn('size-full flex flex-col items-center justify-center',fileStatus !== 'idle' && 'pointer-events-none')}>
              <input {...getInputProps()} name="file-drop" className="hidden" />
              <DropContent />
            </div>
          )}
        </ReactDropzone>

        {/* Check if file is selected and render the DropFile component */}
        {fileSelected && <DropFile file={fileSelected} status={fileStatus} action={clearFile} />}
      </div>

      <div className="w-full bg-background flex flex-col">
        <Button>
          {t('button')}
          <Icon icon="upload" />
        </Button>
      </div>
    </div>
  )
}

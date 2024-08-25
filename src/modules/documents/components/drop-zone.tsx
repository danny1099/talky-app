'use client'
import { toast } from 'sonner'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button, Icon } from '@/modules/common/components'
import { cn, sleep } from '@/modules/common/utils'
import { DropContent, DropFile } from '@/modules/documents/components'
import { filesAccepted } from '@/modules/documents/helpers'
import { type FileStatus } from '@/modules/documents/types'
import { uploadFile } from '@/modules/documents/actions'
import ReactDropzone from 'react-dropzone'

/* prettier-ignore */
export const Dropzone = ({ autoClose }: { autoClose: () => void}) => {
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

  const handleUpload = async () => {
    if (!fileSelected) {
      toast.info(t('file-no-selected'))
      return
    }

    /* Prepare form data */
    const formData = new FormData()
    formData.append('file', fileSelected, fileSelected.name)
    setFileStatus('uploading')

    /* Upload file */
    await uploadFile(formData).then((result) => {
      if (result.status === "error") {
        toast.error(t('file-upload-error'))
        setFileStatus('error')
        return
      }

      /* Close modal after 3 seconds */
      toast.success(t('file-upload-success'))
      setFileStatus('success')
      sleep(3).then(() => autoClose())

    })
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
        <Button onClick={handleUpload} isLoading={fileStatus === 'uploading'}>
          {t('button')}
          {fileStatus !== 'uploading' && <Icon icon="upload" />}
        </Button>
      </div>
    </div>
  )
}

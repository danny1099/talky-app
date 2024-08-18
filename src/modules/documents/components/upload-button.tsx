'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Modal, Button, type ButtonProps } from '@/modules/common/components'
import { Dropzone } from '@/modules/documents/components'

export const UploadButton = ({ children, ...props }: ButtonProps) => {
  const [open, setOpen] = useState(false)
  const t = useTranslations('dropzone')

  return (
    <>
      <Modal
        isOpen={open}
        setIsOpen={setOpen}
        content={<Dropzone />}
        title={t('title')}
        description={t('description')}
      />
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
    </>
  )
}

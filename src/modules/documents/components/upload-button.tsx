'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Modal, Button, type ButtonProps, Icon } from '@/modules/common/components'

export const UploadButton = ({ children, ...props }: ButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal
        isOpen={open}
        setIsOpen={setOpen}
        content={<div>Contenido a mostrar</div>}
        title="Upload your files"
        description="The file to upload must be in PDF or DOC format"
      />
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
    </>
  )
}

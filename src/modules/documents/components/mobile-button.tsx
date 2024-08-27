'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'usehooks-ts'
import { Icon } from '@/modules/common/components'
import { UploadButton } from '@/modules/documents/components'

export const MobileButton = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslations('dropzone')
  const [mounted, setMounted] = useState(false)

  /* useEffect to ensure the component is mounted */
  useEffect(() => setMounted(true), [])

  /* Return null if the component is not mounted or if the user is not on a mobile device */
  if (!isMobile || !mounted) return null

  return (
    <div className="w-full bg-background h-auto py-2 px-4 flex items-center justify-center">
      <UploadButton className="w-full mt-2 dark:bg-accent">
        {t('button')}
        <Icon icon="upload" />
      </UploadButton>
    </div>
  )
}

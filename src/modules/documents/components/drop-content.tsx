'use client'
import { useTranslations } from 'next-intl'
import { Icon } from '@/modules/common/components'

export const DropContent = () => {
  const t = useTranslations('dropzone')

  return (
    <div className="flex flex-col items-center w-full p-2 my-auto">
      <Icon icon="cloud-upload" className="size-14 text-foreground" />

      <div className="inline-flex gap-x-1 text-pretty text-sm">
        <p className="font-semibold text-blue-500 cursor-pointer">{t('click-text')}</p>
        <p className="text-foreground">{t('drag-text')}</p>
      </div>
      <p className="text-[.65rem] text-accent-foreground">{t('size-file')}</p>
    </div>
  )
}

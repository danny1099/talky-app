'use client'
import { Icon, Text } from '@/modules/common/components'
import { UploadButton } from '@/modules/documents/components'
import { useTranslations } from 'next-intl'

export const EmptyFiles = () => {
  const t = useTranslations('empty')

  return (
    <div className="w-full p-2 flex flex-col gap-y-3 items-center justify-center my-auto">
      <img
        src="/images/img-empty-files.svg"
        alt="Empty files"
        className="size-52 mr-6"
        loading="eager"
      />
      <div className="w-full flex flex-col items-center justify-center p-1">
        <h4 className="text-base font-semibold text-foreground">{t('title')}</h4>
        <Text content={t('description')} />

        <UploadButton className="w-44 mt-4 dark:bg-blue-600">
          {t('button')}
          <Icon icon="upload" />
        </UploadButton>
      </div>
    </div>
  )
}

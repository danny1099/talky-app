'use client'
import { Button, Icon, Text } from '@/modules/common/components'
import { useTranslations } from 'next-intl'

export const EmptyFiles = () => {
  const t = useTranslations('empty')

  return (
    <div className="w-full p-2 flex flex-col gap-y-3 items-center justify-center my-auto">
      <img src="/images/empty-files.svg" alt="Empty files" className="size-52" loading="eager" />
      <div className="w-full flex flex-col items-center justify-center p-1">
        <h4 className="text-base font-medium text-primary">{t('title')}</h4>
        <Text content={t('description')} />

        <Button className="w-48 mt-4" variant="tertiary">
          {t('button')}
          <Icon icon="upload" />
        </Button>
      </div>
    </div>
  )
}

'use client'
import { useMediaQuery } from 'usehooks-ts'
import { useTranslations } from 'next-intl'
import { Icon } from '@/modules/common/components'
import { UploadButton } from '@/modules/documents/components'
import { Tabs as Panel, Tab } from '@nextui-org/react'

export const FilterTabs = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const t = useTranslations('dropzone')

  return (
    <div className="w-full flex flex-wrap items-center py-[2px] justify-between">
      <Panel variant="underlined" size="sm" aria-label="Tabs variants">
        <Tab key="all" title="All" />
        <Tab key="favorites" title="Favorites" />
        <Tab key="recent" title="Recently" />
      </Panel>

      {isDesktop && (
        <UploadButton className="w-auto dark:bg-accent" size="sm">
          {t('button')}
          <Icon icon="upload" />
        </UploadButton>
      )}
    </div>
  )
}

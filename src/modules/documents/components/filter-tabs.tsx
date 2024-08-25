'use client'
import { Icon } from '@/modules/common/components'
import { UploadButton } from '@/modules/documents/components'
import { Tabs as Panel, Tab } from '@nextui-org/react'

export const FilterTabs = () => {
  return (
    <div className="w-full flex flex-wrap items-center py-[2px] justify-between">
      <Panel variant="underlined" size="sm" aria-label="Tabs variants">
        <Tab key="all" title="All" />
        <Tab key="favorites" title="Favorites" />
        <Tab key="recent" title="Recently" />
      </Panel>

      <UploadButton size="icon">
        <Icon icon="upload" />
      </UploadButton>
    </div>
  )
}

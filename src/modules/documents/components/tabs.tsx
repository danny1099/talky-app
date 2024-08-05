'use client'
import { Tabs as Panel, Tab } from '@nextui-org/react'

export const Tabs = () => {
  return (
    <div className="w-full flex flex-wrap items-center py-[2px]">
      <Panel variant="underlined" size="md" aria-label="Tabs variants">
        <Tab key="all" title="All" />
        <Tab key="favorites" title="Favorites" />
        <Tab key="recent" title="Recently" />
      </Panel>
    </div>
  )
}

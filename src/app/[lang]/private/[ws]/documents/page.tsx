import { Title, Text, Input } from '@/modules/common/components'
import { Tabs } from '@/modules/documents/components'
import { getTranslations } from 'next-intl/server'

export default async function MyDocuments() {
  const t = await getTranslations('documents')

  return (
    <section className="bg-background size-full flex flex-col overflow-hidden">
      <div className="w-full flex flex-col px-4 py-2 md:px-24">
        <Title text={t('title', { name: 'Danny' })} />
        <Text content={t('description')} />
        <span className="w-full flex mt-4 ml-[-2px] flex-col gap-y-2">
          <Input placeholder={t('search')} slot="end" icon="search" />
          <Tabs />
        </span>
      </div>

      <article className="size-full flex flex-col bg-secondary  md:bg-background md:px-24"></article>
    </section>
  )
}

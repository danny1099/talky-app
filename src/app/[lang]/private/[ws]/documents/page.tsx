import { Title, Text, Input } from '@/modules/common/components'
import { EmptyFiles, FilterTabs } from '@/modules/documents/components'
import { getTranslations } from 'next-intl/server'

export default async function MyDocuments() {
  const t = await getTranslations('documents')

  return (
    <section className="bg-background size-full flex flex-col overflow-hidden">
      <div className="w-full flex flex-col px-4 py-2 md:px-24">
        <Title text={t('title', { name: 'Danny' })} />
        <Text content={t('description')} />
        <span className="w-full flex mt-4 ml-[-2px] flex-col gap-y-4">
          <Input placeholder={t('search')} slot="end" icon="search" />
          <FilterTabs />
        </span>
      </div>

      <article className="size-full flex flex-col bg-background md:px-24">
        <EmptyFiles />
      </article>
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import { Title, Text, Input } from '@/modules/common/components'
import { EmptyFiles, FilterTabs, CardDocument, MobileButton } from '@/modules/documents/components'
import { getAllDocuments } from '@/modules/documents/actions'

export default async function MyDocuments() {
  const t = await getTranslations('documents')
  const data = await getAllDocuments()

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

      <article className="size-full flex flex-col bg-background overflow-hidden py-2 md:px-24">
        <div className="size-full flex flex-col overflow-y-auto bg-secondary rounded-md">
          {data?.length === 0 && <EmptyFiles />}

          <ul className="w-full grid grid-cols-1 gap-3 p-4 md:grid-cols-2 md:p-2 dark:bg-secondary">
            {data?.map((doc) => (
              <CardDocument key={doc.id} {...doc} />
            ))}
          </ul>
        </div>
        <MobileButton />
      </article>
    </section>
  )
}

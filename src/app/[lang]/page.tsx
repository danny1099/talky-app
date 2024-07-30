import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('intro')

  return (
    <main>
      <h1>Home | Talky</h1>
      <p>{t('welcome')}</p>
    </main>
  )
}

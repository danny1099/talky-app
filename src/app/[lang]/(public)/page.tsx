import { getTranslations } from 'next-intl/server'
import { privateRoutes } from '@/config/routes'
import { Navigate } from '@/modules/common/components'

export default async function Home() {
  const t = await getTranslations('intro')

  return (
    <main>
      <h1>Home | Talky</h1>
      <p>{t('welcome')}</p>

      <Navigate href={privateRoutes.documents}>Go to Private Zone</Navigate>
    </main>
  )
}

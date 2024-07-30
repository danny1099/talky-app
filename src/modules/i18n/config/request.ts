import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { i18n, type Locale } from './locales'

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`@/modules/i18n/langs/${locale}.json`)).default
  }
})

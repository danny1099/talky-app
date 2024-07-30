export const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'en'
} as const

export type Locale = (typeof i18n)['locales'][number]
export const flags = { en: 'us', es: 'es' }

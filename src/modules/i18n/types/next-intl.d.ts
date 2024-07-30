export {}

type EN = typeof import('@/modules/i18n/langs/en.json')
type ES = typeof import('@/modules/i18n/langs/es.json')

declare global {
  interface IntlMessages extends EN, ES {}
}

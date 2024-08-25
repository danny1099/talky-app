import { useLocale } from 'next-intl'

export const shortDate = (date: string) => {
  const newDate = new Date(date)
  const formatDate = newDate.toLocaleDateString(useLocale(), {
    day: '2-digit',
    month: 'short'
  })

  return formatDate.toString()
}

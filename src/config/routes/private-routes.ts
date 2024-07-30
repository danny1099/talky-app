import { useLocale } from 'next-intl'

const privateRoutes = {
  documents: 'private/ws/documents',
  chat: 'private/ws/chat',
  profile: 'private/ws/profile'
}

export type Route = keyof typeof privateRoutes

export const getPrivateRoute = (route: Route) => {
  const locale = useLocale()
  const routePath = privateRoutes[route]
  return `/${locale}/${routePath}`
}

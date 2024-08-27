import { useLocale } from 'next-intl'

export const privateRoutes = {
  documents: 'private/ws/documents',
  chat: 'private/ws/chat',
  profile: 'private/ws/profile'
}

export type Route = keyof typeof privateRoutes

export const getPrivateRoute = (route: Route, withLocale = true) => {
  const locale = useLocale()
  const routePath = privateRoutes[route]
  return withLocale ? `/${locale}/${routePath}` : `/${routePath}`
}

import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { globalFont } from '@/config/fonts'
import { ServerProviders, ClientProviders } from '@/lib/providers'
import '@/globals.css'

interface Props extends Children {
  params: { lang: string }
}

export default function RootLayout({ children, params: { lang } }: Readonly<Props>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`antialiased min-h-screen ${globalFont.className}`}>
        <ServerProviders>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Talky | Chat Documents',
  description: 'Chat with your all text documents',
  icons: '/images/logo-app.svg'
}

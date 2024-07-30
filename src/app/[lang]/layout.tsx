import type { Metadata } from 'next'
import { globalFont } from '@/config/fonts'
import '@/globals.css'

interface Props extends Children {
  params: { lang: string }
}

export default function RootLayout({ children, params: { lang } }: Readonly<Props>) {
  return (
    <html lang={lang}>
      <body className={`antialiased min-h-screen ${globalFont.className}`}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Talky | Chat Documents',
  description: 'Chat with your all text documents',
  icons: '/images/logo-app.svg'
}

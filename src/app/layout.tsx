import type { Metadata } from 'next'
import '@/globals.css'

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className={'antialiased min-h-screen'}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Talky | Chat Documents',
  description: 'Chat with your all text documents',
  icons: '/images/logo-app.svg'
}

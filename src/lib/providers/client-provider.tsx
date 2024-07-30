'use client'
import { ThemeProvider } from 'next-themes'

export const ClientProviders = ({ children }: Children) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

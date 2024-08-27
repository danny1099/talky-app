'use client'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'

export const ClientProviders = ({ children }: Children) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  )
}

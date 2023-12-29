import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: 'Aqua Control',
  description: 'Dashboard do kontrolowania sieciami wodociągów',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}

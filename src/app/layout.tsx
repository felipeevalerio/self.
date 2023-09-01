import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'self',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge('bg-white', poppins.className)}>
        <div className="max-w-7xl mx-auto my-6">{children}</div>
      </body>
    </html>
  )
}

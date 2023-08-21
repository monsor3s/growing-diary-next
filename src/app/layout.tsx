
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import styles from '../styles/global.module.sass'
import Header from '@/components/header'
import Menu from '@/components/menu'


const inter = Inter({ 
  subsets: ['latin'] ,
  weight: ['400', '500', '600'] ,
})


export const metadata: Metadata = {
  title: 'cultivation diary',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.container}>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  )
}

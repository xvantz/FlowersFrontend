import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import styles from './global.module.scss'
import FooterBar from '@/widgets/footerBar'
import NavigationBar from '@/widgets/navigationBar'
import { ApolloWrapper } from './apolloClient'

const roboto = Roboto({weight: ["700", "300", "500"], subsets: [] })

export const metadata: Metadata = {
  title: 'MilenaFlowers',
  description: 'MilenaFlowers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NavigationBar/>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      <FooterBar/>
        </body>
    </html>
  )
}

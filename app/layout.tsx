import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YARÄ°FÄ°YAT.COM â€” SeÃ§ilmiÅŸ En Ä°yi Teklifler',
  description: 'Her sektÃ¶rde en iyi kampanyayÄ± seÃ§eriz. Karar yorgunluÄŸuna son!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'YARİFİYAT.COM',
  description: 'Seçilmiş En İyi Teklifler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

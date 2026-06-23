import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
            <h1 className="text-2xl font-black text-orange-500 tracking-tight">YARIFİYAT<span className="text-blue-600">.COM</span></h1>
            <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-500 font-mono font-bold border border-slate-200">AI Executive OS v1.1</span>
          </div>
        </header>
        <main className="min-h-screen bg-slate-50">{children}</main>
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-6 text-center text-sm max-w-7xl">
            <p className="font-bold text-slate-300 mb-2">YARIFİYAT.COM — Seçilmiş En İyi Teklifler</p>
            <p className="text-xs text-slate-500">Tasarım ve mimari Yapay Zeka Yönetici Ekibi tarafından optimize edilmiştir. © 2026</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

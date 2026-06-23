import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          YARİFİYAT<span className="text-gray-700">.COM</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/" className="hover:text-orange-500 font-medium">Ana Sayfa</Link>
          <Link href="/nasil-calisir" className="hover:text-orange-500">Nasıl Çalışır?</Link>
          <Link href="/sss" className="hover:text-orange-500">Sık Sorulanlar</Link>
          <Link href="/firsat-gonder" className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition shadow">Fırsat Gönder</Link>
          <Link href="/admin" className="hover:text-orange-500">Admin</Link>
        </nav>
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  )
}
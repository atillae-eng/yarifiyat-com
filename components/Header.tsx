import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          YARİFİYAT<span className="text-gray-700">.COM</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
          <Link href="/admin" className="hover:text-orange-500">Admin</Link>
        </nav>
      </div>
    </header>
  )
}

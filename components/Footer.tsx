export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm max-w-7xl">
        <p>&copy; {new Date().getFullYear()} YARİFİYAT.COM — Seçilmiş En İyi Teklifler</p>
        <p className="text-gray-400 mt-1 text-xs">Her sektörde yalnızca 1 marka. Karar yorgunluğuna son!</p>
      </div>
    </footer>
  )
}
import { demoCampaigns } from '@/lib/campaignsData'
import CampaignCard from '@/components/CampaignCard'
import Link from 'next/link'

export default function KategoriPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug)
  const filtered = demoCampaigns.filter(c => c.category === slug)
  const categoryName = slug

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
        {' > '}
        <Link href="/" className="hover:text-orange-500">Kategori</Link>
        {' > '}
        <span className="text-gray-600">{categoryName}</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">{categoryName} Kampanyaları</h1>
      <p className="text-gray-500 mb-6">En iyi {categoryName} fırsatlarını keşfedin.</p>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">Bu kategoride henüz kampanya yok.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(c => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      )}
    </div>
  )
}
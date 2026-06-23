import { demoCampaigns } from '@/lib/campaignsData'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function FirsatDetayPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug)
  const campaign = demoCampaigns.find(c => c.brand_name === slug)

  if (!campaign) {
    notFound()
  }

  const logoMap: Record<string, string> = {
    'Adobe Creative Cloud': 'adobe-logo',
    'B&O Lüks Ses Ürünleri': 'bo-logo',
    'Süper Lüks Oteller': 'tatil-logo',
    'Acıbadem Sağlık Grubu': 'acibadem-logo',
    'Trendyol': 'trendyol-logo',
    'CarrefourSA': 'carrefour-logo',
  }
  const logoFile = logoMap[campaign.brand_name] || 'adobe-logo'

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/" className="hover:text-orange-500">Ana Sayfa</Link>
        {' > '}
        <Link href={`/kategori/${encodeURIComponent(campaign.category)}`} className="hover:text-orange-500">
          {campaign.category}
        </Link>
        {' > '}
        <span className="text-gray-600">{campaign.brand_name}</span>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Image src={`/images/${logoFile}.svg`} alt={campaign.brand_name} width={100} height={50} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{campaign.brand_name}</h1>
            <p className="text-gray-600 mt-1">{campaign.description}</p>

            <div className="flex items-center gap-4 mt-3">
              <span className="bg-red-600 text-white text-3xl font-bold px-6 py-2 rounded-2xl">
                %{campaign.discount} İNDİRİM
              </span>
              <span className="text-sm text-gray-500">12 Ay Sınırsız Erişim</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full text-sm">
                ⭐ TKS Skoru: {campaign.tks_score}
              </span>
              {campaign.tks_score >= 90 && (
                <span className="bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full text-sm">
                  🏆 Sektör Şampiyonu!
                </span>
              )}
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-700 mb-2">📝 Detaylar</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>12 ay boyunca tüm uygulamalara erişim</li>
                <li>Sınırlı sayıda kontenjan</li>
                <li>Kampanya süresi boyunca geçerlidir</li>
              </ul>
            </div>

            <a
              href={campaign.affiliate_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition shadow-md hover:shadow-lg text-center"
            >
              HEMEN YAKALA →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
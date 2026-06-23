import Image from 'next/image'
import Link from 'next/link'

export default function CampaignCard({ campaign, featured = false }: { campaign: any, featured?: boolean }) {
  const cardClasses = featured
    ? 'bg-white rounded-2xl shadow-lg border-2 border-yellow-400 p-4 hover:shadow-xl transition'
    : 'bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition'

  // Logo dosya adını brand_name'den türet
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
    <div className={cardClasses}>
      <div className="flex justify-between items-start">
        <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-xs">
          -{campaign.discount}%
        </span>
        {campaign.tks_score && (
          <span className="bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-md text-xs">
            TKS: {campaign.tks_score}
          </span>
        )}
      </div>
      <div className="my-3 flex justify-center">
        <Image
          src={`/images/${logoFile}.svg`}
          alt={campaign.brand_name}
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
      <p className="text-sm text-gray-600 text-center line-clamp-2">{campaign.description}</p>
      <span className="block text-xs text-gray-400 text-center mt-1">{campaign.category}</span>
      <Link
        href={campaign.affiliate_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-center transition shadow"
      >
        FIRSATI YAKALA →
      </Link>
    </div>
  )
}
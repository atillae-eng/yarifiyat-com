import Image from 'next/image'
import Link from 'next/link'

interface CampaignCardProps {
  campaign: {
    id: number
    brand_name: string
    logo_url?: string
    discount: number
    category: string
    tks_score: number
    description: string
    affiliate_url: string
    featured?: boolean
  }
  featured?: boolean
}

export default function CampaignCard({ campaign, featured = false }: CampaignCardProps) {
  const cardClasses = featured
    ? 'bg-white rounded-2xl shadow-lg border-2 border-yellow-500 p-6 hover:shadow-xl transition-shadow'
    : 'bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition-shadow'

  return (
    <div className={cardClasses}>
      <div className="flex justify-between items-start">
        <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm">
          -{campaign.discount}%
        </span>
        {campaign.tks_score && (
          <span className="bg-blue-100 text-blue-700 font-medium px-2 py-1 rounded-md text-xs">
            TKS: {campaign.tks_score}
          </span>
        )}
      </div>
      <div className="my-3 flex justify-center">
        {campaign.logo_url ? (
          <Image src={campaign.logo_url} alt={campaign.brand_name} width={80} height={40} />
        ) : (
          <span className="text-xl font-semibold text-gray-700">{campaign.brand_name}</span>
        )}
      </div>
      <p className="text-sm text-gray-600 text-center line-clamp-2">{campaign.description}</p>
      <span className="block text-xs text-gray-400 text-center mt-1">{campaign.category}</span>
      <Link
        href={campaign.affiliate_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-center transition-colors"
      >
        FIRSATI YAKALA ›
      </Link>
    </div>
  )
}

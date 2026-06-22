import HeroSection from '@/components/HeroSection'
import CampaignCard from '@/components/CampaignCard'
import CategoryFilter from '@/components/CategoryFilter'

const demoCampaigns = [
  {
    id: 1,
    brand_name: 'Adobe Creative Cloud',
    discount: 50,
    category: 'Teknoloji',
    description: '12 Ay Boyunca Sınırsız Erişim',
    tks_score: 92.5,
    affiliate_url: '#',
    logo_url: '',
  },
  {
    id: 2,
    brand_name: 'B&O Lüks Ses Ürünleri',
    discount: 45,
    category: 'Ses Sistemleri',
    description: 'Sınırlı sayıda süper fırsat',
    tks_score: 88.0,
    affiliate_url: '#',
    logo_url: '',
  },
  {
    id: 3,
    brand_name: 'Süper Lüks Oteller',
    discount: 30,
    category: 'Tatil',
    description: 'Seçkin otellerde özel indirim',
    tks_score: 85.0,
    affiliate_url: '#',
    logo_url: '',
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <CategoryFilter />
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🏆 BUGÜNÜN EN GÜÇLÜ TEKLİFLERİ
          <span className="text-sm font-normal text-gray-500">TKS™ ile sıralandı</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-400">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">👑</span>
          <h3 className="text-xl font-bold text-orange-600">ŞAMPİYON KAMPANYA</h3>
        </div>
        <CampaignCard campaign={demoCampaigns[0]} featured />
      </section>
    </div>
  )
}

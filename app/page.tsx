import HeroSection from '@/components/HeroSection'
import CampaignCard from '@/components/CampaignCard'
import CategoryFilter from '@/components/CategoryFilter'
import { supabase } from '@/lib/supabaseClient'

export default async function HomePage() {
  const { data: campaigns, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('is_active', true)
    .order('tks_score', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Veri çekme hatası:', error)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <CategoryFilter />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          ?? BUGÜNÜN EN GÜÇLÜ TEKLİFLERİ
          <span className="text-sm font-normal text-gray-500">TKS™ ile sıralandı</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns?.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>
      {campaigns && campaigns.length > 0 && (
        <section className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">??</span>
            <h3 className="text-xl font-bold text-orange-600">ŞAMPİYON KAMPANYA</h3>
          </div>
          <CampaignCard campaign={campaigns[0]} featured />
        </section>
      )}
    </div>
  )
}

import HeroSection from '@/components/HeroSection'
import HighlightCards from '@/components/HighlightCards'
import CategorySection from '@/components/CategorySection'
import BulkDealSection from '@/components/BulkDealSection'
import ChampionsLeague from '@/components/ChampionsLeague'
import Personalization from '@/components/Personalization'
import CategoryFilter from '@/components/CategoryFilter'
import { demoCampaigns } from '@/lib/campaignsData'
import { calculateTKS } from '@/lib/tksAlgorithm'

export default function HomePage() {
  const campaigns = demoCampaigns.map(c => ({
    ...c,
    tks_score: calculateTKS({
      discount: c.discount,
      benefit: 80 + Math.random() * 20,
      contribution: 70 + Math.random() * 30,
      trust: 75 + Math.random() * 25,
    })
  }))

  const topOffer = campaigns.reduce((a, b) => a.tks_score > b.tks_score ? a : b)
  const categories = [...new Set(campaigns.map(c => c.category))]
  const champions = [...campaigns].sort((a, b) => b.tks_score - a.tks_score).slice(0, 6)
  const bulkDeals = campaigns.filter(c => c.bulk_deal)

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <HeroSection campaign={topOffer} />
      <HighlightCards />
      <CategoryFilter categories={categories} />
      <CategorySection campaigns={campaigns} categories={categories} />
      <BulkDealSection campaigns={bulkDeals} />
      <ChampionsLeague campaigns={champions} />
      <Personalization campaigns={campaigns} />
      <section className="mt-12 text-center text-gray-400 text-sm border-t pt-8">
        <p>© 2026 YARİFİYAT.COM — Seçilmiş En İyi Teklifler</p>
        <p className="mt-1">Her sektörde yalnızca 1 marka. Karar yorgunluğuna son!</p>
      </section>
    </div>
  )
}
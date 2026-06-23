import Image from 'next/image'

export default function CategorySection({ campaigns, categories }: { campaigns: any[], categories: string[] }) {
  const logoMap: Record<string, string> = {
    'Adobe Creative Cloud': 'adobe-logo',
    'B&O Lüks Ses Ürünleri': 'bo-logo',
    'Süper Lüks Oteller': 'tatil-logo',
    'Acıbadem Sağlık Grubu': 'acibadem-logo',
    'Trendyol': 'trendyol-logo',
    'CarrefourSA': 'carrefour-logo',
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        📊 KATEGORİ ŞAMPİYONLARI
        <span className="text-sm font-normal text-gray-500">Her kategoride en iyisi</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(cat => {
          const best = campaigns.filter(c => c.category === cat).sort((a, b) => b.tks_score - a.tks_score)[0]
          if (!best) return null
          const logoFile = logoMap[best.brand_name] || 'adobe-logo'
          return (
            <div key={cat} className="bg-white rounded-xl shadow-sm border p-4 text-center hover:shadow-md transition hover:border-orange-300">
              <div className="flex justify-center mb-2">
                <Image src={`/images/${logoFile}.svg`} alt={best.brand_name} width={80} height={40} className="object-contain" />
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase">{cat}</div>
              <div className="text-red-600 font-bold text-lg">%{best.discount}</div>
              <a href={best.affiliate_url} target="_blank" rel="noopener" 
                 className="text-xs text-orange-500 hover:underline font-medium">
                Fırsatı Gör →
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
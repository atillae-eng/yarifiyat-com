export default function BulkDealSection({ campaigns }: { campaigns: any[] }) {
  if (!campaigns || !campaigns.length) return null

  return (
    <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 border-2 border-purple-300 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🔥</span>
        <h2 className="text-2xl font-bold text-purple-700">TOPTAN ALIM FIRSATI</h2>
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Toplu Alım</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm">100+ kişi alırsa ekstra indirim! Hemen katıl, fırsatı kaçırma.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.slice(0, 3).map(c => (
          <div key={c.id} className="bg-white rounded-xl shadow p-4 flex items-center justify-between hover:shadow-md transition">
            <div>
              <div className="font-bold text-gray-800">{c.brand_name}</div>
              <div className="text-sm text-gray-500">%{c.discount} + toplu fırsat</div>
              <div className="text-xs text-purple-600 font-medium">🎯 {c.bulk_threshold}+ kişi</div>
            </div>
            <a href={c.affiliate_url} target="_blank" rel="noopener" 
               className="bg-purple-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-purple-600 transition shadow">
              Katıl
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
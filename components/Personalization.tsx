export default function Personalization({ campaigns }: { campaigns: any[] }) {
  const random = campaigns[Math.floor(Math.random() * campaigns.length)]
  return (
    <section className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 border-2 border-blue-300">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🤖</span>
        <h2 className="text-2xl font-bold text-blue-700">SANA ÖZEL</h2>
        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">AI Öneri</span>
      </div>
      <p className="text-gray-600 mb-3">İlgi alanlarına göre seçtiğimiz fırsat:</p>
      <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
        <div>
          <div className="font-bold">{random?.brand_name}</div>
          <div className="text-sm text-gray-500">%{random?.discount} indirim</div>
          <div className="text-xs text-blue-500">{random?.category}</div>
        </div>
        <a href={random?.affiliate_url} target="_blank" rel="noopener" 
           className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600 transition">
          Fırsatı Gör
        </a>
      </div>
    </section>
  )
}

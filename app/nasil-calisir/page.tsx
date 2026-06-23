import Link from 'next/link'

export default function NasilCalisirPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasıl Çalışır?</h1>
      <p className="text-gray-600 mb-12">Yarifiyat.com, en iyi teklifleri seçer, size karar yorgunluğu yaşatmaz.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="text-4xl mb-3">1️⃣</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">SEÇ</h3>
          <p className="text-gray-600 text-sm">TKS™ algoritması ile her sektörde en iyi kampanya seçilir.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="text-4xl mb-3">2️⃣</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">KARAR</h3>
          <p className="text-gray-600 text-sm">Her sektörde yalnızca 1 marka gösterilir. Karar yorgunluğu yok!</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="text-4xl mb-3">3️⃣</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">KAZAN</h3>
          <p className="text-gray-600 text-sm">En iyi fırsatı hemen yakala, indirimden faydalan.</p>
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200 text-left">
        <h2 className="text-xl font-bold text-orange-600 mb-3">📌 TKS™ Skoru Nedir?</h2>
        <p className="text-gray-700 mb-2">TKS (Toplam Kampanya Skoru), bir kampanyanın değerini 4 kriterde hesaplar:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>İndirim (%35 ağırlık)</li>
          <li>Fayda (%25 ağırlık)</li>
          <li>Katkı (%25 ağırlık)</li>
          <li>Güven (%15 ağırlık)</li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">En yüksek TKS skoruna sahip kampanya, o sektörün şampiyonudur.</p>
      </div>
    </div>
  )
}
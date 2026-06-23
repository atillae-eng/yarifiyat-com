export default function HeroSection({ campaign }: { campaign: any }) {
  const discounts = [
    { value: 30, color: 'bg-red-500', rotate: -15 },
    { value: 20, color: 'bg-blue-500', rotate: -8 },
    { value: 40, color: 'bg-green-500', rotate: 0 },
    { value: 10, color: 'bg-yellow-500', rotate: 8 },
    { value: 50, color: 'bg-purple-500', rotate: 15 },
  ]

  return (
    <section className="mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-6 md:p-10 border-2 border-orange-300 shadow-sm relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-2">
            ⚡ BUGÜNÜN EN GÜÇLÜ TEKLİFİ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{campaign.brand_name}</h2>
          <p className="text-gray-600 mt-1">{campaign.description}</p>
          <div className="mt-3 flex items-center gap-4 flex-wrap">
            <span className="bg-red-600 text-white text-3xl font-bold px-6 py-2 rounded-2xl">
              %{campaign.discount} İNDİRİM
            </span>
            <span className="text-sm text-gray-500">12 Ay Sınırsız Erişim</span>
          </div>
          <a href={campaign.affiliate_url} target="_blank" rel="noopener" 
             className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-2xl transition shadow-md hover:shadow-lg">
            HEMEN YAKALA →
          </a>
        </div>
        
        {/* Yelpaze İndirimler */}
        <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64">
          {discounts.map((item, idx) => (
            <div
              key={idx}
              className={`absolute ${item.color} text-white font-bold rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:z-10`}
              style={{
                width: idx === 2 ? '64px' : '56px',
                height: idx === 2 ? '64px' : '56px',
                transform: `rotate(${item.rotate}deg) translateX(${idx === 2 ? 0 : 60}px)`,
                fontSize: idx === 2 ? '20px' : '16px',
                top: '50%',
                left: '50%',
                marginLeft: idx === 2 ? '-32px' : '-28px',
                marginTop: idx === 2 ? '-32px' : '-28px',
              }}
            >
              -{item.value}%
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
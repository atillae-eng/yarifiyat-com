import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default async function HomePage() {
  const { data: campaigns } = await supabase
    .from('campaigns')
    .select('*')
    .eq('is_active', true)
    .order('tks_score', { ascending: false })

  const fallbackCampaigns = [
    {
      id: 1,
      brand_name: "Acıbadem Sağlık Grubu",
      discount: 25,
      tks_score: 94.2,
      description: "Yönetici Ekip Özel Seçimi: Yıllık check-up ve tarama paketlerinde %25 AI entegrasyon indirimi.",
      image_url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      affiliate_url: "#",
      tag: "SAĞLIK"
    },
    {
      id: 2,
      brand_name: "Bang & Olufsen",
      discount: 15,
      tks_score: 89.1,
      description: "Premium Akustik Fırsatı: Beosound serisi üst segment ses sistemleri ve kulaklıklarda TKS™ özel indirimi.",
      image_url: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80",
      affiliate_url: "#",
      tag: "TEKNOLOJİ"
    },
    {
      id: 3,
      brand_name: "Rixos Hotels & Resorts",
      discount: 40,
      tks_score: 96.5,
      description: "Erken Rezervasyon Dönemi: Playcation konseptli ultra her şey dahil premium villalarda %40 net kazanç.",
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      affiliate_url: "#",
      tag: "TURİZM"
    }
  ]

  const displayCampaigns = campaigns && campaigns.length > 0 ? campaigns : fallbackCampaigns

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      
      {/* HERO SECTION */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white mb-16 shadow-xl border border-slate-800">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <Image 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" 
            alt="Alışveriş Tasarımı" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 px-8 py-20 md:p-24 max-w-2xl bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent">
          <span className="inline-flex items-center bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-black px-3 py-1 rounded-full mb-6 tracking-wider">
            🤖 YAPAY ZEKA SKORLAMA MODELİ
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
            Karar Yorgunluğuna Son. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">En İyisini Seçtik.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            Sektörün dev markaları arasından TKS™ algoritmamız (İndirim, Güven, Fayda, Katkı) ile süzülen, günün en güçlü teklifleri. Başka hiçbir seçeneğe ihtiyacınız yok.
          </p>
          <a href="#vitrin" className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5">
            Fırsatları Keşfet ↓
          </a>
        </div>
      </div>

      {/* VİTRİN SEKTÖRLERİ */}
      <div id="vitrin" className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">🏆 BUGÜNÜN LİSTE BAŞI TEKLİFLERİ</h3>
            <p className="text-slate-500 text-xs md:text-sm mt-1">Gereksiz tüm alternatifler elendi. Sistem her daldaki en yüksek skorlu lider markayı gösterir.</p>
          </div>
        </div>

        {/* Kampanya Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCampaigns.map((item: any) => (
            <div key={item.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1">
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={item.image_url || "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&q=80"} 
                  alt={item.brand_name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white font-black px-3 py-1 rounded-full text-xs tracking-wide shadow-md">
                    -%{item.discount} NET İNDİRİM
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-1 rounded-xl shadow-md border border-blue-400/20">
                    TKS™ {item.tks_score}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-orange-400 font-black text-xs tracking-widest block mb-0.5">{item.tag || "PREMIUM"}</span>
                  <h4 className="text-lg font-black text-white tracking-tight drop-shadow-sm">{item.brand_name}</h4>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>
                <a href={item.affiliate_url} target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-950 text-white font-bold py-3.5 rounded-2xl text-center text-sm group-hover:bg-orange-500 shadow-md transition-all duration-300">
                  Özel Fırsatı Yakala →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

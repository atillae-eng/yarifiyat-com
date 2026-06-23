'use client'
import { useState } from 'react'
import { demoCampaigns } from '@/lib/campaignsData'
import { calculateTKS } from '@/lib/tksAlgorithm'

export default function AdminPage() {
  const [campaigns, setCampaigns] = useState(demoCampaigns)
  const [form, setForm] = useState({
    brand_name: '',
    discount: 0,
    category: '',
    description: '',
    affiliate_url: '#',
    bulk_deal: false,
    bulk_threshold: 100,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCampaign = {
      id: campaigns.length + 1,
      ...form,
      tks_score: calculateTKS({
        discount: form.discount,
        benefit: 80,
        contribution: 70,
        trust: 85,
      }),
      is_active: true,
      featured: false,
      logo_url: '',
    }
    setCampaigns([...campaigns, newCampaign])
    setForm({ brand_name: '', discount: 0, category: '', description: '', affiliate_url: '#', bulk_deal: false, bulk_threshold: 100 })
    alert('✅ Kampanya eklendi!')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Yönetim Paneli</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 text-center border">
          <div className="text-3xl font-bold text-orange-500">{campaigns.length}</div>
          <div className="text-gray-500 text-sm">Toplam Kampanya</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center border">
          <div className="text-3xl font-bold text-green-500">{campaigns.filter(c => c.is_active).length}</div>
          <div className="text-gray-500 text-sm">Aktif Kampanya</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center border">
          <div className="text-3xl font-bold text-blue-500">125</div>
          <div className="text-gray-500 text-sm">Bugün Ziyaret</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 border mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📝 Yeni Kampanya Ekle</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 text-sm mb-1">Marka Adı *</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-2"
              value={form.brand_name}
              onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm mb-1">İndirim (%) *</label>
            <input
              type="number"
              className="w-full border rounded-xl px-4 py-2"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: Number(e.target.value) })}
              min={0}
              max={100}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm mb-1">Kategori *</label>
            <select
              className="w-full border rounded-xl px-4 py-2"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            >
              <option value="">Seçiniz</option>
              <option value="Teknoloji">Teknoloji</option>
              <option value="Seyahat">Seyahat</option>
              <option value="Sağlık">Sağlık</option>
              <option value="Moda">Moda</option>
              <option value="Süpermarket">Süpermarket</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700 text-sm mb-1">Affiliate URL</label>
            <input
              type="url"
              className="w-full border rounded-xl px-4 py-2"
              value={form.affiliate_url}
              onChange={(e) => setForm({ ...form, affiliate_url: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium text-gray-700 text-sm mb-1">Açıklama</label>
            <textarea
              className="w-full border rounded-xl px-4 py-2"
              rows={2}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div className="col-span-2 flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.bulk_deal}
                onChange={(e) => setForm({ ...form, bulk_deal: e.target.checked })}
              />
              Toplu Alım Fırsatı
            </label>
            {form.bulk_deal && (
              <div>
                <label className="text-sm text-gray-600 mr-2">Eşik (kişi):</label>
                <input
                  type="number"
                  className="border rounded-xl px-3 py-1 w-20"
                  value={form.bulk_threshold}
                  onChange={(e) => setForm({ ...form, bulk_threshold: Number(e.target.value) })}
                />
              </div>
            )}
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition shadow"
            >
              💾 KAYDET
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 border overflow-x-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">📋 Kampanyalar</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-2">Marka</th>
              <th className="text-left">İndirim</th>
              <th className="text-left">TKS</th>
              <th className="text-left">Kategori</th>
              <th className="text-left">Durum</th>
              <th className="text-left">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(c => (
              <tr key={c.id} className="border-b">
                <td className="py-2 font-medium">{c.brand_name}</td>
                <td>%{c.discount}</td>
                <td>{c.tks_score}</td>
                <td>{c.category}</td>
                <td>
                  <span className={c.is_active ? 'text-green-600' : 'text-gray-400'}>
                    {c.is_active ? '✅ Aktif' : '⏸ Pasif'}
                  </span>
                </td>
                <td>
                  <button className="text-blue-500 hover:underline mr-2">📝</button>
                  <button className="text-red-500 hover:underline">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
'use client'
import { useState } from 'react'

export default function FirsatGonderPage() {
  const [form, setForm] = useState({
    brand_name: '',
    discount: '',
    description: '',
    contact: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', form)
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">Fırsat Gönder</h1>
      <p className="text-gray-600 text-center mb-8">Sadece en iyi kampanyalar! Her sektörde yalnızca 1 marka vitrinimizde yer alır.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h2 className="text-xl font-bold text-green-700">Başarıyla Gönderildi!</h2>
          <p className="text-gray-600 mt-2">Ekibimiz kampanyanızı değerlendirecek ve sizinle iletişime geçecektir.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Marka Adı *</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              value={form.brand_name}
              onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">İndirim Oranı (%) *</label>
            <input
              type="number"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              value={form.discount}
              onChange={(e) => setForm({ ...form, discount: e.target.value })}
              min={0}
              max={100}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Kampanya Detayı</label>
            <textarea
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">İletişim Bilgileri *</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder="E-posta veya telefon"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition shadow-md hover:shadow-lg"
          >
            📤 GÖNDER
          </button>
        </form>
      )}
    </div>
  )
}
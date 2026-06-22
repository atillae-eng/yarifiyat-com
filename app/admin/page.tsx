'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function AdminPage() {
  const [form, setForm] = useState({
    brand_name: '',
    discount: 0,
    category: '',
    description: '',
    affiliate_url: '',
    is_active: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/api/tks', {
      method: 'POST',
      body: JSON.stringify({
        discount: form.discount,
        benefit: 80,
        contribution: 70,
        trust: 85,
      }),
    })
    const { tks_score } = await response.json()

    const { data, error } = await supabase.from('campaigns').insert({
      ...form,
      tks_score,
    })

    if (error) {
      alert('Kayýt baþarýsýz: ' + error.message)
    } else {
      alert('Kampanya baþarýyla eklendi!')
      setForm({ brand_name: '', discount: 0, category: '', description: '', affiliate_url: '', is_active: true })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Yeni Kampanya Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Marka Adý</label>
          <input
            type="text"
            className="w-full border rounded-xl px-4 py-2"
            value={form.brand_name}
            onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Ýndirim (%)</label>
          <input
            type="number"
            className="w-full border rounded-xl px-4 py-2"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: Number(e.target.value) })}
            required
            min={0}
            max={100}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Kategori</label>
          <input
            type="text"
            className="w-full border rounded-xl px-4 py-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Açýklama</label>
          <textarea
            className="w-full border rounded-xl px-4 py-2"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Affiliate URL</label>
          <input
            type="url"
            className="w-full border rounded-xl px-4 py-2"
            value={form.affiliate_url}
            onChange={(e) => setForm({ ...form, affiliate_url: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
        >
          Kampanyayý Yayýnla
        </button>
      </form>
    </div>
  )
}

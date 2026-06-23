'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function CategoryFilter({ categories }: { categories: string[] }) {
  const [active, setActive] = useState('Tümü')

  return (
    <div className="flex flex-wrap gap-2 my-6 justify-center">
      {['Tümü', ...categories].map((cat, i) => (
        <Link
          key={i}
          href={cat === 'Tümü' ? '/' : `/kategori/${encodeURIComponent(cat)}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            active === cat 
              ? 'bg-orange-500 text-white shadow-md' 
              : 'bg-gray-100 hover:bg-orange-100 text-gray-700'
          }`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </Link>
      ))}
    </div>
  )
}
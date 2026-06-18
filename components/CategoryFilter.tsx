export default function CategoryFilter() {
  const categories = ['Tümü', 'Seyahat', 'Teknoloji', 'Sağlık', 'Giyim', 'Süpermarket', 'Eğitim']

  return (
    <div className="flex flex-wrap gap-2 my-6 justify-center">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-2 bg-gray-100 hover:bg-orange-100 rounded-full text-sm font-medium transition-colors"
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

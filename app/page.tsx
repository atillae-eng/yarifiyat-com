import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="w-48 h-48 mx-auto bg-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
          Y
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mt-6">YARİFİYAT.COM</h1>
        <p className="text-gray-500 text-lg">Seçilmiş En İyi Teklifler</p>
        <p className="text-sm text-green-600 mt-4">✅ Build başarılı! Şimdi tasarım eklenebilir.</p>
      </div>
    </div>
  )
}

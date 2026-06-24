import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image
          src="/images/yarifiyat-logo.png"
          alt="YARİFİYAT"
          width={200}
          height={100}
          className="mx-auto"
          priority
        />
        <h1 className="text-2xl font-bold text-gray-700 mt-4">YARİFİYAT.COM</h1>
        <p className="text-gray-500">Seçilmiş En İyi Teklifler</p>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        BUGÃœNÃœN EN GÃœÃ‡LÃœ <br />
        <span className="text-orange-500">TEKLÄ°FÄ°</span>
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
        YalnÄ±zca bir marka. SektÃ¶rÃ¼n en iyi fÄ±rsatÄ±.
      </p>
      <div className="mt-6 flex justify-center gap-3 flex-wrap">
        <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">-50%</span>
        <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">-30%</span>
        <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">-20%</span>
        <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">-40%</span>
      </div>
    </section>
  )
}

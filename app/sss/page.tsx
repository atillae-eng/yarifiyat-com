import FAQAccordion from '@/components/FAQAccordion'

export default function SSSPage() {
  const faqs = [
    {
      question: 'Şampiyon Kampanya nedir?',
      answer: 'Her sektörde TKS skoru en yüksek olan tekliftir. Yarifiyat.com tarafından özel olarak seçilir ve vitrinde gösterilir.'
    },
    {
      question: 'Rakip Yok ne anlama geliyor?',
      answer: 'Her sektörde yalnızca 1 marka vitrinde yer alır. Bu sayede kullanıcı karar yorgunluğu yaşamaz, en iyi teklife odaklanır.'
    },
    {
      question: 'Toplu Alım Fırsatı nasıl çalışır?',
      answer: 'Bir kampanyaya 100+ kişi katılırsa ekstra indirim devreye girer. Ne kadar çok kişi katılırsa indirim o kadar artar.'
    },
    {
      question: 'Fırsat nasıl gönderebilirim?',
      answer: 'Fırsat Gönder sayfasından marka bilgilerinizi, indirim oranınızı ve kampanya detaylarını iletebilirsiniz. Ekibimiz değerlendirip sizinle iletişime geçer.'
    },
    {
      question: 'TKS skoru nasıl hesaplanıyor?',
      answer: 'TKS (Toplam Kampanya Skoru) = İndirim(%35) + Fayda(%25) + Katkı(%25) + Güven(%15) formülüyle hesaplanır.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Sık Sorulanlar</h1>
      <p className="text-gray-600 text-center mb-10">Yarifiyat.com hakkında merak edilenler</p>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-500">Sorunuz mu var?</p>
        <Link href="/firsat-gonder" className="text-orange-500 hover:underline font-medium">Fırsat Gönder sayfasından ulaşın</Link>
      </div>
    </div>
  )
}
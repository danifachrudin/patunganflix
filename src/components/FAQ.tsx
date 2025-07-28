import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah akun Netflix ini legal dan aman?",
      answer: "Ya, 100% legal! Kami menggunakan sistem family sharing resmi Netflix. Setiap akun dibuat sesuai terms of service Netflix dan tidak melanggar aturan apapun. Data pribadi Anda dijamin aman."
    },
    {
      question: "Bagaimana sistem pembagian jadwal nonton?",
      answer: "Tidak ada pembatasan jadwal! Netflix Premium mendukung multiple streaming bersamaan. Dengan paket keluarga, bisa hingga 4 orang nonton bersamaan tanpa gangguan. Setiap member dapat membuat profile sendiri."
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer: "Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BRI, BNI), E-wallet (OVO, GoPay, DANA, ShopeePay), Virtual Account, dan QRIS. Pembayaran otomatis diperpanjang setiap bulan."
    },
    {
      question: "Apa yang terjadi jika ada member yang keluar?",
      answer: "Sistem kami otomatis mencarikan pengganti dalam 24 jam. Selama proses pencarian, akun tetap berjalan normal. Jika Anda yang ingin keluar, cukup informasikan 3 hari sebelum tanggal perpanjangan."
    },
    {
      question: "Bisakah saya ganti paket di tengah periode langganan?",
      answer: "Ya, bisa! Upgrade paket bisa dilakukan kapan saja dengan membayar selisih harga. Untuk downgrade, akan berlaku di periode berikutnya. Tim support akan membantu proses perpindahan paket."
    },
    {
      question: "Bagaimana jika Netflix tiba-tiba bermasalah?",
      answer: "Kami memiliki backup plan dan monitor 24/7. Jika ada masalah teknis, akan langsung ditangani dalam 1-2 jam. Jika downtime lebih dari 24 jam, kami berikan kompensasi perpanjangan gratis."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pertanyaan <span className="text-red-500">Umum</span>
          </h2>
          <p className="text-xl text-gray-400">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-red-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Hubungi Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
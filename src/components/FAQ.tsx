import React, { useState } from 'react';
import { ChevronDown, Shield, Clock, CreditCard, Users } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shield,
      question: "Apakah aman berbagi akun Netflix?",
      answer: "Sangat aman! Kami menggunakan sistem profil terpisah untuk setiap member. Data pribadi kamu tetap terlindungi dan tidak bisa diakses oleh member lain."
    },
    {
      icon: Clock,
      question: "Bagaimana jadwal nonton? Apakah bisa bentrok?",
      answer: "Netflix Premium mendukung streaming simultan di 4 device. Jadi sangat jarang terjadi bentrok. Kami juga mengatur jumlah member agar sesuai dengan kapasitas."
    },
    {
      icon: CreditCard,
      question: "Bagaimana sistem pembayaran?",
      answer: "Pembayaran dilakukan setiap bulan via transfer bank atau e-wallet. Kami akan mengirim reminder sebelum tanggal jatuh tempo."
    },
    {
      icon: Users,
      question: "Apa yang terjadi jika ada member yang keluar?",
      answer: "Jika ada member yang keluar, kami akan mencari pengganti atau menyesuaikan harga untuk member yang tersisa. Tidak perlu khawatir!"
    }
  ];

  return (
    <section className="py-20 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan <span className="text-red-600">Umum</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Masih ada pertanyaan? Berikut jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-600/50"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <faq.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact for More Questions */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20ada%20pertanyaan%20tentang%20Netflix%20sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-400 font-medium transition-colors duration-200"
          >
            <span>Tanya langsung ke WhatsApp</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
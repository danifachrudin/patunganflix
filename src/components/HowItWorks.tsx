import React from 'react';
import { UserPlus, CreditCard, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Daftar & Login",
      description: "Buat akun PatunganFlix dengan mudah menggunakan email atau Google. Proses pendaftaran hanya butuh 2 menit!"
    },
    {
      icon: CreditCard,
      title: "Pilih Paket & Bayar",
      description: "Pilih paket yang sesuai kebutuhan (5, 7, atau 10 orang). Bayar dengan berbagai metode pembayaran yang aman."
    },
    {
      icon: Users,
      title: "Gabung Grup Nonton",
      description: "Setelah pembayaran berhasil, kamu akan dimasukkan ke grup WhatsApp dan mendapat akses Netflix."
    }
  ];

  return (
    <section id="cara-kerja" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Cara Kerja <span className="text-red-500">PatunganFlix</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mulai nonton Netflix dengan harga terjangkau hanya dalam 3 langkah mudah
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-600 to-gray-700 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-2 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-2xl mb-6 group-hover:bg-red-600/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
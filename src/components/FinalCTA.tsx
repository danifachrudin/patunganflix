import React from 'react';
import { ArrowRight, Clock, Shield, Users } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Mulai Nonton dengan
            <span className="block text-red-500">Harga Super Hemat?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang sudah merasakan Netflix Premium 
            dengan harga terjangkau. Mulai dari Rp 21.000/bulan saja!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <Clock className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Setup Cepat 2 Menit</h3>
            <p className="text-gray-400 text-sm">Langsung bisa nonton setelah pembayaran berhasil</p>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <Shield className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">100% Aman & Legal</h3>
            <p className="text-gray-400 text-sm">Menggunakan sistem family sharing resmi Netflix</p>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <Users className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Support 24/7</h3>
            <p className="text-gray-400 text-sm">Tim support siap membantu kapan saja</p>
          </div>
        </div>

        {/* Urgency Element */}
        <div className="bg-red-600/10 border border-red-600/30 rounded-2xl p-6 mb-8">
          <p className="text-red-400 font-semibold mb-2">⚡ Promo Terbatas!</p>
          <p className="text-gray-300">
            Harga spesial ini hanya berlaku untuk 100 pendaftar pertama bulan ini. 
            <span className="text-white font-semibold"> Jangan sampai terlewat!</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 group transform hover:scale-105 shadow-lg shadow-red-600/30">
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-full text-xl font-bold transition-all duration-300">
            Lihat Paket
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>Sudah dipercaya 1000+ pengguna • Tanpa komitmen jangka panjang • Cancel kapan saja</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
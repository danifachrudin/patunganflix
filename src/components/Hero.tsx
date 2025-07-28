import React from 'react';
import { ArrowRight, Users, Shield, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>100% Legal & Aman</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Netflix Sharing
              <span className="block text-red-500">mulai dari 21rb/bulan</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Nikmati Netflix premium dengan cara yang lebih hemat! Bergabung dengan keluarga dan teman-teman 
              dalam satu akun, nonton sepuasnya tanpa khawatir tagihan mahal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105">
                <span>Gabung Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black">
                Lihat Paket
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-red-500" />
                <span className="text-sm">1000+ Pengguna Aktif</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-500" />
                <span className="text-sm">Keamanan Terjamin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm">Support 24/7</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-3xl p-8 backdrop-blur-sm border border-red-600/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hemat hingga 75%
                </h3>
                <p className="text-gray-300 mb-6">
                  Dari harga normal Rp 186.000/bulan menjadi hanya Rp 21.000/bulan per orang
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-500">Rp 186K</div>
                    <div className="text-sm text-gray-400">Harga Normal</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-4 border border-red-600/50">
                    <div className="text-2xl font-bold text-white">Rp 21K</div>
                    <div className="text-sm text-gray-300">Dengan PatunganFlix</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
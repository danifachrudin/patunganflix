import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      members: 5,
      price: 37,
      originalPrice: 186,
      popular: false,
      features: [
        "Netflix Premium 4K",
        "5 Profile Pengguna",
        "Download Unlimited",
        "Support 24/7",
        "Grup WhatsApp"
      ]
    },
    {
      name: "Popular",
      members: 7,
      price: 27,
      originalPrice: 186,
      popular: true,
      features: [
        "Netflix Premium 4K",
        "7 Profile Pengguna",
        "Download Unlimited",
        "Support Priority",
        "Grup WhatsApp",
        "Bonus 1 Bulan"
      ]
    },
    {
      name: "Family",
      members: 10,
      price: 21,
      originalPrice: 186,
      popular: false,
      features: [
        "Netflix Premium 4K",
        "10 Profile Pengguna",
        "Download Unlimited",
        "Support VIP",
        "Grup WhatsApp",
        "Bonus 2 Bulan"
      ]
    }
  ];

  return (
    <section id="paket" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pilih <span className="text-red-500">Paket Terbaik</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Semua paket sudah termasuk admin fee dan akses penuh ke Netflix Premium 4K
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
              pkg.popular 
                ? 'bg-gradient-to-br from-red-600/20 to-red-900/20 border-2 border-red-600 scale-105' 
                : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-red-600/50'
            }`}>
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>PALING POPULER</span>
                  </div>
                </div>
              )}

              {/* Package Icon */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  pkg.popular ? 'bg-red-600/30' : 'bg-gray-700'
                }`}>
                  {index === 0 && <Star className="w-8 h-8 text-red-500" />}
                  {index === 1 && <Crown className="w-8 h-8 text-red-500" />}
                  {index === 2 && <Crown className="w-8 h-8 text-yellow-500" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400">{pkg.members} Orang</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-500 line-through text-lg">Rp {pkg.originalPrice.toLocaleString('id-ID')}K</span>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    HEMAT {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                  </span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  Rp {pkg.price}K<span className="text-lg text-gray-400 font-normal">/bulan</span>
                </div>
                <p className="text-gray-400 text-sm">Per orang (sudah termasuk admin fee)</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                pkg.popular
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-white hover:bg-gray-100 text-black'
              }`}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Dipercaya oleh 1000+ pengguna</p>
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Support 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
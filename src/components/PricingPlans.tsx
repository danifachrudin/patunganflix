import React from 'react';
import { Check, Crown, Users } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const plans = [
    {
      users: 5,
      price: 39500,
      originalPrice: 186000,
      adminFee: 12500,
      popular: false
    },
    {
      users: 7,
      price: 29500,
      originalPrice: 186000,
      adminFee: 20500,
      popular: true
    },
    {
      users: 10,
      price: 21500,
      originalPrice: 186000,
      adminFee: 29000,
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <section className="py-20 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paket <span className="text-red-600">Hemat</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Semakin banyak teman, semakin hemat! Pilih paket yang sesuai dengan kebutuhan kamu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular 
                  ? 'border-red-600 shadow-lg shadow-red-600/20' 
                  : 'border-gray-700 hover:border-red-600/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Paling Populer</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold">{plan.users} Orang</h3>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-red-600">
                    Rp {formatPrice(plan.price)}
                  </span>
                  <span className="text-gray-400">/orang/bulan</span>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gray-900/50 rounded-lg p-3 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Netflix Premium:</span>
                    <span>Rp {formatPrice(plan.originalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Admin Fee:</span>
                    <span>Rp {formatPrice(plan.adminFee)}</span>
                  </div>
                  <hr className="border-gray-700" />
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>Rp {formatPrice(plan.originalPrice + plan.adminFee)}</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-semibold">
                    <span>Per orang:</span>
                    <span>Rp {formatPrice(plan.price)}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {[
                  'Ultra HD 4K Resolution',
                  'Nonton di 4 device bersamaan',
                  'Download untuk offline',
                  'Tanpa iklan',
                  'Akses semua konten Netflix'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20mau%20gabung%20paket%20${plan.users}%20orang%21`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white'
                }`}
              >
                Pilih Paket Ini
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            💡 <strong>Tips:</strong> Ajak lebih banyak teman untuk harga yang lebih hemat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
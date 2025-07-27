import React from 'react';
import { Users, MessageCircle, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Users,
      title: "Pilih Paket",
      description: "Pilih paket yang sesuai dengan jumlah orang yang ingin berbagi"
    },
    {
      icon: MessageCircle,
      title: "Hubungi Admin",
      description: "Chat WhatsApp kami untuk konfirmasi dan pembayaran"
    },
    {
      icon: Play,
      title: "Mulai Nonton",
      description: "Dapatkan akses Netflix dan mulai streaming favorit kamu!"
    }
  ];

  return (
    <section className="py-20 animate-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cara <span className="text-red-600">Bergabung</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hanya 3 langkah mudah untuk mulai menikmati Netflix dengan harga hemat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
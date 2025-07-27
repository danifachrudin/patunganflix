import React from "react";
import { ArrowRight, Star, Users } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      data-animate
      className="py-20 opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 border border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/5 to-transparent"></div>

            {/* Dekorasi */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-red-600/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-red-600/30 rounded-full animate-pulse delay-1000"></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-red-400 font-medium text-sm">
                  Hemat hingga 80%
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Langganan Netflix jadi
                <br />
                <span className="text-red-600">ringan dan seru</span>
                <br />
                bareng teman!
              </h2>

              {/* Deskripsi */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Gabung sekarang dan nikmati ribuan film & series Netflix premium
                dengan harga yang jauh lebih hemat!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <span className="text-gray-300">500+ Member Aktif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">Rating 4.9/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-300">100% Legal</span>
                </div>
              </div>

              {/* Tombol CTA */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20mau%20gabung%20Netflix%20sharing%20sekarang%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
                >
                  <span>Gabung Sekarang via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-gray-400 text-sm">
                  ⚡ Proses cepat, mulai nonton hari ini juga!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

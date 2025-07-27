import React from "react";
import { MessageCircle, Users, Check, Shield, Star } from "lucide-react";

interface HeroProps {
  isVisible: Record<string, boolean>;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <section
      id="hero"
      data-animate
      className={`min-h-screen pt-24 flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible?.hero
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Netflix Sharing</span>
            <br />
            <span className="text-red-500">mulai dari</span>
            <br />
            <span className="text-red-400 text-6xl sm:text-7xl lg:text-8xl">
              21rb/bulan
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nonton Netflix Premium legal dan hemat bareng teman!
            <span className="text-red-400 font-semibold">
              {" "}
              Kualitas 4K, tanpa iklan, akses semua konten.
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20mau%20gabung%20Netflix%20sharing!"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Gabung Sekarang</span>
          </a>
          <a
            href="#group"
            className="border-2 border-gray-600 hover:border-red-500 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-red-500/10"
          >
            <Users className="h-6 w-6" />
            <span>Lihat Grup</span>
          </a>
        </div>

        {/* Trust Info */}
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>100% Legal</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-500" />
            <span>Aman & Terpercaya</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>1000+ Member Aktif</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

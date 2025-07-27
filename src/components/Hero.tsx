import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-red-600 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-red-600 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-red-600 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-red-400 fill-current" />
            <span className="text-red-400 font-medium text-sm">Platform Netflix Sharing Terpercaya</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="text-white">Netflix Sharing</span>
            <br />
            <span className="text-red-600">mulai dari 21rb/bulan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Nonton Netflix premium bareng teman-teman dengan harga yang super hemat. 
            Legal, aman, dan mudah!
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up delay-300">
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">100% Legal</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Ultra HD 4K</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Tanpa Iklan</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up delay-500">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20mau%20gabung%20Netflix%20sharing%21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
            >
              <span>Gabung Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Badge */}
          <p className="text-gray-400 mt-6 text-sm animate-fade-in-up delay-700">
            Sudah dipercaya oleh <span className="text-red-400 font-semibold">500+ keluarga</span> di Indonesia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
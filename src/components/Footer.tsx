import React from 'react';
import { Play, MessageCircle, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <h3 className="text-xl font-bold text-white">PatunganFlix</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Platform terpercaya untuk berbagi langganan Netflix dengan aman, 
              legal, dan hemat. Nonton bareng teman jadi lebih seru!
            </p>
            <div className="flex items-center space-x-2 text-yellow-400 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 dari 500+ member</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:admin@patunganflix.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informasi</h4>
            <div className="space-y-3">
              <a href="#cara-kerja" className="block text-gray-400 hover:text-red-400 transition-colors duration-200">
                Cara Kerja
              </a>
              <a href="#paket-harga" className="block text-gray-400 hover:text-red-400 transition-colors duration-200">
                Paket Harga
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-red-400 transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex items-start space-x-3 bg-gray-900/50 rounded-lg p-4 mb-6">
            <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-white mb-2">Disclaimer</h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                PatunganFlix bukan afiliasi resmi Netflix. Kami adalah platform yang membantu 
                pengguna berbagi langganan Netflix sesuai dengan Terms of Service Netflix. 
                Semua konten dan trademark adalah milik Netflix, Inc.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 PatunganFlix. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
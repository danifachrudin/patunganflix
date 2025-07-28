import React from 'react';
import { Play, Mail, Phone, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-white">PatunganFlix</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform patungan Netflix terpercaya untuk keluarga dan teman. 
              Nonton hemat, nonton bareng, nonton sepuasnya!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" /> 
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#cara-kerja" className="text-gray-400 hover:text-white transition-colors">Cara Kerja</a></li>
              <li><a href="#paket" className="text-gray-400 hover:text-white transition-colors">Paket Harga</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lapor Bug</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Permintaan Fitur</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">support@patunganflix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PatunganFlix. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>🇮🇩 Indonesia</span>
              <span>•</span>
              <span>Bahasa Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
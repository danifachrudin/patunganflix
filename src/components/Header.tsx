import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
            <h1 className="text-xl font-bold text-white">
              PatunganFlix
            </h1>
          </div>
          
          <a 
            href="https://wa.me/6281234567890?text=Halo%20PatunganFlix%2C%20saya%20tertarik%20untuk%20bergabung%21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
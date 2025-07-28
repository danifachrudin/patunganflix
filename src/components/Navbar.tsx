import React, { useState } from 'react';
import { Menu, X, Play, LogIn, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-white">PatunganFlix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#cara-kerja" className="text-gray-300 hover:text-white transition-colors">
              Cara Kerja
            </a>
            <a href="#paket" className="text-gray-300 hover:text-white transition-colors">
              Paket
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                  <User className="w-4 h-4" />
                  <span>{profile?.role === 'admin' ? 'Admin' : 'Dashboard'}</span>
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Gabung Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
              <a
                href="#cara-kerja"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cara Kerja
              </a>
              <a
                href="#paket"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Paket
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              {user ? (
                <div className="space-y-1">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>{profile?.role === 'admin' ? 'Admin' : 'Dashboard'}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
              <button className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium transition-colors mt-2">
                Gabung Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
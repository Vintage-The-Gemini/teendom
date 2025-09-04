import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiStar } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CATEGORIES", path: "/categories" },
    { name: "JUDGES", path: "/judges" },
    { name: "FAQ", path: "/faq" },
    // { name: "GALLERY", path: "/gallery" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" 
         style={{
           background: 'linear-gradient(135deg, rgba(11, 20, 38, 0.95) 0%, rgba(22, 42, 74, 0.95) 50%, rgba(11, 20, 38, 0.95) 100%)',
           backdropFilter: 'blur(20px)',
           borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
           fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
         }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with distinct background */}
          <Link to="/" className="flex items-center group outline-none focus:outline-none border-none touch-manipulation" 
                style={{ WebkitTapHighlightColor: 'transparent' }}>
            <img 
              src="/teendom awards primary icon.png" 
              alt="Teendom Awards" 
              className="h-16 w-auto transition-all duration-300"
              onError={(e) => {
                if (e.target.src.includes('primary icon')) {
                  e.target.src = '/teendom awards primary logo.png';
                } else if (e.target.src.includes('primary logo')) {
                  e.target.src = '/teendom.png';
                }
              }}
            />
          </Link>

          {/* Desktop Navigation - Modern Floating Pills */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 p-2 rounded-none" style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative px-6 py-3 text-sm font-semibold rounded-none transition-all duration-300 outline-none focus:outline-none border-none touch-manipulation"
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    background: isActive(item.path) 
                      ? 'linear-gradient(145deg, #FFD700, #FFA000)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    color: isActive(item.path) ? '#1a237e' : '#E8EAF6',
                    border: isActive(item.path) 
                      ? '2px solid rgba(255, 215, 0, 0.3)' 
                      : '2px solid transparent',
                    transform: isActive(item.path) ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive(item.path) 
                      ? '0 4px 15px rgba(255, 215, 0, 0.3)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    textShadow: isActive(item.path) ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#E8EAF6';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Modern Pulsing Design */}
          <div className="hidden md:block">
            <Link 
              to="/nominate"
              className="font-bold px-8 py-4 rounded-none text-sm transition-all duration-300 flex items-center space-x-3 outline-none focus:outline-none border-none touch-manipulation relative overflow-hidden"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                background: 'linear-gradient(145deg, #FFD700, #FFA000)',
                color: '#1a237e',
                boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                border: '2px solid rgba(255, 215, 0, 0.6)',
                animation: 'pulse-gold 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
              }}
            >
              <HiStar className="h-5 w-5 animate-spin" style={{animationDuration: '3s'}} />
              <span style={{letterSpacing: '1px', fontWeight: '800'}}>NOMINATE NOW</span>
              <div className="absolute inset-0 rounded-none opacity-20" style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                animation: 'shimmer 2s infinite'
              }}></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors duration-300 outline-none focus:outline-none border-none touch-manipulation"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                color: '#1a237e'
              }}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 outline-none focus:outline-none border-none touch-manipulation ${
                    isActive(item.path)
                      ? "text-white shadow-md"
                      : ""
                  }`}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    backgroundColor: isActive(item.path) ? '#1a237e' : 'transparent',
                    color: isActive(item.path) ? '#FFD700' : '#1a237e'
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/nominate"
                onClick={() => setIsOpen(false)}
                className="font-bold px-6 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 outline-none focus:outline-none border-none touch-manipulation mt-2"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FF8C00 50%, #DAA520 75%, #B8860B 100%)',
                  color: '#1a237e'
                }}
              >
                <HiStar className="h-4 w-4" />
                <span>NOMINATE NOW</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes pulse-gold {
          0%, 100% {
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
          }
          50% {
            box-shadow: 0 8px 35px rgba(255, 215, 0, 0.7);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
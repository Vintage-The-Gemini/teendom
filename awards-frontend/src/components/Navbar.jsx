import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiStar } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "CATEGORIES", path: "/categories" },
    { name: "JUDGES", path: "/judges" },
    { name: "FAQ", path: "/faq" },
    { name: "GALLERY", path: "/gallery" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" 
         style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group outline-none focus:outline-none border-none touch-manipulation" 
                style={{ WebkitTapHighlightColor: 'transparent' }}>
            <div className="relative">
              <img 
                src="/teendom awards primary logo.png" 
                alt="Teendom Awards" 
                className="h-10 w-auto group-hover:shadow-lg transition-shadow duration-300"
                onError={(e) => {
                  if (e.target.src.includes('primary')) {
                    e.target.src = '/teendom awards logo.jpg';
                  } else if (e.target.src.includes('logo.jpg')) {
                    e.target.src = '/teendom.png';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-tight tracking-wider" style={{color: '#003875'}}>
                TEENDOM
              </span>
              <span className="text-xs font-bold leading-tight tracking-wide" style={{color: '#DAA520'}}>
                AWARDS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 outline-none focus:outline-none border-none touch-manipulation ${
                    isActive(item.path)
                      ? "text-white shadow-md"
                      : "hover:shadow-md"
                  }`}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    backgroundColor: isActive(item.path) ? '#003875' : 'transparent',
                    color: isActive(item.path) ? 'white' : '#003875'
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/nominate"
              className="font-bold px-6 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2 outline-none focus:outline-none border-none touch-manipulation"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                backgroundColor: '#DAA520',
                color: '#003875'
              }}
            >
              <HiStar className="h-4 w-4" />
              <span>NOMINATE NOW</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors duration-300 outline-none focus:outline-none border-none touch-manipulation"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                color: '#003875'
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
                    backgroundColor: isActive(item.path) ? '#003875' : 'transparent',
                    color: isActive(item.path) ? 'white' : '#003875'
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
                  backgroundColor: '#DAA520',
                  color: '#003875'
                }}
              >
                <HiStar className="h-4 w-4" />
                <span>NOMINATE NOW</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
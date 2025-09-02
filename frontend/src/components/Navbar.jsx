// File Path: frontend/src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiStar } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "YOUNG CITIZENS", path: "/articles" },
    { name: "AWARDS", path: "/awards" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - No borders */}
          <Link to="/" className="flex items-center space-x-3 group outline-none focus:outline-none border-none touch-manipulation" style={{ WebkitTapHighlightColor: 'transparent' }}>
            <div className="relative">
              <img 
                src="/teendom.png" 
                alt="Teendom" 
                className="h-10 w-10 rounded-full group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center">
                <HiStar className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-red-500 leading-tight tracking-wider">
                TEENDOM
              </span>
              <span className="text-xs font-bold text-gray-600 leading-tight tracking-wide">
                CELEBRATING EXCELLENCE
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
                      ? "bg-red-500/90 text-white shadow-md"
                      : "text-gray-700 hover:text-red-500 hover:bg-white/60"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/awards/nominate"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2 outline-none focus:outline-none border-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <HiStar className="h-4 w-4" />
              <span>NOMINATE NOW</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-white/60 transition-colors duration-300 outline-none focus:outline-none border-none touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Inside the same container */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-md">
            <div className="py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 outline-none focus:outline-none border-none touch-manipulation ${
                    isActive(item.path)
                      ? "bg-red-500/90 text-white shadow-md"
                      : "text-gray-700 hover:text-red-500 hover:bg-white/60"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/awards/nominate"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 outline-none focus:outline-none border-none touch-manipulation mt-2"
                style={{ WebkitTapHighlightColor: 'transparent' }}
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
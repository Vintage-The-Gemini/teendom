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
    <nav className="bg-white shadow-lg border-b-4 border-red-500" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/teendom.png" 
                alt="Teendom" 
                className="h-12 w-12 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center">
                <HiStar className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-red-500 leading-tight tracking-wider">
                TEENDOM
              </span>
              <span className="text-xs font-bold text-gray-600 leading-tight tracking-wide">
                CELEBRATING EXCELLENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-6 py-3 text-sm font-black rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-red-500 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-red-500 hover:bg-red-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-md"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/awards/nominate"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black px-8 py-3 rounded-xl text-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <HiStar className="h-5 w-5" />
              <span>NOMINATE NOW</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-500 hover:text-red-600 focus:outline-none p-3 rounded-xl hover:bg-red-50 transition-colors duration-300"
            >
              {isOpen ? (
                <HiX className="h-8 w-8" />
              ) : (
                <HiMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-red-200 shadow-xl">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 text-base font-black rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-red-500 hover:bg-red-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              to="/awards/nominate"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-6 py-4 rounded-xl text-base mt-4 shadow-lg"
            >
              <HiStar className="h-5 w-5" />
              <span>NOMINATE NOW</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiUser } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "YOUNG CITIZENS", path: "/articles" },
    { name: "AWARDS", path: "/awards" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl border-b-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/teendom.png" 
              alt="Teendom" 
              className="h-12 w-12 rounded-full border-2 border-red-500 shadow-lg"
            />
            <span className="text-3xl font-bold text-red-500 tracking-wider font-mono">
              TEENDOM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-bold tracking-wider transition-all duration-300 transform hover:scale-110 ${
                    isActive(item.path)
                      ? "text-red-500 border-b-2 border-red-500 pb-1"
                      : "text-white hover:text-red-400"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* User Icon */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
              <HiUser className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 focus:outline-none transform hover:scale-110 transition-transform duration-300"
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
        <div className="md:hidden bg-black border-t border-red-500">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-bold tracking-wider rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-red-500 bg-red-500 bg-opacity-10"
                    : "text-white hover:text-red-400 hover:bg-white hover:bg-opacity-5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
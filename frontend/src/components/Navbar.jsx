// File Path: frontend/src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiStar, HiAcademicCap } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/", icon: null },
    { name: "YOUNG CITIZENS", path: "/articles", icon: null },
    { name: "AWARDS", path: "/awards", icon: HiAcademicCap },
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-blue-200" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/teendom.png" 
                alt="Teendom" 
                className="h-10 w-10 rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <HiStar className="h-2.5 w-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-tight">
                TEENDOM
              </span>
              <span className="text-xs font-medium text-blue-600 leading-tight">
                Celebrating Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    <span>{item.name}</span>
                    {isActive(item.path) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/awards/nominate"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <HiStar className="h-4 w-4" />
              <span>NOMINATE</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile CTA */}
            <Link
              to="/awards/nominate"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-6 py-3 rounded-lg text-sm mt-4 mx-2 shadow-md"
            >
              <HiStar className="h-4 w-4" />
              <span>NOMINATE NOW</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
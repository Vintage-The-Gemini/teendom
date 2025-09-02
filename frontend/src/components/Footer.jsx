// File Path: frontend/src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiPhone, HiLocationMarker, HiStar, HiTrendingUp } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-red-500 mb-6">TEENDOM</h3>
            <p className="text-gray-300 font-medium leading-relaxed max-w-md mb-6">
              Empowering young African voices through storytelling, recognition, and community building. 
              Your platform for growth and inspiration.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/awards" 
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-black hover:bg-red-600 transition-colors"
              >
                <HiStar className="mr-2" />
                AWARDS
              </Link>
              <Link 
                to="/awards/nominate" 
                className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg font-black hover:bg-gray-600 transition-colors"
              >
                <HiTrendingUp className="mr-2" />
                NOMINATE
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-white mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 font-medium hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 font-medium hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/young-citizens" className="text-gray-300 font-medium hover:text-white transition-colors">
                  Young Citizens
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-300 font-medium hover:text-white transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/awards/nominate" className="text-gray-300 font-medium hover:text-white transition-colors">
                  Nominate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black text-white mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 font-medium">
                <HiMail className="mr-3 text-red-500" />
                info@teendom.org
              </li>
              <li className="flex items-center text-gray-300 font-medium">
                <HiPhone className="mr-3 text-red-500" />
                +254 700 123 456
              </li>
              <li className="flex items-start text-gray-300 font-medium">
                <HiLocationMarker className="mr-3 text-red-500 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya<br />East Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Categories Section */}
      

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-medium mb-4 md:mb-0">
            © 2025 TEENDOM. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 font-medium hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 font-medium hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 font-medium hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 font-medium italic max-w-2xl mx-auto">
            "Empowering the next generation of African leaders, one story at a time."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
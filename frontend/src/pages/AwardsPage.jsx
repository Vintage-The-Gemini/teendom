// File Path: frontend/src/pages/AwardsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiStar, HiClock, HiMail, HiPhone, HiAcademicCap } from "react-icons/hi";
import FounderSection from "../components/awards/FounderSection";
import JudgesSection from "../components/awards/JudgesSection";

function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const awardCategories = [
    {
      id: 1,
      title: "Academic Excellence Award",
      description: "Spotlights brilliance in the classroom and beyond.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      title: "Leadership Excellence Award", 
      description: "For those who lead with courage, purpose, and vision.",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Innovation Award",
      description: "For teen trailblazers solving tomorrow's challenges today.",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Teenpreneur Award",
      description: "For bold builders turning ideas into impact.",
      color: "from-green-400 to-green-600"
    },
    {
      id: 5,
      title: "Sports & Wellness Award",
      description: "For champions of strength, balance, and discipline.",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 6,
      title: "Advocate for Change Award",
      description: "For teens raising their voice for a better world.",
      color: "from-red-400 to-red-600"
    },
    {
      id: 7,
      title: "Environmental Champion Award",
      description: "For eco-heroes safeguarding our planet's future.",
      color: "from-teal-400 to-teal-600"
    },
    {
      id: 8,
      title: "Digital Impact Award",
      description: "For digital voices making real-world impact.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: 9,
      title: "Teen of the Year Award",
      description: "The ultimate changemaker. A true Teendom icon.",
      color: "from-yellow-500 to-red-500"
    },
    {
      id: 10,
      title: "Creative Arts Award",
      description: "For the dreamers, storytellers, and visionaries shaping culture.",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-red-400 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-4 border-green-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
                <img 
                  src="/teendom awards primary logo.png" 
                  alt="Teendom Awards Logo"
                  className="h-32 w-auto"
                />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              CELEBRATING
              <br />
              <span className="text-yellow-400">TEEN EXCELLENCE</span>
            </h1>
            
            <p className="text-2xl text-blue-200 font-semibold mb-12">
              2025 CATEGORIES
            </p>

            {/* Categories */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Academic Excellence",
                "Leadership Excellence", 
                "Innovation Award",
                "Teenpreneur Award",
                "Sports & Wellness",
                "Advocate for Change",
                "Environmental Champion",
                "Digital Impact",
                "Teen of the Year",
                "Creative Arts"
              ].map((category, index) => (
                <div 
                  key={index} 
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg transform hover:scale-105 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                  }}
                >
                  <div className="flex items-center justify-center">
                    <HiStar className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-semibold text-center">{category}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-blue-200 font-medium mb-8">
              Nominations open on 5th September
            </p>

            {/* CTA Button */}
            <Link 
              to="/awards/nominate"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-6 px-16 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
            >
              NOMINATE NOW
            </Link>

          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-black bg-opacity-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400">
                <div className="text-3xl font-semibold text-yellow-400 mb-2">10</div>
                <div className="text-white font-medium">Award Categories</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400">
                <div className="text-3xl font-semibold text-blue-400 mb-2">13-19</div>
                <div className="text-white font-medium">Age Range</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-green-400">
                <div className="text-3xl font-semibold text-green-400 mb-2">FREE</div>
                <div className="text-white font-medium">Nominations</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-red-400">
                <div className="text-3xl font-semibold text-red-400 mb-2">DEC 6</div>
                <div className="text-white font-medium">Awards Ceremony</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Judges Section */}
      <JudgesSection />

      {/* Award Categories Preview */}
      <section className="py-20 bg-black bg-opacity-30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              <span className="text-yellow-400">2025</span> AWARD CATEGORIES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awardCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-20 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <HiAcademicCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-medium mb-4">
                    {category.description}
                  </p>
                  <button className="text-yellow-400 font-medium text-sm hover:text-yellow-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              READY TO <span className="text-yellow-400">NOMINATE</span>?
            </h2>
            <p className="text-xl text-blue-200 mb-12 font-medium">
              Know an exceptional teen making a difference? Let's celebrate their impact!
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to="/awards/nominate"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-6 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
              >
                START NOMINATION
              </Link>
              <button className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-bold py-6 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-30">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AwardsPage;
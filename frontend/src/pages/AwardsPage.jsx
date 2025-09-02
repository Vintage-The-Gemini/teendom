// frontend/src/pages/AwardsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiStar, HiClock, HiMail, HiPhone, HiAcademicCap } from "react-icons/hi";

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
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Starry Background Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-80 left-1/2 w-2 h-2 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content - CENTERED */}
              <div className="text-white text-center">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/teendom.png" 
                    alt="Teendom" 
                    className="h-16 w-16 rounded-full border-2 border-yellow-400 shadow-lg mr-4"
                  />
                  <div>
                    <h1 className="text-2xl font-black text-yellow-400 tracking-wider">
                      TEENDOM
                    </h1>
                    <p className="text-blue-200 font-bold">AWARDS</p>
                  </div>
                </div>

                <h2 className="text-5xl font-black mb-4">
                  CELEBRATING
                </h2>
                <h3 className="text-4xl font-black text-yellow-400 mb-8">
                  TEEN EXCELLENCE
                </h3>

                <div className="mb-8">
                  <h4 className="text-3xl font-black text-yellow-300 mb-6">
                    2025 CATEGORIES
                  </h4>
                  <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
                    {awardCategories.map((category, index) => (
                      <div key={category.id} className="flex items-center justify-center">
                        <HiStar className="h-5 w-5 text-yellow-400 mr-3" />
                        <span className="bg-black bg-opacity-50 px-4 py-2 rounded text-white font-bold text-sm">
                          {category.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <p className="text-2xl font-bold italic text-yellow-200 mb-4">
                    Nominations open on 5th September
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-yellow-300">
                    <span className="bg-yellow-500 text-black px-4 py-2 rounded font-black">
                      www.teendom.africa
                    </span>
                    <span className="bg-yellow-500 text-black px-4 py-2 rounded font-black">
                      info@teendom.africa
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Content - Trophy */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Trophy Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full opacity-20 blur-3xl scale-150"></div>
                  
                  {/* Trophy Container */}
                  <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <HiAcademicCap className="h-48 w-48 text-yellow-900 mx-auto" />
                    
                    {/* Trophy Base */}
                    <div className="mt-4 bg-red-600 h-12 rounded-b-2xl shadow-lg"></div>
                    
                    {/* Decorative Stars */}
                    <div className="absolute -top-4 -right-4">
                      <HiStar className="h-8 w-8 text-yellow-300 animate-pulse" />
                    </div>
                    <div className="absolute -top-2 -left-6">
                      <HiStar className="h-6 w-6 text-yellow-200 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-2 -right-2">
                      <HiStar className="h-5 w-5 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-black bg-opacity-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400">
                <div className="text-3xl font-black text-yellow-400 mb-2">10</div>
                <div className="text-white font-bold">Award Categories</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400">
                <div className="text-3xl font-black text-blue-400 mb-2">13-19</div>
                <div className="text-white font-bold">Age Range</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-green-400">
                <div className="text-3xl font-black text-green-400 mb-2">FREE</div>
                <div className="text-white font-bold">Nominations</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl border border-red-400">
                <div className="text-3xl font-black text-red-400 mb-2">DEC 6</div>
                <div className="text-white font-bold">Awards Ceremony</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black text-white mb-6">
              READY TO <span className="text-yellow-400">NOMINATE</span>?
            </h2>
            <p className="text-xl text-blue-200 mb-12 font-semibold">
              Know an exceptional teen making a difference? Let's celebrate their impact!
            </p>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
                <h3 className="text-2xl font-black text-yellow-400 mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <HiMail className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-blue-200 font-semibold">info@teendom.africa</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <HiPhone className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-blue-200 font-semibold">0742862080</span>
                  </div>
                  <p className="text-sm text-gray-300 italic">Free nominations for all teens!</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20">
                <h3 className="text-2xl font-black text-yellow-400 mb-4">Key Dates</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <HiClock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-blue-200 font-semibold">Nominations Open: Sept 5</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <HiClock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-blue-200 font-semibold">Deadline: Sept 30</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <HiClock className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-blue-200 font-semibold">Awards Ceremony: Dec 6</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to="/awards/nominate"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50"
              >
                🏆 NOMINATE NOW
              </Link>
              <button className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-black py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-30">
                📋 VIEW CATEGORIES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories Preview */}
      <section className="py-20 bg-black bg-opacity-30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center text-white mb-12">
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
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-blue-200 text-sm font-medium mb-4">
                    {category.description}
                  </p>
                  <button className="text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AwardsPage;
// frontend/src/pages/NominatePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiClock, HiLightningBolt, HiStar, HiTrendingUp, HiFire } from "react-icons/hi";
import NominationForm from "../components/nominations/NominationForm";

function NominatePage() {
  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-red-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-blue-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-green-400 rounded-full opacity-35 animate-pulse"></div>
        
        {/* Dynamic Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 via-blue-500 to-green-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 via-yellow-400 to-red-500 animate-pulse"></div>
      </div>

      {/* Explosive Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Navigation & Deadline Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-4 md:space-y-0">
              <Link 
                to="/awards"
                className="group flex items-center text-white hover:text-yellow-300 transition-all duration-300 font-black text-lg transform hover:scale-110"
              >
                <HiArrowLeft className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                <span className="relative">
                  BACK TO AWARDS
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></div>
                </span>
              </Link>
              
              <div className="flex items-center bg-black bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
                <HiClock className="h-6 w-6 mr-3 text-yellow-300 animate-pulse" />
                <span className="text-white font-black text-lg">DEADLINE: SEPT 30, 2025</span>
              </div>
            </div>
            
            {/* Main Hero Content */}
            <div className="text-center text-white space-y-8">
              {/* Explosive Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">
                    SPARK
                  </span>{" "}
                  <span className="text-yellow-300 inline-block transform hover:scale-110 transition-transform duration-300 animate-pulse">
                    GREATNESS
                  </span>
                </h1>
                <div className="text-2xl md:text-4xl font-bold text-yellow-100">
                  Nominate A Teen <span className="text-yellow-300">CHANGEMAKER</span>
                </div>
              </div>
              
              {/* Dynamic Subtitle */}
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-bold text-red-100 leading-relaxed">
                  🔥 Know a teen aged <span className="text-yellow-300 font-black">13-19</span> who's{" "}
                  <span className="text-yellow-300 font-black">CRUSHING IT</span> in Kenya?{" "}
                  Let's celebrate their <span className="text-yellow-300 font-black">IMPACT!</span>
                </p>
              </div>

              {/* Power Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <HiLightningBolt className="h-8 w-8 text-yellow-300 animate-bounce" />
                    <div className="text-left">
                      <div className="text-2xl font-black">1000+</div>
                      <div className="text-sm font-bold opacity-80">TEEN HEROES</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <HiFire className="h-8 w-8 text-yellow-300 animate-pulse" />
                    <div className="text-left">
                      <div className="text-2xl font-black">8</div>
                      <div className="text-sm font-bold opacity-80">CATEGORIES</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white border-opacity-30 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <HiStar className="h-8 w-8 text-yellow-300 animate-spin" />
                    <div className="text-left">
                      <div className="text-2xl font-black">FREE</div>
                      <div className="text-sm font-bold opacity-80">NOMINATION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Energy Benefits Bar */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Benefit 1 */}
              <div className="group flex items-center justify-center space-x-4 bg-white bg-opacity-20 rounded-2xl p-4 border border-yellow-300 transform hover:scale-105 transition-all duration-300 hover:bg-opacity-30">
                <div className="bg-green-500 p-3 rounded-full group-hover:animate-bounce">
                  <HiLightningBolt className="h-8 w-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-black text-xl text-black">ZERO COST</h3>
                  <p className="text-black font-bold opacity-80">100% Free Process</p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="group flex items-center justify-center space-x-4 bg-white bg-opacity-20 rounded-2xl p-4 border border-yellow-300 transform hover:scale-105 transition-all duration-300 hover:bg-opacity-30">
                <div className="bg-blue-500 p-3 rounded-full group-hover:animate-spin">
                  <HiTrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-black text-xl text-black">SELF-POWER</h3>
                  <p className="text-black font-bold opacity-80">Teens Can Self-Nominate</p>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="group flex items-center justify-center space-x-4 bg-white bg-opacity-20 rounded-2xl p-4 border border-yellow-300 transform hover:scale-105 transition-all duration-300 hover:bg-opacity-30">
                <div className="bg-purple-500 p-3 rounded-full group-hover:animate-pulse">
                  <HiFire className="h-8 w-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-black text-xl text-black">MULTI-ENTRY</h3>
                  <p className="text-black font-bold opacity-80">Multiple Categories OK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section with Energy */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-ping"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-black text-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <HiStar className="h-8 w-8 animate-spin" />
              <span>NOMINATION POWER FORM</span>
              <HiStar className="h-8 w-8 animate-spin" />
            </div>
          </div>
          
          <NominationForm />
        </div>
      </section>

      {/* Turbocharged Help Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 via-blue-500 to-green-500 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 via-yellow-400 to-red-500 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 mb-6">
                NEED BACKUP?
              </h2>
              <p className="text-2xl text-gray-300 font-bold">We've got your back! 💪</p>
            </div>
            
            {/* Support Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Support */}
              <div className="group bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-3xl shadow-2xl border-2 border-red-400 transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/50">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full inline-block mb-6 group-hover:animate-bounce">
                    <HiLightningBolt className="h-12 w-12 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">INSTANT SUPPORT</h3>
                  <div className="space-y-3 text-white text-lg font-bold">
                    <p>📧 <span className="text-yellow-300">info@teendom.africa</span></p>
                    <p>💬 <span className="text-yellow-300">0742862080</span></p>
                    <p>⏰ <span className="text-yellow-300">Mon-Fri, 9AM-5PM</span></p>
                  </div>
                </div>
              </div>
              
              {/* Pro Tips */}
              <div className="group bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-3xl shadow-2xl border-2 border-blue-400 transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full inline-block mb-6 group-hover:animate-spin">
                    <HiFire className="h-12 w-12 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">PRO POWER TIPS</h3>
                  <div className="space-y-3 text-white text-left font-bold text-lg">
                    <p>⚡ Be SPECIFIC with examples</p>
                    <p>📊 Include MEASURABLE impact</p>
                    <p>📸 Upload CRYSTAL clear photos</p>
                    <p>✅ Double-check ALL details</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Super Tip Alert */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-3xl shadow-2xl border-2 border-yellow-300 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <HiStar className="h-10 w-10 text-black animate-spin" />
                  <h4 className="text-3xl font-black text-black">POWER HACK!</h4>
                  <HiStar className="h-10 w-10 text-black animate-spin" />
                </div>
                <p className="text-black text-xl font-bold leading-relaxed">
                  💡 <span className="font-black">SAVE AS YOU GO!</span> The form auto-saves your progress. 
                  Complete sections one at a time and come back anytime! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NominatePage;
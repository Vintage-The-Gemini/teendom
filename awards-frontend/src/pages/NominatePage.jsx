// File Path: frontend/src/pages/NominatePage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import NominationForm from "../components/nominations/NominationForm";
import { HiStar, HiLightningBolt } from "react-icons/hi";

function NominatePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/teendom awards primary logo.png" 
                alt="Teendom Awards Logo"
                className="h-20 md:h-24 w-auto mx-auto"
                onError={(e) => {
                  if (e.target.src.includes('primary')) {
                    e.target.src = '/teendom.png';
                  } else if (e.target.src.includes('teendom.png')) {
                    e.target.src = '/teendom awards logo.jpg';
                  }
                }}
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
              NOMINATE AN EXCEPTIONAL TEEN
            </h1>
            
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Know a teen making a difference? This is your chance to celebrate their impact and help them gain national recognition.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-black mb-1" style={{ color: '#003875' }}>10</div>
                <div className="text-sm font-bold" style={{ color: '#003875' }}>Categories</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-black mb-1" style={{ color: '#003875' }}>13-19</div>
                <div className="text-sm font-bold" style={{ color: '#003875' }}>Age Range</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-black mb-1" style={{ color: '#DAA520' }}>FREE</div>
                <div className="text-sm font-bold" style={{ color: '#003875' }}>Nomination</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-black mb-1" style={{ color: '#DAA520' }}>DEC 6</div>
                <div className="text-sm font-bold" style={{ color: '#003875' }}>Ceremony</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#003875' }}>
                Why Nominate?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DAA520' }}>
                    <HiStar className="h-4 w-4" style={{ color: '#003875' }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: '#003875' }}>National Recognition</h3>
                    <p className="text-sm" style={{ color: '#003875' }}>Get featured in national media and campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DAA520' }}>
                    <HiLightningBolt className="h-4 w-4" style={{ color: '#003875' }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: '#003875' }}>Development Support</h3>
                    <p className="text-sm" style={{ color: '#003875' }}>12-month mentorship and growth journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DAA520' }}>
                    <HiStar className="h-4 w-4" style={{ color: '#003875' }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: '#003875' }}>Alumni Network</h3>
                    <p className="text-sm" style={{ color: '#003875' }}>Connect with other outstanding teens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Form Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <NominationForm />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12" style={{ backgroundColor: '#002a5c' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help with Your Nomination?
            </h2>
            <p className="text-white mb-6">
              Our team is here to support you through the nomination process
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#DAA520' }}>Email</h3>
                <p>info@teendom.africa</p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#DAA520' }}>WhatsApp</h3>
                <p>0742862080</p>
              </div>
              <div>
                <h3 className="font-bold mb-2" style={{ color: '#DAA520' }}>Website</h3>
                <p>www.teendom.africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NominatePage;
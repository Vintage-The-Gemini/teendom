// File Path: frontend/src/pages/NominatePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiClock } from "react-icons/hi";
import NominationForm from "../components/nominations/NominationForm";

function NominatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      {/* Clean Header */}
      <section className="py-12 relative">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-blue-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
              <Link 
                to="/awards"
                className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300 font-semibold"
              >
                <HiArrowLeft className="h-5 w-5 mr-2" />
                Back to Awards
              </Link>
              
              <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <HiClock className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-white font-medium">Deadline: Sept 30, 2025</span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <img 
                  src="/teendom awards primary logo.png" 
                  alt="Teendom Awards Logo"
                  className="h-20 w-auto"
                />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                NOMINATE A <span className="text-yellow-400">TEEN HERO</span>
              </h1>
              <p className="text-xl text-blue-200 font-medium max-w-2xl mx-auto">
                Know an exceptional teenager making a difference? Help us celebrate their impact and achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Form */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <NominationForm />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <section className="py-12 bg-black bg-opacity-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-200 font-medium">
              Need help with your nomination? Contact us at info@teendom.africa
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NominatePage;
// File Path: frontend/src/components/awards/FounderSection.jsx
import React from "react";
import { HiHeart, HiStar } from "react-icons/hi";

function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-red-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              A MESSAGE FROM THE <span className="text-yellow-400">FOUNDER</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-10 blur-xl scale-105"></div>
                
                {/* Professional Image Container */}
                <div className="relative bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-3xl border border-yellow-400 border-opacity-30 shadow-2xl">
                  <img 
                    src="/awards page resources/Sandra Ochola.jpg" 
                    alt="Sandra Ochola - Founder, Teendom Africa"
                    className="w-80 h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Minimal accent */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <HiStar className="h-5 w-5 text-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-yellow-400 mb-2">Sandra Ochola</h3>
                <p className="text-xl text-blue-200 font-bold">Founder & Visionary, Teendom Africa</p>
              </div>

              <div className="space-y-6 text-white font-medium leading-relaxed">
                <p className="text-xl font-semibold text-blue-100">
                  "I founded the Teendom Awards because I believe in the extraordinary potential of teenagers to transform the social, economic, political, and cultural fabric of our nation."
                </p>
                
                <p className="text-lg">
                  "As a lawyer, author, and civic educator who has worked closely with teenagers and young adults for nearly a decade, I have witnessed their remarkable ability to lead movements, create innovative solutions, and inspire entire communities."
                </p>

                <p className="text-lg">
                  "The Teendom Awards was born to be more than just a celebration — it is Kenya's first national platform dedicated to recognizing and empowering teenage innovators, advocates, and creators."
                </p>

                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-xl shadow-lg mt-8">
                  <p className="text-black font-black text-xl">
                    "Together, we ensure that the next generation is seen, heard, and celebrated — not only for who they will become, but for who they are right now."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
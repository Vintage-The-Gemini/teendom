// File Path: frontend/src/components/awards/FounderSection.jsx
import React from "react";

function FounderSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#003875' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              A MESSAGE FROM THE <span style={{ color: '#FFD700' }}>FOUNDER</span>
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#FFD700' }}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Professional Image Container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <img 
                    src="/awards page resources/Sandra Ochola.jpg" 
                    alt="Sandra Ochola - Founder, Teendom Africa"
                    className="w-80 h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Name Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl shadow-xl" style={{ backgroundColor: '#FFD700' }}>
                    <h3 className="text-lg font-bold text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      SANDRA OCHOLA
                    </h3>
                    <p className="text-sm font-medium text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FFD700' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#003875' }}></div>
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-8" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  "I founded the Teendom Awards because I believe in the extraordinary potential of teenagers to transform the social, economic, political, and cultural fabric of our nation."
                </blockquote>

                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <p>
                    As a lawyer, author, and civic educator who has worked closely with teenagers and young adults for nearly a decade, I have seen first-hand their ability to lead movements, create innovative solutions, and inspire entire communities. Yet too often, their voices go unheard, their achievements unnoticed, and their dreams unsupported.
                  </p>
                  
                  <p>
                    <strong>I wanted to change that.</strong>
                  </p>
                  
                  <p>
                    The Teendom Awards was born to be more than just a celebration — it is Kenya's first national platform dedicated to applauding and equipping teenage innovators, advocates, and creators. Together, we can ensure that the next generation is seen, heard, and celebrated — not only for who they will become, but for who they are right now.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6" style={{ borderTop: '2px solid #FFD700' }}>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <h4 className="font-bold text-lg" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Sandra Ochola
                      </h4>
                      <p className="text-base font-medium" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Founder, Teendom Africa
                      </p>
                    </div>
                  </div>
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
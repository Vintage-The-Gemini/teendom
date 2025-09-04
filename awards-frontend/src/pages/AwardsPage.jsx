import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar } from "react-icons/hi";

function AwardsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section - Enhanced with energy */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden" style={{background: 'transparent'}}>
        {/* Subtle Background Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-graphic" style={{top: '15%', left: '10%', animationDelay: '0s'}}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20"></div>
          </div>
          <div className="floating-graphic" style={{top: '30%', right: '15%', animationDelay: '3s'}}>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 opacity-15 transform rotate-45"></div>
          </div>
          <div className="floating-graphic" style={{top: '70%', left: '8%', animationDelay: '6s'}}>
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-25"></div>
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="hero-text-container mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 hero-title" style={{color: '#DAA520', textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
                Ready to Celebrate Teen Greatness?
              </h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12" style={{color: '#E8EAF6'}}>
              👇 Nominate a teen. Tell their story. Join the movement.
            </p>
            
            {/* Call to Action Sections */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=400&h=400&fit=crop"
                        alt="Abstract colorful design" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">Are you a teen making a difference?</h3>
                    <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300">Nominate yourself. Your voice matters.</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:-rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=400&fit=crop"
                        alt="Abstract geometric pattern" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">Know an inspiring teen?</h3>
                    <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300">Nominate them. Let's give them their flowers now — not later.</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                        alt="Abstract flowing shapes" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">Want to support this vision?</h3>
                    <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300">Partner with us, amplify the stories, or sponsor a category.</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold transition-all duration-300 hover:scale-105 text-lg underline hover:no-underline"
                  style={{color: '#E8EAF6'}}
                >
                  <span>Partner With Us</span>
                </Link>
                
                <Link
                  to="/get-involved"
                  className="inline-flex items-center space-x-2 px-6 py-3 font-bold transition-all duration-300 hover:scale-105 text-lg underline hover:no-underline"
                  style={{color: '#E8EAF6'}}
                >
                  <span>Volunteer or Join the Movement</span>
                </Link>
              </div>
            </div>
            
            
            {/* Big Golden CTA Button */}
            <div className="text-center">
              <Link
                to="/nominate"
                className="inline-flex items-center px-16 py-6 text-2xl font-black rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl relative overflow-hidden big-golden-button"
                style={{
                  background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                  color: '#0b1426',
                  boxShadow: '0 20px 60px rgba(218, 165, 32, 0.4)',
                  letterSpacing: '2px',
                  border: '3px solid rgba(218, 165, 32, 0.6)',
                  animation: 'pulse-big 2s infinite, glow 3s ease-in-out infinite alternate'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(218, 165, 32, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(218, 165, 32, 0.4)';
                }}
              >
                <HiStar className="h-8 w-8 mr-4 animate-spin" style={{animationDuration: '4s'}} />
                <span>NOMINATE A TEEN NOW</span>
                <div className="absolute inset-0 rounded-full opacity-30" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
                  animation: 'shimmer-big 3s infinite'
                }}></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Motion Graphics CSS */}
      <style jsx>{`
        /* Floating background graphics */
        .floating-graphic {
          position: absolute;
          animation: floatGraphic 12s ease-in-out infinite;
          opacity: 0.3;
        }
        
        @keyframes floatGraphic {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.4;
          }
        }
        
        /* Title glow effect */
        @keyframes titleGlow {
          0% {
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(218, 165, 32, 0.3);
          }
          100% {
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 0 40px rgba(218, 165, 32, 0.8), 0 0 60px rgba(218, 165, 32, 0.4);
          }
        }
        
        /* Energy burst behind title */
        .energy-burst {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(218, 165, 32, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: energyPulse 4s ease-in-out infinite;
          z-index: -1;
        }
        
        @keyframes energyPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.1;
          }
        }
        
        /* Card bounce animation */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-10px) scale(1.1);
          }
          60% {
            transform: translateY(-5px) scale(1.05);
          }
        }
        
        /* Card hover glow */
        .card-hover-glow:hover {
          box-shadow: 0 20px 60px rgba(218, 165, 32, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        /* Card inner glow effect */
        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(218, 165, 32, 0.1), transparent);
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .group:hover .card-glow {
          opacity: 1;
          animation: cardGlowRotate 2s linear infinite;
        }
        
        @keyframes cardGlowRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        /* Icon hover effects */
        .card-icon {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .group:hover .card-icon {
          transform: scale(1.2) rotate(360deg);
          filter: drop-shadow(0 0 20px rgba(218, 165, 32, 0.8));
        }
        
        /* Define golden color */
        .text-golden { color: #DAA520; }
        .border-golden { border-color: rgba(218, 165, 32, 0.5); }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse-big {
          0%, 100% {
            box-shadow: 0 20px 60px rgba(218, 165, 32, 0.4);
          }
          50% {
            box-shadow: 0 25px 80px rgba(218, 165, 32, 0.7);
          }
        }
        
        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 20px rgba(218, 165, 32, 0.5));
          }
          100% {
            filter: drop-shadow(0 0 40px rgba(218, 165, 32, 0.9));
          }
        }
        
        @keyframes shimmer-big {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .golden-glow {
          filter: drop-shadow(0 4px 15px rgba(218, 165, 32, 0.6));
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow-pulse {
          0% {
            filter: drop-shadow(0 4px 15px rgba(218, 165, 32, 0.4));
          }
          100% {
            filter: drop-shadow(0 4px 25px rgba(218, 165, 32, 0.8));
          }
        }
        
        .floating-text {
          transition: all 0.3s ease;
        }
        
        .floating-text:hover {
          transform: translateY(-10px) scale(1.05);
        }
        
        .big-golden-button {
          position: relative;
        }
        
        .big-golden-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #DAA520, #FFD700, #DAA520);
          border-radius: inherit;
          z-index: -1;
          animation: rotate-border 3s linear infinite;
        }
        
        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default AwardsPage;
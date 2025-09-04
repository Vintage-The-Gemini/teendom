import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar } from "react-icons/hi";

function AwardsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section - ONLY content as specified */}
      <section className="pt-24 pb-16 px-6" style={{background: 'transparent'}}>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
              Ready to Celebrate Teen Greatness?
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12" style={{color: '#E8EAF6'}}>
              👇 Nominate a teen. Tell their story. Join the movement.
            </p>
            
            {/* Call to Action Sections */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="text-center">
                    <div className="text-4xl mb-6">🔸</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Are you a teen making a difference?</h3>
                    <p className="text-base leading-relaxed text-white/80">Nominate yourself. Your voice matters.</p>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="text-center">
                    <div className="text-4xl mb-6">🔸</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Know an inspiring teen?</h3>
                    <p className="text-base leading-relaxed text-white/80">Nominate them. Let's give them their flowers now — not later.</p>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="text-center">
                    <div className="text-4xl mb-6">💛</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Want to support this vision?</h3>
                    <p className="text-base leading-relaxed text-white/80">Partner with us, amplify the stories, or sponsor a category.</p>
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

      {/* Motion Graphics CSS */}
      <style jsx>{`
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
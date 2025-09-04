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
        {/* Animated Background Elements with Stock Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-graphic" style={{top: '10%', left: '10%', animationDelay: '0s'}}>
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=80&h=80&fit=crop" alt="Success" className="w-12 h-12 rounded-full opacity-60" />
          </div>
          <div className="floating-graphic" style={{top: '20%', right: '15%', animationDelay: '1s'}}>
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=80&h=80&fit=crop" alt="Achievement" className="w-16 h-16 rounded-full opacity-50" />
          </div>
          <div className="floating-graphic" style={{top: '60%', left: '5%', animationDelay: '2s'}}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop" alt="Innovation" className="w-14 h-14 rounded-full opacity-70" />
          </div>
          <div className="floating-graphic" style={{top: '70%', right: '8%', animationDelay: '0.5s'}}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=80&h=80&fit=crop&crop=face" alt="Leadership" className="w-10 h-10 rounded-full opacity-60" />
          </div>
          <div className="floating-graphic" style={{top: '40%', right: '25%', animationDelay: '1.5s'}}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Excellence" className="w-12 h-12 rounded-full opacity-50" />
          </div>
          <div className="floating-graphic" style={{top: '80%', left: '20%', animationDelay: '2.5s'}}>
            <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=80&h=80&fit=crop&crop=face" alt="Inspiration" className="w-14 h-14 rounded-full opacity-70" />
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="hero-text-container mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 hero-title" style={{color: '#DAA520', textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic', animation: 'titleGlow 3s ease-in-out infinite alternate'}}>
                Ready to Celebrate Teen Greatness?
              </h1>
              {/* Energy burst animation */}
              <div className="energy-burst"></div>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12" style={{color: '#E8EAF6'}}>
              👇 Nominate a teen. Tell their story. Join the movement.
            </p>
            
            {/* Call to Action Sections */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 card-icon-img overflow-hidden rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=face"
                        alt="Confident teen leader" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{filter: 'brightness(1.2) contrast(1.1)'}}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">Are you a teen making a difference?</h3>
                    <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300">Nominate yourself. Your voice matters.</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:-rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 card-icon-img overflow-hidden rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face"
                        alt="Inspiring young person" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{filter: 'brightness(1.2) contrast(1.1)'}}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">Know an inspiring teen?</h3>
                    <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors duration-300">Nominate them. Let's give them their flowers now — not later.</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-golden/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group card-hover-glow overflow-hidden">
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto mb-6 card-icon-img overflow-hidden rounded-full border-4 border-golden/30 group-hover:border-golden transition-all duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop&crop=faces"
                        alt="Team collaboration" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{filter: 'brightness(1.2) contrast(1.1)'}}
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
          animation: floatGraphic 8s ease-in-out infinite;
          opacity: 0.7;
        }
        
        @keyframes floatGraphic {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-40px) scale(1.1) rotate(5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px) scale(0.9) rotate(-3deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-25px) scale(1.05) rotate(8deg);
            opacity: 0.7;
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
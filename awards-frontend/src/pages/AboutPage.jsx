import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar } from "react-icons/hi";

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
            About Teendom Africa
          </h1>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Montserrat', sans-serif"}}>
                A Message From The Founder
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
              {/* Founder Image - Much Bigger */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative founder-image-container" style={{animation: 'float 4s ease-in-out infinite'}}>
                  <img 
                    src="/Sandra Ochola.jpg" 
                    alt="Sandra Ochola - Founder, Teendom Africa"
                    className="w-full max-w-md lg:max-w-lg h-[40rem] lg:h-[45rem] object-cover object-center shadow-2xl rounded-2xl"
                    style={{filter: 'drop-shadow(0 20px 40px rgba(218, 165, 32, 0.3))'}}
                  />
                  
                  <div className="absolute -bottom-6 left-4 right-4 px-8 py-4 rounded-xl shadow-2xl" style={{ background: 'linear-gradient(145deg, #DAA520, #B8860B)', border: '2px solid rgba(255, 215, 0, 0.5)' }}>
                    <h3 className="text-xl font-black text-center" style={{ color: '#0b1426', fontFamily: "'Montserrat', sans-serif" }}>
                      SANDRA OCHOLA
                    </h3>
                    <p className="text-sm font-bold text-center mt-1" style={{ color: '#0b1426', fontFamily: "'Montserrat', sans-serif" }}>
                      Founder & CEO, Teendom Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Floating Founder Message */}
              <div className="lg:w-3/5 space-y-8 floating-message" style={{animation: 'fadeInUp 1s ease-out'}}>
                
                <blockquote className="text-2xl lg:text-3xl leading-relaxed font-light" style={{ 
                  color: '#DAA520', 
                  fontFamily: "'Prata', serif",
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  fontStyle: 'italic',
                  lineHeight: '1.4'
                }}>
                  "I founded the Teendom Awards because I believe in the extraordinary potential of teenagers to transform the social, economic, political, and cultural fabric of our nation."
                </blockquote>

                <div className="space-y-6 text-lg lg:text-xl leading-relaxed" style={{ 
                  color: '#E8EAF6', 
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '300',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                }}>
                  <p>
                    As a lawyer, author, and civic educator who has worked closely with teenagers and young adults for nearly a decade, I have seen first-hand their ability to lead movements, create innovative solutions, and inspire entire communities. Yet too often, their voices go unheard, their achievements unnoticed, and their dreams unsupported.
                  </p>
                  
                  <p style={{color: '#DAA520', fontWeight: '500', fontSize: '1.2em'}}>
                    I wanted to change that.
                  </p>
                  
                  <p>
                    The Teendom Awards was born to be more than just a celebration — it is Kenya's first national platform dedicated to applauding and equipping teenage innovators, advocates, and creators. It is about shining a light on those already shaping our future, and surrounding them with the mentorship, networks, and opportunities they need to go even further.
                  </p>
                  
                  <p>
                    This year, we open the awards to every Kenyan who knows a teenager making a difference - so their story can inspire the nation. If you are a parent, educator, or a teen yourself, you are part of this story. If you are a sponsor, partner, or mentor, you have the chance to invest in Kenya's next generation of trailblazers.
                  </p>
                  
                  <p style={{color: '#DAA520', fontWeight: '400'}}>
                    Together, we can ensure that the next generation is seen, heard, and celebrated – not only for who they will become, but for who they are right now.
                  </p>
                </div>

                {/* Elegant Signature */}
                <div className="mt-12 pt-8" style={{ borderTop: '2px solid #DAA520', borderImage: 'linear-gradient(90deg, transparent, #DAA520, transparent) 1' }}>
                  <div className="text-right">
                    <h4 className="text-2xl font-bold" style={{ color: '#DAA520', fontFamily: "'Prata', serif" }}>
                      Sandra Ochola
                    </h4>
                    <p className="text-lg font-light mt-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                      Founder, Teendom Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission - Redesigned */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              <div className="text-center floating-card" style={{animation: 'float 3s ease-in-out infinite'}}>
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #DAA520, #B8860B)', boxShadow: '0 10px 30px rgba(218, 165, 32, 0.4)' }}>
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6" style={{ color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Prata', serif" }}>
                    Vision
                  </h3>
                  <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                    A thriving network of empowered teenagers recognized for their talent, leadership, and positive influence.
                  </p>
                </div>
              </div>
              
              <div className="text-center floating-card" style={{animation: 'float 3s ease-in-out infinite 1.5s'}}>
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #DAA520, #B8860B)', boxShadow: '0 10px 30px rgba(218, 165, 32, 0.4)' }}>
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6" style={{ color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Prata', serif" }}>
                    Mission
                  </h3>
                  <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}>
                    To identify, celebrate, and support outstanding teens who exemplify excellence and social responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits to Finalists Section - Free Falling Text */}
            <div className="mt-24 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Prata', serif" }}>
                Benefits to Finalists
              </h2>
              <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>
                The Teendom Awards are more than a ceremony — they are a launchpad. We're building a national stage where Kenya's most promising teens:
              </p>
              
              <div className="grid md:grid-cols-3 gap-16 mb-20 max-w-6xl mx-auto">
                <div className="text-center floating-benefit" style={{animation: 'float 3s ease-in-out infinite'}}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 golden-glow" 
                       style={{background: 'linear-gradient(145deg, #DAA520, #B8860B)', boxShadow: '0 15px 35px rgba(218, 165, 32, 0.4)'}}>
                    <span className="text-3xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif", textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Get Seen</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>through national recognition and media exposure</p>
                </div>
                
                <div className="text-center floating-benefit" style={{animation: 'float 3s ease-in-out infinite 1s'}}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 golden-glow" 
                       style={{background: 'linear-gradient(145deg, #DAA520, #B8860B)', boxShadow: '0 15px 35px rgba(218, 165, 32, 0.4)'}}>
                    <span className="text-3xl">📢</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif", textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Get Heard</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>by sharing their stories and insights with leaders and peers</p>
                </div>
                
                <div className="text-center floating-benefit" style={{animation: 'float 3s ease-in-out infinite 2s'}}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 golden-glow" 
                       style={{background: 'linear-gradient(145deg, #DAA520, #B8860B)', boxShadow: '0 15px 35px rgba(218, 165, 32, 0.4)'}}>
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif", textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>Get Supported</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>through a 12-month journey of mentorship, skills enhancing opportunities and personal development</p>
                </div>
              </div>
              
              <p className="text-xl mb-16 max-w-4xl mx-auto leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', fontStyle: 'italic' }}>
                Together with partners, schools and families, we are creating an ecosystem where teen excellence is normal, not the exception.
              </p>
              
              {/* Finalists Receive */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-8" style={{ color: '#DAA520', fontFamily: "'Prata', serif", textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>All FINALISTS Receive</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="space-y-4 floating-list-item" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl" style={{ color: '#DAA520' }}>⭐</span>
                      <div>
                        <strong className="text-lg" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif" }}>National Recognition</strong>
                        <p className="mt-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Featured in Teendom Awards media campaigns, press and our Teendom Africa Hall of Fame</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 floating-list-item" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl" style={{ color: '#DAA520' }}>🏆</span>
                      <div>
                        <strong className="text-lg" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif" }}>Custom Certificate</strong>
                        <p className="mt-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Beautifully designed to mark your impact</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 floating-list-item" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl" style={{ color: '#DAA520' }}>🌟</span>
                      <div>
                        <strong className="text-lg" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif" }}>Alumni Network Access</strong>
                        <p className="mt-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Eligibility for ambassadorial opportunities and access to future teen summits and programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Winners Journey */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-8" style={{ color: '#DAA520', fontFamily: "'Prata', serif", textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>The 12-Month Teendom Africa Changemakers Journey</h3>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>After the ceremony, the work continues for the <span style={{color: '#DAA520', fontWeight: '500'}}>CATEGORY WINNERS</span>.</p>
                  <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Each of the WINNERS are enrolled in a free one-year, high-touch personal and leadership development experience.</p>
                  <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>This will include; featured story profile, mentor pairing, portfolio building, support for individual projects and access to industry leaders and experts in their fields of interest.</p>
                  
                  <div className="mt-12 p-8 rounded-2xl" style={{background: 'rgba(218, 165, 32, 0.1)', border: '2px solid rgba(218, 165, 32, 0.3)'}}>
                    <h4 className="text-2xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: "'Prata', serif" }}>Your Story Matters.</h4>
                    <p className="text-xl leading-relaxed" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Whether you win or not, being nominated means your impact is seen — and your journey is just beginning.</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <Link
                  to="/nominate"
                  className="inline-flex items-center space-x-4 px-12 py-5 text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
                  style={{
                    background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                    color: '#0b1426',
                    boxShadow: '0 15px 40px rgba(218, 165, 32, 0.4)',
                    letterSpacing: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(218, 165, 32, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(218, 165, 32, 0.4)';
                  }}
                >
                  <HiStar className="h-6 w-6 animate-spin" style={{animationDuration: '3s'}} />
                  <span>NOMINATE A TEEN NOW</span>
                </Link>
              </div>
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
            transform: translateY(-15px);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating-card {
          transition: all 0.3s ease;
        }
        
        .floating-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
        
        .founder-image-container {
          transition: all 0.3s ease;
        }
        
        .founder-image-container:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .floating-message p {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: var(--delay, 0s);
        }
        
        .floating-message p:nth-child(1) { --delay: 0.2s; }
        .floating-message p:nth-child(2) { --delay: 0.4s; }
        .floating-message p:nth-child(3) { --delay: 0.6s; }
        .floating-message p:nth-child(4) { --delay: 0.8s; }
        .floating-message p:nth-child(5) { --delay: 1.0s; }
        
        .floating-benefit {
          transition: all 0.3s ease;
        }
        
        .floating-benefit:hover {
          transform: translateY(-10px) scale(1.05);
        }
        
        .golden-glow {
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow-pulse {
          0% {
            filter: drop-shadow(0 4px 15px rgba(218, 165, 32, 0.4));
            box-shadow: 0 15px 35px rgba(218, 165, 32, 0.4);
          }
          100% {
            filter: drop-shadow(0 4px 25px rgba(218, 165, 32, 0.8));
            box-shadow: 0 15px 45px rgba(218, 165, 32, 0.6);
          }
        }
        
        .floating-list-item {
          transition: all 0.3s ease;
        }
        
        .floating-list-item:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
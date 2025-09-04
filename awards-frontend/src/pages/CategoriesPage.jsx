import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiChevronDown, HiChevronUp, HiAcademicCap, HiUserGroup, HiLightBulb, HiHeart, HiCode, HiGlobe, HiFlag, HiColorSwatch, HiBadgeCheck, HiSparkles } from "react-icons/hi";

function CategoriesPage() {

  const categories = [
    {
      id: 1,
      title: "Academic Excellence Award",
      description: "Spotlights brilliance in the classroom and beyond.",
      fullDescription: "This award honors teens who achieve outstanding academic results, whether in national exams or international competitions. It celebrates effort, curiosity, and those using their academic strengths to inspire others.",
      criteria: [
        "Academic records, results, or awards",
        "Stories of academic growth or mentorship",
        "Participation in academic contests, clubs, or peer tutoring",
        "Endorsement from a teacher or principal (optional)"
      ],
      icon: <HiAcademicCap className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Leadership Excellence Award",
      description: "For those who lead with courage, purpose, and vision.",
      fullDescription: "This award recognizes teens who step up — as school prefects, club leaders, or community organizers — and lead others toward meaningful change.",
      criteria: [
        "Description of leadership role(s)",
        "Specific actions taken and outcomes achieved",
        "Testimonials from those impacted or mentored",
        "Traits that make them a visionary or role model"
      ],
      icon: <HiUserGroup className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Teen Innovator Award",
      description: "For teen trailblazers solving tomorrow's challenges today.",
      fullDescription: "This award celebrates creative problem-solvers developing new ideas, solutions, or products to tackle real-life issues.",
      criteria: [
        "Description of the innovation or invention",
        "The problem it solves and the impact made",
        "Photos, videos, or links to prototypes",
        "Feedback from users or mentors (optional)"
      ],
      icon: <HiLightBulb className="h-8 w-8" />
    },
    {
      id: 4,
      title: "Teenpreneur Award",
      description: "For bold builders turning ideas into impact.",
      fullDescription: "This award honors teen entrepreneurs who've launched businesses, side hustles, or creative ventures — demonstrating originality, grit, and social impact.",
      criteria: [
        "Description of the business or venture",
        "Products/services offered and customers reached",
        "Photos, receipts, or product samples",
        "Impact made, challenges faced, and lessons learned"
      ],
      icon: <HiBadgeCheck className="h-8 w-8" />
    },
    {
      id: 5,
      title: "Creative Arts Award",
      description: "For dreamers, storytellers, and visionaries shaping culture.",
      fullDescription: "This award celebrates extraordinary talent in visual, performing, literary, or digital media arts.",
      criteria: [
        "Portfolio samples (images, links, performances)",
        "Artistic statement or inspiration",
        "Achievements or features (if any)",
        "Impact on audiences or communities"
      ],
      subCategories: [
        "Visual Arts (painting, drawing, sculpture, fashion, photography)",
        "Performing Arts (music, dance, drama, theatre)",
        "Literary Arts (writing, poetry, storytelling)",
        "Media Arts (film, animation, digital art)"
      ],
      icon: <HiColorSwatch className="h-8 w-8" />
    },
    {
      id: 6,
      title: "Sports & Wellness Award",
      description: "For champions of strength, balance, and discipline.",
      fullDescription: "This award honors teens who excel in sports or promote physical and mental well-being through training, competition, or health advocacy.",
      criteria: [
        "Sports played or wellness initiatives led",
        "Achievements, rankings, or recognition",
        "Testimonials from coaches or teammates",
        "Evidence of consistency, resilience, and teamwork"
      ],
      icon: <HiBadgeCheck className="h-8 w-8" />
    },
    {
      id: 7,
      title: "Advocate for Change Award",
      description: "For teens raising their voice for a better world.",
      fullDescription: "This award recognizes teens championing issues like mental health, gender equality, disability rights, peacebuilding, or justice.",
      criteria: [
        "The cause they are advocating for",
        "Activities or campaigns they've led or joined",
        "Measurable change or awareness created",
        "Social media links, events, or articles (optional)"
      ],
      icon: <HiFlag className="h-8 w-8" />
    },
    {
      id: 8,
      title: "Environmental Champion Award",
      description: "For eco-heroes safeguarding our planet's future.",
      fullDescription: "This award honors teens working on climate action, clean-ups, reforestation, conservation, or sustainable living.",
      criteria: [
        "Description of environmental actions taken",
        "Photos or records of cleanups, tree planting, etc",
        "Outreach, education, or policy advocacy efforts",
        "Collaborations with schools or organizations (optional)"
      ],
      icon: <HiGlobe className="h-8 w-8" />
    },
    {
      id: 9,
      title: "Digital Impact Award",
      description: "For digital voices making real-world impact.",
      fullDescription: "From Instagram reels to YouTube channels, this award celebrates teens using digital platforms to inspire, educate, or mobilize online audiences for good.",
      criteria: [
        "Link(s) to digital content",
        "Platform metrics (views, followers, engagement)",
        "Purpose or message behind the content",
        "Examples of how they've helped or influenced others"
      ],
      icon: <HiCode className="h-8 w-8" />
    },
    {
      id: 10,
      title: "Teen of the Year Award",
      description: "The ultimate changemaker. A true Teendom icon.",
      fullDescription: "The highest honor of the Teendom Awards. For a teen who exemplifies excellence across multiple fields, uplifts others, and stands out as a national inspiration.",
      criteria: [
        "Evidence of impact in at least three different areas (e.g., academics + leadership + change champion)",
        "Story of growth, adversity, or influence",
        "Testimonials from teachers, mentors, or beneficiaries",
        "Personal reflection or vision statement (optional)"
      ],
      icon: <HiStar className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
              Award Categories
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
              We are on a mission to recognize and celebrate Kenya's extraordinary teenagers — the thinkers, leaders, creators, and changemakers, between the ages of 13 to 19 who are leading change in their communities.
            </p>
          </div>
          
          {/* Eligibility & Submission - Side by Side */}
          <div className="max-w-7xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
            {/* General Eligibility */}
            <div className="p-6 rounded-3xl floating-text" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(218, 165, 32, 0.1)',
                   animation: 'float 3s ease-in-out infinite'
                 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
                GENERAL ELIGIBILITY
              </h2>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Nominees must be between 13 to 19 years old as of December 1, 2025.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Must be a Kenyan citizen or resident
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Must show exceptional achievement, impact, or leadership in the selected category.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Nominations can be self-submitted or submitted by another person (parent, teacher, peer, mentor, etc.)
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Required Submission Materials */}
            <div className="p-6 rounded-3xl floating-text" 
                 style={{
                   background: 'rgba(255, 255, 255, 0.05)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(218, 165, 32, 0.1)',
                   animation: 'float 3s ease-in-out infinite 1s'
                 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
                REQUIRED SUBMISSION MATERIALS
              </h2>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Full name, age, county, and contact details of the nominee
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    A recent, high-quality photo of the nominee
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Short bio (max 250 words)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Detailed nomination statement (300–500 words) describing why they deserve the award
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Supporting documents or links (e.g. certificates, media features, photos, social media, videos, etc.)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg mt-1" style={{color: '#DAA520'}}>•</span>
                  <span className="text-base leading-relaxed" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                    Referee contacts (e.g. teacher, coach, community leader)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* How to Nominate - Shortened */}
          <div className="text-center mb-16 floating-text" style={{animation: 'float 3s ease-in-out infinite 2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
              HOW TO NOMINATE
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
              Click "Nominate Now", fill the form, upload documents, and submit. Deadline: 30th September, 2025
            </p>
            <Link
              to="/nominate"
              className="inline-flex items-center px-12 py-5 text-xl font-black rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl relative overflow-hidden big-golden-button"
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
              <HiStar className="h-6 w-6 mr-3 animate-spin" style={{animationDuration: '4s'}} />
              <span>NOMINATE NOW</span>
              <div className="absolute inset-0 rounded-full opacity-30" style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%)',
                animation: 'shimmer-big 3s infinite'
              }}></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200" 
                   style={{
                     background: 'rgba(11, 20, 38, 0.95)',
                     backdropFilter: 'blur(10px)'
                   }}>
                <div 
                  className="p-4 transition-all duration-300"
                  style={{backgroundColor: '#0b1426'}}
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex p-3 mb-3 rounded-lg" 
                         style={{backgroundColor: '#DAA520', color: '#0b1426'}}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-black mb-2" style={{color: '#DAA520', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
                      {category.title}
                    </h3>
                    <p className="text-sm opacity-90" style={{color: '#E8EAF6'}}>
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                    {category.fullDescription && (
                      <p className="leading-relaxed mb-4 text-sm" style={{color: '#E8EAF6', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>
                        {category.fullDescription}
                      </p>
                    )}
                    
                    {category.subCategories && (
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-2" style={{color: '#DAA520'}}>
                          Sub-Categories:
                        </h4>
                        <ul className="space-y-1 mb-3">
                          {category.subCategories.map((subCat, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                                   style={{backgroundColor: '#DAA520'}}></div>
                              <span className="leading-relaxed text-xs" style={{color: '#E8EAF6', opacity: '0.9'}}>{subCat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <h4 className="text-sm font-bold mb-2" style={{color: '#DAA520'}}>
                      What We're Looking For:
                    </h4>
                    <ul className="space-y-1 mb-4">
                      {category.criteria.map((criterion, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                               style={{backgroundColor: '#DAA520'}}></div>
                          <span className="leading-relaxed text-xs" style={{color: '#E8EAF6', opacity: '0.9'}}>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link
                        to="/nominate"
                        className="inline-flex items-center space-x-2 px-4 py-2 font-bold transition-all duration-300 hover:shadow-lg text-xs rounded-lg"
                        style={{
                          background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                          color: '#0b1426',
                          border: '1px solid rgba(218, 165, 32, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(218, 165, 32, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <HiStar className="h-4 w-4" />
                        <span>Nominate</span>
                      </Link>
                    </div>
                  </div>
              </div>
            ))}
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
        
        .floating-text {
          transition: all 0.3s ease;
        }
        
        .floating-text:hover {
          transform: translateY(-10px) scale(1.02);
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

export default CategoriesPage;
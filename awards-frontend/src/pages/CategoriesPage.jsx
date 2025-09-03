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
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              AWARD <span style={{color: '#DAA520'}}>CATEGORIES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
              Ten categories celebrating different forms of excellence across Africa
            </p>
            <div className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl text-lg font-bold shadow-xl" 
                 style={{backgroundColor: '#DAA520', color: '#003875'}}>
              <HiStar className="h-6 w-6" />
              <span>Ages 13-19 • Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div 
                  className="p-4 transition-all duration-300"
                  style={{backgroundColor: '#003875'}}
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex p-3 mb-3" 
                         style={{backgroundColor: '#DAA520', color: '#003875'}}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-black mb-2 text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-white opacity-90">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                    {category.fullDescription && (
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        {category.fullDescription}
                      </p>
                    )}
                    
                    {category.subCategories && (
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-2" style={{color: '#003875'}}>
                          Sub-Categories:
                        </h4>
                        <ul className="space-y-1 mb-3">
                          {category.subCategories.map((subCat, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                                   style={{backgroundColor: '#DAA520'}}></div>
                              <span className="text-gray-700 leading-relaxed text-xs">{subCat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <h4 className="text-sm font-bold mb-2" style={{color: '#003875'}}>
                      What We're Looking For:
                    </h4>
                    <ul className="space-y-1 mb-4">
                      {category.criteria.map((criterion, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                               style={{backgroundColor: '#DAA520'}}></div>
                          <span className="text-gray-700 leading-relaxed text-xs">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link
                        to="/nominate"
                        className="inline-flex items-center space-x-2 px-4 py-2 font-bold transition-all duration-300 hover:shadow-lg text-xs"
                        style={{backgroundColor: '#DAA520', color: '#003875'}}
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
    </div>
  );
}

export default CategoriesPage;
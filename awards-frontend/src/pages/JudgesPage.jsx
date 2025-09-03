import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiGlobeAlt, HiAcademicCap, HiBriefcase } from "react-icons/hi";

function JudgesPage() {
  const judges = [
    {
      id: 1,
      name: "Agwenyi Emmanuel",
      title: "Education & Youth Development Expert",
      country: "Kenya",
      image: "/judges/judge Agwenyi Emmanuel.jpg",
      bio: "Experienced education specialist focused on youth development and academic excellence across Kenya.",
      expertise: ["Education", "Youth Development", "Academic Excellence"],
      icon: <HiAcademicCap className="h-6 w-6" />
    },
    {
      id: 2,
      name: "Anne Njoroge",
      title: "Community Development Specialist",
      country: "Kenya",
      image: "/judges/judge Anne Njoroge.jpg",
      bio: "Community development expert with extensive experience in youth empowerment and social impact programs.",
      expertise: ["Community Development", "Social Impact", "Youth Empowerment"],
      icon: <HiGlobeAlt className="h-6 w-6" />
    },
    {
      id: 3,
      name: "Antony Ndeda",
      title: "Innovation & Technology Leader",
      country: "Kenya",
      image: "/judges/judge Antony Ndeda.jpg",
      bio: "Technology leader and innovation expert passionate about digital solutions for social good.",
      expertise: ["Technology", "Innovation", "Digital Solutions"],
      icon: <HiBriefcase className="h-6 w-6" />
    },
    {
      id: 4,
      name: "Arnold Osano",
      title: "Entrepreneurship & Business Development",
      country: "Kenya",
      image: "/judges/judge Arnold Osano.png",
      bio: "Successful entrepreneur and business development expert mentoring young African entrepreneurs.",
      expertise: ["Entrepreneurship", "Business Development", "Mentorship"],
      icon: <HiBriefcase className="h-6 w-6" />
    },
    {
      id: 5,
      name: "Dennis Mutuma",
      title: "Leadership & Governance Expert",
      country: "Kenya",
      image: "/judges/judge DENNIS MUTUMA.jpg",
      bio: "Leadership development specialist with focus on governance and civic engagement among youth.",
      expertise: ["Leadership", "Governance", "Civic Engagement"],
      icon: <HiStar className="h-6 w-6" />
    },
    {
      id: 6,
      name: "Edwin Ochieng",
      title: "Media & Communications Specialist",
      country: "Kenya",
      image: "/judges/judge Edwin Ochieng.jpg",
      bio: "Media professional and communications expert promoting youth voices and stories across Africa.",
      expertise: ["Media", "Communications", "Youth Advocacy"],
      icon: <HiStar className="h-6 w-6" />
    },
    {
      id: 7,
      name: "Emily Otieno",
      title: "Social Impact & Development",
      country: "Kenya",
      image: "/judges/judge Emily Otieno.jpg",
      bio: "Social development expert working on impactful programs for youth across East Africa.",
      expertise: ["Social Impact", "Development", "Youth Programs"],
      icon: <HiGlobeAlt className="h-6 w-6" />
    },
    {
      id: 8,
      name: "Loretta Akatch",
      title: "Arts & Creative Expression",
      country: "Kenya",
      image: "/judges/judge Loretta Akatch.jpg",
      bio: "Arts advocate and creative expression specialist promoting cultural heritage and youth creativity.",
      expertise: ["Arts", "Creative Expression", "Cultural Heritage"],
      icon: <HiStar className="h-6 w-6" />
    },
    {
      id: 9,
      name: "Stephen Okanda",
      title: "Sports & Youth Development",
      country: "Kenya",
      image: "/judges/judge Okanda Stephen Eugine.jpg",
      bio: "Sports development expert using athletics as a tool for youth empowerment and social change.",
      expertise: ["Sports", "Youth Development", "Social Change"],
      icon: <HiStar className="h-6 w-6" />
    },
    {
      id: 10,
      name: "Peggy Olwalo",
      title: "Environmental & Sustainability Expert",
      country: "Kenya",
      image: "/judges/judge Peggy Olwalo.jpeg",
      bio: "Environmental specialist promoting sustainability and climate action among African youth.",
      expertise: ["Environment", "Sustainability", "Climate Action"],
      icon: <HiGlobeAlt className="h-6 w-6" />
    },
    {
      id: 11,
      name: "Sandra Nekh",
      title: "Founder & Visionary Leader",
      country: "Kenya",
      image: "/judges/judge Sandra Nekh.jpg",
      bio: "Visionary leader and founder championing youth excellence and recognition across Africa.",
      expertise: ["Leadership", "Vision", "Youth Excellence"],
      icon: <HiStar className="h-6 w-6" />
    }
  ];

  const judgingCriteria = [
    {
      title: "Impact & Results",
      description: "Measurable positive change in community, school, or society",
      weight: "30%"
    },
    {
      title: "Innovation & Creativity",
      description: "Original thinking and creative solutions to challenges",
      weight: "25%"
    },
    {
      title: "Leadership Potential",
      description: "Ability to inspire and lead others toward positive change",
      weight: "20%"
    },
    {
      title: "Sustainability",
      description: "Long-term vision and potential for continued impact",
      weight: "15%"
    },
    {
      title: "Inspiring Others",
      description: "Ability to motivate and encourage other young people",
      weight: "10%"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            OUR DISTINGUISHED JUDGES
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
            Meet the accomplished leaders who evaluate and celebrate Africa's exceptional teens
          </p>
        </div>
      </section>

      {/* Judges Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge) => (
              <div key={judge.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={judge.image} 
                    alt={judge.name}
                    className="w-full h-64 object-cover shadow-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-6xl text-gray-500 hidden shadow-2xl">👤</div>
                  <div className="absolute top-4 right-4 p-2 rounded-full" 
                       style={{backgroundColor: '#DAA520'}}>
                    {judge.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-black mb-1" style={{color: '#003875'}}>
                      {judge.name}
                    </h3>
                    <p className="text-sm font-bold mb-2" style={{color: '#DAA520'}}>
                      {judge.title}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      📍 {judge.country}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {judge.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-bold" style={{color: '#003875'}}>
                      EXPERTISE:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {judge.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{backgroundColor: '#DAA520', color: '#003875'}}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{color: '#DAA520'}}>
              JUDGING CRITERIA
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Our judges evaluate nominations based on these key criteria
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {judgingCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black" style={{color: '#003875'}}>
                    {criteria.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" 
                        style={{backgroundColor: '#DAA520', color: '#003875'}}>
                    {criteria.weight}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8" style={{color: '#003875'}}>
              SELECTION PROCESS
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-black" 
                     style={{backgroundColor: '#003875'}}>
                  1
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: '#003875'}}>
                  Initial Review
                </h3>
                <p className="text-gray-600 text-sm">
                  All nominations are reviewed for completeness and eligibility
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-black" 
                     style={{backgroundColor: '#DAA520'}}>
                  2
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: '#003875'}}>
                  Expert Evaluation
                </h3>
                <p className="text-gray-600 text-sm">
                  Our panel of judges scores each nomination based on criteria
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-black" 
                     style={{backgroundColor: '#003875'}}>
                  3
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: '#003875'}}>
                  Final Selection
                </h3>
                <p className="text-gray-600 text-sm">
                  Winners are selected and verified before official announcement
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/nominate"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#003875', color: 'white'}}
              >
                <HiStar className="h-5 w-5" />
                <span>Submit Your Nomination</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JudgesPage;
// File Path: frontend/src/components/awards/JudgesSection.jsx
import React from "react";
import { HiStar, HiUserGroup, HiAcademicCap } from "react-icons/hi";

function JudgesSection() {
  const judges = [
    {
      id: 1,
      name: "Agwenyi Emmanuel",
      image: "/awards page resources/judge Agwenyi Emmanuel.jpg",
      category: "Academic Excellence",
      bio: "Education leader and youth mentor with expertise in academic development and student empowerment."
    },
    {
      id: 2,
      name: "Anne Njoroge",
      image: "/awards page resources/judge Anne Njoroge.jpg", 
      category: "Leadership Excellence",
      bio: "Leadership development specialist focused on cultivating next-generation leaders."
    },
    {
      id: 3,
      name: "Antony Ndeda",
      image: "/awards page resources/judge Antony Ndeda.jpg",
      category: "Innovation Award", 
      bio: "Innovation strategist and technology advocate driving youth-led solutions."
    },
    {
      id: 4,
      name: "Arnold Osano",
      image: "/awards page resources/judge Arnold Osano.png",
      category: "Teenpreneur Award",
      bio: "Entrepreneurship coach and business development expert mentoring young entrepreneurs."
    },
    {
      id: 5,
      name: "Dennis Mutuma",
      image: "/awards page resources/judge DENNIS MUTUMA.jpg",
      category: "Sports & Wellness",
      bio: "Sports development coordinator and wellness advocate promoting healthy lifestyles."
    },
    {
      id: 6,
      name: "Edwin Ochieng",
      image: "/awards page resources/judge Edwin Ochieng.jpg",
      category: "Advocate for Change",
      bio: "Social justice advocate and community development leader driving systemic change."
    },
    {
      id: 7,
      name: "Emily Otieno", 
      image: "/awards page resources/judge Emily Otieno.jpg",
      category: "Environmental Champion",
      bio: "Environmental conservation expert and sustainability advocate for climate action."
    },
    {
      id: 8,
      name: "Loretta Akatch",
      image: "/awards page resources/judge Loretta Akatch.jpg",
      category: "Digital Impact",
      bio: "Digital media specialist and technology integration expert shaping online narratives."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements - Persian Blue Theme */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 md:w-40 h-32 md:h-40 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-24 md:w-32 h-24 md:h-32 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center items-center mb-6">
              <HiUserGroup className="h-8 w-8 md:h-12 md:w-12 text-yellow-400 mr-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                OUR <span className="text-yellow-400">EXPERT PANEL</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-blue-200 font-medium max-w-4xl mx-auto leading-relaxed">
              Distinguished professionals and industry experts evaluating nominations based on impact, originality, leadership, and resilience across all award categories.
            </p>
          </div>

          {/* Judges Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {judges.map((judge) => (
              <div 
                key={judge.id} 
                className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-600/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Judge Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 group-hover:border-yellow-400 transition-colors duration-300">
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fbbf24"/><circle cx="50" cy="35" r="15" fill="%231e40af"/><path d="M25 75 Q50 65 75 75" stroke="%231e40af" stroke-width="8" fill="none"/></svg>`;
                      }}
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 text-xs font-black rounded-full whitespace-nowrap">
                      {judge.category}
                    </span>
                  </div>
                </div>

                {/* Judge Info */}
                <div className="text-center">
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {judge.name}
                  </h3>
                  <p className="text-sm text-blue-200 font-medium leading-relaxed group-hover:text-blue-100">
                    {judge.bio}
                  </p>
                </div>

                {/* Expertise Indicator */}
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Panel Info */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-yellow-400/30 max-w-4xl mx-auto">
              <HiAcademicCap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                RIGOROUS EVALUATION PROCESS
              </h3>
              <p className="text-blue-200 font-medium text-sm md:text-base leading-relaxed">
                Our expert panel evaluates each nomination based on four key criteria: <span className="text-yellow-400 font-bold">Impact</span> on community, 
                <span className="text-yellow-400 font-bold"> Originality</span> of approach, <span className="text-yellow-400 font-bold">Leadership</span> qualities, 
                and <span className="text-yellow-400 font-bold">Resilience</span> in overcoming challenges. This ensures fair and comprehensive assessment across all categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JudgesSection;
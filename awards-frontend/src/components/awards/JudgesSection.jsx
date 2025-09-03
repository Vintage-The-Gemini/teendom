// File Path: frontend/src/components/awards/JudgesSection.jsx
import React from "react";

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
    <section className="py-20" style={{ backgroundColor: '#003875' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              OUR <span style={{ color: '#FFD700' }}>EXPERT PANEL</span>
            </h2>
            <p className="text-xl text-white font-medium max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Distinguished professionals and industry experts evaluating nominations based on impact, originality, leadership, and resilience across all award categories.
            </p>
          </div>

          {/* Judges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {judges.map((judge) => (
              <div key={judge.id} className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Judge Photo */}
                <div className="mb-6">
                  <img 
                    src={judge.image} 
                    alt={judge.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>

                {/* Judge Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {judge.name}
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-full mb-3" style={{ backgroundColor: '#FFD700' }}>
                    <span className="text-sm font-bold" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {judge.category}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm leading-relaxed text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {judge.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                READY TO <span style={{ color: '#FFD700' }}>NOMINATE</span>?
              </h3>
              <p className="text-xl mb-8" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Know an exceptional teen making a difference? Let's celebrate their impact!
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#FFD700', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  START NOMINATION
                </button>
                <button className="px-12 py-4 rounded-2xl text-xl font-bold border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: '#FFD700', color: '#003875', backgroundColor: 'transparent', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JudgesSection;
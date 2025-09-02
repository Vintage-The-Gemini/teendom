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
      bio: "Education leader and youth mentor with expertise in academic development and student empowerment.",
      color: "yellow"
    },
    {
      id: 2,
      name: "Anne Njoroge",
      image: "/awards page resources/judge Anne Njoroge.jpg", 
      category: "Leadership Excellence",
      bio: "Leadership development specialist focused on cultivating next-generation leaders.",
      color: "blue"
    },
    {
      id: 3,
      name: "Antony Ndeda",
      image: "/awards page resources/judge Antony Ndeda.jpg",
      category: "Innovation Award", 
      bio: "Innovation strategist and technology advocate driving youth-led solutions.",
      color: "purple"
    },
    {
      id: 4,
      name: "Arnold Osano",
      image: "/awards page resources/judge Arnold Osano.png",
      category: "Teenpreneur Award",
      bio: "Entrepreneurship coach and business development expert mentoring young entrepreneurs.",
      color: "green"
    },
    {
      id: 5,
      name: "Dennis Mutuma",
      image: "/awards page resources/judge DENNIS MUTUMA.jpg",
      category: "Sports & Wellness",
      bio: "Sports development coordinator and wellness advocate promoting healthy lifestyles.",
      color: "orange"
    },
    {
      id: 6,
      name: "Edwin Ochieng",
      image: "/awards page resources/judge Edwin Ochieng.jpg",
      category: "Advocate for Change",
      bio: "Social justice advocate and community development leader driving systemic change.",
      color: "red"
    },
    {
      id: 7,
      name: "Emily Otieno", 
      image: "/awards page resources/judge Emily Otieno.jpg",
      category: "Environmental Champion",
      bio: "Environmental conservation expert and sustainability advocate for climate action.",
      color: "teal"
    },
    {
      id: 8,
      name: "Loretta Akatch",
      image: "/awards page resources/judge Loretta Akatch.jpg",
      category: "Digital Impact",
      bio: "Digital media specialist and technology integration expert shaping online narratives.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: "from-yellow-400 to-yellow-500 border-yellow-400",
      blue: "from-blue-400 to-blue-500 border-blue-400",
      purple: "from-purple-400 to-purple-500 border-purple-400", 
      green: "from-green-400 to-green-500 border-green-400",
      orange: "from-orange-400 to-orange-500 border-orange-400",
      red: "from-red-400 to-red-500 border-red-400",
      teal: "from-teal-400 to-teal-500 border-teal-400",
      indigo: "from-indigo-400 to-indigo-500 border-indigo-400"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 border-2 border-blue-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <HiUserGroup className="h-12 w-12 text-yellow-400 mr-4" />
              <h2 className="text-5xl font-black text-white">
                OUR <span className="text-yellow-400">EXPERT PANEL</span>
              </h2>
            </div>
            <p className="text-xl text-blue-200 font-medium max-w-4xl mx-auto">
              Distinguished professionals and industry experts evaluating nominations based on impact, originality, leadership, and resilience across all award categories.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto mt-6"></div>
          </div>

          {/* Judges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {judges.map((judge) => (
              <div 
                key={judge.id}
                className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group"
              >
                {/* Judge Image */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(judge.color)} rounded-xl opacity-10 blur-lg scale-105`}></div>
                  <img 
                    src={judge.image}
                    alt={judge.name}
                    className="relative w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${getColorClasses(judge.color)} rounded-full flex items-center justify-center`}>
                    <HiStar className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Judge Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {judge.name}
                  </h3>
                  
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getColorClasses(judge.color)} rounded-lg opacity-90`}>
                    <span className="text-white font-bold text-sm">{judge.category}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    {judge.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Quote Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <HiAcademicCap className="h-12 w-12 text-black mx-auto mb-4" />
              <blockquote className="text-2xl font-black text-black">
                "Today's teenagers aren't just the leaders of tomorrow — they're the changemakers of today. We're honored to recognize their extraordinary impact."
              </blockquote>
              <p className="text-black font-bold mt-4">— Teendom Awards Judging Panel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JudgesSection;
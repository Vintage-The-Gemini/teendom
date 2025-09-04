import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiGlobeAlt, HiAcademicCap, HiBriefcase } from "react-icons/hi";

function JudgesPage() {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const judges = [
    {
      id: 1,
      name: "Dr. Duncan Antony Ndeda",
      title: "Orthopaedic Surgeon",
      category: "SPORTS AND WELLNESS AWARD",
      image: "/judges/judge Antony Ndeda.jpg",
      quote: "Celebrating young people represents who we are as a people, acknowledging that they will make us better now and in the future and in all aspects of life"
    },
    {
      id: 2,
      name: "Mr. Otieno Emmanuel Agwenyi",
      title: "Youth leader and Digital Advocate", 
      category: "DIGITAL IMPACT AWARD",
      image: "/judges/judge Agwenyi Emmanuel.jpg",
      quote: "When we celebrate teen voices, we fuel a future built on bold ideas and fearless action"
    },
    {
      id: 3,
      name: "Sandra Nekh",
      title: "Writer and Filmmaker",
      category: "CREATIVE ARTS AWARD (LITERARY & MEDIA ARTS CATEGORIES)",
      image: "/judges/judge Sandra Nekh.jpg",
      quote: "To empower youth, we have to think beyond our own generation."
    },
    {
      id: 4,
      name: "OKANDA .S EUGINE",
      title: "Executive Leadership Coach, Global Speaker, and Human Capital Strategist",
      category: "TEEN OF THE YEAR",
      image: "/judges/judge Okanda Stephen Eugine.jpg",
      quote: "Celebrating teen changemakers is not just applause for what they have done, but an investment in who they are becoming. When we honor their courage and creativity today, we ignite a generation ready to lead with purpose tomorrow"
    },
    {
      id: 5,
      name: "Emily Anyango",
      title: "Youth leader, Beautypreneur and Governance Enthusiast",
      category: "LEADERSHIP EXCELLENCE AWARD",
      image: "/judges/judge Emily Otieno.jpg",
      quote: "When we appreciate teen change-makers, we remind the world that age is no barrier to impact. Recognizing them is uplifting the next generation of leaders and dreamers."
    },
    {
      id: 6,
      name: "Edwin Ochieng",
      title: "Designer and Art Instructor",
      category: "CREATIVE ARTS (VISUAL ARTS CATEGORY)",
      image: "/judges/judge Edwin Ochieng.jpg",
      quote: "Young people bear the true reflection of our ideal society. Their innocent, incorruptible minds are like fertile fields in which we can cultivate better communities."
    },
    {
      id: 7,
      name: "Ms. LORETTA AKATCH",
      title: "Educator, Tutor and Mentor",
      category: "ACADEMIC EXCELLENCE CATEGORY",
      image: "/judges/judge Loretta Akatch.jpg",
      quote: "Teen changemakers spark change today, proving that bold hearts and bright ideas shape the world. Honouring their vision inspires us all."
    },
    {
      id: 8,
      name: "DENNIS MUTUMA AKA DORPHAN",
      title: "Performing poet, Songwriter, Humanist",
      category: "CREATIVE ARTS AWARDS (PERFORMING ARTS CATEGORY)",
      image: "/judges/judge DENNIS MUTUMA.jpg",
      quote: "Through every poem, performance, and podcast, Dorphanage stands as a force for collective healing, political consciousness, and cultural renewal."
    },
    {
      id: 9,
      name: "Anne Njoroge",
      title: "Business Strategist and User Experience Designer",
      category: "INNOVATION AWARD",
      image: "/judges/judge Anne Njoroge.jpg",
      quote: "If we nurture the dreams of the young in our generation, our nation will be blessed. If we destroy them, our nation and world at large is doomed."
    },
    {
      id: 10,
      name: "Peggy Olwalo",
      title: "Program Associate at CAVU",
      category: "Environmental Champion Award",
      image: "/judges/judge Peggy Olwalo.jpeg",
      quote: "Young people carry within them the spark of transformation. Recognizing their leadership today inspires a legacy of courage, purpose, and impact."
    },
    {
      id: 11,
      name: "Alisa Lilian Ondigi",
      title: "Trainer and Consultancy Assistant",
      category: "Teenpreneur Award",
      image: "/judges/judge Alisa Ondigi.jpg",
      quote: "Invest in young people, harvest their innovation. A spark of guidance can light a lifetime of entrepreneurship"
    },
    {
      id: 12,
      name: "Arnold Osano",
      title: "Co-Founder of WeCare Youth Organization",
      category: "Advocate for Change Award",
      image: "/judges/judge Arnold Osano.png",
      quote: "Youth empowerment means giving young people the voice, space, and tools to shape the future they want. Let us create those opportunities at every level."
    }
  ];

  // Auto-rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % judges.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [judges.length]);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
            Meet Our 2025 JUDGES
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
            The Teendom Awards are guided by a panel of young professionals who are respected leaders and changemakers and who bring credibility, fairness, and heart to the process. Each judge is carefully selected for their expertise, passion for youth empowerment, and commitment to celebrating the voices of Kenya's teenagers.
          </p>
        </div>
      </section>

      {/* Judges Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {judges.map((judge) => (
              <div key={judge.id} className="bg-white shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={judge.image} 
                    alt={judge.name}
                    className="w-full h-96 object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-6xl text-gray-500 hidden">👤</div>
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
                    <p className="text-xs font-bold mb-2" style={{color: '#003875'}}>
                      JUDGING CATEGORY:
                    </p>
                    <p className="text-sm text-gray-600 font-medium mb-4">
                      {judge.category}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Carousel Section */}
      <section className="py-20 px-6 overflow-hidden relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Montserrat', sans-serif"}}>
              Voices of Our Judges
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Inspiring words from our esteemed panel
            </p>
          </div>
          
          <div className="relative">
            {/* Quote Display */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-opacity-20 border-white min-h-[200px] flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                <div className="quote-container" style={{
                  animation: 'fadeInSlide 1s ease-in-out',
                  transform: 'translateY(0)',
                  opacity: 1
                }}>
                  <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 italic">
                    "{judges[currentQuote].quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl font-bold text-blue-900">
                      {judges[currentQuote].name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold" style={{color: '#DAA520'}}>
                        {judges[currentQuote].name}
                      </h4>
                      <p className="text-white text-sm opacity-80">
                        {judges[currentQuote].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {judges.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentQuote === index ? '#DAA520' : 'rgba(255, 255, 255, 0.3)',
                    transform: currentQuote === index ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-yellow-400 bg-opacity-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-yellow-400 bg-opacity-10 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-yellow-400 bg-opacity-10 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 rounded-full bg-yellow-400 bg-opacity-10 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
      </section>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .quote-container {
          animation: fadeInSlide 1s ease-in-out;
        }
      `}</style>

    </div>
  );
}

export default JudgesPage;
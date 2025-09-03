// File Path: frontend/src/pages/AwardsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiAcademicCap, HiChevronDown, HiChevronUp, HiLightningBolt, HiTrendingUp, HiFire } from "react-icons/hi";

function AwardsPage() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const awardCategories = [
    {
      id: 1,
      title: "Academic Excellence Award",
      description: "Spotlights brilliance in the classroom and beyond.",
      fullDescription: "This award honors teens who achieve outstanding academic results, whether in national exams or international competitions. It celebrates effort, curiosity, and those using their academic strengths to inspire others.",
      requirements: [
        "Academic records, results, or awards",
        "Stories of academic growth or mentorship", 
        "Participation in academic contests, clubs, or peer tutoring",
        "Endorsement from a teacher or principal (optional)"
      ]
    },
    {
      id: 2,
      title: "Leadership Excellence Award",
      description: "For those who lead with courage, purpose, and vision.",
      fullDescription: "This award recognizes teens who step up — as school prefects, club leaders, or community organizers — and lead others toward meaningful change.",
      requirements: [
        "Description of leadership role(s)",
        "Specific actions taken and outcomes achieved",
        "Testimonials from those impacted or mentored",
        "Traits that make them a visionary or role model"
      ]
    },
    {
      id: 3,
      title: "Teen Innovator Award",
      description: "For teen trailblazers solving tomorrow's challenges today.",
      fullDescription: "This award celebrates creative problem-solvers developing new ideas, solutions, or products to tackle real-life issues.",
      requirements: [
        "Description of the innovation or invention",
        "The problem it solves and the impact made",
        "Photos, videos, or links to prototypes",
        "Feedback from users or mentors (optional)"
      ]
    },
    {
      id: 4,
      title: "Teenpreneur Award",
      description: "For bold builders turning ideas into impact.",
      fullDescription: "This award honors teen entrepreneurs who've launched businesses, side hustles, or creative ventures — demonstrating originality, grit, and social impact.",
      requirements: [
        "Description of the business or venture",
        "Products/services offered and customers reached",
        "Photos, receipts, or product samples",
        "Impact made, challenges faced, and lessons learned"
      ]
    },
    {
      id: 5,
      title: "Creative Arts Award",
      description: "For dreamers, storytellers, and visionaries shaping culture.",
      fullDescription: "This award celebrates extraordinary talent in visual, performing, literary, or digital media arts.",
      subCategories: [
        "Visual Arts (painting, drawing, sculpture, fashion, photography)",
        "Performing Arts (music, dance, drama, theatre)",
        "Literary Arts (writing, poetry, storytelling)",
        "Media Arts (film, animation, digital art)"
      ],
      requirements: [
        "Portfolio samples (images, links, performances)",
        "Artistic statement or inspiration",
        "Achievements or features (if any)",
        "Impact on audiences or communities"
      ]
    },
    {
      id: 6,
      title: "Sports & Wellness Award",
      description: "For champions of strength, balance, and discipline.",
      fullDescription: "This award honors teens who excel in sports or promote physical and mental well-being through training, competition, or health advocacy.",
      requirements: [
        "Sports played or wellness initiatives led",
        "Achievements, rankings, or recognition",
        "Testimonials from coaches or teammates",
        "Evidence of consistency, resilience, and teamwork"
      ]
    },
    {
      id: 7,
      title: "Advocate for Change Award",
      description: "For teens raising their voice for a better world.",
      fullDescription: "This award recognizes teens championing issues like mental health, gender equality, disability rights, peacebuilding, or justice.",
      requirements: [
        "The cause they are advocating for",
        "Activities or campaigns they've led or joined",
        "Measurable change or awareness created",
        "Social media links, events, or articles (optional)"
      ]
    },
    {
      id: 8,
      title: "Environmental Champion Award",
      description: "For eco-heroes safeguarding our planet's future.",
      fullDescription: "This award honors teens working on climate action, clean-ups, reforestation, conservation, or sustainable living.",
      requirements: [
        "Description of environmental actions taken",
        "Photos or records of cleanups, tree planting, etc",
        "Outreach, education, or policy advocacy efforts",
        "Collaborations with schools or organizations (optional)"
      ]
    },
    {
      id: 9,
      title: "Digital Impact Award",
      description: "For digital voices making real-world impact.",
      fullDescription: "From Instagram reels to YouTube channels, this award celebrates teens using digital platforms to inspire, educate, or mobilize online audiences for good.",
      requirements: [
        "Link(s) to digital content",
        "Platform metrics (views, followers, engagement)",
        "Purpose or message behind the content",
        "Examples of how they've helped or influenced others"
      ]
    },
    {
      id: 10,
      title: "Teen of the Year Award",
      description: "The ultimate changemaker. A true Teendom icon.",
      fullDescription: "The highest honor of the Teendom Awards. For a teen who exemplifies excellence across multiple fields, uplifts others, and stands out as a national inspiration.",
      requirements: [
        "Evidence of impact in at least three different areas (e.g., academics + leadership + change champion)",
        "Story of growth, adversity, or influence",
        "Testimonials from teachers, mentors, or beneficiaries",
        "Personal reflection or vision statement (optional)"
      ]
    }
  ];

  const faqSections = [
    {
      title: "About Teendom Africa",
      items: [
        {
          question: "What is Teendom Africa?",
          answer: "Teendom Africa is established with the vision of empowering young people to develop into a community of informed and active citizens. We achieve this through research-informed, innovative programs designed for holistic teen development."
        },
        {
          question: "What are the Teendom Awards?",
          answer: "Teendom Awards is a flagship annual program of Teendom Africa, designed to celebrate the achievements and potential of teenagers in Kenya. This annual awards program seeks to recognize exceptional Kenyan teens aged 13 to 19, who are making a difference in diverse fields."
        }
      ]
    },
    {
      title: "Eligibility & Nominations",
      items: [
        {
          question: "Who can be nominated?",
          answer: "Any teenager: Aged 13–19 (as of the nomination deadline), Living in Kenya (citizen or resident), Making a positive impact in their community"
        },
        {
          question: "Can teens nominate themselves?",
          answer: "Yes! Self-nominations are welcome and encouraged."
        },
        {
          question: "Can I nominate someone else?",
          answer: "Absolutely. Parents, guardians, teachers, community leaders, and friends can nominate."
        },
        {
          question: "Is there a nomination fee?",
          answer: "No. Nominations are completely free."
        },
        {
          question: "How do I submit a nomination?",
          answer: "Visit www.teendomafrica.org/awards/nominate and fill out the online form with the nominee's details, impact story, and any supporting materials."
        }
      ]
    },
    {
      title: "Selection & Judging",
      items: [
        {
          question: "Who reviews the nominations?",
          answer: "A panel of young professionals and experts from diverse fields evaluates entries based on impact, originality, leadership, and resilience."
        },
        {
          question: "Is there a public voting phase?",
          answer: "Yes. Once finalists are shortlisted, the public will have two weeks to vote online. This helps amplify stories — but final selection is based on both judging scores and public input."
        }
      ]
    },
    {
      title: "Awards Ceremony",
      items: [
        {
          question: "When is the Teendom Awards ceremony?",
          answer: "The ceremony will be held on December 6, 2025 in Nairobi."
        },
        {
          question: "Can I attend the event?",
          answer: "The event is by invitation only, but it will be streamed and covered on our platforms."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-6" style={{backgroundColor: '#003875'}}>
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              TEENDOM AWARDS
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
              Celebrating exceptional teenagers across Africa who are making a positive impact in their communities
            </p>
            <div className="text-center">
              <Link
                to="/nominate"
                className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#DAA520', color: '#003875'}}
              >
                <HiStar className="h-5 w-5 mr-2" />
                Nominate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Founder Message */}
      <section className="py-12" style={{backgroundColor: '#003875'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                A MESSAGE FROM THE <span style={{ color: '#DAA520' }}>FOUNDER</span>
              </h2>
              <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#DAA520' }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src="/Sandra Ochola.jpg" 
                    alt="Sandra Ochola - Founder, Teendom Africa"
                    className="w-96 h-[32rem] object-cover shadow-2xl"
                  />
                  
                  <div className="absolute -bottom-4 left-0 px-5 py-3 shadow-xl" style={{ backgroundColor: '#DAA520' }}>
                    <h3 className="text-lg font-black" style={{ color: '#003875' }}>
                      SANDRA OCHOLA
                    </h3>
                    <p className="text-sm font-bold" style={{ color: '#003875' }}>
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Message */}
              <div className="lg:pl-4">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DAA520' }}>
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#003875' }}></div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed mb-8" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    "I founded the Teendom Awards because I believe in the extraordinary potential of teenagers to transform the social, economic, political, and cultural fabric of our nation."
                  </blockquote>

                  <div className="space-y-4 text-base leading-relaxed" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <p>
                      As a lawyer, author, and civic educator who has worked closely with teenagers and young adults for nearly a decade, I have seen first-hand their ability to lead movements, create innovative solutions, and inspire entire communities. Yet too often, their voices go unheard, their achievements unnoticed, and their dreams unsupported.
                    </p>
                    
                    <p>
                      <strong>I wanted to change that.</strong>
                    </p>
                    
                    <p>
                      The Teendom Awards was born to be more than just a celebration — it is Kenya's first national platform dedicated to applauding and equipping teenage innovators, advocates, and creators. Together, we can ensure that the next generation is seen, heard, and celebrated — not only for who they will become, but for who they are right now.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-8 pt-6" style={{ borderTop: '2px solid #DAA520' }}>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <h4 className="font-bold text-lg" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                          Sandra Ochola
                        </h4>
                        <p className="text-base font-medium" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                          Founder, Teendom Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Vision
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  A thriving network of empowered teenagers recognized for their talent, leadership, and positive influence.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Mission
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  To identify, celebrate, and support outstanding teens who exemplify excellence and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Get Involved Section */}
      <section className="py-12" style={{backgroundColor: '#003875'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                GET <span style={{ color: '#DAA520' }}>INVOLVED</span>
              </h2>
              <p className="text-lg text-white">
                Join the movement. Support Africa's next generation of leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Partners */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Partners & Sponsors
                </h3>
                <p className="text-base mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Support through sponsorship, in-kind contributions, mentorship, or media collaborations.
                </p>
                <button className="px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg" style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Partner With Us
                </button>
              </div>

              {/* Volunteers */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                  <span className="text-2xl">🙋</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Volunteers
                </h3>
                <p className="text-base mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Help with events, storytelling, logistics, social media, and community outreach.
                </p>
                <button className="px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg" style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Volunteer Now
                </button>
              </div>

              {/* Mentors */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Mentors & Advisors
                </h3>
                <p className="text-base mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Guide and support our finalists in their 12-month development journey.
                </p>
                <button className="px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg" style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Become a Mentor
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Contact Us
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Email
                  </h4>
                  <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    info@teendom.africa
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    WhatsApp
                  </h4>
                  <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    0742862080
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Website
                  </h4>
                  <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    www.teendom.africa
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Follow Us
                </h4>
                <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Instagram, Facebook, TikTok: @teendomafrica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AwardsPage;
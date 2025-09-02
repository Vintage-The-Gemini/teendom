// File Path: frontend/src/pages/AwardsPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiStar, HiAcademicCap, HiChevronDown } from "react-icons/hi";

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
      
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Teendom Awards Logo */}
            <div className="mb-12">
              <div className="flex justify-center items-center mb-8">
                <img 
                  src="/public/teendom awards primary logo.png" 
                  alt="Teendom Awards Logo"
                  className="h-32 md:h-40 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Ready to Celebrate Teen Greatness?
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-8 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Nominate a teen. Tell their story. Join the movement.
              </p>
              
              {/* Hero Call to Actions */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    🔸 Are you a teen making a difference?
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Nominate yourself. Your voice matters.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    🔸 Know an inspiring teen?
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Nominate them. Let's give them their flowers now.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    🔸 Want to support this vision?
                  </h3>
                  <p className="text-base mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Partner with us or sponsor a category.
                  </p>
                </div>
              </div>

              {/* Main CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="/awards/nominate"
                  className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  🟨 Nominate Now
                </Link>
                <button 
                  className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#28a745', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  🟩 Partner With Us
                </button>
                <button 
                  className="px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#fd7e14', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  🟧 Join the Movement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - FIRST PRIORITY */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Categories Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                2025 <span style={{ color: '#DAA520' }}>AWARD CATEGORIES</span>
              </h2>
              <p className="text-xl text-white mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                We're on a mission to recognize Kenya's extraordinary teenagers — the thinkers, leaders, creators, and changemakers between ages 13-19.
              </p>
            </div>

            {/* General Eligibility */}
            <div className="bg-white rounded-3xl p-8 mb-12 shadow-2xl">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                General Eligibility
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#DAA520' }}></div>
                    Between 13-19 years old as of December 1, 2025
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#DAA520' }}></div>
                    Must be a Kenyan citizen or resident
                  </li>
                </ul>
                <ul className="space-y-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#DAA520' }}></div>
                    Show exceptional achievement in selected category
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#DAA520' }}></div>
                    Self-nominations or third-party nominations welcome
                  </li>
                </ul>
              </div>
            </div>

            {/* Award Categories - Expandable */}
            <div className="space-y-4 mb-16">
              {awardCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div 
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  >
                    <div className="flex items-center flex-grow">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#DAA520' }}>
                        <HiStar className="h-6 w-6" style={{ color: '#003875' }} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold mb-2" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {category.title}
                        </h4>
                        <p className="text-base" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link 
                        to="/awards/nominate"
                        className="px-6 py-2 rounded-xl text-sm font-bold transition-all hover:shadow-md"
                        style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        Nominate
                      </Link>
                      <HiChevronDown 
                        className={`h-6 w-6 transition-transform duration-300 ${
                          expandedCategory === category.id ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#003875' }}
                      />
                    </div>
                  </div>
                  
                  {expandedCategory === category.id && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <div className="pt-6">
                        <p className="text-base mb-4" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {category.fullDescription}
                        </p>
                        
                        {category.subCategories && (
                          <div className="mb-4">
                            <h5 className="font-bold mb-2" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                              Sub-categories:
                            </h5>
                            <ul className="space-y-1">
                              {category.subCategories.map((sub, index) => (
                                <li key={index} className="text-sm" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                                  • {sub}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div>
                          <h5 className="font-bold mb-2" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Nomination should include:
                          </h5>
                          <ul className="space-y-1">
                            {category.requirements.map((req, index) => (
                              <li key={index} className="text-sm" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                                • {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nomination Information - SECOND PRIORITY */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                How to Nominate
              </h2>
              
              {/* Required Submission Materials */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Required Submission Materials
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <li>• Full name, age, county, and contact details of nominee</li>
                    <li>• Recent, high-quality photo of the nominee</li>
                    <li>• Short bio (max 250 words)</li>
                    <li>• Detailed nomination statement (300-500 words)</li>
                  </ul>
                  <ul className="space-y-3" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <li>• Supporting documents or links (certificates, media features, photos, videos)</li>
                    <li>• Social media profiles (if applicable)</li>
                    <li>• Referee contacts (teacher, coach, community leader)</li>
                  </ul>
                </div>
              </div>

              {/* Step by Step Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Nomination Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-2xl" style={{ border: '2px solid #DAA520' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#DAA520' }}>
                      <span className="text-2xl font-bold" style={{ color: '#003875' }}>1</span>
                    </div>
                    <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Click "Nominate Now" button
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-2xl" style={{ border: '2px solid #DAA520' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#DAA520' }}>
                      <span className="text-2xl font-bold" style={{ color: '#003875' }}>2</span>
                    </div>
                    <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Fill online nomination form
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-2xl" style={{ border: '2px solid #DAA520' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#DAA520' }}>
                      <span className="text-2xl font-bold" style={{ color: '#003875' }}>3</span>
                    </div>
                    <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Upload supporting documents
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-2xl" style={{ border: '2px solid #DAA520' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#DAA520' }}>
                      <span className="text-2xl font-bold" style={{ color: '#003875' }}>4</span>
                    </div>
                    <p style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Submit & receive confirmation
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Dates and Contact */}
              <div className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl" style={{ backgroundColor: '#003875' }}>
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Important Dates
                  </h4>
                  <p className="mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    📅 <strong>Nominations Open:</strong> September 5, 2025
                  </p>
                  <p className="mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    📅 <strong>Deadline:</strong> September 30, 2025
                  </p>
                  <p style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    🏆 <strong>Awards Ceremony:</strong> December 6, 2025
                  </p>
                </div>
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Contact Information
                  </h4>
                  <p className="mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    📧 <strong>Email:</strong> info@teendom.africa
                  </p>
                  <p className="mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    📱 <strong>WhatsApp:</strong> 0742862080
                  </p>
                  <p style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    🌐 <strong>Website:</strong> www.teendom.africa
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: '#f8f9fa', border: '2px solid #DAA520' }}>
                <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Benefits to Finalists
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      ALL FINALISTS Receive:
                    </h4>
                    <ul className="space-y-2" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <li>• National Recognition & Media Coverage</li>
                      <li>• Featured in Teendom Awards campaigns and press</li>
                      <li>• Custom Certificate of Impact</li>
                      <li>• Teendom Africa Alumni Network Access</li>
                      <li>• Eligibility for ambassadorial opportunities</li>
                      <li>• Access to future teen summits and programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      CATEGORY WINNERS Get:
                    </h4>
                    <ul className="space-y-2" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <li>• <strong>12-Month Changemakers Journey</strong></li>
                      <li>• Featured story profile</li>
                      <li>• Personal Mentor Pairing</li>
                      <li>• Portfolio Building Support</li>
                      <li>• Support for individual projects</li>
                      <li>• Access to Industry Leaders & Experts</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p className="text-lg font-medium" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <strong>Your Story Matters.</strong> Whether you win or not, being nominated means your impact is seen — and your journey is just beginning.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center mt-12">
                <Link 
                  to="/awards/nominate"
                  className="px-12 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-lg inline-block"
                  style={{ backgroundColor: '#DAA520', color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  🟦 Start Nomination Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#003875' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Frequently Asked <span style={{ color: '#DAA520' }}>Questions</span>
            </h2>
            
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const faqKey = `${sectionIndex}-${itemIndex}`;
                    return (
                      <div key={itemIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <button 
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none"
                          onClick={() => setExpandedFAQ(expandedFAQ === faqKey ? null : faqKey)}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {item.question}
                            </h4>
                            <HiChevronDown 
                              className={`h-5 w-5 transition-transform duration-300 ${
                                expandedFAQ === faqKey ? 'rotate-180' : ''
                              }`}
                              style={{ color: '#003875' }}
                            />
                          </div>
                        </button>
                        
                        {expandedFAQ === faqKey && (
                          <div className="px-6 pb-6 border-t border-gray-200">
                            <p className="pt-4 text-base leading-relaxed" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Founder Message */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                A MESSAGE FROM THE <span style={{ color: '#DAA520' }}>FOUNDER</span>
              </h2>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#DAA520' }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                    <img 
                      src="/awards page resources/Sandra Ochola.jpg" 
                      alt="Sandra Ochola - Founder, Teendom Africa"
                      className="w-80 h-80 object-cover rounded-2xl"
                    />
                    
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl shadow-xl" style={{ backgroundColor: '#DAA520' }}>
                      <h3 className="text-lg font-bold text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        SANDRA OCHOLA
                      </h3>
                      <p className="text-sm font-medium text-center" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Founder & CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Message */}
              <div className="lg:pl-8">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
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
            <div className="grid md:grid-cols-2 gap-8 mt-16">
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

      {/* Judges Section */}
      <section className="py-20" style={{ backgroundColor: '#003875' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                MEET OUR <span style={{ color: '#DAA520' }}>2025 JUDGES</span>
              </h2>
              <p className="text-xl text-white font-medium max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                The Teendom Awards are guided by a panel of young professionals who are respected leaders and changemakers, bringing credibility, fairness, and heart to the process.
              </p>
            </div>

            {/* Judges Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { name: "Agwenyi Emmanuel", category: "Academic Excellence", image: "/awards page resources/judge Agwenyi Emmanuel.jpg" },
                { name: "Anne Njoroge", category: "Leadership Excellence", image: "/awards page resources/judge Anne Njoroge.jpg" },
                { name: "Antony Ndeda", category: "Innovation Award", image: "/awards page resources/judge Antony Ndeda.jpg" },
                { name: "Arnold Osano", category: "Teenpreneur Award", image: "/awards page resources/judge Arnold Osano.png" },
                { name: "Dennis Mutuma", category: "Sports & Wellness", image: "/awards page resources/judge DENNIS MUTUMA.jpg" },
                { name: "Edwin Ochieng", category: "Advocate for Change", image: "/awards page resources/judge Edwin Ochieng.jpg" },
                { name: "Emily Otieno", category: "Environmental Champion", image: "/awards page resources/judge Emily Otieno.jpg" },
                { name: "Loretta Akatch", category: "Digital Impact", image: "/awards page resources/judge Loretta Akatch.jpg" }
              ].map((judge, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="mb-6">
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {judge.name}
                    </h3>
                    <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: '#DAA520' }}>
                      <span className="text-sm font-bold" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {judge.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Judge Quote */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
              <blockquote className="text-2xl leading-relaxed mb-6" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                "Teens today are not the leaders of tomorrow — they're the changemakers of today. That's why I said yes to being a Teendom Awards judge."
              </blockquote>
              <p className="text-lg font-medium" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
                — A Word from Our Judges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                GET <span style={{ color: '#DAA520' }}>INVOLVED</span>
              </h2>
              <p className="text-xl text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Join the movement. Support Kenya's next generation of leaders.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
              <h3 className="text-3xl font-bold mb-8" style={{ color: '#003875', fontFamily: 'Inter, system-ui, sans-serif' }}>
                Contact Us
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
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
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: 'Inter, system-ui, sans-serif' }}>
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
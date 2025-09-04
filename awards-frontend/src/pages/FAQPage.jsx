import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiChevronDown, HiChevronUp, HiStar } from "react-icons/hi";

function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqSections = [
    {
      title: "About Teendom Africa",
      items: [
        {
          question: "What is Teendom Africa?",
          answer: "Teendom Africa is established with the vision of empowering young people to develop into a community of informed and active citizens. We achieve this through research-informed, innovative programs designed for holistic teen development. We engage teenagers and young adults with a suite of educational resources, compelling infotainment, and tailored mentorship, all aimed at cultivating curiosity towards informed and active citizenship. Our mission is to transform their lives by equipping them with the knowledge, skills, and values, necessary to shape a better future for themselves and their communities."
        },
        {
          question: "What are the Teendom Awards?",
          answer: "Teendom Awards, is a flagship annual program of Teendom Africa, designed to celebrate the achievements and potential of teenagers in Kenya. This annual awards program seeks to recognize exceptional Kenyan teens aged 13 to 19, who are making a difference in diverse fields such as leadership, innovation, volunteerism, entrepreneurship, arts, sports, education, and community development."
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
          question: "Is there an age or category limit?",
          answer: "Only those aged 13–19 are eligible. You can nominate someone for more than one category if it fits."
        },
        {
          question: "Is there a nomination fee?",
          answer: "No. Nominations are completely free."
        },
        {
          question: "How do I submit a nomination?",
          answer: "Visit www.teendomafrica.org/awards/nominate and fill out the online form with the nominee's details, impact story, and any supporting materials."
        },
        {
          question: "Can I edit my nomination after submitting?",
          answer: "No, but if you made a mistake, email awards@teendomafrica.org for support."
        }
      ]
    },
    {
      title: "Consent, Data & Safety",
      items: [
        {
          question: "Do nominees under 18 need parental consent?",
          answer: "Yes. Before any finalist is profiled or featured, they must submit a signed parental or guardian consent form."
        },
        {
          question: "How is nominee data handled?",
          answer: "We take data protection seriously. All personal information is used only for judging, communication, and award processes — and only with full consent."
        }
      ]
    },
    {
      title: "Award Categories",
      items: [
        {
          question: "What categories are available?",
          answer: "1. Academic Excellence Award\n2. Leadership Excellence Award\n3. Innovation Award\n4. Teenprenuer Award\n5. Sports & Wellness Award\n6. Advocate for Change Award\n7. Environmental Champion Award\n8. Digital Impact Award\n9. Teen of the Year Award\n10. Creative Arts Award:\n   - Visual Arts (painting, sculpture, drawing, photography)\n   - Performing Arts (music, dance, drama, theatre)\n   - Literary Arts (writing, poetry, storytelling)\n   - Media Arts (film, digital art, animation, photography)\n\nSee full category descriptions here (link to awards category menu page)"
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
          question: "Will all nominees be publicly featured?",
          answer: "No. Only shortlisted nominees with full consent will be profiled."
        },
        {
          question: "When will nominees be contacted?",
          answer: "Only shortlisted nominees will be contacted. Keep an eye on your inbox and our socials!"
        }
      ]
    },
    {
      title: "Public Voting",
      items: [
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
    },
    {
      title: "What Nominees Get",
      items: [
        {
          question: "What do finalists receive?",
          answer: "• National Recognition: Featured in Teendom Awards media campaigns, press and our Teendom Africa Hall of Fame\n• Custom Certificate: Beautifully designed to mark your impact\n• Access to the Teendom Africa Alumni Network: This means eligibility for ambassadorial opportunities and access to future teen summits, camps and programs"
        },
        {
          question: "What do the winners receive?",
          answer: "The winners will be enrolled in a free one-year, high-touch personal and leadership development experience. This will include, featured story profile, mentor pairing, portfolio building, support for individual projects and access to industry leaders and experts in their fields of interest."
        },
        {
          question: "Is there ongoing support after the awards?",
          answer: "Yes! Finalists join the Teendom Africa Alumni Network and may be invited to future workshops, storytelling features, and leadership opportunities."
        }
      ]
    },
    {
      title: "Partnership & Volunteering",
      items: [
        {
          question: "How can my organization partner with the awards?",
          answer: "You can partner through sponsorship, in-kind support, mentorship, or media collaborations. Email info@teendom.africa to request a kit."
        },
        {
          question: "Can I volunteer with Teendom Africa?",
          answer: "Yes! We welcome youth and adult volunteers to support events, storytelling, logistics, and more. Visit www.teendomafrica.org/volunteer to sign up."
        }
      ]
    },
    {
      title: "Need Help?",
      items: [
        {
          question: "How do I contact the team?",
          answer: "Email us at info@teendom.africa or DM us on our socials @teendomafrica"
        },
        {
          question: "Where can I get updates?",
          answer: "Website: www.teendomafrica.org\nInstagram, Facebook, TikTok: @teendomafrica"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            FREQUENTLY ASKED <span style={{color: '#DAA520'}}>QUESTIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
            Everything you need to know about the Teendom Awards
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6 border-b-2" style={{ borderColor: '#DAA520' }}>
                  <h2 className="text-2xl md:text-3xl font-black" style={{ color: '#003875' }}>
                    {section.title}
                  </h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const uniqueIndex = `${sectionIndex}-${itemIndex}`;
                    return (
                      <div key={itemIndex} className="border-b border-gray-200 last:border-b-0">
                        <button
                          className="w-full text-left py-4 focus:outline-none"
                          onClick={() => setExpandedFAQ(expandedFAQ === uniqueIndex ? null : uniqueIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold pr-4" style={{ color: '#003875' }}>
                              {item.question}
                            </h3>
                            {expandedFAQ === uniqueIndex ? (
                              <HiChevronUp className="h-6 w-6 flex-shrink-0" style={{ color: '#DAA520' }} />
                            ) : (
                              <HiChevronDown className="h-6 w-6 flex-shrink-0" style={{ color: '#DAA520' }} />
                            )}
                          </div>
                        </button>
                        
                        {expandedFAQ === uniqueIndex && (
                          <div className="pb-4">
                            <div className="prose prose-lg max-w-none" style={{ color: '#003875' }}>
                              {item.answer.split('\\n').map((line, index) => (
                                <p key={index} className="mb-2 last:mb-0 whitespace-pre-line">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#003875' }}>
                Still have questions?
              </h2>
              <p className="text-lg mb-6" style={{ color: '#003875' }}>
                We're here to help! Reach out to our team.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#003875', color: 'white'}}
                >
                  Contact Us
                </Link>
                <Link
                  to="/nominate"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#DAA520', color: '#003875'}}
                >
                  <HiStar className="h-5 w-5" />
                  <span>Ready to Nominate?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
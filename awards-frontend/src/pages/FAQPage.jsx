import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiChevronDown, HiChevronUp, HiStar } from "react-icons/hi";

function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What are the Teendom Awards?",
          answer: "The Teendom Awards celebrate exceptional teenagers (13-19) across Africa who are making a positive impact in their communities, schools, and beyond. We recognize excellence in 10 different categories."
        },
        {
          question: "Who can participate?",
          answer: "Any teenager aged 13-19 from any African country can be nominated. This includes students, young entrepreneurs, activists, artists, athletes, and community leaders."
        },
        {
          question: "Is there a fee to participate?",
          answer: "No! Participation is completely FREE. We believe every exceptional teen deserves recognition regardless of their financial situation."
        },
        {
          question: "When do the awards take place?",
          answer: "The awards ceremony takes place annually. Nominations typically open in January and close in September, with winners announced in November."
        }
      ]
    },
    {
      category: "Nominations",
      questions: [
        {
          question: "How do I nominate someone?",
          answer: "Visit our nomination page and fill out the comprehensive form with the nominee's details, achievements, impact story, and supporting materials. You can nominate yourself or someone else."
        },
        {
          question: "Who can be nominated?",
          answer: "Any teenager between 13-19 years old who is a citizen or resident of an African country and has demonstrated excellence in any of our 10 award categories."
        },
        {
          question: "Can teens nominate themselves?",
          answer: "Absolutely! Self-nominations are encouraged. Don't wait for someone else to recognize your impact."
        },
        {
          question: "Can I nominate someone else?",
          answer: "Yes! Parents, guardians, teachers, community leaders, friends, and peers can nominate deserving teens."
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need the nominee's personal details, achievements, impact stories, supporting documents (certificates, photos, videos), and referee contacts."
        },
        {
          question: "Can I submit multiple nominations?",
          answer: "Yes, you can nominate multiple people, but each person can only be nominated once per category per year."
        }
      ]
    },
    {
      category: "Selection Process",
      questions: [
        {
          question: "How are winners selected?",
          answer: "Our panel of distinguished judges from across Africa evaluates nominations based on impact, innovation, leadership, and potential. The process includes multiple rounds of review."
        },
        {
          question: "Who are the judges?",
          answer: "Our judging panel includes successful entrepreneurs, academics, community leaders, and past award winners from across Africa. Visit our Judges page to learn more."
        },
        {
          question: "What are the judging criteria?",
          answer: "Judges evaluate based on: measurable impact, innovation and creativity, leadership potential, community benefit, and inspiring others."
        },
        {
          question: "When will winners be announced?",
          answer: "Winners are typically announced in November, with the awards ceremony following in December."
        }
      ]
    },
    {
      category: "Awards & Recognition",
      questions: [
        {
          question: "What do winners receive?",
          answer: "Winners receive a trophy, certificate, cash prize, mentorship opportunities, networking access, and a platform to amplify their impact across Africa."
        },
        {
          question: "Are there prizes for runners-up?",
          answer: "Yes! All finalists receive certificates and are invited to join our exclusive network of young African leaders."
        },
        {
          question: "How can I support the awards?",
          answer: "You can spread awareness, nominate deserving teens, volunteer during events, or partner with us as a sponsor or media partner."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedFAQ(expandedFAQ === key ? null : key);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
            Everything you need to know about the Teendom Awards
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((section, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-2" 
                    style={{color: '#DAA520'}}>
                  {section.category}
                </h2>
                <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#DAA520'}}></div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {section.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      className="w-full p-6 text-left transition-all duration-300 hover:bg-gray-50 focus:outline-none"
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-bold pr-4" 
                            style={{color: '#003875'}}>
                          {faq.question}
                        </h3>
                        {expandedFAQ === `${categoryIndex}-${questionIndex}` ? (
                          <HiChevronUp className="h-6 w-6 flex-shrink-0" style={{color: '#003875'}} />
                        ) : (
                          <HiChevronDown className="h-6 w-6 flex-shrink-0" style={{color: '#003875'}} />
                        )}
                      </div>
                    </button>
                    
                    {expandedFAQ === `${categoryIndex}-${questionIndex}` && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{color: '#003875'}}>
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us directly or start your nomination now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/nominate"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#DAA520', color: '#003875'}}
              >
                <HiStar className="h-5 w-5" />
                <span>Start Nomination</span>
              </Link>
              <a
                href="mailto:awards@teendom.africa"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2"
                style={{color: '#003875', borderColor: '#003875'}}
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
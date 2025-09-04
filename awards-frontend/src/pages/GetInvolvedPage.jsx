import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiHeart, HiUserGroup, HiAcademicCap, HiMail, HiPhone } from "react-icons/hi";

function GetInvolvedPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            GET <span style={{color: '#DAA520'}}>INVOLVED</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
            Join the movement. Support Africa's next generation of leaders.
          </p>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Partners & Sponsors */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875' }}>
                Partners & Sponsors
              </h3>
              <p className="text-base mb-6" style={{ color: '#003875' }}>
                Support through sponsorship, in-kind contributions, mentorship, or media collaborations. Help us amplify teen voices and create lasting impact.
              </p>
              <ul className="text-left mb-6 space-y-2" style={{ color: '#003875' }}>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Category sponsorship opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Event partnership and co-branding</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Media and digital content collaboration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Mentorship program support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg" style={{ backgroundColor: '#DAA520', color: '#003875' }}>
                Request Partnership Kit
              </button>
            </div>

            {/* Volunteers */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                <span className="text-3xl">🙋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875' }}>
                Volunteers
              </h3>
              <p className="text-base mb-6" style={{ color: '#003875' }}>
                Help with events, storytelling, logistics, social media, and community outreach. Be part of the movement celebrating teen excellence.
              </p>
              <ul className="text-left mb-6 space-y-2" style={{ color: '#003875' }}>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Event support and logistics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Social media and content creation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Community outreach and engagement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Storytelling and documentation</span>
                </li>
              </ul>
              <Link 
                to="https://www.teendomafrica.org/volunteer"
                className="w-full block px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg text-center"
                style={{ backgroundColor: '#DAA520', color: '#003875' }}
              >
                Sign Up to Volunteer
              </Link>
            </div>

            {/* Mentors & Advisors */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DAA520' }}>
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#003875' }}>
                Mentors & Advisors
              </h3>
              <p className="text-base mb-6" style={{ color: '#003875' }}>
                Guide and support our finalists in their 12-month development journey. Share your expertise and help shape the next generation.
              </p>
              <ul className="text-left mb-6 space-y-2" style={{ color: '#003875' }}>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>One-on-one mentorship programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Industry expertise and guidance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Portfolio and project development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span style={{ color: '#DAA520' }}>•</span>
                  <span>Leadership development support</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 rounded-2xl font-bold transition-all hover:shadow-lg" style={{ backgroundColor: '#DAA520', color: '#003875' }}>
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8" style={{ color: '#003875' }}>
              Ready to Get <span style={{ color: '#DAA520' }}>INVOLVED?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DAA520' }}>
                  <HiMail className="h-8 w-8" style={{ color: '#003875' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003875' }}>
                  Email Us
                </h3>
                <p className="text-lg" style={{ color: '#003875' }}>
                  info@teendom.africa
                </p>
                <p className="text-sm mt-2" style={{ color: '#666' }}>
                  For partnerships, volunteering, and general inquiries
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DAA520' }}>
                  <HiPhone className="h-8 w-8" style={{ color: '#003875' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#003875' }}>
                  WhatsApp
                </h3>
                <p className="text-lg" style={{ color: '#003875' }}>
                  0742862080
                </p>
                <p className="text-sm mt-2" style={{ color: '#666' }}>
                  Quick questions and direct support
                </p>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#DAA520' }}>
                Follow Our Journey
              </h3>
              <p className="text-lg mb-4" style={{ color: '#003875' }}>
                Instagram, Facebook, TikTok: @teendomafrica
              </p>
              <p className="text-lg" style={{ color: '#003875' }}>
                Website: www.teendomafrica.org
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/nominate"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#003875', color: 'white'}}
              >
                <HiStar className="h-5 w-5" />
                <span>Start by Nominating a Teen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetInvolvedPage;
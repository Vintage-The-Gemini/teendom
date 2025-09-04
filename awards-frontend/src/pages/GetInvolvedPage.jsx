import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiHeart, HiUserGroup, HiAcademicCap, HiMail, HiPhone } from "react-icons/hi";

function GetInvolvedPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{color: '#DAA520', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: "'Didot', 'Times New Roman', serif", letterSpacing: '2px', fontWeight: '400', fontStyle: 'italic'}}>
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed mb-12" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'}}>
            Join the movement to celebrate, support, and empower Kenya's most exceptional teenagers. Together, we can create a nation where teen excellence is recognized, celebrated, and nurtured.
          </p>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Partners & Sponsors */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', boxShadow: '0 10px 30px #DAA52040'}}>
                <span className="text-3xl" style={{color: '#ffffff'}}>🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#DAA520', fontFamily: "'Montserrat', sans-serif"}}>
                PARTNERS & SPONSORS
              </h3>
              <p className="text-lg mb-8" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300'}}>
                Support teen excellence through sponsorship and partnerships.
              </p>
              <button className="w-full px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl" style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', color: '#0b1426', border: '2px solid #DAA52080'}}>
                Request Partnership Kit
              </button>
            </div>

            {/* Volunteers */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', boxShadow: '0 10px 30px #DAA52040'}}>
                <span className="text-3xl" style={{color: '#ffffff'}}>🙋</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#DAA520', fontFamily: "'Montserrat', sans-serif"}}>
                VOLUNTEERS
              </h3>
              <p className="text-lg mb-8" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300'}}>
                Help with events, outreach, and celebrating teen excellence.
              </p>
              <button
                className="w-full px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', color: '#0b1426', border: '2px solid #DAA52080'}}
              >
                Sign Up to Volunteer
              </button>
            </div>

            {/* Mentors & Advisors */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', boxShadow: '0 10px 30px #DAA52040'}}>
                <span className="text-3xl" style={{color: '#ffffff'}}>🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#DAA520', fontFamily: "'Montserrat', sans-serif"}}>
                MENTORS & ADVISORS
              </h3>
              <p className="text-lg mb-8" style={{color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif", fontWeight: '300'}}>
                Guide and support our teen finalists through mentorship.
              </p>
              <button className="w-full px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl" style={{background: 'linear-gradient(145deg, #DAA520, #DAA520CC)', color: '#0b1426', border: '2px solid #DAA52080'}}>
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#DAA520', fontFamily: "'Didot', 'Times New Roman', serif" }}>
              Ready to Get <span>INVOLVED?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DAA520' }}>
                  <HiMail className="h-8 w-8" style={{ color: '#0b1426' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                  Email Us
                </h3>
                <p className="text-lg" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                  info@teendom.africa
                </p>
                <p className="text-sm mt-2" style={{ color: '#E8EAF6', opacity: 0.7, fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>
                  For partnerships, volunteering, and general inquiries
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DAA520' }}>
                  <HiPhone className="h-8 w-8" style={{ color: '#0b1426' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                  WhatsApp
                </h3>
                <p className="text-lg" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                  0742862080
                </p>
                <p className="text-sm mt-2" style={{ color: '#E8EAF6', opacity: 0.7, fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>
                  Quick questions and direct support
                </p>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#DAA520', fontFamily: "'Montserrat', sans-serif" }}>
                Follow Our Journey
              </h3>
              <p className="text-lg mb-4" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                Instagram, Facebook, TikTok: @teendomafrica
              </p>
              <p className="text-lg" style={{ color: '#E8EAF6', fontFamily: "'Montserrat', sans-serif" }}>
                Website: www.teendomafrica.org
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/nominate"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#DAA520', color: '#0b1426'}}
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiStar, HiUsers, HiAcademicCap } from "react-icons/hi";

function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredArticles = [
    {
      id: 1,
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      image: "/api/placeholder/400/300",
      category: "Health",
    },
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team", 
      date: "Jun 25, 2025",
      readTime: "7 min read",
      image: "/api/placeholder/400/300",
      category: "Leadership",
    },
    {
      id: 3,
      title: "TEEN CEO: Building Your Empire",
      author: "Business Team",
      date: "Jun 20, 2025", 
      readTime: "6 min read",
      image: "/api/placeholder/400/300",
      category: "Business",
    },
    {
      id: 4,
      title: "Body Odour Solutions for Teens",
      author: "Health Team",
      date: "Jun 15, 2025",
      readTime: "4 min read", 
      image: "/api/placeholder/400/300",
      category: "Health",
    },
    {
      id: 5,
      title: "Boost Your Self-Esteem",
      author: "Mental Health Team",
      date: "Jun 10, 2025",
      readTime: "5 min read",
      image: "/api/placeholder/400/300", 
      category: "Mental Health",
    },
    {
      id: 6,
      title: "Smart Savings for Teens",
      author: "Financial Team",
      date: "Jun 5, 2025",
      readTime: "6 min read",
      image: "/api/placeholder/400/300",
      category: "Finance",
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white font-display overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-100 min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 transform rotate-45 opacity-20"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-800 rounded-full opacity-15"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-64 bg-red-300 opacity-25 transform -rotate-12"></div>
          <div className="absolute bottom-20 right-1/3 w-40 h-20 bg-gray-600 opacity-20 transform rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-8 bg-red-50 transform -skew-y-3 -rotate-1 opacity-60"></div>
              
              <div className="relative z-10 py-12 px-8">
                <div className="bg-red-500 text-white px-6 py-3 inline-block mb-8 font-black text-lg transform -rotate-1 shadow-lg">
                  EMPOWER YOURSELF
                </div>
                
                <h1 className="text-6xl xl:text-8xl font-black text-gray-900 leading-none mb-6 tracking-tight">
                  BOOK YOURSELF
                  <span className="block text-red-500 transform translate-x-4">THE ULTIMATE</span>
                  <span className="block text-gray-900 transform -translate-x-2">CITIZEN</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-lg font-semibold">
                  Kenya's most powerful civic education platform. Join 10,000+ teens building constitutional knowledge and leadership excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/articles"
                    className="bg-red-500 hover:bg-red-600 text-white font-black py-5 px-10 text-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 inline-flex items-center shadow-xl border-4 border-red-500"
                  >
                    EXPLORE
                    <HiArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Featured Card */}
            <div className="relative">
              <div 
                className="relative bg-white border-4 border-gray-300 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500"
                style={{ transform: `rotate(2deg) translateY(${scrollY * -0.1}px)` }}
              >
                <div className="relative h-80">
                  <img
                    src="/api/placeholder/500/320"
                    alt="Featured Story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-500 text-white px-4 py-2 font-black text-sm">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                      THE BOYLAN SISTERS: Constitutional Champions
                    </h3>
                    <p className="text-white/90 font-semibold">
                      Meet the dynamic duo revolutionizing civic education...
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-red-500 opacity-30 transform rotate-45"
                style={{ transform: `rotate(45deg) translateY(${scrollY * 0.2}px)` }}
              ></div>
              
              <div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-900 opacity-20 rounded-full"
                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
              ></div>
              
              <div 
                className="absolute top-1/2 -right-4 w-6 h-40 bg-red-400 opacity-40 transform -rotate-12"
                style={{ transform: `rotate(-12deg) translateY(${scrollY * 0.3}px)` }}
              ></div>

              {/* Action Cards */}
              <div className="absolute -bottom-16 -right-8 grid grid-cols-2 gap-4 opacity-80">
                <div className="bg-red-500 text-white p-4 text-center transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <HiAcademicCap className="h-8 w-8 mx-auto mb-2" />
                  <span className="font-black text-sm">LEARN</span>
                </div>
                <div className="bg-gray-900 text-white p-4 text-center transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <HiUsers className="h-8 w-8 mx-auto mb-2" />
                  <span className="font-black text-sm">CONNECT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gray-50 transform skew-y-1 origin-top-left"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-red-500 text-white p-8 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-xl">
              <div className="bg-white text-red-500 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform rotate-45">
                <HiAcademicCap className="h-8 w-8 transform -rotate-45" />
              </div>
              <h3 className="font-black text-xl mb-3">LEARN</h3>
              <p className="font-bold">Master Constitutional Knowledge</p>
            </div>
            
            <div className="bg-white border-4 border-red-500 text-red-500 p-8 text-center transform hover:scale-110 hover:-rotate-3 transition-all duration-500 shadow-xl">
              <div className="bg-red-500 text-white w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <HiUsers className="h-8 w-8" />
              </div>
              <h3 className="font-black text-xl mb-3">CONNECT</h3>
              <p className="font-bold text-gray-700">Join Fellow Young Leaders</p>
            </div>
            
            <div className="bg-gray-900 text-white p-8 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-xl">
              <div className="bg-red-500 w-16 h-16 mx-auto mb-6 flex items-center justify-center transform -rotate-12">
                <HiStar className="h-8 w-8" />
              </div>
              <h3 className="font-black text-xl mb-3">ACHIEVE</h3>
              <p className="font-bold">Unlock Your Potential</p>
            </div>
            
            <div className="bg-white border-4 border-gray-900 text-gray-900 p-8 text-center transform hover:scale-110 hover:-rotate-3 transition-all duration-500 shadow-xl">
              <div className="bg-yellow-400 text-gray-900 w-16 h-16 mx-auto mb-6 flex items-center justify-center font-black text-3xl">
                🏆
              </div>
              <h3 className="font-black text-xl mb-3">WIN</h3>
              <p className="font-bold">Teendom Awards Glory</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="absolute top-20 right-20 w-40 h-40 border-8 border-red-200 transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-100 transform -rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl xl:text-8xl font-black text-gray-900 mb-8 tracking-tight">
                ABOUT <span className="text-red-500 transform inline-block rotate-2">TEENDOM</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-bold">
                BUILDING KENYA'S NEXT GENERATION OF CONSTITUTIONAL CHAMPIONS
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-red-50 transform skew-y-2 rotate-1"></div>
                
                <div className="relative bg-white border-l-8 border-red-500 p-12 shadow-xl">
                  <h3 className="text-4xl font-black text-gray-900 mb-8">
                    YOUNG CITIZENS PROGRAM
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg font-semibold">
                    Transform constitutional knowledge into real power. Our 20-module program makes law accessible, engaging, and actionable for Kenya's youth.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Constitutional Rights & Responsibilities",
                      "Active Citizenship Development", 
                      "Leadership Excellence Training",
                      "Community Impact Projects",
                      "Civic Engagement Mastery"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-4 border-l-4 border-red-500 transform hover:translate-x-2 transition-transform duration-300">
                        <div className="w-6 h-6 bg-red-500 mr-4 transform rotate-45"></div>
                        <span className="text-gray-900 font-bold">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white border-4 border-gray-200 p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/api/placeholder/400/300"
                    alt="Young Citizens Program"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white transform -skew-y-1 origin-bottom-right opacity-60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl xl:text-8xl font-black text-gray-900 mb-8">
                FEATURED <span className="text-red-500">STORIES</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-bold">
                REAL TEENS. REAL IMPACT. REAL CHANGE.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="group relative bg-white border-4 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:border-red-500 hover:scale-105"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-4 py-2 font-black text-sm transform -rotate-2">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-black text-lg text-gray-900 mb-4 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-2 font-bold">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-red-500 text-white p-2 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiArrowRight className="h-4 w-4 transform -rotate-45" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/articles"
                className="bg-red-500 hover:bg-red-600 text-white font-black py-6 px-12 text-xl transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-2xl border-4 border-red-500"
              >
                EXPLORE ALL STORIES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-red-500/30 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500/20 transform -rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl xl:text-7xl font-black mb-8">
            READY TO CHANGE <span className="text-red-500">KENYA</span>?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto font-bold">
            Join 10,000+ young Kenyans building the future through active citizenship and constitutional knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a
              href="mailto:info@teendom.africa"
              className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-black py-6 px-12 text-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-1 shadow-xl"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/teendom.png" 
                  alt="Teendom"
                  className="h-12 w-12"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h3 className="text-3xl font-black text-red-500">TEENDOM</h3>
              </div>
              <p className="text-gray-400 font-semibold leading-relaxed">
                Empowering young citizens through constitutional education, leadership training, and community engagement across Kenya.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">NAVIGATION</h4>
              <ul className="space-y-3 text-gray-400 font-bold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/articles" className="hover:text-white transition-colors">Young Citizens</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">PROGRAMS</h4>
              <ul className="space-y-3 text-gray-400 font-bold">
                <li>Young Citizens Program</li>
                <li>Leadership Training</li>
                <li>Community Outreach</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">CONTACT</h4>
              <ul className="space-y-3 text-gray-400 font-bold">
                <li>info@teendom.africa</li>
                <li>+254 742 862 080</li>
                <li>@teendom.africa</li>
                <li>@teendomafrica</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 font-bold">© 2025 TEENDOM AFRICA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
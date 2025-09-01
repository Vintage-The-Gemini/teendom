import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiStar, HiUsers, HiAcademicCap } from "react-icons/hi";

function HomePage() {
  const featuredArticles = [
    {
      id: 1,
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      image: "/src/assets/articles/acne/acne1.jpg",
      category: "Health",
    },
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      image: "/src/assets/articles/boylan/babylon-sisters-cover.jpg",
      category: "Leadership",
    },
    {
      id: 3,
      title: "TEEN CEO: Building Your Empire",
      author: "Business Team",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      image: "/src/assets/articles/teen-ceo/Teen-ceo-primary.JPG",
      category: "Business",
    },
    {
      id: 4,
      title: "Body Odour Solutions for Teens",
      author: "Health Team",
      date: "Jun 15, 2025",
      readTime: "4 min read",
      image: "/src/assets/articles/body-oduor/body-oduor-1.jpg",
      category: "Health",
    },
    {
      id: 5,
      title: "Boost Your Self-Esteem",
      author: "Mental Health Team",
      date: "Jun 10, 2025",
      readTime: "5 min read",
      image: "/src/assets/articles/self-esteem/self-esteem1.jpg",
      category: "Mental Health",
    },
    {
      id: 6,
      title: "Smart Savings for Teens",
      author: "Financial Team",
      date: "Jun 5, 2025",
      readTime: "6 min read",
      image: "/src/assets/articles/savings/savings-primary.jpg",
      category: "Finance",
    }
  ];

  const stats = [
    { icon: HiUsers, number: "10,000+", label: "Young Citizens Reached" },
    { icon: HiAcademicCap, number: "20", label: "Learning Modules" },
    { icon: HiStar, number: "15+", label: "Partner Schools" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section - Inspired by Adventure Website */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            {/* Left Side - Text Content */}
            <div className="relative z-10">
              <div className="bg-red-500 text-white px-6 py-3 rounded-none inline-block mb-6 font-black text-lg transform -rotate-2">
                EMPOWERING TEENS
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none mb-8">
                BUILD YOURSELF
                <span className="block text-red-500">THE ULTIMATE</span>
                <span className="block text-gray-900">CITIZEN</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-md font-semibold">
                Kenya's #1 youth civic education platform. Join thousands of teens building leadership skills and constitutional knowledge.
              </p>
              
              <Link
                to="/articles"
                className="bg-red-500 hover:bg-red-600 text-white font-black py-4 px-8 rounded-none text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
              >
                EXPLORE
                <HiArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>

            {/* Right Side - Featured Article Card */}
            <div className="relative">
              {/* Main Featured Card */}
              <div className="bg-white border-4 border-gray-200 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative">
                  <img
                    src="/src/assets/articles/boylan/babylon-sisters-cover.jpg"
                    alt="Featured Article"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-none font-black">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    THE BOYLAN SISTERS: Constitutional Champions
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    Meet the dynamic duo making waves in constitutional education...
                  </p>
                </div>
              </div>

              {/* Floating Elements - No Gradients */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-500 opacity-20 transform rotate-45"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-900 opacity-15 rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-32 bg-red-500 opacity-25"></div>
            </div>
          </div>
        </div>

        {/* Background Pattern Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-red-200 opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-red-100 transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-40 bg-red-300 opacity-40 transform rotate-45"></div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-red-500 text-white p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <HiAcademicCap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-black text-xl mb-2">LEARN</h3>
              <p className="font-semibold">Constitutional Knowledge</p>
            </div>
            
            <div className="bg-white border-4 border-red-500 p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <HiUsers className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <h3 className="font-black text-xl mb-2 text-gray-900">CONNECT</h3>
              <p className="font-semibold text-gray-700">With Fellow Teens</p>
            </div>
            
            <div className="bg-gray-900 text-white p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <HiStar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-black text-xl mb-2">ACHIEVE</h3>
              <p className="font-semibold">Leadership Goals</p>
            </div>
            
            <div className="bg-white border-4 border-gray-900 p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 mx-auto mb-4 bg-red-500 text-white flex items-center justify-center font-black text-2xl">
                🏆
              </div>
              <h3 className="font-black text-xl mb-2 text-gray-900">WIN</h3>
              <p className="font-semibold text-gray-700">Teendom Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
                ABOUT <span className="text-red-500">TEENDOM</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-bold">
                BUILDING THE NEXT GENERATION OF KENYAN LEADERS
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-red-50 p-12 border-l-8 border-red-500">
                <h3 className="text-4xl font-black text-gray-900 mb-8">
                  YOUNG CITIZENS PROGRAM
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
                  Based on "Teens Guide to the Constitution of Kenya" - we're making law accessible through 20 comprehensive modules.
                </p>
                <div className="space-y-4">
                  {[
                    "Teens, the Law & Society",
                    "Citizenship & Personal Development",
                    "Leadership and Volunteerism",
                    "Human Rights & Children Participation",
                    "Government and Public Service"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center bg-white p-4 border-l-4 border-red-500">
                      <div className="w-4 h-4 bg-red-500 mr-4"></div>
                      <span className="text-gray-800 font-bold">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white border-4 border-gray-200 p-8 shadow-2xl transform -rotate-2">
                  <img 
                    src="/src/assets/articles/section-logos/YCP-Primary-Logo.jpg"
                    alt="Young Citizens Program"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-500">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                <div className="bg-white text-red-500 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-12 w-12" />
                </div>
                <div className="text-5xl font-black mb-4">{stat.number}</div>
                <div className="text-xl font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
                FEATURED <span className="text-red-500">STORIES</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-bold">
                REAL STORIES. REAL IMPACT. REAL TEENS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="group bg-white border-4 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:border-red-500"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-4 py-2 font-black text-sm">
                        {article.category}
                      </span>
                    </div>
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
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/articles"
                className="bg-red-500 hover:bg-red-600 text-white font-black py-6 px-12 text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                READ ALL STORIES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            READY TO MAKE A <span className="text-red-500">DIFFERENCE</span>?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto font-semibold">
            Join thousands of young Kenyans who are already part of the movement 
            towards active citizenship and positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/awards"
              className="bg-red-500 hover:bg-red-600 text-white font-black py-6 px-12 text-xl transition-all duration-300 transform hover:scale-110"
            >
              NOMINATE FOR AWARDS
            </Link>
            <a
              href="mailto:info@teendom.africa"
              className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-black py-6 px-12 text-xl transition-all duration-300 transform hover:scale-110"
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
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/teendom.png" 
                  alt="Teendom" 
                  className="h-12 w-12"
                />
                <h3 className="text-3xl font-black text-red-500">TEENDOM</h3>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed">
                Empowering young citizens through education, leadership, and community engagement across Kenya.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">QUICK LINKS</h4>
              <ul className="space-y-3 text-gray-400 font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/articles" className="hover:text-white transition-colors">Young Citizens</Link></li>
                <li><Link to="/awards" className="hover:text-white transition-colors">Awards</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">PROGRAMS</h4>
              <ul className="space-y-3 text-gray-400 font-semibold">
                <li>Young Citizens Program</li>
                <li>Teendom Awards</li>
                <li>Leadership Training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xl mb-6 text-red-400">CONTACT</h4>
              <ul className="space-y-3 text-gray-400 font-semibold">
                <li>info@teendom.africa</li>
                <li>0742 862 080</li>
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
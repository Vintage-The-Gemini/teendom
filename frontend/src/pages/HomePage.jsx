// File Path: frontend/src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiTrendingUp, HiStar, HiLightningBolt } from "react-icons/hi";
import ConnectionTest from "../components/ConnectionTest";

function HomePage() {
  const featuredArticles = [
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      category: "Leadership",
      image: "/images/articles/boylan/babylon-sisters-cover.jpg",
      excerpt: "Meet the dynamic advocates revolutionizing constitutional education among Kenyan youth through innovative programs."
    },
    {
      id: 1,
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui", 
      date: "Jun 29, 2025",
      readTime: "5 min read",
      category: "Health",
      image: "/images/articles/acne/acne1.jpg",
      excerpt: "Understanding causes, treatment options, and prevention methods to navigate this challenging period with confidence."
    },
    {
      id: 3,
      title: "TEEN CEO: Building Your Business Empire",
      author: "Business Team",
      date: "Jun 20, 2025", 
      readTime: "6 min read",
      category: "Business",
      image: "/images/articles/teen ceo/Teen ceo primary.JPG",
      excerpt: "Inspiring stories of young entrepreneurs and practical steps to start your own business as a teenager."
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      {/* Temporary Connection Test - Remove after testing */}
      <ConnectionTest />
      
      {/* Hero Section with YCP Images Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image Grid */}
        <div className="absolute inset-0">
          {/* Main grid of YCP images */}
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-1 h-full opacity-60">
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp1.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp2.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp3.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp4.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp5.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp6.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp7.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp8.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp9.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp10.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp11.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp13.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp14.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp15.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/FB_IMG_1742281990383.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/FB_IMG_1742281995656.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp books.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/ycp teen guide.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/UNADJUSTEDNONRAW_thumb_65.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/UNADJUSTEDNONRAW_thumb_6e.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/UNADJUSTEDNONRAW_thumb_70.jpg)'}}></div>
            <div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/YCP/UNADJUSTEDNONRAW_thumb_71.jpg)'}}></div>
          </div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
                  EMPOWERING
                  <span className="block text-red-500">YOUNG VOICES</span>
                  <span className="block text-white">ACROSS AFRICA</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl leading-relaxed">
                  Teendom Africa is dedicated to developing active citizenship through storytelling, recognition, and community building for the next generation of African leaders.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/articles" 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  EXPLORE STORIES
                  <HiArrowRight className="ml-3 h-5 w-5" />
                </Link>
                <Link 
                  to="/awards" 
                  className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-30 inline-flex items-center justify-center"
                >
                  JOIN AWARDS
                  <HiStar className="ml-3 h-5 w-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-600">
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">500+</div>
                  <div className="text-sm font-bold text-gray-400">YOUNG VOICES</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">50+</div>
                  <div className="text-sm font-bold text-gray-400">STORIES SHARED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-red-500">10</div>
                  <div className="text-sm font-bold text-gray-400">AWARD CATEGORIES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teendom Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
              ABOUT <span className="text-red-500">TEENDOM AFRICA</span>
            </h2>
            <div className="space-y-6 text-lg font-medium text-gray-700 leading-relaxed">
              <p>
                Teendom Africa focuses on developing an active citizenry and providing teenagers and young adults with the tools and skills they need to develop into whole and active adults. We do this by providing information, training and platforms for conversations on the many issues that affect them, including on health, leadership, education and career.
              </p>
              <p>
                Our flagship program, the <strong>Young Citizens Program (YCP)</strong>, is offered both online and through schools and other youth organizations. Our anchor has been the book, 'Teens Guide to the Constitution of Kenya' which we use to promote law-related and constitutional information amongst young people.
              </p>
              <p>
                Through the <strong>Teendom Awards</strong>, we celebrate and recognize teenagers who are making exceptional contributions to their communities, giving them the visibility and support they deserve while inspiring others to follow their lead.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <HiLightningBolt className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  To empower young Africans with the knowledge, skills, and platforms they need to become active, informed citizens and leaders in their communities.
                </p>
              </div>
              
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <HiStar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  A generation of empowered, engaged, and educated young Africans who are actively shaping the future of their communities and continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              LATEST <span className="text-red-500">STORIES</span>
            </h2>
            <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories, expert advice, and insights for young changemakers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const colors = {
                        'Health': '#10B981',
                        'Leadership': '#EF4444', 
                        'Business': '#8B5CF6'
                      };
                      const bgColor = colors[article.category] || '#6B7280';
                      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">${article.category}</text></svg>`;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 font-bold text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight hover:text-red-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-bold text-gray-500">
                      {article.author} • {article.date}
                    </div>
                    <div className="font-black text-red-500">
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/articles" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              VIEW ALL STORIES
              <HiArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            READY TO MAKE AN IMPACT?
          </h2>
          <p className="text-xl font-medium text-red-100 max-w-2xl mx-auto mb-8">
            Join the movement of young changemakers shaping Africa's future
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/awards/nominate" 
              className="bg-white hover:bg-gray-100 text-red-500 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              NOMINATE A TEEN
              <HiStar className="ml-3 h-5 w-5" />
            </Link>
            <Link 
              to="/articles" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              SHARE YOUR STORY
              <HiTrendingUp className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
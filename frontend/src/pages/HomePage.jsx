// File Path: frontend/src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiTrendingUp, HiStar, HiLightningBolt } from "react-icons/hi";

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
      
      {/* Hero Section with YCP Images Background - More Responsive */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image Grid - More Visible */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1 h-full opacity-40">
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
          
          {/* Lighter overlay to make images more visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
        </div>

        {/* Hero Content - Responsive Text Sizes */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="max-w-4xl">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                {/* Much more responsive text sizes */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  EMPOWERING
                  <span className="block text-red-500">YOUNG VOICES</span>
                  <span className="block text-white">ACROSS AFRICA</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300 max-w-3xl leading-relaxed">
                  Teendom Africa is dedicated to developing active citizenship through storytelling, recognition, and community building for the next generation of African leaders.
                </p>
              </div>

              {/* Responsive Button Layout */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a 
                  href="https://teendom-awards.onrender.com" 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  EXPLORE AWARDS
                  <HiStar className="ml-3 h-5 w-5" />
                </a>
                <Link 
                  to="/articles" 
                  className="bg-white hover:bg-gray-100 text-red-500 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  READ STORIES
                  <HiTrendingUp className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Impact Stats - Responsive */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 mb-2">1000+</div>
              <div className="text-sm sm:text-base font-bold text-gray-700">Young Leaders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 mb-2">10</div>
              <div className="text-sm sm:text-base font-bold text-gray-700">Award Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 mb-2">50+</div>
              <div className="text-sm sm:text-base font-bold text-gray-700">Amazing Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-red-500 mb-2">2025</div>
              <div className="text-sm sm:text-base font-bold text-gray-700">Awards Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Responsive Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              FEATURED STORIES
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-600 max-w-3xl mx-auto">
              Discover inspiring journeys of young changemakers across Africa
            </p>
          </div>

          {/* Responsive Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/article/${article.id}`} 
                className="article-card"
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 sm:h-56 object-cover"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23ef4444"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">${article.category}</text></svg>`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold tracking-wider">
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4 leading-relaxed text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
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
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              VIEW ALL STORIES
              <HiArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Responsive */}
      <section className="py-12 md:py-20 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">
            READY TO MAKE AN IMPACT?
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-red-100 max-w-2xl mx-auto mb-6 md:mb-8">
            Join the movement of young changemakers shaping Africa's future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://teendom-awards.onrender.com/nominate" 
              className="bg-white hover:bg-gray-100 text-red-500 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              NOMINATE A TEEN
              <HiStar className="ml-3 h-5 w-5" />
            </a>
            <Link 
              to="/articles" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
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
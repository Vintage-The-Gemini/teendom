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

  const categories = [
    { name: "BUSINESS", count: 12, color: "bg-purple-500" },
    { name: "MONEY", count: 8, color: "bg-green-500" },
    { name: "SELF-CARE", count: 15, color: "bg-blue-500" },
    { name: "RELATIONSHIPS", count: 6, color: "bg-pink-500" },
    { name: "LIFESTYLE", count: 10, color: "bg-orange-500" },
    { name: "HEALTH", count: 9, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - NO GRADIENTS */}
      <section className="relative bg-black text-white section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-mega text-white leading-none">
                  TEENAGE
                  <span className="block text-red-500">VOICES</span>
                  <span className="block text-white">MATTER</span>
                </h1>
                <p className="text-xl font-medium text-gray-300 max-w-lg leading-relaxed">
                  Empowering young Africans with stories, opportunities, and platforms that shape the future. 
                  Your voice, your platform, your time to shine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/articles" className="btn-primary">
                  READ STORIES
                  <HiArrowRight className="ml-3" />
                </Link>
                <Link to="/awards/nominate" className="btn-secondary">
                  GET NOMINATED
                  <HiTrendingUp className="ml-3" />
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/hero/hero-teens.jpg" 
                  alt="Young African Leaders"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23EF4444"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="32" font-weight="bold">TEENDOM</text><text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20">YOUNG VOICES</text><text x="50%" y="70%" text-anchor="middle" fill="white" font-size="16">INSPIRING STORIES</text></svg>`;
                  }}
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-6">EXPLORE BY CATEGORY</h2>
            <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
              Discover content tailored to your interests and passions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/articles?category=${category.name.toLowerCase()}`}
                className="modern-card p-8 text-center hover-tilt"
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                  <HiLightningBolt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 font-bold mb-4">{category.count} Articles</p>
                <div className="inline-flex items-center text-red-500 font-black">
                  EXPLORE <HiArrowRight className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section text-gray-900 mb-6">
              FEATURED <span className="text-red-500">STORIES</span>
            </h2>
            <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
              Read the most inspiring stories from young African changemakers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="article-card group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const colors = {
                        'Health': '#10B981',
                        'Leadership': '#EF4444', 
                        'Business': '#8B5CF6',
                        'Mental Health': '#6366F1',
                        'Finance': '#059669',
                        'Beauty': '#EC4899',
                        'Social': '#14B8A6'
                      };
                      const bgColor = colors[article.category] || '#6B7280';
                      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">${article.category}</text></svg>`;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`category-badge category-${article.category.toLowerCase()}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-gray-500">
                      {article.author} • {article.readTime}
                    </div>
                    <div className="text-red-500 font-black">
                      READ MORE →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/articles" className="btn-primary">
              VIEW ALL ARTICLES
            </Link>
          </div>
        </div>
      </section>

      {/* Awards CTA Section */}
      <section className="section-spacing bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-hero text-white mb-8">
              READY TO BE
              <span className="block text-red-500">RECOGNIZED?</span>
            </h2>
            <p className="text-xl font-medium text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              The Teendom Awards celebrate exceptional young Africans making a difference. 
              Submit your nomination today and join the community of changemakers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/awards" className="btn-primary">
                VIEW AWARDS
                <HiStar className="ml-3" />
              </Link>
              <Link to="/awards/nominate" className="btn-secondary">
                NOMINATE NOW
                <HiTrendingUp className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
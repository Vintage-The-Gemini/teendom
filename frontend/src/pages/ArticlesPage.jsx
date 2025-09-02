// File Path: frontend/src/pages/ArticlesPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiFilter, HiTrendingUp } from "react-icons/hi";

function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      image: "/images/articles/acne/acne1.jpg",
      category: "Health",
      excerpt: "Understanding and managing acne during teenage years - a comprehensive guide for young men."
    },
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      image: "/images/articles/boylan/babylon-sisters-cover.jpg",
      category: "Leadership",
      excerpt: "Meet the dynamic duo making waves in constitutional education and youth empowerment across Kenya."
    },
    {
      id: 3,
      title: "Teen CEO: Building Your Business Empire",
      author: "Business Team",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      image: "/images/articles/teen-ceo/Teen-ceo-primary.jpg",
      category: "Business",
      excerpt: "Young entrepreneurs share their journey from idea to successful business ventures."
    },
    {
      id: 4,
      title: "Body Odour: A Teen's Guide to Confidence",
      author: "Health Team",
      date: "Jun 15, 2025",
      readTime: "4 min read",
      image: "/images/articles/body-oduor/body-oduor-1.jpg",
      category: "Health",
      excerpt: "Practical tips and solutions for managing body odour during teenage years."
    },
    {
      id: 5,
      title: "Boost Your Self-Esteem",
      author: "Mental Health Team",
      date: "Jun 10, 2025",
      readTime: "5 min read",
      image: "/images/articles/self-esteem/self-esteem1.jpg",
      category: "Mental Health",
      excerpt: "Building confidence and self-worth during the challenging teenage years."
    },
    {
      id: 6,
      title: "Smart Savings for Teens",
      author: "Financial Team",
      date: "Jun 5, 2025",
      readTime: "6 min read",
      image: "/images/articles/savings/savings-primary.jpg",
      category: "Finance",
      excerpt: "Learn how to manage money, save effectively, and build financial literacy as a teenager."
    },
    {
      id: 7,
      title: "Hair Maintenance for Teens",
      author: "Beauty Team",
      date: "May 30, 2025",
      readTime: "4 min read",
      image: "/images/articles/hair-maintainence/Hair-maintainence-primary.jpg",
      category: "Beauty",
      excerpt: "Complete guide to healthy hair care routines for teenagers of all hair types."
    },
    {
      id: 8,
      title: "Bully Proof: Standing Strong",
      author: "Social Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      image: "/images/articles/bully/bully-image-1.jpg",
      category: "Social",
      excerpt: "Strategies for dealing with bullying and building resilience in social situations."
    }
  ];

  const categories = ["All", "Health", "Leadership", "Business", "Mental Health", "Finance", "Beauty", "Social"];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-red-500 text-2xl font-black tracking-wider">
              TEENDOM
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white font-bold hover:text-red-500 transition-colors">
                HOME
              </Link>
              <Link to="/young-citizens" className="text-red-500 font-black border-b-2 border-red-500 pb-1">
                YOUNG CITIZENS
              </Link>
              <Link to="/awards" className="text-white font-bold hover:text-red-500 transition-colors">
                AWARDS
              </Link>
            </div>
            <div className="bg-red-500 p-2 rounded">
              <div className="w-6 h-6 text-white">👤</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section - NO GRADIENTS */}
      <section className="bg-black text-white section-spacing relative overflow-hidden">
        {/* Simple geometric shapes - no gradients */}
        <div className="absolute top-10 left-20 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-float-gentle"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-white rounded-2xl opacity-20 animate-pulse transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-hero text-white mb-8 leading-none">
              YOUNG CITIZENS
              <span className="block text-red-500">HUB</span>
            </h1>
            <p className="text-2xl font-bold text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Real stories. Real solutions. Real impact from young African voices shaping the future.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">50+</div>
                <div className="text-sm font-bold text-gray-400">ARTICLES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">25K+</div>
                <div className="text-sm font-bold text-gray-400">READERS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">8</div>
                <div className="text-sm font-bold text-gray-400">CATEGORIES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-2">100+</div>
                <div className="text-sm font-bold text-gray-400">CONTRIBUTORS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50 border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search for inspiring stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-red-500 focus:border-red-500 text-lg font-bold shadow-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-lg border-2 border-gray-200">
                <HiFilter className="text-red-500 h-6 w-6" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border-2 border-red-500 rounded-xl focus:ring-4 focus:ring-red-500 focus:border-red-500 font-black text-gray-700 bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-gray-600">
                Showing <span className="text-red-500 font-black">{filteredArticles.length}</span> amazing stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                <HiSearch className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-4xl font-black text-gray-600 mb-6">NO STORIES FOUND</h3>
              <p className="text-xl text-gray-500 font-medium max-w-md mx-auto">
                Try different search terms or explore other categories to find inspiring content.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="btn-primary mt-8"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <>
              {/* Featured Article (First Article) */}
              {filteredArticles.length > 0 && (
                <div className="mb-20">
                  <h2 className="text-section text-gray-900 mb-12 text-center">
                    OUR FEATURED <span className="text-red-500">POST</span>
                  </h2>
                  
                  <Link 
                    to={`/article/${filteredArticles[0].id}`}
                    className="block max-w-6xl mx-auto modern-card overflow-hidden hover-lift group"
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-96 lg:h-auto overflow-hidden">
                        <img 
                          src={filteredArticles[0].image} 
                          alt={filteredArticles[0].title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-3"
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
                            const bgColor = colors[filteredArticles[0].category] || '#6B7280';
                            e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="32" font-weight="bold">TEENDOM</text><text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20">FEATURED POST</text><text x="50%" y="70%" text-anchor="middle" fill="white" font-size="16">${filteredArticles[0].category}</text></svg>`;
                          }}
                        />
                        <div className="absolute top-6 left-6">
                          <span className={`category-badge category-${filteredArticles[0].category.toLowerCase().replace(' ', '-')}`}>
                            {filteredArticles[0].category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-12 flex flex-col justify-center">
                        <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight hover:text-red-500 transition-colors">
                          {filteredArticles[0].title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 mb-8 leading-relaxed">
                          {filteredArticles[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-bold text-gray-500">
                            {filteredArticles[0].author} • {filteredArticles[0].date} • {filteredArticles[0].readTime}
                          </div>
                          <div className="inline-flex items-center text-red-500 font-black">
                            READ MORE <HiTrendingUp className="ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.slice(1).map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="article-card hover-tilt group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 p-2"
                        onError={(e) => {
                          // Create a solid color fallback based on category
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
                        <span className={`category-badge category-${article.category.toLowerCase().replace(' ', '-')}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-red-500 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-gray-500">
                          {article.author} • {article.readTime}
                        </div>
                        <div className="text-red-500 font-black text-sm">
                          READ →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-16">
                <button className="btn-primary text-xl shadow-2xl transform hover:rotate-1">
                  LOAD MORE STORIES
                  <HiTrendingUp className="ml-3" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-spacing bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-hero text-white mb-8">
            STAY <span className="text-red-500">CONNECTED</span>
          </h2>
          <p className="text-xl font-medium text-gray-300 mb-12 max-w-2xl mx-auto">
            Get the latest stories and updates from young African changemakers delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email..."
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-700 bg-gray-800 text-white font-bold focus:ring-4 focus:ring-red-500 focus:border-red-500"
            />
            <button className="btn-primary whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black text-red-500 mb-6">TEENDOM</h3>
              <p className="text-gray-300 font-medium leading-relaxed max-w-md">
                Empowering young African voices through storytelling, recognition, and community building. 
                Your platform for growth and inspiration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-black text-white mb-6">EXPLORE</h4>
              <ul className="space-y-3">
                <li><Link to="/articles" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Articles</Link></li>
                <li><Link to="/awards" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Awards</Link></li>
                <li><Link to="/young-citizens" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Young Citizens</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-red-500 font-medium transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-black text-white mb-6">CONNECT</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 font-medium transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-500 font-medium transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400 font-medium">
              © 2025 TEENDOM AFRICA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ArticlesPage;
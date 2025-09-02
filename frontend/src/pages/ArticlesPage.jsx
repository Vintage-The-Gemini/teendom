// File Path: frontend/src/pages/ArticlesPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiFilter } from "react-icons/hi";

function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Complete articles data - ensuring all articles have complete information
  const articles = [
    {
      id: 1,
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      image: "/images/articles/acne/acne1.jpg",
      category: "Health",
      excerpt: "Understanding causes, treatment options, and prevention methods to navigate this challenging period with confidence."
    },
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      image: "/images/articles/boylan/babylon-sisters-cover.jpg",
      category: "Leadership",
      excerpt: "Meet the dynamic advocates revolutionizing constitutional education among Kenyan youth through innovative programs."
    },
    {
      id: 3,
      title: "TEEN CEO: Building Your Business Empire",
      author: "Business Team",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      image: "/images/articles/teen ceo/Teen ceo primary.JPG",
      category: "Business",
      excerpt: "Inspiring stories of young entrepreneurs and practical steps to start your own business as a teenager."
    },
    {
      id: 4,
      title: "Mental Health Matters for Teens",
      author: "Dr. Sarah Wanjiku",
      date: "Jun 15, 2025",
      readTime: "8 min read",
      image: "/images/articles/mental-health/mental-health-primary.jpg",
      category: "Mental Health",
      excerpt: "Breaking the stigma around mental health and providing resources for teenage mental wellness."
    },
    {
      id: 5,
      title: "Financial Literacy for Young Adults",
      author: "Finance Team",
      date: "Jun 10, 2025",
      readTime: "6 min read",
      image: "/images/articles/finance/financial-literacy-teens.jpg",
      category: "Finance",
      excerpt: "Essential money management skills every teenager should learn before becoming an adult."
    },
    {
      id: 6,
      title: "Hair Maintenance for Teens",
      author: "Beauty Team",
      date: "May 30, 2025",
      readTime: "4 min read",
      image: "/images/articles/hair maintainence/Hair-maintainence-primary.jpg",
      category: "Beauty",
      excerpt: "Complete guide to healthy hair care routines for teenagers of all hair types."
    },
    {
      id: 7,
      title: "Bully Proof: Standing Strong",
      author: "Social Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      image: "/images/articles/bully/bully-image-1.jpg",
      category: "Social",
      excerpt: "Strategies for dealing with bullying and building resilience in social situations."
    },
    {
      id: 8,
      title: "Climate Action Heroes: Teen Environmental Leaders",
      author: "Environment Team",
      date: "May 20, 2025",
      readTime: "9 min read",
      image: "/images/articles/environment/climate-action-teens.jpg",
      category: "Environment",
      excerpt: "Young environmental activists making a difference in climate change awareness and action."
    }
  ];

  // Enhanced categories with proper counts
  const categories = [
    { name: "All", count: articles.length, color: "bg-gray-500" },
    { name: "Health", count: articles.filter(a => a.category === "Health").length, color: "bg-green-500" },
    { name: "Leadership", count: articles.filter(a => a.category === "Leadership").length, color: "bg-red-500" },
    { name: "Business", count: articles.filter(a => a.category === "Business").length, color: "bg-purple-500" },
    { name: "Mental Health", count: articles.filter(a => a.category === "Mental Health").length, color: "bg-blue-500" },
    { name: "Finance", count: articles.filter(a => a.category === "Finance").length, color: "bg-emerald-500" },
    { name: "Beauty", count: articles.filter(a => a.category === "Beauty").length, color: "bg-pink-500" },
    { name: "Social", count: articles.filter(a => a.category === "Social").length, color: "bg-teal-500" },
    { name: "Environment", count: articles.filter(a => a.category === "Environment").length, color: "bg-indigo-500" }
  ];

  // Filter articles based on category and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-8">
              AMAZING
              <span className="block text-red-500">STORIES</span>
              <span className="block text-white">FOR YOU</span>
            </h1>
            <p className="text-xl font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring tales, expert advice, and game-changing insights for young changemakers across Kenya.
              Every story has the power to transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category.name 
                    ? `${category.color} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  {selectedCategory === "All" ? "ALL" : selectedCategory.toUpperCase()} 
                  <span className="text-red-500"> STORIES</span>
                </h2>
                <p className="text-gray-600 font-medium">
                  Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link 
                    key={article.id}
                    to={`/article/${article.id}`} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                  >
                    <div className="aspect-w-16 aspect-h-10 relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Enhanced fallback placeholder with proper category colors
                          const categoryColors = {
                            Health: '#10B981',
                            Leadership: '#EF4444',
                            Business: '#8B5CF6',
                            'Mental Health': '#3B82F6',
                            Finance: '#059669',
                            Beauty: '#EC4899',
                            Social: '#0D9488',
                            Environment: '#6366F1'
                          };
                          const bgColor = categoryColors[article.category] || '#6B7280';
                          e.target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">${article.category}</text></svg>`)}`;
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold tracking-wider rounded-full">
                          {article.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight hover:text-red-500 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-4 leading-relaxed line-clamp-3">
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
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            GOT A STORY TO SHARE?
          </h2>
          <p className="text-xl text-white font-medium mb-8 max-w-2xl mx-auto">
            We're always looking for inspiring stories from young African leaders making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/awards/nominate"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              NOMINATE SOMEONE
            </Link>
            <a 
              href="mailto:stories@teendom.africa"
              className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white border-opacity-30"
            >
              SUBMIT YOUR STORY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlesPage;
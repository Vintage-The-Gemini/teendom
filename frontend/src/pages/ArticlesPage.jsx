// File Path: frontend/src/pages/ArticlesPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTrendingUp, HiLightningBolt } from "react-icons/hi";

function ArticlesPage() {
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
      image: "/images/articles/teen ceo/Teen ceo primary.JPG",
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
      title: "Smart Savings for Teens",
      author: "Linet Makenya",
      date: "Jun 5, 2025",
      readTime: "6 min read",
      image: "/images/articles/savings/savings primary.jpg",
      category: "Finance",
      excerpt: "Learn how to manage money, save effectively, and build financial literacy as a teenager."
    },
    {
      id: 6,
      title: "Boost Your Self-Esteem",
      author: "Mental Health Team",
      date: "Jun 10, 2025",
      readTime: "5 min read",
      image: "/images/articles/self-esteem/self-esteem1.jpg",
      category: "Mental Health",
      excerpt: "Building confidence and self-worth during the challenging teenage years."
    },
    {
      id: 7,
      title: "Hair Maintenance for Teens",
      author: "Beauty Team",
      date: "May 30, 2025",
      readTime: "4 min read",
      image: "/images/articles/hair maintainence/Hair-maintainence-primary.jpg",
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

  const categories = [
    { name: "All", count: articles.length, color: "bg-gray-500" },
    { name: "Health", count: 2, color: "bg-green-500" },
    { name: "Leadership", count: 1, color: "bg-red-500" },
    { name: "Business", count: 1, color: "bg-purple-500" },
    { name: "Mental Health", count: 1, color: "bg-blue-500" },
    { name: "Finance", count: 1, color: "bg-emerald-500" },
    { name: "Beauty", count: 1, color: "bg-pink-500" },
    { name: "Social", count: 1, color: "bg-teal-500" }
  ];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching HomePage Theme */}
      <section className="relative bg-black text-white section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-mega text-white leading-none mb-8">
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

      {/* Compact Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category.name 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              {filteredArticles.length} stories
              {selectedCategory !== "All" && (
                <span> in {selectedCategory}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                <HiLightningBolt className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-4xl font-black text-gray-600 mb-6">NO STORIES FOUND</h3>
              <p className="text-xl text-gray-500 font-medium max-w-md mx-auto">
                Try selecting a different category to find inspiring content.
              </p>
              <button 
                onClick={() => setSelectedCategory("All")}
                className="btn-primary mt-8"
              >
                VIEW ALL STORIES
              </button>
            </div>
          ) : (
            <>
              {/* Featured Article (First Article) */}
              {filteredArticles.length > 0 && (
                <div className="mb-20">
                  <h2 className="text-section text-gray-900 mb-12 text-center">
                    FEATURED <span className="text-red-500">STORY</span>
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
                            const bgColor = colors[filteredArticles[0].category] || '#6B7280';
                            e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="32" font-weight="bold">TEENDOM</text><text x="50%" y="55%" text-anchor="middle" fill="white" font-size="20">FEATURED STORY</text><text x="50%" y="70%" text-anchor="middle" fill="white" font-size="16">${filteredArticles[0].category}</text></svg>`;
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
                {filteredArticles.slice(1).map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="article-card hover-tilt group"
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
                        <span className={`category-badge category-${article.category.toLowerCase().replace(' ', '-')}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight hover:text-red-500 transition-colors">
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ArticlesPage;
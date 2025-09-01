import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiFilter } from "react-icons/hi";

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
      image: "/src/assets/articles/acne/acne1.jpg",
      category: "Health",
      excerpt: "Understanding and managing acne during teenage years - a comprehensive guide for young men."
    },
    {
      id: 2,
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      image: "/src/assets/articles/boylan/babylon-sisters-cover.jpg",
      category: "Leadership",
      excerpt: "Meet the dynamic duo making waves in constitutional education and youth empowerment across Kenya."
    },
    {
      id: 3,
      title: "Teen CEO: Building Your Business Empire",
      author: "Business Team",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      image: "/src/assets/articles/teen-ceo/Teen-ceo-primary.JPG",
      category: "Business",
      excerpt: "Young entrepreneurs share their journey from idea to successful business ventures."
    },
    {
      id: 4,
      title: "Body Odour: A Teen's Guide to Confidence",
      author: "Health Team",
      date: "Jun 15, 2025",
      readTime: "4 min read",
      image: "/src/assets/articles/body-oduor/body-oduor-1.jpg",
      category: "Health",
      excerpt: "Practical tips and solutions for managing body odour during teenage years."
    },
    {
      id: 5,
      title: "Boost Your Self-Esteem",
      author: "Mental Health Team",
      date: "Jun 10, 2025",
      readTime: "5 min read",
      image: "/src/assets/articles/self-esteem/self-esteem1.jpg",
      category: "Mental Health",
      excerpt: "Building confidence and self-worth during the challenging teenage years."
    },
    {
      id: 6,
      title: "Smart Savings for Teens",
      author: "Financial Team",
      date: "Jun 5, 2025",
      readTime: "6 min read",
      image: "/src/assets/articles/savings/savings-primary.jpg",
      category: "Finance",
      excerpt: "Learn how to manage money, save effectively, and build financial literacy as a teenager."
    },
    {
      id: 7,
      title: "Hair Maintenance for Teens",
      author: "Beauty Team",
      date: "May 30, 2025",
      readTime: "4 min read",
      image: "/src/assets/articles/hair-maintainence/Hair-maintainence-primary.jpg",
      category: "Beauty",
      excerpt: "Complete guide to healthy hair care routines for teenagers of all hair types."
    },
    {
      id: 8,
      title: "Bully Proof: Standing Strong",
      author: "Social Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      image: "/src/assets/articles/bully/bully-image-1.jpg",
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
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-blue-400 rounded-2xl opacity-40 animate-pulse transform rotate-45"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 transform -rotate-1">
              YOUNG CITIZENS <span className="text-yellow-300 transform rotate-2 inline-block">HUB</span>
            </h1>
            <p className="text-2xl mb-8 opacity-90 font-bold">
              🔥 REAL STORIES. REAL SOLUTIONS. REAL IMPACT! 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-xl border-b-4 border-red-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search for awesome stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-red-500 focus:border-red-500 text-lg font-semibold"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
                <HiFilter className="text-red-500 h-6 w-6" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 border-2 border-red-500 rounded-xl focus:ring-4 focus:ring-red-500 focus:border-red-500 font-bold text-gray-700"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-3xl font-black text-gray-600 mb-6">No stories found! 😢</h3>
                <p className="text-xl text-gray-500 font-semibold">Try different search terms or categories.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                      index % 2 === 0 ? 'hover:rotate-3' : 'hover:-rotate-3'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-lg text-gray-800 mb-3 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed font-medium line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 space-x-2 font-bold">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="bg-red-500 hover:bg-red-600 text-white font-black py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 text-xl shadow-2xl">
                LOAD MORE STORIES! 📚
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlesPage;
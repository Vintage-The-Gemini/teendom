// File Path: frontend/src/pages/ArticleDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowLeft, HiShare, HiHeart, HiBookmark } from "react-icons/hi";

function ArticleDetail() {
  const { id } = useParams();

  // Complete article data with all required information
  const articleData = {
    1: {
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      category: "Health",
      heroImage: "/images/articles/acne/acne1.jpg",
      images: [
        "/images/articles/acne/acne1.jpg",
        "/images/articles/acne/acne2.jpg"
      ],
      content: `
        <p>Acne is one of the most common skin conditions affecting teenagers, particularly boys during puberty. Understanding the causes, treatment options, and prevention methods can help young men navigate this challenging period with confidence.</p>

        <h2>Understanding Teenage Acne</h2>
        <p>During adolescence, hormonal changes trigger increased oil production in the skin. This excess oil, combined with dead skin cells and bacteria, can clog pores and lead to various types of acne.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/acne/acne2.jpg" alt="Understanding acne types" class="article-image" />
          <p class="image-caption">Different types of acne and their characteristics</p>
        </div>

        <h2>Common Causes</h2>
        <ul>
          <li><strong>Hormonal changes:</strong> Increased testosterone levels during puberty</li>
          <li><strong>Genetics:</strong> Family history of acne</li>
          <li><strong>Diet:</strong> Some studies suggest links between certain foods and acne</li>
          <li><strong>Stress:</strong> Can worsen existing acne conditions</li>
        </ul>

        <h2>Treatment and Prevention</h2>
        <p>Effective acne management involves consistent skincare routines, proper diet, and sometimes professional treatment. Here are key strategies:</p>
        
        <ul>
          <li><strong>Daily cleansing:</strong> Use gentle, non-comedogenic cleansers twice daily</li>
          <li><strong>Moisturizing:</strong> Even oily skin needs proper hydration</li>
          <li><strong>Healthy diet:</strong> Limit dairy and high-glycemic foods</li>
          <li><strong>Professional help:</strong> Consult a dermatologist for persistent cases</li>
        </ul>

        <h2>Building Confidence</h2>
        <p>Remember, acne is temporary and treatable. Focus on maintaining good habits, being patient with treatments, and building self-confidence beyond appearance. Many successful people have dealt with acne during their teenage years.</p>
      `
    },
    2: {
      title: "THE BOYLAN SISTERS: Constitutional Champions",
      author: "Teendom Team",
      date: "Jun 25, 2025",
      readTime: "7 min read",
      category: "Leadership",
      heroImage: "/images/articles/boylan/babylon-sisters-cover.jpg",
      images: [
        "/images/articles/boylan/babylon-sisters-cover.jpg",
        "/images/articles/boylan/boylan-sisters-action.jpg"
      ],
      content: `
        <p>Meet the Boylan sisters, two remarkable young women who are revolutionizing constitutional education among Kenyan youth through innovative programs and passionate advocacy.</p>

        <h2>The Beginning of Their Journey</h2>
        <p>The Boylan sisters discovered their passion for constitutional education during their high school years when they realized how little their peers knew about their rights and responsibilities as citizens.</p>

        <div class="article-image-container">
          <img src="/images/articles/boylan/boylan-sisters-action.jpg" alt="Boylan sisters in action" class="article-image" />
          <p class="image-caption">The Boylan sisters conducting a constitutional education workshop</p>
        </div>

        <h2>Impact and Programs</h2>
        <p>Their constitutional education program has reached over 5,000 young people across Kenya, teaching them about:</p>
        
        <ul>
          <li><strong>Bill of Rights:</strong> Understanding fundamental freedoms</li>
          <li><strong>Civic Participation:</strong> How to engage in democratic processes</li>
          <li><strong>Youth Rights:</strong> Special protections for young people</li>
          <li><strong>Community Leadership:</strong> Taking action at local levels</li>
        </ul>

        <h2>Recognition and Future Plans</h2>
        <p>The sisters have been recognized by various organizations for their contribution to civic education. They continue to expand their program and inspire other young people to become active citizens.</p>

        <p>Their story shows how young people can make a significant impact when they combine passion with action, creating lasting change in their communities.</p>
      `
    },
    3: {
      title: "TEEN CEO: Building Your Business Empire",
      author: "Business Team",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      category: "Business",
      heroImage: "/images/articles/teen ceo/Teen ceo primary.JPG",
      images: [
        "/images/articles/teen ceo/Teen ceo primary.JPG",
        "/images/articles/teen ceo/teen-business-meeting.jpg"
      ],
      content: `
        <p>The world of entrepreneurship is no longer limited by age. Today's teenagers are building successful businesses, creating jobs, and solving real problems while still in school.</p>

        <h2>The Rise of Teen Entrepreneurs</h2>
        <p>From tech startups to social enterprises, young entrepreneurs are making their mark across various industries. Their fresh perspective and digital nativity give them unique advantages in today's market.</p>

        <div class="article-image-container">
          <img src="/images/articles/teen ceo/teen-business-meeting.jpg" alt="Teen business meeting" class="article-image" />
          <p class="image-caption">Young entrepreneurs planning their next move</p>
        </div>

        <h2>Steps to Start Your Business</h2>
        <ul>
          <li><strong>Identify a problem:</strong> Look for challenges in your community</li>
          <li><strong>Develop a solution:</strong> Create a product or service that addresses the problem</li>
          <li><strong>Research your market:</strong> Understand your target customers</li>
          <li><strong>Create a business plan:</strong> Map out your strategy and finances</li>
          <li><strong>Start small:</strong> Test your idea with minimal investment</li>
        </ul>

        <h2>Success Stories</h2>
        <p>Many successful CEOs started their entrepreneurial journey as teenagers. From Mark Zuckerberg to Mikaila Ulmer, these leaders show that age is not a barrier to business success.</p>

        <h2>Challenges and Solutions</h2>
        <p>Teen entrepreneurs face unique challenges including limited resources, lack of experience, and credibility issues. However, these can be overcome through mentorship, education, and persistence.</p>

        <p>The key is to start where you are, use what you have, and do what you can. Every successful business empire began with a single step.</p>
      `
    }
  };

  const article = articleData[id];

  // Handle case where article is not found
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/articles"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center"
          >
            <HiArrowLeft className="mr-2 h-5 w-5" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/articles"
            className="inline-flex items-center text-white hover:text-yellow-400 transition-colors duration-300 mb-8 font-semibold"
          >
            <HiArrowLeft className="h-5 w-5 mr-2" />
            Back to Articles
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold tracking-wider">
              {article.category.toUpperCase()}
            </span>
            <span className="text-gray-300">{article.date}</span>
            <span className="text-gray-300">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author */}
          <p className="text-xl text-gray-300 font-medium">
            By {article.author}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src={article.heroImage} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const bgColor = article.category === 'Health' ? '#10B981' : 
                               article.category === 'Leadership' ? '#EF4444' : '#8B5CF6';
                e.target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="48" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="32">${article.category}</text></svg>`)}`;
              }}
            />
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '18px',
              color: '#374151'
            }}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-gray-200">
            <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <HiHeart className="h-5 w-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <HiShare className="h-5 w-5" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <HiBookmark className="h-5 w-5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            MORE <span className="text-red-500">STORIES</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Show other articles */}
            {Object.entries(articleData)
              .filter(([articleId]) => articleId !== id)
              .slice(0, 3)
              .map(([articleId, otherArticle]) => (
                <Link 
                  key={articleId}
                  to={`/article/${articleId}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src={otherArticle.heroImage} 
                      alt={otherArticle.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const bgColor = otherArticle.category === 'Health' ? '#10B981' : 
                                       otherArticle.category === 'Leadership' ? '#EF4444' : '#8B5CF6';
                        e.target.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="24" font-weight="bold">TEENDOM</text><text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">${otherArticle.category}</text></svg>`)}`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold tracking-wider mb-3 inline-block">
                      {otherArticle.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-2 line-clamp-2">
                      {otherArticle.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{otherArticle.author}</span>
                      <span className="mx-2">•</span>
                      <span>{otherArticle.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/articles"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              VIEW ALL ARTICLES
              <HiArrowLeft className="ml-3 h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleDetail;
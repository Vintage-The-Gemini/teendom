// File Path: frontend/src/pages/ArticleDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowLeft, HiShare, HiHeart, HiBookmark } from "react-icons/hi";

function ArticleDetail() {
  const { id } = useParams();

  // Article data with corrected image paths matching actual file structure
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
        <p>Effective acne management involves consistent skincare routines, proper diet, and sometimes professional treatment. Remember that acne is temporary and doesn't define your worth.</p>
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
        "/images/articles/boylan/babylon-sisters-2.jpg",
        "/images/articles/boylan/babylon-sisters-3.jpg",
        "/images/articles/boylan/babylon-sisters-4.jpg"
      ],
      content: `
        <p>Meet the Boylan Sisters - dynamic advocates who are revolutionizing constitutional education among Kenyan youth through innovative programs and community engagement.</p>

        <h2>The Champions of Change</h2>
        <p>These remarkable young women have dedicated their lives to making constitutional knowledge accessible and relevant to teenagers across Kenya.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/boylan/babylon-sisters-2.jpg" alt="Boylan Sisters in action" class="article-image" />
          <p class="image-caption">The Boylan Sisters leading a constitutional education workshop</p>
        </div>

        <h2>Their Impact</h2>
        <p>Through workshops, seminars, and peer-to-peer education programs, they have reached thousands of young Kenyans, empowering them with knowledge about their rights and responsibilities.</p>

        <div class="article-image-container">
          <img src="/images/articles/boylan/babylon-sisters-3.jpg" alt="Community engagement" class="article-image" />
          <p class="image-caption">Engaging with youth in community programs</p>
        </div>

        <h2>Building the Future</h2>
        <p>Their work represents the future of civic education - making it engaging, relevant, and accessible to all young Kenyans.</p>

        <div class="article-image-container">
          <img src="/images/articles/boylan/babylon-sisters-4.jpg" alt="Future leaders" class="article-image" />
          <p class="image-caption">Inspiring the next generation of constitutional champions</p>
        </div>
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
        "/images/articles/teen ceo/Teen ceo1.PNG",
        "/images/articles/teen ceo/Teen ceo2.jpg",
        "/images/articles/teen ceo/teen ceo3.JPG"
      ],
      content: `
        <p>Young entrepreneurship is on the rise in Kenya, with teenagers starting successful businesses and creating employment opportunities. Learn from the best young CEOs in the country.</p>

        <h2>The Rise of Teen Entrepreneurs</h2>
        <p>Today's teenagers are not waiting for graduation to start their business journeys. They're identifying problems and creating innovative solutions.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/teen ceo/Teen ceo1.PNG" alt="Young entrepreneur at work" class="article-image" />
          <p class="image-caption">Young entrepreneurs developing their business ideas</p>
        </div>

        <h2>Success Stories</h2>
        <p>From tech startups to social enterprises, teen CEOs are making their mark across various industries.</p>

        <div class="article-image-container">
          <img src="/images/articles/teen ceo/Teen ceo2.jpg" alt="Business success" class="article-image" />
          <p class="image-caption">Celebrating business milestones and achievements</p>
        </div>

        <h2>Building Your Empire</h2>
        <p>The journey to becoming a successful teen CEO requires dedication, learning, and the right support system.</p>

        <div class="article-image-container">
          <img src="/images/articles/teen ceo/teen ceo3.JPG" alt="Future business leaders" class="article-image" />
          <p class="image-caption">The future generation of business leaders</p>
        </div>
      `
    },
    4: {
      title: "Body Odour Solutions for Teens",
      author: "Health Team",
      date: "Jun 15, 2025",
      readTime: "4 min read",
      category: "Health",
      heroImage: "/images/articles/body-oduor/body-oduor-1.jpg",
      images: [
        "/images/articles/body-oduor/body-oduor-1.jpg",
        "/images/articles/body-oduor/body-oduor-2.jpg",
        "/images/articles/body-oduor/body-oduor-3.jpg"
      ],
      content: `
        <p>Body odour is a common concern during teenage years due to hormonal changes. Here's how to manage it effectively and maintain confidence.</p>

        <h2>Understanding Body Odour</h2>
        <p>During puberty, increased hormone production leads to more active sweat glands, which can result in stronger body odour.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/body-oduor/body-oduor-2.jpg" alt="Personal hygiene tips" class="article-image" />
          <p class="image-caption">Essential personal hygiene practices for teens</p>
        </div>

        <h2>Effective Solutions</h2>
        <p>Good hygiene practices, proper diet, and the right products can help you manage body odour effectively.</p>

        <div class="article-image-container">
          <img src="/images/articles/body-oduor/body-oduor-3.jpg" alt="Hygiene products" class="article-image" />
          <p class="image-caption">Choosing the right hygiene products for your needs</p>
        </div>

        <h2>Building Confidence</h2>
        <p>Remember, body odour is natural and manageable. With the right approach, you can feel confident in any social situation.</p>
      `
    },
    5: {
      title: "Smart Savings for Teens",
      author: "Linet Makenya",
      date: "Jun 18, 2025",
      readTime: "6 min read",
      category: "Finance",
      heroImage: "/images/articles/savings/savings primary.jpg",
      images: [
        "/images/articles/savings/savings primary.jpg",
        "/images/articles/savings/savings.jpg",
        "/images/articles/savings/savings2.jpg"
      ],
      content: `
        <p>Teen-friendly financial tips for saving, budgeting, and making smart money decisions for your future.</p>

        <h2>Smart Saving Strategies</h2>
        <p>Starting your savings journey early gives you a significant advantage. Every shilling counts when you're building your financial foundation.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/savings/savings.jpg" alt="Smart saving tips" class="article-image" />
          <p class="image-caption">Simple ways to start saving money as a teenager</p>
        </div>

        <h2>Budgeting Basics</h2>
        <p>Learning to budget early helps you understand the value of money and makes financial planning easier in adulthood.</p>

        <div class="article-image-container">
          <img src="/images/articles/savings/savings2.jpg" alt="Budget planning" class="article-image" />
          <p class="image-caption">Creating your first budget plan</p>
        </div>

        <h2>Building Financial Literacy</h2>
        <p>Understanding money management is a life skill that will benefit you throughout your entire life.</p>
      `
    },
    6: {
      title: "BOOST YOUR SELF-ESTEEM",
      author: "Mental Health Team",
      date: "Jun 16, 2025",
      readTime: "7 min read",
      category: "Mental Health",
      heroImage: "/images/articles/self-esteem/self-esteem1.jpg",
      images: [
        "/images/articles/self-esteem/self-esteem1.jpg",
        "/images/articles/self-esteem/self-esteem2.jpg",
        "/images/articles/self-esteem/self-esteem3.jpg"
      ],
      content: `
        <p>Practical strategies for building confidence and maintaining positive self-image during teenage years.</p>

        <h2>Understanding Self-Esteem</h2>
        <p>Self-esteem is how you view and value yourself. It affects every aspect of your life, from relationships to academic performance.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/self-esteem/self-esteem2.jpg" alt="Positive mindset" class="article-image" />
          <p class="image-caption">Developing a positive mindset and healthy self-talk</p>
        </div>

        <h2>Building Confidence</h2>
        <p>Confidence comes from recognizing your strengths, accepting your weaknesses, and working on personal growth.</p>

        <div class="article-image-container">
          <img src="/images/articles/self-esteem/self-esteem3.jpg" alt="Self-acceptance" class="article-image" />
          <p class="image-caption">Practicing self-acceptance and self-love</p>
        </div>

        <h2>Daily Practices</h2>
        <p>Small daily actions can significantly impact your self-esteem over time. Consistency is key to building lasting confidence.</p>
      `
    },
    7: {
      title: "Hair Maintenance for Teens",
      author: "Beauty Team",
      date: "May 30, 2025",
      readTime: "4 min read",
      category: "Beauty",
      heroImage: "/images/articles/hair maintainence/Hair-maintainence-primary.jpg",
      images: [
        "/images/articles/hair maintainence/Hair-maintainence-primary.jpg",
        "/images/articles/hair maintainence/hair-maintainence.jpg",
        "/images/articles/hair maintainence/Haie-maintainence-2.jpg"
      ],
      content: `
        <p>Complete guide to healthy hair care routines for teenagers of all hair types.</p>

        <h2>Understanding Your Hair Type</h2>
        <p>Every teenager has a unique hair type that requires specific care and attention.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/hair maintainence/hair-maintainence.jpg" alt="Hair care routine" class="article-image" />
          <p class="image-caption">Essential hair care practices for healthy hair</p>
        </div>

        <h2>Daily Hair Care</h2>
        <p>Establishing a consistent daily routine is key to maintaining healthy hair during teenage years.</p>

        <div class="article-image-container">
          <img src="/images/articles/hair maintainence/Haie-maintainence-2.jpg" alt="Hair maintenance tips" class="article-image" />
          <p class="image-caption">Professional hair maintenance techniques</p>
        </div>
      `
    },
    8: {
      title: "Bully Proof: Standing Strong",
      author: "Social Team",
      date: "May 25, 2025",
      readTime: "7 min read",
      category: "Social",
      heroImage: "/images/articles/bully/bully-image-1.jpg",
      images: [
        "/images/articles/bully/bully-image-1.jpg",
        "/images/articles/bully/bully-image-2.jpg",
        "/images/articles/bully/bully-image-3.jpg"
      ],
      content: `
        <p>Strategies for dealing with bullying and building resilience in social situations.</p>

        <h2>Understanding Bullying</h2>
        <p>Bullying can take many forms, but there are effective ways to protect yourself and build confidence.</p>
        
        <div class="article-image-container">
          <img src="/images/articles/bully/bully-image-2.jpg" alt="Standing up to bullies" class="article-image" />
          <p class="image-caption">Building confidence to stand up to bullying</p>
        </div>

        <h2>Building Resilience</h2>
        <p>Developing emotional resilience is key to handling difficult social situations with confidence.</p>

        <div class="article-image-container">
          <img src="/images/articles/bully/bully-image-3.jpg" alt="Peer support" class="article-image" />
          <p class="image-caption">Finding support and building strong friendships</p>
        </div>
      `
    }
  };

  const article = articleData[id];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/articles" className="text-red-500 font-bold hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-red-500 text-2xl font-black tracking-wider">
              TEENDOM
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-red-500 font-black border-b-2 border-red-500 pb-1">
                HOME
              </Link>
              <Link to="/young-citizens" className="text-white font-bold hover:text-red-500 transition-colors">
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

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          to="/articles" 
          className="inline-flex items-center text-red-500 font-black hover:text-red-700 transition-colors mb-8"
        >
          <HiArrowLeft className="mr-2" />
          BACK TO ARTICLES
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <img 
            src={article.heroImage} 
            alt={article.title}
            className="w-full h-full object-cover p-3"
            onError={(e) => {
              const colors = {
                'Health': '#10B981',
                'Leadership': '#EF4444', 
                'Business': '#8B5CF6',
                'Mental Health': '#6366F1',
                'Finance': '#059669',
                'Beauty': '#EC4899',
                'Social': '#14B8A6',
                'Money': '#F59E0B',
                'Self-Care': '#06B6D4'
              };
              const bgColor = colors[article.category] || '#6B7280';
              e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="${bgColor}"/><text x="50%" y="35%" text-anchor="middle" fill="white" font-size="48" font-weight="bold">TEENDOM</text><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="24">ARTICLE</text><text x="50%" y="65%" text-anchor="middle" fill="white" font-size="20">${article.category}</text></svg>`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-red-500 text-white px-4 py-2 font-black text-sm tracking-wider">
              {article.category.toUpperCase()}
            </span>
          </div>

          {/* Article Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-white/90 font-bold">
              <span>{article.author}</span>
              <span className="mx-3">•</span>
              <span>{article.date}</span>
              <span className="mx-3">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg font-black hover:bg-red-600 transition-colors">
            <HiHeart />
            <span>LIKE</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-black hover:bg-gray-900 transition-colors">
            <HiBookmark />
            <span>SAVE</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-black hover:bg-blue-600 transition-colors">
            <HiShare />
            <span>SHARE</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Related Articles Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
            MORE ARTICLES FOR YOU
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(articleData)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedArticle]) => (
                <Link 
                  key={key}
                  to={`/article/${key}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedArticle.heroImage} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 p-2"
                      onError={(e) => {
                        const colors = {
                          'Health': '#10B981',
                          'Leadership': '#EF4444', 
                          'Business': '#8B5CF6',
                          'Mental Health': '#6366F1',
                          'Finance': '#059669',
                          'Beauty': '#EC4899',
                          'Social': '#14B8A6',
                          'Money': '#F59E0B',
                          'Self-Care': '#06B6D4'
                        };
                        const bgColor = colors[relatedArticle.category] || '#6B7280';
                        e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="${bgColor}"/><text x="50%" y="40%" text-anchor="middle" fill="white" font-size="20" font-weight="bold">TEENDOM</text><text x="50%" y="65%" text-anchor="middle" fill="white" font-size="14">${relatedArticle.category}</text></svg>`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-red-500 text-white px-3 py-1 text-xs font-black rounded-full">
                      {relatedArticle.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mt-3 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <div className="text-sm text-gray-600 font-bold">
                      {relatedArticle.author} • {relatedArticle.readTime}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
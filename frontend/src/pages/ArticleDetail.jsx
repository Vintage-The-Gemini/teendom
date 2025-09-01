import React from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowLeft, HiShare, HiHeart, HiBookmark } from "react-icons/hi";

function ArticleDetail() {
  const { id } = useParams();

  // Article data with multiple images per article
  const articleData = {
    1: {
      title: "ACNE IN TEENAGE BOYS",
      author: "Catherine Kinyanjui",
      date: "Jun 29, 2025",
      readTime: "5 min read",
      category: "Health",
      heroImage: "/src/assets/articles/acne/acne1.jpg",
      images: [
        "/src/assets/articles/acne/acne1.jpg",
        "/src/assets/articles/acne/acne2.jpg"
      ],
      content: `
        <p>Acne is one of the most common skin conditions affecting teenagers, particularly boys during puberty. Understanding the causes, treatment options, and prevention methods can help young men navigate this challenging period with confidence.</p>

        <h2>Understanding Teenage Acne</h2>
        <p>During adolescence, hormonal changes trigger increased oil production in the skin. This excess oil, combined with dead skin cells and bacteria, can clog pores and lead to various types of acne.</p>
        
        <div class="article-image-container">
          <img src="/src/assets/articles/acne/acne2.jpg" alt="Understanding acne types" class="article-image" />
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
      heroImage: "/src/assets/articles/boylan/babylon-sisters-cover.jpg",
      images: [
        "/src/assets/articles/boylan/babylon-sisters-cover.jpg",
        "/src/assets/articles/boylan/babylon-sisters-2.jpg",
        "/src/assets/articles/boylan/babylon-sisters-3.jpg",
        "/src/assets/articles/boylan/babylon-sisters-4.jpg"
      ],
      content: `
        <p>Meet the Boylan Sisters - dynamic advocates who are revolutionizing constitutional education among Kenyan youth through innovative programs and community engagement.</p>

        <h2>The Champions of Change</h2>
        <p>These remarkable young women have dedicated their lives to making constitutional knowledge accessible and relevant to teenagers across Kenya.</p>
        
        <div class="article-image-container">
          <img src="/src/assets/articles/boylan/babylon-sisters-2.jpg" alt="Boylan Sisters in action" class="article-image" />
          <p class="image-caption">The Boylan Sisters leading a constitutional education workshop</p>
        </div>

        <h2>Their Impact</h2>
        <p>Through workshops, seminars, and peer-to-peer education programs, they have reached thousands of young Kenyans, empowering them with knowledge about their rights and responsibilities.</p>

        <div class="article-image-container">
          <img src="/src/assets/articles/boylan/babylon-sisters-3.jpg" alt="Community engagement" class="article-image" />
          <p class="image-caption">Engaging with youth in community programs</p>
        </div>

        <h2>Building the Future</h2>
        <p>Their work represents the future of civic education - making it engaging, relevant, and accessible to all young Kenyans.</p>

        <div class="article-image-container">
          <img src="/src/assets/articles/boylan/babylon-sisters-4.jpg" alt="Future leaders" class="article-image" />
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
      heroImage: "/src/assets/articles/teen-ceo/Teen-ceo-primary.JPG",
      images: [
        "/src/assets/articles/teen-ceo/Teen-ceo-primary.JPG",
        "/src/assets/articles/teen-ceo/Teen-ceo1.PNG",
        "/src/assets/articles/teen-ceo/Teen-ceo2.jpg",
        "/src/assets/articles/teen-ceo/teen-ceo3.JPG"
      ],
      content: `
        <p>Young entrepreneurship is on the rise in Kenya, with teenagers starting successful businesses and creating employment opportunities. Learn from the best young CEOs in the country.</p>

        <h2>The Rise of Teen Entrepreneurs</h2>
        <p>Today's teenagers are not waiting for graduation to start their business journeys. They're identifying problems and creating innovative solutions.</p>
        
        <div class="article-image-container">
          <img src="/src/assets/articles/teen-ceo/Teen-ceo1.PNG" alt="Young entrepreneur at work" class="article-image" />
          <p class="image-caption">Young entrepreneurs developing their business ideas</p>
        </div>

        <h2>Success Stories</h2>
        <p>From tech startups to social enterprises, teen CEOs are making their mark across various industries.</p>

        <div class="article-image-container">
          <img src="/src/assets/articles/teen-ceo/Teen-ceo2.jpg" alt="Business success" class="article-image" />
          <p class="image-caption">Celebrating business milestones and achievements</p>
        </div>

        <h2>Building Your Empire</h2>
        <p>The journey to becoming a successful teen CEO requires dedication, learning, and the right support system.</p>

        <div class="article-image-container">
          <img src="/src/assets/articles/teen-ceo/teen-ceo3.JPG" alt="Future business leaders" class="article-image" />
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
      heroImage: "/src/assets/articles/body-oduor/body-oduor-1.jpg",
      images: [
        "/src/assets/articles/body-oduor/body-oduor-1.jpg",
        "/src/assets/articles/body-oduor/body-oduor-2.jpg",
        "/src/assets/articles/body-oduor/body-oduor-3.jpg"
      ],
      content: `
        <p>Body odour is a common concern during teenage years due to hormonal changes. Here's how to manage it effectively and maintain confidence.</p>

        <h2>Understanding Body Odour</h2>
        <p>During puberty, increased hormone production leads to more active sweat glands, which can result in stronger body odour.</p>
        
        <div class="article-image-container">
          <img src="/src/assets/articles/body-oduor/body-oduor-2.jpg" alt="Personal hygiene tips" class="article-image" />
          <p class="image-caption">Essential personal hygiene practices for teens</p>
        </div>

        <h2>Effective Solutions</h2>
        <p>Good hygiene practices, proper diet, and the right products can help you manage body odour effectively.</p>

        <div class="article-image-container">
          <img src="/src/assets/articles/body-oduor/body-oduor-3.jpg" alt="Hygiene products" class="article-image" />
          <p class="image-caption">Choosing the right hygiene products for your needs</p>
        </div>

        <h2>Building Confidence</h2>
        <p>Remember, body odour is natural and manageable. With the right approach, you can feel confident in any situation.</p>
      `
    }
  };

  const article = articleData[id] || articleData[1];

  const relatedArticles = [
    {
      id: 5,
      title: "Boost Your Self-Esteem",
      image: "/src/assets/articles/self-esteem/self-esteem1.jpg",
      category: "Mental Health"
    },
    {
      id: 6,
      title: "Smart Savings for Teens",
      image: "/src/assets/articles/savings/savings-primary.jpg",
      category: "Finance"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/articles"
          className="inline-flex items-center text-red-500 hover:text-red-600 font-black text-lg transition-all duration-300 transform hover:scale-110"
        >
          <HiArrowLeft className="h-6 w-6 mr-3" />
          ← BACK TO STORIES
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-12 left-6 right-6">
          <div className="container mx-auto">
            <span className="bg-red-500 text-white px-6 py-3 font-black text-lg mb-6 inline-block">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-white/90 space-x-6 text-lg font-bold">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Social Actions */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <button className="flex items-center space-x-3 bg-red-100 hover:bg-red-500 hover:text-white text-red-500 px-6 py-4 font-black transition-all duration-300 transform hover:scale-110 border-2 border-red-500">
              <HiHeart className="h-6 w-6" />
              <span>LOVE IT!</span>
            </button>
            <button className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-900 px-6 py-4 font-black transition-all duration-300 transform hover:scale-110 border-2 border-gray-900">
              <HiShare className="h-6 w-6" />
              <span>SHARE</span>
            </button>
            <button className="flex items-center space-x-3 bg-red-100 hover:bg-red-500 hover:text-white text-red-500 px-6 py-4 font-black transition-all duration-300 transform hover:scale-110 border-2 border-red-500">
              <HiBookmark className="h-6 w-6" />
              <span>SAVE</span>
            </button>
          </div>

          {/* Article Content */}
          <article className="prose prose-xl max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="article-content text-lg leading-relaxed"
            />
          </article>

          {/* Author Bio */}
          <div className="bg-red-50 border-l-8 border-red-500 p-10 mt-16">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-red-500 text-white rounded-none flex items-center justify-center">
                <span className="font-black text-2xl">
                  {article.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{article.author}</h3>
                <p className="text-gray-700 font-semibold leading-relaxed">
                  Expert writer specializing in teen issues and youth empowerment. 
                  Passionate about creating content that makes a real difference in young lives.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-20">
            <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">
              MORE <span className="text-red-500">STORIES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.id}`}
                  className="group bg-white border-4 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:border-red-500"
                >
                  <div className="relative">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-4 py-2 text-sm font-black">
                        {relatedArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-black text-xl text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                      {relatedArticle.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
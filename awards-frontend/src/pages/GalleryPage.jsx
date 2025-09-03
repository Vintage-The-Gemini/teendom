import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HiStar, HiPlay, HiEye } from "react-icons/hi";

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "winners", name: "Winners" },
    { id: "ceremony", name: "Ceremony" },
    { id: "nominees", name: "Nominees" },
    { id: "videos", name: "Videos" }
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "winners",
      title: "Academic Excellence Winner 2023",
      description: "Celebrating outstanding academic achievement",
      image: "/gallery/winner1.jpg"
    },
    {
      id: 2,
      type: "image",
      category: "ceremony",
      title: "Awards Ceremony Highlights",
      description: "Memorable moments from the 2023 ceremony",
      image: "/gallery/ceremony1.jpg"
    },
    {
      id: 3,
      type: "video",
      category: "videos",
      title: "Winner Stories: Innovation Category",
      description: "Hear from our innovation category winners",
      image: "/gallery/video1.jpg",
      duration: "3:45"
    },
    {
      id: 4,
      type: "image",
      category: "nominees",
      title: "Inspiring Young Leaders",
      description: "Meet some of our amazing nominees",
      image: "/gallery/nominees1.jpg"
    },
    {
      id: 5,
      type: "image",
      category: "winners",
      title: "Community Impact Champions",
      description: "Winners making a difference in their communities",
      image: "/gallery/winner2.jpg"
    },
    {
      id: 6,
      type: "video",
      category: "videos",
      title: "Behind the Scenes: Award Preparation",
      description: "See how we prepare for the big night",
      image: "/gallery/video2.jpg",
      duration: "5:12"
    },
    {
      id: 7,
      type: "image",
      category: "ceremony",
      title: "Red Carpet Moments",
      description: "Glamorous arrivals at the awards ceremony",
      image: "/gallery/ceremony2.jpg"
    },
    {
      id: 8,
      type: "image",
      category: "nominees",
      title: "Future Leaders of Africa",
      description: "Nominees representing the next generation",
      image: "/gallery/nominees2.jpg"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#003875' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            GALLERY
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-8">
            Celebrating moments of excellence and the inspiring stories of Africa's exceptional teens
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'text-white hover:shadow-md'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? '#DAA520' : 'rgba(255,255,255,0.1)',
                  color: selectedCategory === category.id ? '#003875' : 'white'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Image/Video Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="text-4xl text-gray-500">🖼️</div>
                  
                  {/* Overlay for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                        <HiPlay className="h-8 w-8 text-gray-700 ml-1" />
                      </div>
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 rounded text-white text-xs font-bold">
                          {item.duration}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* View overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="p-3 rounded-full bg-white bg-opacity-90">
                      <HiEye className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{color: '#003875'}}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Category Badge */}
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold capitalize"
                          style={{backgroundColor: '#DAA520', color: '#003875'}}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
              <p className="text-white opacity-80">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8" style={{color: '#003875'}}>
              BY THE NUMBERS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2" style={{color: '#DAA520'}}>
                  500+
                </div>
                <div className="text-sm font-bold" style={{color: '#003875'}}>
                  Nominees
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2" style={{color: '#DAA520'}}>
                  54
                </div>
                <div className="text-sm font-bold" style={{color: '#003875'}}>
                  Countries
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2" style={{color: '#DAA520'}}>
                  100+
                </div>
                <div className="text-sm font-bold" style={{color: '#003875'}}>
                  Winners
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2" style={{color: '#DAA520'}}>
                  1M+
                </div>
                <div className="text-sm font-bold" style={{color: '#003875'}}>
                  Lives Impacted
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/nominate"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#003875', color: 'white'}}
              >
                <HiStar className="h-5 w-5" />
                <span>Join Our Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
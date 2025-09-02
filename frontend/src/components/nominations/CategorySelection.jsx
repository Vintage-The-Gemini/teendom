// File Path: frontend/src/components/nominations/CategorySelection.jsx
import React from "react";
import { HiStar } from "react-icons/hi";

function CategorySelection({ formData, handleInputChange, errors }) {
  const awardCategories = [
    {
      value: "academic-excellence",
      title: "Academic Excellence Award",
      description: "Outstanding academic achievements and educational excellence",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      value: "leadership-excellence", 
      title: "Leadership Excellence Award",
      description: "Exceptional leadership skills and inspiring others",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "innovation",
      title: "Innovation Award", 
      description: "Creative problem-solving and innovative thinking",
      color: "from-purple-500 to-purple-600"
    },
    {
      value: "teenpreneur",
      title: "Teenpreneur Award",
      description: "Entrepreneurial spirit and business achievements", 
      color: "from-green-500 to-green-600"
    },
    {
      value: "sports-wellness",
      title: "Sports & Wellness Award",
      description: "Excellence in sports and promoting healthy lifestyles",
      color: "from-orange-500 to-orange-600"
    },
    {
      value: "advocate-change",
      title: "Advocate for Change Award", 
      description: "Social activism and driving positive community change",
      color: "from-red-500 to-red-600"
    },
    {
      value: "environmental-champion",
      title: "Environmental Champion Award",
      description: "Environmental conservation and sustainability efforts",
      color: "from-teal-500 to-teal-600"
    },
    {
      value: "digital-impact",
      title: "Digital Impact Award",
      description: "Positive influence through digital platforms and technology",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      value: "teen-of-year",
      title: "Teen of the Year Award",
      description: "Overall excellence across multiple areas - the ultimate recognition",
      color: "from-yellow-500 to-red-500"
    },
    {
      value: "creative-arts", 
      title: "Creative Arts Award",
      description: "Outstanding achievements in visual, performing, or literary arts",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="bg-white border-l-4 border-yellow-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg">3</span>
        AWARD CATEGORY
      </h2>
      
      <p className="text-gray-600 mb-6 font-medium">
        Select the category that best represents the nominee's achievements and impact.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {awardCategories.map((category) => (
          <div key={category.value} className="relative">
            <input
              type="radio"
              id={category.value}
              name="awardCategory"
              value={category.value}
              checked={formData.awardCategory === category.value}
              onChange={handleInputChange}
              className="sr-only"
            />
            <label
              htmlFor={category.value}
              className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                formData.awardCategory === category.value
                  ? 'border-yellow-500 bg-yellow-50 shadow-lg'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <HiStar className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      {errors.awardCategory && (
        <p className="text-red-500 text-sm mt-4 font-semibold">{errors.awardCategory}</p>
      )}
    </section>
  );
}

export default CategorySelection;
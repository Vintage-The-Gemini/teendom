// File Path: frontend/src/components/nominations/CategorySelection.jsx
import React from "react";
import { HiStar } from "react-icons/hi";

function CategorySelection({ formData, handleInputChange, errors }) {
  const awardCategories = [
    {
      value: "academic",
      title: "Academic Excellence Award",
      description: "Outstanding academic achievements and educational excellence"
    },
    {
      value: "leadership", 
      title: "Leadership Excellence Award",
      description: "Exceptional leadership skills and inspiring others"
    },
    {
      value: "innovation",
      title: "Teen Innovator Award", 
      description: "Creative problem-solving and innovative thinking"
    },
    {
      value: "teenpreneur",
      title: "Teenpreneur Award",
      description: "Entrepreneurial spirit and business achievements"
    },
    {
      value: "sports",
      title: "Sports & Wellness Award",
      description: "Excellence in sports and promoting healthy lifestyles"
    },
    {
      value: "advocate",
      title: "Advocate for Change Award", 
      description: "Social activism and driving positive community change"
    },
    {
      value: "environmental",
      title: "Environmental Champion Award",
      description: "Environmental conservation and sustainability efforts"
    },
    {
      value: "digital",
      title: "Digital Impact Award",
      description: "Positive influence through digital platforms and technology"
    },
    {
      value: "teen-year",
      title: "Teen of the Year Award",
      description: "Overall excellence across multiple areas - the ultimate recognition"
    },
    {
      value: "creative", 
      title: "Creative Arts Award",
      description: "Outstanding achievements in visual, performing, or literary arts"
    }
  ];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          3
        </span>
        AWARD CATEGORY
      </h2>
      
      <p className="mb-6 font-medium" style={{ color: '#003875' }}>
        Select the category that best represents the nominee's achievements and impact.
      </p>

      <div className="space-y-4">
        {awardCategories.map((category) => (
          <label 
            key={category.value} 
            className="flex items-start p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-md"
            style={{ 
              border: formData.awardCategory === category.value ? '2px solid #DAA520' : '2px solid #e5e7eb',
              backgroundColor: formData.awardCategory === category.value ? '#fffbeb' : '#f8fafc'
            }}
          >
            <input
              type="radio"
              name="awardCategory"
              value={category.value}
              checked={formData.awardCategory === category.value}
              onChange={handleInputChange}
              className="mt-1 w-5 h-5 rounded-full"
              style={{ accentColor: '#DAA520' }}
            />
            <div className="ml-4 flex-grow">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: formData.awardCategory === category.value ? '#DAA520' : '#d1d5db' }}>
                  <HiStar className="h-4 w-4" 
                          style={{ color: formData.awardCategory === category.value ? 'white' : '#6b7280' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#003875' }}>
                  {category.title}
                </h3>
              </div>
              <p className="text-sm font-medium ml-11" style={{ color: '#003875' }}>
                {category.description}
              </p>
            </div>
          </label>
        ))}
      </div>

      {errors.awardCategory && (
        <p className="text-red-500 text-sm mt-4 font-semibold">{errors.awardCategory}</p>
      )}
    </section>
  );
}

export default CategorySelection;
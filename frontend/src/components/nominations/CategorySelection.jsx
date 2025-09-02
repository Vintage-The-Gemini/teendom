// frontend/src/components/nominations/CategorySelection.jsx
import React from "react";

function CategorySelection({ formData, handleInputChange, errors }) {
  const awardCategories = [
    { value: "academic", label: "Academic Excellence Award" },
    { value: "leadership", label: "Leadership Excellence Award" },
    { value: "innovation", label: "Innovation Award" },
    { value: "teenpreneur", label: "Teenpreneur Award" },
    { value: "sports", label: "Sports & Wellness Award" },
    { value: "advocate", label: "Advocate for Change Award" },
    { value: "environmental", label: "Environmental Champion Award" },
    { value: "digital", label: "Digital Impact Award" },
    { value: "teen-year", label: "Teen of the Year Award" },
    { value: "creative", label: "Creative Arts Award" }
  ];

  return (
    <section className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">3</span>
        AWARD CATEGORY
      </h2>
      
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-4">Select Award Category *</label>
        <div className="grid md:grid-cols-2 gap-4">
          {awardCategories.map(category => (
            <label key={category.value} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-yellow-500 transition-colors duration-200 ${
              formData.awardCategory === category.value ? 'border-yellow-500 bg-yellow-100' : 'border-gray-200'
            }`}>
              <input
                type="radio"
                name="awardCategory"
                value={category.value}
                checked={formData.awardCategory === category.value}
                onChange={handleInputChange}
                className="mr-3 h-4 w-4 text-yellow-500 focus:ring-yellow-500"
              />
              <span className="font-semibold text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
        {errors.awardCategory && (
          <p className="text-red-500 text-sm mt-2 font-semibold">{errors.awardCategory}</p>
        )}
      </div>
    </section>
  );
}

export default CategorySelection;
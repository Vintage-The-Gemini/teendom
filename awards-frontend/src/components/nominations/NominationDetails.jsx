// File Path: frontend/src/components/nominations/NominationDetails.jsx
import React from "react";

function NominationDetails({ formData, handleInputChange, errors }) {
  const getWordCount = (text) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  };

  const bioWordCount = getWordCount(formData.shortBio || '');
  const statementWordCount = getWordCount(formData.nominationStatement || '');

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          4
        </span>
        NOMINATION DETAILS
      </h2>
      
      <div className="space-y-6">
        {/* Short Bio */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Short Bio (max 250 words) *
          </label>
          <p className="text-sm mb-3" style={{ color: '#003875' }}>
            Tell us who they are, their background, and what they care about.
          </p>
          <textarea
            name="shortBio"
            value={formData.shortBio}
            onChange={handleInputChange}
            rows={5}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 resize-none ${
              errors.shortBio ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.shortBio ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.shortBio ? '#ef4444' : '#d1d5db'}
            placeholder="Tell us about the nominee's background, interests, and what drives them to make a difference..."
          />
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm">
              {errors.shortBio && (
                <span className="text-red-500 font-semibold">{errors.shortBio}</span>
              )}
            </div>
            <span className={`text-sm font-medium ${bioWordCount > 250 ? 'text-red-500' : 'text-gray-500'}`}>
              {bioWordCount}/250 words
            </span>
          </div>
        </div>

        {/* Nomination Statement */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Why does this teen deserve this award? (100-750 words) *
          </label>
          <p className="text-sm mb-3" style={{ color: '#003875' }}>
            Share detailed examples of what they have done, the impact of their work, and any challenges they've overcome.
          </p>
          <textarea
            name="nominationStatement"
            value={formData.nominationStatement}
            onChange={handleInputChange}
            rows={8}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 resize-none ${
              errors.nominationStatement ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nominationStatement ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nominationStatement ? '#ef4444' : '#d1d5db'}
            placeholder="Describe their specific achievements, the impact they've made, challenges they've overcome, and why they stand out as exceptional..."
          />
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm">
              {errors.nominationStatement && (
                <span className="text-red-500 font-semibold">{errors.nominationStatement}</span>
              )}
            </div>
            <span className={`text-sm font-medium ${
              statementWordCount < 100 || statementWordCount > 750 ? 'text-red-500' : 'text-green-600'
            }`}>
              {statementWordCount}/100-750 words
            </span>
          </div>
        </div>

        {/* Key Achievements (Optional) */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Key Achievements or Milestones (Optional)
          </label>
          <p className="text-sm mb-3" style={{ color: '#003875' }}>
            List any specific awards, recognition, or major accomplishments (bullet points format).
          </p>
          <textarea
            name="keyAchievements"
            value={formData.keyAchievements || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 resize-none"
            style={{
              backgroundColor: '#f8fafc',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            placeholder="• First place in national science fair&#10;• Founded school environmental club&#10;• Raised KSh 50,000 for local charity..."
          />
        </div>

        {/* Writing Tips */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#fffbeb', border: '1px solid #DAA520' }}>
          <h3 className="text-lg font-bold mb-4" style={{ color: '#003875' }}>
            💡 Writing Tips
          </h3>
          <ul className="space-y-2 text-sm font-medium" style={{ color: '#003875' }}>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Be specific with examples and measurable impact</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Include challenges overcome and resilience shown</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Focus on community impact and positive influence on others</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Highlight what makes this teen unique or exceptional</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NominationDetails;
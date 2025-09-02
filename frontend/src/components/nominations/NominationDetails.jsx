// File Path: frontend/src/components/nominations/NominationDetails.jsx
import React from "react";

function NominationDetails({ formData, handleInputChange, errors }) {
  // Function to estimate word count
  const getWordCount = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const bioWordCount = getWordCount(formData.shortBio || '');
  const statementWordCount = getWordCount(formData.nominationStatement || '');

  return (
    <section className="bg-white border-l-4 border-purple-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg">4</span>
        NOMINATION DETAILS
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Short Bio (Max 100 words) *</label>
          <textarea
            name="shortBio"
            value={formData.shortBio}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-purple-500 focus:border-purple-500 focus:bg-white resize-none text-gray-800 placeholder-gray-500 ${
              errors.shortBio ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Brief introduction about the nominee - who they are, their background, and what makes them special..."
          />
          <div className="flex justify-between mt-2">
            <span className={`text-sm font-semibold ${bioWordCount > 100 ? 'text-red-500' : 'text-purple-600'}`}>
              {bioWordCount}/100 words
            </span>
            {errors.shortBio && (
              <p className="text-red-500 text-sm font-semibold">{errors.shortBio}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Nomination Statement (50-100 words) *
          </label>
          <p className="text-sm text-gray-600 mb-3">
            Tell us why this nominee deserves this award. Include specific achievements, impact they've made, 
            and examples that demonstrate their excellence.
          </p>
          <textarea
            name="nominationStatement"
            value={formData.nominationStatement}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-purple-500 focus:border-purple-500 focus:bg-white resize-none text-gray-800 placeholder-gray-500 ${
              errors.nominationStatement ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe why this nominee deserves the award:

• What specific achievements make them stand out?
• What impact have they made in their community or school?
• What challenges have they overcome?
• Provide concrete examples of their excellence..."
          />
          <div className="flex justify-between mt-2">
            <span className={`text-sm font-semibold ${statementWordCount > 100 ? 'text-red-500' : statementWordCount < 50 ? 'text-yellow-600' : 'text-purple-600'}`}>
              {statementWordCount}/100 words
            </span>
            {errors.nominationStatement && (
              <p className="text-red-500 text-sm font-semibold">{errors.nominationStatement}</p>
            )}
          </div>
          {statementWordCount < 50 && (
            <p className="text-yellow-600 text-xs mt-1 font-medium">
              Minimum 50 words required for a strong nomination
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NominationDetails;
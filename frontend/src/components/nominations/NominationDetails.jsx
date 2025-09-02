// frontend/src/components/nominations/NominationDetails.jsx
import React from "react";

function NominationDetails({ formData, handleInputChange, errors }) {
  // Function to estimate word count
  const getWordCount = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const bioWordCount = getWordCount(formData.shortBio || '');
  const statementWordCount = getWordCount(formData.nominationStatement || '');
  const statementCharCount = (formData.nominationStatement || '').length;

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-purple-400 border-opacity-30">
      <h2 className="text-2xl font-black text-white mb-6 flex items-center">
        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">4</span>
        NOMINATION DETAILS
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-blue-200 mb-2">Short Bio (Max 250 words) *</label>
          <textarea
            name="shortBio"
            value={formData.shortBio}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border-2 rounded-lg font-semibold focus:ring-4 focus:ring-purple-500 focus:border-purple-400 resize-none text-white placeholder-blue-200 ${
              errors.shortBio ? 'border-red-400' : 'border-purple-400 border-opacity-30'
            }`}
            placeholder="Brief introduction about the nominee - who they are, where they're from, and what makes them special..."
          />
          <div className="flex justify-between mt-2">
            <span className={`text-sm ${bioWordCount > 250 ? 'text-red-400' : 'text-blue-300'}`}>
              {bioWordCount}/250 words
            </span>
            {errors.shortBio && (
              <p className="text-red-400 text-sm font-semibold">{errors.shortBio}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-blue-200 mb-2">
            Nomination Statement (300+ words, max 3000 characters) *
          </label>
          <p className="text-sm text-blue-300 mb-3">
            Tell us why this nominee deserves this award. Include specific achievements, impact they've made, 
            challenges they've overcome, and examples that demonstrate their excellence.
          </p>
          <textarea
            name="nominationStatement"
            value={formData.nominationStatement}
            onChange={handleInputChange}
            rows={10}
            className={`w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border-2 rounded-lg font-semibold focus:ring-4 focus:ring-purple-500 focus:border-purple-400 resize-none text-white placeholder-blue-200 ${
              errors.nominationStatement ? 'border-red-400' : 'border-purple-400 border-opacity-30'
            }`}
            placeholder="Describe in detail why this nominee deserves the award:

• What specific achievements or actions make them stand out?
• What impact have they made in their community, school, or field?
• What challenges have they overcome or how do they inspire others?
• Provide concrete examples and stories that showcase their excellence...

Be specific and use examples to support your nomination."
          />
          <div className="flex justify-between mt-2">
            <span className={`text-sm ${statementCharCount > 3000 ? 'text-red-400' : statementWordCount < 300 ? 'text-yellow-400' : 'text-blue-300'}`}>
              {statementWordCount} words | {statementCharCount}/3000 characters
            </span>
            {errors.nominationStatement && (
              <p className="text-red-400 text-sm font-semibold">{errors.nominationStatement}</p>
            )}
          </div>
          {statementWordCount < 300 && (
            <p className="text-yellow-400 text-xs mt-1">
              Minimum 300 words required for a strong nomination
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NominationDetails;
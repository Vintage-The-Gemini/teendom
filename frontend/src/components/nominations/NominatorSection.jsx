// frontend/src/components/nominations/NominatorSection.jsx
import React from "react";

function NominatorSection({ formData, handleInputChange, errors }) {
  const relationshipOptions = [
    "Parent/Guardian", "Teacher", "School Principal", "Coach", "Mentor", 
    "Community Leader", "Peer/Friend", "Family Member", "Youth Worker", "Other"
  ];

  return (
    <section className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">1</span>
        NOMINATOR INFORMATION
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="nominatorName"
            value={formData.nominatorName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-blue-500 focus:border-blue-500 ${
              errors.nominatorName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.nominatorName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="nominatorEmail"
            value={formData.nominatorEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-blue-500 focus:border-blue-500 ${
              errors.nominatorEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.nominatorEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="nominatorPhone"
            value={formData.nominatorPhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-blue-500 focus:border-blue-500 ${
              errors.nominatorPhone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="0700000000"
          />
          {errors.nominatorPhone && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorPhone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Relationship to Nominee *</label>
          <select
            name="nominatorRelationship"
            value={formData.nominatorRelationship}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-blue-500 focus:border-blue-500 ${
              errors.nominatorRelationship ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select relationship</option>
            {relationshipOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.nominatorRelationship && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorRelationship}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NominatorSection;
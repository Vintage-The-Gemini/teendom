// File Path: frontend/src/components/nominations/NominatorSection.jsx
import React from "react";

function NominatorSection({ formData, handleInputChange, errors }) {
  const relationshipOptions = [
    "Parent/Guardian", "Teacher", "School Principal", "Coach", "Mentor", 
    "Community Leader", "Peer/Friend", "Family Member", "Youth Worker", "Other"
  ];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          1
        </span>
        NOMINATOR INFORMATION
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="nominatorName"
            value={formData.nominatorName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nominatorName ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nominatorName ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nominatorName ? '#ef4444' : '#d1d5db'}
            placeholder="Enter your full name"
          />
          {errors.nominatorName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="nominatorEmail"
            value={formData.nominatorEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nominatorEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nominatorEmail ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nominatorEmail ? '#ef4444' : '#d1d5db'}
            placeholder="your.email@example.com"
          />
          {errors.nominatorEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="nominatorPhone"
            value={formData.nominatorPhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nominatorPhone ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nominatorPhone ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nominatorPhone ? '#ef4444' : '#d1d5db'}
            placeholder="0700000000"
          />
          {errors.nominatorPhone && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nominatorPhone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Relationship to Nominee *
          </label>
          <select
            name="nominatorRelationship"
            value={formData.nominatorRelationship}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nominatorRelationship ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nominatorRelationship ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520',
              color: '#003875'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nominatorRelationship ? '#ef4444' : '#d1d5db'}
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
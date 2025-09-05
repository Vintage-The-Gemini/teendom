// File Path: frontend/src/components/nominations/NominatorSection.jsx
import React from "react";

function NominatorSection({ formData, handleInputChange, errors }) {
  const relationshipOptions = [
    "Parent/Guardian", "Teacher", "School Principal", "Coach", "Mentor", 
    "Community Leader", "Peer/Friend", "Family Member", "Youth Worker", "Other"
  ];

  const isSelfNomination = formData.isSelfNomination === 'yes';

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

      {/* Self-Nomination Question */}
      <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: '#fef3c7', border: '2px solid #DAA520' }}>
        <h3 className="text-lg font-bold mb-4" style={{ color: '#003875' }}>
          Are you nominating yourself?
        </h3>
        <div className="flex gap-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="isSelfNomination"
              value="yes"
              checked={formData.isSelfNomination === 'yes'}
              onChange={handleInputChange}
              className="mr-2 w-4 h-4"
              style={{ accentColor: '#DAA520' }}
            />
            <span className="font-semibold" style={{ color: '#003875' }}>
              Yes (skip to next section)
            </span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="isSelfNomination"
              value="no"
              checked={formData.isSelfNomination === 'no'}
              onChange={handleInputChange}
              className="mr-2 w-4 h-4"
              style={{ accentColor: '#DAA520' }}
            />
            <span className="font-semibold" style={{ color: '#003875' }}>
              No (fill in below)
            </span>
          </label>
        </div>
        {errors.isSelfNomination && (
          <p className="text-red-500 text-sm mt-2 font-semibold">{errors.isSelfNomination}</p>
        )}
      </div>

      {/* Show self-nomination confirmation or nominator fields */}
      {isSelfNomination ? (
        <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#dcfce7', border: '2px solid #16a34a' }}>
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#166534' }}>
            Self-Nomination Confirmed!
          </h3>
          <p className="font-medium" style={{ color: '#166534' }}>
            You're nominating yourself for the Teendom Awards. Your voice matters - proceed to the next section.
          </p>
        </div>
      ) : (
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
      )}
    </section>
  );
}

export default NominatorSection;
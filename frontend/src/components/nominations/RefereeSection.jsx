// File Path: frontend/src/components/nominations/RefereeSection.jsx
import React from "react";
import { HiUserGroup, HiPhone, HiMail } from "react-icons/hi";

function RefereeSection({ formData, handleInputChange, errors }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          6
        </span>
        REFEREE INFORMATION
      </h2>
      
      <p className="mb-6 font-medium" style={{ color: '#003875' }}>
        Provide contact details of someone who can vouch for the nominee's character or achievements.
        <br />
        <strong>Note:</strong> Referees must be non-family adults in a professional or community role.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Referee Full Name *
          </label>
          <input
            type="text"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.refereeName ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.refereeName ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.refereeName ? '#ef4444' : '#d1d5db'}
            placeholder="Enter referee's full name"
          />
          {errors.refereeName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereeName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Position/Relationship to Nominee *
          </label>
          <input
            type="text"
            name="refereePosition"
            value={formData.refereePosition || ''}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.refereePosition ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.refereePosition ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.refereePosition ? '#ef4444' : '#d1d5db'}
            placeholder="e.g., Teacher, Coach, Mentor, Community Leader"
          />
          {errors.refereePosition && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereePosition}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="refereePhone"
            value={formData.refereePhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.refereePhone ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.refereePhone ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.refereePhone ? '#ef4444' : '#d1d5db'}
            placeholder="0700000000"
          />
          {errors.refereePhone && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereePhone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="refereeEmail"
            value={formData.refereeEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.refereeEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.refereeEmail ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.refereeEmail ? '#ef4444' : '#d1d5db'}
            placeholder="referee@example.com"
          />
          {errors.refereeEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereeEmail}</p>
          )}
        </div>
      </div>

      {/* Contact Permission */}
      <div className="mt-6">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="contactReferee"
            checked={formData.contactReferee || false}
            onChange={handleInputChange}
            className="w-5 h-5 rounded"
            style={{ accentColor: '#DAA520' }}
          />
          <span className="text-sm font-medium" style={{ color: '#003875' }}>
            May we contact this referee for verification? (Recommended)
          </span>
        </label>
      </div>

      {/* Referee Guidelines */}
      <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: '#fffbeb', border: '1px solid #DAA520' }}>
        <h3 className="text-lg font-bold mb-4 flex items-center" style={{ color: '#003875' }}>
          <HiUserGroup className="mr-2 h-5 w-5" style={{ color: '#DAA520' }} />
          Suitable Referees Include:
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm font-medium" style={{ color: '#003875' }}>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Teachers or School Principals
            </li>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Coaches or Club Leaders
            </li>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Community Leaders
            </li>
          </ul>
          <ul className="space-y-2 text-sm font-medium" style={{ color: '#003875' }}>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Mentors or Youth Workers
            </li>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Faith Leaders
            </li>
            <li className="flex items-center">
              <span className="text-yellow-600 mr-2">•</span>
              Employers or Supervisors
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RefereeSection;
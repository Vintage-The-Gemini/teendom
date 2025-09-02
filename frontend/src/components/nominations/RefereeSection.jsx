// frontend/src/components/nominations/RefereeSection.jsx
import React from "react";
import { HiExclamation } from "react-icons/hi";

function RefereeSection({ formData, handleInputChange, errors }) {
  return (
    <section className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">6</span>
        REFEREE INFORMATION
      </h2>
      
      <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <HiExclamation className="h-6 w-6 text-orange-600 mr-3 mt-0.5" />
          <div>
            <p className="text-orange-800 font-bold text-sm">
              Important: Referee must be a non-family adult in a professional or community role
            </p>
            <p className="text-orange-700 text-sm mt-1">
              Examples: Teacher, coach, mentor, faith leader, youth worker, community leader, school principal
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Referee Name *</label>
          <input
            type="text"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-orange-500 focus:border-orange-500 ${
              errors.refereeName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Full name of referee"
          />
          {errors.refereeName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereeName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Position/Relationship *</label>
          <input
            type="text"
            name="refereePosition"
            value={formData.refereePosition}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-orange-500 focus:border-orange-500 ${
              errors.refereePosition ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g. Mathematics Teacher, Football Coach"
          />
          {errors.refereePosition && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereePosition}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="refereePhone"
            value={formData.refereePhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-orange-500 focus:border-orange-500 ${
              errors.refereePhone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="0700000000"
          />
          {errors.refereePhone && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereePhone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="refereeEmail"
            value={formData.refereeEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-orange-500 focus:border-orange-500 ${
              errors.refereeEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="referee@example.com"
          />
          {errors.refereeEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.refereeEmail}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="contactReferee"
            checked={formData.contactReferee}
            onChange={handleInputChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-2 border-gray-300 rounded mr-3"
          />
          <span className="text-sm font-bold text-gray-700">
            May we contact them for verification? (Recommended)
          </span>
        </label>
      </div>
    </section>
  );
}

export default RefereeSection;
// frontend/src/components/nominations/ConsentSection.jsx
import React from "react";

function ConsentSection({ formData, handleInputChange, errors }) {
  const isMinor = parseInt(formData.nomineeAge) < 18;

  return (
    <section className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">7</span>
        CONSENT & DECLARATION
      </h2>
      
      <div className="space-y-4">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="accurateInfo"
            checked={formData.accurateInfo}
            onChange={handleInputChange}
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-2 border-gray-300 rounded mr-3 mt-1"
          />
          <span className="text-sm font-bold text-gray-700">
            I confirm that the information provided is accurate to the best of my knowledge. *
          </span>
        </label>
        {errors.accurateInfo && (
          <p className="text-red-500 text-sm font-semibold ml-7">{errors.accurateInfo}</p>
        )}

        <label className="flex items-start">
          <input
            type="checkbox"
            name="nomineePermission"
            checked={formData.nomineePermission}
            onChange={handleInputChange}
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-2 border-gray-300 rounded mr-3 mt-1"
          />
          <span className="text-sm font-bold text-gray-700">
            I confirm that I have the nominee's permission to submit this nomination. *
          </span>
        </label>
        {errors.nomineePermission && (
          <p className="text-red-500 text-sm font-semibold ml-7">{errors.nomineePermission}</p>
        )}

        {isMinor && (
          <>
            <label className="flex items-start">
              <input
                type="checkbox"
                name="parentalConsent"
                checked={formData.parentalConsent}
                onChange={handleInputChange}
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-2 border-gray-300 rounded mr-3 mt-1"
              />
              <span className="text-sm font-bold text-gray-700">
                I confirm that parental or guardian consent has been obtained for this nomination (required for nominees under 18). *
              </span>
            </label>
            {errors.parentalConsent && (
              <p className="text-red-500 text-sm font-semibold ml-7">{errors.parentalConsent}</p>
            )}
          </>
        )}

        <label className="flex items-start">
          <input
            type="checkbox"
            name="understandsProcess"
            checked={formData.understandsProcess}
            onChange={handleInputChange}
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-2 border-gray-300 rounded mr-3 mt-1"
          />
          <span className="text-sm font-bold text-gray-700">
            I understand that all submitted information will be used solely for internal judging and shortlisting at this stage. 
            No nominee information will be published without formal consent after shortlisting. *
          </span>
        </label>
        {errors.understandsProcess && (
          <p className="text-red-500 text-sm font-semibold ml-7">{errors.understandsProcess}</p>
        )}

        <label className="flex items-start">
          <input
            type="checkbox"
            name="noFalseInfo"
            checked={formData.noFalseInfo}
            onChange={handleInputChange}
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-2 border-gray-300 rounded mr-3 mt-1"
          />
          <span className="text-sm font-bold text-gray-700">
            I acknowledge that any nominee found to have submitted false, misleading or unverifiable information 
            will be immediately disqualified from the Teendom Awards and may be barred from future participation. *
          </span>
        </label>
        {errors.noFalseInfo && (
          <p className="text-red-500 text-sm font-semibold ml-7">{errors.noFalseInfo}</p>
        )}
      </div>

      {isMinor && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-yellow-800 font-bold text-sm">
            📋 For nominees under 18: A parental consent form will need to be signed before any finalist 
            is profiled or featured publicly.
          </p>
        </div>
      )}
    </section>
  );
}

export default ConsentSection;
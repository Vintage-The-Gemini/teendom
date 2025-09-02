// File Path: frontend/src/components/nominations/ConsentSection.jsx
import React from "react";
import { HiShieldCheck } from "react-icons/hi";

function ConsentSection({ formData, handleInputChange, errors }) {
  const isMinor = parseInt(formData.nomineeAge) < 18;

  const consentItems = [
    {
      name: "accurateInfo",
      label: "I confirm that all information provided is accurate to the best of my knowledge",
      required: true
    },
    {
      name: "nomineePermission", 
      label: "I have the nominee's permission to submit this nomination",
      required: true
    },
    {
      name: "parentalConsent",
      label: "I confirm that parental/guardian consent has been obtained for this nomination",
      required: isMinor,
      show: isMinor
    },
    {
      name: "understandsProcess",
      label: "I understand the nomination and selection process",
      required: true
    },
    {
      name: "noFalseInfo",
      label: "I acknowledge that false or misleading information may result in disqualification",
      required: true
    }
  ];

  return (
    <section className="bg-white border-l-4 border-red-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg">7</span>
        CONSENT & DECLARATIONS
      </h2>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <HiShieldCheck className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-red-800 mb-2">Important Privacy Notice</h3>
            <p className="text-sm text-red-700">
              All information will be used solely for judging and selection. Only shortlisted nominees 
              with proper consent will be featured publicly.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {consentItems.map((item) => {
          if (item.show === false) return null;
          
          return (
            <div key={item.name} className="flex items-start space-x-3">
              <input
                type="checkbox"
                id={item.name}
                name={item.name}
                checked={formData[item.name] || false}
                onChange={handleInputChange}
                className={`mt-1 h-5 w-5 rounded border-2 text-red-600 focus:ring-4 focus:ring-red-500 focus:ring-offset-0 ${
                  errors[item.name] ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <label htmlFor={item.name} className="flex-1 text-sm text-gray-700 font-medium cursor-pointer">
                {item.label} {item.required && <span className="text-red-500">*</span>}
              </label>
            </div>
          );
        })}
      </div>

      {/* Display any consent errors */}
      <div className="mt-4 space-y-2">
        {Object.entries(errors).map(([field, error]) => {
          if (consentItems.some(item => item.name === field)) {
            return (
              <p key={field} className="text-red-500 text-sm font-semibold">
                {error}
              </p>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          By proceeding, you acknowledge that this nomination may be reviewed by our judging panel 
          and that selected nominees may be contacted for additional verification.
        </p>
      </div>
    </section>
  );
}

export default ConsentSection;
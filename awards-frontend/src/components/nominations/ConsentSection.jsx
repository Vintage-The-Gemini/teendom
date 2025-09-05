// File Path: frontend/src/components/nominations/ConsentSection.jsx
import React from "react";
import { HiShieldCheck, HiCheck } from "react-icons/hi";

function ConsentSection({ formData, handleInputChange, errors }) {
  const isMinor = parseInt(formData.nomineeAge) < 18;

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          7
        </span>
        CONSENT & DECLARATION
      </h2>

      <div className="space-y-6">
        {/* Consent Checkboxes */}
        <div className="space-y-4">
          <div className="space-y-4 rounded-2xl p-6" style={{ backgroundColor: '#f8fafc', border: '2px solid #DAA520' }}>
            
            <div className="space-y-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="accurateInfo"
                  checked={formData.accurateInfo || false}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#DAA520' }}
                />
                <span className="text-sm font-medium" style={{ color: '#003875' }}>
                  I confirm that the information provided is accurate to the best of my knowledge.
                </span>
              </label>
              {errors.accurateInfo && (
                <p className="text-red-500 text-sm font-semibold ml-8">{errors.accurateInfo}</p>
              )}

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="nomineePermission"
                  checked={formData.nomineePermission || false}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#DAA520' }}
                />
                <span className="text-sm font-medium" style={{ color: '#003875' }}>
                  I confirm that I have the nominee's permission to submit this nomination.
                </span>
              </label>
              {errors.nomineePermission && (
                <p className="text-red-500 text-sm font-semibold ml-8">{errors.nomineePermission}</p>
              )}

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="parentalConsent"
                  checked={formData.parentalConsent || false}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#DAA520' }}
                />
                <span className="text-sm font-medium" style={{ color: '#003875' }}>
                  If the nominee is under 18, I confirm that parental or guardian consent has been obtained for this nomination.
                </span>
              </label>
              {errors.parentalConsent && (
                <p className="text-red-500 text-sm font-semibold ml-8">{errors.parentalConsent}</p>
              )}

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="understandsProcess"
                  checked={formData.understandsProcess || false}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#DAA520' }}
                />
                <span className="text-sm font-medium" style={{ color: '#003875' }}>
                  I understand that all submitted information will be used solely for internal judging and shortlisting at this stage.
                </span>
              </label>
              {errors.understandsProcess && (
                <p className="text-red-500 text-sm font-semibold ml-8">{errors.understandsProcess}</p>
              )}

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="noFalseInfo"
                  checked={formData.noFalseInfo || false}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded"
                  style={{ accentColor: '#DAA520' }}
                />
                <span className="text-sm font-medium" style={{ color: '#003875' }}>
                  I acknowledge that any nominee found to have submitted false, misleading or unverifiable information will be immediately disqualified from the Teendom Awards and may be barred from future participation.
                </span>
              </label>
              {errors.noFalseInfo && (
                <p className="text-red-500 text-sm font-semibold ml-8">{errors.noFalseInfo}</p>
              )}
            </div>
          </div>
        </div>

        {/* Data Protection Notice */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#fefce8', border: '1px solid #DAA520' }}>
          <h3 className="text-lg font-bold mb-4" style={{ color: '#92400e' }}>
            Data Protection & Privacy
          </h3>
          <p className="text-sm font-medium leading-relaxed" style={{ color: '#92400e' }}>
            We take data protection seriously. All personal information is used only for judging, communication, and award processes — and only with full consent. 
            No nominee's name, photo, or story will be published or used for publicity unless formal consent is provided after shortlisting.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center rounded-2xl p-6" style={{ backgroundColor: '#003875' }}>
          <h3 className="text-lg font-bold text-white mb-4">
            Questions About Your Nomination?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-white">
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#DAA520' }}>WhatsApp</h4>
              <p className="text-sm">0742862080</p>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: '#DAA520' }}>Email</h4>
              <p className="text-sm">info@teendom.africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsentSection;
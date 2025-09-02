// File Path: frontend/src/components/nominations/SupportingMaterials.jsx
import React from "react";
import { HiUpload, HiCheck, HiX, HiPhotograph, HiDocumentText, HiExternalLink } from "react-icons/hi";

function SupportingMaterials({ formData, setFormData, errors, uploadProgress, handleFileUpload }) {
  
  const handleLinkChange = (index, value) => {
    const newLinks = [...(formData.supportingLinks || [''])];
    newLinks[index] = value;
    setFormData(prev => ({ ...prev, supportingLinks: newLinks }));
  };

  const addLinkField = () => {
    const newLinks = [...(formData.supportingLinks || ['']), ''];
    setFormData(prev => ({ ...prev, supportingLinks: newLinks }));
  };

  const removeLinkField = (index) => {
    const newLinks = formData.supportingLinks.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, supportingLinks: newLinks }));
  };

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
      border: '2px solid #DAA520', 
      fontFamily: 'Inter, system-ui, sans-serif' 
    }}>
      <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
        <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
          5
        </span>
        SUPPORTING MATERIALS
      </h2>

      <div className="space-y-6">
        {/* Nominee Photo */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Nominee Photo (Required)
          </label>
          <p className="text-sm mb-4" style={{ color: '#003875' }}>
            Upload a high-quality recent photo of the nominee. This will be used for profiles and ceremony materials if they're selected.
          </p>
          <div className="border-2 border-dashed rounded-2xl p-8 text-center transition-colors duration-200 hover:bg-blue-50"
               style={{ borderColor: '#DAA520' }}>
            <HiPhotograph className="mx-auto h-12 w-12 mb-4" style={{ color: '#003875' }} />
            <p className="font-semibold mb-4" style={{ color: '#003875' }}>
              Upload a high-quality recent photo of the nominee
            </p>
            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              onChange={(e) => handleFileUpload(e.target.files[0], 'nomineePhoto')}
              className="hidden"
              id="nomineePhoto"
            />
            <label 
              htmlFor="nomineePhoto"
              className="px-6 py-3 rounded-xl text-white font-bold cursor-pointer transition-all duration-200 hover:shadow-lg inline-block"
              style={{ backgroundColor: '#DAA520' }}
            >
              Choose Photo
            </label>
            
            {uploadProgress.nomineePhoto !== null && uploadProgress.nomineePhoto < 100 && (
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-300"
                    style={{ 
                      backgroundColor: '#DAA520',
                      width: `${uploadProgress.nomineePhoto}%` 
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2" style={{ color: '#003875' }}>
                  Uploading... {uploadProgress.nomineePhoto}%
                </p>
              </div>
            )}
            
            {formData.nomineePhoto && (
              <div className="mt-4 flex items-center justify-center text-green-600">
                <HiCheck className="h-5 w-5 mr-2" />
                <span className="font-semibold">Photo uploaded successfully!</span>
              </div>
            )}
            
            {errors.nomineePhoto && (
              <p className="text-red-500 text-sm mt-2 font-semibold">{errors.nomineePhoto}</p>
            )}
            
            <p className="text-xs mt-3" style={{ color: '#6b7280' }}>
              Accepted formats: JPEG, PNG | Max 5MB
            </p>
          </div>
        </div>

        {/* Supporting Documents */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Supporting Documents (Optional)
          </label>
          <p className="text-sm mb-4" style={{ color: '#003875' }}>
            Upload certificates, awards, media features, recommendation letters, or other relevant documents that support the nomination.
          </p>
          <div className="border-2 border-dashed rounded-2xl p-6 text-center transition-colors duration-200 hover:bg-blue-50"
               style={{ borderColor: '#d1d5db' }}>
            <HiDocumentText className="mx-auto h-10 w-10 mb-3" style={{ color: '#6b7280' }} />
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              onChange={(e) => handleFileUpload(e.target.files[0], 'supportingDocuments')}
              className="hidden"
              id="supportingDocs"
              multiple
            />
            <label 
              htmlFor="supportingDocs"
              className="px-4 py-2 rounded-lg text-white font-bold cursor-pointer transition-all duration-200 hover:shadow-md inline-block"
              style={{ backgroundColor: '#6b7280' }}
            >
              Upload Documents
            </label>
            <p className="text-xs mt-2" style={{ color: '#6b7280' }}>
              Accepted formats: JPEG, PNG, PDF | Max 5MB per file
            </p>
            
            {formData.supportingDocuments && formData.supportingDocuments.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.supportingDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded-xl border">
                    <span className="text-sm font-semibold truncate" style={{ color: '#003875' }}>
                      {doc.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          supportingDocuments: prev.supportingDocuments.filter((_, i) => i !== index)
                        }));
                      }}
                      className="text-red-500 hover:text-red-700 ml-3"
                    >
                      <HiX className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Supporting Links */}
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Supporting Links (Optional)
          </label>
          <p className="text-sm mb-4" style={{ color: '#003875' }}>
            Add links to social media profiles, videos, articles, websites, or other online content that showcases the nominee's work or achievements.
          </p>
          
          <div className="space-y-3">
            {(formData.supportingLinks || ['']).map((link, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-grow">
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200"
                    style={{
                      backgroundColor: '#f8fafc',
                      '--tw-ring-color': '#DAA520'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#DAA520'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder={`Link ${index + 1}: https://example.com`}
                  />
                </div>
                {formData.supportingLinks && formData.supportingLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLinkField(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <HiX className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            
            {(!formData.supportingLinks || formData.supportingLinks.length < 5) && (
              <button
                type="button"
                onClick={addLinkField}
                className="flex items-center px-4 py-2 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-md"
                style={{ backgroundColor: '#DAA520' }}
              >
                <HiExternalLink className="mr-2 h-4 w-4" />
                Add Another Link
              </button>
            )}
          </div>
        </div>

        {/* Upload Guidelines */}
        <div className="rounded-2xl p-6" style={{ backgroundColor: '#fffbeb', border: '1px solid #DAA520' }}>
          <h3 className="text-lg font-bold mb-4" style={{ color: '#003875' }}>
            📋 Material Guidelines
          </h3>
          <ul className="space-y-2 text-sm font-medium" style={{ color: '#003875' }}>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>High-quality, recent photos work best for profiles</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Include certificates, awards, or media coverage if available</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Social media links should showcase their positive impact</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>All materials must be appropriate and family-friendly</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SupportingMaterials;
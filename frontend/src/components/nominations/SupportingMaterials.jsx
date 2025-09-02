// frontend/src/components/nominations/SupportingMaterials.jsx
import React from "react";
import { HiUpload, HiX, HiCheck } from "react-icons/hi";

function SupportingMaterials({ 
  formData, 
  setFormData, 
  errors, 
  uploadProgress, 
  handleFileUpload 
}) {
  
  const addSupportingLink = () => {
    setFormData(prev => ({
      ...prev,
      supportingLinks: [...prev.supportingLinks, ""]
    }));
  };

  const removeSupportingLink = (index) => {
    setFormData(prev => ({
      ...prev,
      supportingLinks: prev.supportingLinks.filter((_, i) => i !== index)
    }));
  };

  const updateSupportingLink = (index, value) => {
    setFormData(prev => ({
      ...prev,
      supportingLinks: prev.supportingLinks.map((link, i) => i === index ? value : link)
    }));
  };

  return (
    <section className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">5</span>
        SUPPORTING MATERIALS
      </h2>
      
      <div className="space-y-6">
        {/* Nominee Photo */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Nominee Photo (Required) *</label>
          <p className="text-sm text-gray-600 mb-4">
            Upload a clear, recent photo of the nominee. This will be used for profiles and ceremony materials if they're selected.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors duration-200">
            <HiUpload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600 font-semibold mb-4">
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
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-indigo-600 transition-colors duration-200"
            >
              Choose Photo
            </label>
            {uploadProgress.nomineePhoto !== null && uploadProgress.nomineePhoto < 100 && (
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress.nomineePhoto}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Uploading... {uploadProgress.nomineePhoto}%</p>
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
          </div>
        </div>

        {/* Supporting Documents */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Supporting Documents (Optional)
          </label>
          <p className="text-sm text-gray-600 mb-4">
            Upload certificates, awards, media features, recommendation letters, or other relevant documents that support the nomination.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors duration-200">
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
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:bg-gray-600 transition-colors duration-200"
            >
              Upload Documents
            </label>
            <p className="text-xs text-gray-500 mt-2">
              Accepted formats: JPEG, PNG, PDF | Max 5MB per file
            </p>
            
            {formData.supportingDocuments.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.supportingDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded border">
                    <span className="text-sm font-semibold text-gray-700 truncate">{doc.name}</span>
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
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Supporting Links (Optional)
          </label>
          <p className="text-sm text-gray-600 mb-4">
            Add links to social media profiles, videos, articles, websites, or other online content that showcases the nominee's work or achievements.
          </p>
          <div className="space-y-3">
            {formData.supportingLinks.map((link, index) => (
              <div key={index} className="flex gap-3">
                <input
                  type="url"
                  value={link}
                  onChange={(e) => updateSupportingLink(index, e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://example.com or social media link"
                />
                {formData.supportingLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSupportingLink(index)}
                    className="px-4 py-3 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <HiX className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSupportingLink}
              className="text-indigo-500 font-bold hover:text-indigo-700 transition-colors duration-200"
            >
              + Add another link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportingMaterials;
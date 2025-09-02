// File Path: frontend/src/components/admin/NominationModal.jsx
import React, { useState } from 'react';
import { HiX, HiPhotograph, HiDocumentText, HiExternalLink } from 'react-icons/hi';

function NominationModal({ 
  isOpen, 
  onClose, 
  nomination, 
  onUpdateStatus, 
  updating, 
  statusOptions 
}) {
  const [newStatus, setNewStatus] = useState('');

  if (!isOpen || !nomination) return null;

  const handleStatusUpdate = () => {
    if (newStatus && newStatus !== nomination.status) {
      onUpdateStatus(nomination._id, newStatus);
      setNewStatus('');
    }
  };

  const formatCategoryName = (category) => {
    return category?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown Category';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-gray-900">Nomination Details</h2>
              <p className="text-red-600 font-medium mt-1">ID: {nomination._id}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <HiX className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Status Update Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-black text-gray-900 mb-4">Update Status</h3>
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Status</label>
                <span className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium capitalize">
                  {nomination.status?.replace('-', ' ')}
                </span>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">New Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select new status...</option>
                  {statusOptions.filter(opt => opt.value !== 'all').map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pt-7">
                <button
                  onClick={handleStatusUpdate}
                  disabled={!newStatus || newStatus === nomination.status || updating}
                  className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {updating ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </div>

          {/* Nominee Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Nominee Photo */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-black text-gray-900 mb-4">Nominee Photo</h3>
              {nomination.supportingMaterials?.nomineePhoto ? (
                <div className="relative">
                  <img 
                    src={nomination.supportingMaterials.nomineePhoto} 
                    alt="Nominee" 
                    className="w-full h-64 object-cover rounded-xl border border-gray-200 shadow-md"
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <HiPhotograph className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">No photo provided</p>
                  </div>
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Nominee Details */}
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-4">Nominee Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-600">Full Name</span>
                      <p className="text-lg font-semibold text-gray-900">{nomination.nominee.name}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-600">Age</span>
                      <p className="text-lg font-semibold text-gray-900">{nomination.nominee.age} years old</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-600">County</span>
                      <p className="text-lg font-semibold text-gray-900">{nomination.nominee.county}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-600">Award Category</span>
                      <p className="text-lg font-semibold text-blue-600">{formatCategoryName(nomination.awardCategory)}</p>
                    </div>
                    {nomination.nominee.school && (
                      <div>
                        <span className="text-sm font-bold text-gray-600">School</span>
                        <p className="text-lg font-semibold text-gray-900">{nomination.nominee.school}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-sm font-bold text-gray-600">Submitted</span>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(nomination.createdAt).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Nominator Details */}
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-4">Nominator Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-600">Name</span>
                      <p className="text-lg font-semibold text-gray-900">{nomination.nominator.name}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-600">Email</span>
                      <p className="text-lg font-semibold text-gray-900">
                        <a href={`mailto:${nomination.nominator.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                          {nomination.nominator.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-600">Phone</span>
                      <p className="text-lg font-semibold text-gray-900">
                        <a href={`tel:${nomination.nominator.phone}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                          {nomination.nominator.phone}
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-600">Relationship</span>
                      <p className="text-lg font-semibold text-gray-900">{nomination.nominator.relationship}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Section */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-4">Biography</h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {nomination.details.shortBio}
              </p>
            </div>
          </div>

          {/* Nomination Statement */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-4">Nomination Statement</h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {nomination.details.nominationStatement}
              </p>
            </div>
          </div>

          {/* Supporting Materials */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-4">Supporting Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Supporting Documents */}
              <div>
                <h4 className="font-bold text-gray-700 mb-3 flex items-center">
                  <HiDocumentText className="h-5 w-5 mr-2" />
                  Documents ({nomination.supportingMaterials?.supportingDocuments?.length || 0})
                </h4>
                {nomination.supportingMaterials?.supportingDocuments?.length > 0 ? (
                  <div className="space-y-2">
                    {nomination.supportingMaterials.supportingDocuments.map((doc, index) => (
                      <a
                        key={index}
                        href={doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <HiDocumentText className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700 font-medium">Document {index + 1}</span>
                        <HiExternalLink className="h-4 w-4 text-blue-600 ml-auto" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No documents uploaded</p>
                )}
              </div>

              {/* Supporting Links */}
              <div>
                <h4 className="font-bold text-gray-700 mb-3 flex items-center">
                  <HiExternalLink className="h-5 w-5 mr-2" />
                  Links ({nomination.supportingMaterials?.supportingLinks?.length || 0})
                </h4>
                {nomination.supportingMaterials?.supportingLinks?.length > 0 ? (
                  <div className="space-y-2">
                    {nomination.supportingMaterials.supportingLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <HiExternalLink className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-green-700 font-medium truncate">Link {index + 1}</span>
                        <HiExternalLink className="h-4 w-4 text-green-600 ml-auto" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No links provided</p>
                )}
              </div>
            </div>
          </div>

          {/* Referee Information */}
          {nomination.referee && (
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-4">Referee Information</h3>
              <div className="bg-gray-50 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-bold text-gray-600">Name</span>
                  <p className="text-lg font-semibold text-gray-900">{nomination.referee.name}</p>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-600">Position</span>
                  <p className="text-lg font-semibold text-gray-900">{nomination.referee.position}</p>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-600">Phone</span>
                  <p className="text-lg font-semibold text-gray-900">
                    <a href={`tel:${nomination.referee.phone}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {nomination.referee.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-600">Email</span>
                  <p className="text-lg font-semibold text-gray-900">
                    <a href={`mailto:${nomination.referee.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {nomination.referee.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 rounded-b-xl">
          <div className="flex items-center justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NominationModal;
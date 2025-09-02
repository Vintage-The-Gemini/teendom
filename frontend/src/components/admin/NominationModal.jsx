// frontend/src/components/admin/NominationModal.jsx
import React from 'react';
import { HiX, HiPhotograph } from 'react-icons/hi';

function NominationModal({ 
  isOpen, 
  onClose, 
  nomination, 
  onUpdateStatus, 
  updating, 
  statusOptions 
}) {
  if (!isOpen || !nomination) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-900">Nomination Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <HiX className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Nominee Photo & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo */}
            <div className="md:col-span-1">
              {nomination.supportingMaterials?.nomineePhoto ? (
                <div className="space-y-4">
                  <img 
                    src={nomination.supportingMaterials.nomineePhoto}
                    alt={nomination.nominee.name}
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-64 bg-gray-200 rounded-lg border-2 border-gray-300 items-center justify-center">
                    <div className="text-center">
                      <HiPhotograph className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-semibold">Image unavailable</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <HiPhotograph className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-semibold">No photo provided</p>
                  </div>
                </div>
              )}
            </div>

            {/* Nominee Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Nominee Information</h3>
                <div className="space-y-2">
                  <p><span className="font-bold">Name:</span> {nomination.nominee.name}</p>
                  <p><span className="font-bold">Age:</span> {nomination.nominee.age}</p>
                  <p><span className="font-bold">Gender:</span> {nomination.nominee.gender}</p>
                  <p><span className="font-bold">County:</span> {nomination.nominee.county}</p>
                  <p><span className="font-bold">School:</span> {nomination.nominee.school || 'Not specified'}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Nominator Information</h3>
                <div className="space-y-2">
                  <p><span className="font-bold">Name:</span> {nomination.nominator.name}</p>
                  <p><span className="font-bold">Email:</span> {nomination.nominator.email}</p>
                  <p><span className="font-bold">Phone:</span> {nomination.nominator.phone}</p>
                  <p><span className="font-bold">Relationship:</span> {nomination.nominator.relationship}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Statement */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-3">Biography</h3>
            <p className="text-gray-700 leading-relaxed">{nomination.details.shortBio}</p>
          </div>

          <div>
            <h3 className="text-lg font-black text-gray-900 mb-3">Nomination Statement</h3>
            <p className="text-gray-700 leading-relaxed">{nomination.details.nominationStatement}</p>
          </div>

          {/* Supporting Materials */}
          {(nomination.supportingMaterials?.supportingDocuments?.length > 0 || 
            nomination.supportingMaterials?.supportingLinks?.length > 0) && (
            <div>
              <h3 className="text-lg font-black text-gray-900 mb-3">Supporting Materials</h3>
              <div className="space-y-2">
                {nomination.supportingMaterials.supportingDocuments?.length > 0 && (
                  <p><span className="font-bold">Documents:</span> {nomination.supportingMaterials.supportingDocuments.length} file(s)</p>
                )}
                {nomination.supportingMaterials.supportingLinks?.length > 0 && (
                  <div>
                    <p className="font-bold mb-1">Links:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {nomination.supportingMaterials.supportingLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Referee Information */}
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-3">Referee Information</h3>
            <div className="space-y-2">
              <p><span className="font-bold">Name:</span> {nomination.referee.name}</p>
              <p><span className="font-bold">Position:</span> {nomination.referee.position}</p>
              <p><span className="font-bold">Email:</span> {nomination.referee.email}</p>
              <p><span className="font-bold">Phone:</span> {nomination.referee.phone}</p>
            </div>
          </div>

          {/* Status Update */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-black text-gray-900 mb-3">Update Status</h3>
            <div className="flex flex-wrap gap-2">
              {statusOptions.slice(1).map(status => (
                <button
                  key={status.value}
                  onClick={() => onUpdateStatus(nomination._id, status.value)}
                  disabled={updating}
                  className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                    nomination.status === status.value 
                      ? `bg-${status.color}-500 text-white` 
                      : `bg-${status.color}-100 text-${status.color}-800 hover:bg-${status.color}-200`
                  } ${updating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NominationModal;
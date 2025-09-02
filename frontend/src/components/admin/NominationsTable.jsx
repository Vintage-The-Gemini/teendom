// frontend/src/components/admin/NominationsTable.jsx
import React from 'react';
import { HiEye, HiClock } from 'react-icons/hi';

function NominationsTable({ 
  nominations, 
  loading, 
  onViewDetails, 
  onUpdateStatus, 
  updating, 
  getStatusColor, 
  formatDate 
}) {
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-lg font-semibold text-gray-600">Loading nominations...</span>
          </div>
        </div>
      </div>
    );
  }

  if (nominations.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <div className="text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">No nominations found</h3>
            <p className="text-gray-600">Try adjusting your search filters or check back later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Nominee
                </th>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Nominator
                </th>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {nominations.map((nomination) => (
                <tr key={nomination._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        {nomination.nominee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {nomination.nominee.age} years • {nomination.nominee.county}
                      </div>
                      {nomination.nominee.school && (
                        <div className="text-sm text-gray-500">
                          {nomination.nominee.school}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900 capitalize">
                      {nomination.awardCategory.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={nomination.status}
                      onChange={(e) => onUpdateStatus(nomination._id, e.target.value)}
                      disabled={updating}
                      className={`text-sm font-bold px-3 py-1 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        updating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-md'
                      } bg-${getStatusColor(nomination.status)}-50 border-${getStatusColor(nomination.status)}-200 text-${getStatusColor(nomination.status)}-800`}
                    >
                      <option value="submitted">Submitted</option>
                      <option value="under-review">Under Review</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="finalist">Finalist</option>
                      <option value="winner">Winner</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {nomination.nominator.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {nomination.nominator.relationship}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <HiClock className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(nomination.submittedAt || nomination.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onViewDetails(nomination)}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      <HiEye className="h-4 w-4 mr-1" />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default NominationsTable;
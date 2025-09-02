// File Path: frontend/src/components/admin/NominationsTable.jsx
import React from 'react';
import { HiEye, HiPencilAlt } from 'react-icons/hi';

function NominationsTable({ 
  nominations, 
  loading, 
  onViewDetails, 
  onUpdateStatus, 
  updating, 
  getStatusColor, 
  formatDate 
}) {
  const statusOptions = [
    { value: 'submitted', label: 'Submitted', color: 'blue' },
    { value: 'under-review', label: 'Under Review', color: 'yellow' },
    { value: 'shortlisted', label: 'Shortlisted', color: 'purple' },
    { value: 'finalist', label: 'Finalist', color: 'green' },
    { value: 'winner', label: 'Winner', color: 'yellow' },
    { value: 'rejected', label: 'Rejected', color: 'red' }
  ];

  const getStatusBadgeClass = (status) => {
    const colors = {
      'submitted': 'bg-blue-100 text-blue-800 border-blue-200',
      'under-review': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'shortlisted': 'bg-purple-100 text-purple-800 border-purple-200',
      'finalist': 'bg-green-100 text-green-800 border-green-200',
      'winner': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'rejected': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryBadgeClass = (category) => {
    const colors = {
      'academic-excellence': 'bg-blue-50 text-blue-700 border-blue-200',
      'leadership': 'bg-red-50 text-red-700 border-red-200',
      'innovation': 'bg-purple-50 text-purple-700 border-purple-200',
      'community-service': 'bg-green-50 text-green-700 border-green-200',
      'sports-athletics': 'bg-orange-50 text-orange-700 border-orange-200',
      'arts-culture': 'bg-pink-50 text-pink-700 border-pink-200',
      'social-impact': 'bg-teal-50 text-teal-700 border-teal-200',
      'entrepreneurship': 'bg-emerald-50 text-emerald-700 border-emerald-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-gray-600 font-medium">Loading nominations...</span>
          </div>
        </div>
      </div>
    );
  }

  if (nominations.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">No nominations found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-4 border-b bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900">Nominations ({nominations.length})</h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Nominee</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Nominator</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Location</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Submitted</th>
                <th className="text-left py-4 px-6 font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {nominations.map((nomination) => (
                <tr key={nomination._id} className="border-b hover:bg-gray-50 transition-colors">
                  {/* Nominee Info */}
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-bold text-gray-900">{nomination.nominee.name}</div>
                      <div className="text-sm text-gray-500">Age: {nomination.nominee.age}</div>
                      {nomination.nominee.school && (
                        <div className="text-sm text-gray-500">{nomination.nominee.school}</div>
                      )}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryBadgeClass(nomination.awardCategory)}`}>
                      {nomination.awardCategory?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown'}
                    </span>
                  </td>

                  {/* Nominator */}
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-semibold text-gray-900">{nomination.nominator.name}</div>
                      <div className="text-sm text-gray-500">{nomination.nominator.relationship}</div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="py-4 px-6">
                    <span className="text-gray-700 font-medium">{nomination.nominee.county}</span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <select
                      value={nomination.status}
                      onChange={(e) => onUpdateStatus(nomination._id, e.target.value)}
                      disabled={updating}
                      className={`px-3 py-2 border rounded-lg font-medium text-sm ${getStatusBadgeClass(nomination.status)} focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50`}
                    >
                      {statusOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* Submitted Date */}
                  <td className="py-4 px-6">
                    <span className="text-gray-600 text-sm">
                      {formatDate(nomination.createdAt)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onViewDetails(nomination)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <HiEye className="h-5 w-5" />
                      </button>
                    </div>
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
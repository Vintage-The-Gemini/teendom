// frontend/src/pages/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { HiSearch, HiFilter, HiEye, HiCheck, HiX, HiDownload, HiRefresh } from 'react-icons/hi';

function AdminPanel() {
  const [nominations, setNominations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updating, setUpdating] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'All Status', color: 'gray' },
    { value: 'submitted', label: 'Submitted', color: 'blue' },
    { value: 'under-review', label: 'Under Review', color: 'yellow' },
    { value: 'shortlisted', label: 'Shortlisted', color: 'purple' },
    { value: 'finalist', label: 'Finalist', color: 'green' },
    { value: 'winner', label: 'Winner', color: 'gold' },
    { value: 'rejected', label: 'Rejected', color: 'red' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic Excellence' },
    { value: 'leadership', label: 'Leadership Excellence' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'teenpreneur', label: 'Teenpreneur' },
    { value: 'sports', label: 'Sports & Wellness' },
    { value: 'advocate', label: 'Advocate for Change' },
    { value: 'environmental', label: 'Environmental Champion' },
    { value: 'digital', label: 'Digital Impact' },
    { value: 'teen-year', label: 'Teen of the Year' },
    { value: 'creative', label: 'Creative Arts' }
  ];

  // Fetch nominations
  const fetchNominations = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedStatus !== 'all') params.append('status', selectedStatus);
      if (selectedCategory !== 'all') params.append('category', selectedCategory);

      const response = await fetch(`http://localhost:5000/api/nominations?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setNominations(data.nominations);
      } else {
        console.error('Failed to fetch nominations:', data.message);
      }
    } catch (error) {
      console.error('Error fetching nominations:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch dashboard stats
  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/nominations/stats/dashboard');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Update nomination status
  const updateNominationStatus = async (id, newStatus, adminNotes = '') => {
    try {
      setUpdating(true);
      const response = await fetch(`http://localhost:5000/api/nominations/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, adminNotes })
      });

      const data = await response.json();
      
      if (data.success) {
        alert(`✅ Status updated to: ${newStatus}`);
        fetchNominations();
        fetchStats();
        setShowModal(false);
      } else {
        alert(`❌ Failed to update status: ${data.message}`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('❌ Error updating status');
    } finally {
      setUpdating(false);
    }
  };

  // Filter nominations based on search
  const filteredNominations = nominations.filter(nomination => {
    const searchLower = searchTerm.toLowerCase();
    return (
      nomination.nominee.name.toLowerCase().includes(searchLower) ||
      nomination.nominator.name.toLowerCase().includes(searchLower) ||
      nomination.nominee.county.toLowerCase().includes(searchLower)
    );
  });

  // Load data on component mount and filter changes
  useEffect(() => {
    fetchNominations();
    fetchStats();
  }, [selectedStatus, selectedCategory]);

  const getStatusColor = (status) => {
    const statusOption = statusOptions.find(opt => opt.value === status);
    return statusOption?.color || 'gray';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900">TEENDOM AWARDS</h1>
              <p className="text-red-600 font-bold">Admin Panel - Nominations Management</p>
            </div>
            <button
              onClick={() => { fetchNominations(); fetchStats(); }}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
              <HiRefresh className="h-5 w-5 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      {stats && (
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-3xl font-black text-blue-600 mb-2">{stats.total}</div>
              <div className="text-gray-600 font-semibold">Total Nominations</div>
            </div>
            
            {stats.byStatus.map(stat => (
              <div key={stat._id} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className={`text-3xl font-black mb-2 text-${getStatusColor(stat._id)}-600`}>
                  {stat.count}
                </div>
                <div className="text-gray-600 font-semibold capitalize">
                  {stat._id.replace('-', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search nominations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 font-semibold"
              />
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 font-semibold"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 font-semibold"
            >
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>

            {/* Export Button */}
            <button className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
              <HiDownload className="h-5 w-5 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Nominations Table */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 font-semibold">Loading nominations...</p>
            </div>
          ) : filteredNominations.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600 font-semibold">No nominations found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Nominee</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Nominator</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-black text-gray-900 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredNominations.map((nomination) => (
                    <tr key={nomination._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-bold text-gray-900">{nomination.nominee.name}</div>
                          <div className="text-sm text-gray-500">Age {nomination.nominee.age} • {nomination.nominee.county}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 capitalize">
                          {nomination.awardCategory.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{nomination.nominator.name}</div>
                        <div className="text-sm text-gray-500">{nomination.nominator.relationship}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-${getStatusColor(nomination.status)}-100 text-${getStatusColor(nomination.status)}-800 capitalize`}>
                          {nomination.status.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                        {formatDate(nomination.submittedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => { setSelectedNomination(nomination); setShowModal(true); }}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <HiEye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => updateNominationStatus(nomination._id, 'shortlisted')}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                            title="Approve"
                          >
                            <HiCheck className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => updateNominationStatus(nomination._id, 'rejected')}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Reject"
                          >
                            <HiX className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Nomination Detail Modal */}
      {showModal && selectedNomination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-gray-900">Nomination Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Nominee Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">Nominee Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-bold">Name:</span> {selectedNomination.nominee.name}</p>
                    <p><span className="font-bold">Age:</span> {selectedNomination.nominee.age}</p>
                    <p><span className="font-bold">County:</span> {selectedNomination.nominee.county}</p>
                    <p><span className="font-bold">School:</span> {selectedNomination.nominee.school || 'Not specified'}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">Nominator Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-bold">Name:</span> {selectedNomination.nominator.name}</p>
                    <p><span className="font-bold">Email:</span> {selectedNomination.nominator.email}</p>
                    <p><span className="font-bold">Phone:</span> {selectedNomination.nominator.phone}</p>
                    <p><span className="font-bold">Relationship:</span> {selectedNomination.nominator.relationship}</p>
                  </div>
                </div>
              </div>

              {/* Bio and Statement */}
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Biography</h3>
                <p className="text-gray-700 leading-relaxed">{selectedNomination.details.shortBio}</p>
              </div>

              <div>
                <h3 className="text-lg font-black text-gray-900 mb-3">Nomination Statement</h3>
                <p className="text-gray-700 leading-relaxed">{selectedNomination.details.nominationStatement}</p>
              </div>

              {/* Status Update */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-black text-gray-900 mb-3">Update Status</h3>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.slice(1).map(status => (
                    <button
                      key={status.value}
                      onClick={() => updateNominationStatus(selectedNomination._id, status.value)}
                      disabled={updating}
                      className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                        selectedNomination.status === status.value 
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
      )}
    </div>
  );
}

export default AdminPanel;
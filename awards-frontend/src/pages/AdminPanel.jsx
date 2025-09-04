import React, { useState, useEffect } from "react";
import { 
  HiEye, 
  HiTrash, 
  HiDownload, 
  HiSearch, 
  HiFilter,
  HiUser,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiAcademicCap,
  HiExternalLink
} from "react-icons/hi";

const API_BASE_URL = "https://teendom-africa-backend.onrender.com/api";

function AdminPanel() {
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  
  const itemsPerPage = 10;

  const categories = [
    "Academic Excellence",
    "Leadership & Advocacy", 
    "Innovation & Technology",
    "Arts & Creativity",
    "Sports & Athletics",
    "Community Service",
    "Environmental Champion",
    "Entrepreneurship",
    "Health & Wellness Advocacy",
    "Cultural Heritage"
  ];

  useEffect(() => {
    fetchNominations();
  }, []);

  const fetchNominations = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/nominations`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNominations(data);
    } catch (err) {
      console.error("Error fetching nominations:", err);
      setError(`Failed to load nominations: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteNomination = async (id) => {
    if (!window.confirm("Are you sure you want to delete this nomination?")) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/nominations/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setNominations(Array.isArray(nominations) ? nominations.filter(nom => nom._id !== id) : []);
      setShowModal(false);
      alert("Nomination deleted successfully!");
    } catch (err) {
      console.error("Error deleting nomination:", err);
      alert(`Failed to delete nomination: ${err.message}`);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Nomination Date", "Nominator Name", "Nominator Email", "Nominator Phone", 
      "Relationship", "Nominee Name", "Nominee Age", "Gender", "County", 
      "Nationality", "School", "Grade", "Category", "Short Bio", "Statement",
      "Referee Name", "Referee Email", "Referee Phone", "Referee Organization"
    ];
    
    const csvData = (Array.isArray(nominations) ? nominations : []).map(nom => [
      new Date(nom.createdAt).toLocaleDateString(),
      nom.nominatorName,
      nom.nominatorEmail,
      nom.nominatorPhone,
      nom.relationshipToNominee,
      nom.nomineeName,
      nom.nomineeAge,
      nom.gender || 'Not specified',
      nom.nomineeCounty,
      nom.nationality || 'Not specified',
      nom.nomineeSchool,
      nom.currentGrade || 'Not specified',
      nom.awardCategory,
      nom.shortBio?.substring(0, 50) + '...' || '',
      nom.detailedStatement?.substring(0, 50) + '...' || '',
      nom.refereeName,
      nom.refereeEmail,
      nom.refereePhone,
      nom.refereeOrganization
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `nominations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredNominations = (Array.isArray(nominations) ? nominations : []).filter(nom => {
    const matchesSearch = nom.nomineeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nom.nominatorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nom.nominatorEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || nom.awardCategory === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const paginatedNominations = filteredNominations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredNominations.length / itemsPerPage);

  const viewNomination = (nomination) => {
    setSelectedNomination(nomination);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading nominations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchNominations}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Manage Teendom Africa Award Nominations</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={exportToCSV}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <HiDownload className="mr-2 h-4 w-4" />
                Export CSV
              </button>
              <button
                onClick={fetchNominations}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search nominations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <HiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {filteredNominations.length} of {nominations.length} nominations
            </div>
          </div>
        </div>

        {/* Nominations Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nominee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nominator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedNominations.map((nomination) => (
                  <tr key={nomination._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <HiUser className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {nomination.nomineeName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {nomination.nomineeAge} years • {nomination.nomineeCounty}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {nomination.awardCategory}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{nomination.nominatorName}</div>
                      <div className="text-sm text-gray-500">{nomination.nominatorEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(nomination.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => viewNomination(nomination)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                          title="View Details"
                        >
                          <HiEye className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => deleteNomination(nomination._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded"
                          title="Delete"
                        >
                          <HiTrash className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
                    {Math.min(currentPage * itemsPerPage, filteredNominations.length)} of{' '}
                    {filteredNominations.length} results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === i + 1
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for viewing nomination details */}
      {showModal && selectedNomination && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Nomination Details
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="max-h-96 overflow-y-auto space-y-4">
                {/* Nominee Information */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Nominee Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedNomination.nomineeName}</div>
                    <div><strong>Age:</strong> {selectedNomination.nomineeAge}</div>
                    <div><strong>County:</strong> {selectedNomination.nomineeCounty}</div>
                    <div><strong>School:</strong> {selectedNomination.nomineeSchool}</div>
                    {selectedNomination.gender && <div><strong>Gender:</strong> {selectedNomination.gender}</div>}
                    {selectedNomination.nationality && <div><strong>Nationality:</strong> {selectedNomination.nationality}</div>}
                    {selectedNomination.currentGrade && <div><strong>Grade:</strong> {selectedNomination.currentGrade}</div>}
                  </div>
                </div>

                {/* Nominator Information */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Nominator Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedNomination.nominatorName}</div>
                    <div><strong>Email:</strong> {selectedNomination.nominatorEmail}</div>
                    <div><strong>Phone:</strong> {selectedNomination.nominatorPhone}</div>
                    <div><strong>Relationship:</strong> {selectedNomination.relationshipToNominee}</div>
                  </div>
                </div>

                {/* Award Category */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Award Category</h4>
                  <p className="text-sm">{selectedNomination.awardCategory}</p>
                </div>

                {/* Nomination Statement */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Short Bio</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedNomination.shortBio}</p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Detailed Statement</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedNomination.detailedStatement}</p>
                </div>

                {/* Referee Information */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Referee Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Name:</strong> {selectedNomination.refereeName}</div>
                    <div><strong>Email:</strong> {selectedNomination.refereeEmail}</div>
                    <div><strong>Phone:</strong> {selectedNomination.refereePhone}</div>
                    <div><strong>Organization:</strong> {selectedNomination.refereeOrganization}</div>
                  </div>
                </div>

                {/* Supporting Materials */}
                {(selectedNomination.nomineePhoto || selectedNomination.supportingDocuments?.length > 0 || selectedNomination.supportingLinks?.length > 0) && (
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Supporting Materials</h4>
                    
                    {selectedNomination.nomineePhoto && (
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-2">Nominee Photo:</p>
                        <img 
                          src={selectedNomination.nomineePhoto} 
                          alt="Nominee" 
                          className="w-24 h-24 object-cover rounded-lg border"
                        />
                      </div>
                    )}
                    
                    {selectedNomination.supportingDocuments?.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-2">Documents:</p>
                        <div className="space-y-2">
                          {selectedNomination.supportingDocuments.map((doc, index) => (
                            <a 
                              key={index}
                              href={doc.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                            >
                              <HiExternalLink className="mr-1 h-4 w-4" />
                              {doc.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedNomination.supportingLinks?.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-2">Links:</p>
                        <div className="space-y-2">
                          {selectedNomination.supportingLinks.filter(link => link.trim()).map((link, index) => (
                            <a 
                              key={index}
                              href={link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-800 text-sm break-all"
                            >
                              <HiExternalLink className="mr-1 h-4 w-4 flex-shrink-0" />
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Submission Date */}
                <div className="text-sm text-gray-500">
                  <strong>Submitted:</strong> {new Date(selectedNomination.createdAt).toLocaleString()}
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-4 border-t">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => deleteNomination(selectedNomination._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Nomination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
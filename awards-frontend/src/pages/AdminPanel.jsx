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
  HiExternalLink,
  HiLogout,
  HiStar,
  HiShieldCheck,
  HiCheckCircle,
  HiXCircle,
  HiClock,
  HiPencil,
  HiRefresh
} from "react-icons/hi";
import { useAdminAuth } from "../contexts/AdminAuthContext";
import NominationFormDisplay from "../components/admin/NominationFormDisplay";
import { useToast } from "../components/admin/Toast";

const API_BASE_URL = "https://teendom-africa-backend.onrender.com/api";

function AdminPanel() {
  const { logout, adminUser } = useAdminAuth();
  const toast = useToast();
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [isUpdating, setIsUpdating] = useState(false);
  
  const itemsPerPage = 12;

  // Map actual database values to display names
  const categoryMap = {
    "academic": "Academic Excellence",
    "leadership": "Leadership & Advocacy", 
    "innovation": "Innovation & Technology",
    "arts": "Arts & Creativity",
    "sports": "Sports & Athletics",
    "community": "Community Service",
    "environmental": "Environmental Champion",
    "entrepreneurship": "Entrepreneurship",
    "health": "Health & Wellness Advocacy",
    "cultural": "Cultural Heritage"
  };
  
  const categories = Object.keys(categoryMap);

  const statusOptions = [
    { value: "submitted", label: "Submitted", color: "#3b82f6" },
    { value: "under-review", label: "Under Review", color: "#f59e0b" },
    { value: "shortlisted", label: "Shortlisted", color: "#22c55e" },
    { value: "rejected", label: "Rejected", color: "#ef4444" },
    { value: "finalist", label: "Finalist", color: "#06b6d4" },
    { value: "winner", label: "Winner", color: "#8b5cf6" }
  ];

  useEffect(() => {
    fetchNominations();
  }, []);

  const fetchNominations = async () => {
    try {
      setLoading(true);
      console.log('Fetching nominations from:', `${API_BASE_URL}/nominations`);
      const response = await fetch(`${API_BASE_URL}/nominations`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched nominations:', data);
      
      // Handle the backend response format
      const nominationsData = data.nominations || data;
      setNominations(Array.isArray(nominationsData) ? nominationsData : []);
    } catch (err) {
      console.error("Error fetching nominations:", err);
      setError(`Failed to load nominations: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateNominationStatus = async (id, newStatus, adminNotes = "") => {
    try {
      setIsUpdating(true);
      const response = await fetch(`${API_BASE_URL}/nominations/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus, adminNotes })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const updatedNomination = await response.json();
      
      // Update local state
      setNominations(prevNominations => 
        prevNominations.map(nom => 
          nom._id === id ? { ...nom, status: newStatus, adminNotes } : nom
        )
      );
      
      // Update selected nomination if it's the one being updated
      if (selectedNomination && selectedNomination._id === id) {
        setSelectedNomination(prev => ({ ...prev, status: newStatus, adminNotes }));
      }
      
      toast.success(`Nomination ${newStatus} successfully!`);
    } catch (err) {
      console.error("Error updating nomination:", err);
      toast.error(`Failed to update nomination: ${err.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const deleteNomination = async (id) => {
    if (!window.confirm("Are you sure you want to delete this nomination? This action cannot be undone.")) {
      return;
    }

    try {
      setIsUpdating(true);
      const response = await fetch(`${API_BASE_URL}/nominations/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setNominations(Array.isArray(nominations) ? nominations.filter(nom => nom._id !== id) : []);
      setShowModal(false);
      setSelectedNomination(null);
      toast.success("Nomination deleted successfully!");
    } catch (err) {
      console.error("Error deleting nomination:", err);
      toast.error(`Failed to delete nomination: ${err.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "ID", "Submission Date", "Status", "Category",
      "Nominee Name", "Nominee Age", "Nominee County", "Nominee School",
      "Nominator Name", "Nominator Email", "Nominator Phone", "Relationship",
      "Short Bio", "Detailed Statement", 
      "Referee Name", "Referee Email", "Referee Phone", "Referee Position",
      "Has Photo", "Documents Count", "Links Count", "Admin Notes"
    ];
    
    const csvData = (Array.isArray(nominations) ? nominations : []).map(nom => [
      nom._id,
      new Date(nom.submittedAt || nom.createdAt).toLocaleDateString(),
      nom.status,
      categoryMap[nom.awardCategory] || nom.awardCategory,
      nom.nominee?.name || nom.nomineeName || '',
      nom.nominee?.age || nom.nomineeAge || '',
      nom.nominee?.county || nom.nomineeCounty || '',
      nom.nominee?.school || nom.nomineeSchool || '',
      nom.nominator?.name || nom.nominatorName || '',
      nom.nominator?.email || nom.nominatorEmail || '',
      nom.nominator?.phone || nom.nominatorPhone || '',
      nom.nominator?.relationship || nom.relationshipToNominee || '',
      nom.details?.shortBio || nom.shortBio || '',
      nom.details?.nominationStatement || nom.detailedStatement || '',
      nom.referee?.name || nom.refereeName || '',
      nom.referee?.email || nom.refereeEmail || '',
      nom.referee?.phone || nom.refereePhone || '',
      nom.referee?.position || nom.refereeOrganization || '',
      nom.supportingMaterials?.nomineePhoto ? 'Yes' : 'No',
      nom.supportingMaterials?.supportingDocuments?.length || 0,
      nom.supportingMaterials?.supportingLinks?.filter(link => link && link.trim()).length || 0,
      nom.adminNotes || ''
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
      .join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `teendom_nominations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredNominations = (Array.isArray(nominations) ? nominations : []).filter(nom => {
    // Handle different field name formats from backend
    const nomineeName = nom.nominee?.name || nom.nomineeName || '';
    const nominatorName = nom.nominator?.name || nom.nominatorName || '';
    const nominatorEmail = nom.nominator?.email || nom.nominatorEmail || '';
    const category = nom.awardCategory || '';
    const status = nom.status || '';
    
    const matchesSearch = nomineeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nominatorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nominatorEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || category === filterCategory;
    const matchesStatus = !filterStatus || status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const paginatedNominations = filteredNominations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredNominations.length / itemsPerPage);

  const viewNomination = (nomination, mode = 'list') => {
    setSelectedNomination(nomination);
    setViewMode(mode);
    setShowModal(true);
  };

  const getStatusInfo = (status) => {
    const statusInfo = statusOptions.find(s => s.value === status);
    return statusInfo || { value: status, label: status, color: '#6b7280' };
  };

  const StatusBadge = ({ status, size = 'sm' }) => {
    const statusInfo = getStatusInfo(status);
    const sizeClasses = size === 'lg' ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs';
    
    return (
      <span 
        className={`inline-flex items-center rounded-full font-bold ${sizeClasses}`}
        style={{ 
          backgroundColor: statusInfo.color + '20', 
          color: statusInfo.color,
          border: `1px solid ${statusInfo.color}40`
        }}
      >
        {status === 'submitted' && <HiClock className="h-3 w-3 mr-1" />}
        {status === 'shortlisted' && <HiCheckCircle className="h-3 w-3 mr-1" />}
        {status === 'rejected' && <HiXCircle className="h-3 w-3 mr-1" />}
        {status === 'winner' && <HiStar className="h-3 w-3 mr-1" />}
        {status === 'finalist' && <HiStar className="h-3 w-3 mr-1" />}
        {statusInfo.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" 
           style={{ 
             background: 'linear-gradient(135deg, #0B1426 0%, #162A4A 50%, #0B1426 100%)' 
           }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent mx-auto mb-4" 
               style={{ borderColor: '#DAA520' }}></div>
          <p className="text-gray-300 text-lg font-medium">Loading nominations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" 
           style={{ 
             background: 'linear-gradient(135deg, #0B1426 0%, #162A4A 50%, #0B1426 100%)' 
           }}>
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border-2 max-w-md" 
             style={{ borderColor: '#DAA520' }}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
               style={{ backgroundColor: '#ef4444' }}>
            <HiExternalLink className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#003875' }}>Connection Error</h3>
          <p className="text-red-600 mb-6 font-medium">{error}</p>
          <button
            onClick={fetchNominations}
            className="px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg flex items-center mx-auto"
            style={{ backgroundColor: '#DAA520' }}
          >
            <HiRefresh className="mr-2 h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" 
         style={{ 
           background: 'linear-gradient(135deg, #0B1426 0%, #162A4A 50%, #0B1426 100%)' 
         }}>
      
      {/* Header */}
      <div className="backdrop-blur-xl border-b shadow-lg" 
           style={{ 
             background: 'rgba(255, 255, 255, 0.1)',
             borderColor: 'rgba(218, 165, 32, 0.3)'
           }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                   style={{ 
                     background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                     boxShadow: '0 4px 15px rgba(218, 165, 32, 0.4)'
                   }}>
                <HiShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black" 
                    style={{ 
                      color: '#DAA520',
                      fontFamily: "'Didot', 'Times New Roman', serif" 
                    }}>
                  TEENDOM ADMIN
                </h1>
                <p className="text-gray-300 font-medium text-sm">
                  {filteredNominations.length} nomination{filteredNominations.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={exportToCSV}
                disabled={filteredNominations.length === 0}
                className="flex items-center px-3 py-2 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg disabled:opacity-50 text-xs sm:text-sm"
                style={{ backgroundColor: '#22c55e' }}
              >
                <HiDownload className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Export
              </button>
              <button
                onClick={fetchNominations}
                className="flex items-center px-3 py-2 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg text-xs sm:text-sm"
                style={{ backgroundColor: '#3b82f6' }}
              >
                <HiRefresh className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Refresh
              </button>
              <button
                onClick={logout}
                className="flex items-center px-3 py-2 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg text-xs sm:text-sm"
                style={{ backgroundColor: '#ef4444' }}
              >
                <HiLogout className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Filters */}
        <div className="rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-xl border shadow-lg"
             style={{ 
               background: 'rgba(255, 255, 255, 0.1)',
               borderColor: 'rgba(218, 165, 32, 0.3)'
             }}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5" 
                         style={{ color: '#DAA520' }} />
                <input
                  type="text"
                  placeholder="Search nominations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 sm:pl-10 pr-4 py-2 sm:py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-300 text-white placeholder-gray-400 w-full sm:w-64 text-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    '--tw-ring-color': '#DAA520'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#DAA520'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(218, 165, 32, 0.3)'}
                />
              </div>
              
              <div className="relative w-full sm:w-auto">
                <HiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5" 
                         style={{ color: '#DAA520' }} />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-8 sm:pl-10 pr-8 py-2 sm:py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 appearance-none transition-colors duration-300 text-white w-full sm:w-56 text-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    '--tw-ring-color': '#DAA520'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#162A4A', color: 'white' }}>All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category} style={{ backgroundColor: '#162A4A', color: 'white' }}>
                      {categoryMap[category] || category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full sm:w-auto">
                <HiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5" 
                         style={{ color: '#DAA520' }} />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-8 sm:pl-10 pr-8 py-2 sm:py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 appearance-none transition-colors duration-300 text-white w-full sm:w-48 text-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    '--tw-ring-color': '#DAA520'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#162A4A', color: 'white' }}>All Statuses</option>
                  {statusOptions.map(status => (
                    <option key={status.value} value={status.value} style={{ backgroundColor: '#162A4A', color: 'white' }}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-300 text-center">
              Showing <strong>{paginatedNominations.length}</strong> of <strong>{filteredNominations.length}</strong> nominations
              {searchTerm || filterCategory || filterStatus ? (
                <span className="block text-xs text-gray-400">
                  ({nominations.length} total in database)
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {statusOptions.map(status => {
            const count = nominations.filter(nom => nom.status === status.value).length;
            return (
              <div key={status.value} 
                   className="rounded-xl p-3 sm:p-4 backdrop-blur-xl border text-center cursor-pointer transition-all duration-300 hover:scale-105"
                   style={{ 
                     background: 'rgba(255, 255, 255, 0.1)',
                     borderColor: count > 0 ? status.color + '60' : 'rgba(218, 165, 32, 0.3)'
                   }}
                   onClick={() => setFilterStatus(filterStatus === status.value ? '' : status.value)}>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{count}</div>
                <div className="text-xs font-medium" style={{ color: status.color }}>
                  {status.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nominations Grid */}
        {filteredNominations.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <HiUser className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-4 sm:mb-6 opacity-50" style={{ color: '#DAA520' }} />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-2 sm:mb-4">No nominations found</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              {searchTerm || filterCategory || filterStatus ? 
                'Try adjusting your search filters to see more results' : 
                'No nominations have been submitted yet'
              }
            </p>
            {(searchTerm || filterCategory || filterStatus) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('');
                  setFilterStatus('');
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-bold transition-all duration-300 hover:shadow-lg text-sm"
                style={{ backgroundColor: '#DAA520' }}
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {paginatedNominations.map((nomination) => (
              <div key={nomination._id} 
                   className="rounded-2xl p-3 sm:p-4 backdrop-blur-xl border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                   style={{ 
                     background: 'rgba(255, 255, 255, 0.1)',
                     borderColor: 'rgba(218, 165, 32, 0.3)'
                   }}>
                
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <StatusBadge status={nomination.status} />
                  <div className="text-xs text-gray-400">
                    {new Date(nomination.submittedAt || nomination.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Photo Preview */}
                {nomination.supportingMaterials?.nomineePhoto && (
                  <div className="mb-3">
                    <img 
                      src={nomination.supportingMaterials.nomineePhoto} 
                      alt="Nominee" 
                      className="w-full h-24 sm:h-32 object-cover rounded-lg border-2 shadow-md"
                      style={{ borderColor: '#DAA520' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                {/* Nominee Info */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3"
                       style={{ backgroundColor: '#DAA520' }}>
                    <HiUser className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm truncate">{nomination.nominee?.name || nomination.nomineeName}</h3>
                    <p className="text-xs text-gray-300 truncate">
                      {nomination.nominee?.age || nomination.nomineeAge}y • {nomination.nominee?.county || nomination.nomineeCounty}
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: '#DAA520', color: '#003875' }}>
                    <HiStar className="h-3 w-3 mr-1" />
                    {categoryMap[nomination.awardCategory] || nomination.awardCategory}
                  </span>
                </div>

                {/* Nominator & Materials Preview */}
                <div className="mb-3">
                  <p className="text-xs text-gray-300 truncate mb-1">
                    <strong>By:</strong> {nomination.nominator?.name || nomination.nominatorName}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>📄 {nomination.supportingMaterials?.supportingDocuments?.length || 0} docs</span>
                    <span>🔗 {nomination.supportingMaterials?.supportingLinks?.filter(link => link && link.trim()).length || 0} links</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-1 mb-2">
                  {nomination.status === 'submitted' && (
                    <>
                      <button
                        onClick={() => updateNominationStatus(nomination._id, 'shortlisted')}
                        disabled={isUpdating}
                        className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                        style={{ backgroundColor: '#22c55e' }}
                      >
                        <HiCheckCircle className="h-3 w-3 mr-1" />
                        <span className="hidden sm:inline">Shortlist</span>
                        <span className="sm:hidden">✓</span>
                      </button>
                      <button
                        onClick={() => updateNominationStatus(nomination._id, 'rejected')}
                        disabled={isUpdating}
                        className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                        style={{ backgroundColor: '#ef4444' }}
                      >
                        <HiXCircle className="h-3 w-3 mr-1" />
                        <span className="hidden sm:inline">Reject</span>
                        <span className="sm:hidden">✗</span>
                      </button>
                    </>
                  )}
                  
                  {nomination.status === 'shortlisted' && (
                    <>
                      <button
                        onClick={() => updateNominationStatus(nomination._id, 'finalist')}
                        disabled={isUpdating}
                        className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                        style={{ backgroundColor: '#06b6d4' }}
                      >
                        <HiStar className="h-3 w-3 mr-1" />
                        <span className="hidden sm:inline">Finalist</span>
                        <span className="sm:hidden">F</span>
                      </button>
                      <button
                        onClick={() => updateNominationStatus(nomination._id, 'winner')}
                        disabled={isUpdating}
                        className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                        style={{ backgroundColor: '#8b5cf6' }}
                      >
                        <HiStar className="h-3 w-3 mr-1" />
                        <span className="hidden sm:inline">Winner</span>
                        <span className="sm:hidden">W</span>
                      </button>
                    </>
                  )}

                  {(nomination.status === 'rejected' || nomination.status === 'shortlisted') && (
                    <button
                      onClick={() => updateNominationStatus(nomination._id, 'submitted')}
                      disabled={isUpdating}
                      className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50 col-span-2"
                      style={{ backgroundColor: '#f59e0b' }}
                    >
                      <HiClock className="h-3 w-3 mr-1" />
                      Reset to Submitted
                    </button>
                  )}
                </div>

                {/* View Actions */}
                <div className="grid grid-cols-3 gap-1">
                  <button
                    onClick={() => viewNomination(nomination, 'form')}
                    className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#3b82f6' }}
                    title="View as Form"
                  >
                    <HiEye className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => viewNomination(nomination, 'list')}
                    className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#10b981' }}
                    title="Quick View"
                  >
                    <HiPencil className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => deleteNomination(nomination._id)}
                    disabled={isUpdating}
                    className="flex items-center justify-center py-1 px-1 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                    style={{ backgroundColor: '#ef4444' }}
                    title="Delete"
                  >
                    <HiTrash className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm"
              style={{ 
                backgroundColor: currentPage === 1 ? 'rgba(255, 255, 255, 0.1)' : '#DAA520',
                color: currentPage === 1 ? '#9ca3af' : '#003875'
              }}
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm"
              style={{ 
                backgroundColor: currentPage === 1 ? 'rgba(255, 255, 255, 0.1)' : '#DAA520',
                color: currentPage === 1 ? '#9ca3af' : '#003875'
              }}
            >
              Prev
            </button>
            
            {/* Page Numbers */}
            {[...Array(Math.min(3, totalPages))].map((_, i) => {
              let pageNum;
              if (totalPages <= 3) {
                pageNum = i + 1;
              } else if (currentPage <= 2) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 1) {
                pageNum = totalPages - 2 + i;
              } else {
                pageNum = currentPage - 1 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                    currentPage === pageNum ? 'shadow-lg' : ''
                  }`}
                  style={{
                    backgroundColor: currentPage === pageNum ? '#DAA520' : 'rgba(255, 255, 255, 0.1)',
                    color: currentPage === pageNum ? '#003875' : 'white'
                  }}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm"
              style={{ 
                backgroundColor: currentPage === totalPages ? 'rgba(255, 255, 255, 0.1)' : '#DAA520',
                color: currentPage === totalPages ? '#9ca3af' : '#003875'
              }}
            >
              Next
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm"
              style={{ 
                backgroundColor: currentPage === totalPages ? 'rgba(255, 255, 255, 0.1)' : '#DAA520',
                color: currentPage === totalPages ? '#9ca3af' : '#003875'
              }}
            >
              Last
            </button>
          </div>
        )}
      </div>

      {/* Toast Container */}
      <toast.ToastContainer />
      
      {/* Modal for viewing nomination details */}
      {showModal && selectedNomination && (
        <div className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full z-50 backdrop-blur-sm px-4" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="relative top-4 mx-auto p-4 border w-full max-w-7xl shadow-2xl rounded-2xl mb-8"
               style={{ 
                 backgroundColor: 'white',
                 borderColor: '#DAA520'
               }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 pb-4 border-b-2 space-y-4 sm:space-y-0"
                 style={{ borderColor: '#DAA520' }}>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <h3 className="text-xl sm:text-2xl font-black" 
                    style={{ 
                      color: '#003875',
                      fontFamily: "'Didot', 'Times New Roman', serif"
                    }}>
                  {viewMode === 'form' ? 'FORM VIEW' : 'DETAILS'}
                </h3>
                <StatusBadge status={selectedNomination.status} size="lg" />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode(viewMode === 'form' ? 'list' : 'form')}
                  className="px-3 sm:px-4 py-2 rounded-lg text-white font-medium text-xs sm:text-sm transition-all duration-300"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  {viewMode === 'form' ? 'List View' : 'Form View'}
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedNomination(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  style={{ color: '#6b7280' }}
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="max-h-[60vh] sm:max-h-[75vh] overflow-y-auto">
              {viewMode === 'form' ? (
                <NominationFormDisplay nomination={selectedNomination} />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {/* Basic Info */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3 flex items-center" style={{ color: '#003875' }}>
                        <HiUser className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Nominee Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {selectedNomination.nominee?.name || selectedNomination.nomineeName}</p>
                        <p><strong>Age:</strong> {selectedNomination.nominee?.age || selectedNomination.nomineeAge}</p>
                        <p><strong>County:</strong> {selectedNomination.nominee?.county || selectedNomination.nomineeCounty}</p>
                        <p><strong>School:</strong> {selectedNomination.nominee?.school || selectedNomination.nomineeSchool}</p>
                        <p><strong>Email:</strong> {selectedNomination.nominee?.email || selectedNomination.nomineeEmail}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3 flex items-center" style={{ color: '#003875' }}>
                        <HiMail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Nominator Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {selectedNomination.nominator?.name || selectedNomination.nominatorName}</p>
                        <p><strong>Email:</strong> {selectedNomination.nominator?.email || selectedNomination.nominatorEmail}</p>
                        <p><strong>Phone:</strong> {selectedNomination.nominator?.phone || selectedNomination.nominatorPhone}</p>
                        <p><strong>Relationship:</strong> {selectedNomination.nominator?.relationship || selectedNomination.relationshipToNominee}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3 flex items-center" style={{ color: '#003875' }}>
                        <HiStar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Award Category
                      </h4>
                      <p className="text-sm">{categoryMap[selectedNomination.awardCategory] || selectedNomination.awardCategory}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Short Bio</h4>
                      <p className="text-sm whitespace-pre-wrap max-h-24 sm:max-h-32 overflow-y-auto">
                        {selectedNomination.details?.shortBio || selectedNomination.shortBio}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Detailed Statement</h4>
                      <p className="text-sm whitespace-pre-wrap max-h-32 sm:max-h-40 overflow-y-auto">
                        {selectedNomination.details?.nominationStatement || selectedNomination.detailedStatement}
                      </p>
                    </div>
                  </div>

                  {/* Supporting Materials & Actions */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Supporting Materials</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Photo:</strong> {selectedNomination.supportingMaterials?.nomineePhoto ? 
                            <a href={selectedNomination.supportingMaterials.nomineePhoto} target="_blank" rel="noopener noreferrer" 
                               className="text-blue-600 hover:underline ml-2">View Photo</a> : 
                            <span className="text-gray-500 ml-2">Not provided</span>
                          }
                        </div>
                        <div>
                          <strong>Documents:</strong> {selectedNomination.supportingMaterials?.supportingDocuments?.length || 0} files
                        </div>
                        <div>
                          <strong>Links:</strong> {selectedNomination.supportingMaterials?.supportingLinks?.filter(link => link && link.trim()).length || 0} links
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Referee</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {selectedNomination.referee?.name || selectedNomination.refereeName}</p>
                        <p><strong>Email:</strong> {selectedNomination.referee?.email || selectedNomination.refereeEmail}</p>
                        <p><strong>Position:</strong> {selectedNomination.referee?.position || selectedNomination.refereeOrganization}</p>
                      </div>
                    </div>

                    {/* Status Management */}
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Status Management</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {statusOptions.filter(s => s.value !== selectedNomination.status).map(status => (
                          <button
                            key={status.value}
                            onClick={() => updateNominationStatus(selectedNomination._id, status.value)}
                            disabled={isUpdating}
                            className="px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-white font-medium text-xs transition-all duration-300 hover:shadow-md disabled:opacity-50"
                            style={{ backgroundColor: status.color }}
                          >
                            {status.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedNomination.adminNotes && (
                      <div>
                        <h4 className="font-bold text-base sm:text-lg mb-3" style={{ color: '#003875' }}>Admin Notes</h4>
                        <p className="text-sm whitespace-pre-wrap bg-gray-50 p-3 rounded-lg">
                          {selectedNomination.adminNotes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6 pt-4 border-t space-y-4 sm:space-y-0">
              <div className="text-xs sm:text-sm text-gray-600">
                <strong>ID:</strong> {selectedNomination._id}<br/>
                <strong>Submitted:</strong> {new Date(selectedNomination.submittedAt || selectedNomination.createdAt).toLocaleString()}
              </div>
              <div className="flex space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedNomination(null);
                  }}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm"
                  style={{ backgroundColor: '#6b7280', color: 'white' }}
                >
                  Close
                </button>
                <button
                  onClick={() => deleteNomination(selectedNomination._id)}
                  disabled={isUpdating}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 text-sm"
                  style={{ backgroundColor: '#ef4444', color: 'white' }}
                >
                  Delete
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
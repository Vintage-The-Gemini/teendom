// File Path: frontend/src/pages/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminLogin from '../components/AdminLogin';
import AdminHeader from '../components/admin/AdminHeader';
import StatsCards from '../components/admin/StatsCards';
import FilterControls from '../components/admin/FilterControls';
import NominationsTable from '../components/admin/NominationsTable';
import NominationModal from '../components/admin/NominationModal';
import { API_ENDPOINTS } from '../config/api';

function AdminPanel() {
  const { isAuthenticated, loading: authLoading, login, logout, authenticatedApiCall } = useAuth();
  
  const [nominations, setNominations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [csvExporting, setCsvExporting] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'All Status', color: 'gray' },
    { value: 'submitted', label: 'Submitted', color: 'blue' },
    { value: 'under-review', label: 'Under Review', color: 'yellow' },
    { value: 'shortlisted', label: 'Shortlisted', color: 'purple' },
    { value: 'finalist', label: 'Finalist', color: 'green' },
    { value: 'winner', label: 'Winner', color: 'yellow' },
    { value: 'rejected', label: 'Rejected', color: 'red' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic-excellence', label: 'Academic Excellence' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'innovation', label: 'Innovation & Creativity' },
    { value: 'community-service', label: 'Community Service' },
    { value: 'sports-athletics', label: 'Sports & Athletics' },
    { value: 'arts-culture', label: 'Arts & Culture' },
    { value: 'social-impact', label: 'Social Impact' },
    { value: 'entrepreneurship', label: 'Entrepreneurship' }
  ];

  // Fetch nominations from backend (authenticated)
  const fetchNominations = async () => {
    if (!isAuthenticated) return;
    
    try {
      setLoading(true);
      const response = await authenticatedApiCall(API_ENDPOINTS.NOMINATIONS);
      const data = await response.json();
      
      if (data.success) {
        console.log('📊 Loaded nominations:', data.nominations.length);
        setNominations(data.nominations || []);
      } else {
        console.error('Failed to fetch nominations:', data.message);
        setNominations([]);
      }
    } catch (error) {
      console.error('Error fetching nominations:', error);
      setNominations([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch statistics (authenticated)
  const fetchStats = async () => {
    if (!isAuthenticated) return;
    
    try {
      const response = await authenticatedApiCall(`${API_ENDPOINTS.NOMINATIONS}/stats/dashboard`);
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
        console.log('📈 Dashboard stats loaded');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Create mock stats if API fails
      const mockStats = {
        total: nominations.length,
        byStatus: statusOptions
          .filter(s => s.value !== 'all')
          .map(status => ({
            _id: status.value,
            count: nominations.filter(n => n.status === status.value).length
          }))
      };
      setStats(mockStats);
    }
  };

  // Update nomination status (authenticated)
  const updateNominationStatus = async (id, newStatus) => {
    if (!isAuthenticated) return;
    
    try {
      setUpdating(true);
      const response = await authenticatedApiCall(`${API_ENDPOINTS.NOMINATIONS}/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Update local state
        setNominations(prev => prev.map(nom => 
          nom._id === id ? { ...nom, status: newStatus } : nom
        ));
        
        // Update selected nomination if it's the one being viewed
        if (selectedNomination && selectedNomination._id === id) {
          setSelectedNomination(prev => ({ ...prev, status: newStatus }));
        }
        
        console.log(`✅ Updated nomination ${id} to ${newStatus}`);
        
        // Refresh stats
        fetchStats();
      } else {
        console.error('Failed to update status:', data.message);
        alert('Failed to update status: ' + data.message);
      }
    } catch (error) {
      console.error('Error updating nomination status:', error);
      alert('Error updating nomination status. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  // Export to CSV
  const exportToCSV = async () => {
    try {
      setCsvExporting(true);
      
      // Create CSV content
      const headers = [
        'ID', 'Nominee Name', 'Nominee Age', 'County', 'Category', 
        'Nominator Name', 'Nominator Email', 'Nominator Phone', 'Status', 'Submitted Date'
      ];
      
      const csvRows = filteredNominations.map(nomination => {
        return [
          nomination._id,
          nomination.nominee.name,
          nomination.nominee.age,
          nomination.nominee.county,
          nomination.awardCategory?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown',
          nomination.nominator.name,
          nomination.nominator.email,
          nomination.nominator.phone,
          nomination.status,
          new Date(nomination.createdAt).toLocaleDateString()
        ].map(field => {
          const stringValue = field?.toString() || '';
          return stringValue.includes(',') ? `"${stringValue}"` : stringValue;
        }).join(',');
      });
      
      const csvContent = [headers.join(','), ...csvRows].join('\n');
      
      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `teendom-nominations-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('📄 CSV exported successfully');
    } catch (error) {
      console.error('Error exporting CSV:', error);
      alert('Error exporting CSV. Please try again.');
    } finally {
      setCsvExporting(false);
    }
  };

  // Filter nominations
  const filteredNominations = nominations.filter(nomination => {
    const matchesSearch = nomination.nominee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nomination.nominator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nomination.nominee.county.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || nomination.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || nomination.awardCategory === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Handle view nomination details
  const handleViewDetails = (nomination) => {
    setSelectedNomination(nomination);
    setShowModal(true);
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchNominations();
    fetchStats();
  };

  // Load data on mount (only if authenticated)
  useEffect(() => {
    if (isAuthenticated) {
      fetchNominations();
      fetchStats();
    }
  }, [isAuthenticated]);

  // Helper functions
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

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }

  // Show admin panel if authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component with Logout */}
      <AdminHeader onRefresh={handleRefresh} onLogout={logout} />

      {/* Stats Component */}
      <StatsCards stats={stats} getStatusColor={getStatusColor} />

      {/* Filter Controls Component */}
      <FilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onExportCSV={exportToCSV}
        csvExporting={csvExporting}
        filteredCount={filteredNominations.length}
        statusOptions={statusOptions}
        categoryOptions={categoryOptions}
      />

      {/* Nominations Table Component */}
      <NominationsTable
        nominations={filteredNominations}
        loading={loading}
        onViewDetails={handleViewDetails}
        onUpdateStatus={updateNominationStatus}
        updating={updating}
        getStatusColor={getStatusColor}
        formatDate={formatDate}
      />

      {/* Nomination Detail Modal Component */}
      <NominationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        nomination={selectedNomination}
        onUpdateStatus={updateNominationStatus}
        updating={updating}
        statusOptions={statusOptions}
      />
    </div>
  );
}

export default AdminPanel;
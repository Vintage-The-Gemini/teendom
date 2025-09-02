// frontend/src/pages/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import StatsCards from '../components/admin/StatsCards';
import FilterControls from '../components/admin/FilterControls';
import NominationsTable from '../components/admin/NominationsTable';
import NominationModal from '../components/admin/NominationModal';

function AdminPanel() {
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

  // Fetch nominations from backend
  const fetchNominations = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/nominations');
      const data = await response.json();
      
      if (data.success) {
        console.log('📊 Loaded nominations:', data.nominations.length);
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

  // Fetch statistics
  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/nominations/stats/dashboard');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
        console.log('📈 Dashboard stats loaded');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Update nomination status
  const updateNominationStatus = async (id, newStatus) => {
    try {
      setUpdating(true);
      const response = await fetch(`http://localhost:5000/api/nominations/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Update local state
        setNominations(prev => prev.map(nom => 
          nom._id === id ? { ...nom, status: newStatus } : nom
        ));
        
        if (selectedNomination && selectedNomination._id === id) {
          setSelectedNomination(prev => ({ ...prev, status: newStatus }));
        }
        
        console.log(`✅ Updated nomination ${id} to ${newStatus}`);
        fetchStats(); // Refresh stats
      } else {
        console.error('Failed to update status:', data.message);
      }
    } catch (error) {
      console.error('Error updating nomination:', error);
    } finally {
      setUpdating(false);
    }
  };

  // Export nominations to CSV
  const exportToCSV = async () => {
    try {
      setCsvExporting(true);
      
      // Prepare CSV data
      const csvData = filteredNominations.map(nomination => ({
        'Nomination ID': nomination._id,
        'Nominee Name': nomination.nominee.name,
        'Nominee Age': nomination.nominee.age,
        'Nominee Gender': nomination.nominee.gender,
        'Nominee County': nomination.nominee.county,
        'Nominee School': nomination.nominee.school || 'Not specified',
        'Award Category': nomination.awardCategory.replace('-', ' '),
        'Nominator Name': nomination.nominator.name,
        'Nominator Email': nomination.nominator.email,
        'Nominator Phone': nomination.nominator.phone,
        'Relationship': nomination.nominator.relationship,
        'Status': nomination.status,
        'Submitted At': new Date(nomination.submittedAt || nomination.createdAt).toLocaleDateString(),
        'Short Bio': nomination.details.shortBio,
        'Nomination Statement': nomination.details.nominationStatement,
        'Referee Name': nomination.referee.name,
        'Referee Position': nomination.referee.position,
        'Referee Email': nomination.referee.email,
        'Referee Phone': nomination.referee.phone,
        'Has Photo': nomination.supportingMaterials?.nomineePhoto ? 'Yes' : 'No',
        'Photo URL': nomination.supportingMaterials?.nomineePhoto || '',
        'Supporting Documents': nomination.supportingMaterials?.supportingDocuments?.length || 0,
        'Supporting Links': nomination.supportingMaterials?.supportingLinks?.length || 0,
        'Admin Notes': nomination.adminNotes || ''
      }));

      // Convert to CSV
      const headers = Object.keys(csvData[0]).join(',');
      const csvRows = csvData.map(row => 
        Object.values(row).map(value => {
          // Escape quotes and wrap in quotes if contains comma
          const stringValue = String(value).replace(/"/g, '""');
          return stringValue.includes(',') ? `"${stringValue}"` : stringValue;
        }).join(',')
      );
      
      const csvContent = [headers, ...csvRows].join('\n');
      
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

  // Load data on mount
  useEffect(() => {
    fetchNominations();
    fetchStats();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Component */}
      <AdminHeader onRefresh={handleRefresh} />

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
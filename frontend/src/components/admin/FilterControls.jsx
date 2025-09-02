// frontend/src/components/admin/FilterControls.jsx
import React from 'react';
import { HiSearch, HiDownload } from 'react-icons/hi';

function FilterControls({ 
  searchTerm, 
  setSearchTerm, 
  selectedStatus, 
  setSelectedStatus, 
  selectedCategory, 
  setSelectedCategory,
  onExportCSV,
  csvExporting,
  filteredCount,
  statusOptions,
  categoryOptions 
}) {
  return (
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
          <button 
            onClick={onExportCSV}
            disabled={csvExporting || filteredCount === 0}
            className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <HiDownload className="h-5 w-5 mr-2" />
            {csvExporting ? 'Exporting...' : `Export CSV (${filteredCount})`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
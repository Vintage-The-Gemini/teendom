// File Path: frontend/src/components/admin/FilterControls.jsx
import React from 'react';
import { HiSearch, HiDownload, HiFilter, HiX } from 'react-icons/hi';

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
  const hasActiveFilters = selectedStatus !== 'all' || selectedCategory !== 'all' || searchTerm.trim() !== '';

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedStatus('all');
    setSelectedCategory('all');
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedStatus !== 'all') count++;
    if (selectedCategory !== 'all') count++;
    if (searchTerm.trim() !== '') count++;
    return count;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HiFilter className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-bold text-gray-900">Filter & Search</h3>
              {hasActiveFilters && (
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                  {getActiveFilterCount()} active
                </span>
              )}
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center space-x-1"
              >
                <HiX className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Search Nominations
              </label>
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Name, county, nominator..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <HiX className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
              >
                {categoryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Export Button */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Export Data
              </label>
              <button 
                onClick={onExportCSV}
                disabled={csvExporting || filteredCount === 0}
                className="w-full flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <HiDownload className="h-5 w-5 mr-2" />
                {csvExporting ? (
                  <span>Exporting...</span>
                ) : (
                  <span>CSV ({filteredCount})</span>
                )}
              </button>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-600">
                <span className="font-medium">Showing {filteredCount} results</span>
                {hasActiveFilters && (
                  <span className="ml-2">
                    • Filters applied: 
                    {searchTerm && <span className="ml-1 font-medium">Search</span>}
                    {selectedStatus !== 'all' && <span className="ml-1 font-medium">Status</span>}
                    {selectedCategory !== 'all' && <span className="ml-1 font-medium">Category</span>}
                  </span>
                )}
              </div>
              {filteredCount > 0 && (
                <div className="text-green-600 font-medium">
                  Ready to export
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
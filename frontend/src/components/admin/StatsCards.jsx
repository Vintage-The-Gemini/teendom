// File Path: frontend/src/components/admin/StatsCards.jsx
import React from 'react';
import { HiUsers, HiClipboardList, HiCheckCircle, HiClock } from 'react-icons/hi';

function StatsCards({ stats, getStatusColor }) {
  if (!stats) {
    // Loading state
    return (
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-sm border animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    const icons = {
      'submitted': HiClipboardList,
      'under-review': HiClock,
      'shortlisted': HiUsers,
      'finalist': HiCheckCircle,
      'winner': HiCheckCircle,
      'rejected': HiClipboardList
    };
    return icons[status] || HiClipboardList;
  };

  const getStatusColorClass = (status) => {
    const colors = {
      'submitted': 'text-blue-600 bg-blue-100',
      'under-review': 'text-yellow-600 bg-yellow-100',
      'shortlisted': 'text-purple-600 bg-purple-100',
      'finalist': 'text-green-600 bg-green-100',
      'winner': 'text-yellow-600 bg-yellow-100',
      'rejected': 'text-red-600 bg-red-100'
    };
    return colors[status] || 'text-gray-600 bg-gray-100';
  };

  const formatStatusLabel = (status) => {
    return status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600 font-medium">Real-time nomination statistics and status breakdown</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Nominations */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-black text-blue-600 mb-2">{stats.total || 0}</div>
              <div className="text-gray-600 font-semibold">Total Nominations</div>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <HiClipboardList className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
        
        {/* Status Breakdown */}
        {stats.byStatus && stats.byStatus.length > 0 ? (
          stats.byStatus.slice(0, 3).map((stat) => {
            const IconComponent = getStatusIcon(stat._id);
            return (
              <div key={stat._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-black mb-2 ${getStatusColorClass(stat._id).split(' ')[0]}`}>
                      {stat.count}
                    </div>
                    <div className="text-gray-600 font-semibold">
                      {formatStatusLabel(stat._id)}
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${getStatusColorClass(stat._id).split(' ')[1]}`}>
                    <IconComponent className={`h-8 w-8 ${getStatusColorClass(stat._id).split(' ')[0]}`} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // Fallback cards if no status data
          [
            { label: 'Submitted', count: 0, color: 'blue', icon: HiClipboardList },
            { label: 'Under Review', count: 0, color: 'yellow', icon: HiClock },
            { label: 'Shortlisted', count: 0, color: 'purple', icon: HiUsers }
          ].map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-3xl font-black text-${item.color}-600 mb-2`}>{item.count}</div>
                  <div className="text-gray-600 font-semibold">{item.label}</div>
                </div>
                <div className={`p-3 bg-${item.color}-100 rounded-full`}>
                  <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detailed Status Breakdown */}
      {stats.byStatus && stats.byStatus.length > 3 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-black text-gray-900 mb-4">Complete Status Breakdown</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {stats.byStatus.map((stat) => (
              <div key={stat._id} className="text-center">
                <div className={`text-2xl font-bold mb-1 ${getStatusColorClass(stat._id).split(' ')[0]}`}>
                  {stat.count}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {formatStatusLabel(stat._id)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StatsCards;
// frontend/src/components/admin/StatsCards.jsx
import React from 'react';

function StatsCards({ stats, getStatusColor }) {
  if (!stats) return null;

  return (
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
  );
}

export default StatsCards;
// frontend/src/components/admin/AdminHeader.jsx
import React from 'react';
import { HiRefresh } from 'react-icons/hi';

function AdminHeader({ onRefresh }) {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-gray-900">TEENDOM AWARDS</h1>
            <p className="text-red-600 font-bold">Admin Panel - Nominations Management</p>
          </div>
          <button
            onClick={onRefresh}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            <HiRefresh className="h-5 w-5 mr-2" />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
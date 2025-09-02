// File Path: frontend/src/components/admin/AdminHeader.jsx
import React from 'react';
import { HiRefresh, HiLogout, HiUser } from 'react-icons/hi';
import { useAuth } from '../../contexts/AuthContext';

function AdminHeader({ onRefresh, onLogout }) {
  const { admin } = useAuth();

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left: Title and Welcome */}
          <div>
            <h1 className="text-3xl font-black text-gray-900">TEENDOM AWARDS</h1>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-red-600 font-bold">Admin Panel - Nominations Management</p>
              {admin && (
                <div className="flex items-center space-x-2 ml-4 px-3 py-1 bg-green-100 rounded-full">
                  <HiUser className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">
                    Welcome, {admin.name}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Right: Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Refresh Button */}
            <button
              onClick={onRefresh}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              title="Refresh Data"
            >
              <HiRefresh className="h-5 w-5 mr-2" />
              Refresh
            </button>
            
            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
              title="Logout"
            >
              <HiLogout className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
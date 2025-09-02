// File Path: frontend/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing session on app load
  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const storedToken = localStorage.getItem('adminToken');
      const storedAdmin = localStorage.getItem('adminInfo');

      if (storedToken && storedAdmin) {
        // Verify token with backend
        const response = await fetch(`${API_ENDPOINTS.HEALTH.replace('/health', '')}/auth/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: storedToken })
        });

        const data = await response.json();

        if (data.success) {
          setToken(storedToken);
          setAdmin(JSON.parse(storedAdmin));
          setIsAuthenticated(true);
          console.log('✅ Session restored for admin');
        } else {
          // Token is invalid, clear storage
          clearSession();
        }
      }
    } catch (error) {
      console.error('Session check error:', error);
      clearSession();
    } finally {
      setLoading(false);
    }
  };

  const login = (adminInfo, authToken) => {
    setAdmin(adminInfo);
    setToken(authToken);
    setIsAuthenticated(true);
    
    // Store in localStorage
    localStorage.setItem('adminToken', authToken);
    localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
    
    console.log('✅ Admin logged in:', adminInfo.email);
  };

  const logout = async () => {
    try {
      // Call logout endpoint (optional)
      await fetch(`${API_ENDPOINTS.HEALTH.replace('/health', '')}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearSession();
    }
  };

  const clearSession = () => {
    setAdmin(null);
    setToken(null);
    setIsAuthenticated(false);
    
    // Clear localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    
    console.log('🚪 Admin logged out');
  };

  // Provide authenticated API call function
  const authenticatedApiCall = async (endpoint, options = {}) => {
    if (!token) {
      throw new Error('No authentication token available');
    }

    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    // If token is invalid, logout
    if (response.status === 401) {
      logout();
      throw new Error('Session expired. Please login again.');
    }

    return response;
  };

  const value = {
    admin,
    token,
    isAuthenticated,
    loading,
    login,
    logout,
    authenticatedApiCall
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
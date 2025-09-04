import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    // Check if admin is already logged in
    const token = localStorage.getItem('adminToken');
    const adminData = localStorage.getItem('adminUser');
    
    if (token && adminData) {
      setIsAuthenticated(true);
      setAdminUser(JSON.parse(adminData));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      
      // For now, using simple hardcoded credentials
      // In production, this should connect to your backend auth system
      if (email === 'admin@teendomafrica.org' && password === 'TeendomAdmin2024!') {
        const adminData = {
          id: '1',
          email: 'admin@teendomafrica.org',
          name: 'Admin User',
          role: 'admin'
        };
        
        // Generate a simple token (in production, get this from backend)
        const token = btoa(`${email}:${Date.now()}`);
        
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(adminData));
        
        setIsAuthenticated(true);
        setAdminUser(adminData);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Invalid email or password' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Login failed. Please try again.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  const value = {
    isAuthenticated,
    isLoading,
    adminUser,
    login,
    logout
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
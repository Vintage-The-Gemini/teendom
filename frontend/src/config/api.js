// File Path: frontend/src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://teendom-africa-backend.onrender.com/api';

export const API_ENDPOINTS = {
  // Nominations
  NOMINATIONS: `${API_BASE_URL}/nominations`,
  UPLOAD: `${API_BASE_URL}/upload`,
  
  // Health check
  HEALTH: `${API_BASE_URL}/health`,
  TEST: `${API_BASE_URL}/test`,
};

// API utility functions
export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// File upload utility
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(API_ENDPOINTS.UPLOAD, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};

export default API_BASE_URL;
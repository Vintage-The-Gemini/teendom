// File Path: frontend/src/components/ConnectionTest.jsx
// Add this temporarily to test your deployed connection

import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, apiCall } from '../config/api';

function ConnectionTest() {
  const [status, setStatus] = useState('testing');
  const [results, setResults] = useState({});

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    setStatus('testing');
    const tests = {};

    try {
      // Test backend health
      const healthResponse = await apiCall(API_ENDPOINTS.HEALTH);
      tests.health = { success: true, message: 'Backend connected!' };

      // Test nominations endpoint
      const nominationsResponse = await apiCall(API_ENDPOINTS.NOMINATIONS);
      tests.database = { success: true, message: 'Database connected!' };

      setResults(tests);
      setStatus('success');

    } catch (error) {
      setResults({ error: error.message });
      setStatus('failed');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: 'white',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      zIndex: 1000,
      maxWidth: '300px'
    }}>
      <h3>🔗 Connection Test</h3>
      <p>Status: <strong style={{
        color: status === 'success' ? 'green' : status === 'failed' ? 'red' : 'orange'
      }}>{status}</strong></p>
      
      {Object.entries(results).map(([key, value]) => (
        <div key={key}>
          {value.success ? '✅' : '❌'} {key}: {value.message || value}
        </div>
      ))}
      
      <button onClick={testConnection} style={{
        marginTop: '10px',
        padding: '5px 10px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Test Again
      </button>
      
      <p style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
        Backend: {API_ENDPOINTS.HEALTH.replace('/health', '')}
      </p>
    </div>
  );
}

export default ConnectionTest;
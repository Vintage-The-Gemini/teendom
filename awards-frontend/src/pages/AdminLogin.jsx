import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { HiEye, HiEyeOff, HiLockClosed, HiMail, HiShieldCheck } from 'react-icons/hi';

function AdminLogin() {
  const { login, isAuthenticated, isLoading } = useAdminAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await login(formData.email, formData.password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" 
           style={{ 
             background: 'linear-gradient(135deg, #0B1426 0%, #162A4A 50%, #0B1426 100%)' 
           }}>
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent" 
             style={{ borderColor: '#DAA520' }}></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
         style={{ 
           background: 'linear-gradient(135deg, #0B1426 0%, #162A4A 50%, #0B1426 100%)'
         }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-10"
             style={{ 
               background: 'radial-gradient(circle, #DAA520 0%, transparent 70%)' 
             }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-10"
             style={{ 
               background: 'radial-gradient(circle, #DAA520 0%, transparent 70%)' 
             }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
               style={{ 
                 background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                 boxShadow: '0 8px 25px rgba(218, 165, 32, 0.3)'
               }}>
            <HiShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black mb-2" 
              style={{ 
                color: '#DAA520',
                fontFamily: "'Didot', 'Times New Roman', serif",
                textShadow: '0 2px 4px rgba(218, 165, 32, 0.3)'
              }}>
            ADMIN LOGIN
          </h1>
          <p className="text-gray-300 font-medium">
            Teendom Africa Awards Management
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-3xl p-8 shadow-2xl backdrop-blur-xl border"
             style={{ 
               background: 'rgba(255, 255, 255, 0.05)',
               borderColor: 'rgba(218, 165, 32, 0.2)',
               boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
             }}>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    color: 'white',
                    '--tw-ring-color': '#DAA520'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#DAA520';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 165, 32, 0.3)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  placeholder="admin@teendomafrica.org"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-12 py-4 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(218, 165, 32, 0.3)',
                    color: 'white',
                    '--tw-ring-color': '#DAA520'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#DAA520';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 165, 32, 0.3)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl border" 
                   style={{ 
                     backgroundColor: 'rgba(239, 68, 68, 0.1)',
                     borderColor: 'rgba(239, 68, 68, 0.3)'
                   }}>
                <p className="text-red-400 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #DAA520, #B8860B)',
                color: '#003875',
                boxShadow: '0 8px 25px rgba(218, 165, 32, 0.4)',
                textShadow: 'none'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(218, 165, 32, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(218, 165, 32, 0.4)';
                }
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-white mr-3"></div>
                  Signing In...
                </div>
              ) : (
                'SIGN IN TO ADMIN PANEL'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 rounded-xl" 
               style={{ 
                 backgroundColor: 'rgba(218, 165, 32, 0.1)',
                 border: '1px solid rgba(218, 165, 32, 0.2)'
               }}>
            <p className="text-xs font-bold mb-2" style={{ color: '#DAA520' }}>
              📋 Demo Credentials:
            </p>
            <p className="text-xs text-gray-300">
              <strong>Email:</strong> admin@teendomafrica.org<br />
              <strong>Password:</strong> TeendomAdmin2024!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Teendom Africa Awards. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
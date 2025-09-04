import React, { useState, useEffect } from 'react';
import { HiCheckCircle, HiXCircle, HiInformationCircle, HiExclamation } from 'react-icons/hi';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: HiCheckCircle,
    error: HiXCircle,
    info: HiInformationCircle,
    warning: HiExclamation
  };

  const colors = {
    success: { bg: '#10b981', border: '#059669', bgLight: '#dcfce7' },
    error: { bg: '#ef4444', border: '#dc2626', bgLight: '#fee2e2' },
    info: { bg: '#3b82f6', border: '#2563eb', bgLight: '#dbeafe' },
    warning: { bg: '#f59e0b', border: '#d97706', bgLight: '#fef3c7' }
  };

  const Icon = icons[type];
  const color = colors[type];

  return (
    <div
      className={`fixed top-6 right-6 z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className="flex items-center p-4 rounded-xl shadow-2xl backdrop-blur-xl border-l-4 min-w-80 max-w-md transform hover:scale-105 transition-transform duration-200"
        style={{
          backgroundColor: color.bgLight,
          borderLeftColor: color.border,
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px ${color.border}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
        }}
      >
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3"
          style={{ backgroundColor: color.bg }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold break-words" style={{ color: type === 'warning' ? '#92400e' : '#1f2937' }}>{message}</p>
        </div>
        
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
        >
          <HiXCircle className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed top-0 right-0 z-50 pointer-events-none">
      {toasts.map((toast, index) => (
        <div 
          key={toast.id} 
          style={{ 
            top: `${12 + index * 100}px`,
            animationDelay: `${index * 100}ms` 
          }} 
          className="absolute right-6 pointer-events-auto animate-pulse"
        >
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            duration={toast.type === 'error' ? 8000 : 5000}
          />
        </div>
      ))}
    </div>
  );

  return {
    showToast,
    ToastContainer,
    success: (message) => showToast(message, 'success'),
    error: (message) => showToast(message, 'error'),
    info: (message) => showToast(message, 'info'),
    warning: (message) => showToast(message, 'warning')
  };
};

export default Toast;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AwardsPage from "./pages/AwardsPage";
import NominatePage from "./pages/NominatePage";
import CategoriesPage from "./pages/CategoriesPage";
import JudgesPage from "./pages/JudgesPage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import AboutPage from "./pages/AboutPage";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import { AdminAuthProvider, useAdminAuth } from "./contexts/AdminAuthContext";
import "./index.css";

// Protected Route Component
function ProtectedAdminRoute({ children }) {
  const { isAuthenticated, isLoading } = useAdminAuth();
  
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
  
  return isAuthenticated ? children : <AdminLogin />;
}

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<AwardsPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/nominate" element={<NominatePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/judges" element={<JudgesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedAdminRoute>
                <AdminPanel />
              </ProtectedAdminRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AdminAuthProvider>
  );
}

export default App;
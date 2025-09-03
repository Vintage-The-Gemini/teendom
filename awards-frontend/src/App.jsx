import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AwardsPage from "./pages/AwardsPage";
import NominatePage from "./pages/NominatePage";
import CategoriesPage from "./pages/CategoriesPage";
import JudgesPage from "./pages/JudgesPage";
import FAQPage from "./pages/FAQPage";
import GalleryPage from "./pages/GalleryPage";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<AwardsPage />} />
          <Route path="/nominate" element={<NominatePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
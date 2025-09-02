// frontend/src/components/nominations/NominationForm.jsx
import React, { useState, useEffect } from "react";
import NominatorSection from "./NominatorSection";
import NomineeSection from "./NomineeSection";
import CategorySelection from "./CategorySelection";
import NominationDetails from "./NominationDetails";
import SupportingMaterials from "./SupportingMaterials";
import RefereeSection from "./RefereeSection";
import ConsentSection from "./ConsentSection";

function NominationForm() {
  const [formData, setFormData] = useState(() => {
    // Load saved data on initial render
    try {
      const saved = sessionStorage.getItem('nomination-form');
      if (saved) {
        console.log('✅ Restored saved form data');
        return JSON.parse(saved);
      }
    } catch (e) {
      console.log('❌ No saved data found');
    }
    
    return {
      nominatorName: "", nominatorEmail: "", nominatorPhone: "", nominatorRelationship: "",
      nomineeName: "", nomineeAge: "", nomineeEmail: "", nomineePhone: "", nomineeCounty: "", nomineeSchool: "",
      awardCategory: "", shortBio: "", nominationStatement: "",
      nomineePhoto: null, supportingDocuments: [], supportingLinks: [""],
      refereeName: "", refereePosition: "", refereePhone: "", refereeEmail: "", contactReferee: false,
      accurateInfo: false, nomineePermission: false, parentalConsent: false, understandsProcess: false, noFalseInfo: false
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  // Auto-save form data
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem('nomination-form', JSON.stringify(formData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleFileUpload = async (file, fieldName) => {
    if (!file) return;

    console.log('🔄 Uploading:', file.name, file.type, (file.size/1024/1024).toFixed(2) + 'MB');

    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, [fieldName]: "File too large (max 5MB)" }));
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, [fieldName]: "Only JPEG, PNG, PDF allowed" }));
      return;
    }

    setUploadProgress(prev => ({ ...prev, [fieldName]: 10 }));

    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('📤 Posting to: http://localhost:5000/api/upload');
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
      });

      console.log('📡 Response:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Upload result:', result);

      if (result.success) {
        setFormData(prev => ({
          ...prev,
          [fieldName]: fieldName === 'supportingDocuments' 
            ? [...prev[fieldName], { name: file.name, url: result.url }]
            : result.url
        }));
        setUploadProgress(prev => ({ ...prev, [fieldName]: 100 }));
        setTimeout(() => setUploadProgress(prev => ({ ...prev, [fieldName]: null })), 2000);
      } else {
        throw new Error(result.message || 'Upload failed');
      }
    } catch (error) {
      console.error('❌ Upload error:', error);
      setErrors(prev => ({ ...prev, [fieldName]: error.message }));
      setUploadProgress(prev => ({ ...prev, [fieldName]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const required = {
      nominatorName: "Nominator name required", nominatorEmail: "Nominator email required", 
      nominatorPhone: "Nominator phone required", nominatorRelationship: "Relationship required",
      nomineeName: "Nominee name required", nomineeAge: "Age required", nomineeCounty: "County required",
      awardCategory: "Category required", shortBio: "Bio required", nominationStatement: "Statement required",
      refereeName: "Referee name required", refereeEmail: "Referee email required"
    };

    Object.entries(required).forEach(([field, message]) => {
      if (!formData[field]) newErrors[field] = message;
    });

    // Age validation
    const age = parseInt(formData.nomineeAge);
    if (age && (age < 13 || age > 19)) {
      newErrors.nomineeAge = "Age must be between 13-19";
    }

    // Bio length validation (250 words max)
    if (formData.shortBio) {
      const bioWords = formData.shortBio.trim().split(/\s+/).length;
      if (bioWords > 250) {
        newErrors.shortBio = `Bio too long: ${bioWords}/250 words`;
      }
    }

    // Statement length validation (300-500 words, max 3000 characters)
    if (formData.nominationStatement) {
      const statementWords = formData.nominationStatement.trim().split(/\s+/).length;
      const statementChars = formData.nominationStatement.length;
      
      if (statementWords < 300) {
        newErrors.nominationStatement = `Statement too short: ${statementWords}/300 words minimum`;
      } else if (statementChars > 3000) {
        newErrors.nominationStatement = `Statement too long: ${statementChars}/3000 characters maximum`;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.nominatorEmail && !emailRegex.test(formData.nominatorEmail)) {
      newErrors.nominatorEmail = "Invalid email format";
    }
    if (formData.nomineeEmail && !emailRegex.test(formData.nomineeEmail)) {
      newErrors.nomineeEmail = "Invalid email format";
    }
    if (formData.refereeEmail && !emailRegex.test(formData.refereeEmail)) {
      newErrors.refereeEmail = "Invalid email format";
    }

    if (!formData.nomineePhoto) newErrors.nomineePhoto = "Photo required";
    if (!formData.accurateInfo) newErrors.accurateInfo = "Required";
    if (!formData.nomineePermission) newErrors.nomineePermission = "Required";
    if (!formData.understandsProcess) newErrors.understandsProcess = "Required";
    if (!formData.noFalseInfo) newErrors.noFalseInfo = "Required";

    if (parseInt(formData.nomineeAge) < 18 && !formData.parentalConsent) {
      newErrors.parentalConsent = "Required for minors";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Form submission started');
    console.log('📋 Form data:', formData);
    
    if (!validateForm()) {
      console.log('❌ Form validation failed');
      alert('❌ Please fix the errors in the form before submitting');
      return;
    }

    console.log('✅ Form validation passed');
    setIsSubmitting(true);

    try {
      console.log('📤 Sending nomination to: http://localhost:5000/api/nominations');
      
      const response = await fetch('http://localhost:5000/api/nominations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      console.log('📡 Response received:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Response not OK:', errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ Submission result:', result);

      if (result.success) {
        console.log('🎉 Nomination submitted successfully!');
        sessionStorage.removeItem('nomination-form');
        alert('🎉 Nomination submitted successfully! You will receive a confirmation email shortly.');
        window.location.href = '/awards?submitted=true';
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('❌ Submission failed: ' + error.message + '\n\nPlease try again or contact info@teendom.africa');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-12">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-80 left-1/2 w-2 h-2 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white border-opacity-20 p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/teendom.png" 
                alt="Teendom" 
                className="h-16 w-16 rounded-full border-2 border-yellow-400 shadow-lg mr-4"
              />
              <div>
                <h1 className="text-4xl font-black text-white tracking-wider">
                  TEENDOM
                </h1>
                <p className="text-yellow-400 font-bold">AWARDS NOMINATION</p>
              </div>
            </div>
            <p className="text-blue-200 font-semibold text-lg">
              Nominate an exceptional Kenyan teen making a difference (Ages 13-19)
            </p>
            <div className="bg-yellow-400 bg-opacity-20 backdrop-blur-sm border border-yellow-400 rounded-xl p-4 mt-6">
              <p className="text-yellow-200 font-bold">
                ⏰ Deadline: September 30, 2025 | 🆓 FREE | 💾 Auto-saves progress
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <NominatorSection formData={formData} handleInputChange={handleInputChange} errors={errors} />
            <NomineeSection formData={formData} handleInputChange={handleInputChange} errors={errors} />
            <CategorySelection formData={formData} handleInputChange={handleInputChange} errors={errors} />
            <NominationDetails formData={formData} handleInputChange={handleInputChange} errors={errors} />
            <SupportingMaterials 
              formData={formData} setFormData={setFormData} errors={errors} 
              uploadProgress={uploadProgress} handleFileUpload={handleFileUpload} 
            />
            <RefereeSection formData={formData} handleInputChange={handleInputChange} errors={errors} />
            <ConsentSection formData={formData} handleInputChange={handleInputChange} errors={errors} />

            <div className="text-center py-8">
              <button
                type="submit" disabled={isSubmitting}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-black py-6 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    SUBMITTING...
                  </div>
                ) : (
                  '🏆 SUBMIT NOMINATION'
                )}
              </button>
              <p className="text-blue-200 text-sm mt-4 font-medium">
                By submitting, you confirm all information is accurate and complete.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NominationForm;
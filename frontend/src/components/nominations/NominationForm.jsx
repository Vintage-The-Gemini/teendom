// File Path: frontend/src/components/nominations/NominationForm.jsx
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
    
    try {
      setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
      
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      
      const xhr = new XMLHttpRequest();
      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setUploadProgress(prev => ({ ...prev, [fieldName]: percentComplete }));
        }
      };
      
      const uploadPromise = new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error('Upload failed'));
          }
        };
        xhr.onerror = () => reject(new Error('Upload failed'));
      });
      
      xhr.open('POST', 'http://localhost:5000/api/upload');
      xhr.send(uploadFormData);
      
      const result = await uploadPromise;
      
      if (result.success) {
        console.log('✅ File uploaded:', result.url);
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

    // Bio length validation (100 words max)
    if (formData.shortBio) {
      const bioWords = formData.shortBio.trim().split(/\s+/).length;
      if (bioWords > 100) {
        newErrors.shortBio = `Bio too long: ${bioWords}/100 words`;
      }
    }

    // Statement length validation (100 words max)
    if (formData.nominationStatement) {
      const statementWords = formData.nominationStatement.trim().split(/\s+/).length;
      if (statementWords > 100) {
        newErrors.nominationStatement = `Statement too long: ${statementWords}/100 words`;
      }
      if (statementWords < 50) {
        newErrors.nominationStatement = `Statement too short: ${statementWords}/50 words minimum`;
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

    // Consent validations
    if (!formData.accurateInfo) newErrors.accurateInfo = "Please confirm information is accurate";
    if (!formData.nomineePermission) newErrors.nomineePermission = "Nominee permission required";
    if (!formData.understandsProcess) newErrors.understandsProcess = "Please acknowledge the process";
    if (!formData.noFalseInfo) newErrors.noFalseInfo = "Please confirm no false information";

    // Parental consent for minors
    const nomineeAge = parseInt(formData.nomineeAge);
    if (nomineeAge && nomineeAge < 18 && !formData.parentalConsent) {
      newErrors.parentalConsent = "Parental consent required for nominees under 18";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/nominations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Nomination submitted successfully');
        alert('🎉 Nomination submitted successfully! Thank you for celebrating teen excellence.');
        sessionStorage.removeItem('nomination-form');
        window.location.href = '/awards';
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('❌ Submission failed. Please try again.');
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl border border-blue-300 shadow-2xl overflow-hidden" style={{fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif"}}>
      
      {/* Form Header with Logo */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-4 w-8 h-8 border-2 border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-2 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="relative">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <img 
                src="/teendom awards primary logo.png" 
                alt="Teendom Awards Logo"
                className="h-14 w-auto"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">NOMINATION FORM</h2>
          <p className="text-blue-100 font-medium">Complete all sections to nominate an exceptional teenager</p>
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-6 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                    SUBMITTING...
                  </div>
                ) : (
                  'SUBMIT NOMINATION'
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
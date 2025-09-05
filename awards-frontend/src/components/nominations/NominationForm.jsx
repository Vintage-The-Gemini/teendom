// File Path: frontend/src/components/nominations/NominationForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NominatorSection from "./NominatorSection";
import NomineeSection from "./NomineeSection";
import CategorySelection from "./CategorySelection";
import NominationDetails from "./NominationDetails";
import SupportingMaterials from "./SupportingMaterials";
import RefereeSection from "./RefereeSection";
import ConsentSection from "./ConsentSection";

function NominationForm() {
  const navigate = useNavigate();
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
      isSelfNomination: "", nominatorName: "", nominatorEmail: "", nominatorPhone: "", nominatorRelationship: "",
      nomineeName: "", nomineeDateOfBirth: "", nomineeAge: "", nomineeGender: "", nomineeEmail: "", nomineePhone: "", 
      nomineeCounty: "", nomineeNationality: "",
      awardCategory: "", shortBio: "", nominationStatement: "",
      nomineePhoto: null, supportingDocuments: [], supportingLinks: [""],
      refereeName: "", refereePosition: "", refereePhone: "", refereeEmail: "", contactReferee: false,
      accurateInfo: false, nomineePermission: false, parentalConsent: false, understandsProcess: false, noFalseInfo: false
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Enhanced auto-save form data
  useEffect(() => {
    setIsSaving(true);
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem('nomination-form', JSON.stringify(formData));
        console.log('💾 Form data auto-saved');
      } catch (error) {
        console.error('Failed to save form data:', error);
      }
      setIsSaving(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  // Save data when page becomes hidden (user switching tabs, closing browser)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        try {
          sessionStorage.setItem('nomination-form', JSON.stringify(formData));
          console.log('💾 Form data saved on page visibility change');
        } catch (error) {
          console.error('Failed to save form data on visibility change:', error);
        }
      }
    };

    const handleBeforeUnload = () => {
      try {
        sessionStorage.setItem('nomination-form', JSON.stringify(formData));
        console.log('💾 Form data saved before unload');
      } catch (error) {
        console.error('Failed to save form data before unload:', error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleFileUpload = async (file, fieldName) => {
    if (!file) return;
    
    // File size validation (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      alert(`File size too large! Maximum allowed size is 5MB. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      return;
    }
    
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
      
      xhr.open('POST', 'https://teendom-africa-backend.onrender.com/api/upload');
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
    const isSelf = formData.isSelfNomination === 'yes';
    
    // Self-nomination selection required
    if (!formData.isSelfNomination) {
      newErrors.isSelfNomination = "Please select if you're nominating yourself";
    }

    // Required fields - nominator fields only needed if NOT self-nominating
    const required = {
      nomineeName: "Nominee name required", nomineeAge: "Age required", nomineeGender: "Gender required",
      nomineeCounty: "County required", awardCategory: "Category required", shortBio: "Bio required", 
      nominationStatement: "Statement required", refereeName: "Referee name required", refereeEmail: "Referee email required",
      refereePhone: "Referee phone required"
    };

    // Add nominator fields only if NOT self-nominating
    if (!isSelf) {
      required.nominatorName = "Nominator name required";
      required.nominatorEmail = "Nominator email required"; 
      required.nominatorPhone = "Nominator phone required";
      required.nominatorRelationship = "Relationship required";
    } else {
      // For self-nominations, nominee email and phone are required
      required.nomineeEmail = "Your email is required for self-nomination";
      required.nomineePhone = "Your phone is required for self-nomination";
    }

    Object.entries(required).forEach(([field, message]) => {
      if (!formData[field]) newErrors[field] = message;
    });

    // Strict age validation (13-19)
    const age = parseInt(formData.nomineeAge);
    if (formData.nomineeAge && (isNaN(age) || age < 13 || age > 19)) {
      newErrors.nomineeAge = "Age must be exactly between 13 and 19 years";
    }

    // Bio length validation (250 words max)
    if (formData.shortBio) {
      const bioWords = formData.shortBio.trim().split(/\s+/).length;
      if (bioWords > 250) {
        newErrors.shortBio = `Bio too long: ${bioWords}/250 words`;
      }
    }

    // Statement length validation (100-750 words)
    if (formData.nominationStatement) {
      const statementWords = formData.nominationStatement.trim().split(/\s+/).length;
      if (statementWords > 750) {
        newErrors.nominationStatement = `Statement too long: ${statementWords}/750 words`;
      }
      if (statementWords < 100) {
        newErrors.nominationStatement = `Statement too short: ${statementWords}/100 words minimum`;
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

    // Supporting documents validation (now required)
    if (!formData.supportingDocuments || formData.supportingDocuments.length === 0) {
      newErrors.supportingDocuments = "Supporting documents are required";
    }

    return newErrors;
  };

  const clearSavedData = () => {
    sessionStorage.removeItem('nomination-form');
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      
      // Show alert with count of errors
      alert(`⚠️ Please fix ${Object.keys(validationErrors).length} error(s) before submitting. Check the red highlighted sections above.`);
      
      // Scroll to top to show error summary
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      
      return;
    }

    try {
      // Show user what's happening
      console.log('🚀 Submitting form data:', formData);
      console.log('📊 Award category value:', formData.awardCategory);
      console.log('⏳ Connecting to server... (this may take a moment if server is sleeping)');
      
      const response = await fetch('https://teendom-africa-backend.onrender.com/api/nominations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Nomination submitted successfully');
        alert('🎉 Nomination submitted successfully! Thank you for celebrating teen excellence.');
        sessionStorage.removeItem('nomination-form');
        navigate('/awards');
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
      <div className="p-6 text-center relative" style={{background: 'linear-gradient(135deg, #0b1426 0%, #162a4a 50%, #0b1426 100%)'}}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-4 w-8 h-8 border-2 rounded-full" style={{borderColor: '#DAA520'}}></div>
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
          <div className="flex items-center justify-between">
            <div className="text-center flex-grow">
              <h2 className="text-2xl font-bold mb-2" style={{color: '#DAA520'}}>NOMINATION FORM</h2>
              <p className="font-medium" style={{color: '#E8EAF6'}}>Complete all sections to nominate an exceptional teenager</p>
            </div>
            {isSaving && (
              <div className="flex items-center space-x-2 text-sm" style={{color: '#E8EAF6'}}>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2" style={{borderColor: '#DAA520'}}></div>
                <span>Saving...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        {/* Data persistence info */}
        <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: '#f0f9ff', border: '1px solid #DAA520' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium" style={{ color: '#003875' }}>
                💾 Your progress is automatically saved as you type
              </p>
            </div>
            <button
              type="button"
              onClick={clearSavedData}
              className="text-xs px-3 py-1 rounded-lg text-red-600 border border-red-200 hover:bg-red-50 transition-colors duration-200"
            >
              Clear & Restart
            </button>
          </div>
        </div>
        
        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="mb-6 p-6 rounded-2xl border-2 border-red-400 bg-red-50 animate-bounce">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <h3 className="text-xl font-bold text-red-700">
                Please fix the following issues to submit your nomination:
              </h3>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-red-200">
              <div className="grid gap-3">
                {Object.entries(errors).map(([field, message]) => {
                  const sectionMap = {
                    nominatorName: 'Section 1: Nominator Details',
                    nominatorEmail: 'Section 1: Nominator Details',
                    nominatorPhone: 'Section 1: Nominator Details', 
                    nominatorRelationship: 'Section 1: Nominator Details',
                    nomineeName: 'Section 2: Nominee Information',
                    nomineeAge: 'Section 2: Nominee Information',
                    nomineeGender: 'Section 2: Nominee Information',
                    nomineeCounty: 'Section 2: Nominee Information',
                    awardCategory: 'Section 3: Award Category',
                    shortBio: 'Section 4: Nomination Details',
                    nominationStatement: 'Section 4: Nomination Details',
                    nomineePhoto: 'Section 5: Supporting Materials',
                    supportingDocuments: 'Section 5: Supporting Materials',
                    refereeName: 'Section 6: Referee Information',
                    refereeEmail: 'Section 6: Referee Information',
                    accurateInfo: 'Section 7: Consent & Declaration',
                    nomineePermission: 'Section 7: Consent & Declaration',
                    understandsProcess: 'Section 7: Consent & Declaration',
                    noFalseInfo: 'Section 7: Consent & Declaration',
                    parentalConsent: 'Section 7: Consent & Declaration'
                  };
                  
                  return (
                    <div key={field} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-700 text-sm">{sectionMap[field] || 'Form Error'}</p>
                        <p className="text-red-600 text-sm">{message}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800 font-medium">
                💡 <strong>Tip:</strong> Complete all required fields and consent checkboxes before submitting.
              </p>
            </div>
          </div>
        )}
        
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
                className="font-bold py-6 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
                  color: '#003875',
                  boxShadow: '0 10px 30px rgba(218, 165, 32, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)';
                  e.target.style.boxShadow = '0 15px 40px rgba(218, 165, 32, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)';
                  e.target.style.boxShadow = '0 10px 30px rgba(218, 165, 32, 0.3)';
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 mr-3" style={{borderColor: '#003875'}}></div>
                    SUBMITTING...
                  </div>
                ) : (
                  'SUBMIT NOMINATION'
                )}
              </button>
              <p className="text-sm mt-4 font-medium" style={{color: '#003875'}}>
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
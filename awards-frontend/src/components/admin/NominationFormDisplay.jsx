import React from 'react';
import { HiUser, HiMail, HiPhone, HiLocationMarker, HiAcademicCap, HiStar, HiDocument, HiExternalLink, HiPhotograph, HiDocumentText, HiCheckCircle } from 'react-icons/hi';

function NominationFormDisplay({ nomination }) {
  if (!nomination) return null;

  const DisplayField = ({ label, value, icon: Icon, required = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 flex items-center" style={{ color: '#003875' }}>
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="px-4 py-3 rounded-xl border-2 font-medium" 
           style={{ 
             backgroundColor: '#f8fafc', 
             borderColor: '#e2e8f0',
             color: '#003875'
           }}>
        {value || <span className="text-gray-400 italic">Not provided</span>}
      </div>
    </div>
  );

  const DisplayTextArea = ({ label, value, icon: Icon, required = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 flex items-center" style={{ color: '#003875' }}>
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="px-4 py-3 rounded-xl border-2 font-medium min-h-[100px] whitespace-pre-wrap" 
           style={{ 
             backgroundColor: '#f8fafc', 
             borderColor: '#e2e8f0',
             color: '#003875'
           }}>
        {value || <span className="text-gray-400 italic">Not provided</span>}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black mb-2" 
            style={{ 
              color: '#003875',
              fontFamily: "'Didot', 'Times New Roman', serif" 
            }}>
          NOMINATION DETAILS
        </h1>
        <p className="text-gray-600 font-medium">
          Submitted: {new Date(nomination.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      {/* Section 1: Nominator Information */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            1
          </span>
          NOMINATOR INFORMATION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DisplayField 
            label="Full Name" 
            value={nomination.nominator?.name || nomination.nominatorName} 
            icon={HiUser}
            required 
          />
          <DisplayField 
            label="Email Address" 
            value={nomination.nominator?.email || nomination.nominatorEmail} 
            icon={HiMail}
            required 
          />
          <DisplayField 
            label="Phone Number" 
            value={nomination.nominator?.phone || nomination.nominatorPhone} 
            icon={HiPhone}
            required 
          />
          <DisplayField 
            label="Relationship to Nominee" 
            value={nomination.nominator?.relationship || nomination.relationshipToNominee} 
            icon={HiUser}
            required 
          />
        </div>
      </section>

      {/* Section 2: Nominee Information */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            2
          </span>
          NOMINEE INFORMATION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DisplayField 
            label="Full Name" 
            value={nomination.nominee?.name || nomination.nomineeName} 
            icon={HiUser}
            required 
          />
          <DisplayField 
            label="Date of Birth" 
            value={nomination.nominee?.dateOfBirth ? new Date(nomination.nominee.dateOfBirth).toLocaleDateString() : null} 
            icon={HiUser}
          />
          <DisplayField 
            label="Age" 
            value={nomination.nominee?.age || nomination.nomineeAge} 
            icon={HiUser}
            required 
          />
          <DisplayField 
            label="Gender" 
            value={nomination.nominee?.gender || nomination.gender} 
            icon={HiUser}
          />
          <DisplayField 
            label="County" 
            value={nomination.nominee?.county || nomination.nomineeCounty} 
            icon={HiLocationMarker}
            required 
          />
          <DisplayField 
            label="Nationality" 
            value={nomination.nominee?.nationality || nomination.nationality} 
            icon={HiLocationMarker}
          />
          <DisplayField 
            label="School/Institution" 
            value={nomination.nominee?.school || nomination.nomineeSchool} 
            icon={HiAcademicCap}
            required 
          />
          <DisplayField 
            label="Current Grade/Level" 
            value={nomination.nominee?.currentGrade || nomination.currentGrade} 
            icon={HiAcademicCap}
          />
        </div>

        <div className="mt-6">
          <DisplayField 
            label="Nominee Contact Information" 
            value={nomination.nominee?.email || nomination.nominee?.phone || nomination.nomineeContact} 
            icon={HiPhone}
          />
        </div>
      </section>

      {/* Section 3: Award Category */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            3
          </span>
          AWARD CATEGORY
        </h2>
        
        <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#DAA520', backgroundColor: '#fffbeb' }}>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <HiStar className="h-12 w-12 mx-auto mb-4" style={{ color: '#DAA520' }} />
              <h3 className="text-2xl font-black mb-2" style={{ color: '#003875' }}>
                {nomination.awardCategory}
              </h3>
              <p className="text-sm font-medium" style={{ color: '#003875' }}>
                Selected Award Category
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Nomination Statement */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            4
          </span>
          NOMINATION STATEMENT
        </h2>
        
        <div className="space-y-6">
          <DisplayTextArea 
            label="Short Bio (Max 250 words)" 
            value={nomination.details?.shortBio || nomination.shortBio} 
            icon={HiDocument}
            required 
          />
          <DisplayTextArea 
            label="Detailed Statement (100-750 words)" 
            value={nomination.details?.nominationStatement || nomination.detailedStatement} 
            icon={HiDocument}
            required 
          />
        </div>
      </section>

      {/* Section 5: Supporting Materials */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            5
          </span>
          SUPPORTING MATERIALS
        </h2>

        <div className="space-y-6">
          {/* Nominee Photo */}
          <div>
            <label className="block text-sm font-bold mb-4 flex items-center" style={{ color: '#003875' }}>
              <HiPhotograph className="mr-2 h-4 w-4" />
              Nominee Photo <span className="text-red-500 ml-1">*</span>
            </label>
            {nomination.supportingMaterials?.nomineePhoto ? (
              <div className="flex items-center space-x-4 p-4 rounded-xl border-2" 
                   style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
                <img 
                  src={nomination.supportingMaterials.nomineePhoto} 
                  alt="Nominee" 
                  className="w-24 h-24 object-cover rounded-xl border-2 shadow-md"
                  style={{ borderColor: '#DAA520' }}
                />
                <div>
                  <div className="flex items-center mb-2">
                    <HiCheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-bold text-green-800">Photo uploaded successfully</span>
                  </div>
                  <a 
                    href={nomination.supportingMaterials.nomineePhoto} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <HiExternalLink className="mr-1 h-4 w-4" />
                    View full size
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl border-2" style={{ backgroundColor: '#fef2f2', borderColor: '#ef4444' }}>
                <p className="text-red-800 font-medium">No photo uploaded</p>
              </div>
            )}
          </div>

          {/* Supporting Documents */}
          <div>
            <label className="block text-sm font-bold mb-4 flex items-center" style={{ color: '#003875' }}>
              <HiDocumentText className="mr-2 h-4 w-4" />
              Supporting Documents (Required)
            </label>
            {nomination.supportingMaterials?.supportingDocuments && nomination.supportingMaterials.supportingDocuments.length > 0 ? (
              <div className="space-y-3">
                {nomination.supportingMaterials.supportingDocuments.map((doc, index) => {
                  const isImage = doc.name && doc.name.match(/\.(jpg|jpeg|png|gif)$/i);
                  const isPDF = doc.name && doc.name.match(/\.pdf$/i);
                  
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl border-2" 
                         style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
                      <div className="flex-shrink-0">
                        {isImage ? (
                          <img 
                            src={doc.url} 
                            alt={doc.name}
                            className="w-16 h-16 object-cover rounded-lg border"
                            style={{ borderColor: '#DAA520' }}
                          />
                        ) : isPDF ? (
                          <div className="w-16 h-16 flex items-center justify-center rounded-lg text-white font-bold text-xs" 
                               style={{ backgroundColor: '#ef4444' }}>
                            PDF
                          </div>
                        ) : (
                          <div className="w-16 h-16 flex items-center justify-center rounded-lg text-white" 
                               style={{ backgroundColor: '#6b7280' }}>
                            <HiDocumentText className="h-8 w-8" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-green-800">{doc.name || 'Document'}</p>
                        <a 
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-1"
                        >
                          <HiExternalLink className="mr-1 h-4 w-4" />
                          View document
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 rounded-xl border-2" style={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }}>
                <p className="text-gray-600 font-medium">No documents uploaded</p>
              </div>
            )}
          </div>

          {/* Supporting Links */}
          <div>
            <label className="block text-sm font-bold mb-4 flex items-center" style={{ color: '#003875' }}>
              <HiExternalLink className="mr-2 h-4 w-4" />
              Supporting Links (Optional)
            </label>
            {nomination.supportingMaterials?.supportingLinks && nomination.supportingMaterials.supportingLinks.filter(link => link && link.trim()).length > 0 ? (
              <div className="space-y-3">
                {nomination.supportingMaterials.supportingLinks.filter(link => link && link.trim()).map((link, index) => (
                  <div key={index} className="p-4 rounded-xl border-2" 
                       style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
                    <a 
                      href={link.startsWith('http') ? link : `https://${link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium break-all"
                    >
                      <HiExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl border-2" style={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }}>
                <p className="text-gray-600 font-medium">No links provided</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 6: Referee Information */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            6
          </span>
          REFEREE INFORMATION
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DisplayField 
            label="Referee Full Name" 
            value={nomination.referee?.name || nomination.refereeName} 
            icon={HiUser}
            required 
          />
          <DisplayField 
            label="Referee Email" 
            value={nomination.referee?.email || nomination.refereeEmail} 
            icon={HiMail}
            required 
          />
          <DisplayField 
            label="Referee Phone" 
            value={nomination.referee?.phone || nomination.refereePhone} 
            icon={HiPhone}
            required 
          />
          <DisplayField 
            label="Organization/Title" 
            value={nomination.referee?.position || nomination.refereeOrganization} 
            icon={HiAcademicCap}
            required 
          />
        </div>
      </section>

      {/* Section 7: Consent & Declaration */}
      <section className="bg-white rounded-2xl p-6 shadow-lg" style={{ 
        border: '2px solid #DAA520', 
        fontFamily: 'Inter, system-ui, sans-serif' 
      }}>
        <h2 className="text-2xl font-black mb-6 flex items-center" style={{ color: '#003875' }}>
          <span className="rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg text-white" style={{ backgroundColor: '#DAA520' }}>
            7
          </span>
          CONSENT & DECLARATION
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center p-4 rounded-xl border-2" 
               style={{ backgroundColor: '#f0fdf4', borderColor: '#22c55e' }}>
            <HiCheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
            <span className="font-medium text-green-800">
              All required consents and declarations have been accepted
            </span>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p>✓ Nominee consent for participation</p>
            <p>✓ Permission to use name, photo, and information</p>
            <p>✓ Accuracy declaration</p>
            <p>✓ Terms and conditions acceptance</p>
            {nomination.nomineeAge < 18 && <p>✓ Parental/Guardian consent</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NominationFormDisplay;
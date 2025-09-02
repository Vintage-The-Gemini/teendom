// File Path: frontend/src/components/nominations/NomineeSection.jsx
import React from "react";

function NomineeSection({ formData, handleInputChange, errors }) {
  const kenyanCounties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii",
    "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera",
    "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi",
    "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
    "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  const isMinor = parseInt(formData.nomineeAge) < 18;

  return (
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
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nomineeName ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nomineeName ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nomineeName ? '#ef4444' : '#d1d5db'}
            placeholder="Enter nominee's full name"
          />
          {errors.nomineeName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Age *
          </label>
          <input
            type="number"
            name="nomineeAge"
            value={formData.nomineeAge}
            onChange={handleInputChange}
            min="13" max="19"
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nomineeAge ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nomineeAge ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nomineeAge ? '#ef4444' : '#d1d5db'}
            placeholder="Age (13-19)"
          />
          {errors.nomineeAge && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeAge}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            County of Residence *
          </label>
          <select
            name="nomineeCounty"
            value={formData.nomineeCounty}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nomineeCounty ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nomineeCounty ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520',
              color: '#003875'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nomineeCounty ? '#ef4444' : '#d1d5db'}
          >
            <option value="">Select county</option>
            {kenyanCounties.map(county => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
          {errors.nomineeCounty && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeCounty}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            School Name {!isMinor && "(Optional)"}
          </label>
          <input
            type="text"
            name="nomineeSchool"
            value={formData.nomineeSchool}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200"
            style={{
              backgroundColor: '#f8fafc',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            placeholder="School name (if applicable)"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Email Address {isMinor ? "(Optional)" : ""}
          </label>
          <input
            type="email"
            name="nomineeEmail"
            value={formData.nomineeEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nomineeEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nomineeEmail ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nomineeEmail ? '#ef4444' : '#d1d5db'}
            placeholder={isMinor ? "nominee@example.com (if they have one)" : "nominee@example.com"}
          />
          {errors.nomineeEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold mb-2" style={{ color: '#003875' }}>
            Phone Number {isMinor ? "(Optional)" : ""}
          </label>
          <input
            type="tel"
            name="nomineePhone"
            value={formData.nomineePhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.nomineePhone ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{
              backgroundColor: '#f8fafc',
              borderColor: errors.nomineePhone ? '#ef4444' : '#d1d5db',
              '--tw-ring-color': '#DAA520'
            }}
            onFocus={(e) => e.target.style.borderColor = '#DAA520'}
            onBlur={(e) => e.target.style.borderColor = errors.nomineePhone ? '#ef4444' : '#d1d5db'}
            placeholder={isMinor ? "0700000000 (if they have one)" : "0700000000"}
          />
          {errors.nomineePhone && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineePhone}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NomineeSection;
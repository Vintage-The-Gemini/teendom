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
    <section className="bg-white border-l-4 border-green-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold text-lg">2</span>
        NOMINEE INFORMATION
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineeName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter nominee's full name"
          />
          {errors.nomineeName && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Age *</label>
          <input
            type="number"
            name="nomineeAge"
            value={formData.nomineeAge}
            onChange={handleInputChange}
            min="13" max="19"
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineeAge ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Age (13-19)"
          />
          {errors.nomineeAge && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeAge}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">County *</label>
          <select
            name="nomineeCounty"
            value={formData.nomineeCounty}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineeCounty ? 'border-red-500' : 'border-gray-300'
            }`}
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
          <label className="block text-sm font-bold text-gray-700 mb-2">
            School/Institution {!isMinor && '*'}
          </label>
          <input
            type="text"
            name="nomineeSchool"
            value={formData.nomineeSchool}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineeSchool ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={isMinor ? "Current school (if applicable)" : "Current school or institution"}
          />
          {errors.nomineeSchool && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeSchool}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Email Address {isMinor ? "(Optional)" : ""}
          </label>
          <input
            type="email"
            name="nomineeEmail"
            value={formData.nomineeEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineeEmail ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={isMinor ? "nominee@example.com (if they have one)" : "nominee@example.com"}
          />
          {errors.nomineeEmail && (
            <p className="text-red-500 text-sm mt-1 font-semibold">{errors.nomineeEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Phone Number {isMinor ? "(Optional)" : ""}
          </label>
          <input
            type="tel"
            name="nomineePhone"
            value={formData.nomineePhone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-lg font-medium focus:ring-4 focus:ring-green-500 focus:border-green-500 focus:bg-white text-gray-800 ${
              errors.nomineePhone ? 'border-red-500' : 'border-gray-300'
            }`}
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
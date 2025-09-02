// frontend/src/components/nominations/NomineeSection.jsx
import React from "react";

function NomineeSection({ formData, handleInputChange, errors }) {
  const kenyanCounties = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Nyeri", "Machakos", "Thika",
    "Kiambu", "Meru", "Embu", "Kitui", "Garissa", "Isiolo", "Marsabit", "Wajir",
    "Turkana", "West Pokot", "Baringo", "Laikipia", "Nyandarua", "Murang'a",
    "Kirinyaga", "Tharaka-Nithi", "Makueni", "Taita-Taveta", "Lamu", "Tana River",
    "Kilifi", "Kwale", "Kajiado", "Narok", "Bomet", "Kericho", "Nandi", 
    "Uasin Gishu", "Elgeyo-Marakwet", "Trans-Nzoia", "Bungoma", "Kakamega",
    "Vihiga", "Siaya", "Kisii", "Nyamira", "Migori", "Homa Bay", "Busia"
  ];

  const isMinor = parseInt(formData.nomineeAge) < 18;

  return (
    <section className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
      <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-black">2</span>
        NOMINEE INFORMATION
      </h2>
      
      {isMinor && (
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-bold text-sm">
            📝 Note: Since this nominee is under 18, email, phone, and school are optional fields.
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="nomineeName"
            value={formData.nomineeName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
              errors.nomineeName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nominee's full name"
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
            min="13"
            max="19"
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
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
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
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
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
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
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
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
            className={`w-full px-4 py-3 border-2 rounded-lg font-semibold focus:ring-4 focus:ring-green-500 focus:border-green-500 ${
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
// frontend/src/pages/NominatePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiClock, HiCheckCircle } from "react-icons/hi";
import NominationForm from "../components/nominations/NominationForm";

function NominatePage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Link 
                to="/awards"
                className="flex items-center text-white hover:text-red-200 transition-colors duration-200 font-bold"
              >
                <HiArrowLeft className="h-5 w-5 mr-2" />
                Back to Awards
              </Link>
              
              <div className="flex items-center text-white">
                <HiClock className="h-5 w-5 mr-2" />
                <span className="font-bold">Deadline: Sept 30, 2025</span>
              </div>
            </div>
            
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                NOMINATE A <span className="text-yellow-300">TEEN CHANGEMAKER</span>
              </h1>
              <p className="text-xl font-semibold opacity-90">
                Know a teen aged 13-19 making a difference in Kenya? Let's celebrate their impact!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <HiCheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">FREE Process</h3>
                  <p className="text-sm text-gray-600">No fees required</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <HiCheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Self-Nominations</h3>
                  <p className="text-sm text-gray-600">Teens can nominate themselves</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <HiCheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">Multiple Categories</h3>
                  <p className="text-sm text-gray-600">Can nominate for more than one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <NominationForm />
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              NEED <span className="text-red-500">HELP?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-black text-gray-900 mb-4">Contact Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> info@teendom.africa</p>
                  <p><strong>WhatsApp:</strong> 0742862080</p>
                  <p><strong>Hours:</strong> Mon-Fri, 9AM-5PM</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-black text-gray-900 mb-4">Quick Tips</h3>
                <ul className="text-gray-600 text-left space-y-1">
                  <li>• Be specific with examples</li>
                  <li>• Include measurable impact</li>
                  <li>• Upload clear photos</li>
                  <li>• Double-check contact details</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800 font-bold">
                💡 <strong>Pro Tip:</strong> Save your progress by completing sections one at a time. 
                The form will remember your information while you work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NominatePage;
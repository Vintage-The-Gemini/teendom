// backend/models/Nomination.js
import mongoose from 'mongoose';

const nominationSchema = new mongoose.Schema({
  // Section 1: Nominator Information (All Required)
  nominator: {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    relationship: { type: String, required: true, trim: true }
  },

  // Section 2: Nominee Information
  nominee: {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 13, max: 19 },
    email: { type: String, trim: true, lowercase: true }, // Optional for minors
    phone: { type: String, trim: true }, // Optional for minors
    county: { type: String, required: true, trim: true },
    school: { type: String, trim: true } // Optional for minors
  },

  // Section 3: Award Category
  awardCategory: { 
    type: String, 
    required: true,
    enum: [
      'academic', 'leadership', 'innovation', 'teenpreneur', 
      'sports', 'advocate', 'environmental', 'digital', 
      'teen-year', 'creative'
    ]
  },

  // Section 4: Nomination Details
  details: {
    shortBio: { type: String, required: true, maxlength: 1500 }, // ~250 words
    nominationStatement: { type: String, required: true, minlength: 300, maxlength: 3000 } // 300-500 words
  },

  // Section 5: Supporting Materials
  supportingMaterials: {
    nomineePhoto: { type: String, required: true }, // Cloudinary URL
    supportingDocuments: [{ 
      name: String, 
      url: String 
    }], // Array of Cloudinary URLs
    supportingLinks: [String] // Array of URLs
  },

  // Section 6: Referee Information (All Required)
  referee: {
    name: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    contactPermission: { type: Boolean, default: false }
  },

  // Section 7: Consent & Declarations
  consent: {
    accurateInfo: { type: Boolean, required: true },
    nomineePermission: { type: Boolean, required: true },
    parentalConsent: { type: Boolean }, // Required for minors only
    understandsProcess: { type: Boolean, required: true },
    noFalseInfo: { type: Boolean, required: true }
  },

  // System Fields
  status: {
    type: String,
    enum: ['submitted', 'under-review', 'shortlisted', 'finalist', 'winner', 'rejected'],
    default: 'submitted'
  },
  
  submittedAt: { type: Date, default: Date.now },
  
  // Admin Notes & Scoring
  adminNotes: { type: String },
  
  judgeScores: [{
    judgeId: String,
    scores: {
      impact: { type: Number, min: 1, max: 10 },
      originality: { type: Number, min: 1, max: 10 },
      leadership: { type: Number, min: 1, max: 10 },
      resilience: { type: Number, min: 1, max: 10 }
    },
    totalScore: { type: Number },
    notes: String,
    scoredAt: { type: Date, default: Date.now }
  }],

  // Public Voting (if shortlisted)
  publicVotes: { type: Number, default: 0 },
  
  // Final Results
  finalRanking: Number,
  isWinner: { type: Boolean, default: false },
  isFinalist: { type: Boolean, default: false }

}, {
  timestamps: true
});

// Indexes for better performance
nominationSchema.index({ 'nominee.age': 1 });
nominationSchema.index({ awardCategory: 1 });
nominationSchema.index({ status: 1 });
nominationSchema.index({ submittedAt: -1 });
nominationSchema.index({ 'nominee.county': 1 });

// Virtual for checking if nominee is minor
nominationSchema.virtual('isMinor').get(function() {
  return this.nominee.age < 18;
});

// Pre-save validation for minors
nominationSchema.pre('save', function(next) {
  // If nominee is under 18, parental consent is required
  if (this.nominee.age < 18 && !this.consent.parentalConsent) {
    return next(new Error('Parental consent required for nominees under 18'));
  }
  next();
});

// Method to calculate average judge score
nominationSchema.methods.getAverageScore = function() {
  if (this.judgeScores.length === 0) return 0;
  
  const totalScores = this.judgeScores.reduce((sum, judge) => sum + judge.totalScore, 0);
  return (totalScores / this.judgeScores.length).toFixed(2);
};

// Static method to get nominations by category
nominationSchema.statics.findByCategory = function(category) {
  return this.find({ awardCategory: category }).sort({ submittedAt: -1 });
};

// Static method to get nominations by status
nominationSchema.statics.findByStatus = function(status) {
  return this.find({ status: status }).sort({ submittedAt: -1 });
};

const Nomination = mongoose.model('Nomination', nominationSchema);

export default Nomination;
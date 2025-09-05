// backend/models/Nomination.js
import mongoose from 'mongoose';

const nominationSchema = new mongoose.Schema({
  // Self-nomination flag
  isSelfNomination: { type: Boolean, default: false },

  // Section 1: Nominator Information (Required for non-self nominations)
  nominator: {
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    relationship: { type: String, trim: true }
  },

  // Section 2: Nominee Information
  nominee: {
    name: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date }, // Added field for DOB
    age: { type: Number, required: true, min: 13, max: 19 },
    gender: { type: String, enum: ['Male', 'Female'] }, // Added field
    email: { type: String, trim: true, lowercase: true }, // Optional for minors, required for self-nominations
    phone: { type: String, trim: true }, // Optional for minors, required for self-nominations
    county: { type: String, required: true, trim: true },
    nationality: { type: String, enum: ['Kenyan Citizen', 'Kenyan Resident'] } // Added field
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
    nominationStatement: { type: String, required: true, minlength: 100, maxlength: 5000 } // 100-750 words
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

  // Section 6: Referee Information (Required)
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

// Pre-save validation for minors and nominator requirements
nominationSchema.pre('save', function(next) {
  // If nominee is under 18, parental consent is required
  if (this.nominee.age < 18 && !this.consent.parentalConsent) {
    return next(new Error('Parental consent required for nominees under 18'));
  }
  
  // If not self-nomination, nominator details are required
  if (!this.isSelfNomination) {
    if (!this.nominator.name || !this.nominator.email || !this.nominator.phone || !this.nominator.relationship) {
      return next(new Error('Nominator details are required for non-self nominations'));
    }
  } else {
    // For self-nominations, email and phone are required
    if (!this.nominee.email) {
      return next(new Error('Email is required for self-nominations'));
    }
    if (!this.nominee.phone) {
      return next(new Error('Phone number is required for self-nominations'));
    }
    
    // For self-nominations, set nominator fields from nominee data
    this.nominator.name = this.nominator.name || this.nominee.name;
    this.nominator.email = this.nominator.email || this.nominee.email;
    this.nominator.phone = this.nominator.phone || this.nominee.phone;
    this.nominator.relationship = this.nominator.relationship || 'Self';
  }
  
  // Calculate age from date of birth to ensure consistency
  const today = new Date();
  const birthDate = new Date(this.nominee.dateOfBirth);
  const calculatedAge = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
  
  if (Math.abs(calculatedAge - this.nominee.age) > 1) {
    return next(new Error('Age must match date of birth'));
  }
  
  // Validate age is between 13-19 as of Dec 1, 2025
  const cutoffDate = new Date('2025-12-01');
  const ageOnCutoff = Math.floor((cutoffDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
  
  if (ageOnCutoff < 13 || ageOnCutoff > 19) {
    return next(new Error('Nominee must be between 13-19 years old as of December 1, 2025'));
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
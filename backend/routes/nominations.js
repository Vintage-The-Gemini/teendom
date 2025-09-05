// File Path: backend/routes/nominations.js
import express from 'express';
import Nomination from '../models/Nomination.js';
import mongoose from 'mongoose';
import emailService from '../services/emailService.js';

const router = express.Router();

// POST /api/nominations - Submit a new nomination
router.post('/', async (req, res) => {
  console.log('🎯 Nomination POST request received');
  console.log('📊 MongoDB connection state:', mongoose.connection.readyState);
  console.log('📊 Database name:', mongoose.connection.name);
  console.log('📦 Request body keys:', Object.keys(req.body));
  
  try {
    const {
      isSelfNomination, nominatorName, nominatorEmail, nominatorPhone, nominatorRelationship,
      nomineeName, nomineeDateOfBirth, nomineeAge, nomineeGender, nomineeEmail, nomineePhone, nomineeCounty, nomineeNationality,
      awardCategory, shortBio, nominationStatement,
      nomineePhoto, supportingDocuments, supportingLinks,
      refereeName, refereePosition, refereePhone, refereeEmail, contactReferee,
      accurateInfo, nomineePermission, parentalConsent, understandsProcess, noFalseInfo
    } = req.body;

    const isSelF = isSelfNomination === 'yes';
    
    console.log('🔍 Key fields:', {
      isSelfNomination, nominatorName, nomineeName, awardCategory,
      hasPhoto: !!nomineePhoto
    });

    // Create nomination object
    const nominationData = {
      isSelfNomination: isSelF,
      nominator: isSelF ? {
        name: nomineeName || 'Self',
        email: nomineeEmail || '',
        phone: nomineePhone || '',
        relationship: 'Self'
      } : {
        name: nominatorName,
        email: nominatorEmail,
        phone: nominatorPhone,
        relationship: nominatorRelationship
      },
      nominee: {
        name: nomineeName,
        dateOfBirth: nomineeDateOfBirth ? new Date(nomineeDateOfBirth) : undefined,
        age: parseInt(nomineeAge),
        gender: nomineeGender || undefined,
        email: nomineeEmail || undefined,
        phone: nomineePhone || undefined,
        county: nomineeCounty,
        nationality: nomineeNationality || undefined
      },
      awardCategory,
      details: {
        shortBio,
        nominationStatement
      },
      supportingMaterials: {
        nomineePhoto: nomineePhoto || '',
        supportingDocuments: supportingDocuments || [],
        supportingLinks: supportingLinks || []
      },
      referee: {
        name: refereeName,
        position: refereePosition,
        phone: refereePhone,
        email: refereeEmail,
        contactPermission: contactReferee || false
      },
      consent: {
        accurateInfo: accurateInfo || true,
        nomineePermission: nomineePermission || true,
        parentalConsent: parseInt(nomineeAge) < 18 ? (parentalConsent || false) : true,
        understandsProcess: understandsProcess || true,
        noFalseInfo: noFalseInfo || true
      },
      status: 'submitted',
      submittedAt: new Date()
    };

    console.log('💾 Attempting to save to database...');
    console.log('📄 Nomination data preview:', {
      nominator: nominationData.nominator.name,
      nominee: nominationData.nominee.name,
      category: nominationData.awardCategory,
      hasPhoto: !!nominationData.supportingMaterials.nomineePhoto
    });

    const nomination = new Nomination(nominationData);
    const savedNomination = await nomination.save();
    
    console.log('🎉 Nomination saved successfully!');
    console.log('📊 Document ID:', savedNomination._id);
    console.log('📊 Collection should now exist in database:', mongoose.connection.name);

    // Send confirmation email - TEMPORARILY DISABLED FOR SPEED
    console.log('📧 Email sending temporarily disabled for faster submissions');

    res.status(201).json({
      success: true,
      message: 'Nomination submitted successfully!',
      nominationId: savedNomination._id
    });

  } catch (error) {
    console.error('❌ Nomination submission error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    if (error.name === 'ValidationError') {
      console.error('Validation errors:', error.errors);
      return res.status(400).json({
        success: false,
        message: 'Validation error: ' + error.message
      });
    }

    if (error.name === 'MongoError' || error.name === 'MongooseError') {
      console.error('Database error details:', error);
      return res.status(500).json({
        success: false,
        message: 'Database error: ' + error.message
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// GET /api/nominations - Get all nominations (admin)
router.get('/', async (req, res) => {
  try {
    const { status, category, page = 1, limit = 20 } = req.query;
    
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.awardCategory = category;

    const nominations = await Nomination.find(filter)
      .sort({ submittedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Nomination.countDocuments(filter);

    console.log(`📊 Retrieved ${nominations.length} nominations from database`);

    res.json({
      success: true,
      nominations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalNominations: total
    });

  } catch (error) {
    console.error('Get nominations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// GET /api/nominations/test-email - Test email functionality
router.get('/test-email', async (req, res) => {
  try {
    console.log('🧪 Testing email service connection...');
    const connectionTest = await emailService.testConnection();
    
    if (connectionTest) {
      // Send a test email
      const emailResult = await emailService.sendConfirmationEmail(
        'admin@teendom.africa', 
        'Test User', 
        'Test Nominee'
      );
      
      res.json({
        success: true,
        connectionTest: true,
        emailSent: emailResult.success,
        message: 'Email test completed',
        details: emailResult
      });
    } else {
      res.json({
        success: false,
        connectionTest: false,
        message: 'Email server connection failed'
      });
    }
  } catch (error) {
    console.error('Email test error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET /api/nominations/:id - Get single nomination
router.get('/:id', async (req, res) => {
  try {
    const nomination = await Nomination.findById(req.params.id);
    
    if (!nomination) {
      return res.status(404).json({
        success: false,
        message: 'Nomination not found'
      });
    }

    res.json({
      success: true,
      nomination
    });

  } catch (error) {
    console.error('Get nomination error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// PUT /api/nominations/:id/status - Update nomination status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status, adminNotes } = req.body;
    
    const validStatuses = ['submitted', 'under-review', 'shortlisted', 'finalist', 'winner', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const nomination = await Nomination.findByIdAndUpdate(
      req.params.id,
      { 
        status, 
        adminNotes: adminNotes || '',
        ...(status === 'finalist' && { isFinalist: true }),
        ...(status === 'winner' && { isWinner: true, isFinalist: true })
      },
      { new: true }
    );

    if (!nomination) {
      return res.status(404).json({
        success: false,
        message: 'Nomination not found'
      });
    }

    console.log(`📊 Updated nomination ${req.params.id} to status: ${status}`);

    res.json({
      success: true,
      message: 'Status updated successfully',
      nomination
    });

  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// DELETE /api/nominations/:id - Delete nomination (admin)
router.delete('/:id', async (req, res) => {
  try {
    const nomination = await Nomination.findByIdAndDelete(req.params.id);
    
    if (!nomination) {
      return res.status(404).json({
        success: false,
        message: 'Nomination not found'
      });
    }

    console.log(`🗑️ Deleted nomination ${req.params.id}`);

    res.json({
      success: true,
      message: 'Nomination deleted successfully'
    });

  } catch (error) {
    console.error('Delete nomination error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// GET /api/nominations/stats/dashboard - Get dashboard statistics
router.get('/stats/dashboard', async (req, res) => {
  try {
    const totalNominations = await Nomination.countDocuments();
    
    const statusStats = await Nomination.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    const categoryStats = await Nomination.aggregate([
      {
        $group: {
          _id: '$awardCategory',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    console.log('📊 Dashboard stats generated');

    res.json({
      success: true,
      stats: {
        total: totalNominations,
        byStatus: statusStats,
        byCategory: categoryStats
      }
    });

  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

export default router;
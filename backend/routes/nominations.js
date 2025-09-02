// File Path: backend/routes/nominations.js
import express from 'express';
import Nomination from '../models/Nomination.js';
import mongoose from 'mongoose';

const router = express.Router();

// POST /api/nominations - Submit a new nomination
router.post('/', async (req, res) => {
  console.log('🎯 Nomination POST request received');
  console.log('📊 MongoDB connection state:', mongoose.connection.readyState);
  console.log('📊 Database name:', mongoose.connection.name);
  console.log('📦 Request body keys:', Object.keys(req.body));
  
  try {
    const {
      nominatorName, nominatorEmail, nominatorPhone, nominatorRelationship,
      nomineeName, nomineeAge, nomineeEmail, nomineePhone, nomineeCounty, nomineeSchool,
      awardCategory, shortBio, nominationStatement,
      nomineePhoto, supportingDocuments, supportingLinks,
      refereeName, refereePosition, refereePhone, refereeEmail, contactReferee,
      accurateInfo, nomineePermission, parentalConsent, understandsProcess, noFalseInfo
    } = req.body;

    console.log('🔍 Key fields:', {
      nominatorName, nomineeName, awardCategory,
      hasPhoto: !!nomineePhoto
    });

    // Create nomination object
    const nominationData = {
      nominator: {
        name: nominatorName,
        email: nominatorEmail,
        phone: nominatorPhone,
        relationship: nominatorRelationship
      },
      nominee: {
        name: nomineeName,
        age: parseInt(nomineeAge),
        email: nomineeEmail || undefined,
        phone: nomineePhone || undefined,
        county: nomineeCounty,
        school: nomineeSchool || undefined
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
      referee: (refereeName && refereePosition) ? {
        name: refereeName,
        position: refereePosition,
        phone: refereePhone || '',
        email: refereeEmail || ''
      } : undefined,
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

    // Note: Email functionality disabled for now
    console.log('📧 Email functionality disabled (nodemailer not configured)');

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
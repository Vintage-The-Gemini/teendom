// backend/routes/nominations.js
import express from 'express';
import Nomination from '../models/Nomination.js';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

const router = express.Router();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Helper function to send confirmation email
const sendConfirmationEmail = async (nominatorEmail, nominatorName, nomineeName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: nominatorEmail,
    subject: '🏆 Teendom Awards - Nomination Submitted Successfully!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">TEENDOM AWARDS 2025</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Celebrating Teen Excellence</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 20px;">Nomination Confirmed! 🎉</h2>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Dear <strong>${nominatorName}</strong>,
          </p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for nominating <strong>${nomineeName}</strong> for the Teendom Awards 2025! 
            Your nomination has been successfully submitted and is now under review.
          </p>
          
          <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">What happens next?</h3>
            <ul style="color: #1e40af; margin: 0; padding-left: 20px;">
              <li>Our judging panel will review all nominations</li>
              <li>Shortlisted nominees will be contacted in November</li>
              <li>Public voting opens for finalists</li>
              <li>Awards ceremony: December 6, 2025 in Nairobi</li>
            </ul>
          </div>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            <strong>Important:</strong> Only shortlisted nominees will be contacted. 
            Keep an eye on your inbox and follow us on social media for updates!
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://teendom.africa/awards" 
               style="background: #ef4444; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              View Awards Page
            </a>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              <strong>Contact Us:</strong><br>
              📧 info@teendom.africa<br>
              📱 0742862080<br>
              🌐 www.teendom.africa
            </p>
          </div>
        </div>
        
        <div style="background: #111827; color: #d1d5db; padding: 20px; text-align: center; font-size: 14px;">
          © 2025 Teendom Africa. Empowering young changemakers across Kenya.
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('📧 Confirmation email sent successfully');
  } catch (error) {
    console.error('⚠️ Failed to send confirmation email:', error.message);
  }
};

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
      hasPhoto: !!nomineePhoto,
      statementLength: nominationStatement?.length,
      bioLength: shortBio?.length,
      consents: { accurateInfo, nomineePermission, understandsProcess, noFalseInfo }
    });

    // Basic validation
    if (!nominatorName || !nominatorEmail || !nomineeName || !nomineeAge || !nomineeCounty) {
      console.log('❌ Missing basic required fields');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: nominator name, email, nominee name, age, and county are required'
      });
    }

    if (!awardCategory || !shortBio || !nominationStatement) {
      console.log('❌ Missing award/bio/statement');
      return res.status(400).json({
        success: false,
        message: 'Award category, bio, and nomination statement are required'
      });
    }

    if (!refereeName || !refereeEmail) {
      console.log('❌ Missing referee info');
      return res.status(400).json({
        success: false,
        message: 'Referee name and email are required'
      });
    }

    if (!accurateInfo || !nomineePermission || !understandsProcess || !noFalseInfo) {
      console.log('❌ Missing required consents');
      return res.status(400).json({
        success: false,
        message: 'All consent checkboxes must be checked'
      });
    }

    // Check parental consent for minors
    const age = parseInt(nomineeAge);
    if (age < 18 && !parentalConsent) {
      console.log('❌ Missing parental consent for minor');
      return res.status(400).json({
        success: false,
        message: 'Parental consent is required for nominees under 18'
      });
    }

    console.log('✅ All validation passed, creating nomination...');

    // Create nomination document
    const nominationData = {
      nominator: {
        name: nominatorName,
        email: nominatorEmail,
        phone: nominatorPhone || '',
        relationship: nominatorRelationship || ''
      },
      nominee: {
        name: nomineeName,
        age: age,
        email: nomineeEmail || '',
        phone: nomineePhone || '',
        county: nomineeCounty,
        school: nomineeSchool || ''
      },
      awardCategory: awardCategory,
      details: {
        shortBio: shortBio,
        nominationStatement: nominationStatement
      },
      supportingMaterials: {
        nomineePhoto: nomineePhoto || '',
        supportingDocuments: supportingDocuments || [],
        supportingLinks: (supportingLinks || []).filter(link => link && link.trim() !== '')
      },
      referee: {
        name: refereeName,
        position: refereePosition || '',
        phone: refereePhone || '',
        email: refereeEmail,
        contactPermission: contactReferee || false
      },
      consent: {
        accurateInfo: true,
        nomineePermission: true,
        parentalConsent: age >= 18 ? true : (parentalConsent || false),
        understandsProcess: true,
        noFalseInfo: true
      }
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

    // Send confirmation email
    try {
      await sendConfirmationEmail(nominatorEmail, nominatorName, nomineeName);
      console.log('📧 Confirmation email sent');
    } catch (emailError) {
      console.log('⚠️ Email sending failed (but nomination was saved):', emailError.message);
    }

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

    console.log(`📊 Updated nomination ${req.params.id} status to: ${status}`);

    res.json({
      success: true,
      nomination
    });

  } catch (error) {
    console.error('Update nomination status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

// GET /api/nominations/stats/dashboard - Get statistics
router.get('/stats/dashboard', async (req, res) => {
  try {
    const totalNominations = await Nomination.countDocuments();
    
    const statusStats = await Nomination.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const categoryStats = await Nomination.aggregate([
      {
        $group: {
          _id: '$awardCategory',
          count: { $sum: 1 }
        }
      }
    ]);

    const ageStats = await Nomination.aggregate([
      {
        $group: {
          _id: {
            $cond: [
              { $lt: ['$nominee.age', 18] },
              'minor',
              'adult'
            ]
          },
          count: { $sum: 1 }
        }
      }
    ]);

    console.log(`📊 Dashboard stats: ${totalNominations} total nominations`);

    res.json({
      success: true,
      stats: {
        total: totalNominations,
        byStatus: statusStats,
        byCategory: categoryStats,
        byAge: ageStats
      }
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error: ' + error.message
    });
  }
});

export default router;
// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Import routes
import nominationsRouter from "./routes/nominations.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB connection
console.log('🔄 Attempting to connect to MongoDB...');
console.log('Connection string:', process.env.MONGODB_URI ? 'Present' : 'Missing');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Teendom')
.then(() => {
  console.log('✅ Connected to MongoDB successfully!');
  console.log('Database:', mongoose.connection.name);
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  console.error('Full error:', err);
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "teendom-awards", // Folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    public_id: (req, file) => {
      // Generate unique filename
      const timestamp = Date.now();
      const originalName = file.originalname.split('.')[0];
      return `${originalName}-${timestamp}`;
    },
  },
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check file type
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only images and PDF files are allowed'), false);
    }
  }
});

// File upload route - MUST be BEFORE other routes
app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log('📤 Upload request received:', {
    hasFile: !!req.file,
    fileDetails: req.file ? {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path
    } : null
  });

  try {
    if (!req.file) {
      console.log('❌ No file in request');
      return res.status(400).json({ 
        success: false, 
        message: "No file uploaded" 
      });
    }

    console.log('✅ File uploaded successfully to Cloudinary:', req.file.path);

    const response = {
      success: true,
      message: "File uploaded successfully",
      url: req.file.path, // Cloudinary URL
      public_id: req.file.filename // Cloudinary public_id
    };

    console.log('📡 Sending response:', response);
    res.json(response);
  } catch (error) {
    console.error('❌ Upload error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Test route to create collection manually
app.post('/api/test-db', async (req, res) => {
  try {
    console.log('🧪 Testing database connection and collection creation...');
    console.log('📊 MongoDB connection state:', mongoose.connection.readyState);
    console.log('📊 Database name:', mongoose.connection.name);
    console.log('📊 Collections in database:', await mongoose.connection.db.listCollections().toArray());

    // Import the model
    const { default: Nomination } = await import('./models/Nomination.js');
    
    // Create a simple test document
    const testNomination = new Nomination({
      nominator: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '0700000000',
        relationship: 'Teacher'
      },
      nominee: {
        name: 'Test Nominee',
        age: 16,
        county: 'Nairobi'
      },
      awardCategory: 'academic',
      details: {
        shortBio: 'This is a test bio for database testing purposes.',
        nominationStatement: 'This is a comprehensive test nomination statement that is designed to meet the minimum character requirements for the database schema validation. This statement contains sufficient words and characters to pass all validation rules that have been established in the Mongoose schema. The nominee being tested here represents an exceptional individual who has demonstrated outstanding qualities in their chosen field of excellence. They have shown remarkable dedication, perseverance, and leadership skills that set them apart from their peers. Through their various achievements and contributions to their community, they have proven themselves worthy of recognition through the Teendom Awards program. This detailed statement ensures that all database validation requirements are properly satisfied during the testing process.'
      },
      supportingMaterials: {
        nomineePhoto: 'https://example.com/test-photo.jpg',
        supportingDocuments: [],
        supportingLinks: []
      },
      referee: {
        name: 'Test Referee',
        position: 'Principal',
        phone: '0700000001',
        email: 'referee@example.com'
      },
      consent: {
        accurateInfo: true,
        nomineePermission: true,
        parentalConsent: true,
        understandsProcess: true,
        noFalseInfo: true
      }
    });

    console.log('💾 Saving test document...');
    const saved = await testNomination.save();
    console.log('✅ Test document saved with ID:', saved._id);
    
    // List collections again
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📊 Collections after save:', collections.map(c => c.name));

    res.json({
      success: true,
      message: 'Test document created successfully!',
      documentId: saved._id,
      database: mongoose.connection.name,
      collections: collections.map(c => c.name)
    });

  } catch (error) {
    console.error('❌ Test failed:', error);
    res.status(500).json({
      success: false,
      message: error.message,
      error: error.stack
    });
  }
});

// Routes
app.use('/api/nominations', nominationsRouter);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!', timestamp: new Date().toISOString() });
});

// Health check route  
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Teendom Awards API is running!',
    timestamp: new Date().toISOString()
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Teendom Awards API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🏆 Nominations API: http://localhost:${PORT}/api/nominations`);
  console.log(`📁 Upload API: http://localhost:${PORT}/api/upload`);
});

export default app;
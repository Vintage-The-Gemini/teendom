// File Path: backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Import routes
import nominationsRouter from "./routes/nominations.js";
import authRouter from "./routes/auth.js";

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
    folder: "teendom-awards",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    public_id: (req, file) => {
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
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only images and PDF files are allowed'), false);
    }
  }
});

// File upload route
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
      url: req.file.path,
      public_id: req.file.filename
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

// Routes
app.use('/api/auth', authRouter);
app.use('/api/nominations', nominationsRouter);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Teendom Backend is working!', 
    timestamp: new Date().toISOString(),
    features: ['Authentication', 'File Upload', 'Nominations'],
    availableRoutes: [
      '/api/auth/login',
      '/api/auth/verify', 
      '/api/auth/logout',
      '/api/nominations',
      '/api/upload',
      '/api/health'
    ]
  });
});

// Health check route  
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Teendom Awards API is running!',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    auth: 'Enabled'
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  console.log('❌ 404 - Route not found:', req.originalUrl);
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.originalUrl}`,
    availableRoutes: [
      '/api/auth/login',
      '/api/auth/verify', 
      '/api/auth/logout',
      '/api/nominations',
      '/api/upload',
      '/api/health',
      '/api/test'
    ]
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
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 API URL: http://localhost:${PORT}/api`);
  console.log(`🔐 Auth endpoints: /api/auth/login, /api/auth/verify`);
  console.log(`📊 Admin credentials: ${process.env.ADMIN_EMAIL || 'admin@teendom.africa'}`);
});

export default app;
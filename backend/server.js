import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "job-recruitment-platform", // put uploads inside this folder in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
  },
});

const upload = multer({ storage });

// ✅ Upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.json({
      success: true,
      message: "File uploaded successfully",
      url: req.file.path, // Cloudinary gives us file.path = URL
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});

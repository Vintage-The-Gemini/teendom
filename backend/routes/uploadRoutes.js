// backend/routes/uploadRoutes.js
import express from "express";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    console.log("📄 File uploaded:", {
      filename: req.file.filename,
      originalname: req.file.originalname,
      path: req.file.path,
      format: req.file.format
    });
    
    res.json({
      message: "File uploaded successfully",
      url: req.file.path, // Public Cloudinary URL
      public_id: req.file.public_id,
      format: req.file.format,
      filename: req.file.originalname
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

export default router;

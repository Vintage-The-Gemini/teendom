// backend/routes/uploadRoutes.js
import express from "express";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    url: req.file.path, // ✅ Cloudinary gives back the hosted URL
  });
});

export default router;

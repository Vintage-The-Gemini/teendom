// backend/config/multer.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "./cloudinary.js"; // ✅ Correct import

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    const ext = file.originalname.split('.').pop().toLowerCase();
    const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const docFormats = ['pdf', 'doc', 'docx', 'txt'];
    
    let resourceType = "raw"; // Default for documents
    if (imageFormats.includes(ext)) {
      resourceType = "image";
    } else if (ext === 'mp4' || ext === 'mov' || ext === 'avi') {
      resourceType = "video";
    }
    
    return {
      folder: "teendom_uploads",
      allowed_formats: [...imageFormats, ...docFormats],
      resource_type: resourceType,
      access_mode: "public"
    };
  },
});

const upload = multer({ storage });

export default upload;

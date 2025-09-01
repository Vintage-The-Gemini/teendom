// backend/config/multer.js
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "./cloudinary.js"; // ✅ Correct import

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "teendom_uploads", // You can rename the folder
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;

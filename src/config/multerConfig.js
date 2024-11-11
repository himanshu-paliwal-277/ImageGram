import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Cloudinary storage for multer with validation
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "uploads",
    format: async (req, file) => file.mimetype.split("/")[1], // Automatically set format based on MIME type
    public_id: (req, file) =>
      `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1e9)}`, // Unique ID for each file
  },
});

// Middleware for uploading with file type validation
export const cloudinaryUploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Validate file type to accept only JPEG and PNG
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true); // Accept file
    } else {
      cb(new Error("File type not supported. Only JPEG and PNG are allowed.")); // Reject file with error message
    }
  },
});

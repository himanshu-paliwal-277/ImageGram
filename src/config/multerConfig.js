import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "uploads",
    format: async (req, file) => file.mimetype.split("/")[1],
    public_id: (req, file) =>
      `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1e9)}`, // Unique ID
  },
});

// Middleware for uploading
export const cloudinaryUploader = multer({ storage });

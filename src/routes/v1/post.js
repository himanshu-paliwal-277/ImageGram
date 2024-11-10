// Here all the post related routes are present
// We look at the remaining url part after /posts
// Here all the post related routes are present
// We look at the remaining url part after /posts
import express from "express";

import { cloudinaryUploader } from "../../config/multerConfig.js";
import { createPost, getAllPosts, deletePost, updatePost } from "../../controllers/postController.js";

const router = express.Router(); // Router object to modularize the routes

router.post("/", cloudinaryUploader.single("image"), createPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

router.put("/:id", cloudinaryUploader.single("image"), updatePost);

export default router;

// introduce a v1 router now !!

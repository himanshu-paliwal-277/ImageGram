import { createPostService } from "../services/postService.js";

export async function createPost(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    console.log("req.file: ", req.file); // req.file

    const post = await createPostService({
      caption: req.body.caption,
      image: req.file.path,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: error,
    });
  }
}

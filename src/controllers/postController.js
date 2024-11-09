import { createPostService, getAllPostsService, getPostByIdsService, deletePostByIdService } from "../services/postService.js";

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

export async function getAllPosts(req, res) {
  try {
    const posts = await getAllPostsService();

    return res.status(200).json({
      success: true,
      message: "All Posts fetch successfully",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occur in fetching posts",
      error: error,
    });
  }
}

export async function getPostById(req, res) {
  try {
    const id = req.params.id;
    console.log("Id = ", id);
    const post = await getPostByIdsService(id);

    return res.status(200).json({
      success: true,
      message: "Post fetch successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occur in fetching post",
      error: error,
    });
  }
}

export async function deletePostById(req, res) {
  try {
    const id = req.params.id;
    const post = await deletePostByIdService(id);

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: post
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occur when deleting a post",
      error: error,
    });
  }
}

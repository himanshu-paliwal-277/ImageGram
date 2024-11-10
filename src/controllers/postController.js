import {
  createPostService,
  getAllPostsService,
  getPostByIdsService,
  deletePostService,
  updatePostService,
} from "../services/postService.js";

export async function createPost(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    if (!req.body.caption) {
      return res.status(400).json({ message: "Caption is required" });
    }

    // console.log("req.file: ", req.file); // req.file
    console.log("caption: ", req.body.caption);

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
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedPosts = await getAllPostsService(offset, limit);

    return res.status(200).json({
      success: true,
      message: "All posts fetched successfully",
      data: paginatedPosts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
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

export async function deletePost(req, res) {
  try {
    const postId = req.params.id;
    const response = await deletePostService(postId);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function updatePost(req, res) {
  try {
    console.log("req file", req.file);
    const updateObject = req.body;
    if (req.file) {
      // updateObject.image = req.file.location;
      updateObject.image = req.file.path;
    }
    const response = await updatePostService(req.params.id, updateObject);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

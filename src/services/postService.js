import {
  createPost,
  findAllPosts,
  findPostById,
  deletePostById,
  countAllPosts
} from "../repositories/postRepository.js";

export const createPostService = async (createPostObejct) => {
  try {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    // const user = createPostObejct.user; add later

    const post = await createPost(caption, image);
    return post;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllPostsService = async (offset, limit) => {
  const posts = await findAllPosts(offset, limit);

  // Calculate total number of posts and total number of pages
  const totalDocuments = await countAllPosts();

  const totalPages = Math.ceil(totalDocuments / limit);

  return {
    posts,
    totalPages,
    totalDocuments,
  };
};

export const getPostByIdsService = async (id) => {
  try {
    const post = await deletePostById(id);
    return post;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const deletePostByIdService = async (id) => {
  try {
    const post = await findPostById(id);
    return post;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

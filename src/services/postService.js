import { createPost, findAllPosts, findPostById, deletePostById } from "../repositories/postRepository.js";

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

export const getAllPostsService = async () => {
  try {
    const posts = await findAllPosts();
    return posts;
  } catch (error) {
    console.log(error);
    return error;
  }
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

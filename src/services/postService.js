import e from "express";
import { createPost } from "../repositories/postRepository.js";

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

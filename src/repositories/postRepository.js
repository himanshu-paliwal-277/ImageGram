import Post from "../Schema/post.js";

export const createPost = async (caption, image, user) => {
  try {
    const newPost = await Post.create({ caption, image, user });
    // const newPost = new Post({caption, image, user});
    // await newPost.save();
    return newPost;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const findAllPosts = async () => {
  try {
    // add pagination feature that will show 10 post per page 
    const page = 1;
    const limit = 10;
    const skit = (page - 1) * limit;
    
    const posts = await Post.find().skip(skit).limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const findPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

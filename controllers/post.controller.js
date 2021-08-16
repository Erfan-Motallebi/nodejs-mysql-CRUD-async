const Post = require("../models/post.model");

exports.postController = {
  getAllPosts: async (req, res, next) => {
    try {
      const [posts, _] = await Post.findAll();
      res.status(200).json({ results: posts });
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  addNewPost: async (req, res, next) => {
    const { title, body } = req.body;
    try {
      const newPost = new Post(title, body);
      await newPost.save();
      res.status(201).json({
        success: true,
        newPost,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  getPost: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [post, _] = await Post.findById(id);
      res.status(200).json({ post });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  updatePost: async (req, res, next) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
      const selectUpdatePost = new Post(title, body);
      const [updatedPost, _] = await selectUpdatePost.updateOne(id);
      res.status(200).json({ updatedPost: updatedPost.affectedRows });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  deletePost: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [deletedPost, _] = await Post.deleteOne(id);
      res.status(200).json({ deletedPost: deletedPost.affectedRows });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};

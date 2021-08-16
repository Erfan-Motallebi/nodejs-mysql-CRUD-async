const express = require("express");
const { postController } = require("../controllers/post.controller");
console.log(postController.getAllPosts);
const Router = express.Router();

Router.route("/posts")
  .get(postController.getAllPosts)
  .post(postController.addNewPost);

Router.route("/post/:id")
  .get(postController.getPost)
  .put(postController.updatePost)
  .delete(postController.deletePost);

module.exports = Router;

import { Router } from "express";
import {
  getAllUsers,
  getProfile,
  createNewUser,
  getUserById,
  removeUser,
} from "./src/controllers/user.js";
import * as userModel from "./src/models/user.js";
import { getAllPosts, createNewPost } from "./src/controllers/posts.js";
import * as postModel from "./src/models/posts.js";
import * as commentsModel from "./src/models/comments.js";
import {
  getAllComments,
  createNewComment,
} from "./src/controllers/comments.js";
import { getSalons } from "./src/controllers/salons.js";
import * as salonsModel from "./src/models/salons.js";

const router = Router();

router.get("/", (req, res) => {});

router.get("/user", getProfile(userModel));
router.get("/users", getAllUsers(userModel));
router.delete("/delete", removeUser(userModel));

router.get("/getuserbyid", getUserById(userModel));
router.post("/createuser", createNewUser(userModel));
router.get("/posts", getAllPosts(postModel));
router.post("/createpost", createNewPost(postModel));
router.get("/salons", getSalons(salonsModel));
router.get("/comments", getAllComments(commentsModel));
router.post("/createcomment", createNewComment(commentsModel));

export default router;

import express from "express";
import {
  register,
  login,
  logout,
  bookmarks,
  getMyProfile,
  getOtherUsers,
  follow,
  unFollow,
  getAllTweets,
  getFollowingTweets,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmarks/:id").put(auth, bookmarks);
router.route("/profile").get(auth, getMyProfile);
router.route("/otherUser").get(auth, getOtherUsers);
router.route("/follow/:id").put(auth, follow);
router.route("/unFollow/:id").put(auth, unFollow);
router.route("/allTweets").get(auth, getAllTweets);
router.route("/followingTweets").get(auth, getFollowingTweets);

export default router;

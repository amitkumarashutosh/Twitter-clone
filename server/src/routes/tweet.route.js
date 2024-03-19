import express from "express";
import {
  createTweet,
  deleteTweet,
  likeDislike,
} from "../controllers/tweet.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.route("/").post(auth, createTweet);
router.route("/:id").delete(auth, deleteTweet).put(auth, likeDislike);

export default router;

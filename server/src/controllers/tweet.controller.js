import asyncHandler from "../utils/async.js";
import ApiError from "../utils/error.js";
import { Tweet } from "../models/tweet.model.js";
import { User } from "../models/user.model.js";

const createTweet = asyncHandler(async (req, res) => {
  const { description } = req.body;
  if (!description) {
    throw new ApiError(401, "Please provide description");
  }

  const user = await User.findById(req.user.userId).select("-password");
  const tweet = await Tweet.create({
    description,
    userId: user._id,
    userDetails: user,
  });
  res.status(201).json({
    tweet,
    success: true,
    msg: "tweet created successfully",
  });
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const tweet = await Tweet.findByIdAndDelete(id);
  if (!tweet) {
    throw new ApiError(401, `No tweet is present with id ${id}`);
  }
  res.status(200).json({
    success: true,
    msg: "Tweet deleted successfully",
  });
});

const likeDislike = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.userId;
  const tweetId = req.params.id;

  const tweet = await Tweet.findById(tweetId);
  if (!tweet) {
    throw new ApiError(404, `No tweet with id ${tweetId}`);
  }

  if (tweet.like.includes(loggedInUserId)) {
    await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });
    res.status(200).json({ success: true, msg: "user disliked your tweet" });
  } else {
    await Tweet.findByIdAndUpdate(tweetId, { $push: { like: loggedInUserId } });
    res.status(200).json({ success: true, msg: "user liked your tweet" });
  }
});

export { createTweet, deleteTweet, likeDislike };

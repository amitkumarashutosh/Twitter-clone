import asyncHandler from "../utils/async.js";
import ApiError from "../utils/error.js";
import { User } from "../models/user.model.js";
import { Tweet } from "../models/tweet.model.js";

const register = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    name: user.name,
    user: user.username,
    email: user.email,
    msg: "User register successfully",
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "All fields are required!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "User does not exist!");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid Credentials!");
  }

  const token = await user.createJWT();
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      expiresIn: "1d",
    })
    .json({
      success: true,
      name: user.name,
      email: user.email,
      msg: `Welcome back ${user.name}`,
    });
});

const logout = asyncHandler(async (req, res) => {
  res
    .cookie("token", "", { expiresIn: new Date(Date.now()) })
    .status(200)
    .json({ msg: "user logged out successfully" });
});

const bookmarks = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user.userId;
  const tweetId = req.params.id;

  const user = await User.findById(loggedInUserId);
  const tweet = await Tweet.findById(tweetId);

  if (!tweet) {
    throw new ApiError(404, `No tweet with id ${tweetId}`);
  }

  if (user.bookmarks.includes(tweetId)) {
    await User.findByIdAndUpdate(loggedInUserId, {
      $pull: { bookmarks: tweetId },
    });
    res.status(200).json({ success: true, msg: "Removed from bookmarks" });
  } else {
    await User.findByIdAndUpdate(loggedInUserId, {
      $push: { bookmarks: tweetId },
    });
    res.status(200).json({ success: true, msg: "Save to bookmarks" });
  }
});

const getMyProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  res.status(200).json({ success: true, user });
});

const getOtherUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user.userId } }).select(
    "-password"
  );
  res.status(200).json({ users, count: users.length });
});

const follow = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const loggedInUserId = req.user.userId;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, `No user with id ${id}`);
  }

  if (!user.followers.includes(loggedInUserId)) {
    await user.updateOne({ $push: { followers: loggedInUserId } });
    await User.findByIdAndUpdate(loggedInUserId, { $push: { following: id } });
    res.status(200).json({ msg: `Logged in user followed to ${user.name}` });
  } else {
    res.status(200).json({ msg: `User already followed to ${user.name}` });
  }
});

const unFollow = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const loggedInUserId = req.user.userId;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, `No user with id ${id}`);
  }
  const loggedInUser = await User.findById(loggedInUserId);

  if (loggedInUser.following.includes(id)) {
    await user.updateOne({ $pull: { followers: loggedInUserId } });
    await User.findByIdAndUpdate(loggedInUser, { $pull: { following: id } });
    res.status(200).json({ msg: `Logged in user unFollowed to ${user.name}` });
  } else {
    res.status(200).json({ msg: `User has not followed yet to ${user.name}` });
  }
});

const getAllTweets = asyncHandler(async (req, res) => {
  const tweets = await Tweet.find({}).sort("-createdAt");
  res.status(200).json({ tweets, count: tweets.length });
});

const getFollowingTweets = asyncHandler(async (req, res) => {
  const loggedInUser = await User.findById(req.user.userId);
  const tweet = await Promise.all(
    loggedInUser.following.map((userId) => {
      return Tweet.find({ userId: userId });
    })
  );

  res.status(200).json({ tweets: [].concat(...tweet) });
});
export {
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
};

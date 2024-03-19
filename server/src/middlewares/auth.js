import jwt from "jsonwebtoken";
import ApiError from "../utils/error.js";
import asyncHandler from "../utils/async.js";

const auth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new ApiError(401, "User not authenticated");
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET);
  req.user = { userId: payload.userId };
  next();
});

export default auth;

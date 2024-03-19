import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import tweetSlice from "./tweetSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    tweet: tweetSlice,
  },
});

export default store;

import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

const Feed = () => {
  const { tweets } = useSelector((state) => state.tweet);
  return (
    <div className="w-[50%]">
      <div>
        <CreatePost />
        {tweets?.map((tweet) => {
          return (
            <Tweet
              description={tweet.description}
              key={tweet._id}
              like={tweet.like}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;

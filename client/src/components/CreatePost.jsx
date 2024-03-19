import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="border border-gray-200">
      <div className="flex items-center justify-evenly border-b border-gray-200">
        <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
          <h1 className="font-semibold text-gray-700 text-lg">Feed</h1>
        </div>
        <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
          <h1 className="font-semibold text-gray-700 text-lg">Follwoing</h1>
        </div>
      </div>
      <div className="m-4">
        <div className="flex">
          <div>
            <Avatar githubHandle="sitebase" size={40} round={true} />
          </div>
          <input
            type="text"
            placeholder="What is happening?"
            className="text-lg outline-none w-full m-2"
          />
        </div>
        <div className="flex items-center justify-between p-4 ">
          <CiImageOn />
          <button className="bg-[#1D98F0] rounded-full text-white font-bold border-none px-4 py-1 text-lg">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

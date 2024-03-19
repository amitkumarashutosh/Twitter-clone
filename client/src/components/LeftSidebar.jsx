import React from "react";
import { CiHome, CiHashtag, CiUser, CiBookmark } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div className="ml-4">
          <img src="logo.png" width="24" />
        </div>
      </div>
      <div className="my-4">
        <Link
          to="/"
          className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <CiHome size="24" />
          <h1 className="font-bold text-lg ml-2">Home</h1>
        </Link>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <CiHashtag size="24" />
          <h1 className="font-bold text-lg ml-2">Explore</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <IoIosNotifications size="24" />
          <h1 className="font-bold text-lg ml-2">Notifications</h1>
        </div>

        <Link
          to="/profile"
          className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <CiUser size="24" />
          <h1 className="font-bold text-lg ml-2">Profile</h1>
        </Link>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <CiBookmark size="24" />
          <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <AiOutlineLogout size="24" />
          <h1 className="font-bold text-lg ml-2">Logout</h1>
        </div>
        <button className="px-4 py-2 border-none text-md bg-[#1D98F0] w-full rounded-full text-white font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;

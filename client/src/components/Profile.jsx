import React, { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";

const Profile = () => {
  const { profile } = useSelector((state) => state.user);
  useGetProfile();

  return (
    <div className="w-[50%] border-r border-l border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <img src="banner.jpg" alt="banner" />
        <div className=" inline ml-4 border-4 rounded-full">
          <Avatar src="profile.jpg" size={120} round={true} />
        </div>
        <div className="text-right m-4 ">
          <button className="px-4 py-1 hover;bg-gray-200 rounded-full border border-gray-400 hover:bg-gray-200">
            Edit Profile
          </button>
        </div>
        <div className="font-bold text-xl">
          <h1>{`@${profile?.username}`}</h1>
          <p>{profile?.email}</p>
        </div>
        <div className=" text-sm">
          <p>Exploring the web development domain</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

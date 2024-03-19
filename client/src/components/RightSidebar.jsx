import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSidebar = ({ otherUser }) => {
  return (
    <div className="w-[25%]">
      <div className="p-2 flex items-center bg-gray-100 rounded-full outline-none ">
        <CiSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-2 "
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg ">Who to follow</h1>
        <div>
          {otherUser?.map((user) => {
            return (
              <div
                className="flex items-center justify-between my-3"
                key={user.email}
              >
                <div className="flex">
                  <Avatar githubHandle="sitebase" size={40} round={true} />
                  <div className="ml-2">
                    <h1 className="font-bold">{user.name}</h1>
                    <p className="text-small">{user.email}</p>
                  </div>
                </div>
                <div>
                  <button className="px-4 py-1 rounded-full bg-black text-white">
                    Profile
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

import React from "react";
import Avatar from "react-avatar";
import { GoComment } from "react-icons/go";
import { CiHeart, CiBookmark } from "react-icons/ci";

const Tweet = ({ description, like }) => {
  return (
    <div className="border border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar githubHandle="sitebase" size={40} round={true} />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1>Amit kr</h1>
              <div className="text-gray-500 text-s ml-1">
                amit@gmail.com, 1m
              </div>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <GoComment size="20" />
                </div>
                <p className="mx-1">{like.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                  <CiHeart size="20" />
                </div>

                <p className="mx-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size="20" />
                </div>
                <p className="mx-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

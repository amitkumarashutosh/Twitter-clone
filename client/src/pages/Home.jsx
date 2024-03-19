import React from "react";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import { Outlet } from "react-router-dom";
import useOtherUsers from "../hooks/useOtherUser";
import { useSelector } from "react-redux";
import useGetTweet from "../hooks/useGetTweet";

const Home = () => {
  const { otherUser } = useSelector((state) => state.user);

  useOtherUsers();
  useGetTweet();
  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      <Outlet />
      <RightSidebar otherUser={otherUser} />
    </div>
  );
};

export default Home;

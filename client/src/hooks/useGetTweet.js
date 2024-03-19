import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetTweet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const { data } = await axios.get("/api/v1/users/allTweets");
        dispatch(getAllTweets(data.tweets));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTweet();
  }, []);
};

export default useGetTweet;

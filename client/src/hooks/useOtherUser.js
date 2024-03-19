import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUser } from "../redux/userSlice";

const useOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const { data } = await axios.get("/api/v1/users/otherUser");
        dispatch(getOtherUser(data.users));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, []);
};

export default useOtherUsers;

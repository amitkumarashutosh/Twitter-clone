import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";

const useGetProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchGetProfile = async () => {
      try {
        const { data } = await axios.get("/api/v1/users/profile");
        dispatch(getProfile(data.user));
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetProfile();
  }, []);
};

export default useGetProfile;

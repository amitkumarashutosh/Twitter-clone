import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        toast.error("Please provide email and password");
        return;
      }
      const { data } = await axios.post(`api/v1/users/login`, formData, {
        "Content-Type": "application/json",
      });
      if (data.success) {
        dispatch(getUser({ name: data.name, email: data.email }));
        setFormdata({ email: "", password: "" });
        toast.success(data.msg);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-evenly w-[80%] items-center">
        <div>
          <img src="logo.png" alt="logo" width="300px" />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening Now</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-[60%]">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="my-1 outline-blue-500 border border-gray-800 px-3 py-1 rounded-full font-semibold"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="my-1 outline-blue-500 border border-gray-800 px-3 py-1 rounded-full font-semibold"
            />
            <button className="bg-[#1D98F8] border-none py-2 rounded-full text-white text-lg ">
              Login
            </button>
            <h1>
              Don't have an account?{" "}
              <span className="text-blue-500">
                <Link to="/register">Register</Link>
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

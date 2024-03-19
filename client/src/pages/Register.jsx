import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.email ||
        !formData.password ||
        !formData.name ||
        !formData.username
      ) {
        toast.error("All fields are required");
        return;
      }
      const { data } = await axios.post("/api/v1/users/register", formData, {
        "Content-Type": "application/json",
      });
      if (data.success) {
        setFormdata({ email: "", password: "", name: "", username: "" });
        toast.success(data.msg);
        navigate("/login");
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
          <h1 className="mt-4 mb-2 text-2xl font-bold">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-[60%]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="my-1 outline-blue-500 border border-gray-800 px-3 py-1 rounded-full font-semibold"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="my-1 outline-blue-500 border border-gray-800 px-3 py-1 rounded-full font-semibold"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
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
              Register
            </button>
            <h1>
              Already have an account?{" "}
              <span className="text-blue-500">
                <Link to="/login">Login</Link>
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

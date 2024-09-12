import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        user,
        {
          headers: { "content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
      setUser({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center border-4 bg-blue-400">
      <div className="border-4 border-blue-300 p-6 rounded-lg bg-blue-100">
        <div className="text-blue-300 text-4xl font-bold mb-4 flex justify-center">
          Signup
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col ">
            <label className="text-xl">Username</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              className="outline-none border-2 border-blue-200 h-10 rounded-md text-xl px-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xl">Email</label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              className="outline-none border-2 border-blue-200 h-10 rounded-md text-xl px-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xl">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="text"
              className="outline-none border-2 border-blue-200 h-10 rounded-md text-xl px-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-xl">Confirm Password</label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="text"
              className="outline-none border-2 border-blue-200 h-10 rounded-md text-xl px-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" px-4 py-2 bg-blue-300 border-y-8 rounded-lg"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <p className="text-lg">
            Already have an account.{" "}
            <Link className="text-blue-700" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

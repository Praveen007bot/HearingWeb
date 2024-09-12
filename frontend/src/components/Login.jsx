import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/testing");
        toast.success(res.data.message);
        //dispatch(setAuthUser(res.data.user));
        console.log(res.data.user);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center border-4 bg-blue-400">
      <div className="border-4 border-blue-300 p-6 rounded-lg bg-blue-100">
        <div className="text-blue-300 text-4xl font-bold mb-4 flex justify-center">
          Login
        </div>
        <form onSubmit={submitHandler}>
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

          <div className="flex justify-center">
            <button className=" px-4 py-2 bg-blue-300 border-y-8 rounded-lg">
              Signup
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <p className="text-lg">
            Don't have an account.{" "}
            <Link className="text-blue-700" to={"/"}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

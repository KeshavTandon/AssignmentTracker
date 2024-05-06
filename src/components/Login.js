import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { students } from "./Data";
import { useDispatch } from "react-redux";
import { setUsername1 } from "./userSlice";
import logo from "../images/logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewUser =async ()=>{
    navigate('/SignUp')
  }

  const handleRedirect = async (username) => {
    const userExists = students.find((user) => user.rollno === username);
    if (userExists) {
      const userKey = userExists.rollno;
      navigate("/Dashboard");
      dispatch(setUsername1(username));
      localStorage.setItem(userKey, JSON.stringify(userExists));
    } else {
      alert("User not found!");
      navigate("/");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRedirect(username);
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 min-h-screen flex items-center justify-center">
      <div className="absolute bg-black bg-opacity-40 p-8 rounded-md w-full sm:w-96">
        <div className="mx-auto flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-24 mb-6" />
        </div>
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Assignment Tracker
        </h1>
        {isLoggedIn ? (
          <div>
            <p className="text-center text-3xl font-extrabold text-gray-900">
              Welcome, {username}!
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="block mb-4">
              <span className="text-white">Username:</span>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your username"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-white">Password:</span>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Login
            </button>
            <p className="text-white">New User?</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-half" onClick={handleNewUser}>
              SignUp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

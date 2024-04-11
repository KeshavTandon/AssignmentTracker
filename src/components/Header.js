import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsername1 } from "./userSlice";
import logoutIcon from "../images/logout.png";
import userIcon from "../images/user.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const usernamee = useSelector((state) => state.userSlice.username);

  const handleLogout = () => {
    const userDataString = localStorage.getItem(usernamee);
    const user = userDataString ? JSON.parse(userDataString) : null;
    localStorage.setItem(usernamee, JSON.stringify(user));
    dispatch(setUsername1());
    navigate("/");
  };

  const userDataString = localStorage.getItem(usernamee);
  const user = userDataString ? JSON.parse(userDataString) : null;
  const username = user ? user.fullname : "Guest";

  return (
    <header className=" text-white p-4 w-full top-0 z-10 opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={userIcon} alt="User" className="w-6 h-6 mr-2" />
          <span className="font-bold text-lg">{`Welcome ${username}`}</span>
        </div>
        <div className="font-bold flex items-center space-x-4">
          <Link
            to={location.pathname === "/AboutUs" ? "/DashBoard" : "/AboutUs"}
            className="text-lg font-bold hover:text-blue-200 transition duration-300"
          >
            {location.pathname === "/AboutUs" ? "Home" : "AboutUs"}
          </Link>
          <Link
            to={
              location.pathname === "/LeaderBoard"
                ? "/Dashboard"
                : "/LeaderBoard"
            }
            className="text-lg font-bold hover:text-blue-200 transition duration-300"
          >
            {location.pathname === "/LeaderBoard" ? "Home" : "LeaderBoard"}
          </Link>
          <Link
            to={location.pathname === "/Ranking" ? "/DashBoard" : "/Ranking"}
            className="text-lg font-bold hover:text-blue-200 transition duration-300"
          >
            {location.pathname === "/Ranking" ? "Home" : "Ranking"}
          </Link>
          <Link
            to={location.pathname === "/Profile" ? "/DashBoard" : "/Profile"}
            className="text-lg font-bold hover:text-blue-200 transition duration-300"
          >
            {location.pathname === "/Profile" ? "Home" : "Profile"}
          </Link>
          <button
            onClick={handleLogout}
            className="text-lg font-semibold hover:text-blue-200 transition duration-300 flex items-center"
          >
            <img src={logoutIcon} alt="Logout" className="w-6 h-6 mr-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { problems } from "./Data";
import user2 from "../images/user2.png";

const Profile = () => {
  const rollno = useSelector((state) => state.userSlice.username);
  const userDataString = localStorage.getItem(rollno);
  const user = userDataString ? JSON.parse(userDataString) : null;

  const problemNames = user
    ? user.problems.map((problemNumber) => {
        const foundProblem = problems.find(
          (problem) => problem.Sno === problemNumber
        );
        return foundProblem ? foundProblem.Name : `Problem ${problemNumber}`;
      })
    : [];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-900 to-sky-900">
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <div className="mx-auto flex items-center justify-center">
          <h2 className="text-3xl text-white font-bold mb-6 text-center ">
            User Profile
            {/* <img src={user2} alt="user" className="w-8 h-8 mt-4 ml-3" /> */}
          </h2>
        </div>

        {user && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-semibold mb-2">ID: {user.id}</p>
              <p className="text-lg font-semibold mb-2">
                Roll No: {user.rollno}
              </p>
              <p className="text-lg font-semibold mb-2">
                Full Name: {user.fullname}
              </p>
              <p className="text-lg font-semibold mb-2">
                Mobile: {user.mobile}
              </p>
            </div>
            <div className="md:order-first">
              <p className=" text-white text-lg font-bold mb-2">Problems:</p>
              <ul className="list-disc pl-6">
                {problemNames.map((problem, index) => (
                  <li key={index}>{problem}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

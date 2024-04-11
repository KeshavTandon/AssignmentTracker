import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Checkbox from "./Checkbox";
import { problems } from "./Data";

const Dashboard = () => {
  const username = useSelector((state) => state.userSlice.username);
  const [solvedProblems, setSolvedProblems] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(username)) || {};

    setSolvedProblems(userData.problems || []);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const checkboxId = parseInt(checkbox.id, 10);
      checkbox.checked = userData.problems.includes(checkboxId);
    });
  }, [username]); // Update when the username changes

  const handleCheckboxChange = (problemId, isChecked) => {
    
    if (isChecked) {
      setSolvedProblems((prevProblems) => [...prevProblems, problemId]);
    } else {
      setSolvedProblems((prevProblems) =>
        prevProblems.filter((id) => id !== problemId)
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 min-h-screen">
      <Header />
      <div className="max-w-screen-md mx-auto mt-8 p-4">
        <h1 className="text-3xl mb-5 mt-3 text-white font-bold">
          Problem Links
        </h1>

        <ul className="space-y-4">
          {problems.map((item, index) => {
            const { Sno, Name, Link } = item;
            const isProblemSolved = solvedProblems.includes(Sno);

            return (
              <li
                key={index}
                className={`bg-black bg-opacity-40  font-bold flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 rounded-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${
                  isProblemSolved ? "bg-green-300" : " font-bold"
                }`}
              >
                <Checkbox
                  checkboxId={Sno}
                  username={username}
                  onChange={handleCheckboxChange}
                />
                <a
                  href={Link}
                  className={`text-white flex-1 block p-4 border-b md:border-b-0 border-gray-300 hover:bg-gray-200 rounded-md transition duration-300 ${
                    isProblemSolved
                      ? "text-gray-500"
                      : "text-gray-800 hover:text-blue-400"
                  }`}
                >
                  <div className="text-lg font-medium">{Name}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

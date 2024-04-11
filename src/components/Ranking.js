import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import trophy from "../images/trophy.png";

const Ranking = () => {
  const [studentData, setStudentData] = useState([]);
  const rollno = useSelector((state) => state.userSlice.username);
  const userDataString = localStorage.getItem(rollno);
  const user = userDataString ? JSON.parse(userDataString) : null;
  const username = user ? user.fullname : "Guest";

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studentData")) || {};
    const dataArray = Object.values(storedData);
    setStudentData(dataArray);
  }, []);

  const sortedData = [...studentData].sort(
    (a, b) => b.problems.length - a.problems.length
  );

  const currentStudentIndex = sortedData.findIndex(
    (student) => student.rollno === rollno
  );

  const ranking = currentStudentIndex + 1;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 min-h-screen">
      <Header />
      <div className="container mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
        <h2 className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
          Student Ranking{" "}
          <img src={trophy} alt="trophy" className="w-8 h-8 mt-4 ml-3" />
        </h2>

        {rollno && (
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            {`${username}`} is ranked #{ranking}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Ranking;

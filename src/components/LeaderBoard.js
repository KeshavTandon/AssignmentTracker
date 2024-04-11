import React, { useEffect, useState } from "react";
import Header from "./Header";

const Leaderboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);

    const studentsData = keys
      .filter((key) => key.startsWith("2100")) 
      .map((key) => {
        const studentData = JSON.parse(localStorage.getItem(key));
        return { ...studentData, rollno: key };
      });
    const sortedStudents = studentsData.sort(
      (a, b) => b.problems.length - a.problems.length
    );

    setStudents(sortedStudents);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="p-8 bg-black bg-opacity-50 text-white to-cyan-500 rounded-md shadow-md max-w-screen-lg">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            Leaderboard
          </h2>
          <ul className="divide-y divide-gray-300">
            {students.map((student, index) => (
              <li
                key={index}
                className="py-4 transition duration-300 transform hover:shadow-lg hover:bg-gray-500"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col sm:flex-row">
                    <span className="mb-2 sm:mb-0 font-semibold text-xl">
                      {student.fullname}
                    </span>
                    <span
                      className="text-white font-bold ml-4 mr-3 mt-[5px] 
                  "
                    >
                      Roll No: {student.rollno}
                    </span>
                  </div>
                  <span className="text-white font-bold text-lg">
                    Score: {student.problems.length}
                  </span>
                </div>
                <div className="text-white font-bold mt-2">
                  Problems Number: {student.problems.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

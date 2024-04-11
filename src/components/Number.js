import React, { useState } from "react";
import { problems,students} from "../components/Data";

const Number = () => {
  const [selectedProblems, setSelectedProblems] = useState([]);

  const handleChange = (event) => {
    const number = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedProblems([...selectedProblems, number]);
    } else {
      setSelectedProblems(selectedProblems.filter((item) => item !== number));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Checkbox Data</h1>
        <div className="space-y-4">
          {problems.problems.map((problem) => (
            <label
              htmlFor={`checkbox${problem.id}`}
              className="flex items-center"
              key={problem.id}
            >
              <input
                type="checkbox"
                id={`checkbox${problem.id}`}
                value={problem.id}
                onChange={handleChange}
              />
              <span className="ml-2">{problem.id}</span>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Data:</h2>
          <ul>
            {selectedProblems.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Number;

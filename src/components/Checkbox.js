import React, { useState, useEffect } from "react";

const Checkbox = ({ checkboxId, username }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem(username);
    const userData = userDataString
      ? JSON.parse(userDataString)
      : { problems: [] };
    setIsChecked(userData.problems.includes(checkboxId));
  }, [checkboxId, username]);

  const handleCheckboxChange = () => {
    const userDataString = localStorage.getItem(username);
    const userData = userDataString
      ? JSON.parse(userDataString)
      : { problems: [] };

    const updatedProblems = isChecked
      ? userData.problems.filter((problemId) => problemId !== checkboxId)
      : [...new Set([...userData.problems, checkboxId])];

    // Update the user object with the new problems array
    const updatedUserData = { ...userData, problems: updatedProblems };

    // Store the updated user data in local storage
    localStorage.setItem(username, JSON.stringify(updatedUserData));
    setIsChecked(!isChecked);
  };

  return (
    <div className="ml-2">
      {" "}
      {/* Add left margin using ml-2 */}
      <input
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onChange={() => handleCheckboxChange(checkboxId)}
      />
    </div>
  );
};

export default Checkbox;

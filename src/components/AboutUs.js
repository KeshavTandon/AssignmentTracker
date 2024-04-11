import React from "react";
import Header from "./Header";
import linkedin from "../images/linkedin.png";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 min-h-screen flex flex-col justify-between">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          About Assignment Tracker
        </h1>

        <p className="text-white">
          Introducing Assignment Tracker, your own resource for tracking your
          progress and solving problems efficiently. Assignment Tracker is meant
          to improve your educational experience, regardless of whether you're a
          student, teacher, or a coding enthusiast.
        </p>

        <h2 className="text-white text-2xl font-bold mt-6 mb-4">
          Key Features:
        </h2>

        <p className="text-white">
          <ul className="ml-6">
            <li>
              <strong>Problem Solver:</strong> Use our user-friendly interface
              to quickly and easily solve a predetermined number of problems.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Maintain an extensive log of
              all the issues you've resolved.
            </li>
            <li>
              <strong>Leaderboard:</strong> Check out your position on the
              worldwide leaderboard and compete with others. Compare your
              success with that of your peers to stay motivated.
            </li>
            <li>
              <strong>Secure Login:</strong> Register to gain access to a
              customised experience. Your data is secure and only you can access
              it.
            </li>
          </ul>
        </p>

        <h2 className="text-white text-2xl font-bold mt-6 mb-4">
          How it Works:
        </h2>

        <p className="text-white">
          Using Assignment Tracker makes learning easier. To get started, take
          these actions:
        </p>

        <p className="text-white">
          <ol className="list-decimal list-inside ml-6">
            <li>
              Register for an account by providing a strong password and your
              email address.
            </li>
            <li>To access your customised dashboard, log in.</li>
            <li>
              Decide how many problems you wish to address, then get to work on
              them.
            </li>
            <li>
              Follow your development and see where you stand on the
              leaderboard.
            </li>
          </ol>
        </p>

        <p className="text-white">
          Assignment Tracker is intended to help you reach your objectives,
          whether you're trying to improve your coding abilities or getting
          ready for a test. Become a member of our group now to discover fresh
          methods for handling homework and overcoming problems!
        </p>

        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-bold mt-6 mb-4">
            Connect with us:
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <ul className="text-white list-none flex">
              <li>
                <p className="ml-10 mr-11">
                  Keshav Tandon
                  <a
                    href="https://linkedin.com/in/your_linkedin_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 ml-2 mr-14"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="w-8 h-8 mt-4 ml-3"
                    />
                  </a>
                </p>
              </li>
              <li>
                <p className="ml-10 mr-11">
                  Parnika Rana
                  <a
                    href="https://linkedin.com/in/your_linkedin_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 ml-2  mr-11"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="w-8 h-8 mt-4 ml-3"
                    />
                  </a>
                </p>
              </li>
              <li>
                <p className="ml-10 mr-11">
                  Kartikey Gupta
                  <a
                    href="https://linkedin.com/in/your_linkedin_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 ml-2 mr-14"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="w-8 h-8 mt-3 ml-3"
                    />
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

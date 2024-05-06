import logo from "../images/logo.png";
const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-sky-900 min-h-screen flex items-center justify-center">
      <div className="absolute bg-black bg-opacity-40 p-8 rounded-md w-full sm:w-96">
        <div className="mx-auto flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-24 mb-6" />
        </div>
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Assignment Tracker
        </h1>
        <form className="flex flex-col items-center justify-center">
          <label className="block mb-4 w-full">
            <span className="text-white">Admission Number</span>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Admission Number"
              required
            />
          </label>

          <label className="block mb-4 w-full">
            <span className="text-white">Roll Number</span>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Roll Number"
              required
            />
          </label>
          <label className="block mb-4 w-full">
            <span className="text-white">Full Name</span>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your FullName"
              required
            />
          </label>
          <label className="block mb-4 w-full">
            <span className="text-white">Mobile Number</span>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Mobile Number"
              required
            />
          </label>
          <label className="block mb-4 w-full">
            <span className="text-white">Password:</span>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;

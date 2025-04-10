import { useState } from "react";
import Navbar from "../Components/Homepage/Navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState("student");

  return (
    <>
      <Navbar />
      <div className="mt-15 flex flex-col md:flex-row min-h-screen bg-black">
        {/* Form Section */}
        <div className="flex items-center justify-center w-full  bg-black text-white">
          <div className="w-full max-w-2xl  md:p-8 rounded-xl bg-gray-900 shadow-2xl border border-gray-800">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                Join the millions learning to code with
                <span className="text-blue-400"> StepStudy</span>
              </h1>
              <p className="text-gray-300 text-center text-sm md:text-base">
                Build skills for today, tomorrow, and beyond.
                <br />
                <em className="text-blue-200">
                  Education to future-proof your career.
                </em>
              </p>
            </div>

            {/* Role Selector */}
            <div className="bg-gray-800/50 p-1.5 flex gap-2 rounded-full w-full justify-center mb-6 border border-gray-700">
              <button
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 flex-1 ${
                  role === "student"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-transparent text-gray-300 hover:bg-gray-700/70"
                }`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 flex-1 ${
                  role === "instructor"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-transparent text-gray-300 hover:bg-gray-700/70"
                }`}
                onClick={() => setRole("instructor")}
              >
                Instructor
              </button>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="text-xs text-gray-400 ml-1 mb-1 block"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="text-xs text-gray-400 ml-1 mb-1 block"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs text-gray-400 ml-1 mb-1 block"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="text-xs text-gray-400 ml-1 mb-1 block"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="text-xs text-gray-400 ml-1 mb-1 block"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <button className="w-full p-3.5 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 mt-6 shadow-lg transform hover:scale-[1.02] active:scale-[0.98]">
                Create Your Free Account
              </button>
            </form>

            {/* Login Link */}
            <div className="w-full flex justify-center mt-6 items-center gap-2 text-sm">
              <p className="text-gray-400">Already have an account?</p>
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 font-medium hover:underline transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className=" justify-center items-center w-full md:w-1/2 bg-gradient-to-br from-blue-900 to-black  mt-4 mb-4 rounded-xl">
          <div className="max-w-lg text-center">
            <img
              src="/api/placeholder/600/400"
              alt="Coding education illustration"
              className="rounded-xl shadow-2xl mb-6 mx-auto"
            />
            <h2 className="text-3xl font-bold text-white mb-4">
              Learn to code. Build your future.
            </h2>
            <p className="text-blue-200 text-lg">
              Join over 50,000 students who have advanced their careers with
              StepStudy. Get access to expert-led courses, hands-on projects,
              and a supportive community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

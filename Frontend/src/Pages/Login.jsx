import React, { useState } from "react";
import Navbar from "../Components/Homepage/Navbar";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Password validation: at least 6 chars, one number, one uppercase letter
  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        "Password must be at least 6 characters long and contain one uppercase letter & one number."
      );
      return;
    }

    // Mock authentication (replace with API call)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "test@example.com" && password === "Test123") {
        alert("Login Successful! 🎉");
      } else {
        setError("Invalid email or password.");
      }
    }, 2000);
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }} // Ensure this image exists in /public/images
    >
      <Navbar />

      {/* Glassmorphism Login Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Welcome Back 👋
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Please enter your details to sign in.
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 bg-red-900/30 p-2 rounded-md text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-200 mb-2">Email Address</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-6">
            <label className="block text-gray-200 mb-2">Password</label>
            <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2 relative">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-gray-200 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg text-lg font-semibold shadow-lg ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 transition-transform duration-300"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot Password & Sign Up */}
        <div className="flex flex-col gap-3 justify-between items-center mt-4 text-sm">
          <Link
            to="/forgot-password"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Forgot Password?
          </Link>
          <div className="flex items-center gap-2">
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

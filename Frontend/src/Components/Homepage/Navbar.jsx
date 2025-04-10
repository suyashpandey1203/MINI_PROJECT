import React, { useState } from "react";
import { AiFillBuild } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  // const { totalItems } = useSelector((state) => state.cart);
  const totalItems = 10;

  const [isLogin, setIsLogin] = useState(false);

  const programmingCourses = [
    "Python for Beginners",
    "Web Development Bootcamp",
    "JavaScript Mastery",
    "Full-Stack Development",
    "Data Structures & Algorithms",
    "Machine Learning Basics",
    "Cybersecurity Fundamentals",
    "Game Development with Unity",
    "DevOps & Cloud Computing",
    "Blockchain Development",
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 backdrop-blur-md bg-black/50 border-b border-gray-700 text-white shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-2xl font-bold tracking-wide">
        <AiFillBuild className="text-blue-400 text-3xl" />
        <h1>
          <span className="text-blue-400">Step</span>Study
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10">
        {/* Catalog Dropdown */}
        <li className="relative">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center px-3 py-1 rounded-md hover:text-blue-400 cursor-pointer"
            >
              Catalog <FaChevronDown className="text-sm ml-1" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-gray-900 text-white rounded-lg w-52 p-2 shadow-lg absolute top-full mt-1 left-0 z-50"
            >
              {programmingCourses.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Other Navigation Links */}
        {["About Us", "Contact Us"].map((item, index) => (
          <li
            key={index}
            className="relative text-lg cursor-pointer transition duration-300 hover:text-blue-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-400 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      {user && user?.accountType === "student" ? (
        <div className="flex items-center gap-6">
          <Link to="/dashboard/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-blue-400 transition duration-300 cursor-pointer" />
            {totalItems > 0 && (
              <span className="text-xs bg-blue-800  rounded-full absolute left-5 top-0 translate-x-1/2 -translate-y-1/2">
                {totalItems}
              </span>
            )}
          </Link>
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} className="flex items-center gap-2">
              <CgProfile className="text-3xl hover:text-blue-400 transition duration-300 cursor-pointer" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content absolute top-full mt-1 right-0 bg-gray-800 rounded-xl menu z-50 "
            >
              <li>
                <Link to="dashboard">
                  <MdOutlineDashboard className="text-xl" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="login">
                  <LogOut /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 ml-2">
          {/* Login Button - Bold & Prominent */}
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold shadow-lg 
               hover:from-gray-700 hover:to-gray-800 hover:scale-105 transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

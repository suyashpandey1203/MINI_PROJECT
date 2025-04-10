import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillBuild } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 p-3 rounded-md">
      <div className="w-full bg-gray-800 p-6 rounded-md">
        {/* Container */}
        <div className="flex flex-col md:flex-row justify-around gap-6">
          {/* StepStudy Info */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="flex items-center gap-2 text-xl">
              <AiFillBuild className="text-4xl" /> StepStudy
            </h1>

            <div className="flex flex-col gap-2 mt-2 text-gray-500">
              <Link to="/about" className="hover:underline focus:ring">
                About
              </Link>
              <Link to="/careers" className="hover:underline focus:ring">
                Careers
              </Link>
              <Link to="/affiliates" className="hover:underline focus:ring">
                Affiliates
              </Link>
            </div>

            <div className="flex gap-3 mt-4 text-lg">
              <a href="https://www.google.com" target="_blank">
                <FcGoogle className="transition-all duration-300 hover:scale-140" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="transition-all duration-300 hover:scale-140" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <FaSquareXTwitter className="transition-all duration-300 hover:scale-140" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <IoLogoYoutube className="transition-all duration-300 hover:scale-140" />
              </a>
            </div>
          </div>

          {/* Resources & Support */}
          <div className="flex flex-col items-center  gap-4">
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="text-gray-500 space-y-1">
              {[
                "Articles",
                "Blog",
                "Chart Sheet",
                "Code Challenges",
                "Docs",
                "Projects",
                "Videos",
                "Workspaces",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:underline focus:ring"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Support</h2>
            <p className="text-gray-500">
              <Link to="/support" className="hover:underline focus:ring">
                Help Center
              </Link>
            </p>
          </div>

          {/* Plans & Community */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-xl font-bold">Plans</h2>
            <ul className="text-gray-500 space-y-1">
              {[
                "Paid memberships",
                "For Students",
                "Business solutions",
                "Code Challenges",
              ].map((plan) => (
                <li key={plan}>
                  <Link className="hover:underline focus:ring">{plan}</Link>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Community</h2>
            <ul className="text-gray-500 space-y-1">
              {["Forums", "Chapters", "Events"].map((community) => (
                <li key={community}>
                  <Link className="hover:underline focus:ring">
                    {community}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-500" />
      <div className="flex flex-col gap-2 justify-center items-center my-2">
        <div className="flex gap-4 text-gray-500">
          <Link to="/privacy-policy" className="hover:underline ">
            Privacy Policy
          </Link>
          <p>|</p>
          <Link to="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <p>|</p>
          <Link to="/cookie-policy" className="hover:underline">
            Cookie Policy
          </Link>
        </div>
        <p>Made with ❤️ by StepStudy ©2025</p>
      </div>
    </div>
  );
};

export default Footer;

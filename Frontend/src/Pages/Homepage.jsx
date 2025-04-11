import React, { useState } from "react";
import { ArrowRight, Headphones, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import video from "../assets/section1Pic.mp4";
import { TypeAnimation } from "react-type-animation";
import study from "../assets/study1.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import cardData from "../Data/cardData.json";

import CodeEditor from "../Components/CodeEditor";
import {
  FcBusinessman,
  FcGraduationCap,
  FcDebian,
  FcKey,
} from "react-icons/fc";

import Footer from "../Components/Homepage/Footer";
import AnimatedCard from "../Components/Homepage/AnimatedCard";
import Card from "../Components/Homepage/Card";
import Navbar from "../Components/Homepage/Navbar";

const iconMap = {
  FcBusinessman: FcBusinessman,
  FcGraduationCap: FcGraduationCap,
  FcDebian: FcDebian,
  FcKey: FcKey,
};

const Homepage = () => {
  const [selected, setSelected] = useState("Free");

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
      },
    }),
  };

  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center gap-6 px-6 py-12 text-center bg-gray-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32  h-32 bg-blue-500 opacity-30 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-500 opacity-30 rounded-full blur-2xl z-0"></div>

        <button className="relative z-10 flex items-center mt-7 gap-2 bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-blue-400">
          Join Our Expert Community <ArrowRight className="w-5 h-5" />
        </button>

        <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold leading-tight">
          Unlock Your Potential with{" "}
          <span className="text-blue-400">World-Class Learning</span>
        </h1>

        <p className="relative z-10 max-w-2xl text-gray-300 text-lg">
          Elevate your career with industry-leading courses taught by top
          professionals. Gain hands-on experience, master essential skills, and
          stay ahead in the fast-paced world of technology and business.
        </p>

        <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 mt-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-400">
            Explore Courses
          </button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600">
            Get Started
          </button>
        </div>

        {/* Video Section */}
        <div className="relative z-10 mx-5 my-7 shadow-blue-500 shadow-md rounded-lg overflow-hidden max-w-4xl">
          <video
            className="w-full h-auto rounded-lg"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>

        <hr className="w-full border-gray-500" />
        <div className="flex sm:flex-row flex-col my-5">
          <div className="sm:w-full md:w-[50%]">
            <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold leading-tight">
              Unlock Your Potential with{" "}
              <span className="text-blue-400">World-Class Learning</span>
            </h1>

            <p className="relative z-10 max-w-2xl text-gray-300 text-lg">
              Elevate your career with industry-leading courses taught by top
              professionals. Gain hands-on experience, master essential skills,
              and stay ahead in the fast-paced world of technology and business.
            </p>

            <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 mt-4">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-400">
                Explore Courses
              </button>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600">
                Get Started
              </button>
            </div>
          </div>
          <div className="sm:w-full md:w-[50%] ml-10 flex">
            <CodeEditor />
          </div>
        </div>
        <hr className="w-full border-gray-500" />

        <div className="flex w-full flex-col items-center justify-center gap-10 ">
          <div className="">
            <h1 className="relative px-15 z-10 text-white text-3xl sm:text-4xl font-extrabold leading-tight">
              Unlock the
              <span className="text-blue-400"> Power of Code</span>
            </h1>

            <p className="text-lg font-semibold text-gray-400">
              Learn to Build Anything You Can Imagine
            </p>
          </div>
          <div className=" w-[80%] bg-gray-800 rounded-3xl p-2  ">
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-2 sm:gap-6 px-2 py-2 text-base sm:text-lg font-medium text-white">
              {Object.keys(cardData).map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:bg-gray-900 py-2 px-4 rounded-full
                 hover:shadow-amber-50 hover:shadow-sm transition-colors duration-200 ${
                   selected === item
                     ? "bg-gray-900 shadow-amber-500 shadow-sm"
                     : ""
                 }`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData[selected].map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#fff",
                  transition: { duration: 0.3 },
                }}
                className="bg-black text-white border border-gray-700 hover:border-white rounded-2xl p-6 shadow-lg transition-all duration-300"
              >
                <Card title={card.title} desc={card.desc} />
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="w-full border-gray-500" />

        <div className="w-full flex flex-col sm:flex-row gap-10 bg-white p-8 rounded-lg py-10">
          <h1 className="relative z-10 text-black text-4xl sm:text-5xl font-extrabold leading-tight">
            Get the Skills you need for a
            <span className="text-blue-400"> Job that is in demand</span>
          </h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-lg font-semibold text-black">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            <button className="btn btn-warning text-black">Learn more</button>
          </div>
        </div>

        <div className="w-full justify-around flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-lg py-10">
          {/* semisection 1 */}

          <div className="flex flex-col  gap-5 text-black">
            {[
              {
                id: 1,
                heading: "Leadership",
                icon: "FcBusinessman",
                content: "Fully committed to the your success journey",
              },
              {
                id: 2,
                heading: "Responsibility",
                icon: "FcGraduationCap",
                content: "Students will always be our top priority",
              },
              {
                id: 3,
                heading: "Flexibility",
                icon: "FcDebian",
                content: "The ability to switch is an important skill",
              },
              {
                id: 4,
                heading: "Solve the problem",
                icon: "FcKey",
                content: "Code your way to a solution",
              },
            ].map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <AnimatedCard
                  key={index}
                  item={item}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>
          <motion.div
            className="w-full lg:w-[50%] h-auto "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
            }}
          >
            <img
              src={study}
              alt="study"
              className="  rounded-lg  object-contain"
            />
          </motion.div>
        </div>

        <hr className="w-full border-gray-500" />

        <div className=" flex flex-col  w-full py-10 gap-10 bg-white  rounded-lg pt-10">
          <h1 className="relative z-10 text-black text-3xl sm:text-4xl px-10 font-extrabold leading-tight">
            Your Swiss Knife for
            <span className="text-blue-400"> learning any language</span>
          </h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-md font-semibold text-gray-800">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center w-full gap-5 sm:gap-8 md:gap-12">
            <img
              src={pic1}
              alt="pic1"
              className="w-28 sm:w-56 md:w-72 lg:w-80 border border-gray-500 h-auto rounded-lg object-cover transform rotate-12 transition-transform duration-300 hover:scale-120  hover:rotate-0"
            />
            <img
              src={pic3}
              alt="pic3"
              className="w-28 sm:w-56 md:w-72 lg:w-80 border border-gray-500 h-auto rounded-lg object-cover transform rotate-6 transition-transform duration-300 hover:scale-120 hover:rotate-0"
            />
            <img
              src={pic2}
              alt="pic2"
              className="w-28 sm:w-56 md:w-72 lg:w-80 border border-gray-500 h-auto rounded-lg object-cover transform -rotate-12 transition-transform duration-300 hover:scale-120 hover:rotate-0"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 px-6 py-12 text-center bg-gray-900 text-white overflow-hidden">
          <div className="flex items-center w-full max-w-xl">
            <div className="flex-1 border-t-2 border-gray-500"></div>
            <h2 className="mx-4 text-3xl font-bold">3 Reasons To Choose Us</h2>
            <div className="flex-1 border-t-2 border-gray-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Card 1 */}
            <div className="relative bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border-t-4 border-green-500 transition-transform transform hover:scale-105 ">
              <Headphones className="text-green-500 w-10 h-10" />
              <h3 className="mt-4 text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600 text-sm mt-2">
                We are always here to assist you, anytime and anywhere.
              </p>
              <a
                href="#"
                className="mt-4 text-green-500 font-semibold flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-green-500"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-green-500"></div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border-t-4 border-blue-500 transition-transform transform hover:scale-105">
              <BookOpen className="text-blue-500 w-10 h-10" />
              <h3 className="mt-4 text-xl font-semibold">Top Guide</h3>
              <p className="text-gray-600 text-sm mt-2">
                Learn from the best instructors with in-depth knowledge.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 font-semibold flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-500"></div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border-t-4 border-yellow-500 transition-transform transform hover:scale-105">
              <GraduationCap className="text-yellow-500 w-10 h-10" />
              <h3 className="mt-4 text-xl font-semibold">Best Course</h3>
              <p className="text-gray-600 text-sm mt-2">
                Get access to high-quality, well-structured courses.
              </p>
              <a
                href="#"
                className="mt-4 text-yellow-500 font-semibold flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-500"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-500"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;

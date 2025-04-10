// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCard = ({ item, IconComponent }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ x: "-100%", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className=" bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 bg-gray-400 p-4 sm:px-5 rounded-lg shadow-lg items-center sm:items-start">
        {/* Icon */}
        <span className="flex-shrink-0">
          {IconComponent && (
            <IconComponent className="text-4xl sm:text-5xl bg-gray-800 rounded-full p-2 shadow-lg" />
          )}
        </span>

        {/* Content */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold">{item.heading}</h1>
          <p className="text-sm sm:text-base">{item.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;

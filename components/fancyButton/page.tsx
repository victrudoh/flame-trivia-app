import { motion } from "framer-motion";

const FancyButton = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 0.4,
        boxShadow: "0px 4px 15px rgba(0, 128, 128, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-full mx-auto p-[2px] rounded-lg overflow-hidden cursor-pointer"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 opacity-50 blur-lg -rotate-45 transition-transform transform-gpu group-hover:scale-125 duration-500"></div> */}
      <div className="absolute inset-0 gradient-fx transition-fx opacity-50 blur-lg -rotate-45 transition-transform transform-gpu group-hover:scale-125"></div>
      <button className="relative z-10 w-full py-3 px-4 text-brand-white font-semibold bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-center transition-colors duration-200">
        Play Challenge Mode! <span className="text-xs mx-1">(coming soon)</span>
      </button>
    </motion.div>
  );
};

export default FancyButton;

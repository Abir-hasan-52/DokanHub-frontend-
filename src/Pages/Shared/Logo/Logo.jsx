import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/"> 
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2 select-none cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        initial={{ rotate: -8, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-xl shadow-md"
      >
        <span className="text-white text-2xl font-bold">D</span>
      </motion.div>

      {/* Text */}
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
        Dokan<span className="text-orange-500">Hub</span>
      </h1>
    </motion.div>
    </Link>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router";
import { HiShoppingBag } from "react-icons/hi";

export default function Logo() {
  return (
    <Link to="/"> 
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 select-none cursor-pointer group"
      >
        {/* Icon with gradient background */}
        <motion.div
          initial={{ rotate: -8, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center rounded-xl shadow-lg group-hover:shadow-orange-500/50"
        >
          <HiShoppingBag className="text-white text-xl" />
          {/* Subtle shine effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        {/* Text with better styling */}
        <div className="flex flex-col leading-none">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-gray-800 group-hover:text-gray-900 transition-colors">
              Dokan
            </span>
            <span className="text-orange-500 group-hover:text-orange-600 transition-colors">
              Hub
            </span>
          </h1>
          <p className="text-[10px] text-gray-500 tracking-wider uppercase font-medium mt-0.5">
            Marketplace
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}) {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:scale-105",
    secondary:
      "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-xl",
    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
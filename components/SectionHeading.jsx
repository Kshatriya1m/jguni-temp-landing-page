"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } mb-16 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <p className="text-sm text-slate-300">{badge}</p>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold leading-tight text-white"
      >
        {title}{" "}
        {highlight && (
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 text-slate-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
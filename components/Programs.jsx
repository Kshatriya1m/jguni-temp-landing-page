"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Briefcase,
  Laptop,
  Brain,
  Palette,
} from "lucide-react";

import { programs } from "@/data/data";

const iconMap = {
  Code,
  Database,
  Briefcase,
  Laptop,
  Brain,
  Palette,
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-cyan-400">Programs</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore industry-focused academic programs designed to build skills, confidence, and career success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon (SAFE GUARD) */}
                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  {Icon ? <Icon className="text-white" size={26} /> : null}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-all">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>

                <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
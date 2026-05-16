"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Globe, Users, BookOpen } from "lucide-react";

import { aboutContent, aboutFeatures, aboutStats } from "@/data/data";

const iconMap = {
  Users,
  BookOpen,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

              <Image
                src={aboutContent.image}
                alt="About University"
                width={600}
                height={700}
               className="w-full h-100 sm:h-125 md:h-150 object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-2 sm:left-6 md:left-10 -bottom-6 sm:-bottom-8 md:-bottom-10 
             bg-slate-900/80 backdrop-blur-xl border border-white/10 
              rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl 
              max-w-40 sm:max-w-none"
            >
             <h3 className="text-2xl sm:text-3xl font-bold text-white">
               {aboutContent.floatingYears}
              </h3>

             <p className="text-slate-400 text-xs sm:text-sm">
               {aboutContent.floatingLabel}
             </p>
            </motion.div>
          </motion.div>

          {/* CONTENT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Globe size={16} className="text-cyan-400" />
              <span className="text-sm text-slate-300">
                {aboutContent.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {aboutContent.title}{" "}
              <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {aboutContent.highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-slate-400 leading-relaxed">
              {aboutContent.description}
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-4">
              {aboutFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-cyan-400" size={20} />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {aboutStats.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    <Icon className="text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold">{item.value}</h3>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
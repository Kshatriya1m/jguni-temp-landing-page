"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

import Button from "@/components/Button";
import { heroContent, heroStats, heroFloatingCards } from "@/data/data";

const iconMap = {
  Users,
  GraduationCap,
  Award,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <p className="text-sm text-slate-300">
                {heroContent.badge}
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              {heroContent.title}
              <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {heroContent.highlight}
              </span>
              {heroContent.subtitle}
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-xl">
              {heroContent.description}
            </p>

            {/* Buttons (USING YOUR BUTTON COMPONENT) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Button variant="primary">
                {heroContent.primaryBtn}
                <ArrowRight size={18} />
              </Button>

              <Button variant="secondary">
                <PlayCircle size={20} />
                {heroContent.secondaryBtn}
              </Button>

            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {heroStats.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                      <Icon className="text-cyan-400" size={24} />
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* IMAGE */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

              <Image
                src={heroContent.image}
                alt="University"
                width={700}
                height={800}
                className="w-full aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            {/* FLOATING CARDS */}
           <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-2 sm:-left-6 lg:-left-10 top-20 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-3 sm:p-5 shadow-2xl max-w-45 sm:max-w-none"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {heroFloatingCards[0].title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {heroFloatingCards[0].desc}
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-2 sm:-right-6 lg:-right-8 bottom-10 sm:bottom-16 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-3 sm:p-6 shadow-2xl max-w-50 sm:max-w-none"
            >
              <div className="flex items-center gap-3 sm:gap-4">
    
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <GraduationCap className="text-white" size={18} />
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {heroFloatingCards[1].value}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400">
                    {heroFloatingCards[1].desc}
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
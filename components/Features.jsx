"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Lightbulb,
  BookOpen,
  Users,
  Monitor,
  Rocket,
} from "lucide-react";

import { features } from "@/data/data";
import SectionHeading from "@/components/SectionHeading";

const iconMap = {
  Trophy,
  Lightbulb,
  BookOpen,
  Users,
  Monitor,
  Rocket,
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SECTION HEADING (REUSABLE COMPONENT) */}
        <SectionHeading
          badge="Our Strengths"
          title="Why Choose"
          highlight="Us?"
          description="We focus on delivering quality education, modern infrastructure, and strong career opportunities for every student."
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                  <Icon className="text-white" size={26} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-all">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-purple-500 to-cyan-400 transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
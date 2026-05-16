"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { testimonials } from "@/data/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-500/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-cyan-400">Students Say</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real feedback from students who experienced learning, growth, and career success.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-cyan-400 fill-cyan-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{item.review}"
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-white/10 mb-6"></div>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-all">
                    {item.name}
                  </h4>
                  <p className="text-slate-400 text-xs">{item.role}</p>
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>
              </div>

              {/* Hover line */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
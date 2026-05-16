"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/Button";
import { ctaContent } from "@/data/data";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-12 md:p-20 shadow-2xl"
        >

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {ctaContent.title}{" "}
            <span className="text-cyan-400">
              {ctaContent.highlight}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {ctaContent.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* Primary Button (using your reusable Button.jsx) */}
            <Button variant="primary">
              {ctaContent.primaryButton}
              <ArrowRight size={18} />
            </Button>

            {/* Secondary Button */}
            <Button variant="secondary">
              <PhoneCall size={18} />
              {ctaContent.secondaryButton}
            </Button>

          </div>

          {/* Bottom note */}
          <p className="mt-8 text-xs text-slate-500">
            {ctaContent.note}
          </p>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-[40px] border border-cyan-500/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
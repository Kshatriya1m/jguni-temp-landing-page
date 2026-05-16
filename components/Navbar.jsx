"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "@/data/data";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                JG University
              </h1>
              <p className="text-xs text-slate-400">
                Future Starts Here
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTONS (still ok to keep static or later convert to data.js) */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
              Login
            </button>

            <button className="px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-white"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">

              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-slate-300 hover:text-white transition-all duration-300 text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-4 pt-4">

                <button className="w-full py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                  Login
                </button>

                <button className="w-full py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30">
                  Apply Now
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
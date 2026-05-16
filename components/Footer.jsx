"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  footerContent,
  footerPrograms,
  footerLinks,
} from "@/data/data";

const socialMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedinIn,
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              {footerContent.brand}
            </h2>

            <p className="text-slate-400 mt-4 text-sm">
              {footerContent.description}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {Object.entries(socialMap).map(([key, Icon], index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {footerPrograms.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-slate-400 text-sm">

              <div className="flex gap-3">
                <MapPin className="text-cyan-400" />
                <p>{footerContent.location}</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-cyan-400" />
                <p>{footerContent.phone}</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400" />
                <p>{footerContent.email}</p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between pt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {footerContent.brand}</p>
          <p>Designed with modern UI</p>
        </div>

      </div>
    </footer>
  );
}
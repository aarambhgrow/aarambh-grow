"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Registration",
    href: "/services/registration",
  },
  {
    label: "Finance",
    href: "/services/finance",
  },
  {
    label: "Certification",
    href: "/services/certification",
  },
  {
    label: "Branding",
    href: "/services/branding",
  },
  {
    label: "Operations",
    href: "/services/operations",
  },
  {
    label: "Legal & CA",
    href: "/services/legal-ca",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/aarambhgrow",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aarambhgrow",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aarambhgrow-group-of-companies",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-slate-300 font-sans border-t-4 border-[#F97316] overflow-hidden relative"
      style={{
        backgroundColor: "#081B33",
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 370px"
      }}
    >
      {/* Main Corporate Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Profile (3 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Image
                src="/images/white-logo.png"
                alt="AarambhGrow Group of Companies"
                width={300}
                height={100}
                className="w-auto h-20 object-contain"
              />
            </motion.div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aarambh Grow empowers entrepreneurs, startups, MSMEs, and growing businesses with expert consultancy, strategic solutions, and end-to-end support to build, strengthen, and scale their businesses sustainably.
            </p>
          </motion.div>

          {/* Navigation & Solutions (5 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 grid grid-cols-2 gap-4 lg:border-l lg:border-slate-800/80 lg:pl-6"
          >
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 pl-2.5 border-l-2 border-[#F97316]">
                Navigation
              </h4>
              <ul className="space-y-1 text-xs">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 px-2.5 py-1.5 rounded-r-lg text-slate-400 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-[#F97316]/20 hover:to-transparent transition-all duration-200 border-l-2 border-transparent hover:border-[#F97316] whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#F97316] group-hover:scale-125 transition-all duration-200 shrink-0" />
                      <span className="font-medium tracking-wide">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 pl-2.5 border-l-2 border-[#1F8A4D]">
                Solutions
              </h4>
              <ul className="space-y-1 text-xs">
                {serviceLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 px-2.5 py-1.5 rounded-r-lg text-slate-400 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-[#1F8A4D]/20 hover:to-transparent transition-all duration-200 border-l-2 border-transparent hover:border-[#1F8A4D] whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#1F8A4D] group-hover:scale-125 transition-all duration-200 shrink-0" />
                      <span className="font-medium tracking-wide">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Registered Office (4 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 lg:border-l lg:border-slate-800/80 lg:pl-6"
          >
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
              <Building2 size={14} className="text-[#F97316]" /> Registered Office
            </h4>

            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white/5 border border-white/10 rounded-md p-4 space-y-3.5 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-xs text-slate-300 leading-relaxed">
                813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway, Gujarat 382470
              </p>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.google.com/maps/dir/?api=1&destination=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-between w-full bg-white/10 hover:bg-[#F97316] text-white text-xs font-medium px-3.5 py-2 rounded-md border border-white/10 hover:border-[#F97316] transition-all duration-300 shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <MapPin
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:scale-110"
                  />
                  Open Location Map
                </span>

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-b border-slate-800/8 py-5">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            {/* Phone */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 2 }}
              className="group flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <Phone
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Direct Inquiries
                </p>
                <div className="text-xs font-semibold text-white flex items-center gap-2 mt-0.5">
                  <a
                    href="tel:+919998715799"
                    className="hover:text-[#F97316] transition-colors duration-200"
                  >
                    +91 9998715799
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 2 }}
              className="group flex items-center gap-3.5 md:border-l md:border-slate-800/80 md:pl-6 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#1F8A4D] group-hover:bg-[#1F8A4D] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(31,138,77,0.4)]">
                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Official Correspondence
                </p>
                <a
                  href="mailto:info@aarambhgrow.group"
                  className="text-xs font-semibold text-white hover:text-[#1F8A4D] transition-colors duration-200 mt-0.5 block"
                >
                  info@aarambhgrow.group
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-start md:justify-end gap-2.5 md:border-l md:border-slate-800/80 md:pl-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#F97316] hover:text-white hover:border-[#F97316] hover:shadow-[0_4px_12px_rgba(249,115,22,0.3)] transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-slate-800/80 bg-[#051120] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© {currentYear} Aarambh Grow Group of Companies. All rights reserved.</p>
          <div className="flex justify-center gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200 hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200 hover:underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function HomeAboutTeaser() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
      },
    },
  };
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="w-full bg-[#fafafa] py-12 sm:py-16 font-sans text-[#0f172a]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={containerVariants}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Badge */}
        <motion.div variants={fadeUpVariants} className="flex justify-center mb-4">
          <div className="group inline-flex items-center gap-1.5 rounded-full bg-[#fff5f0] border border-[#f26522]/20 px-3.5 py-1 transition-all duration-300 ease-out hover:scale-105 hover:border-[#f26522]/50 hover:shadow-sm cursor-default">
            <Star className="w-3 h-3 fill-[#f26522] text-[#f26522] transition-transform duration-300 ease-out group-hover:rotate-45" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26522]">
              WHO WE ARE
            </span>
          </div>
        </motion.div>

        {/* Heading & Exact Blueprint Copy */}
        <motion.div variants={fadeUpVariants} className="text-center max-w-3xl mx-auto space-y-4">

          <div
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 delay-150 ease-out ${isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a4a] leading-tight tracking-tight transition-colors duration-300 hover:text-[#f26522]">
              Your Trusted Partner in Business Growth<br className="hidden sm:inline" />

            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              Every successful business begins with the right guidance. At <strong className="text-[#0f2a4a]">AarambhGrow</strong>, we help entrepreneurs, startups, and growing businesses navigate every stage of their journey—from setting up a business and managing legal compliance to building a strong digital presence and scaling operations.
            </p>
            <p>
              Our experienced consultants combine industry expertise with practical strategies to simplify complex processes, improve efficiency, and unlock new growth opportunities. Whether you're starting your first venture or expanding an established business, we provide personalized solutions tailored to your goals.
            </p>
            <p className="text-sm sm:text-base font-bold text-[#157327] pt-1">
              Your vision is our mission and your growth is our commitment.
            </p>
          </div>

          {/* Action Link */}
          <div className="pt-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#f26522] hover:text-[#0f2a4a] transition-colors group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
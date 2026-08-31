"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function ConsultancyServicesHero() {
  const serviceCategories = [
    {
      icon: Briefcase,
      title: "Strategic Advisory",
      description: "Market entry & scaling strategies.",
      iconColor: "text-[#157327]",
      bgColor: "bg-[#157327]/15",
    },
    {
      icon: TrendingUp,
      title: "Financial Optimization",
      description: "Capital allocation & tax planning.",
      iconColor: "text-[#F26522]",
      bgColor: "bg-[#F26522]/15",
    },
    {
      icon: ShieldAlert,
      title: "Risk & Compliance",
      description: "Governance & audit readiness.",
      iconColor: "text-[#03254C]",
      bgColor: "bg-[#03254C]/10",
    },
  ];

  const highlights = [
    "15+ Years Expertise",
    "Global Frameworks",
    "Dedicated Partners",
  ];

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section className="relative w-full bg-[#f8fafc] font-sans text-[#03254C] m-0 p-0 overflow-hidden min-h-[400px] lg:min-h-[450px] flex items-center">
      <div className="absolute right-0 -top-1 -bottom-1 left-auto w-full lg:w-[65%] z-0 pointer-events-none overflow-hidden flex items-center justify-end">
        <Image
          src="/images/s-bg1.png"
          alt="Corporate Advisory Background"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-contain object-right scale-95 sm:scale-105 origin-right p-0"
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="w-full relative z-10 py-5 sm:py-6 lg:py-8">
        <motion.div
          className="w-full lg:w-3/5 space-y-3 sm:space-y-3.5 text-center lg:text-left px-6 sm:px-12 lg:pl-16 lg:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#03254C]/5 border border-[#03254C]/10 text-[10px] sm:text-xs font-semibold text-[#03254C] uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#157327] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#157327]"></span>
              </span>
              <span>Professional Consultancy Practice</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="space-y-1">
            <h1 className="text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] font-extrabold tracking-tight text-[#03254C] leading-[1.12]">
              Expert Consulting for <br className="hidden sm:inline" />
              <span className="text-[#157327]">Measurable Enterprise</span>{" "}
              <span className="text-[#F26522]">Growth</span>
            </h1>
            <div className="w-10 h-0.5 sm:h-1 bg-gradient-to-r from-[#F26522] to-[#157327] rounded-full mt-1.5 mx-auto lg:mx-0" />
          </motion.div>

          {/* Subheadline / Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm font-normal text-[#475569] leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            We deliver actionable insights and execution power to resolve
            complex business challenges and drive profitability.
          </motion.p>

          {/* Trust Highlights Row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5 text-[11px] font-medium text-[#03254C]"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs"
              >
                <CheckCircle2 className="w-3 h-3 text-[#157327]" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Core Service Categories Grid */}
          <motion.div
            variants={fadeInUp}
            className="pt-1.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl mx-auto lg:mx-0"
          >
            {serviceCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-start gap-2.5 p-2.5 rounded-md bg-white border border-slate-200/90 shadow-2xs text-left"
                >
                  <div
                    className={`p-1.5 rounded-md ${item.bgColor} ${item.iconColor} shrink-0`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#03254C]">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-normal text-[#64748B] mt-0.5 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

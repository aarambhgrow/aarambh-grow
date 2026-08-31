"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Briefcase, Eye } from "lucide-react";

export default function WhyTrustUs() {
  const trustReasons = [
    {
      icon: Compass,
      title: "Strategic Perspective",
      desc: "Business-first solutions focused on long-term stability and sustainable growth.",
      color: "#157327",
    },
    {
      icon: Briefcase,
      title: "Domain Expertise",
      desc: "Comprehensive expertise spanning consulting, finance, legal, and operations.",
      color: "#F26522",
    },
    {
      icon: Eye,
      title: "Absolute Transparency",
      desc: "Clear communication, clear deliverables, and predictable execution timelines.",
      color: "#157327",
    },
  ];

  return (
    <section className="w-full bg-white font-sans text-[#03254C] py-10 sm:py-14 px-4 sm:px-8 lg:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#157327] bg-[#157327]/10 px-2.5 py-0.5 rounded-full">
            Trust & Credibility
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#03254C]">
            Why Businesses Trust AarambhGrow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustReasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-[#f8fafc] border border-slate-200/80 p-5 rounded-md space-y-3"
              >
                <div
                  className="p-2.5 rounded-md text-white w-fit"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#03254C]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

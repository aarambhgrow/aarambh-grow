"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Map,
  ShieldCheck,
  BadgePercent,
  Award,
  CheckCircle2,
  TrendingUp,
  Headphones,
} from "lucide-react";

export default function ValueOutcomes() {
  const outcomes = [
    {
      num: "01",
      icon: Map,
      title: "Business Direction",
      description:
        "A clear direction for business setup and expansion.",
      accent: "#157327",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Simplified Compliance",
      description:
        "Simplified registrations and regulatory compliance.",
      accent: "#F26522",
    },
    {
      num: "03",
      icon: BadgePercent,
      title: "Financial Advisory",
      description:
        "Better financial planning and business advisory.",
      accent: "#157327",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Brand Positioning",
      description:
        "Stronger brand positioning and digital presence.",
      accent: "#F26522",
    },
    {
      num: "05",
      icon: Award,
      title: "Tailored Guidance",
      description:
        "Expert guidance tailored to your business goals.",
      accent: "#157327",
    },
    {
      num: "06",
      icon: Headphones,
      title: "Reliable Support",
      description:
        "Reliable support whenever your business needs it.",
      accent: "#F26522",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] font-sans text-[#03254C] py-14 sm:py-12 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 space-y-10">

        {/* TOP ROW: Header & Big Vision Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#157327]/10 text-[#157327] text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>More Than a Service Provider</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#03254C] leading-tight">
              What Changes When You Partner With{" "}
              <span className="text-[#F26522]">AarambhGrow?</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
            The right business partner doesn't just solve today's challenges, they help prepare your business for tomorrow's opportunities. When you choose AarambhGrow, you gain access to a team that works alongside you.
          </p>
        </div>

        {/* BOTTOM ROW: Outcome Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 relative">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative space-y-4 group bg-white p-5 rounded-md border border-slate-200/80 shadow-xs"
              >
                {/* Step / Number Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xl font-black tracking-tight"
                      style={{ color: item.accent }}
                    >
                      {item.num}
                    </span>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#03254C] flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: item.accent }}
                    />
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Accent Line */}
                <div
                  className="w-full h-0.5 bg-slate-200 group-hover:w-full transition-all duration-300 origin-left mt-4"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
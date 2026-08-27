"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Star,
  Headphones,
  FileText,
  Award,
  Palette,
  Settings,
  Scale,
  ArrowUpRight,
  IndianRupee,
} from "lucide-react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("All");
  const headerRef = useRef(null);

  const isInView = useInView(headerRef, {
    once: true,
    margin: "-40px",
  });

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
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

  return (
    <section className="relative w-full bg-[#fafafa] py-10 sm:py-12 font-sans select-none overflow-hidden text-[#0f172a]">
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#f26522]"
            />
          ))}
        </div>
      </div>

      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#157327]"
            />
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-40px",
        }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >

        <motion.div
          variants={fadeUpVariants}
          className="text-center flex flex-col items-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5f0] border border-[#f26522]/20 px-3.5 py-1 mb-3.5 shadow-sm">
            <Star className="w-3 h-3 fill-[#f26522] text-[#f26522]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#f26522]">
              OUR EXPERTISE
            </span>
          </div>

          <div
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 delay-150 ease-out ${isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2a4a] leading-tight tracking-tight transition-colors duration-300 hover:text-[#f26522]">
              Business Solutions Designed
              <br className="hidden sm:inline" />
              for Sustainable Growth
            </h2>
          </div>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-500 font-normal max-w-2xl leading-relaxed">
            From registration and financial setup to branding, certifications,
            legal compliance, and operations, we offer tailored end-to-end
            solutions for your business.
          </p>
        </motion.div>

        <motion.div layout className="space-y-4 sm:space-y-6">
          <AnimatePresence mode="popLayout">

            <motion.div
              layout
              key={`top-group-${activeTab}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
            >

              {(activeTab === "All" ||
                activeTab === "Registration") && (
                  <motion.div
                    layout
                    className="lg:col-span-6 flex"
                  >
                    <Link
                      href="/services/registration"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 h-full">
                        <div className="sm:col-span-7 flex flex-col justify-between order-1">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="w-4 h-4 text-[#f26522] shrink-0" />
                              <span className="text-xs font-extrabold text-[#f26522]">
                                01 —
                              </span>
                            </div>

                            <h3 className="text-lg font-black text-[#0f2a4a] mb-1.5 group-hover:text-[#f26522] transition-colors duration-300">
                              Registration
                            </h3>

                            <p className="text-xs text-slate-500 leading-relaxed mb-3">
                              Start your company with ease. We handle Private
                              Limited, LLP, OPC, MSME, and all essential
                              business registrations.
                            </p>

                            <ul className="space-y-1.5 text-xs font-semibold text-slate-700 mb-4 sm:mb-2">
                              <li className="flex items-center gap-2">
                                <span className="text-[#f26522] font-bold">
                                  ✓
                                </span>
                                Private Limited Company
                              </li>

                              <li className="flex items-center gap-2">
                                <span className="text-[#f26522] font-bold">
                                  ✓
                                </span>
                                LLP & Partnership Setup
                              </li>

                              <li className="flex items-center gap-2">
                                <span className="text-[#f26522] font-bold">
                                  ✓
                                </span>
                                One Person Company (OPC)
                              </li>
                            </ul>
                          </div>

                          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#f26522] transition-colors duration-300 mt-2">
                            <span>Learn More</span>
                            <div className="w-5 h-5 rounded-full bg-[#f26522] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-5 relative h-36 sm:h-full min-h-[130px] w-full bg-slate-50/80 rounded-md flex items-center justify-center p-3 order-2">
                          <Image
                            src="/images/service-1.png"
                            alt="Registration"
                            width={280}
                            height={220}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            priority
                          />
                        </div>

                        <div className="flex sm:hidden items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#f26522] transition-colors duration-300 order-3 pt-1">
                          <span>Learn More</span>
                          <div className="w-5 h-5 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

              {(activeTab === "All" ||
                activeTab === "Finance") && (
                  <motion.div
                    layout
                    className="lg:col-span-3 flex"
                  >
                    <Link
                      href="/services/finance"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div>

                        <div className="flex items-center gap-2 mb-2">
                          <IndianRupee className="w-4 h-4 text-[#157327] shrink-0" />
                          <span className="text-xs font-extrabold text-[#157327]">
                            02 —
                          </span>
                        </div>

                        <h3 className="text-base font-black text-[#0f2a4a] mb-1.5 group-hover:text-[#157327] transition-colors duration-300">
                          Finance
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed mb-3">
                          Business loans, government subsidy support, investor
                          pitching, and financial planning.
                        </p>

                        <div className="relative h-32 sm:h-28 w-full bg-slate-50/80 rounded-md flex items-center justify-center mb-3 p-2">
                          <Image
                            src="/images/service-2.png"
                            alt="Finance"
                            width={200}
                            height={140}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#157327] transition-colors duration-300 mt-auto">
                        <span>Learn More</span>
                        <div className="w-5 h-5 rounded-full bg-[#157327] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

              {(activeTab === "All" ||
                activeTab === "Certification") && (
                  <motion.div
                    layout
                    className="lg:col-span-3 flex"
                  >
                    <Link
                      href="/services/certification"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#f26522] shrink-0" />
                          <span className="text-xs font-extrabold text-[#f26522]">
                            03 —
                          </span>
                        </div>

                        <h3 className="text-base font-black text-[#0f2a4a] mb-1.5 group-hover:text-[#f26522] transition-colors duration-300">
                          Certification
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed mb-3">
                          ISO, MSME, FSSAI, Startup India, and trademark
                          approvals to build market authority.
                        </p>

                        <div className="relative h-32 sm:h-28 w-full bg-slate-50/80 rounded-md flex items-center justify-center mb-3 p-2">
                          <Image
                            src="/images/service-3.png"
                            alt="Certification"
                            width={200}
                            height={140}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#f26522] transition-colors duration-300 mt-auto">
                        <span>Learn More</span>
                        <div className="w-5 h-5 rounded-full bg-[#f26522] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
            </motion.div>

            <motion.div
              layout
              key={`bottom-group-${activeTab}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >

              {(activeTab === "All" ||
                activeTab === "Branding") && (
                  <motion.div layout className="flex">
                    <Link
                      href="/services/branding"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 items-center mb-3">
                        <div className="w-full sm:col-span-6">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Palette className="w-4 h-4 text-[#157327] shrink-0" />
                            <span className="text-xs font-extrabold text-[#157327]">
                              04 —
                            </span>
                          </div>

                          <h3 className="text-base font-black text-[#0f2a4a] mb-1 group-hover:text-[#157327] transition-colors duration-300">
                            Branding
                          </h3>

                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-3 sm:mb-0">
                            Brand positioning, identity design, digital
                            strategy, and high-impact UI/UX experiences.
                          </p>
                        </div>

                        <div className="w-full sm:col-span-6 h-32 sm:h-28 bg-slate-50/80 rounded-md flex items-center justify-center p-2">
                          <Image
                            src="/images/service-4.png"
                            alt="Branding"
                            width={160}
                            height={120}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#157327] transition-colors duration-300">
                        <span>Learn More</span>
                        <div className="w-5 h-5 rounded-full bg-[#157327] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

              {(activeTab === "All" ||
                activeTab === "Operations") && (
                  <motion.div layout className="flex">
                    <Link
                      href="/services/operations"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 items-center mb-3">
                        <div className="w-full sm:col-span-6">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Settings className="w-4 h-4 text-[#f26522] shrink-0" />
                            <span className="text-xs font-extrabold text-[#f26522]">
                              05 —
                            </span>
                          </div>

                          <h3 className="text-base font-black text-[#0f2a4a] mb-1 group-hover:text-[#f26522] transition-colors duration-300">
                            Operations
                          </h3>

                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-3 sm:mb-0">
                            Streamline operations, workflow automation, team
                            structure, and business consulting.
                          </p>
                        </div>

                        <div className="w-full sm:col-span-6 h-32 sm:h-28 bg-slate-50/80 rounded-md flex items-center justify-center p-2">
                          <Image
                            src="/images/service-5.png"
                            alt="Operations"
                            width={160}
                            height={120}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#f26522] transition-colors duration-300">
                        <span>Learn More</span>
                        <div className="w-5 h-5 rounded-full bg-[#f26522] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

              {(activeTab === "All" ||
                activeTab === "Legal & CA") && (
                  <motion.div layout className="flex">
                    <Link
                      href="/services/legal-ca"
                      className="group w-full relative flex flex-col justify-between rounded-md bg-white border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 items-center mb-3">
                        <div className="w-full sm:col-span-6">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Scale className="w-4 h-4 text-[#157327] shrink-0" />
                            <span className="text-xs font-extrabold text-[#157327]">
                              06 —
                            </span>
                          </div>

                          <h3 className="text-base font-black text-[#0f2a4a] mb-1 group-hover:text-[#157327] transition-colors duration-300">
                            Legal & CA
                          </h3>

                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-3 sm:mb-0">
                            GST filings, income tax returns, ROC filings,
                            legal drafting, and audit compliance.
                          </p>
                        </div>

                        <div className="w-full sm:col-span-6 h-32 sm:h-28 bg-slate-50/80 rounded-md flex items-center justify-center p-2">
                          <Image
                            src="/images/service-6.png"
                            alt="Legal & CA"
                            width={160}
                            height={120}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-[#0f2a4a] group-hover:text-[#157327] transition-colors duration-300">
                        <span>Learn More</span>
                        <div className="w-5 h-5 rounded-full bg-[#157327] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="mt-8 sm:mt-10 rounded-md bg-gradient-to-r from-[#fff2eb] via-[#fff8f5] to-white border border-[#f26522]/15 p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3.5 sm:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-white shadow-sm border border-[#f26522]/20 flex items-center justify-center text-[#f26522] shrink-0">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-black text-[#0f2a4a]">
                Ready to Grow Your Business?
              </h3>

              <p className="text-xs text-slate-500 mt-0.5">
                Our experts are here to guide you through every stage of your
                business journey.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-[#F26522] bg-[#F26522] px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:shadow-md transition-all duration-300 ease-out hover:text-[#03254C]"
            >
              <span className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

              <span className="relative z-10 flex items-center gap-1">
                Get Free Consultation
                <ArrowUpRight className="h-5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white group-hover:text-[#157327]" />
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 shrink-0">

              <div className="flex -space-x-2">
                {avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden relative shrink-0"
                  >
                    <Image
                      src={avatar}
                      alt={`Client ${idx + 1}`}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-left">
                <p className="text-xs font-black text-[#0f2a4a]">
                  1000+
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  Businesses Trust Us
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
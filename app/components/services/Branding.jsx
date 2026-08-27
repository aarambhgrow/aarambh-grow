"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  FileText,
  FileCheck2,
  Award,
  WalletCards,
  Video,
  MessageCircle,
  Megaphone,
  Globe,
  Search,
  Palette,
} from "lucide-react";

import { brandingData } from "../../data/branding";

export default function Branding() {
  const [activeTab, setActiveTab] = useState(0);

  const services = Array.isArray(brandingData?.services) ? brandingData.services : [];

  const currentService = services[activeTab] || services[0];

  /*
    |--------------------------------------------------------------------------
    | SAFETY CHECK
    |--------------------------------------------------------------------------
    */

  if (!brandingData || !services.length || !currentService) {
    return (
      <section className="w-full bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-bold text-red-700">Branding data not found</h2>

            <p className="mt-2 text-sm text-red-600">
              Please check your <strong>data/branding.js</strong> file and make sure the <strong>services</strong> array contains your
              branding services.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
    |--------------------------------------------------------------------------
    | SERVICE CLICK
    |--------------------------------------------------------------------------
    */

  const handleServiceClick = (index) => {
    if (index < 0 || index >= services.length) return;

    setActiveTab(index);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("branding-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  /*
    |--------------------------------------------------------------------------
    | ANIMATIONS
    |--------------------------------------------------------------------------
    */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  /*
    |--------------------------------------------------------------------------
    | SERVICE ICON
    |--------------------------------------------------------------------------
    */

  const getServiceIcon = (service) => {
    const id = service?.id?.toLowerCase() || "";
    const title = service?.title?.toLowerCase() || service?.name?.toLowerCase() || "";

    const value = `${id} ${title}`;

    if (value.includes("seo")) return Search;
    if (value.includes("website")) return Globe;
    if (value.includes("social")) return MessageCircle;
    if (value.includes("advertising") || value.includes("ads")) return Megaphone;
    if (value.includes("branding")) return Palette;
    if (value.includes("video")) return Video;
    if (value.includes("aarambhreach")) return MessageCircle;

    return WalletCards;
  };

  return (
    <section
      id="branding"
      className="
                relative
                w-full
                bg-[#F8FAFC]
                text-[#03254C]
                font-sans
                py-10
                sm:py-12
                lg:py-16
            "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================
                    INTRO
                ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="max-w-3xl mb-8 sm:mb-10"
        >
          <motion.div variants={fadeUp} className="mb-3 sm:mb-4">
            <span
              className="
                                inline-flex
                                items-center
                                gap-2
                                px-3
                                py-1.5
                                rounded-full
                                bg-[#F26522]/10
                                border
                                border-[#F26522]/10
                                text-[#F26522]
                                text-[10px]
                                sm:text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.1em]
                            "
            >
              <Palette className="w-3.5 h-3.5" />

              {brandingData.category}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="
                            text-[22px]
                            sm:text-[28px]
                            lg:text-[34px]
                            xl:text-[36px]
                            font-extrabold
                            tracking-[-0.02em]
                            leading-[1.12]
                            text-[#03254C]
                        "
          >
            {brandingData.hero?.title}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="
                            w-10
                            h-0.5
                            sm:h-1
                            rounded-full
                            bg-gradient-to-r
                            from-[#F26522]
                            to-[#157327]
                            mt-3
                        "
          />

          <motion.p
            variants={fadeUp}
            className="
                            mt-3
                            sm:mt-4
                            text-[12px]
                            sm:text-[13px]
                            lg:text-[14px]
                            font-normal
                            leading-[1.65]
                            text-[#475569]
                            max-w-2xl
                        "
          >
            {brandingData.hero?.description}
          </motion.p>
        </motion.div>

        {/* =====================================================
                    MAIN GRID
                ===================================================== */}

        <div
          className="
                        grid
                        grid-cols-1
                        lg:grid-cols-4
                        gap-6
                        lg:gap-8
                        items-start
                    "
        >
          {/* =================================================
                        SIDEBAR
                    ================================================= */}

          <aside
            className="
                            lg:col-span-1
                            bg-white
                            border
                            border-[#E2E8F0]
                            rounded-md
                            p-3
                            sm:p-4
                            shadow-[0_2px_10px_rgba(15,23,42,0.03)]
                            lg:sticky
                            lg:top-6
                        "
          >
            {/* Sidebar Header */}

            <div
              className="
                                flex
                                items-start
                                gap-3
                                p-3
                                rounded-md
                                bg-[#F8FAFC]
                                border
                                border-[#E2E8F0]
                                mb-3
                            "
            >
              <div
                className="
                                    w-8
                                    h-8
                                    rounded-md
                                    bg-[#03254C]/10
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
              >
                <Palette
                  className="
                                        w-4
                                        h-4
                                        text-[#03254C]
                                    "
                />
              </div>

              <div>
                <h3
                  className="
                                        text-[11px]
                                        sm:text-xs
                                        font-bold
                                        leading-[1.35]
                                        text-[#03254C]
                                    "
                >
                  Digital & Branding Solutions
                </h3>

                <p
                  className="
                                        mt-1
                                        text-[9px]
                                        sm:text-[10px]
                                        leading-[1.4]
                                        text-[#64748B]
                                    "
                >
                  Solutions for your business growth
                </p>
              </div>
            </div>

            {/* =================================================
                            DIRECT SERVICE NAVIGATION
                        ================================================= */}

            <div className="space-y-1">
              {services.map((service, index) => {
                const isActive = activeTab === index;

                const ServiceIcon = getServiceIcon(service);

                return (
                  <button
                    type="button"
                    key={service.id || `${service.title}-${index}`}
                    onClick={() => handleServiceClick(index)}
                    className={`
                                            w-full
                                            flex
                                            items-center
                                            gap-2.5
                                            text-left
                                            px-3
                                            py-2.5
                                            rounded-md
                                            text-[10px]
                                            sm:text-[11px]
                                            font-semibold
                                            transition-all
                                            duration-200
                                            border-l-2
                                            ${
                                              isActive
                                                ? "bg-[#157327]/5 text-[#03254C] border-[#157327]"
                                                : "text-[#64748B] border-transparent hover:text-[#157327] hover:bg-[#157327]/5"
                                            }
                                        `}
                  >
                    <ServiceIcon
                      className={`
                                                w-3.5
                                                h-3.5
                                                shrink-0
                                                transition-colors
                                                duration-200
                                                ${isActive ? "text-[#157327]" : "text-[#94A3B8] group-hover:text-[#157327]"}
                                            `}
                    />

                    <span className="leading-[1.35]">{service.shortTitle || service.title || service.name}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

          <div
            id="branding-content"
            className="
                            lg:col-span-3
                            scroll-mt-24
                        "
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={currentService.id || currentService.title}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="space-y-5 sm:space-y-6"
              >
                {/* =================================================
                                    SERVICE HEADER
                                ================================================= */}

                <div
                  className="
                                        relative
                                        overflow-hidden
                                        rounded-md
                                        bg-white
                                        border
                                        border-[#E2E8F0]
                                        p-5
                                        sm:p-7
                                        lg:p-8
                                        shadow-[0_2px_12px_rgba(15,23,42,0.03)]
                                    "
                >
                  <div
                    className="
                                            absolute
                                            left-0
                                            top-0
                                            bottom-0
                                            w-1
                                            bg-[#157327]
                                        "
                  />

                  <div
                    className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-2
                                            sm:gap-3
                                            mb-3
                                        "
                  >
                    {currentService.number && (
                      <span
                        className="
                                                    inline-flex
                                                    items-center
                                                    justify-center
                                                    min-w-8
                                                    h-6
                                                    px-2
                                                    rounded-md
                                                    bg-[#03254C]
                                                    text-white
                                                    text-[10px]
                                                    font-bold
                                                "
                      >
                        {currentService.number}
                      </span>
                    )}

                    {currentService.category && (
                      <span
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.08em]
                                                    text-[#157327]
                                                "
                      >
                        {currentService.category}
                      </span>
                    )}

                    {currentService.tagline && (
                      <span
                        className="
                                                    text-[11px]
                                                    sm:text-xs
                                                    font-semibold
                                                    text-[#F26522]
                                                    leading-[1.4]
                                                "
                      >
                        {currentService.tagline}
                      </span>
                    )}
                  </div>

                  <h2
                    className="
                                            text-[20px]
                                            sm:text-[26px]
                                            lg:text-[30px]
                                            font-extrabold
                                            tracking-[-0.02em]
                                            leading-[1.15]
                                            text-[#03254C]
                                        "
                  >
                    {currentService.title}
                  </h2>

                  <p
                    className="
                                            mt-3
                                            text-[12px]
                                            sm:text-[13px]
                                            lg:text-[14px]
                                            font-normal
                                            leading-[1.65]
                                            text-[#475569]
                                            max-w-3xl
                                        "
                  >
                    {currentService.description}
                  </p>
                </div>

                {/* =================================================
                                    BENEFITS + BEST SUITED
                                ================================================= */}

                <div
                  className="
                                        grid
                                        grid-cols-1
                                        lg:grid-cols-2
                                        gap-5
                                    "
                >
                  {/* BENEFITS */}

                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            bg-white
                                            border
                                            border-[#E2E8F0]
                                            rounded-md

                                            p-5
                                            sm:p-6
                                            shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                            hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)]
                                            transition-shadow
                                            duration-200
                                        "
                  >
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                                pb-3
                                                mb-4
                                                border-b
                                                border-[#E2E8F0]
                                            "
                    >
                      <div
                        className="
                                                    w-8
                                                    h-8
                                                    rounded-md
                                                    bg-[#157327]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                    shrink-0
                                                "
                      >
                        <ShieldCheck
                          className="
                                                        w-4
                                                        h-4
                                                        text-[#157327]
                                                    "
                        />
                      </div>

                      <h3
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                    text-[#03254C]
                                                "
                      >
                        Key Benefits
                      </h3>
                    </div>

                    <div className="space-y-3.5">
                      {(currentService.benefits || []).map((benefit, index) => (
                        <div
                          key={`${benefit.title}-${index}`}
                          className="
                                                            flex
                                                            items-start
                                                            gap-2.5
                                                        "
                        >
                          <CheckCircle2
                            className="
                                                                w-4
                                                                h-4
                                                                text-[#157327]
                                                                shrink-0
                                                                mt-0.5
                                                            "
                          />

                          <div>
                            <h4
                              className="
                                                                    text-[11px]
                                                                    sm:text-xs
                                                                    font-bold
                                                                    leading-[1.3]
                                                                    text-[#03254C]
                                                                "
                            >
                              {benefit.title}
                            </h4>

                            {benefit.desc && (
                              <p
                                className="
                                                                        mt-1
                                                                        text-[10px]
                                                                        sm:text-[11px]
                                                                        leading-[1.4]
                                                                        text-[#64748B]
                                                                    "
                              >
                                {benefit.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* BEST SUITED */}

                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            bg-white
                                            border
                                            border-[#E2E8F0]
                                            rounded-md
                                            p-5
                                            sm:p-6
                                            shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                            hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)]
                                            transition-shadow
                                            duration-200
                                        "
                  >
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                                pb-3
                                                mb-4
                                                border-b
                                                border-[#E2E8F0]
                                            "
                    >
                      <div
                        className="
                                                    w-8
                                                    h-8
                                                    rounded-md
                                                    bg-[#03254C]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <Target
                          className="
                                                        w-4
                                                        h-4
                                                        text-[#03254C]
                                                    "
                        />
                      </div>

                      <h3
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                    text-[#03254C]
                                                "
                      >
                        Best Suitable For
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(currentService.suitedFor || []).map((item, index) => (
                        <span
                          key={`${item}-${index}`}
                          className="
                                                            px-2.5
                                                            py-1.5
                                                            rounded-md
                                                            bg-[#157327]/5
                                                            border
                                                            border-[#157327]/15
                                                            text-[10px]
                                                            sm:text-[11px]
                                                            font-semibold
                                                            text-[#157327]
                                                        "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* =================================================
                                    SUPPORTED PLATFORMS
                                ================================================= */}

                {Array.isArray(currentService.supportedPlatforms) && currentService.supportedPlatforms.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                                bg-white
                                                border
                                                border-[#E2E8F0]
                                                rounded-md
                                                p-5
                                                sm:p-6
                                                shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                            "
                  >
                    <div
                      className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                    pb-3
                                                    mb-4
                                                    border-b
                                                    border-[#E2E8F0]
                                                "
                    >
                      <div
                        className="
                                                        w-8
                                                        h-8
                                                        rounded-md
                                                        bg-[#03254C]/10
                                                        flex
                                                        items-center
                                                        justify-center
                                                    "
                      >
                        <Globe
                          className="
                                                            w-4
                                                            h-4
                                                            text-[#03254C]
                                                        "
                        />
                      </div>

                      <h3
                        className="
                                                        text-[10px]
                                                        sm:text-[11px]
                                                        font-bold
                                                        uppercase
                                                        tracking-[0.1em]
                                                        text-[#03254C]
                                                    "
                      >
                        Supported Platforms
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentService.supportedPlatforms.map((platform, index) => (
                        <span
                          key={`${platform}-${index}`}
                          className="
                                                                px-3
                                                                py-1.5
                                                                rounded-md
                                                                bg-[#03254C]/5
                                                                border
                                                                border-[#03254C]/10
                                                                text-[10px]
                                                                sm:text-[11px]
                                                                font-semibold
                                                                text-[#03254C]
                                                            "
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                                    WHAT AARAMBHGROW DOES
                                ================================================= */}

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                                        bg-white
                                        border
                                        border-[#E2E8F0]
                                        rounded-md
                                        p-5
                                        sm:p-6
                                        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                    "
                >
                  <div
                    className="
                                            flex
                                            items-center
                                            gap-3
                                            pb-3
                                            mb-4
                                            border-b
                                            border-[#E2E8F0]
                                        "
                  >
                    <div
                      className="
                                                w-8
                                                h-8
                                                rounded-md
                                                bg-[#03254C]/10
                                                flex
                                                items-center
                                                justify-center
                                            "
                    >
                      <FileCheck2
                        className="
                                                    w-4
                                                    h-4
                                                    text-[#03254C]
                                                "
                      />
                    </div>

                    <h3
                      className="
                                                text-[10px]
                                                sm:text-[11px]
                                                font-bold
                                                uppercase
                                                tracking-[0.1em]
                                                text-[#03254C]
                                            "
                    >
                      What Aarambh Grow Does
                    </h3>
                  </div>

                  <div
                    className="
                                            grid
                                            grid-cols-1
                                            sm:grid-cols-2
                                            lg:grid-cols-3
                                            gap-3
                                        "
                  >
                    {(currentService.whatWeDo || []).map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        whileHover={{
                          y: -2,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                                                        rounded-md
                                                        bg-[#F8FAFC]
                                                        border
                                                        border-[#E2E8F0]
                                                        p-3.5
                                                        hover:border-[#157327]/20
                                                        transition-colors
                                                        duration-200
                                                    "
                      >
                        <h4
                          className="
                                                            text-[11px]
                                                            sm:text-xs
                                                            font-bold
                                                            leading-[1.3]
                                                            text-[#03254C]
                                                        "
                        >
                          {item.title}
                        </h4>

                        {item.desc && (
                          <p
                            className="
                                                                mt-1
                                                                text-[10px]
                                                                sm:text-[11px]
                                                                leading-[1.4]
                                                                text-[#64748B]
                                                            "
                          >
                            {item.desc}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* =================================================
                                    AARAMBHREACH PLANS
                                ================================================= */}

                {currentService.plans?.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            bg-white
                                            border
                                            border-[#E2E8F0]
                                            rounded-md
                                            p-5
                                            sm:p-6
                                            shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                        "
                  >
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                                pb-3
                                                mb-5
                                                border-b
                                                border-[#E2E8F0]
                                            "
                    >
                      <div
                        className="
                                                    w-8
                                                    h-8
                                                    rounded-md
                                                    bg-[#157327]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <WalletCards
                          className="
                                                        w-4
                                                        h-4
                                                        text-[#157327]
                                                    "
                        />
                      </div>

                      <h3
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                    text-[#03254C]
                                                "
                      >
                        AarambhReach Plans
                      </h3>
                    </div>

                    <div
                      className="
                                                grid
                                                grid-cols-1
                                                md:grid-cols-3
                                                gap-4
                                            "
                    >
                      {currentService.plans.map((plan, index) => (
                        <motion.div
                          key={`${plan.name}-${index}`}
                          whileHover={{
                            y: -3,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                                                            rounded-md
                                                            border
                                                            border-[#E2E8F0]
                                                            bg-[#F8FAFC]
                                                            p-4
                                                            hover:border-[#157327]/20
                                                            transition-colors
                                                            duration-200
                                                        "
                        >
                          <div
                            className="
                                                                flex
                                                                items-center
                                                                justify-between
                                                                gap-2
                                                                mb-3
                                                            "
                          >
                            <h4
                              className="
                                                                    text-sm
                                                                    font-extrabold
                                                                    text-[#03254C]
                                                                "
                            >
                              {plan.name}
                            </h4>

                            <span
                              className="
                                                                    px-2
                                                                    py-1
                                                                    rounded-md
                                                                    bg-[#157327]/10
                                                                    text-[9px]
                                                                    font-bold
                                                                    text-[#157327]
                                                                "
                            >
                              {plan.teamMembers}
                            </span>
                          </div>

                          <p
                            className="
                                                                text-[10px]
                                                                leading-[1.5]
                                                                text-[#64748B]
                                                                min-h-[45px]
                                                            "
                          >
                            {plan.bestFor}
                          </p>

                          <div
                            className="
                                                                mt-4
                                                                pt-3
                                                                border-t
                                                                border-[#E2E8F0]
                                                            "
                          >
                            <p
                              className="
                                                                    text-[10px]
                                                                    font-bold
                                                                    uppercase
                                                                    tracking-[0.08em]
                                                                    text-[#94A3B8]
                                                                "
                            >
                              Pricing
                            </p>

                            <p
                              className="
                                                                    mt-1
                                                                    text-[11px]
                                                                    font-bold
                                                                    text-[#F26522]
                                                                "
                            >
                              {plan.pricing}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                                    PLATFORM FEATURES
                                ================================================= */}

                {currentService.features?.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            bg-white
                                            border
                                            border-[#E2E8F0]
                                            rounded-md
                                            p-5
                                            sm:p-6
                                            shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                        "
                  >
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                                pb-3
                                                mb-4
                                                border-b
                                                border-[#E2E8F0]
                                            "
                    >
                      <div
                        className="
                                                    w-8
                                                    h-8
                                                    rounded-md
                                                    bg-[#03254C]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <CheckCircle2
                          className="
                                                        w-4
                                                        h-4
                                                        text-[#03254C]
                                                    "
                        />
                      </div>

                      <h3
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                    text-[#03254C]
                                                "
                      >
                        Platform Features
                      </h3>
                    </div>

                    <div
                      className="
                                                grid
                                                grid-cols-1
                                                sm:grid-cols-2
                                                lg:grid-cols-3
                                                gap-2.5
                                            "
                    >
                      {currentService.features.map((feature, index) => (
                        <div
                          key={`${feature}-${index}`}
                          className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            rounded-md
                                                            bg-[#F8FAFC]
                                                            border
                                                            border-[#E2E8F0]
                                                            px-3
                                                            py-2.5
                                                        "
                        >
                          <CheckCircle2
                            className="
                                                                w-3.5
                                                                h-3.5
                                                                text-[#157327]
                                                                shrink-0
                                                            "
                          />

                          <span
                            className="
                                                                text-[10px]
                                                                sm:text-[11px]
                                                                font-semibold
                                                                text-[#03254C]
                                                            "
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                                    TRIAL
                                ================================================= */}

                {currentService.trial && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            rounded-md
                                            bg-[#157327]
                                            p-5
                                            sm:p-6
                                            text-white
                                            relative
                                            overflow-hidden
                                        "
                  >
                    <div
                      className="
                                                absolute
                                                -right-10
                                                -top-10
                                                w-32
                                                h-32
                                                rounded-full
                                                bg-white/10
                                            "
                    />

                    <div className="relative">
                      <span
                        className="
                                                    inline-flex
                                                    px-2.5
                                                    py-1
                                                    rounded-md
                                                    bg-white/10
                                                    text-[9px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                "
                      >
                        {currentService.trial.duration}
                      </span>

                      <p
                        className="
                                                    mt-3
                                                    text-[11px]
                                                    sm:text-xs
                                                    leading-[1.6]
                                                    text-white/85
                                                    max-w-3xl
                                                "
                      >
                        {currentService.trial.description}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                                    DELIVERABLES
                                ================================================= */}

                {currentService.deliverables?.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                                            bg-white
                                            border
                                            border-[#E2E8F0]
                                            rounded-md
                                            p-5
                                            sm:p-6
                                            shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                        "
                  >
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                                pb-3
                                                mb-4
                                                border-b
                                                border-[#E2E8F0]
                                            "
                    >
                      <div
                        className="
                                                    w-8
                                                    h-8
                                                    rounded-md
                                                    bg-[#F26522]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <FileText
                          className="
                                                        w-4
                                                        h-4
                                                        text-[#F26522]
                                                    "
                        />
                      </div>

                      <h3
                        className="
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.1em]
                                                    text-[#03254C]
                                                "
                      >
                        Deliverables
                      </h3>
                    </div>

                    <div
                      className="
                                                grid
                                                grid-cols-1
                                                sm:grid-cols-2
                                                lg:grid-cols-3
                                                gap-3
                                            "
                    >
                      {currentService.deliverables.map((item, index) => (
                        <div
                          key={`${item}-${index}`}
                          className="
                                                            flex
                                                            items-start
                                                            gap-2.5
                                                            rounded-md
                                                            bg-[#F8FAFC]
                                                            border
                                                            border-[#E2E8F0]
                                                            p-3
                                                        "
                        >
                          <CheckCircle2
                            className="
                                                                w-4
                                                                h-4
                                                                text-[#157327]
                                                                shrink-0
                                                                mt-0.5
                                                            "
                          />

                          <span
                            className="
                                                                text-[10px]
                                                                sm:text-[11px]
                                                                font-semibold
                                                                leading-[1.4]
                                                                text-[#03254C]
                                                            "
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* =================================================
                                    WHY BUSINESSES CHOOSE
                                ================================================= */}

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                                        bg-white
                                        border
                                        border-[#E2E8F0]
                                        rounded-md
                                        p-5
                                        sm:p-6
                                        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
                                    "
                >
                  <div
                    className="
                                            flex
                                            items-center
                                            gap-3
                                            pb-3
                                            mb-4
                                            border-b
                                            border-[#E2E8F0]
                                        "
                  >
                    <div
                      className="
                                                w-8
                                                h-8
                                                rounded-md
                                                bg-[#F26522]/10
                                                flex
                                                items-center
                                                justify-center
                                            "
                    >
                      <Award
                        className="
                                                    w-4
                                                    h-4
                                                    text-[#F26522]
                                                "
                      />
                    </div>

                    <h3
                      className="
                                                text-[10px]
                                                sm:text-[11px]
                                                font-bold
                                                uppercase
                                                tracking-[0.1em]
                                                text-[#03254C]
                                            "
                    >
                      Why Businesses Choose {currentService.name || currentService.title}
                    </h3>
                  </div>

                  <div
                    className="
                                            grid
                                            grid-cols-1
                                            md:grid-cols-2
                                            gap-3
                                        "
                  >
                    {(currentService.whyChoose || []).map((item, index) => {
                      const title = typeof item === "string" ? item : item?.title;

                      const desc = typeof item === "string" ? "" : item?.desc;

                      return (
                        <motion.div
                          key={`${title}-${index}`}
                          whileHover={{
                            y: -2,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                                                            flex
                                                            items-start
                                                            gap-2.5
                                                            bg-[#F8FAFC]
                                                            rounded-md
                                                            border
                                                            border-[#E2E8F0]
                                                            p-3
                                                            hover:border-[#157327]/20
                                                            transition-colors
                                                            duration-200
                                                        "
                        >
                          <CheckCircle2
                            className="
                                                                w-4
                                                                h-4
                                                                text-[#157327]
                                                                shrink-0
                                                                mt-0.5
                                                            "
                          />

                          <div>
                            <p
                              className="
                                                                    text-[10px]
                                                                    sm:text-[11px]
                                                                    font-bold
                                                                    leading-[1.35]
                                                                    text-[#03254C]
                                                                "
                            >
                              {title}
                            </p>

                            {desc && (
                              <p
                                className="
                                                                        mt-1
                                                                        text-[10px]
                                                                        sm:text-[11px]
                                                                        font-normal
                                                                        leading-[1.4]
                                                                        text-[#64748B]
                                                                    "
                              >
                                {desc}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* =================================================
                                    SERVICE CATEGORY FOOTER
                                ================================================= */}

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                                        bg-[#03254C]
                                        rounded-md
                                        p-5
                                        sm:p-6
                                        relative
                                        overflow-hidden
                                    "
                >
                  <div
                    className="
                                            absolute
                                            -right-16
                                            -top-16
                                            w-40
                                            h-40
                                            rounded-full
                                            bg-[#157327]/20
                                        "
                  />

                  <div
                    className="
                                            absolute
                                            -left-20
                                            -bottom-20
                                            w-48
                                            h-48
                                            rounded-full
                                            bg-[#F26522]/10
                                        "
                  />

                  <div className="relative">
                    <div
                      className="
                                                flex
                                                items-center
                                                gap-3
                                            "
                    >
                      <div
                        className="
                                                    w-9
                                                    h-9
                                                    rounded-md
                                                    bg-white/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <Palette
                          className="
                                                        w-4
                                                        h-4
                                                        text-white
                                                    "
                        />
                      </div>

                      <div>
                        <p
                          className="
                                                        text-[9px]
                                                        uppercase
                                                        tracking-[0.12em]
                                                        font-semibold
                                                        text-white/60
                                                    "
                        >
                          Service
                        </p>

                        <h3
                          className="
                                                        mt-0.5
                                                        text-sm
                                                        sm:text-base
                                                        font-bold
                                                        text-white
                                                    "
                        >
                          {currentService.name || currentService.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

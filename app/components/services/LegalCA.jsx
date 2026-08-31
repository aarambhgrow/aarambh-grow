"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  FileText,
  Award,
  Scale,
  FileSignature,
} from "lucide-react";

import { legalData } from "../../data/legal-ca";

export default function Legal() {
  const [activeTab, setActiveTab] = useState(0);

  // Safely get services
  const legalServices = legalData?.services || [];

  const currentService = legalServices[activeTab] || legalServices[0];

  // Prevent rendering if data is missing
  if (!currentService) {
    return (
      <section className="w-full bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#64748B]">Legal service data is not available.</p>
        </div>
      </section>
    );
  }

  const handleServiceClick = (index) => {
    setActiveTab(index);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("legal-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  // ---------------------------------------
  // ANIMATION SETTINGS
  // ---------------------------------------

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

  return (
    <section
      id="legal"
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
        {/* =====================================
                    PAGE INTRO
                ===================================== */}

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
          {/* EYEBROW */}

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
              <Scale className="w-3.5 h-3.5" />

              {legalData?.category || "Legal & CA Services"}
            </span>
          </motion.div>

          {/* HEADING */}

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
            {legalData?.hero?.title ||
              "Simplified Legal, Compliance & Business Protection Solutions"}
          </motion.h1>

          {/* ACCENT LINE */}

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

          {/* DESCRIPTION */}

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
            {legalData?.hero?.description || ""}
          </motion.p>
        </motion.div>

        {/* =====================================
                    MAIN LAYOUT
                ===================================== */}

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
          {/* =====================================
                        SIDEBAR
                    ===================================== */}

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
            {/* SIDEBAR HEADER */}

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
                <Scale
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
                  Simplified Legal, Compliance & Business Protection Solutions
                </h3>
              </div>
            </div>

            {/* SERVICE LIST */}

            <div className="space-y-1">
              {legalServices.map((service, index) => {
                const isActive = activeTab === index;

                return (
                  <button
                    type="button"
                    key={service?.id || index}
                    onClick={() => handleServiceClick(index)}
                    className={`
                                                group
                                                w-full
                                                text-left
                                                px-3
                                                py-2.5
                                                rounded-md
                                                text-[10px]
                                                sm:text-[11px]
                                                font-medium
                                                transition-all
                                                duration-200
                                                border-l-2
                                                ${
                                                  isActive
                                                    ? "bg-[#157327]/10 text-[#157327] font-bold border-[#157327]"
                                                    : "text-[#64748B] border-transparent hover:bg-[#157327]/5 hover:text-[#157327] hover:border-[#157327]"
                                                }
                                            `}
                  >
                    <span className="block">
                      {service?.shortTitle ||
                        service?.title ||
                        `Service ${index + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* =====================================
                        RIGHT CONTENT
                    ===================================== */}

          <div
            id="legal-content"
            className="
                            lg:col-span-3
                            scroll-mt-24
                        "
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={currentService?.id || activeTab}
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
                className="
                                    space-y-5
                                    sm:space-y-6
                                "
              >
                {/* =====================================
                                    SERVICE HEADER
                                ===================================== */}

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
                  {/* LEFT ACCENT */}

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

                  {/* NUMBER + TAGLINE */}

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
                      {currentService?.number ||
                        String(activeTab + 1).padStart(2, "0")}
                    </span>

                    {currentService?.tagline && (
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

                  {/* TITLE */}

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
                    {currentService?.title}
                  </h2>

                  {/* DESCRIPTION */}

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
                    {currentService?.description}
                  </p>
                </div>

                {/* =====================================
                                    BENEFITS + SUITED FOR
                                ===================================== */}

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
                                            transition-shadow
                                            duration-200
                                            hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)]
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
                      {(currentService?.benefits || []).map(
                        (benefit, index) => (
                          <div
                            key={`${benefit?.title || "benefit"}-${index}`}
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
                                {benefit?.title}
                              </h4>

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
                                {benefit?.desc}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
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
                                            transition-shadow
                                            duration-200
                                            hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)]
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
                      {(currentService?.suitedFor || []).map((item, index) => (
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

                {/* =====================================
                                    WHAT AARAMBHGROW DOES
                                ===================================== */}

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
                      <FileText
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
                      What AarambhGrow Does
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
                    {(currentService?.whatWeDo || []).map((item, index) => (
                      <motion.div
                        key={`${item?.title || "item"}-${index}`}
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
                          {item?.title}
                        </h4>

                        <p
                          className="
                                                            mt-1
                                                            text-[10px]
                                                            font-normal
                                                            leading-[1.4]
                                                            text-[#64748B]
                                                        "
                        >
                          {item?.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* =====================================
                                    TYPES
                                ===================================== */}

                {currentService?.types?.length > 0 && (
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
                                                    bg-[#157327]/10
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >
                        <FileSignature
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
                        Types We Support
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
                      {currentService.types.map((item, index) => (
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
                                                            p-3.5
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

                {/* =====================================
                                    WHY BUSINESSES CHOOSE
                                ===================================== */}

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
                      Why Businesses Choose{" "}
                      {currentService?.name || currentService?.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {(currentService?.whyChoose || []).map((item, index) => (
                      <motion.div
                        key={`${item?.title || "reason"}-${index}`}
                        whileHover={{
                          y: -2,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                                                        flex
                                                        items-start
                                                        gap-3
                                                        bg-[#F8FAFC]
                                                        rounded-md
                                                        border
                                                        border-[#E2E8F0]
                                                        p-3.5
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
                                                                leading-[1.35]
                                                                text-[#03254C]
                                                            "
                          >
                            {item?.title}
                          </h4>

                          <p
                            className="
                                                                mt-1
                                                                text-[10px]
                                                                sm:text-[11px]
                                                                font-normal
                                                                leading-[1.5]
                                                                text-[#64748B]
                                                            "
                          >
                            {item?.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
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

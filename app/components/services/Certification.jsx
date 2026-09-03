"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, FileText, Award, ChevronDown, BadgeCheck } from "lucide-react";

import { certificationData } from "../../data/certification";

export default function Certification() {
  const [activeTab, setActiveTab] = useState(0);

  /*
    |--------------------------------------------------------------------------
    | Safe Data
    |--------------------------------------------------------------------------
    */

  const services = Array.isArray(certificationData?.services) ? certificationData.services : [];

  const categories = Array.isArray(certificationData?.categories) ? certificationData.categories : [];

  /*
    |--------------------------------------------------------------------------
    | Current Service
    |--------------------------------------------------------------------------
    */

  const currentService = services[activeTab] || services[0];

  /*
    |--------------------------------------------------------------------------
    | Get Service Name
    |--------------------------------------------------------------------------
    */

  const getServiceName = (service) => {
    return service?.name || service?.title || service?.shortTitle || "";
  };

  /*
    |--------------------------------------------------------------------------
    | Get Service Index
    |--------------------------------------------------------------------------
    */

  const getServiceIndex = (serviceName) => {
    return services.findIndex((service) => {
      const name = getServiceName(service);

      return name.toLowerCase() === String(serviceName || "").toLowerCase();
    });
  };

  /*
    |--------------------------------------------------------------------------
    | Category Services
    |--------------------------------------------------------------------------
    |
    | Only services actually present inside category.services
    | will appear under the category.
    |
    */

  const categoryServiceNames = new Set(categories.flatMap((category) => (Array.isArray(category?.services) ? category.services : [])));

  /*
    |--------------------------------------------------------------------------
    | Standalone Services
    |--------------------------------------------------------------------------
    |
    | Any service from certificationData.services which is NOT
    | present inside category.services will appear separately.
    |
    | This automatically includes:
    | ISO Certificate
    | DUNS Number Registration
    | ZED Certification
    | FSSAI Registration
    |
    */

  const standaloneServices = services.filter((service) => {
    const serviceName = getServiceName(service);

    return !categoryServiceNames.has(serviceName);
  });

  /*
    |--------------------------------------------------------------------------
    | Open Category
    |--------------------------------------------------------------------------
    */

  const [openCategory, setOpenCategory] = useState(categories?.[0]?.title || "");

  /*
    |--------------------------------------------------------------------------
    | Safety Check
    |--------------------------------------------------------------------------
    */

  if (!certificationData || !currentService) {
    return (
      <section className="w-full bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-bold text-red-700">Certification data not found</h2>

            <p className="mt-2 text-sm text-red-600">
              Please check your <strong>data/certification.js</strong> file and make sure the <strong>services</strong> array contains your
              certification services.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
    |--------------------------------------------------------------------------
    | Service Click
    |--------------------------------------------------------------------------
    */

  const handleServiceClick = (index, category = "") => {
    if (index < 0 || index >= services.length) return;

    setActiveTab(index);

    if (category) {
      setOpenCategory(category);
    }

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("certification-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  /*
    |--------------------------------------------------------------------------
    | Animations
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

  return (
    <section
      id="certification"
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
              <BadgeCheck className="w-3.5 h-3.5" />

              {certificationData.category}
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
            Business Certifications – ISO, FSSAI, Startup India & Trademark
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
            {certificationData.hero?.description}
          </motion.p>
        </motion.div>

        {/* =====================================================
                    SEO CERTIFICATION CONTENT
                ===================================================== */}

        <div className="max-w-4xl mb-8 sm:mb-10 space-y-7">
          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              ISO 9001 Certification
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              ISO 9001 certification helps businesses establish a structured quality management system and demonstrate a commitment to
              consistent processes. AarambhGrow provides guidance on documentation, implementation, and certification requirements.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              FSSAI License
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              FSSAI licensing is required for eligible food businesses operating in India. AarambhGrow helps businesses understand the
              applicable license requirements, prepare documentation, and complete the registration process.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              Startup India DPIIT Recognition
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              Startup India DPIIT recognition can help eligible startups access applicable government benefits and support programs.
              AarambhGrow assists founders with the documentation and application process for recognition.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              Udyam/MSME Registration
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              Udyam/MSME registration provides eligible micro, small, and medium enterprises with formal recognition under the MSME
              framework. AarambhGrow supports businesses with registration guidance and the required documentation.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              Trademark Registration
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              Trademark registration helps businesses protect eligible brand names, logos, and other distinctive marks. AarambhGrow provides
              guidance on the application process, documentation, and trademark registration requirements.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-2">
              ZED Certification
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.65] text-[#475569]">
              ZED certification supports eligible MSMEs in improving quality, productivity, and responsible business practices. AarambhGrow
              helps businesses understand the certification process and prepare for applicable requirements.
            </p>
          </div>
        </div>

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
                <BadgeCheck
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
                  Certifications & Compliance
                </h3>
              </div>
            </div>

            {/* =================================================
                            CATEGORY NAVIGATION
                        ================================================= */}

            <div className="space-y-1">
              {categories.map((category) => {
                const isOpen = openCategory === category.title;

                const categoryServices = Array.isArray(category?.services) ? category.services : [];

                return (
                  <div
                    key={category.title}
                    className="
                                            border-b
                                            border-[#E2E8F0]
                                            last:border-b-0
                                            pb-1
                                        "
                  >
                    {/* Category Button */}

                    <button
                      type="button"
                      onClick={() => setOpenCategory(isOpen ? "" : category.title)}
                      className="
                                                w-full
                                                flex
                                                items-center
                                                justify-between
                                                px-2.5
                                                py-2.5
                                                rounded-md
                                                text-[11px]
                                                sm:text-xs
                                                font-semibold
                                                text-[#03254C]
                                                hover:bg-[#F8FAFC]
                                                transition-colors
                                            "
                    >
                      <span>{category.title}</span>

                      <ChevronDown
                        className={`
                                                    w-4
                                                    h-4
                                                    transition-transform
                                                    duration-200
                                                    ${isOpen ? "rotate-180" : ""}
                                                `}
                      />
                    </button>

                    {/* Category Services */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                                                        overflow-hidden
                                                        ml-2
                                                        pl-3
                                                        border-l-2
                                                        border-[#E2E8F0]
                                                        space-y-1
                                                        mt-1
                                                        mb-2
                                                    "
                        >
                          {categoryServices.map((serviceName) => {
                            const serviceIndex = getServiceIndex(serviceName);

                            if (serviceIndex === -1) {
                              return null;
                            }

                            const service = services[serviceIndex];

                            const isActive = activeTab === serviceIndex;

                            return (
                              <button
                                type="button"
                                key={service.id || serviceIndex}
                                onClick={() => handleServiceClick(serviceIndex, category.title)}
                                className={`
                                                                        w-full
                                                                        text-left
                                                                        px-3
                                                                        py-2
                                                                        rounded-md
                                                                        text-[10px]
                                                                        sm:text-[11px]
                                                                        font-medium
                                                                        transition-all
                                                                        duration-200
                                                                        ${
                                                                          isActive
                                                                            ? "bg-[#03254C]/5 text-[#03254C] font-bold border-l-2 border-[#157327]"
                                                                            : "text-[#64748B] hover:text-[#03254C] hover:bg-[#F8FAFC]"
                                                                        }
                                                                    `}
                              >
                                {service.shortTitle || service.title || service.name}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                            STANDALONE SERVICES
                        ================================================= */}

            {standaloneServices.length > 0 && (
              <div
                className="
                                    mt-3
                                    pt-3
                                    border-t
                                    border-[#E2E8F0]
                                    space-y-1
                                "
              >
                {standaloneServices.map((service) => {
                  const serviceIndex = services.findIndex((item) => item.id === service.id);

                  const isActive = activeTab === serviceIndex;

                  return (
                    <button
                      type="button"
                      key={service.id || serviceIndex}
                      onClick={() => handleServiceClick(serviceIndex)}
                      className={`
                                                    w-full
                                                    text-left
                                                    px-3
                                                    py-2.5
                                                    rounded-md
                                                    text-[10px]
                                                    sm:text-[11px]
                                                    font-semibold
                                                    transition-all
                                                    duration-200
                                                    ${
                                                      isActive
                                                        ? "bg-[#03254C]/5 text-[#03254C] font-bold border-l-2 border-[#F26522]"
                                                        : "text-[#64748B] hover:text-[#03254C] hover:bg-[#F8FAFC]"
                                                    }
                                                `}
                    >
                      {service.shortTitle || service.title || service.name}
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

          <div
            id="certification-content"
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
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

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
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

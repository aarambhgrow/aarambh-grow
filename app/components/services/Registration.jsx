"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  FileText,
  BriefcaseBusiness,
  Award,
  ClipboardCheck,
  IndianRupee,
  ChevronDown,
} from "lucide-react";

import { registrationData } from "../../data/registration";

export default function Registration() {
  const [activeTab, setActiveTab] = useState(0);
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);

  const currentService = registrationData.services?.[activeTab] || registrationData.services?.[0];

  if (!currentService) {
    return null;
  }

  // First 4 = Company Registration
  const companyServices = registrationData.services.slice(0, 4);

  // Remaining = Other Registrations
  const otherServices = registrationData.services.slice(4);

  const handleServiceClick = (index) => {
    setActiveTab(index);

    if (index < 4) {
      setIsCompanyOpen(true);
    }

    // Mobile scroll
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("registration-content")?.scrollIntoView({
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

  // ---------------------------------------
  // FAQ SCHEMA
  // ---------------------------------------

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does Private Limited registration take in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The registration timeline depends on document readiness, name approval, government processing, and completion of the required filings.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the difference between LLP and Pvt Ltd for a startup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Private Limited Company provides a structured corporate ownership model, while an LLP combines limited liability with partnership-based management.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a physical office to register a company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A registered office address and valid supporting proof are required for company registration.",
        },
      },
      {
        "@type": "Question",
        name: "Can I register an LLP instead of a Private Limited Company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The appropriate structure depends on your ownership model, business requirements, and long-term plans.",
        },
      },
      {
        "@type": "Question",
        name: "Can MSME registration be completed after company incorporation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligible businesses can apply for MSME/Udyam registration based on the applicable registration requirements.",
        },
      },
    ],
  };

  return (
    <section
      id="registration"
      className="
        relative w-full
        bg-[#F8FAFC]
        text-[#03254C]
        font-sans
        py-10 sm:py-12 lg:py-16
      "
    >
      {/* FAQ PAGE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================
                    PAGE INTRO
        ===================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-3xl mb-8 sm:mb-10"
        >
          {/* EYEBROW */}

          <motion.div variants={fadeUp} className="mb-3 sm:mb-4">
            <span
              className="
                inline-flex items-center gap-2
                px-3 py-1.5
                rounded-full
                bg-[#F26522]/10
                border border-[#F26522]/10
                text-[#F26522]
                text-[10px] sm:text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
              "
            >
              <BriefcaseBusiness className="w-3.5 h-3.5" />

              {registrationData.category}
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
            Company Registration Services – Private Limited, LLP, OPC & MSME
          </motion.h1>

          {/* ACCENT LINE */}

          <motion.div
            variants={fadeUp}
            className="
              w-10
              h-0.5 sm:h-1
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
              mt-3 sm:mt-4
              text-[12px]
              sm:text-[13px]
              lg:text-[14px]
              font-normal
              leading-[1.65]
              text-[#475569]
              max-w-2xl
            "
          >
            {registrationData.hero.description}
          </motion.p>
        </motion.div>

        {/* =====================================
                    SEO CONTENT
        ===================================== */}

        <div className="max-w-5xl mb-10 sm:mb-12 space-y-8">
          {/* =====================================
                      1. INTRODUCTION
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-3">Company Registration Services in India</h2>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.7] text-[#475569]">
              Choosing the right business structure is an important step when starting and growing a business in India. AarambhGrow provides
              registration support for Private Limited Companies, Limited Liability Partnerships (LLPs), One Person Companies (OPCs),
              Partnerships, and MSME/Udyam registration. Each structure has different requirements, ownership options, compliance
              responsibilities, and suitability depending on the nature and size of your business. Selecting the appropriate registration
              structure can help establish a clear legal identity, support business operations, and prepare the organisation for future
              growth, funding, and compliance requirements. Our registration services provide guidance through documentation, application
              filing, and the required registration process so businesses can choose and complete the registration option that best matches
              their business requirements.
            </p>
          </section>

          {/* =====================================
                      2. COMPARISON
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-4">Which structure is right for you?</h2>

            <div className="overflow-x-auto rounded-md border border-[#E2E8F0] bg-white">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="bg-[#03254C] text-white">
                    <th className="px-4 py-3 text-xs font-bold">Structure</th>

                    <th className="px-4 py-3 text-xs font-bold">Best For</th>

                    <th className="px-4 py-3 text-xs font-bold">Key Feature</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr>
                    <td className="px-4 py-3 text-xs font-bold text-[#03254C]">Private Limited Company</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Startups and growing businesses</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Separate legal identity and structured ownership</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 text-xs font-bold text-[#03254C]">LLP</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Professional and partner-led businesses</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Limited liability with partnership flexibility</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 text-xs font-bold text-[#03254C]">OPC</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Individual entrepreneurs</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Corporate structure with a single owner</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 text-xs font-bold text-[#03254C]">Partnership</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Businesses operated by two or more partners</td>

                    <td className="px-4 py-3 text-xs text-[#64748B]">Shared ownership and management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* =====================================
                      3. PROCESS
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-4">Company Registration Process</h2>

            <ol className="space-y-3">
              {["Name approval (RUN)", "DSC & DIN", "SPICe+ filing", "PAN/TAN", "Bank account", "GST registration"].map((step, index) => (
                <li
                  key={step}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-md
                    bg-white
                    border border-[#E2E8F0]
                    p-3.5
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-6
                      h-6
                      rounded-full
                      bg-[#03254C]
                      text-white
                      text-[10px]
                      font-bold
                      shrink-0
                    "
                  >
                    {index + 1}
                  </span>

                  <span className="text-xs sm:text-[13px] font-semibold text-[#03254C]">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* =====================================
                      4. DOCUMENTS
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-4">Documents Required for Company Registration</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["PAN", "Aadhaar", "Address proof", "Passport-size photographs", "Registered office proof", "NOC"].map((document) => (
                <li
                  key={document}
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-md
                    bg-white
                    border border-[#E2E8F0]
                    p-3.5
                  "
                >
                  <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0" />

                  <span className="text-xs sm:text-[13px] text-[#475569]">{document}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* =====================================
                      5. TIMELINE & PRICE
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-3">Registration Timeline & Starting Price</h2>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.7] text-[#475569]">
              Registration timelines and starting prices vary depending on the selected business structure, documentation, government
              processing, and applicable requirements. Contact AarambhGrow for the applicable registration timeline and starting price for
              your business structure.
            </p>
          </section>

          {/* =====================================
                      6. FAQ
          ===================================== */}

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#03254C] mb-4">Frequently Asked Questions</h2>

            <div className="space-y-3">
              <div className="rounded-md bg-white border border-[#E2E8F0] p-4">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#03254C]">
                  How long does Private Limited registration take in India?
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs leading-[1.6] text-[#64748B]">
                  The registration timeline depends on document readiness, name approval, government processing, and completion of the
                  required filings.
                </p>
              </div>

              <div className="rounded-md bg-white border border-[#E2E8F0] p-4">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#03254C]">
                  What’s the difference between LLP and Pvt Ltd for a startup?
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs leading-[1.6] text-[#64748B]">
                  A Private Limited Company provides a structured corporate ownership model, while an LLP combines limited liability with
                  partnership-based management.
                </p>
              </div>

              <div className="rounded-md bg-white border border-[#E2E8F0] p-4">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#03254C]">Do I need a physical office to register a company?</h3>

                <p className="mt-2 text-[11px] sm:text-xs leading-[1.6] text-[#64748B]">
                  A registered office address and valid supporting proof are required for company registration.
                </p>
              </div>

              <div className="rounded-md bg-white border border-[#E2E8F0] p-4">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#03254C]">
                  Can I register an LLP instead of a Private Limited Company?
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs leading-[1.6] text-[#64748B]">
                  Yes. The appropriate structure depends on your ownership model, business requirements, and long-term plans.
                </p>
              </div>

              <div className="rounded-md bg-white border border-[#E2E8F0] p-4">
                <h3 className="text-xs sm:text-[13px] font-bold text-[#03254C]">
                  Can MSME registration be completed after company incorporation?
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs leading-[1.6] text-[#64748B]">
                  Eligible businesses can apply for MSME/Udyam registration based on the applicable registration requirements.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================
                      INTERNAL LINKS
          ===================================== */}

          <section>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.7] text-[#475569]">
              Once registered, we handle your ongoing{" "}
              <a href="/services/legal-ca" className="font-semibold text-[#F26522] hover:underline">
                GST and ROC compliance
              </a>
              . You can also{" "}
              <a href="/services/finance" className="font-semibold text-[#F26522] hover:underline">
                apply for MSME loans and funding once incorporated
              </a>
              .
            </p>
          </section>
        </div>

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
              border border-[#E2E8F0]
              rounded-md
              p-3 sm:p-4
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
                border border-[#E2E8F0]
                mb-3
              "
            >
              <div
                className="
                  w-8 h-8
                  rounded-md
                  bg-[#03254C]/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <BriefcaseBusiness className="w-4 h-4 text-[#03254C]" />
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
                  Start Your Business With the Right Registration
                </h3>
              </div>
            </div>

            {/* NAVIGATION */}

            <div className="space-y-1">
              {/* COMPANY REGISTRATION */}

              <div>
                <button
                  type="button"
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-2.5
                    py-2
                    rounded-md
                    text-[11px]
                    sm:text-xs
                    font-semibold
                    text-[#03254C]
                    hover:bg-[#F8FAFC]
                    transition-colors
                  "
                >
                  <span>Company Registration</span>

                  <ChevronDown
                    className={`
                      w-4 h-4
                      transition-transform
                      duration-200
                      ${isCompanyOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isCompanyOpen && (
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
                      {companyServices.map((service, index) => {
                        const isActive = activeTab === index;

                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => handleServiceClick(index)}
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
                            {service.shortTitle || service.title}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* OTHER REGISTRATIONS */}

              <div
                className="
                  pt-2
                  mt-1
                  border-t border-[#E2E8F0]
                  space-y-1
                "
              >
                {otherServices.map((service, index) => {
                  const serviceIndex = index + 4;

                  const isActive = activeTab === serviceIndex;

                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => handleServiceClick(serviceIndex)}
                      className={`
                        w-full
                        text-left
                        px-2.5
                        py-2
                        rounded-md
                        text-[10px]
                        sm:text-[11px]
                        font-semibold
                        transition-all
                        duration-200
                        ${isActive ? "bg-[#03254C]/5 text-[#03254C] border-l-2 border-[#F26522]" : "text-[#03254C] hover:bg-[#F8FAFC]"}
                      `}
                    >
                      {service.shortTitle || service.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* =====================================
                        RIGHT CONTENT
          ===================================== */}

          <div
            id="registration-content"
            className="
              lg:col-span-3
              scroll-mt-24
            "
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={currentService.id}
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
                {/* =====================================
                                    SERVICE HEADER
                ===================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-md
                    bg-white
                    border border-[#E2E8F0]
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
                      {currentService.number}
                    </span>

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
                    {currentService.title}
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
                    {currentService.description}
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
                      border border-[#E2E8F0]
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
                          w-8 h-8
                          rounded-md
                          bg-[#157327]/10
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <ShieldCheck className="w-4 h-4 text-[#157327]" />
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
                      {currentService.benefits?.map((benefit, index) => (
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
                              w-4 h-4
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
                                font-normal
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
                      border border-[#E2E8F0]
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
                          w-8 h-8
                          rounded-md
                          bg-[#03254C]/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Target className="w-4 h-4 text-[#03254C]" />
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
                      {currentService.suitedFor?.map((item, index) => (
                        <span
                          key={`${item}-${index}`}
                          className="
                            px-2.5
                            py-1.5
                            rounded-md
                            bg-[#157327]/5
                            border border-[#157327]/15
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
                    border border-[#E2E8F0]
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
                        w-8 h-8
                        rounded-md
                        bg-[#03254C]/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FileText className="w-4 h-4 text-[#03254C]" />
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
                    {currentService.whatWeDo?.map((item, index) => (
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
                          border border-[#E2E8F0]
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
                            font-normal
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

                {/* =====================================
                                    WHY BUSINESSES CHOOSE
                ===================================== */}

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                    bg-white
                    border border-[#E2E8F0]
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
                        w-8 h-8
                        rounded-md
                        bg-[#F26522]/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Award className="w-4 h-4 text-[#F26522]" />
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

                  <div className="space-y-3">
                    {currentService.whyChoose?.map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
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
                          border border-[#E2E8F0]
                          p-3.5
                        "
                      >
                        <CheckCircle2
                          className="
                            w-4 h-4
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
                            {item.title}
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
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* =====================================
                                    ELIGIBILITY
                ===================================== */}

                {currentService.eligibility?.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                      bg-white
                      border border-[#E2E8F0]
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
                          w-8 h-8
                          rounded-md
                          bg-[#157327]/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <ClipboardCheck className="w-4 h-4 text-[#157327]" />
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
                        Eligibility Requirements
                      </h3>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-3
                      "
                    >
                      {currentService.eligibility.map((item, index) => (
                        <div
                          key={`${item.title}-${index}`}
                          className="
                            rounded-md
                            bg-[#F8FAFC]
                            border border-[#E2E8F0]
                            p-3.5
                          "
                        >
                          <h4
                            className="
                              text-[11px]
                              sm:text-xs
                              font-bold
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
                              font-normal
                              leading-[1.4]
                              text-[#64748B]
                            "
                          >
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* =====================================
                                    GEM CAUTION MONEY
                ===================================== */}

                {currentService.cautionMoney?.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                      bg-white
                      border border-[#E2E8F0]
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
                          w-8 h-8
                          rounded-md
                          bg-[#F26522]/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <IndianRupee className="w-4 h-4 text-[#F26522]" />
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
                        GeM Caution Money Structure
                      </h3>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-3
                        gap-3
                      "
                    >
                      {currentService.cautionMoney.map((item, index) => (
                        <div
                          key={`${item.turnover}-${index}`}
                          className="
                            rounded-md
                            bg-[#F8FAFC]
                            border border-[#E2E8F0]
                            p-4
                            text-center
                          "
                        >
                          <p
                            className="
                              text-[10px]
                              sm:text-[11px]
                              font-medium
                              text-[#64748B]
                            "
                          >
                            {item.turnover}
                          </p>

                          <p
                            className="
                              mt-1
                              text-base
                              sm:text-lg
                              font-extrabold
                              text-[#03254C]
                            "
                          >
                            {item.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function ContactFormWithMap() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#f8fafc] font-sans text-[#03254C] py-8 sm:py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="bg-white rounded-md sm:rounded-md border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        >
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 space-y-6">
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl sm:text-2xl font-black text-[#03254C]">
                Send Us a <span className="text-[#F26522]">Message</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form and our team will get back to you.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-[#03254C] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-[#03254C] focus:outline-none focus:border-[#F26522] focus:bg-white transition-all"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-[#03254C] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-[#03254C] focus:outline-none focus:border-[#F26522] focus:bg-white transition-all"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-[#03254C] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-[#03254C] focus:outline-none focus:border-[#F26522] focus:bg-white transition-all"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-[#03254C] mb-1.5">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-slate-500 focus:outline-none focus:border-[#F26522] focus:bg-white transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="legal">Legal & Compliance</option>
                    <option value="finance">Finance Advisory</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-bold text-[#03254C] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-[#03254C] focus:outline-none focus:border-[#F26522] focus:bg-white transition-all resize-none"
                  required
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#F26522] hover:bg-[#d85416] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </motion.button>

                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-medium text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-[#157327]" />
                  <span>We respect your privacy</span>
                </div>
              </motion.div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-md bg-green-50 border border-green-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <p className="text-xs font-semibold text-green-700">
                    Your message has been sent successfully. We will contact you
                    soon.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-md bg-red-50 border border-red-200"
                >
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <p className="text-xs font-semibold text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </motion.div>
              )}
            </form>
          </div>

          {/* RIGHT: Dark Map Overlay */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#03254C] overflow-hidden flex flex-col justify-end"
          >
            <iframe
              title="AarambhGrow Group of Companies Location Map"
              src="https://www.google.com/maps?q=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470&output=embed"
              className="w-full h-full border-0 absolute inset-0 opacity-80 invert brightness-90 contrast-125"
              loading="lazy"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative m-4 sm:m-6 bg-white/95 backdrop-blur-xs p-4 rounded-md border border-slate-200/80 shadow-lg space-y-2 z-10"
            >
              <h4 className="text-xs font-black text-[#03254C]">
                AarambhGrow Group of Companies
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway,
                Gujarat 382470
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F26522] hover:underline pt-1"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

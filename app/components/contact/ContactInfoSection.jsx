"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
  Navigation,
} from "lucide-react";

export default function ContactMainSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section className="w-full bg-[#f8fafc] font-sans text-[#03254C] py-4 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto space-y-4">

        {/* LIGHT PREMIUM MAIN CONTAINER */}
        <div className="bg-white rounded-md p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(3,37,76,0.05)] space-y-5">

          {/* 1. Header & Live Availability Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#157327]/10 text-[#157327] text-[10px] font-bold uppercase tracking-widest border border-[#157327]/15">
                <Sparkles className="w-3 h-3" />
                Contact Desk
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#03254C] tracking-tight">
                Get in Touch with Us
              </h2>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 self-start sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#157327] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#157327]"></span>
              </span>
              <span className="text-[11px] font-bold text-[#03254C]">
                Active Hours: <span className="text-slate-500 font-normal">Mon–Sat, 9 AM – 7 PM</span>
              </span>
            </div>
          </div>

          {/* 2. Interactive Channel Cards + HQ Strip Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">

            {/* Quick Action Pills (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">

              {/* Call Card */}
              <a
                href="tel:+919998715799"
                className="group relative bg-[#f8fafc] hover:bg-white p-3.5 rounded-md border border-slate-200/80 hover:border-[#157327] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#157327]/10 text-[#157327]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#157327] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-3">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Phone Inquiry
                  </span>
                  <p className="text-xs font-bold text-[#03254C] group-hover:text-[#157327] transition-colors mt-0.5 truncate">
                    +91 99987 15799
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@aarambhgrow.group"
                className="group relative bg-[#f8fafc] hover:bg-white p-3.5 rounded-md border border-slate-200/80 hover:border-[#F26522] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#F26522]/10 text-[#F26522]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F26522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-3">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Official Email
                  </span>
                  <p className="text-xs font-bold text-[#03254C] group-hover:text-[#F26522] transition-colors mt-0.5 truncate">
                    info@aarambhgrow.group
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919998715799"
                target="_blank"
                rel="noreferrer"
                className="group relative bg-[#f8fafc] hover:bg-white p-3.5 rounded-md border border-slate-200/80 hover:border-[#F26522] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-md bg-[#F26522]/10 text-[#F26522]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F26522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="mt-3">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp Chat
                  </span>
                  <p className="text-xs font-bold text-[#03254C] group-hover:text-[#F26522] transition-colors mt-0.5 truncate">
                    Instant Messaging
                  </p>
                </div>
              </a>

            </div>

            {/* HQ Office Panel Accent (4 Cols) */}
            <div className="lg:col-span-4 bg-[#03254C]/5 p-3.5 rounded-md border border-[#03254C]/10 flex flex-col justify-between space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-md bg-[#157327] text-white shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    Visit Headquarters
                  </span>
                  <p className="text-[11px] font-semibold text-[#03254C] leading-snug mt-0.5">
                    813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway, Gujarat 382470
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md bg-[#F26522] hover:bg-[#d85416] text-white text-[11px] font-bold transition-colors shadow-xs"
              >
                <span>Navigate on Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
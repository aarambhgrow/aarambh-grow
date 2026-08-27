"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X, ArrowUpRight, Building2, BadgeCheck, Banknote, Sparkles, Workflow, Scale } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Services",
    href: "/services/registration",

    children: [
      {
        label: "Registration",
        href: "/services/registration",
        description: "Company, LLP, OPC & MSME setup",
        icon: Building2,
      },

      {
        label: "Finance",
        href: "/services/finance",
        description: "Loans, subsidies & business funding",
        icon: Banknote,
      },

      {
        label: "Certification",
        href: "/services/certification",
        description: "ISO, FSSAI, Startup India & more",
        icon: BadgeCheck,
      },

      {
        label: "Branding",
        href: "/services/branding",
        description: "Brand identity, strategy & positioning",
        icon: Sparkles,
      },

      {
        label: "Operations",
        href: "/services/operations",
        description: "Process improvement, automation & consulting",
        icon: Workflow,
      },

      {
        label: "Legal & CA",

        href: "/services/legal-ca",

        description: "GST, ITR, ROC & business compliance",
        icon: Scale,
      },
    ],
  },

  {
    label: "Contact Us",
    href: "/contact",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 shrink-0 group">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="flex items-center"
      >
        <Image
          src="/images/home-logo.png"
          alt="Aarambh Grow"
          width={130}
          height={30}
          priority
          className="h-20 w-auto object-contain transition-all duration-300 filter drop-shadow-xs group-hover:drop-shadow-md"
        />
      </motion.div>
    </Link>
  );
}

function DesktopLink({ link, isActive }) {
  const hasChildren = Boolean(link.children?.length);

  const isMegaMenu = hasChildren && link.children.length > 5;

  return (
    <div className="group relative py-5 flex items-center">
      <Link
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-semibold transition-colors duration-300 ease-out select-none whitespace-nowrap hover:text-[#F26522] ${
          isActive ? "text-[#F26522]" : "text-[#03254C]"
        }`}
      >
        {/* Text */}
        <span className="relative z-10 block transition-transform duration-300 ease-out group-hover:-translate-y-0.5">{link.label}</span>

        {/* Dropdown Arrow */}
        {hasChildren && (
          <ChevronDown className="relative z-10 h-3 w-3 text-slate-400 transition-all duration-300 ease-out group-hover:rotate-180 group-hover:text-[#F26522]" />
        )}

        {/* Animated Underline */}
        <span
          className={`absolute bottom-1 left-2.5 right-2.5 h-[2px] transition-transform duration-300 ease-out origin-left rounded-full group-hover:scale-x-100 ${
            isActive ? "scale-x-100" : "scale-x-0"
          }`}
          style={{
            background: "linear-gradient(90deg, #F26522 0%, #157327 100%)",
          }}
        />
      </Link>

      {hasChildren && (
        <div
          className={`invisible absolute top-full z-20 pt-2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 pointer-events-none group-hover:pointer-events-auto ${
            isMegaMenu ? "left-1/2 -translate-x-1/2 w-[640px]" : "left-1/2 -translate-x-1/2 w-56"
          }`}
        >
          {isMegaMenu ? (
            <div className="overflow-hidden rounded-md border border-slate-100/80 bg-white/95 shadow-[0_20px_50px_-12px_rgba(3,37,76,0.12)] backdrop-blur-xl transition-all duration-300 flex">
              <div className="w-2/3 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-4 w-1 rounded-full bg-[#F26522]" />

                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#03254C]">Explore Services</h3>
                </div>
                <p className="text-[11px] text-slate-500 mb-4 ml-3">Complete business solutions to start, manage & grow with confidence.</p>
                <div className="flex gap-6">
                  <div className="flex-1 flex flex-col gap-1">
                    {link.children.slice(0, 3).map((child) => {
                      const Icon = child.icon;

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group/item flex flex-col gap-0.5 p-2 rounded-md transition-all duration-200 hover:bg-[#F26522]/5"
                        >
                          <div className="flex items-center gap-2.5">
                            {Icon && (
                              <Icon
                                className="h-[18px] w-[18px] text-[#03254C]/60 transition-colors duration-200 group-hover/item:text-[#F26522] shrink-0"
                                strokeWidth={1.5}
                              />
                            )}

                            <span className="text-[12px] font-semibold text-[#03254C] transition-transform duration-200 group-hover/item:translate-x-0.5">
                              {child.label}
                            </span>
                          </div>

                          <p className="text-[10px] text-slate-500 leading-tight pl-[30px] mt-0.5">{child.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    {link.children.slice(3, 6).map((child) => {
                      const Icon = child.icon;

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group/item flex flex-col gap-0.5 p-2 rounded-md transition-all duration-200 hover:bg-[#F26522]/5"
                        >
                          <div className="flex items-center gap-2.5">
                            {Icon && (
                              <Icon
                                className="h-[18px] w-[18px] text-[#03254C]/60 transition-colors duration-200 group-hover/item:text-[#F26522] shrink-0"
                                strokeWidth={1.5}
                              />
                            )}

                            <span className="text-[12px] font-semibold text-[#03254C] transition-transform duration-200 group-hover/item:translate-x-0.5">
                              {child.label}
                            </span>
                          </div>

                          <p className="text-[10px] text-slate-500 leading-tight pl-[30px] mt-0.5">{child.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-1/3 bg-gradient-to-br from-[#03254C] to-[#062a57] p-6 flex flex-col justify-center text-white relative overflow-hidden border-l border-slate-100/10">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F26522]/20 rounded-full blur-2xl" />

                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#157327]/20 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h4 className="text-sm font-bold mb-2 text-white">Need Help Deciding?</h4>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                    Our experts help you find the right solutions for your business goals.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 rounded-full bg-[#F26522] px-3 py-1.5 text-[10px] font-bold text-white transition-all hover:bg-white hover:text-[#F26522]"
                  >
                    Get Free Consultation
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (

            <div className="overflow-hidden rounded-md border border-slate-100/80 bg-white/95 p-2 shadow-[0_20px_50px_-12px_rgba(3,37,76,0.12)] backdrop-blur-xl transition-all duration-300">
              {link.children.map((child, idx) => (
                <Link
                  key={child.label}
                  href={child.href}
                  style={{
                    transitionDelay: `${idx * 25}ms`,
                  }}
                  className="group/item flex items-center justify-between rounded-md px-3 py-2.5 text-xs font-semibold text-[#03254C]/80 transition-all duration-200 hover:bg-[#F26522]/10 hover:text-[#F26522] hover:translate-x-1"
                >
                  <span className="transition-transform duration-200 group-hover/item:translate-x-0.5">{child.label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 text-[#157327]" />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MobileLink({ link, onNavigate, isActive }) {
  const [open, setOpen] = useState(false);

  const hasChildren = Boolean(link.children?.length);

  return (
    <div className="border-b border-slate-100/60 last:border-none">
      <div className="flex w-full items-center justify-between py-0.5">
        
        <Link
          href={link.href}
          onClick={onNavigate}
          aria-current={isActive ? "page" : undefined}
          className={`flex-grow py-2.5 text-[13px] font-semibold tracking-wide transition-colors hover:text-[#F26522] ${
            isActive ? "text-[#F26522]" : "text-[#03254C]"
          }`}
        >
          {link.label}
        </Link>

        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2.5 text-slate-400 hover:text-[#F26522] transition-colors"
            aria-label="Toggle submenu"
          >
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180 text-[#F26522]" : ""}`} />
          </button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {hasChildren && open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pl-3 pr-2 pb-2 flex flex-col gap-1 border-l-2 border-[#F26522]/20 my-1 ml-1">
              {link.children?.map((child) => {
                const Icon = child.icon;

                return (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={onNavigate}
                    className="group/m flex items-center gap-2.5 text-xs font-semibold text-slate-500 py-1.5 px-2 rounded-md hover:text-[#F26522] hover:bg-slate-50 transition-all duration-150 active:scale-98"
                  >
                    {Icon && (
                      <Icon
                        className="h-[18px] w-[18px] text-[#03254C]/50 group-hover/m:text-[#F26522] transition-colors shrink-0"
                        strokeWidth={1.5}
                      />
                    )}

                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "border-b border-slate-200/50 bg-white/85 shadow-xs backdrop-blur-md h-16" : "border-b border-transparent bg-white h-16"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-2 lg:flex h-full">
          {NAV_LINKS.map((link) => (
            <DesktopLink key={link.label} link={link} isActive={isLinkActive(link.href)} />
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          {/* Phone */}

          <motion.a
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href="tel:+919998715799"
            className="group flex items-center gap-2 text-[13px] font-semibold text-[#03254C] hover:text-[#F26522] transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-[#03254C] transition-all duration-300 group-hover:bg-[#F26522] group-hover:text-white group-hover:shadow-xs">
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            </span>
            +91 99987 15799
          </motion.a>

          {/* Consultation */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <Link
              href="/contact"
              className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-[#F26522] bg-[#F26522] px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:shadow-md transition-all duration-300 ease-out hover:text-[#03254C]"
            >
              <span className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

              <span className="relative z-10 flex items-center gap-1">
                Get Free Consultation
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white group-hover:text-[#157327]" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-[#03254C] hover:bg-slate-50 active:bg-slate-100 lg:hidden transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.8,
              }}
              transition={{
                duration: 0.15,
              }}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
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
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-0 top-full w-full border-t border-slate-100 bg-white/95 px-4 pb-5 backdrop-blur-xl lg:hidden shadow-xl"
          >
            <nav className="flex flex-col pt-1">
              {NAV_LINKS.map((link) => (
                <MobileLink key={link.label} link={link} onNavigate={() => setMobileOpen(false)} isActive={isLinkActive(link.href)} />
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2.5 pt-2 border-t border-slate-100">
              {/* Phone */}

              <a
                href="tel:+919998715799"
                className="flex items-center gap-2 py-1.5 text-[13px] font-semibold text-[#03254C] hover:text-[#F26522] transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F26522]/10 text-[#F26522]">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                +91 99987 15799
              </a>

              {/* Consultation */}

              <motion.div
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] px-4 py-2.5 text-xs font-semibold text-white shadow-sm active:opacity-90 transition-opacity"
                >
                  Get Free Consultation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

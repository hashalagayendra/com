"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls past the hero
      const scrollY = window.scrollY;
      setScrolled(scrollY > 260);

      // Simple active link highlight based on scroll position
      const workEl = document.getElementById("work");
      const servicesEl = document.getElementById("services");
      const studioEl = document.getElementById("studio");

      if (studioEl && scrollY >= studioEl.offsetTop - 200) {
        setActiveSection("studio");
      } else if (servicesEl && scrollY >= servicesEl.offsetTop - 200) {
        setActiveSection("services");
      } else if (workEl && scrollY >= workEl.offsetTop - 200) {
        setActiveSection("work");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Studio", href: "#studio", id: "studio" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#contact") {
      e.preventDefault();
      onOpenContact();
      setMobileOpen(false);
      return;
    }
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* ====================================================================
          FLOATING DYNAMIC ISLAND GLASS CAPSULE NAVBAR
          - Suspended centered floating pill
          - Ultra-refined backdrop blur & glowing inner edge
          - Segmented track navigation with active indicator
          - Compact responsive layout
          ==================================================================== */}
      <nav
        className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-[900] w-[92%] sm:w-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
        aria-label="Floating Navigation"
      >
        <div className="relative flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#090715]/75 backdrop-blur-2xl border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(124,58,237,0.18)]">
          {/* Subtle top inner edge highlight for realistic glass depth */}
          <div
            className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Left: Compact Studio Logotype */}
          <Link
            href="#home"
            className="flex items-baseline text-[14px] sm:text-[15px] font-bold tracking-tight uppercase text-white hover:text-purple-200 transition-colors pl-1 no-underline shrink-0"
            title="YOUR STUDIO"
          >
            <span>YOUR STUDIO</span>
            <span className="text-[var(--studio-accent-soft)] text-[16px] leading-none ml-[1px]">
              .
            </span>
          </Link>

          {/* Center: Segmented Floating Track Navigation (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.06]">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 no-underline cursor-pointer ${
                    isActive
                      ? "bg-white/[0.12] text-white shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Pill CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-zinc-950 hover:bg-purple-100 text-[12px] sm:text-[12.5px] font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md hover:shadow-lg transition-all group cursor-pointer shrink-0"
              aria-label="Start a project"
            >
              <span>Start a project</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex flex-col justify-center gap-[4px] w-8 h-8 p-1 border-none bg-white/[0.06] hover:bg-white/[0.12] rounded-full cursor-pointer items-center transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <span className="block w-4 h-[1.5px] bg-white rounded-full" />
              <span className="block w-4 h-[1.5px] bg-white rounded-full" />
              <span className="block w-4 h-[1.5px] bg-white rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* ====================================================================
          FULL-SCREEN MOBILE NAVIGATION DRAWER
          ==================================================================== */}
      <div
        className={`fixed inset-0 bg-[#090715]/95 backdrop-blur-2xl z-[1000] flex flex-col p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-start">
            <div className="text-[20px] font-bold uppercase text-[var(--studio-ink)] inline-flex items-baseline">
              YOUR STUDIO<span className="text-[var(--studio-accent-soft)] text-2xl ml-[1px]">.</span>
            </div>
            <span className="text-[9px] font-medium tracking-[0.24em] uppercase text-[var(--studio-accent-soft)]/80 mt-0.5">
              CREATIVE DIGITAL AGENCY
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-[var(--studio-ink)] p-2 bg-white/[0.06] rounded-full border-none cursor-pointer hover:bg-white/[0.12] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 list-none p-0 m-0">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[28px] sm:text-[32px] font-medium text-[var(--studio-ink)]/80 hover:text-white hover:translate-x-2 transition-all flex items-center justify-between no-underline"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={24} className="text-[var(--studio-accent-soft)] opacity-60" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2.5 bg-white text-zinc-950 text-[15px] font-semibold p-3.5 rounded-full border-none cursor-pointer hover:bg-purple-100 transition-all shadow-xl"
          >
            <span>Start a project</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
}

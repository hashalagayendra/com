"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear smoothly once user scrolls down past the initial hero view
      setScrolled(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
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
    <nav
      className={`fixed top-0 left-0 w-full z-[900] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto bg-[#0a0814]/65 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-label="Sticky Navigation"
    >
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Logo with Tagline underneath (Exact match with Hero section) */}
        <div className="flex flex-col items-start">
          <Link
            href="#home"
            className="text-[19px] sm:text-[20px] font-bold tracking-[-0.015em] uppercase text-[var(--studio-ink)] inline-flex items-baseline no-underline hover:opacity-90 transition-opacity"
            title="YOUR STUDIO"
          >
            YOUR STUDIO
            <span className="text-[var(--studio-accent-soft)] text-[22px] sm:text-[24px] leading-none ml-[1.5px] inline-block drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]">
              .
            </span>
          </Link>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.24em] uppercase text-[var(--studio-accent-soft)]/80 mt-0.5 block">
            CREATIVE DIGITAL AGENCY
          </span>
        </div>

        {/* Center Nav Links (Exact match with Hero navigation) */}
        <nav aria-label="Header Navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-11 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-[13px] lg:text-[13.5px] font-normal text-[var(--studio-ink)]/75 hover:text-[var(--studio-ink)] transition-colors tracking-normal no-underline block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Pill Button + Hamburger Menu (Exact match with Hero header) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-[var(--studio-light-background)] text-[var(--studio-background)] text-[12.5px] sm:text-[13px] font-medium tracking-normal px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-none shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:bg-[var(--studio-tint)] transition-all group cursor-pointer"
            id="nav-start-project-btn"
            aria-label="Start a project"
          >
            <span>Start a project</span>
            <span
              className="text-[14px] font-medium inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </button>

          {/* 3-bar Hamburger Icon (identical to Hero header) */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-col justify-center gap-[4.5px] w-8 h-8 p-1 border-none bg-transparent rounded ml-0.5 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Open mobile navigation menu"
          >
            <span className="block w-5 h-[1.5px] bg-[var(--studio-light-background)] rounded-full" />
            <span className="block w-5 h-[1.5px] bg-[var(--studio-light-background)] rounded-full" />
            <span className="block w-5 h-[1.5px] bg-[var(--studio-light-background)] rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with frosted blur backdrop */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a0814]/95 backdrop-blur-2xl z-[1000] flex flex-col p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
            className="text-[var(--studio-ink)] p-2 bg-transparent border-none cursor-pointer hover:text-[var(--studio-accent-soft)] transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 list-none p-0 m-0">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[28px] sm:text-[32px] font-medium text-[var(--studio-ink)]/80 hover:text-[var(--studio-accent-soft)] hover:translate-x-2 transition-all flex items-center justify-between no-underline"
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
            className="w-full flex items-center justify-center gap-2.5 bg-[var(--studio-light-background)] text-[var(--studio-background)] text-[15px] font-medium p-3.5 rounded-full border-none cursor-pointer hover:bg-[var(--studio-tint)] transition-all shadow-lg"
          >
            <span>Start a project</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

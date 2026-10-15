"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user scrolls down past the hero
      setScrolled(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#about" },
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
      className={`fixed top-0 left-0 w-full z-[900] transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto bg-[var(--studio-background)] backdrop-blur-xl border-b border-[var(--studio-accent-soft)]/25 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-label="Sticky Navigation"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 flex items-center justify-between h-[72px]">
        <Link
          href="#home"
          className="text-[19px] font-extrabold tracking-tight uppercase text-[var(--studio-ink)] inline-flex items-baseline no-underline hover:opacity-85 transition-opacity"
        >
          YOUR STUDIO
          <span className="text-[var(--studio-accent-soft)] text-[22px] leading-none ml-[1px] drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]">
            .
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-[var(--studio-ink)]/80 hover:text-[var(--studio-ink)] text-[14px] font-medium tracking-tight transition-colors py-1.5 no-underline block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-[var(--studio-accent)] text-[var(--studio-ink)] text-[13px] font-semibold px-4 py-2 rounded-full border-none cursor-pointer shadow-md hover:bg-[var(--studio-ink)] hover:text-[var(--studio-background)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-all group"
            id="nav-contact-btn"
          >
            <span>Start a project</span>
            <span className="text-[14px] font-bold inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden bg-transparent border-none text-[var(--studio-ink)] p-2 cursor-pointer flex items-center justify-center hover:text-[var(--studio-accent-soft)] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Pure Tailwind) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--studio-background)] z-[1000] flex flex-col p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <div className="text-[20px] font-extrabold uppercase text-[var(--studio-ink)]">
            YOUR STUDIO<span className="text-[var(--studio-accent-soft)] text-2xl">.</span>
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
                className="text-[32px] font-semibold text-[var(--studio-ink)]/80 hover:text-[var(--studio-accent-soft)] hover:translate-x-2 transition-all flex items-center justify-between no-underline"
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
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2.5 bg-[var(--studio-ink)] text-[var(--studio-background)] text-[15px] font-semibold p-3.5 rounded-full border-none cursor-pointer hover:bg-[var(--studio-tint)] transition-all"
          >
            <span>Start a project</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onShowToast?: (message: string) => void;
  onOpenContact?: () => void;
}

export default function Hero(_props?: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] bg-[#080410] text-white flex flex-col justify-between overflow-hidden select-none"
      id="home"
    >
      {/* 3D Background Artwork with exact position and scale */}
      <div
        className="absolute inset-0 bg-[url('/images/hero-purple-sphere.jpg')] bg-cover bg-[center_46%] bg-no-repeat z-[1]"
        aria-hidden="true"
      />

      {/* Gray overlay on top of image */}
      <div
        className="absolute inset-0 bg-gray-950/40 z-[2] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top gradient overlay for navbar legibility */}
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-950/75 via-gray-950/30 to-transparent z-[3] pointer-events-none"
        aria-hidden="true"
      />



      {/* ====================================================================
          TOP NAVIGATION HEADER (Aligned with the outer grid)
          ==================================================================== */}
      <header className="relative z-40 w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-8 pb-3 sm:pb-4 flex-shrink-0 flex items-center justify-between">
        {/* Brand Logo with Tagline underneath: YOUR STUDIO. / CREATIVE DIGITAL AGENCY */}
        <div className="flex flex-col items-start">
          <a
            href="#home"
            className="text-[19px] sm:text-[20px] font-bold tracking-[-0.015em] uppercase text-white inline-flex items-baseline no-underline hover:opacity-90 transition-opacity"
            title="YOUR STUDIO"
          >
            YOUR STUDIO
            <span className="text-[#a855f7] text-[22px] sm:text-[24px] leading-none ml-[1.5px] inline-block drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
              .
            </span>
          </a>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.24em] uppercase text-[#c4b5fd]/80 mt-1 block">
            CREATIVE DIGITAL AGENCY
          </span>
        </div>

        {/* Center Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-11 list-none m-0 p-0">
            <li>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("work");
                }}
                className="text-[13px] lg:text-[13.5px] font-normal text-white/75 hover:text-white transition-colors tracking-normal no-underline"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("services");
                }}
                className="text-[13px] lg:text-[13.5px] font-normal text-white/75 hover:text-white transition-colors tracking-normal no-underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("about");
                }}
                className="text-[13px] lg:text-[13.5px] font-normal text-white/75 hover:text-white transition-colors tracking-normal no-underline"
              >
                Studio
              </a>
            </li>
            <li>
              <a
                href="#clients"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("clients");
                }}
                className="text-[13px] lg:text-[13.5px] font-normal text-white/75 hover:text-white transition-colors tracking-normal no-underline"
              >
                Journal
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("contact");
                }}
                className="text-[13px] lg:text-[13.5px] font-normal text-white/75 hover:text-white transition-colors tracking-normal no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Pill Button (Non-functional as requested) + Hamburger Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-white text-[#0c0814] text-[12.5px] sm:text-[13px] font-medium tracking-normal px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-none shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:bg-[#f3e8ff] transition-all group cursor-default"
            id="hero-start-project-btn"
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

          <button
            type="button"
            className="flex flex-col justify-center gap-[4.5px] w-8 h-8 p-1 border-none bg-transparent rounded ml-0.5 cursor-default"
            aria-label="Navigation menu"
          >
            <span className="block w-5 h-[1.5px] bg-white rounded-full" />
            <span className="block w-5 h-[1.5px] bg-white rounded-full" />
            <span className="block w-5 h-[1.5px] bg-white rounded-full" />
          </button>
        </div>
      </header>

      {/* ====================================================================
          HERO MAIN CONTENT (Elevated Position, Bolder Fluid Typography)
          ==================================================================== */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 flex-1 flex items-center justify-start -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 py-4">
        <div className="max-w-[740px] w-full text-left">
          {/* Headline: Lifted up, bolder weight (font-medium sm:font-semibold), single-line Creative ideas */}
          <h1 className="text-[34px] sm:text-[48px] md:text-[62px] lg:text-[74px] xl:text-[82px] font-medium sm:font-semibold leading-[1.05] tracking-[-0.025em] text-white m-0 flex flex-col">
            <span className="block text-white whitespace-nowrap">Creative ideas</span>
            <span className="block text-white">
              built to{" "}
              <span className="text-[#c4b5fd] drop-shadow-[0_0_30px_rgba(196,181,253,0.35)]">
                stand out
              </span>
            </span>
          </h1>

          {/* Subtitle / Mission Description */}
          <p className="text-[14.5px] sm:text-[16px] lg:text-[16.5px] leading-[1.65] text-slate-200/90 mt-5 sm:mt-7 max-w-[460px] font-normal sm:font-medium tracking-normal text-balance">
            We design brands, websites, 3D visuals and digital campaigns that make a real impact.
          </p>

          {/* Explore our work button (Circular arrow + text label) */}
          <button
            onClick={() => handleScrollTo("work")}
            className="inline-flex items-center gap-3.5 sm:gap-4 mt-7 sm:mt-9 lg:mt-10 group bg-transparent border-none cursor-pointer p-0 text-left transition-transform duration-200 hover:translate-x-1"
            aria-label="Explore our work"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/35 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white/10 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <ArrowRight
                size={16}
                className="text-white/90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                strokeWidth={1.75}
              />
            </div>
            <span className="text-[13.5px] sm:text-[14.5px] font-medium text-white/90 tracking-[0.015em] transition-colors duration-300 group-hover:text-white">
              Explore our work
            </span>
          </button>
        </div>
      </div>

      {/* ====================================================================
          RIGHT VERTICAL SLIDER INDICATOR (01, vertical track, 02, 03, 04)
          ==================================================================== */}
      <aside
        className="absolute right-6 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-2"
        aria-label="Slide Indicator"
      >
        <span className="text-[11px] font-medium text-white/95 tabular-nums">
          01
        </span>

        {/* Vertical Track with Active White Indicator */}
        <div className="w-[1.5px] h-9 bg-white/20 relative rounded-full overflow-hidden my-0.5">
          <div className="absolute top-0 left-0 w-full h-full bg-white shadow-[0_0_8px_#ffffff]" />
        </div>

        <span className="text-[11px] font-medium text-white/40 tabular-nums">
          02
        </span>
        <span className="text-[11px] font-medium text-white/40 tabular-nums">
          03
        </span>
        <span className="text-[11px] font-medium text-white/40 tabular-nums">
          04
        </span>
      </aside>

      {/* ====================================================================
          HERO BOTTOM SUB-BAR (SCROLL | on left, BRANDS / WEBSITES... on right)
          ==================================================================== */}
      <footer className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-6 sm:pb-8 flex-shrink-0 flex items-center justify-between">
        {/* Left: SCROLL indicator */}
        <button
          onClick={() => handleScrollTo("about")}
          className="inline-flex items-center bg-transparent border-none cursor-pointer p-0 text-white/55 hover:text-white transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-[9.5px] sm:text-[10px] font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase">
            SCROLL
          </span>
          <div className="w-[1px] h-4 sm:h-5 bg-white/30 ml-2.5 sm:ml-3 relative overflow-hidden">
            <div className="w-full h-2 sm:h-2.5 bg-white shadow-[0_0_6px_#ffffff] animate-bounce" />
          </div>
        </button>

        {/* Right: BRANDS / WEBSITES / 3D / MARKETING */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#a78bfa]">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("work");
            }}
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all no-underline text-[#a78bfa]"
          >
            BRANDS
          </a>
          <span className="text-white/30 font-normal px-0.5">/</span>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("services");
            }}
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all no-underline text-[#a78bfa]"
          >
            WEBSITES
          </a>
          <span className="text-white/30 font-normal px-0.5">/</span>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("services");
            }}
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all no-underline text-[#a78bfa]"
          >
            3D
          </a>
          <span className="text-white/30 font-normal px-0.5">/</span>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("services");
            }}
            className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all no-underline text-[#a78bfa]"
          >
            MARKETING
          </a>
        </div>
      </footer>

    </section>
  );
}

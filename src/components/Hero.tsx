"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import "../styles/hero.css";

interface HeroProps {
  onShowToast: (message: string) => void;
}

export default function Hero({ onShowToast }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const email = "holla@wearebou.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    onShowToast(`Copied ${email} to clipboard!`);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Cinematic ambient dynamic glow */}
      <div className="hero-ambient-glow" />
      <div className="hero-ambient-secondary" />

      <div className="hero-content">
        <h1 className="hero-headline">
          Bou is a brand company working across marketing, design, communications &amp; PR, and web development.
        </h1>

        <div className="hero-dock">
          <button
            onClick={() => scrollToSection("helsinki-office")}
            className="hero-city-tag"
            title="View Helsinki Studio"
          >
            HELSINKI
          </button>
          <button
            onClick={() => scrollToSection("london-office")}
            className="hero-city-tag"
            title="View London Studio"
          >
            LONDON
          </button>
          
          <div className="hero-dock-divider" />

          <button
            onClick={handleCopy}
            className="hero-email-btn"
            title="Click to copy email"
          >
            <span>{email}</span>
            <span className="copy-hint">
              {copied ? <Check size={14} color="#52E09B" /> : <Copy size={13} />}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

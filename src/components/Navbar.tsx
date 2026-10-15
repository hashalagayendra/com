"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BouLogo from "./BouLogo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "../styles/navbar.css";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers", indicator: true },
    { label: "Bou & Co.", href: "#bou-and-co" },
  ];

  return (
    <nav className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand">
          <BouLogo height={32} />
        </Link>

        <ul className="navbar-links">
          {navLinks.map((item) => (
            <li key={item.label} className="nav-item">
              <a
                href={item.href}
                className={`nav-link ${item.indicator ? "has-indicator" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            onClick={onOpenContact}
            className="btn-nav-contact"
            id="nav-contact-btn"
          >
            <span>Contact</span>
            <div className="contact-circle">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </div>
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-toggle-btn"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <BouLogo height={32} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ color: "#FFFFFF", padding: "8px" }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={24} opacity={0.5} />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "32px" }}>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="btn-pill btn-pill-dark"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <span>Start a project</span>
            <div className="icon-circle">
              <ArrowUpRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

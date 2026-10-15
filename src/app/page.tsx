"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import CaseModal from "@/components/CaseModal";
import Services from "@/components/Services";
import GlobalPresence from "@/components/GlobalPresence";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import type { CaseStudy } from "@/types/caseStudy";
import { FEATURED_PROJECTS } from "@/data/featuredProjects";
import { CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactCity, setContactCity] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenContact = (city?: string) => {
    setContactCity(city);
    setContactOpen(true);
  };

  const handleSelectCaseById = (id: string) => {
    const found = FEATURED_PROJECTS.find((c) => c.id === id);
    if (found) {
      setSelectedCase(found);
    }
  };

  const handleOpenBouCo = () => {
    const el = document.getElementById("bou-and-co");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Sticky Navigation Bar (appears on scroll) */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Cinematic Studio Hero (Exact reference match) */}
      <Hero onShowToast={showToast} onOpenContact={() => handleOpenContact()} />

      {/* Featured creative concepts */}
      <SelectedWork onSelectCase={setSelectedCase} />

      {/* All-In-One Services & NPS */}
      <Services onOpenContact={() => handleOpenContact()} />

      {/* Global Locations & Real-time Live Clocks */}
      <GlobalPresence onOpenBouCo={handleOpenBouCo} />

      {/* Footer with Comprehensive Sitemap & Inquiry Bar */}
      <Footer
        onOpenContact={(dept) => handleOpenContact(dept)}
        onSelectCaseById={handleSelectCaseById}
      />

      {/* Interactive Case Study Detail Modal */}
      <CaseModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />

      {/* Interactive Contact Drawer / Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultCity={contactCity}
        onSuccessToast={showToast}
      />

      {/* Global Floating Toast (Pure Tailwind) */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0f1417] text-white px-6 py-3 rounded-full text-[14px] font-semibold shadow-2xl z-[9999] flex items-center gap-2.5 transition-all duration-300 pointer-events-none ${
          toastMessage ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <CheckCircle2 size={18} className="text-emerald-400" />
        <span>{toastMessage}</span>
      </div>
    </main>
  );
}

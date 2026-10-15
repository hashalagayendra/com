"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import CaseStudies from "@/components/CaseStudies";
import CaseModal from "@/components/CaseModal";
import ClientsMatrix from "@/components/ClientsMatrix";
import Services from "@/components/Services";
import GlobalPresence from "@/components/GlobalPresence";
import ContactCallout from "@/components/ContactCallout";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { CASE_STUDIES, CaseStudy } from "@/data/cases";
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
    const found = CASE_STUDIES.find((c) => c.id === id);
    if (found) {
      setSelectedCase(found);
    }
  };

  const handleOpenAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Cinematic Dark Hero */}
      <Hero onShowToast={showToast} />

      {/* Editorial Benchmark Agency Statement */}
      <Statement onOpenAbout={handleOpenAbout} />

      {/* Featured Case Studies Grid */}
      <CaseStudies onSelectCase={(c) => setSelectedCase(c)} />

      {/* 200+ Brands & Client Testimonials Matrix */}
      <ClientsMatrix onSelectCaseById={handleSelectCaseById} />

      {/* All-In-One Services & NPS */}
      <Services onOpenContact={() => handleOpenContact()} />

      {/* Global Locations & Real-time Live Clocks */}
      <GlobalPresence onOpenBouCo={handleOpenBouCo} />

      {/* Pre-Footer Office Hubs */}
      <ContactCallout onOpenContact={(city) => handleOpenContact(city)} />

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

      {/* Global Floating Toast */}
      <div className={`toast-notice ${toastMessage ? "show" : ""}`}>
        <CheckCircle2 size={18} color="#52E09B" />
        <span>{toastMessage}</span>
      </div>
    </main>
  );
}

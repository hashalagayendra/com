"use client";

import React, { useState } from "react";
import { Plus, Info, ArrowUpRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/services";
import "../styles/services.css";

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const [activeId, setActiveId] = useState<string | null>("marketing");
  const [showNpsInfo, setShowNpsInfo] = useState(false);

  const toggleService = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-layout">
          {/* Left Column */}
          <div className="services-left">
            <h2 className="services-headline">
              We build brands across marketing, design, communications &amp; PR, and web development.
            </h2>
            <p className="services-copy">
              Because it simply makes so much sense to offer them all in one. Less proposal requests and project
              management for you, more ways to get creative for us.
            </p>

            <div className="nps-interactive-wrapper">
              <button
                onClick={() => setShowNpsInfo(!showNpsInfo)}
                className="nps-pill"
                aria-label="Toggle NPS details"
              >
                <Info size={15} />
                <span>All-time NPS of 68</span>
              </button>

              {showNpsInfo && (
                <div className="nps-popover">
                  <h4 className="nps-popover-title">Net Promoter Score (NPS)</h4>
                  <p>
                    NPS is a globally recognized metric evaluating client advocacy and loyalty. A score of 68 places Bou
                    among the world's top 1% of agency partners in client satisfaction.
                  </p>
                  <p className="nps-popover-meta">Based on independent quarterly audits. Last updated: 08/2026.</p>
                </div>
              )}
            </div>

            <div style={{ marginTop: "12px" }}>
              <button onClick={onOpenContact} className="btn-pill btn-pill-light">
                <span>Start a conversation</span>
                <div className="icon-circle">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="services-list">
            {SERVICES_LIST.map((service) => {
              const isOpen = activeId === service.id;
              return (
                <div
                  key={service.id}
                  className={`service-accordion-item ${isOpen ? "active" : ""}`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="service-item-header">
                    <h3 className="service-item-name">{service.name}</h3>
                    <div className="service-item-icon">
                      <Plus size={18} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="service-item-body">
                      <p className="service-item-desc">{service.description}</p>
                      <div className="service-capabilities-list">
                        {service.capabilities.map((cap) => (
                          <span key={cap} className="capability-pill">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Plus, Info, ArrowUpRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/services";

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
    <section className="bg-white py-24 md:py-32" id="services">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-bold leading-[1.15] tracking-tight text-[#0f1417] mb-6">
              We build brands across marketing, design, communications &amp; PR, and web development.
            </h2>
            <p className="text-[17px] text-[#57656c] leading-relaxed mb-8 max-w-[540px]">
              Because it simply makes so much sense to offer them all in one. Less proposal requests and project
              management for you, more ways to get creative for us.
            </p>

            <div className="relative inline-block mb-8">
              <button
                onClick={() => setShowNpsInfo(!showNpsInfo)}
                className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#eaefec] hover:bg-[#dee4e0] text-[#2d393e] transition-all cursor-pointer"
                aria-label="Toggle NPS details"
              >
                <Info size={15} />
                <span>All-time NPS of 68</span>
              </button>

              {showNpsInfo && (
                <div className="absolute top-full left-0 mt-3 w-80 p-5 rounded-2xl bg-[#0f1417] text-white shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-200">
                  <h4 className="text-[14px] font-bold text-white mb-2">Net Promoter Score (NPS)</h4>
                  <p className="text-[12.5px] text-slate-300 leading-relaxed mb-3">
                    NPS is a globally recognized metric evaluating client advocacy and loyalty. A score of 68 places Bou
                    among the world&apos;s top 1% of agency partners in client satisfaction.
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Based on independent quarterly audits. Last updated: 08/2026.
                  </p>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 bg-[#0f1417] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[#232b30] hover:-translate-y-0.5 transition-all shadow-md group cursor-pointer"
              >
                <span>Start a conversation</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#0f1417] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-4">
            {SERVICES_LIST.map((service) => {
              const isOpen = activeId === service.id;
              return (
                <div
                  key={service.id}
                  className={`border rounded-2xl transition-all cursor-pointer ${
                    isOpen
                      ? "border-[#0f1417] bg-[#f4f6f5] shadow-sm"
                      : "border-[#e2e6e4] bg-white hover:border-[#cbd2ce]"
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#0f1417]">
                      {service.name}
                    </h3>
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#0f1417] text-white border-[#0f1417]"
                          : "border-[#cbd2ce] text-[#0f1417] hover:border-[#0f1417]"
                      }`}
                    >
                      <Plus size={18} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 animate-in fade-in duration-200">
                      <p className="text-[15.5px] text-[#57656c] leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-[11.5px] font-medium px-3 py-1.5 rounded-full bg-white border border-[#e2e6e4] text-[#2d393e]"
                          >
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

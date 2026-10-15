"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface StatementProps {
  onOpenAbout: () => void;
}

export default function Statement({ onOpenAbout }: StatementProps) {
  return (
    <section
      className="relative bg-[#f4f6f5] text-[#0f1417] py-24 md:py-36 px-6 md:px-8 rounded-t-[36px] md:rounded-t-[44px] -mt-9 z-10 text-center"
      id="about"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="max-w-[920px] mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[62px] font-medium leading-[1.2] tracking-[-0.03em] text-[#111619] mb-10 text-balance">
            We’re building a <strong className="font-extrabold text-black">benchmark agency</strong> to make the creative industry even more creative
          </h2>

          <div className="flex items-center justify-center mb-6">
            <button
              onClick={onOpenAbout}
              className="inline-flex items-center gap-2.5 bg-[#0f1417] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[#232b30] hover:-translate-y-0.5 transition-all shadow-md group cursor-pointer"
              id="statement-about-btn"
            >
              <span>About us</span>
              <div className="w-7 h-7 rounded-full bg-white text-[#0f1417] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

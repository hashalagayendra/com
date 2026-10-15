"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { OFFICES } from "@/data/offices";

interface ContactCalloutProps {
  onOpenContact: (city?: string) => void;
}

export default function ContactCallout({ onOpenContact }: ContactCalloutProps) {
  return (
    <section className="bg-[#f4f6f5] py-20 md:py-28" id="contact">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-bold leading-[1.15] tracking-tight text-[#0f1417]">
              They say no one reads the footer. Ha! Want to{" "}
              <span
                className="underline underline-offset-8 cursor-pointer hover:text-purple-600 transition-colors"
                onClick={() => onOpenContact()}
                role="button"
                tabIndex={0}
              >
                talk
              </span>
              ?
            </h2>
          </div>

          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="bg-white rounded-3xl overflow-hidden border border-[#e2e6e4] shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] bg-[#e2e6e4]">
                <Image
                  src={office.image}
                  alt={`${office.city} Studio Office`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[22px] font-bold tracking-tight text-[#0f1417] mb-2">
                    {office.city}
                  </h3>
                  <p className="text-[14px] text-[#57656c] leading-relaxed mb-6">
                    {office.address}
                    <br />
                    {office.postal}
                  </p>
                </div>
                <button
                  onClick={() => onOpenContact(office.city)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold uppercase tracking-wider text-[#0f1417] hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

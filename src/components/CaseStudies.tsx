"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/cases";

interface CaseStudiesProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export default function CaseStudies({ onSelectCase }: CaseStudiesProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Branding",
    "Design",
    "Marketing",
    "Web Development",
    "PR & Communications",
  ];

  const filteredCases =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) =>
          c.categories.some((cat) => cat.toLowerCase() === activeFilter.toLowerCase())
        );

  return (
    <section className="bg-[#f4f6f5] py-20 md:pb-28" id="work">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex items-center gap-2.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all border border-transparent cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#0f1417] text-white"
                    : "bg-[#eaefec] text-[#4a585f] hover:bg-[#dee4e0] hover:text-[#0f1417]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-7">
          {filteredCases.map((project) => (
            <article
              key={project.id}
              className="flex flex-col cursor-pointer group"
              onClick={() => onSelectCase(project)}
            >
              <div className="relative w-full aspect-[16/9.5] rounded-2xl overflow-hidden bg-[#e2e6e4] mb-5 shadow-sm group-hover:shadow-xl transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-3.5 right-3.5 bg-[#0f1417]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  View Case Study
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-bold tracking-tight text-[#0f1417] flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-[15px] text-[#57656c] leading-relaxed min-h-[42px]">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-2 flex-wrap mt-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#eaefec] text-[#4a585f]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setActiveFilter("All")}
            className="inline-flex items-center gap-2.5 bg-[#0f1417] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[#232b30] hover:-translate-y-0.5 transition-all shadow-md group cursor-pointer"
          >
            <span>More work</span>
            <div className="w-7 h-7 rounded-full bg-white text-[#0f1417] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

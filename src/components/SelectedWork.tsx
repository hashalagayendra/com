"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import type { CaseStudy } from "@/types/caseStudy";
import { FEATURED_PROJECTS, type FeaturedProject } from "@/data/featuredProjects";

interface SelectedWorkProps {
  onSelectCase: (project: CaseStudy) => void;
}

export default function SelectedWork({ onSelectCase }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [showFilterPills, setShowFilterPills] = useState<boolean>(false);

  const categories = ["ALL", "BRAND IDENTITY", "WEB DESIGN", "3D VISUALIZATION", "DIGITAL MARKETING"];

  const filteredProjects = activeFilter === "ALL"
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.service.toUpperCase() === activeFilter);

  const handleToggleViewAll = () => {
    setShowFilterPills((prev) => !prev);
    if (showFilterPills) {
      setActiveFilter("ALL");
    }
  };

  return (
    <section
      id="work"
      className="relative w-full bg-[#0a0814] text-white py-[clamp(44px,4.2vw,68px)] overflow-hidden scroll-mt-20 selection:bg-purple-600 selection:text-white"
      aria-labelledby="selected-projects-heading"
    >
      {/* Ambient background glow for cinematic purple depth */}
      <div
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-indigo-900/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-[7.2%]">
        {/* ====================================================================
            SECTION HEADER
            Left: FEATURED WORK + Selected Projects.
            Right: Description paragraph + "View all work ->" pill button
            ==================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8">
          {/* Left Title Block */}
          <div className="flex flex-col">
            <span className="studio-label text-[10px] text-[#9e94b8] mb-3 block">
              FEATURED WORK
            </span>
            <h2
              id="selected-projects-heading"
              className="studio-heading text-[length:var(--studio-section-title-size)] text-white"
            >
              Selected
              <br className="hidden sm:inline" />
              {" "}Projects.
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 lg:gap-10">
            <p className="studio-copy text-[clamp(13px,1.16vw,16px)] text-[#a49db7] max-w-[340px]">
              A showcase of our latest work across branding, web design, 3D visualization and digital marketing.
            </p>

            <button
              type="button"
              onClick={handleToggleViewAll}
              className={`studio-action text-[13px] inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border transition-all duration-300 self-start sm:self-center shrink-0 cursor-pointer group ${
                showFilterPills
                  ? "bg-purple-600/20 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  : "border-white/20 text-white hover:border-white/40 hover:bg-white/[0.06]"
              }`}
              aria-label="View all work"
            >
              <span>{showFilterPills ? "Filter projects" : "View all work"}</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300 text-white/80 group-hover:text-white"
              />
            </button>
          </div>
        </div>

        {/* Optional Filter Pills (expands when user clicks "View all work") */}
        {showFilterPills && (
          <div className="flex items-center gap-2 pt-6 pb-2 overflow-x-auto scrollbar-none animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="studio-label text-[10px] text-purple-300/80 mr-2 flex items-center gap-1.5 shrink-0">
              <Sparkles size={12} />
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`studio-action px-3.5 py-1.5 rounded-full text-[12px] transition-all cursor-pointer shrink-0 ${
                  activeFilter === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                    : "bg-white/[0.05] text-zinc-300 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* ====================================================================
            PROJECTS GRID (4 Columns on Desktop matching exact reference)
            01 Luma Skincare      BRAND IDENTITY
            02 Travel Tube        WEB DESIGN
            03 Interior Concepts  3D VISUALIZATION
            04 Solera             DIGITAL MARKETING
            ==================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 pt-5 sm:pt-6">
          {filteredProjects.map((project: FeaturedProject) => (
            <div
              key={project.id}
              onClick={() => onSelectCase(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectCase(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View case study: ${project.title}`}
              className="group flex flex-col text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0814] rounded-2xl"
            >
              {/* Image Container with 4:3 Aspect Ratio, rounded corners, and Number overlay */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08] group-hover:border-purple-500/40 transition-colors duration-500 shadow-xl group-hover:shadow-[0_12px_32px_rgba(124,58,237,0.18)]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={project.number === "01" || project.number === "02"}
                />

                {/* Subtle dark gradient overlay to ensure badge legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Number Badge (01, 02, 03, 04) matching other sections' number style */}
                <span className="studio-heading tabular-nums text-[clamp(15px,1.4vw,20px)] absolute top-3.5 left-4 sm:top-4 sm:left-5 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] select-none">
                  {project.number}
                </span>

                {/* Subtle violet shimmer on hover */}
                <div
                  className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Project Details Below Image */}
              <div className="mt-3.5 px-0.5 flex items-center justify-between">
                <div className="flex flex-col min-w-0 pr-3">
                  <h3 className="studio-heading text-[clamp(14px,1.25vw,18px)] text-white group-hover:text-purple-300 transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="studio-label text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors mt-1 truncate block">
                    {project.service}
                  </span>
                </div>

                {/* Arrow Icon with Hover Animation */}
                <span
                  className="text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 shrink-0 inline-flex items-center justify-center"
                  aria-hidden="true"
                >
                  <ArrowRight size={17} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

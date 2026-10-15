"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/cases";
import "../styles/cases.css";

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
    <section className="cases-section" id="work">
      <div className="container">
        <div className="cases-header">
          <div className="cases-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cases-filter-btn ${activeFilter === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="cases-grid">
          {filteredCases.map((project) => (
            <article
              key={project.id}
              className="case-card"
              onClick={() => onSelectCase(project)}
            >
              <div className="case-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="case-image"
                />
                <span className="case-overlay-pill">View Case Study</span>
              </div>

              <div className="case-meta">
                <h3 className="case-title">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} opacity={0.4} />
                </h3>
                <p className="case-tagline">{project.tagline}</p>
                <div className="case-tags">
                  {project.categories.map((cat) => (
                    <span key={cat} className="case-tag-pill">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cases-footer-action">
          <button
            onClick={() => setActiveFilter("All")}
            className="btn-pill btn-pill-light"
          >
            <span>More work</span>
            <div className="icon-circle">
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

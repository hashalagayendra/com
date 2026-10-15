"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import { CaseStudy } from "@/data/cases";
import "../styles/case-modal.css";

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseModal({ caseStudy, onClose }: CaseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="case-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="case-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="case-modal-close"
          aria-label="Close project view"
        >
          <X size={20} />
        </button>

        <div className="case-modal-media">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="case-modal-body">
          <div className="case-modal-header">
            <div className="case-modal-topline">
              <span>{caseStudy.client}</span>
              <span>{caseStudy.year}</span>
            </div>
            <h2 className="case-modal-title">{caseStudy.title}</h2>
            <p className="case-modal-tagline">{caseStudy.tagline}</p>
            <div className="case-tags">
              {caseStudy.categories.map((cat) => (
                <span key={cat} className="case-tag-pill">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="case-modal-grid">
            <div>
              <h3 className="case-section-title">The Overview</h3>
              <p className="case-narrative">{caseStudy.overview}</p>

              <h3 className="case-section-title">The Challenge</h3>
              <p className="case-narrative">{caseStudy.challenge}</p>

              <h3 className="case-section-title">The Solution</h3>
              <p className="case-narrative">{caseStudy.solution}</p>

              {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                <div>
                  <h3 className="case-section-title">Impact &amp; Results</h3>
                  <div className="case-metrics-grid">
                    {caseStudy.metrics.map((m) => (
                      <div key={m.label} className="metric-card">
                        <span className="metric-value">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="case-section-title">Deliverables</h3>
              <ul className="case-deliverables-list" style={{ marginBottom: "32px" }}>
                {caseStudy.deliverables.map((item) => (
                  <li key={item} className="case-deliverable-item">
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {caseStudy.quote && (
                <div className="case-quote-box">
                  <p className="case-quote-text">“{caseStudy.quote.text}”</p>
                  <p className="case-quote-author">{caseStudy.quote.author}</p>
                  <p className="case-quote-role">{caseStudy.quote.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

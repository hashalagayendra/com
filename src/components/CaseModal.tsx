"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/types/caseStudy";

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
    <div
      className="fixed inset-0 bg-[var(--studio-background)]/80 backdrop-blur-md z-[1000] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[920px] max-h-[92vh] bg-[var(--studio-ink)] rounded-3xl overflow-y-auto shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[var(--studio-background)]/70 backdrop-blur-md text-[var(--studio-ink)] flex items-center justify-center hover:bg-[var(--studio-background)] transition-all cursor-pointer"
          aria-label="Close project view"
        >
          <X size={20} />
        </button>

        <div className="relative w-full aspect-[16/9] bg-[var(--studio-tint)]">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="p-6 md:p-10 text-[var(--studio-background)]">
          <div className="mb-8 pb-6 border-b border-[var(--studio-border)]">
            <div className="flex items-center gap-3 text-[12px] studio-label text-[var(--studio-muted)] mb-2">
              <span>{caseStudy.client}</span>
              <span>&bull;</span>
              <span>{caseStudy.year}</span>
            </div>
            <h2 className="text-[28px] md:text-[38px] studio-heading text-[var(--studio-background)]">
              {caseStudy.title}
            </h2>
            <p className="studio-copy text-[17px] text-[var(--studio-muted)] mt-2 mb-4">
              {caseStudy.tagline}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {caseStudy.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] studio-label px-2.5 py-1 rounded-full bg-[var(--studio-tint)] text-[var(--studio-muted)]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10">
            <div>
              <h3 className="text-[13px] studio-label text-[var(--studio-accent)] mb-2">
                The Overview
              </h3>
              <p className="studio-copy text-[15.5px] leading-relaxed text-[var(--studio-background)] mb-6">
                {caseStudy.overview}
              </p>

              <h3 className="text-[13px] studio-label text-[var(--studio-accent)] mb-2">
                The Challenge
              </h3>
              <p className="studio-copy text-[15.5px] leading-relaxed text-[var(--studio-background)] mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="text-[13px] studio-label text-[var(--studio-accent)] mb-2">
                The Solution
              </h3>
              <p className="studio-copy text-[15.5px] leading-relaxed text-[var(--studio-background)] mb-6">
                {caseStudy.solution}
              </p>

              {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                <div>
                  <h3 className="text-[13px] studio-label text-[var(--studio-accent)] mb-3">
                    Impact &amp; Results
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {caseStudy.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-xl bg-[var(--studio-tint)] border border-[var(--studio-border)]"
                      >
                        <span className="block text-[24px] studio-heading text-[var(--studio-background)]">
                          {m.value}
                        </span>
                        <span className="block text-[12px] text-[var(--studio-muted)] mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-[13px] studio-label text-[var(--studio-accent)] mb-3">
                Deliverables
              </h3>
              <ul className="flex flex-col gap-2.5 list-none p-0 mb-8">
                {caseStudy.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14.5px] text-[var(--studio-background)]"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {caseStudy.quote && (
                <div className="p-6 rounded-2xl bg-[var(--studio-background)] text-[var(--studio-ink)]">
                  <p className="studio-copy text-[15px] italic leading-relaxed text-[var(--studio-accent-soft)] mb-4">
                    “{caseStudy.quote.text}”
                  </p>
                  <p className="studio-copy text-[13px] font-medium text-[var(--studio-ink)]">
                    {caseStudy.quote.author}
                  </p>
                  <p className="studio-copy text-[11px] text-[var(--studio-accent-soft)]">
                    {caseStudy.quote.role}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

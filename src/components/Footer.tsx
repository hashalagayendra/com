"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/featuredProjects";

interface FooterProps {
  onOpenContact: (department?: string) => void;
  onSelectCaseById: (caseId: string) => void;
}

export default function Footer({ onOpenContact, onSelectCaseById }: FooterProps) {
  return (
    <footer className="bg-[var(--studio-tint)] pt-20 border-t border-[var(--studio-border)] [overflow-wrap:anywhere]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 pb-16">
        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-6">
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--studio-accent)] mb-4 flex items-center justify-between">
              <span>Company</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#home" className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact()}
                  className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--studio-accent)] mb-4 flex items-center justify-between">
              <span>Work</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {FEATURED_PROJECTS.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectCaseById(project.id)}
                    className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                  >
                    {project.client.split(" · ")[0]}
                  </button>
                </li>
              ))}
              <li>
                <a href="#work" className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline">
                  Selected work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[var(--studio-accent)] mb-4">
              <span>Social</span>
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a
                  href="https://www.instagram.com/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[var(--studio-background)] hover:text-[var(--studio-background)] transition-colors no-underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Dark Department Bar */}
      <div className="bg-[var(--studio-background)] text-[var(--studio-ink)] py-12 px-6 md:px-8 border-t border-[var(--studio-ink)]/10">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--studio-accent-soft)] mb-1.5">
                New business
              </span>
              <a href="mailto:holla@wearebou.com" className="text-[14.5px] font-semibold text-[var(--studio-ink)] hover:text-[var(--studio-accent)] transition-colors no-underline">
                holla@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--studio-accent-soft)] mb-1.5">
                PR &amp; Talks
              </span>
              <a href="mailto:press@wearebou.com" className="text-[14.5px] font-semibold text-[var(--studio-ink)] hover:text-[var(--studio-accent)] transition-colors no-underline">
                press@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--studio-accent-soft)] mb-1.5">
                Work inquiries
              </span>
              <a href="mailto:work@wearebou.com" className="text-[14.5px] font-semibold text-[var(--studio-ink)] hover:text-[var(--studio-accent)] transition-colors no-underline">
                work@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--studio-accent-soft)] mb-1.5">
                Invoicing
              </span>
              <span className="text-[14.5px] font-semibold text-[var(--studio-ink)]">
                Apix Messaging
              </span>
            </div>

            <div className="flex flex-col justify-between text-[12px] text-[var(--studio-accent-soft)]">
              <div className="flex items-center gap-4 mb-2">
                <a href="#privacy" className="hover:text-[var(--studio-ink)] transition-colors no-underline">
                  Privacy notice
                </a>
                <a href="#consent" className="hover:text-[var(--studio-ink)] transition-colors no-underline">
                  Edit consent
                </a>
              </div>
              <div>&copy; 2026 YOUR STUDIO. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

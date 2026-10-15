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
    <footer className="bg-white pt-20 border-t border-[#e2e6e4] [overflow-wrap:anywhere]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 pb-16">
        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-6">
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#84939b] mb-4 flex items-center justify-between">
              <span>Company</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#home" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact()}
                  className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#84939b] mb-4 flex items-center justify-between">
              <span>Work</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {FEATURED_PROJECTS.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectCaseById(project.id)}
                    className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors bg-transparent border-none p-0 cursor-pointer text-left"
                  >
                    {project.client.split(" · ")[0]}
                  </button>
                </li>
              ))}
              <li>
                <a href="#work" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Selected work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#84939b] mb-4 flex items-center justify-between">
              <span>Services</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#services" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Communications &amp; PR
                </a>
              </li>
              <li>
                <a href="#services" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  Branding
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#84939b] mb-4 flex items-center justify-between">
              <span>Bou &amp; Co</span>
              <ArrowUpRight size={14} className="opacity-40" />
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#bou-and-co" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  For companies
                </a>
              </li>
              <li>
                <a href="#bou-and-co" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  For freelancers
                </a>
              </li>
              <li>
                <a href="mailto:freelancers@wearebou.com" className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline">
                  freelancers@wearebou.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#84939b] mb-4">
              <span>Social</span>
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a
                  href="https://www.instagram.com/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-[#2d393e] hover:text-[#0f1417] transition-colors no-underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Dark Department Bar */}
      <div className="bg-[#0c1012] text-white py-12 px-6 md:px-8 border-t border-white/10">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8e9ca3] mb-1.5">
                New business
              </span>
              <a href="mailto:holla@wearebou.com" className="text-[14.5px] font-semibold text-white hover:text-purple-400 transition-colors no-underline">
                holla@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8e9ca3] mb-1.5">
                PR &amp; Talks
              </span>
              <a href="mailto:press@wearebou.com" className="text-[14.5px] font-semibold text-white hover:text-purple-400 transition-colors no-underline">
                press@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8e9ca3] mb-1.5">
                Work inquiries
              </span>
              <a href="mailto:work@wearebou.com" className="text-[14.5px] font-semibold text-white hover:text-purple-400 transition-colors no-underline">
                work@wearebou.com
              </a>
            </div>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8e9ca3] mb-1.5">
                Invoicing
              </span>
              <span className="text-[14.5px] font-semibold text-white">
                Apix Messaging
              </span>
            </div>

            <div className="flex flex-col justify-between text-[12px] text-[#8e9ca3]">
              <div className="flex items-center gap-4 mb-2">
                <a href="#privacy" className="hover:text-white transition-colors no-underline">
                  Privacy notice
                </a>
                <a href="#consent" className="hover:text-white transition-colors no-underline">
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

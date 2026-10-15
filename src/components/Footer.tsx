"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "../styles/footer.css";

interface FooterProps {
  onOpenContact: (department?: string) => void;
  onSelectCaseById: (caseId: string) => void;
}

export default function Footer({ onOpenContact, onSelectCaseById }: FooterProps) {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* 6-Column Navigation Grid */}
        <div className="footer-nav-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Company</span>
              <ArrowUpRight size={15} />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact()}
                  className="footer-link"
                  style={{ textAlign: "left" }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Work</span>
              <ArrowUpRight size={15} />
            </h4>
            <ul className="footer-link-list">
              <li>
                <button
                  onClick={() => onSelectCaseById("hayday")}
                  className="footer-link"
                  style={{ textAlign: "left" }}
                >
                  Case: Hay Day
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCaseById("rovio")}
                  className="footer-link"
                  style={{ textAlign: "left" }}
                >
                  Case: Rovio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCaseById("polestar")}
                  className="footer-link"
                  style={{ textAlign: "left" }}
                >
                  Case: Polestar
                </button>
              </li>
              <li>
                <a href="#work" className="footer-link">
                  More work
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Clients</span>
              <ArrowUpRight size={15} />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#clients" className="footer-link">
                  Established brands
                </a>
              </li>
              <li>
                <a href="#clients" className="footer-link">
                  Growing brands
                </a>
              </li>
              <li>
                <a href="#clients" className="footer-link">
                  New brands
                </a>
              </li>
              <li>
                <a href="#clients" className="footer-link">
                  All clients
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Services</span>
              <ArrowUpRight size={15} />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#services" className="footer-link">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Design
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Communications &amp; PR
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Branding
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Launches
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Bou &amp; Co</span>
              <ArrowUpRight size={15} />
            </h4>
            <ul className="footer-link-list">
              <li>
                <a href="#bou-and-co" className="footer-link">
                  For companies
                </a>
              </li>
              <li>
                <a href="#bou-and-co" className="footer-link">
                  For freelancers
                </a>
              </li>
              <li>
                <a href="mailto:freelancers@wearebou.com" className="footer-link">
                  freelancers@wearebou.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Social</span>
            </h4>
            <ul className="footer-link-list">
              <li>
                <a
                  href="https://www.instagram.com/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wearebou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Dark Department Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-channels-grid">
            <div className="footer-channel-item">
              <span className="channel-label">New business</span>
              <a href="mailto:holla@wearebou.com" className="channel-email">
                holla@wearebou.com
              </a>
            </div>

            <div className="footer-channel-item">
              <span className="channel-label">PR &amp; Talks</span>
              <a href="mailto:press@wearebou.com" className="channel-email">
                press@wearebou.com
              </a>
            </div>

            <div className="footer-channel-item">
              <span className="channel-label">Work inquiries</span>
              <a href="mailto:work@wearebou.com" className="channel-email">
                work@wearebou.com
              </a>
            </div>

            <div className="footer-channel-item">
              <span className="channel-label">Invoicing</span>
              <span className="channel-email" style={{ cursor: "default" }}>
                Apix Messaging
              </span>
            </div>

            <div className="footer-legal-col">
              <div className="footer-legal-links">
                <a href="#privacy">Privacy notice</a>
                <a href="#consent">Edit consent</a>
              </div>
              <div>© 2026 Bou. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

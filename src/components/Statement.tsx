"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import "../styles/statement.css";

interface StatementProps {
  onOpenAbout: () => void;
}

export default function Statement({ onOpenAbout }: StatementProps) {
  return (
    <section className="statement-section" id="about">
      <div className="container">
        <div className="statement-inner">
          <h2 className="statement-lead">
            We’re building a <strong>benchmark agency</strong> to make the creative industry even more creative
          </h2>

          <div className="statement-actions">
            <button
              onClick={onOpenAbout}
              className="btn-pill btn-pill-light"
              id="statement-about-btn"
            >
              <span>About us</span>
              <div className="icon-circle">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { CLIENT_LOGOS, CLIENT_QUOTES } from "@/data/clients";
import "../styles/clients.css";

interface ClientsMatrixProps {
  onSelectCaseById: (caseId: string) => void;
}

export default function ClientsMatrix({ onSelectCaseById }: ClientsMatrixProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === 0 ? CLIENT_QUOTES.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev === CLIENT_QUOTES.length - 1 ? 0 : prev + 1));
  };

  const currentQuote = CLIENT_QUOTES[currentQuoteIndex];

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        <div className="clients-header">
          <h2 className="clients-title">
            We work with <strong>200+ brands</strong> around Europe and the US, including:
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="clients-grid">
          {CLIENT_LOGOS.map((client) => (
            <div key={client.name} className="client-logo-card">
              <span className="client-logo-name">{client.name}</span>
              <span className="client-logo-category">{client.category}</span>
            </div>
          ))}
        </div>

        {/* Quotes Carousel */}
        <div className="quotes-carousel">
          <div className="quote-content">
            <p className="quote-statement">“{currentQuote.quote}”</p>

            <div className="quote-footer">
              <div className="quote-author-info">
                <span className="quote-author-name">{currentQuote.author}</span>
                <span className="quote-author-role">
                  {currentQuote.role}, {currentQuote.brand}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {currentQuote.caseLink && (
                  <button
                    onClick={() => onSelectCaseById(currentQuote.caseLink!)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: "#0F1417",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    <span>Read full case</span>
                    <ArrowUpRight size={14} />
                  </button>
                )}

                <div className="quote-controls">
                  <div className="quote-dots">
                    {CLIENT_QUOTES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuoteIndex(idx)}
                        className={`quote-dot ${idx === currentQuoteIndex ? "active" : ""}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={prevQuote}
                    className="quote-nav-btn"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextQuote}
                    className="quote-nav-btn"
                    aria-label="Next quote"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

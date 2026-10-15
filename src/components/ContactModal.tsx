"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import "../styles/contact.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
  onSuccessToast: (msg: string) => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultCity,
  onSuccessToast,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const servicesOptions = [
    "Branding",
    "Design",
    "Marketing",
    "Communications & PR",
    "Web Development",
    "Launches",
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSuccessToast("Thanks for reaching out! We'll reply within 24 hours.");
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="contact-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "#F4F6F5",
            border: "none",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Close contact modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="contact-success-state">
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#E6F7ED",
                color: "#15803D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#0F1417" }}>Message Received</h3>
            <p style={{ color: "#55626A", maxWidth: "400px", lineHeight: "1.5" }}>
              Thank you {name ? name : "for writing"}. Our partnerships team in{" "}
              {defaultCity ? defaultCity : "Helsinki & London"} will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#8E9CA3", textTransform: "uppercase" }}>
                Let's Build Together
              </span>
              <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.025em", color: "#0F1417", marginTop: "4px" }}>
                Start a conversation
              </h2>
              <p style={{ fontSize: "15px", color: "#55626A", marginTop: "6px" }}>
                Whether you’re launching something new or transforming an established category leader.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="contact-form-group">
                  <label className="contact-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Lin"
                    className="contact-input"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-label">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@company.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">Company / Organization</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Tech"
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">What can we help you build?</label>
                <div className="contact-services-pills">
                  {servicesOptions.map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`contact-pill-selectable ${
                        selectedServices.includes(svc) ? "selected" : ""
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">Tell us about your project</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Timeline, goals, scope, or questions..."
                  className="contact-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-pill btn-pill-light"
                style={{ width: "100%", justifyContent: "center", padding: "14px 24px", marginTop: "12px" }}
              >
                <span>Send message</span>
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
